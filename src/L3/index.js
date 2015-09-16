import React from 'react'
import Immutable from 'immutable'
import SimpleListContainer from './SimpleListContainer.js'

let listContainer = <SimpleListContainer></SimpleListContainer>

React.render(
    listContainer,
    document.getElementById('mount-dom')
)
