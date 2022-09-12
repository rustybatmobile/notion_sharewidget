const initialState = [
    {
        id: 201, 
        name: "Product", 
    }, {
        id: 202, 
        name: "Engineering", 
    }
]

const groupReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        default: return state;
    }
}

export default groupReducer