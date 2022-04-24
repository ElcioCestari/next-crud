interface BotaoProps {
  children: any;
  cor?: 'green' | 'blue' | 'gray' | 'red';
  className?: string;
}

const Botao = (props: BotaoProps) => {
  return (
    <>
      <button
        className={`
                bg-gradient-to-t
                 from-blue-400 to-blue-700
                 text-white px-4 py-2
                 rounded-md
                ${props.className}
            `}
      >
        {props.children}
      </button>
    </>
  );
};

export default Botao;
