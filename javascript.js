class Traveler {
    constructor(name) {
        this._name = name;
        this._food = 1;
        this._isHealthy = true;

    }
    get name(){
        return this._name;
    }

    set name(value){
        if(typeof value === "string"){
            this._name = value;
        }
    }

    get food(){
        return this._food;
    }

    
    get isHealthy(){
        return this._isHealthy;
    }

    set isHealthy(value){
        if(typeof value === "boolean"){
            this._isHealthy = value;
        }
    }
    
    hunt = function(){
        this._food = this._food + 2;
    }

    eat = function(){
        if(this._food > 0){
            this._food = this._food - 1;
        } else {
            this._isHealthy = false;
        }
    }
    

}

class Wagon {
    constructor(capacity) {
        this._capacity = capacity;
        this._passageiros = [];
    }

    get capacity(){
        return this._capacity;
    }

    set capacity(value){
        if(typeof value === "number"){
            this._capacity = value;
        }
    }

    get passageiros (){
        return this._passageiros;
    }

    getAvailableSeatCount = function (){
        return this._capacity - this._passageiros.length; 
    }

    join = function (traveler){
        if(this._passageiros.length < this._capacity){
            this._passageiros.push(traveler);
        }
    }

    shouldQuarantine = function () {
        for(let i= 0; i<this._passageiros.length; i++){
           if(this._passageiros[i].isHealthy === false) {
               return true;
           }   
        }
        return false;
    }

    totalFood = function () {
        
        let travelersFood = 0;
        
        for(let i= 0; i<this._passageiros.length; i++){
            travelersFood = travelersFood + this._passageiros[i].food;
        }
        return travelersFood;
    }
}




// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);