import chai from 'chai'
import { nameFormatter } from '../../src/utils/nameFormatter.js'

const { expect } = chai

//const assert = Assert.strict

describe('nameFormatter', () => {
    const expectedName = 'Juan Perez'
    it('Should format the name correctly when in Uppercase', () => {
        const mockName = 'JUAN PEREZ'
        const formattedName = nameFormatter(mockName)
        expect(formattedName).to.equal(expectedName)
        //assert.equal(formattedName, 'Juan Perez')
    })
    it('Should format the name correctly when in lowerCase', () => {
        const mockName = 'juan perez'
        const formattedName = nameFormatter(mockName)
        expect(formattedName).to.equal(expectedName)
    })
    it('Should format the name correctly when there are random cases', () => {
        const mockName = 'jUaN PeReZ'
        const formattedName = nameFormatter(mockName)
        expect(formattedName).to.equal(expectedName)
    })
})