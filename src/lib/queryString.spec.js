
const {queryString, parse} = require('./queryString')
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

describe('Query string to object', () => {
    it('should convert a query string to object', () =>{
        const qs = 'name=Bruno&profession=developer';
        
        expect(parse(qs)).toEqual({
         name:'Bruno',
            profession:'developer'
        })
    });
    it('should convert a query string to object from a single key-value', () =>{
        const qs = 'name=Bruno';
        
        expect(parse(qs)).toEqual({
         name:'Bruno',
        })
    });

    it('should convert a query string to object taking care of coma separeted values', () =>{
        const qs = 'name=Bruno&abilities=JS,node';
        
        expect(parse(qs)).toEqual({
         name:'Bruno',
         abilities: ['JS', 'node']
        })
    });


});