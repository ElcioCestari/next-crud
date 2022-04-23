export default class Cliente {
    #id: string;
    #nome: string;
    #idade: number;

    constructor(nome: string, idade: number, id: string = null) {
        this.#nome = nome;
        this.#idade = idade;
        this.#id = id;
    }

    get id(): string {
        return this.#id;
    }

    get nome(): string {
        return this.#nome;
    }

    get idade(): number {
        return this.#idade;
    }
    
    static vazio() {
        return new Cliente('', 0);
    }



}