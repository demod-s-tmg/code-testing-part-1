import { ERROR_MESSAGES } from "./error-messages.js";

export function sayHello(name) { 
    if (typeof name !== "string") {
        throw new Error(ERROR_MESSAGES.stringError);
    }
    return `Hello, ${name.toUpperCase()}!`;
}

//console.log(sayHello("Robert")); 
