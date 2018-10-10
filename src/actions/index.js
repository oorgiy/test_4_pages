export const increaseTodo = () => {
    return {
        type: 'increase'
    }
}
export const linkTodo = (wish_value) => {
    return {
        type: 'link',
        wish_value: wish_value
    }
}
export const updateTodo = (wish_value) => {
    return {
        type:'update',
        wish_value: wish_value
    }
}