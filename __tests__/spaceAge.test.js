import Person from '../src/js/spaceAge';

describe('Person', () => {

  test('should build a person object given an age', () => {
    const person = new Person(25);
    expect(person.age).toEqual(25);
  });

  test('should return the person age converted to mercury years', () => {
    const person = new Person(25);
    expect(person.mercuryYears()).toEqual(103.7);
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
    expect(person.jupiterYears()).toEqual(25);
  });
});