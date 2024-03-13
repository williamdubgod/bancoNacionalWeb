"use client"

import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function NavBar() {
    const { push } = useRouter()
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () =>{
        logout()
        push("/")
    }

    return (
        <nav className="flex items-center justify-between bg-green-600 p-6">
            <ul className="flex items-end gap-14 text-white"> {/* Alteração feita aqui */}
                <li>
                    <Link href="/">
                        <h1 className="text-2xl text-white">Banco Nacional</h1> {/* Alteração feita aqui */}
                    </Link>
                </li>
                <li>
                    <Link href="#">menu</Link>
                </li>
                <li>
                    <Link href="/categorias" className="text-white">categorias</Link> {/* Alteração feita aqui */}
                </li>
                <li><Link href="/movimentacoes">movimentações</Link></li>
            </ul>

            <div className="flex gap-2 items-center">
                {user?.email}
                <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img src="https://github.com/gustavo-guarnieri-de-melo.png" alt="avatar do usuário" />
                </div>
                <button onClick={handleLogout}>logout</button>
            </div>
        </nav>

    )
}
