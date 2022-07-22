let miticos = ['Hino Bélico de Shurelya', 'Medalhão dos Solari de Ferro','Mandato Imperial', 'Regenerador de Pedra Lunar','Manopla do Raio de Gelo','Quimiotanque Turbo','Égide de Fogo Solar','Explocinturão Hextec','Criafendas','Colhedor Noturno','Crepúsculo de Draktharr','Eclipse','Garra do Espreitador','Hemodrenário','Quebrapassos','Ruptor Divino','Força da Trindade','Angústia de Liandry','Tormenta de Luden','Glacieterno','Força do Vendaval','Mata-Cráquens','Arco-Escudo Imortal']

let lendarios = ['Capuz da Morte de Rabadon','Rancor de Serylda','Adagas Rápidas Navori','Gume do Infinito','Hidra Titânica','Cutelo Negro','Hidra Raivosa','Placa Gargolítica','Espada do Rei Destruído','Sinal de Sterak','Dança da Morte','Limite da Razão','Mandíbula de Malmortius','A Coletora','Alvorada da Pratânia','Abraço Demoníaco','Ímpeto Cósmico','Foco do Horizonte','Dente de NaShor','Lâmina Fantasma de Youmuu','Cimitarra Mercurial','Cetro de Cristal de Rylai','Armadura de Warmog','Quebra-Cascos','Perdição de Lich','Fimbulwinter','Cajado do Arcanjo','Limiar da Noite','Couraça do Defunto','Colhedor de Essência','Lembranças do Lorde Dominik','Semblante Espiritual','Manamune','Força da Natureza','Lâmina da Fúria de Guinsoo','Anjo Guardião','Chuva de Canivete','Armadura de Espinhos','Presságio de Randuin','Máscara Abissal','Véu da Banshee','Ampulheta de Zhonya','Glaive Sombria','Furacão de Runaan','Presa da Serpente','Serrespada Quimiopunk','Dançarina Fantasma','Canhão Fumegante','Morellonomicon','Cajado do Vazio','Lembrete Mortal','Coração Congelado','Convergência de Zeke','Juramento do Cavaleiro','Redenção','Bênção de Mikael','Turíbulo Ardente','Pedra-Vigia Vigilante','Cajado Aquafluxo','Putrificador Quimtec','Ladrão de Almas de Mejai']

let botas = ['Botas da Rapidez','Botas Ionianas da Lucidez','Botas da Mobilidade','Botas Galvanizadas de Aço','Grevas do Berserker','Sapatos do Feiticeiro','Passos de Mercúrio']

let tamanho
let item


let listaItens = []

function buildGenerate(){

    sorteioItem(miticos)
    sorteioItem(lendarios)
    sorteioItem(lendarios)
    sorteioItem(lendarios)
    sorteioItem(lendarios)
    sorteioItem(botas)

    alert(listaItens)
    listaItens = []
}
function Aram(){

}
function removeItemLista(item , lista){
    lista.splice(lista.indexOf(item),1)
    return lista
}

function sorteioItem(lista){
    tamanho = lista.length
    item = Math.floor(Math.random() * tamanho)
    item = lista[item]
    removeItemLista(item , lista)
    sheildItem(item)
    listaItens.push(item)

}

function sheildItem(item){
    if(item == 'Arco-Escudo Imortal'){
        removeItemLista('Sinal de Sterak' , lendarios) 
        removeItemLista('Mandíbula de Malmortius' , lendarios)
    }
    if(item == 'Sinal de Sterak'){
        removeItemLista('Mandíbula de Malmortius' , lendarios)
        removeItemLista('Arco-Escudo Imortal' , miticos)
    }
    if(item == 'Mandíbula de Malmortius'){
        removeItemLista('Sinal de Sterak' , lendarios)
        removeItemLista('Arco-Escudo Imortal' , miticos)
    }

}
