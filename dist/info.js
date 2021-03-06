'use strict';

module.exports = {
  "html": {
    "content": ["<head>", "<body>"],
    "singular": true
  },
  "head": {
    "content": ["metadata content"],
    "parent": ["<html>"],
    "singular": true
  },
  "body": {
    "categories": ["sectioning root"],
    "content": ["flow content"],
    "parent": ["<html>"],
    "singular": true
  },

  "title": {
    "categories": ["metadata content"],
    "content": ["#text"],
    "parent": ["<head>"],
    "singular": true
  },
  "base": {
    "categories": ["metadata content"],
    "parent": ["<head>"],
    "singular": true
  },
  "link": {
    "categories": ["metadata content"],
    "parent": ["<head>"]
  },
  "meta": {
    "categories": ["metadata content"],
    "parent": ["<head>"]
  },
  "style": {
    "categories": ["metadata content"],
    "content": ["#text"],
    "parent": ["<head>"]
  },

  "address": {
    "categories": ["flow content", "palpable content"],
    "content": ["flow content"],
    "disallow": ["<address>", "heading content", "sectioning content", "<header>", "<footer>"]
  },
  "article": {
    "categories": ["flow content", "sectioning content", "palpable content"],
    "content": ["flow content"],
    "disallow": ["<main>"],
    "nospec": ["4.01"]
  },
  "aside": {
    "categories": ["flow content", "sectioning content", "palpable content"],
    "content": ["flow content"],
    "disallow": ["<main>"],
    "nospec": ["4.01"]
  },
  "footer": {
    "categories": ["flow content", "palpable content"],
    "content": ["flow content"],
    "disallow": ["<footer>", "<header>", "<main>"],
    "nospec": ["4.01"]
  },
  "header": {
    "categories": ["flow content", "palpable content"],
    "content": ["flow content"],
    "disallow": ["<footer>", "<header>", "<main>"],
    "nospec": ["4.01"]
  },
  "h1": {
    "categories": ["flow content", "heading content", "palpable content"],
    "content": ["phrasing content"]
  },
  "h2": {
    "categories": ["flow content", "heading content", "palpable content"],
    "content": ["phrasing content"]
  },
  "h3": {
    "categories": ["flow content", "heading content", "palpable content"],
    "content": ["phrasing content"]
  },
  "h4": {
    "categories": ["flow content", "heading content", "palpable content"],
    "content": ["phrasing content"]
  },
  "h5": {
    "categories": ["flow content", "heading content", "palpable content"],
    "content": ["phrasing content"]
  },
  "h6": {
    "categories": ["flow content", "heading content", "palpable content"],
    "content": ["phrasing content"]
  },
  "nav": {
    "categories": ["flow content", "sectioning content", "palpable content"],
    "content": ["flow content"],
    "disallow": ["<main>"],
    "nospec": ["4.01"]
  },

  "blockquote": {
    "categories": ["flow content", "sectioning root", "palpable content"],
    "content": ["flow content"]
  },
  "dd": {
    "content": ["flow content"],
    "parent": ["<dl>"],
    "previous": ["<dt>", "<dd>"]
  },
  "div": {
    "categories": ["flow content", "palpable content"],
    "content": ["flow content"]
  },
  "dl": {
    "categories": ["flow content"],
    "content": ["<dt>", "<dd>"]
  },
  "dt": {
    "content": ["flow content"],
    "parent": ["<dl>"],
    "disallow": ["<footer>", "<header>", "sectioning content", "heading content"],
    "next": ["<dt>", "<dd>"]
  },
  "figcaption": {
    "content": ["flow content"],
    "parent": ["<figure>"],
    "position": ["first", "last"],
    "nospec": ["4.01"]
  },
  "figure": {
    "categories": ["flow content", "sectioning root", "palpable content"],
    "content": ["flow content", "<figcaption>"],
    "nospec": ["4.01"]
  },
  "hr": {
    "categories": ["flow content"]
  },
  "li": {
    "content": ["flow content"],
    "parent": ["<ul>", "<ol>", "<menu>"]
  },
  "main": {
    "categories": ["flow content", "palpable content"],
    "content": ["flow content"],
    "nospec": ["4.01"]
  },
  "ol": {
    "categories": ["flow content"],
    "content": ["<li>"],
    "states": {
      ":not(:empty)": {
        "categories": ["palpable content"]
      }
    }
  },
  "p": {
    "categories": ["flow content", "palpable content"],
    "content": ["phrasing content"]
  },
  "pre": {
    "categories": ["flow content", "palpable content"],
    "content": ["phrasing content"]
  },
  "section": {
    "categories": ["flow content", "sectioning content", "palpable content"],
    "content": ["flow content"],
    "nospec": ["4.01"]
  },
  "ul": {
    "categories": ["flow content"],
    "content": ["<li>"],
    "states": {
      ":not(:empty)": {
        "categories": ["palpable content"]
      }
    }
  },

  "a": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["flow content", "phrasing content"],
    "disallow": ["interactive content"],
    "states": {
      "[href]": {
        "categories": ["interactive content"]
      }
    }
  },
  "abbr": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "b": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "bdi": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"],
    "nospec": ["4.01"]
  },
  "bdo": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"],
    "nospec": ["4.01"]
  },
  "br": {
    "categories": ["flow content", "phrasing content"]
  },
  "cite": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "code": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "data": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"],
    "nospec": ["4.01"]
  },
  "dfn": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"],
    "disallow": ["<dfn>"]
  },
  "em": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "i": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "kbd": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "mark": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"],
    "nospec": ["4.01"]
  },
  "q": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "rp": {
    "content": ["phrasing content"],
    "parent": ["<ruby>"],
    "nospec": ["4.01"]
  },
  "rt": {
    "content": ["phrasing content"],
    "parent": ["<ruby>", "<rtc>"],
    "nospec": ["4.01"]
  },
  "rtc": {
    "content": ["phrasing content", "<rt>"],
    "parent": ["<ruby>"],
    "nospec": ["4.01"]
  },
  "ruby": {
    "categories": ["flow content", "phrasing content"],
    "content": ["phrasing content", "<rp>", "<rt>", "<rtc>"],
    "nospec": ["4.01"]
  },
  "s": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "samp": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "small": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "span": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "strong": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "sub": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "sup": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "time": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"],
    "nospec": ["4.01"]
  },
  "u": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "var": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["phrasing content"]
  },
  "wbr": {
    "categories": ["flow content", "phrasing content"],
    "nospec": ["4.01"]
  },

  "area": {
    "categories": ["flow content", "phrasing content"],
    "ancestor": ["<map>"]
  },
  "audio": {
    "categories": ["flow content", "phrasing content", "embedded content"],
    "content": ["transparent", "<track>"],
    "disallow": ["<audio>", "<video>"],
    "states": {
      "[controls]": {
        "categories": ["interactive content", "palpable content"]
      },
      ":not([src])": {
        "content": ["<source>"]
      }
    },
    "nospec": ["4.01"]
  },
  "map": {
    "categories": ["flow content", "phrasing content", "palpable content"],
    "content": ["transparent", "<area>"]
  },
  "track": {
    "parent": ["<audio>", "<video>"],
    "nospec": ["4.01"]
  },
  "video": {
    "categories": ["flow content", "phrasing content", "embedded content"],
    "content": ["transparent", "<track>"],
    "disallow": ["<audio>", "<video>"],
    "states": {
      "[controls]": {
        "categories": ["interactive content", "palpable content"]
      },
      ":not([src])": {
        "content": ["<source>"]
      }
    },
    "nospec": ["4.01"]
  },

  "embed": {
    "categories": ["flow content", "phrasing content", "embedded content", "interactive content", "palpable content"],
    "nospec": ["4.01"]
  },
  "iframe": {
    "categories": ["flow content", "phrasing content", "embedded content", "interactive content", "palpable content"],
    "content": ["phrasing content"],
    "disallow": ["<script>"]
  },
  "img": {
    "categories": ["flow content", "phrasing content", "embedded content", "palpable content"],
    "states": {
      "[usemap]": {
        "categories": ["interactive content"]
      }
    }
  },
  "object": {
    "categories": ["flow content", "phrasing content", "embedded content", "palpable content", "form-associated content", "listed", "submittable"],
    "content": ["transparent", "<param>"],
    "states": {
      "[usemap]": {
        "categories": ["interactive content"]
      }
    }
  },
  "param": {
    "parent": ["<object>"]
  },
  "source": {
    "parent": ["<picture>", "<audio>", "<video>"],
    "position": ["first"],
    "nospec": ["4.01"]
  },

  "canvas": {
    "categories": ["flow content", "phrasing content", "embedded content", "palpable content"],
    "content": ["transparent"],
    "nospec": ["4.01"]
  },
  "noscript": {
    "categories": ["flow content", "phrasing content", "metadata content"],
    "disallow": ["<noscript>"],
    "states": {
      "head > noscript": {
        "content": ["<link>", "<style>", "<meta>"]
      },
      ":not( head > noscript )": {
        "content": ["transparent"]
      }
    }
  },
  "script": {
    "categories": ["flow content", "phrasing content", "metadata content"],
    "content": ["#text"]
  },
  "template": {
    "categories": ["metadata content", "flow content", "phrasing content"],
    "content": ["*"],
    "parent": ["body", "head", "colgroup"],
    "nospec": ["4.01"]
  },

  "del": {
    "categories": ["flow content", "phrasing content"],
    "content": ["transparent"]
  },
  "ins": {
    "categories": ["flow content", "phrasing content"],
    "content": ["transparent"]
  },

  "caption": {
    "content": ["flow content"],
    "parent": ["<table>"],
    "position": ["first"]
  },
  "col": {
    "parent": ["<colgroup>"]
  },
  "colgroup": {
    "parent": ["<table>"],
    "states": {
      ":not([span])": {
        "content": ["<col>"]
      }
    }
  },
  "table": {
    "categories": ["flow content"],
    "content": ["<caption>", "<colgroup>", "<thead>", "<tbody>", "<tfoot>", "<tr>"]
  },
  "tbody": {
    "content": ["<tr>"],
    "parent": ["<table>"]
  },
  "td": {
    "content": ["flow content", "phrasing content"],
    "parent": ["<tr>"]
  },
  "tfoot": {
    "content": ["<tr>"],
    "parent": ["<table>"]
  },
  "th": {
    "content": ["phrasing content"],
    "parent": ["<tr>"]
  },
  "thead": {
    "content": ["<tr>"],
    "parent": ["<table>"]
  },
  "tr": {
    "content": ["<th>", "<td>"],
    "parent": ["<table>", "<thead>", "<tbody>", "<tfoot>"]
  },

  "button": {
    "categories": ["flow content", "phrasing content", "interactive content", "form-associated content", "listed", "labelable", "submittable", "palpable content"],
    "content": ["phrasing content"]
  },
  "datalist": {
    "categories": ["flow content", "phrasing content"],
    "content": ["phrasing content", "<option>"],
    "nospec": ["4.01"]
  },
  "fieldset": {
    "categories": ["flow content", "sectioning root", "form-associated content", "listed", "palpable content"],
    "content": ["<legend>", "flow content"]
  },
  "form": {
    "categories": ["flow content", "palpable content"],
    "content": ["flow content"],
    "disallow": ["<form>"]
  },
  "input": {
    "categories": ["flow content", "phrasing content", "form-associated content", "listed", "submittable", "resettable"],
    "states": {
      ":not([type=hidden])": {
        "categories": ["labelable", "palpable content"]
      }
    }
  },
  "label": {
    "categories": ["flow content", "phrasing content", "interactive content", "form-associated content", "palpable content"],
    "content": ["phrasing content"],
    "disallow": ["<label>"]
  },
  "legend": {
    "content": ["phrasing content"],
    "parent": ["<fieldset>"],
    "position": ["first"]
  },
  "meter": {
    "categories": ["flow content", "phrasing content", "form-associated content", "labelable", "palpable content"],
    "content": ["phrasing content"],
    "disallow": ["<meter>"],
    "nospec": ["4.01"]
  },
  "optgroup": {
    "content": ["<option>"],
    "parent": ["<select>"]
  },
  "option": {
    "content": ["#text"],
    "parent": ["<select>", "<optgroup>", "<datalist>"]
  },
  "output": {
    "categories": ["flow content", "phrasing content", "form-associated content", "listed", "labelable", "resettable", "palpable content"],
    "content": ["phrasing content"],
    "nospec": ["4.01"]
  },
  "progress": {
    "categories": ["flow content", "phrasing content", "form-associated content", "labelable", "palpable content"],
    "content": ["phrasing content"],
    "disallow": ["<progress>"],
    "nospec": ["4.01"]
  },
  "select": {
    "categories": ["flow content", "phrasing content", "interactive content", "form-associated content", "listed", "labelable", "submittable", "resettable"],
    "content": ["<optgroup>", "<option>"]
  },
  "textarea": {
    "categories": ["flow content", "phrasing content", "interactive content", "form-associated content", "listed", "labelable", "submittable", "resettable"],
    "content": ["#text"]
  },

  "details": {
    "categories": ["flow content", "sectioning root", "interactive content", "palpable content"],
    "content": ["<summary>", "flow content"],
    "nospec": ["4.01", "5"],
    "experimental": true
  },
  "dialog": {
    "categories": ["flow content", "sectioning root"],
    "content": ["flow content"],
    "nospec": ["4.01", "5"],
    "experimental": true
  },
  "hgroup": {
    "categories": ["flow content", "heading content", "palpable content"],
    "content": ["<h1>", "<h2>", "<h3>", "<h4>", "<h5>", "<h6>"],
    "nospec": ["4.01", "5"],
    "experimental": true
  },
  "menu": {
    "categories": ["flow content"],
    "states": {
      "[type=list], :not([type])": {
        "categories": ["palpable content"],
        "content": ["flow content", "<li>", "<script>", "<template>"]
      },
      "[type=menu]": {
        "content": ["<script>", "<template>", "<menu>", "<menuitem>", "<hr>"]
      }
    },
    "nospec": ["4.01", "5"],
    "experimental": true
  },
  "menuitem": {
    "parent": ["<menu>"],
    "nospec": ["4.01", "5"],
    "experimental": true
  },
  "picture": {
    "categories": ["flow content", "phrasing content", "embedded content"],
    "content": ["<source>", "<img>"],
    "nospec": ["4.01", "5", "5.1"],
    "experimental": true
  },
  "shadow": {
    "content": ["flow content"],
    "nospec": ["4.01", "5", "5.1", "LS"],
    "experimental": true
  },
  "summary": {
    "content": ["phrasing content", "heading content"],
    "parent": ["<details>"],
    "nospec": ["4.01", "5"],
    "experimental": true
  }
};