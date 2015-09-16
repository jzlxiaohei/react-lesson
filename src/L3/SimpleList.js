
import React from 'react'


//use es6 and es7 property Initializers
export default class SimpleList extends React.Component{

    constructor(props,context){
        super(props,context) //context:谷歌 react context。目前这个东西还没有文档化，但是react-redux已经在用了
    }

    static defalutProps={}//getDefaultProps
    static propsType={}


    render(){
        var list = this.props.list;
        //这里的list是Immutable.List 的实例，也有map方法，`碰巧`写对了
        var listDom = list.map(item=>{
            return <li key={item.id} className='list-item'>{item.content}</li>
        })

        return (
            <ul>
                {listDom}
            </ul>
        )
    }
}