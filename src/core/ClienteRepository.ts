import Cliente from "./cliente";

export default interface ClienteRepository {
    salvar(cliente: Cliente): Promise<Cliente>;
    excluir(cliente: Cliente): Promise<void>;
    obtertodos(): Promise<Cliente[]>;
}
    