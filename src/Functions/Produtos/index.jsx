import   Lingeries  from '../../Assets/Lingerie'


class Produto{
    constructor(nome, preco, img){
        this.nome = nome;
        this.preco = preco;
        this.img = img;

    }
}

var produto1 = new Produto('Lingerie 01', 49.90, Lingeries.Lingeries[0] );
var produto2 = new Produto('Lingerie 02', 49.90, Lingeries.Lingeries[1] );
var produto3 = new Produto('Lingerie 03', 49.90, Lingeries.Lingeries[2] );
var produto4 = new Produto('Lingerie 04', 49.90, Lingeries.Lingeries[3] );
var produto5 = new Produto('Lingerie 05', 49.90, Lingeries.Lingeries[4] );
var produto6 = new Produto('Lingerie 06', 49.90, Lingeries.Lingeries[5] );
var produto7 = new Produto('Lingerie 07', 49.90, Lingeries.Lingeries[6] );
var produto8 = new Produto('Lingerie 08', 49.90, Lingeries.Lingeries[7] );
var produto9 = new Produto('Lingerie 09', 49.90, Lingeries.Lingeries[8] );
var produto10 = new Produto('Lingerie 10', 49.90,  Lingeries.Lingeries[9] );

   export default{
    

    produto1,
    produto2,
    produto3,
    produto4,
    produto5,
    produto6,
    produto7,
    produto8,
    produto9,
    produto10
   }