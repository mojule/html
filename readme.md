# html

Information about the node types used in HTML - what categories do elements or
nodes belong to, can you put a given node inside another node etc.

Mostly for elements but functions can also take a nodeName eg. #text

## Install

`npm install @mojule/html`

## Example

```javascript
const info = require( '@mojule/html' )

// tagNames() => [string]
console.log( info.tagNames() )

// categoryNames() => [string]
console.log( info.categoryNames() )

// isEmpty( nodeName: string ) => boolean
console.log( info.isEmpty( 'img' ) ) // true
console.log( info.isEmpty( 'div' ) ) // false

// isMetadata( nodeName: string ) => boolean
console.log( info.isMetadata( 'head' ) ) // true
console.log( info.isMetadata( 'div' ) ) // false

// isInline( nodeName: string ) => boolean
console.log( info.isInline( 'span' ) ) // true
console.log( info.isInline( '#text' ) ) // true
console.log( info.isInline( 'div' ) ) // false

// isEmbedded( nodeName: string ) => boolean
console.log( info.isEmbedded( 'img' ) ) // true
console.log( info.isEmbedded( 'div' ) ) // false

// isBlock( nodeName: string ) => boolean
console.log( info.isBlock( 'div' ) )  // true
console.log( info.isBlock( 'span' ) ) // false

// isContainer( nodeName: string )
console.log( info.isContainer( 'div' ) ) // true
console.log( info.isContainer( 'img' ) ) // false

// accepts( parentNodeName: string, childNodeName: string )
console.log( info.accepts( 'div', 'span' ) ) // true
console.log( info.accepts( 'span', 'div' ) ) // false

// def( nodeName ) => object
console.log( info.def( 'div' ) )
```