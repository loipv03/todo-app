'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ApiAuth } from "@/api/auth"

const formSchema = z.object({
    email: z.string().email().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(6)
})


const FormLogin = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ''
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await ApiAuth.login(values)
        } catch (error) {
            console.error('Login failed', error);
        }
    }



    return (
        <div className="w-[500px] h-max bg-white rounded-[20px] shadow-xl grid gap-y-[30px] justify-center mt-[100px] py-[50px] ">
            <div className="font-medium text-[30px] select-none">Sign in</div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-[400px] max-w-full">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} className="w-full " />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Password" {...field} className="w-full " />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full bg-[#4D47C3] ">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default FormLogin