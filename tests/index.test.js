import { describe, it, expect } from "vitest";
import { sayHello } from "../src/index.js";
import { ERROR_MESSAGES } from "../src/error-messages.js";

describe ("testing sayHello fn", () => {
    it("should return 'Hello, ROBERT!'when 'sayhello' fn is called", () => {
        const restult = sayHello("Robert");
        expect(restult).toBe("Hello, ROBERT!");
    })
    it("should throw an error if i provide a number", () => {
        expect(() => sayHello(12)).toThrow(ERROR_MESSAGES.stringError);
    });
    it("should throw an error if i provide an object", () => {
        expect(() => sayHello({name: "Robert", address: "123 Main St"})).toThrow(ERROR_MESSAGES.stringError);
    });
});