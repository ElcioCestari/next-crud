import Cliente from "../core/cliente";

interface TabelaProps {
  clientes: Cliente[];
}

function Tabela(props: TabelaProps) {

  function cabecalho() {
    return (
      <tr>
        <th>Codigo</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    );
  }

  const dados = () => props.clientes?.map((v: Cliente, i)  => {
    const color =  i % 2 === 0 ? `bg-slate-200` : `bg-slate-300`
    return (
        <tr className={color} key={v.id}>
            <td>{v.id}</td>
            <td>{v.nome}</td>
            <td>{v.idade}</td>
        </tr>
    );
  });

  return (
    <table>
        {cabecalho()}
        {dados()}
    </table>);
}

export default Tabela;
