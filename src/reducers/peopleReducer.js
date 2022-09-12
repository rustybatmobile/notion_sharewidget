const initialState = [
    {
        id: 1, 
        name: "Wake cooper", 
        imgUrl: null, 
        email: "wakecooper@gmail.com"
    }, {
        id: 2, 
        name: "Arlene McCoy", 
        imgUrl: null, 
        email: "arlene@outlook.com"
    }
]

const peopleReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        default: return state;
    }
}

export default peopleReducer