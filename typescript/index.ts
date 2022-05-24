/*
function soma(a: number, b: number){
    return a+b;
}
soma(1,2)
console.log(soma(1,2))

interface IAnimal {
    nome: string,
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'médio' | 'grande;'
}

/*
const ANIMAL: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    //executarSom: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}
*/

//ANIMAL.executarSom(30);

/*
const FELINO: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true
}

type IDomestico = IFelino | ICanino;

const ANIMAL2: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'médio',
    tipo: 'terrestre',       
}
*/

/*
const INPUT = document.getElementById('input') as HTMLInputElement;

INPUT.addEventListener('input', (event) => {    
    const I = event.currentTarget as HTMLInputElement;
    console.log(I.value);
})
*/

//Generic Types
/*
function adicionaApendiceALista<T>(array: any[], valor: T){
    return array.map(item => item + valor);
}

adicionaApendiceALista(['A','B','C'], 1);
*/
/*
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redireciona(usuario: IUsuario){
    if(usuario.cargo){
        //redirecionar para a área do trabalhador
    }
    //redirecionar para área do usuário
}
*/


/*
interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}


function redireciona(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
        //redirecionar para a área de administração
    }
    //redirecionar para a área do usuário
}
*/

/*
interface Cachorro {
    nome: string;
    idade: number; 
    parqueFavorito?: string
}

type CachorroSomenteLeitura = {
    readonly[K in keyof Cachorro]: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    nome; //'Apolo';
    idade; //14;

    constructor(nome, idade){
        this.idade = idade;
        this.nome = nome;
    }
}

const CAO = new MeuCachorro('Apolo', 14);
CAO.idade = 8;
console.log(CAO);
*/
/*
interface Estudante {
    nome: string;
    idade: number;
}
*/
/*
import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova função');
    }
})
$('body').novaFuncao();
*/

export const NUMERO = 2;

interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{

}

const brasileiro: Brasileiro = {
    nome: 'Juca',
    idade: 13
}