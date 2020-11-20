const { expect } = require('@jest/globals')
const sum = require('./sum')

test('Numbers added successfully', () =>{
    expect(
        sum(1, 2)
        ).toBe*(3)
})