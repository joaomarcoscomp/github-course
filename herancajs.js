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

class Passaro extends Animal{
	voar(){
  	document.write('Voar');
  }
}

var cao = new Cao('Marrom', 20, 'Labrador');
cao.getInformacoes();

document.write("WIP status test with git stash");
