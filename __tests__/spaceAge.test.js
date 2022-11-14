import Person from '../src/js/spaceAge';

describe('Person', () => {

  test('should build a person object given an age', () => {
    const person = new Person(25);
    expect(person.age).toEqual(25);
  });

  test('should return the person age converted to mercury years', () => {
    const person = new Person(25);
    expect(person.mercuryYears()).toEqual(6);
  });
});