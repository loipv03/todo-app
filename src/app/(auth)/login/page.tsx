import Image from "next/image"
import logo from '/public/Logo.png'
import saly from '/public/Saly.png'
import Link from "next/link"
import FormLogin from "@/app/(auth)/login/formLogin"
import { cookies } from 'next/headers'
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"
import { redirect } from "next/navigation"



const Login = async () => {
    const cookie = cookies()
    const token = cookie.getAll().filter((token: RequestCookie) => token.name === 'access_token' || 'refresh_token')

    token.length == 2 && redirect('/')

    return (
        <div className="w-full min-h-screen max-w-full bg-slate-100">
            <div className="lg:w-[170px] max-h-max pt-2 pl-2">
                <Image src={logo} alt="logo" quality={100} className="w-full h-full select-none" />
            </div>
            <div className="w-full h-[660px] grid grid-cols-2 gap-5 justify-items-center">
                <div className="w-full h-full pl-[140px] pt-[120px] relative">
                    <div className="font-semibold text-[50px] select-none ">Sign in to</div>
                    <div className="font-medium text-[25px] select-none ">Project management tools is simple</div>
                    <div className="font-normal text-lg mt-10 select-none">If you don’t have an account register</div>
                    <div className="font-normal text-lg select-none">You can <Link href={'/register'} className="text-[#4D47C3] font-medium">Register here !</Link></div>
                    <div className="w-[300px] absolute bottom-0 right-[-60px]">
                        <Image src={saly} alt="Saly" quality={100} className="w-full h-full select-none" />
                    </div>
                </div>
                <FormLogin />
            </div>
        </div>
    )
}

export default Login

