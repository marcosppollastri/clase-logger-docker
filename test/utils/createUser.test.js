import chai from 'chai'
import { createUser } from '../../src/utils/createUser.js'

const { expect } = chai

//const assert = Assert.strict

describe('createUser', () => {
    it('Should create User object with formattedName', () => {
        const mockName = 'JUAN PEREZ'
        const mockEmail = 'example@example.com'
        const mockCategory = 'premium'

        const user = createUser(mockName, mockEmail, mockCategory)

        expect(user).to.deep.equal({
            name: 'Juan Perez',
            email: 'example@example.com',
            category: 'premium'
        })
        //assert.equal(formattedName, 'Juan Perez')
    })
})