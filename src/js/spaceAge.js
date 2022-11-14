export default class Person{
  constructor(age){
    this.age = age;
  }mercuryYears(){
    const mercuryAge = this.age / .241;
    return parseFloat(mercuryAge.toFixed(1));
  }venusYears(){
    const venusAge = this.age / .615;
    return parseFloat(venusAge.toFixed(2));
  }
}