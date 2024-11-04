import { buttonVariants } from "../../../components/ui/button"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { get } from "http";



const Navbar = async() =>{
        const {getUser} = getKindeServerSession()
        const user = await getUser()
        const isAdmin = user?.email === process.env.ADMIN_EMAIL

    return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b
              border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>   
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link href="/" className="flex z-40 font-semibold">
                case <span className="text-green-500"> cobra</span>
                </Link> 

                <div className="h-full flex items-center space-x-4">
                    {user ?( 
                        <>
                            <LogoutLink  className={buttonVariants(
                                                {size:'sm',
                                                variant:'ghost',

                                                })}>Sign out
                            </LogoutLink>
                            {isAdmin ? <Link href='/dashboard' className={buttonVariants(
                                                {size:'sm',
                                                variant:'ghost',

                                                })}>Dashboard 
                            </Link>: null}
                            <Link href='/configure/upload' className={buttonVariants(
                                                {size:'sm',
                                                className:"hidden sm:flex items-center gap-1",
                                                })}>Create Case
                                <ArrowRight className="ml-1.5 h-5 w-5" />
                            </Link>
                        </>
                    ):
                    (
                        
                            <>
                            <RegisterLink postLoginRedirectURL="/" className={buttonVariants(
                                                {size:'sm',
                                                variant:'ghost',

                                                })}>Sign up
                            </RegisterLink>
                        
                            <LoginLink postLoginRedirectURL="/" className={buttonVariants(
                                                {size:'sm',
                                                variant:'ghost',

                                                })}>Login
                            </LoginLink>
                            
                           <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                           <Link href='/configure/upload' className={buttonVariants(
                                                {size:'sm',

                                                className:"hidden sm:flex items-center gap-1 p-[5px] text-white bg-green-600 hover:bg-gray-600 rounded-md " ,

                                                })}>Create Case
                                <ArrowRight className="ml-1.5 h-5 w-5" />
                            </Link>
                        </>
                        
                    )}
                </div>
            
            </div>

        </MaxWidthWrapper>

    
    
    
    </nav>
)
}

export default Navbar