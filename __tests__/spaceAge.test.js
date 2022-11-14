import Person from '../src/js/spaceAge';

describe('Person', () => {

  test('should build a person object given an age', () => {
    const person = new Person(25);
    expect(person.age).toEqual(25);
  });

  test('should return the person age converted to mercury years', () => {
    const person = new Person(1);
    expect(person.mercuryYears()).toEqual(4.1);
  });

  test('should return person age convert to venus years', () => {
    const person = new Person(25);
    expect(person.venusYears()).toEqual(40.65);
  });

  test('should return age of person if marsYears function is called', () => {
    const person = new Person(25);
    expect(person.marsYears()).toEqual(13.298);
  });

  test('should return person age if jupiterYears function is called', () => {
    const person = new Person(25);
    expect(person.jupiterYears()).toEqual(2.11);
  });

  test('should return amount of years on Mercury left for a female (at birth) who lives in the US', () => {
    const person = new Person(1, 'male', 'US');
    expect(person.yearsLeft()).toEqual(69.1);
  });

  // test('should return true if calculating venus life left', () => {
  //   const person = new Person(25, 'female', 'US');
  //   expect(person.yearsLeft()).toEqual(true);
  // });
});