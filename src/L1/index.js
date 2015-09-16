//console.log(1111)

import Immutable from 'immutable'

let list = Immutable.List.of(1)

let list1 = list.push(2)

console.log(list1 ==  list)//false

//batch
let list2 = list1.withMutations(function(l){
    l.push(3).push(4);
})

console.log(list2.toArray())//[1,2,3,4]
console.log(list2.toArray() == list2.toArray())//false

