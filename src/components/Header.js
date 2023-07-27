import { useSelector } from "react-redux"
import { getNumberOfProductsInCart } from "../store/actions/cartActions"
import { getUserInfo } from "../store/actions/userAction";

export default function Header() {

    const numberOfProductsInCart = useSelector(getNumberOfProductsInCart);
    const userInfo = useSelector(getUserInfo);

    return (
        <nav>
            <ul>
                <li>
                    Home
                </li>
                <li style={{marginLeft: "20px"}}>
                    User: {userInfo.username} - {userInfo.role}
                </li>
            </ul>
            <ul>
                <li>{numberOfProductsInCart} Cart</li>
            </ul>
        </nav>
    )
}