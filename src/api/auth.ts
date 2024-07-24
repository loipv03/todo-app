import { insntace } from "@/api/instance"

const login = (user: { email: string, password: string }) => {
    return insntace.post('/signin', user, {
        withCredentials: true
    });
}

export const ApiAuth = { login }