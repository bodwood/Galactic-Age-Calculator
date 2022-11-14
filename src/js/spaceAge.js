export default class Person{
  constructor(age, sex, geographics){
    this.age = age;
    this.sex = sex;
    this.geographics = geographics;
  }mercuryYears(){
    const mercuryAge = this.age / .241;
    return parseFloat(mercuryAge.toFixed(1));
  }venusYears(){
    const venusAge = this.age / .615;
    return parseFloat(venusAge.toFixed(2));
  }marsYears(){
    const marsAge = this.age / 1.88;
    return parseFloat(marsAge.toFixed(3));
  }jupiterYears(){
    const jupiterAge = this.age / 11.86;
    return parseFloat(jupiterAge.toFixed(2));
  }yearsLeft(){
    if(this.sex === "male" && this.geographics === "US"){
      return 73.2;
    }
  }
}