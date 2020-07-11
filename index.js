const redux = require('redux')
const createstore = redux.createStore
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger')
const applymiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
console.log('from the index.js')

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM  = 'BUY_ICECREAM'


function buyCake(){
    return{
        type : BUY_CAKE,
        info : 'First redux action'
    }
    
}


function buyIcecream(){
     return{
        
       type : BUY_ICECREAM 

     }


}

// const initialState = {
//      numberOfCakes : 10,
//      numberOfIcecrems : 20
// }

const initialcakestate = {
    numberOfCakes : 10
}

const initialicecreamstate = {
    numberOfIcecrems : 20
}

// const reducer = (state = initialState,action) =>{

//     switch(action.type){
//           case BUY_CAKE :return {
//               ...state,
//               numberOfCakes  :state.numberOfCakes - 1
//           }

//           case BUY_ICECREAM :return {
//             ...state,
//             numberOfIcecrems  :state.numberOfIcecrems - 1
//         }


//           default : return state
//     }
     
// }
const cakereducer = (state = initialcakestate,action) =>{

    switch(action.type){
          case BUY_CAKE :return {
              ...state,
              numberOfCakes  :state.numberOfCakes - 1
          }

          default : return state
    }
     
}

const icecreamreducer = (state = initialicecreamstate,action) =>{

    switch(action.type){
        case BUY_ICECREAM :return {
                        ...state,
                        numberOfIcecrems  :state.numberOfIcecrems - 1
                    }
          default : return state
    }
     
}


const rootReducer = combineReducers({
    cake :  cakereducer,
    iceCream : icecreamreducer 
})


const store  =  createstore(rootReducer,applymiddleware(logger))
console.log('initial state',store.getState())
const unsubscribe =  store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch( buyIcecream())
store.dispatch(buyIcecream())
store.dispatch( buyIcecream())
unsubscribe()