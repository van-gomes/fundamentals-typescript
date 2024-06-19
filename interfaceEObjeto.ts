/*Declarando tipo de objeto com Interface para setar no
objeto que sempre iremos receber os tipos definidos. */

interface Pessoa {
    nome: string;
    idade: number;
    profissao?: string;
}

const pessoa: Pessoa = {
    nome: "Ruby",
    idade: 18
}

const outraPessoa: Pessoa = {
    nome: "Nick",
    idade: 22,
    profissao: "Desenvolvedor"
}

/*As variáveis arrayPessoa e outroArrayPessoa irão receber
um array com objetos do tipo Pessoa */
const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const outroArrayPessoa: Pessoa[] = [
    pessoa,
    outraPessoa
]

const arrayNumber: number[] = [1, 2, 3, 4, 5]

const arrayString: Array<string> = ["1", "2", "3"]