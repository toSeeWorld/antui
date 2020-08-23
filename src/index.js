import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
const addAndSub = function (state = { num: 0, key: 0 }, action) {
    switch (action.type) {
        case "add":
            state.num++
            break
        case "sub":
            state.num--
            break
        default:
            break
    }
    return {...state}

}
const store = createStore(addAndSub)
const add = function() {
    store.dispatch({type:"add"})
    
}
const sub = function() {
    store.dispatch({type:"sub"})
}
class Counter extends Component {
    
}
ReactDom.render(
    <Counter />
    , document.querySelector("#root")
)
