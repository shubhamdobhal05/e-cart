const cart = [];


const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //checking if product is already exist
            const productExist = state.find((x) => x.id === product.id);
            if(productExist) {
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1} : x);
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

        case "DELETEITEM":
            const exist = state.find((x) => x.id === product.id);
            if(exist.qty === 1) {
                return state.filter((x) => x.id !== exist.id);
            } else {
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty - 1} : x);
            }
            break;

            
        



        default:
            return state;
            break;
    }
}


export default handleCart;