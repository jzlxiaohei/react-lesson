
import React from 'react'
import SimpleList from './SimpleList.js'



export default class SimpleListContainer extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    state={
        list:[]
    }

    componentDidMount(){
        //假设通过ajax拿到
        this.setState(
            {
                list:[
                    {id:1,content:'dog'},
                    {id:2,content:'cat'},
                    {id:3,content:'pig'}
                ]
            }
        )
    }

    render() {
        let list = this.state.list;
        return(
            <SimpleList list={list}/>
        )
    }
}
