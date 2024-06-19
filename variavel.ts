//Declaração de variáveis

/*Usamos a tipagem para agilizar o processso de desenvolvimento,
ter  um feedback rápido, aumentar a segurança da nossa aplicação.
Usando o any sem um objetivo/contexto que faça sentido não estamos
trabalhando com o typescript da forma correta.*/

//Com let é possível mudar/reatribuir o valor da variável
let a = "A";
a = "B";
a = "Z";

//Com const o valor da variável é imutável/inalterável
const c = "C";

//Tipos primitivos
let d: string = "D";
const i: number = 3;
const x: boolean  = true;

let y : string | number = 9;
y = "Concard";

let qualquerTipo :any = "Jame";