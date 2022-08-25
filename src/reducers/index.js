// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import Counter from './Components/App'
// import counter from './reducers'

// const store = createStore(counter)
// const rootEl = document.getElementById('root')

// const render = () => ReactDOM.render(
//   <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//   />,
//   rootEl
// )

// render()
// store.subscribe(render)









// const countReducer = (state = 0, action) =>{
//    switch(action.type){ 
//     case 'INCREMENT':
//        return state + 1;
    
//     case 'DECREMENT':
//        return state - 1;
    
//    default:
//       return state;
//   }
// };
//   export default countReducer;

const reducer = (state = initialState, action) => {
	switch(action.type) {
  	case 'INCREMENT':
    	return Object.assign({}, state, { count: state.count + 1 });
  	case 'DECREMENT':
    	return Object.assign({}, state, { count: state.count - 1 });
  }
  return state;
}

export default reducer;
