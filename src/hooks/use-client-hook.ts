import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/cliente";
import ClienteRepository from "../core/ClienteRepository";
 
const useClientHook= () => {
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
  
    const selecionarCliente = (cliente: Cliente) => {
      setCliente(cliente);
      setVisivel("form");
    };
    const excluirCliente = async (cliente: Cliente) => {
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
    const novoCliente = () => {
        setVisivel("form");
        setCliente(Cliente.vazio());
      }

    return {
        cliente,
        clientes,
        visivel,
        setVisivel,
        selecionarCliente,
        excluirCliente,
        salvarCliente,
        novoCliente,
        obterTodos,
    };
}
 
export default useClientHook;