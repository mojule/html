'use strict'

const assert = require( 'assert' )
const is = require( '@mojule/is' )
const html = require( '../src' )

describe( 'HTML info', () => {
  it( 'tagNames', () => {
    const tagNames = html.tagNames()

    assert( is.array( tagNames ) )
    assert( tagNames.includes( 'div' ) )
    assert( tagNames.includes( '#text' ) )
  })

  it( 'categoryNames', () => {
    const categoryNames = html.categoryNames()

    assert( is.array( categoryNames ) )
    assert( categoryNames.includes( 'metadata content' ) )
  })

  it( 'isEmpty', () => {
    assert( html.isEmpty( 'img' ) )
    assert( !html.isEmpty( 'div' ) )
    assert.equal( html.isEmpty( 'nope' ), undefined )
  })

  it( 'isMetadata', () => {
    assert( html.isMetadata( 'meta' ) )
    assert( !html.isMetadata( 'div' ) )
    assert.equal( html.isMetadata( 'nope' ), undefined )
  })

  it( 'isInline', () => {
    assert( html.isInline( 'span' ) )
    assert( html.isInline( '#text' ) )
    assert( !html.isInline( 'div' ) )
    assert.equal( html.isInline( 'nope' ), undefined )
  })

  it( 'isEmbedded', () => {
    assert( html.isEmbedded( 'img' ) )
    assert( !html.isEmbedded( 'div' ) )
    assert.equal( html.isEmbedded( 'nope' ), undefined )
  })

  it( 'isBlock', () => {
    assert( !html.isBlock( 'span' ) )
    assert( !html.isBlock( '#text' ) )
    assert( html.isBlock( 'div' ) )
    assert.equal( html.isBlock( 'nope' ), undefined )
  })

  it( 'isContainer', () => {
    assert( !html.isContainer( 'img' ) )
    assert( html.isContainer( 'div' ) )
    assert.equal( html.isContainer( 'nope' ), undefined )
  })

  it( 'accepts', () => {
    assert( !html.accepts( 'img', 'div' ) )
    assert( html.accepts( 'div', 'img' ) )
    assert.equal( html.accepts( 'nope', 'div' ), undefined )
    assert.equal( html.accepts( 'div', 'nope' ), undefined )
  })

  it( 'def', () => {
    assert( is.object( html.def( 'div' ) ) )
    assert.equal( html.def( 'nope' ), undefined )
  })

  it( 'documentFragment accepts everything', () => {
    html.tagNames().forEach( childName => {
      assert( html.accepts( '#document-fragment', childName ) )
    })
  })
})