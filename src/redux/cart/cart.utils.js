export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
            } :
            cartItem
        )
    }

    return [...cartItems, {
        ...cartItemToAdd,
        quantity: 1
    }]
};

// export const removeItemFromCart = (cartItems, cartItemToRemove) => {
//     const existingCartItem = cartItems.find(
//         cartItem => cartItem.id === cartItemToRemove.id
//     )

//     if (existingCartItem.quanity === 1) {
//         return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
//     }

//     return cartItems.map(
//         cartItem =>
//         cartItem.id === cartItemToRemove.id ? {
//             ...cartItem,
//             quanity: cartItem.quanity - 1
//         } :
//         cartItem
//     );
// };

export const removeItemFromCart = (cartItems, itemToRemove) =>
    cartItems.flatMap((item) => {
        return item.id !== itemToRemove.id ?
            item :
            item.quantity === 1 ? [] : {
                ...item,
                quantity: item.quantity - 1
            };
    });