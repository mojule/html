'use strict';

var hinfo = require('hinfo');

var nodeDefs = {
  "#document": {
    "content": ["#documentType", "<html>"]
  },
  "#documentType": {
    "parent": ["#document"]
  },
  "#text": {
    "categories": ["flow content", "phrasing content", "palpable content"]
  },
  '#comment': {
    "categories": ["flow content"]
  },
  '#documentFragment': {
    "content": ["flow content"]
  }
};

var ensureArray = function ensureArray(obj, name) {
  if (!Array.isArray(obj[name])) obj[name] = [];
};

var ensureProperties = function ensureProperties(def) {
  ensureArray(def, 'categories');
  ensureArray(def, 'content');
  ensureArray(def, 'parent');
};

var defaultDefs = Object.assign(hinfo(), nodeDefs);

var Html = function Html() {
  var defs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultDefs;

  defs = JSON.parse(JSON.stringify(defs));

  var _tagNames = Object.keys(defs);

  var hasCategory = function hasCategory(tagName, categoryName) {
    return defs[tagName].categories.includes(categoryName);
  };

  var predicates = {
    empty: function empty(tagName) {
      return defs[tagName].content.length === 0;
    },
    metadata: function metadata(tagName) {
      return hasCategory(tagName, 'metadata content');
    },
    inline: function inline(tagName) {
      return hasCategory(tagName, 'phrasing content');
    },
    embedded: function embedded(tagName) {
      return hasCategory(tagName, 'embedded content');
    },
    block: function block(tagName) {
      return hasCategory(tagName, 'flow content') && !predicates.inline(tagName);
    },
    container: function container(tagName) {
      return !predicates.empty(tagName);
    }
  };

  var doesAccept = function doesAccept(tagName, childTagName) {
    if (predicates.empty(tagName)) return false;

    var def = defs[tagName];
    var childDef = defs[childTagName];

    if (childDef.parent.includes('<' + tagName + '>')) return true;

    if (def.content.includes('<' + childTagName + '>') || def.content.includes('#' + childTagName)) return true;

    return childDef.categories.some(function (category) {
      return def.content.includes(category);
    });
  };

  var predicateNames = Object.keys(predicates);

  var maps = {
    accepts: {}
  };

  predicateNames.forEach(function (name) {
    return maps[name] = {};
  });

  var allCategories = [];

  _tagNames.forEach(function (tagName) {
    var def = defs[tagName];

    ensureProperties(def);

    allCategories = allCategories.concat(def.categories);

    predicateNames.forEach(function (predicateName) {
      return maps[predicateName][tagName] = predicates[predicateName](tagName);
    });

    maps.accepts[tagName] = {};

    _tagNames.forEach(function (childTagName) {
      ensureProperties(defs[childTagName]);

      maps.accepts[tagName][childTagName] = doesAccept(tagName, childTagName);
    });
  });

  var _categoryNames = Array.from(new Set(allCategories)).sort();

  var api = {
    tagNames: function tagNames() {
      return _tagNames;
    },
    categoryNames: function categoryNames() {
      return _categoryNames;
    },
    isEmpty: function isEmpty(tagName) {
      return maps.empty[tagName];
    },
    isMetadata: function isMetadata(tagName) {
      return maps.metadata[tagName];
    },
    isInline: function isInline(tagName) {
      return maps.inline[tagName];
    },
    isEmbedded: function isEmbedded(tagName) {
      return maps.embedded[tagName];
    },
    isBlock: function isBlock(tagName) {
      return maps.block[tagName];
    },
    isContainer: function isContainer(tagName) {
      return maps.container[tagName];
    },
    accepts: function accepts(tagName, childTagName) {
      return maps.accepts[tagName][childTagName];
    },
    def: function def(tagName) {
      if (defs[tagName]) return JSON.parse(JSON.stringify(defs[tagName]));
    }
  };

  return api;
};

module.exports = Html;