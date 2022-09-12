export const addSelectedEntities = (payload) => {
    return {
        type: "ADD_ENTITIES", 
        payload
    }
}

export const updateEntity = (payload) => {
    return {
        type: "UPDATE_ENTITY", 
        payload
    }
}