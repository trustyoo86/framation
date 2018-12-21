'use strict'

import Framation from '../src/Framation'
import * as chai from 'chai'
chai.should()


describe('[Framation test]', () => {
  let ani
  // framation class binding
  before(() => {
    ani = new Framation()
  })

  describe('[Framation constructor test]', () => {
    it('new Framation isAnimation have to false when init', () => {
      ani.isAnimation.should.equal(false)
    })

    it('new Framation enable have to true when init', () => {
      ani.enable.should.equal(true)
    })
  })

  describe('[isIE test]', () => {
    it('isIE is false when useragent is not ie', () => {
      const isIE = ani.isIE
      isIE.should.equal(false)
    })
  })

  describe('[supportjQuery test]', () => {
    it ('support jQuery is undefined when jquery is not support', () => {
      const supportjQuery = !!(ani.supportjQuery)
      !!(supportjQuery).should.equal(false)
    })
  })
})