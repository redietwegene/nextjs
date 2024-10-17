import { FormEvent } from "react";
import { useRouter } from "next/router";

import React from 'react'

const loginPage = () => {
    const router = useRouter()

    async function handlesubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch("",{
            method: 'POST',
            headers: { 'Content-Type': 'application/josn' },
            body:JSON.stringify({email,password})
        })

        if (response.ok) {
            router.push('/profile')
        } else {
            const err= response.json
            console.log(err)
            
        }

    }
    
  return (
    <div>loginPage</div>
  )
}

export default loginPage;