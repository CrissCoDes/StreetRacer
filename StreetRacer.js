class Racer {
    static numoracers = 0;
    constructor(NAME, CARTYPE, RACETYPE,){
    this._NAME = NAME;
    this._CARTYPE = CARTYPE;
    this._RACETYPE = RACETYPE;
    this._RACESWON = 0
    this._RACESLOST = 0
    Racer.numoracers += 1;
 }
 get name () {
     return this._NAME;
 }
 get cartype () {
     return this._CARTYPE
 }
 get racetype () {
     return this._RACETYPE
 }
 RacesWon(){
    this._RACESWON++
 }
 Raceslost(){
    this._RACESLOST++
 }
 static begin(){
     console.log('Start Race');
 }
}

const Chico = new Racer('Leon', 'Mazda Speed3', 'City');
//console.log(Chico);

const Wboy = new Racer('Andrew', 'Ford Fiesta', 'BackRoads');
//console.log(Wboy);


Chico.RacesWon();
console.log(Chico);
Wboy.RacesWon();
Wboy.RacesWon();
Wboy.Raceslost(1);
console.log(Wboy);

class Cop extends Racer {
    constructor(NAME, CARTYPE, RACETYPE, DUTYTYPE, PeopleArrested ){
    super(NAME, CARTYPE, RACETYPE, DUTYTYPE, PeopleArrested)
    this._DUTYTYPE = DUTYTYPE;
    this._PeopleArrested = [];
 }
 get Arrest(){
     return this._PeopleArrested;
 }
 Capture(newArrest){
    this._PeopleArrested.push(newArrest)
 }
}

const CopJoe = new Cop('Joe Ro', 'Crown Vic', 'Police', 'Traffic');
CopJoe.Capture('trin');
CopJoe.Capture('tuck');
CopJoe.Capture('Yor');
console.log(CopJoe);

console.log(Racer.numoracers)
Racer.begin();
