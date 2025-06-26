"use client";
import Cartao from "@/components/Cartao/cartao";
import Link from "next/link"; 
import { useState } from "react";

export default function Home() {

  const [contador, setContador] = useState(0)
  function aumentar(){
    setContador(contador +1)

  }


  return (
    <div>
      <Cartao titulo = "CARTAO DE DEBITO DO GERENTE DA CREFISA CLIQUE AQUI"/>
      <Link href="/pages/sobre">Sobre</Link>
  <h2>{contador}</h2>
    <button onClick={aumentar}>Adicionar</button>
    </div>
  );
}
