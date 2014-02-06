var suffix = require('date-suffix');
var assert = require('assert');

describe('suffix', function(){

  it('should get the correct suffixes', function(){
    assert( suffix(1) === '1st' );
    assert( suffix(2) === '2nd' );
    assert( suffix(3) === '3rd' );
    assert( suffix(4) === '4th' );
  });

});