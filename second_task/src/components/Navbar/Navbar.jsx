import css from './Navbar.module.css';
import { useHistory } from 'react-router-dom';

const Navbar = (props) => {
    let history = useHistory();
    const logout = () => {
        localStorage.isLogin = 'false';
        history.push('/');
    }
    // if(localStorage.login == 'false'){
    //
    // }
    return (
        <div className={`${css.navbar} ${css.navbarM}`}>
            {props.children}
            <button onClick={logout}>Logout</button>
        </div>
    );
}
export default Navbar;