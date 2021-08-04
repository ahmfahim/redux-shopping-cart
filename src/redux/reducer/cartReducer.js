import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        {
            id: 1,
            name: 'Asus Laptop',
            imgUrl: 'https://th.bing.com/th/id/R.5d0417a994f1290a3bfde9676640663d?rik=zb%2faVj55YBbjBg&pid=ImgRaw&r=0'
        },
        {
            id: 2,
            name: 'Lenovo Laptop',
            imgUrl: 'https://th.bing.com/th/id/R.602094a28c84da11600d05483af6c997?rik=b0zJKnwz47pBLg&pid=ImgRaw&r=0'
        },
        {
            id: 3,
            name: 'Mac book Laptop',
            imgUrl: 'https://th.bing.com/th/id/OIP.hZOYBxk1erwCHpTFUkIHygHaEa?pid=ImgDet&rs=1'
        },
        {
            id: 4,
            name: 'Samsung Laptop',
            imgUrl: 'https://2.bp.blogspot.com/-MMFSsDMVMuA/UjI_8dMK8BI/AAAAAAAAA0s/zQB70soIEs0/s1600/samsung-laptop.jpg'
        },
        {
            id: 5,
            name: 'HP Laptop',
            imgUrl: 'https://podmall.com.ng/wp-content/uploads/2017/07/HP-ENVY-15-as101na-Laptop.jpg'
        }
    ]
};

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [...state.cart, {
                    productId:action.id,
                    name:action.name, 
                    imgUrl: action.imgUrl,
                    cartId:state.cart.length + 1}
                ],
                products: [...state.products]
            }
        case REMOVE_FROM_CART:
            return {
                cart: [...state.cart.filter(item => item.cartId !== action.id)],
                products: [...state.products]
            }
        default:
            return state;
    }
}