export default class Person {
  constructor(age, sex, geographics) {
    this.age = age;
    this.sex = sex;
    this.geographics = geographics;
  }
  mercuryYears() {
    const mercuryAge = this.age / .241;
    return parseFloat(mercuryAge.toFixed(1));
  }
  venusYears() {
    const venusAge = this.age / .615;
    return parseFloat(venusAge.toFixed(2));
  }
  marsYears() {
    const marsAge = this.age / 1.88;
    return parseFloat(marsAge.toFixed(3));
  }
  jupiterYears() {
    const jupiterAge = this.age / 11.86;
    return parseFloat(jupiterAge.toFixed(2));
  }
  yearsLeft() {
    const maleLifeExpectancy = 73.2
    const femaleLifeExpectancy = 79.1;
    const maleMercuryLifeLeft = maleLifeExpectancy - this.mercuryYears();
    const femaleMercuryLifeLeft = femaleLifeExpectancy - this.mercuryYears();

    if (this.sex === "male" && this.geographics === "US") {
      if (maleMercuryLifeLeft < 0) {
        return parseFloat(Math.abs(maleMercuryLifeLeft.toFixed(2)));
        //person has lived 30.5 MERCURY YEARS past life expectancy
      } else {
        return parseFloat(maleMercuryLifeLeft.toFixed(2));
      }
    } else if (this.sex === "female" && this.geographics === "US") {
      if (femaleMercuryLifeLeft < 0) {
        return parseFloat(Math.abs(femaleMercuryLifeLeft.toFixed(2)));
        //person has lived 24.5 MERCURY YEARS past life expectancy
      } else {
        return parseFloat(femaleMercuryLifeLeft.toFixed(3));
      }

    }
  }
}