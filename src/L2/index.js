import React from 'react'
import Immutable from 'immutable'
import SimpleList from './SimpleList.js'

var list = Immutable.List.of(
    {id:1,content:'dog'},
    {id:2,content:'cat'},
    {id:3,content:'pig'}
)
let listElement = <SimpleList list={list}></SimpleList>

React.render(
    listElement,
    document.getElementById('mount-dom')
)
