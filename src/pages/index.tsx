import Botao from "../components/botao";
import Formulario from "../components/formulario";
import Layout from "../components/layout";
import Tabela from "../components/tabela";
import useClientHook from "../hooks/use-client-hook";

export default function Home() {
  const {
    excluirCliente,
    novoCliente,
    selecionarCliente,
    obterTodos,
    salvarCliente,
    cliente,
    clientes,
    visivel,
    setVisivel,
  } = useClientHook();

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
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
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
