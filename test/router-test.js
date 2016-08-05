var chai = require('chai');
var expect = chai.expect;
var router = require('../src/router.js');

describe('Router', function(){
    it('returns unrecognized message when the command does not start with slash',function(){
        var response = router.getCommand('hello')();
        expect(response).to.equal('Ma che stai dicendo?');
    });
});


describe('Router', function(){
    it('returns unrecognized message when the command does not exist',function(){
        var response = router.getCommand('/hell o')();
        expect(response).to.equal('Ma che stai dicendo?');
    });
});

describe('Router', function(){
    it('returns expected message when the command exists',function(){
        var response = router.getCommand('/hello bob joe')();
        expect(response).to.equal('hello bob');
    });
});