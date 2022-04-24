import { useState } from "react";
import Botao from "../components/botao";
import Formulario from "../components/formulario";
import Layout from "../components/layout";
import Tabela from "../components/tabela";
import Cliente from "../core/cliente";

export default function Home() {
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState([
    new Cliente("Ana", 31, "1"),
    new Cliente("Pedro", 30, "2"),
  ]);
  const clienteSelecionado = (cliente: Cliente) => {
    setCliente(cliente);
    setVisivel("form");
  };
  const clienteExcluido = (cliente: Cliente) => {};
  const salvarCliente = (cliente: Cliente) => {
    setVisivel("tabela");
    const index = clientes.findIndex((c) => c.id === cliente.id);
    const novoClientes = clientes;
    novoClientes.splice(index, 1, cliente);
    setClientes(novoClientes);
  };

  return (
    <div
      className={`flex justify-center items-center
        h-screen bg-gradient-to-r from-blue-500 to-purple-500
        text-white
      `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao
                cor="green"
                className="mb-4"
                onClick={() => {
                  setVisivel("form");
                  setCliente(Cliente.vazio());
                }}
              >
                Novo cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </div>
  );
}
