var utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
  const result = utils.add(22, 23);
  expect(result).toBe(45);
});

it('should multiply two numbers', () => {
  const result = utils.multiply(3, 4);
  expect(result).toBe(12).toBeA('number');
});

it('should compare two objects', () => {
  expect({}).toEqual({});
});

it('should set firstName and fullName to user', () => {
  const user = {age: 25};
  const returnedUser = utils.setName(user, 'Eldar Mustafa');
  expect(returnedUser).toInclude({
    firstName: 'Eldar',
    lastName: 'Mustafa'
  });
});

it('should add two numbers async', (done) => {
  utils.asyncAdd(2, 3, (sum) => {
    expect(sum).toBe(5).toBeA('number');
    done();
  })
});