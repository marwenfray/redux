import { INCREMENT, DECREMENT } from '../Constant/Constant';

export const reducer=(state=0,action)=>{
    switch (action.type) {
        case INCREMENT:
            console.log('dispatching',action)
            return state+1
        case DECREMENT:
            console.log('dispatching', action)
            return (state>0?state-1:0)    
    
        default:
            return state
    }
}