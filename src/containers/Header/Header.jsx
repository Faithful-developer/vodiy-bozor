import './Header.scss'
import LocationIcon from '../../assets/images/icons/location.svg'
import LogoIcon from '../../assets/images/icons/logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-top">
                    <div className="header-top-left">
                        <a href="#">
                            <img src={LocationIcon} alt="location-icon"/>
                            Ташкент
                        </a>
                        <select name="" id="">
                            <option value="uzs">UZS</option>
                            <option value="rub">RUB</option>
                            <option value="usd">USD</option>
                        </select>
                    </div>
                    <div className="header-top-right">
                        <ul>
                            <li>
                                <a href="#">
                                    Поддержка
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Доставка
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Гарантия
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-center">
                    <div className="img-wrapper">
                        <img src={LogoIcon} alt=""/>
                    </div>
                    <div className="input-wrapper">
                        <form action="" className="form">
                            <input type="text" placeholder='Поиск' />
                            <button type="submit">
                                Найти
                            </button>
                        </form>
                    </div>
                </div>
                <div className="header-bottom">

                </div>
            </div>
        </header>
    )
}

export default Header