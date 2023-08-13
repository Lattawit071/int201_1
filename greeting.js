function greeting(someone) {
 if (someone === null || someone === undefined) {

    return `hello, guest`;

  }
    return `hello, ${someone}`;
}

module.exports = greeting
