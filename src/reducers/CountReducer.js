const suppliersArr = ["Google","Apple","Rosneft","apple","google","rosneft","роснефть","Роснефть"];
export default function CountReducer(
    state = {count: 0,    wish_value: 0,}, action) {
    const count = state.count    
    const wish_value = action.wish_value 
    var linked = false;   
    switch (action.type) {
        case 'link': 
         if (suppliersArr.indexOf(state.wish_value)  !== -1){
             linked = true;
         } else {
             linked = false;
         }
        return {
        count: Number(linked)
    };
        
        case 'update':
            return {
                count: wish_value,
                wish_value:wish_value      
            }
        case 'increase':
            return {
                count: Number(count) + 1,
                wish_value:state.wish_value
            }
        default:
            return state
    }
}