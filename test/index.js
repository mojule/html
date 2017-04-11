'use strict'

const assert = require( 'assert' )
const is = require( '@mojule/is' )
const info = require( '../src' )

describe( 'HTML info', () => {
  it( 'tagNames', () => {
    const tagNames = info.tagNames()

    assert( is.array( tagNames ) )
    assert( tagNames.includes( 'div' ) )
    assert( tagNames.includes( '#text' ) )
  })

  it( 'categoryNames', () => {
    const categoryNames = info.categoryNames()

    assert( is.array( categoryNames ) )
    assert( categoryNames.includes( 'metadata content' ) )
  })

  it( 'isEmpty', () => {
    assert( info.isEmpty( 'img' ) )
    assert( !info.isEmpty( 'div' ) )
    assert.equal( info.isEmpty( 'nope' ), undefined )
  })

  it( 'isMetadata', () => {
    assert( info.isMetadata( 'meta' ) )
    assert( !info.isMetadata( 'div' ) )
    assert.equal( info.isMetadata( 'nope' ), undefined )
  })

  it( 'isInline', () => {
    assert( info.isInline( 'span' ) )
    assert( info.isInline( '#text' ) )
    assert( !info.isInline( 'div' ) )
    assert.equal( info.isInline( 'nope' ), undefined )
  })

  it( 'isEmbedded', () => {
    assert( info.isEmbedded( 'img' ) )
    assert( !info.isEmbedded( 'div' ) )
    assert.equal( info.isEmbedded( 'nope' ), undefined )
  })

  it( 'isBlock', () => {
    assert( !info.isBlock( 'span' ) )
    assert( !info.isBlock( '#text' ) )
    assert( info.isBlock( 'div' ) )
    assert.equal( info.isBlock( 'nope' ), undefined )
  })

  it( 'isContainer', () => {
    assert( !info.isContainer( 'img' ) )
    assert( info.isContainer( 'div' ) )
    assert.equal( info.isContainer( 'nope' ), undefined )
  })

  it( 'accepts', () => {
    assert( !info.accepts( 'img', 'div' ) )
    assert( info.accepts( 'div', 'img' ) )
    assert.equal( info.accepts( 'nope', 'div' ), undefined )
    assert.equal( info.accepts( 'div', 'nope' ), undefined )
  })

  it( 'def', () => {
    assert( is.object( info.def( 'div' ) ) )
    assert.equal( info.def( 'nope' ), undefined )
  })
})