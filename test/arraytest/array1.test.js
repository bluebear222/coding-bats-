const array1 = require("../../arrays/array1")




describe('firstLast6 - each', () => {
    /*
    Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
    firstLast6([1, 2, 6]) → true
    firstLast6([6, 1, 2, 3]) → true
    firstLast6([13, 6, 1, 2, 3]) → false
     */
    test.each([
        [[1,2,3], false],
        [[6,6],true],
        [[6, 1, 2, 3],true],
        [[13, 6, 1, 2, 3], false]
    ])('firstLast6(%s) - %s', (input, expected) => {

        const result = array1.firstLast6(input)
        expect(result).toBe(expected)

    })
})

describe('sameFirstLast', () => {

    /*
    Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.
    sameFirstLast([1, 2, 3]) → false
    sameFirstLast([1, 2, 3, 1]) → true
    sameFirstLast([1, 2, 1]) → true

     */

    test.each([
        [[1, 2, 3], false],
        [[1, 2, 3, 1],true],
        [[1, 2, 1],true]

    ])('sameFirst(%s) - %s ',( input, expected) => {

        const result = array1.sameFirstLast(input)
        expect(result).toBe(expected)
    })
})

