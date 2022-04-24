import Cliente from "../core/cliente";
import { Delete, Edit } from "./icons";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}
function Tabela(props: TabelaProps) {

  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;
  function cabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Codigo</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="justify-center p-4">Ações</th> : false}
      </tr>
    );
  }

  const renderAcoes = (cliente: Cliente) => {
    return (
      <td className="p-4 flex justify-center">
        {props.clienteSelecionado ? (
          <button onClick={() => props.clienteSelecionado?.(cliente) } className="flex justify-center text-red-500 rounded-full hover:bg-purple-50 p-1">
            {Delete}
          </button>
        ) : (
          false
        )}
        {props.clienteExcluido ? (
          <button onClick={() => props.clienteExcluido?.(cliente)} className="flex justify-center text-green-600 rounded-full hover:bg-purple-50 p-1">
            {Edit}
          </button>
        ) : (
          false
        )}
      </td>
    );
  };

  const dados = () =>
    props.clientes?.map((cliente: Cliente, i) => {
      const color = i % 2 === 0 ? `bg-purple-200` : `bg-purple-300`;
      return (
        <tr className={color} key={cliente.id}>
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          { exibirAcoes ? renderAcoes(cliente) : false}
        </tr>
      );
    });

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100`}
      >
        {cabecalho()}
      </thead>
      <tbody>{dados()}</tbody>
    </table>
  );
}

export default Tabela;
