
const {queryString} = require('./queryString')
describe('Object to query string', () =>{
it('should create a valid query string when an object is provided', () =>{
    const obj ={
        name: 'Bruno', 
        profession: 'developer', 
    };
    expect(queryString(obj)).toBe(
        'name=Bruno&profession=developer'
    );
});
it('should create a valid query string when an array is provided', () =>{
    const obj ={
        name: 'Bruno', 
        abilities: ['JS', 'node'], 
    };
    expect(queryString(obj)).toBe(
        'name=Bruno&abilities=JS,node'
    );
});
it('should create a valid query string when an array is provided', () =>{
    const obj ={
        name: 'Bruno', 
        abilities: {
            first: 'JS',
            second: 'node'
        }, 
    };
    expect(() =>{
        queryString(obj);
    }).toThrowError();
});

});