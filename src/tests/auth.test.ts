import { describe, expect, test } from 'vitest'

const person = {
    isActive: true,  // Temporarily breaking the test
    age: 32
}

describe("person", () => {
    test("person is defined", () => {
        expect(person).toBeDefined();
    });

    test("is active", () => {
        expect(person.isActive).toBeTruthy();
    })
})