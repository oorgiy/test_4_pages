export const increaseTodo = () => {
    return {
        type: 'increase'
    }
}
export const linkTodo = () => {
    return {
        type: 'link'
    }
}
export const updateTodo = (wish_value) => {
    return {
        type:'update',
        wish_value: wish_value
    }
}