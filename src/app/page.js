"use client"

import Image from 'next/image'
import { useForm } from "react-hook-form"

import Button from '@/components/button'
import InputText from '@/components/input-text'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import login from "@/assets/login.jpg"

export default function Home() {
  const { push } = useRouter()
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    const resp = await login(data.email, data.senha)
    
    if (resp?.error) {
      toast.error(resp.error)
      return
    }

    push("/dashboard")

  }

  return (
    <>
    <div className='flex h-screen bg-green-600'> 
      <aside className='hidden lg:flex w-1/2'>
        <div className="w-full h-full relative">
          <Image src={login} alt="Imagem de Login" layout="fill" objectFit="cover" />
        </div>
      </aside>
      
      <main className="flex flex-col justify-center items-center w-1/2 mt-10 mx-auto rounded p-4">
        <h2 className="mb-8 text-4xl">Banco Nacional</h2>
        <form className='flex flex-col gap-4 p-4' onSubmit={handleSubmit(onSubmit)}>
          <InputText label="Email" register={register} name="email" />
          <InputText label="Senha" register={register} name="senha" type="password" />
          <Button type='submit'>Entrar</Button>
        </form>
      </main>
    </div>
    </>
  )
} 