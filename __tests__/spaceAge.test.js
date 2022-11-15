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

  /*********Mercury yearsLeft Tests*********/

  test('should return amount of years on Mercury for a male (at birth) who lives in the US and is 25 years old', () => {
    const person = new Person(25, 'male', 'US');
    expect(person.yearsLeftMercury()).toEqual(30.5);
  });

  test('should return amount of years on Mercury for a female (at birth) who lives in the US and is 25 years old', () => {
    const person = new Person(25, 'female', 'US');
    expect(person.yearsLeftMercury()).toEqual(24.6);
  });

  test('should return amount of years on Mercury a male (at birth) who lives in the US and is 1 years old', () => {
    const person = new Person(1, 'male', 'US');
    expect(person.yearsLeftMercury()).toEqual(69.1);
  });

  test('should return amount of years on Mercury left for a female (at birth) who lives in the US and is 1 years old', () => {
    const person = new Person(1, 'female', 'US');
    expect(person.yearsLeftMercury()).toEqual(75);
  });

  test('should return error message if entry is invalid', () => {
    const person = new Person(1, 'male', 'UK');
    expect(person.yearsLeftMercury()).toEqual("please enter a valid age");
  });

  /*********Venus yearsLeft Tests*********/

  test('should return amount of years on Venus left for a male (at birth) who lives in the US and is 50 years old', () => {
    const person = new Person(50, 'male', 'US');
    expect(person.yearsLeftVenus()).toEqual(8.1);
  });

  test('should return amount of years on Venus left for a male (at birth) who lives in the US and is 1 years old', () => {
    const person = new Person(1, 'male', 'US');
    expect(person.yearsLeftVenus()).toEqual(71.57);
  });

  test('should return amount of years on Venus left for a female (at birth) who lives in the US and is 50 years old', () => {
    const person = new Person(50, 'female', 'US');
    expect(person.yearsLeftVenus()).toEqual(2.2);
  });

  test('should return amount of years on Venus left for a female (at birth) who lives in the US and is 1 years old', () => {
    const person = new Person(1, 'female', 'US');
    expect(person.yearsLeftVenus()).toEqual(77.47);
  });

  test('should return error message if entry is invalid', () => {
    const person = new Person(1, 'male', 'UK');
    expect(person.yearsLeftVenus()).toEqual("please enter a valid age");
  });
  
/*********Mars yearsLeft Tests*********/

  test('should return amount of years on Mars left for a male (at birth) who lives in the US and is 155 years old', () => {
    const person = new Person(155, 'male', 'US');
    expect(person.yearsLeftMars()).toEqual(9.25);
  });

  test('should return amount of years on Mars left for a male (at birth) who lives in the US and is 69 years old', () => {
    const person = new Person(69, 'male', 'US');
    expect(person.yearsLeftMars()).toEqual(36.5);
  });

  test('should return amount of years on Mars left for a female (at birth) who lives in the US and is 155 years old', () => {
    const person = new Person(155, 'female', 'US');
    expect(person.yearsLeftMars()).toEqual(3.35);
  });

  test('should return amount of years on Mars left for a female (at birth) who lives in the US and is 69 years old', () => {
    const person = new Person(69, 'female', 'US');
    expect(person.yearsLeftMars()).toEqual(42.4);
  });

  test('should return error message if entry is invalid', () => {
    const person = new Person(1, 'male', 'UK');
    expect(person.yearsLeftMars()).toEqual("please enter a valid age");
  });

/*********Jupiter yearsLeft Tests*********/

test('should return amount of years on Jupiter left for a male (at birth) who lives in the US and is 900 years old', () => {
  const person = new Person(900, 'male', 'US');
  expect(person.yearsLeftJupiter()).toEqual(2.69);
});

test('should return amount of years on Jupiter left for a male (at birth) who lives in the US and is 27 years old', () => {
  const person = new Person(27, 'male', 'US');
  expect(person.yearsLeftJupiter()).toEqual(70.92);
});

test('should return amount of years on Jupiter left for a female (at birth) who lives in the US and is 950 years old', () => {
  const person = new Person(950, 'female', 'US');
  expect(person.yearsLeftJupiter()).toEqual(1);
});

test('should return amount of years on Jupiter left for a female (at birth) who lives in the US and is 27 years old', () => {
  const person = new Person(27, 'female', 'US');
  expect(person.yearsLeftJupiter()).toEqual(76.82);
});

test('should return error message if entry is invalid', () => {
  const person = new Person(1, 'male', 'UK');
  expect(person.yearsLeftJupiter()).toEqual("please enter a valid age");
});

});