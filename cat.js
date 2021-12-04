function Cat(){
    this.stomach = [];
}

Cat.prototype.eat = function(animal){
    if(animal!=="mouse"){
        console.log("Only eat mouse.");
        return;
    }
    this.stomach.push(animal);
}

module.exports = Cat;