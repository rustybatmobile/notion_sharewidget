const initialState = [];

export const selectedEntitiesReducer = (state = initialState, {type, payload = []}) => {
    switch(type) {
        case "ADD_ENTITIES": {
            const oldEntities = [...state];
            const newEntities = oldEntities.concat(payload);
            return newEntities;
        }
        case "UPDATE_ENTITY": {
            const {id, accessCode} = payload;
            const oldEntities = [...state];
            const newEntities = oldEntities.map(entity => {
                if(entity.id === id) {
                    const newObj = Object.assign({}, entity, {
                        accessCode
                    })
                    return newObj
                } 
                return entity
            })
            return newEntities
        }
        default: return state;
    }
}