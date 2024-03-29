export const initialState = {
    basket: [],

}
// Selector for basket
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "addToBasket":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        default:
            return state;
    }

};

export default reducer;