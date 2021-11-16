
// Actions
const CREATE = 'getScore/CREATE';


const initialState = {
    list: [
        {
        id: 1,
        day: "MON",
        score : 3,
        },
    
]
}

// Action Creators
export function createBucket(bucket) {
return { type: CREATE, bucket : bucket };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
     case "bucket/CREATE":{
        const new_bucket_list =[...state.list, action.bucket]; 
        return {
             list: new_bucket_list
         }
     }

    default: return state;
    }
}
    
