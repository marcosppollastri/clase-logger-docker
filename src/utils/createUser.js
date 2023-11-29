import { nameFormatter } from "./nameFormatter.js";

export function createUser(name, email, category) {
    return {
        name: nameFormatter(name),
        email: email,
        category: category,
    };
}