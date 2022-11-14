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
  yearsLeftMercury() {
    const maleLifeExpectancy = 73.2
    const femaleLifeExpectancy = 79.1;
    const maleMercuryLifeLeft = maleLifeExpectancy - this.mercuryYears();
    const femaleMercuryLifeLeft = femaleLifeExpectancy - this.mercuryYears();

    // const maleMarsLifeLeft = maleLifeExpectancy - this.marsYears();
    // const femaleMarsLifeLeft = femaleLifeExpectancy - this.marsYears();

    if (this.sex === "male" && this.geographics === "US") {
      if (maleMercuryLifeLeft < 0) {
        console.log(`You have lived ${parseFloat(Math.abs(maleMercuryLifeLeft.toFixed(2)))} years past life expectany for Mercury!`);
        return parseFloat(Math.abs(maleMercuryLifeLeft.toFixed(2)));

      } else {
        console.log(`You have: ${parseFloat(maleMercuryLifeLeft.toFixed(2))} years left on Mercury.`);
        return parseFloat(maleMercuryLifeLeft.toFixed(2));
      }
    } else if (this.sex === "female" && this.geographics === "US") {
      if (femaleMercuryLifeLeft < 0) {
        console.log(`You have lived ${parseFloat(Math.abs(femaleMercuryLifeLeft.toFixed(2)))} years past life expectany for Mercury!`);
        return parseFloat(Math.abs(femaleMercuryLifeLeft.toFixed(2)));

      } else {
        console.log(`You have: ${parseFloat(femaleMercuryLifeLeft.toFixed(2))} years left on Mercury.`);
        return parseFloat(femaleMercuryLifeLeft.toFixed(3));
      }

    } else {
      return "please enter a valid age";
    }
  }yearsLeftVenus() {
    const maleLifeExpectancy = 73.2
    const femaleLifeExpectancy = 79.1;
    const maleVenusLifeLeft = maleLifeExpectancy - this.venusYears();
    const femaleVenusLifeLeft = femaleLifeExpectancy - this.venusYears();
    // const maleMarsLifeLeft = maleLifeExpectancy - this.marsYears();
    // const femaleMarsLifeLeft = femaleLifeExpectancy - this.marsYears();

    if (this.sex === "male" && this.geographics === "US") {
      if (maleVenusLifeLeft < 0) {
        console.log(`You have lived ${parseFloat(Math.abs(maleVenusLifeLeft.toFixed(2)))} years past life expectany for Venus!`);
        return parseFloat(Math.abs(maleVenusLifeLeft.toFixed(2)));

      } else {
        console.log(`You have: ${parseFloat(maleVenusLifeLeft.toFixed(2))} years left on Venus.`);
        return parseFloat(maleVenusLifeLeft.toFixed(2));
      }
    } else if (this.sex === "female" && this.geographics === "US") {
      if (femaleVenusLifeLeft < 0) {
        console.log(`You have lived ${parseFloat(Math.abs(femaleVenusLifeLeft.toFixed(2)))} years past life expectany for Venus!`);
        return parseFloat(Math.abs(femaleVenusLifeLeft.toFixed(2)));

      } else {
        console.log(`You have: ${parseFloat(femaleVenusLifeLeft.toFixed(2))} years left on Venus.`);
        return parseFloat(femaleVenusLifeLeft.toFixed(3));
      }

    } else {
      return "please enter a valid age";
    }
  }yearsLeftMars() {
    const maleLifeExpectancy = 73.2
    const femaleLifeExpectancy = 79.1;
    const maleMarsLifeLeft = maleLifeExpectancy - this.marsYears();
    const femaleMarsLifeLeft = femaleLifeExpectancy - this.marsYears();

    if (this.sex === "male" && this.geographics === "US") {
      if (maleMarsLifeLeft < 0) {
        console.log(`You have lived ${parseFloat(Math.abs(maleMarsLifeLeft.toFixed(2)))} years past life expectany for Mars!`);
        return parseFloat(Math.abs(maleMarsLifeLeft.toFixed(2)));

      } else {
        console.log(`You have: ${parseFloat(maleMarsLifeLeft.toFixed(2))} years left on Mars.`);
        return parseFloat(maleMarsLifeLeft.toFixed(2));
      }
    } else if (this.sex === "female" && this.geographics === "US") {
      if (femaleMarsLifeLeft < 0) {
        console.log(`You have lived ${parseFloat(Math.abs(femaleMarsLifeLeft.toFixed(2)))} years past life expectany for Mars!`);
        return parseFloat(Math.abs(femaleMarsLifeLeft.toFixed(2)));

      } else {
        console.log(`You have: ${parseFloat(femaleMarsLifeLeft.toFixed(2))} years left on Mars.`);
        return parseFloat(femaleMarsLifeLeft.toFixed(3));
      }

    } else {
      return "please enter a valid age";
    }
  }
}