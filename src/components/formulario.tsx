import { useState } from "react";
import Cliente from "../core/cliente";
import Botao from "./botao";
import Entrada from "./entrada";

interface FormularioProps {
  cliente: Cliente;
}

const Formulario = (props: FormularioProps) => {
  const id = props.cliente?.id ?? null;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div>
      {id ? (
        <Entrada texto="Codigo" valor={id} somenteLeitura className="mt-4"></Entrada>
      ) : (
        false
      )}
      <Entrada texto="Nome" valor={nome} tipo="text" onChange={setNome} className="mt-4" />
      <Entrada texto="Idade" valor={idade} tipo="number" onChange={setIdade} className="mt-4"/>
    
      <div className={`flex justify-end mt-7`}>
        <Botao className="from-gray-600 to-gray-400 m-2">Cancelar</Botao>
        <Botao className="from-blue-700 to-blue-400 m-2">{id ? 'Editar' : 'Salvar'}</Botao>
      </div>
    </div>
  );
};

export default Formulario;
