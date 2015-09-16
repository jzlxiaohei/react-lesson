/**
 * reducer : (curState,action) => nextState
 */

import Immutable from 'immutable';


var initState = Immutable.List.of()
function ListReducer(state,action){
    if(action.type == 'add'){
        return state.push(action.payLoad)
    }
    if(action.type == 'deleteById'){
        //对于删除，可以使用delete，但是还有一种方法，过滤掉这个id。
        //这实际上，算是一种查找，查找返回所有id不能deleteId的数据
        //所以，这里的state一直是最新的state，如果需要做查询的页面，外面得到所有数据后，自己去过滤。

        let id = action.payLoad;
        return state.filter(item=>{item.id !==id})
        //return state.filterNot(item=>{item.id ==id})
    }
    if(action.type == 'update'){
        var id = action.payLoad.id;
        var index = state.find(item=>{item.id == id});
        //if index == -1, 这里不考虑update时，没有相应item的情况
        return state.set(index,action.payLoad)
    }
    //if(action.type == 'search'){
    //
    //}

    return state; //默认返回原state
}


ListReducer(initState,{type:'add',payLoad:{id:1,title:'你'}})
ListReducer(initState,{type:'add',payLoad:{id:2,title:'很'}})
ListReducer(initState,{type:'add',payLoad:{id:3,title:'帅'}})
ListReducer(initState,{type:'deleteById',payLoad:{id:2}})
ListReducer(initState,{type:'update',payLoad:{id:1,title:'我'}})
