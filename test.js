require('chai').should();

const findBrokenKeys = require('./index.js');


describe('Find the broken key(s)', function () {

  it('Should return the broken key(s) of the keyboard', function () {
    findBrokenKeys('hakuna matata', 'hqkunq mqtqtq').should.eql(['a'])
    findBrokenKeys('chuck norris', 'thuck noffis').should.eql(['c', 'r'])
    findBrokenKeys('happy hacking', 'hazzy hack3nq').should.eql(['p', 'i', 'g'])
    findBrokenKeys('sequelize', 'sdcudji!d').should.eql(['e', 'q', 'l', 'z'])
  });

  it('Should return -1 if no key is broken', function () {
    findBrokenKeys('hello you', 'hello you').should.equal(-1)
  });
})