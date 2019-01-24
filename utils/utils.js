module.exports.add = (a, b) => (a + b);
module.exports.multiply = (a, b) => (a * b);
module.exports.setName = (user, fullName) => {

  return user = {
    firstName: fullName.split(' ')[0],
    lastName: fullName.split(' ')[1]
  }
};

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};