const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    (value === '') ? this.chain.push('( )') : this.chain.push(`( ${value} )`);

    return this;
  },
  removeLink(position) {
    if (isNaN(position)) {
      this.chain = [];
      throw new Error("THROWN");
    }
    this.chain.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let newChain = this.chain.join('~~');
    this.chain = [];
    return newChain;
  }
};

console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain())

module.exports = chainMaker;
