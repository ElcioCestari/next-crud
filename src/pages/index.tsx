import Layout from "../components/layout";
import Tabela from "../components/tabela";
import Cliente from "../core/cliente";

export default function Home() {
  const clientes = [new Cliente("Ana", 31, "1"), new Cliente("Pedro", 30, "2")];

  const clienteSelecionado = (cliente: Cliente) => {
    console.log(cliente.nome);
  };
  const clienteExcluido = (cliente: Cliente) => {};

  return (
    <div
      className={`flex justify-center items-center
        h-screen bg-gradient-to-r from-blue-500 to-purple-500
        text-white
      `}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  );
}
