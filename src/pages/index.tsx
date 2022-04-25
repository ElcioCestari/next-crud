import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/botao";
import Formulario from "../components/formulario";
import Layout from "../components/layout";
import Tabela from "../components/tabela";
import Cliente from "../core/cliente";
import ClienteRepository from "../core/ClienteRepository";

export default function Home() {
  const repository: ClienteRepository = new ColecaoCliente();

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  function obterTodos() {
    repository.obtertodos().then((clientes) => {
      setClientes(clientes);
      setVisivel("tabela");
    });
  }

  useEffect(obterTodos, []);

  const clienteSelecionado = (cliente: Cliente) => {
    setCliente(cliente);
    setVisivel("form");
  };
  const clienteExcluido = async (cliente: Cliente) => {
    await repository.excluir(cliente);
    obterTodos();
  };
  const salvarCliente = async (cliente: Cliente) => {
    
    // const index = clientes.findIndex((c) => c.id === cliente.id);
    // const novoClientes = clientes;
    // novoClientes.splice(index, 1, cliente);

    await repository.salvar(cliente);
    obterTodos();
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
