/**
 * reducer : (curState,action) => nextState
 */

import Immutable from 'immutable';
import {createStore,bindActionCreators} from 'redux'


function listReducer(state,action){
    if(action.type == 'add'){
        return state.push(action.payLoad)
    }
    if(action.type == 'deleteById'){
        //对于删除，可以使用delete，
        //但是还有一种方法，过滤掉这个id

        let id = action.payLoad.id;
        return state.filter(item=>{return item.id !==id})
    }

    if(action.type == 'update'){
        var id = action.payLoad.id;
        var index = state.findIndex(item=>{return item.id == id});
        //if index == -1, 这里不考虑update时，没有相应item的情况
        return state.set(index,action.payLoad)
    }

    return state; //注意：默认返回原state
}

var initState = Immutable.List.of()
console.log('===========listReducer output begin:==========')
let curState = initState;

curState = listReducer(curState,{type:'add',payLoad:{id:1,title:'你'}})
curState = listReducer(curState,{type:'add',payLoad:{id:2,title:'很'}})
curState = listReducer(curState,{type:'add',payLoad:{id:3,title:'帅'}})
curState = listReducer(curState,{type:'deleteById',payLoad:{id:2}})
curState = listReducer(curState,{type:'update',payLoad:{id:1,title:'我'}})

curState.forEach(item=>console.log(item))
console.log('===========listReducer output end:==========')


console.log('===========createStore output begin:==========')

var store = createStore(listReducer, initState);

//监听之后的每一次变化，观察者模式
var unSubscribe = store.subscribe(function(){
    console.log('dispatch!!!')
})

//统一的dispatch方法，对state做变更
store.dispatch({type:'add',payLoad:{id:1,title:'你'}})
store.dispatch({type:'add',payLoad:{id:2,title:'很'}})

store.getState().forEach(item=>console.log(item));

console.log('===========createStore output end:==========')



console.log('===========actionCreator output begin:==========')

//actionCreator

function addItem(payLoad){
    return {
        type:'add',
        payLoad
    }
}

function deleteItemById(payLoad){
    return {
        type:'deleteById',
        payLoad
    }
}

store.dispatch(addItem({id:1,title:"你"}))
store.dispatch(deleteItemById({id:1}))

let actionCreator = bindActionCreators({
    addItem,
    deleteItemById
},store.dispatch)

actionCreator.addItem({id:10086,title:"你"})

store.getState().forEach(item=>console.log(item))