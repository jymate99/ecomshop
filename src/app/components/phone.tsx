/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface PhoneProp extends HTMLAttributes<HTMLDivElement> {
    imgSrc:string
    dark?:boolean
}


const Phone =({imgSrc, className, dark = false, ...props }:PhoneProp) =>{

    return (
        <div
        className={cn(
          'relative pointer-events-none z-50 overflow-hidden',
          className
        )}
        {...props}>
            <img src={
          dark
            ? '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png'
        }
        className="pointer-events-none z-50 select-none">
            </img>
            <div className='absolute -z-10 inset-0'>
                <img
                className='object-cover min-w-full min-h-full'
                src={imgSrc}
                alt='overlaying phone image'
                />
            </div>
            </div> )
}

export default Phone