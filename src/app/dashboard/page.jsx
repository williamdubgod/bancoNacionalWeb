import NavBar from "@/components/navbar";
import Image from "next/image";
import extrato from "@/assets/extrato.png";
import transicao from "@/assets/transicao.png";

export default function Dashboard() {
  return (
    <>
      <NavBar />

      <main className="container bg-green-600 mt-10 mx-auto rounded p-4">
        <h2 className="text-white text-2xl mb-4">Home</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
            <Image src={extrato} alt="Extrato" className="rounded-md mb-2" width={300} height={100} />
            <h3 className="text-gray-800 text-lg font-semibold mb-2">Extrato</h3>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
            <Image src={transicao} alt="Transações" className="rounded-md mb-2" width={300} height={100} />
            <h3 className="text-gray-800 text-lg font-semibold mb-2">Transações</h3>
          </div>
        </div>
      </main>
    </>
  )
}
