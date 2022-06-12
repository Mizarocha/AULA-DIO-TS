let cartao :{ nome:string,  cor: string, origem: string[]} = {
    nome:'American Expres',
    cor:'Dourado',
    origem: ['Espanha']
    
}
 function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ' + item)
    }
}
   listar(cartao.origem)