// OOP GAME CHALLENGE
function player(name,lvl,points){
    this.name=name;
    this.lvl=1;
    this.points=0;
}
player.prototype.gainXp=function(xp){
    this.points+=xp;
    if (this.points>=10){
        this.lvl++;
        this.points-=10;
    }
    console.log(this.describe())
}
player.prototype.describe=function(){
return`${this.name} is level ${this.lvl} with ${this.points} experience points`;
}
const player1 = new player('Bob')
const player2 = new player('Alice')
player1.gainXp(4);
player2.gainXp(6);
player1.gainXp(12);
console.log(player1.describe())
console.log(player2.describe())