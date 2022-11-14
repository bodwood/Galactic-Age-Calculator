export default class Person{
  constructor(age){
    this.age = age;
  }mercuryYears(){
    const mercuryAge = this.age / .241;
    return parseFloat(mercuryAge.toFixed(1));
  }venusYears(){
    return this.age;
  }
}