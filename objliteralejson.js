class Animal{
	constructor(cor, peso){
  	this.cor = cor;
    this.peso = peso;
  }
  
  dormir(){
  	document.write('Dormir');
  }

}

class Cao extends Animal{
	constructor(cor, peso, raca){
  	super(cor, peso);
    this.raca = raca;
  }

	getInformacoes(){
  	document.write('-Cor: ' + this.cor + ' -Peso: ' + this.peso + ' -Raça: ' + this.raca);
  }

	latir(){
  	document.write('Latir');
  }
  
  dormir(){
  	super.dormir();
  	document.write(' como um cão');
  }
}

var cao = new Cao('Marrom', 20, 'Labrador');

var objetoLiteral = {
	cor: 'Marrom',
	peso: 30,
	raca: 'Labrador',
  filhotes: {filhote1: 'Rex', filhote2: 'Doug'}
};

var objetoJson = '{"cor": "Branca", "peso": 30, "raca": "Labrador"}';

var objeto = JSON.parse(objetoJson);

document.write(objeto.cor);


