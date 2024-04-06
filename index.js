function receivesAFunction(callback){console.log(callback())}

function returnsANamedFunction(){
    let namedFunction = function namedFunction(){
        console.log(`Hello there.`)
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log('i do nothing')
    }
};