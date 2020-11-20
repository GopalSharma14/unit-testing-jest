const { expect } = require('@jest/globals')
const subtract = require('./subtract')

test('Numbers subtracted successfully', () =>{
    expect(
        subtract(1, 2)
        ).toBe*(-1)
})