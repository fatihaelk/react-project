import './Footer.scss'
import 'boxicons';

const Footer = ({changeTheme}) => {
    return (
        <footer className='footer section'>
            <div className="footer__container bd-container bd-grid">
                <div className="footer__content">
                    <h3 className="footer__title">
                        <a to='/'> Christmas Gift </a>
                    </h3>
                    <p className="footer__description"> J'ai envoyé un cadeau et ça procure  <br/>de la joie</p>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Vos services</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Prix </a> </li>
                        <li><a href="#" className="footer__link"> Promotions </a> </li>
                        <li><a href="#" className="footer__link"> mode de livraison </a> </li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Notre compagnie</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Blog</a></li>
                        <li><a href="#" className="footer__link">A propos us</a></li>
                        <li><a href="#" className="footer__link">Notre mission</a></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Réseaux Sociaux</h3>
                    <a href="#" className="footer__social"><box-icon color={changeTheme ? "#F3F1F1" : 'black'}  name='facebook-circle' type='logo' ></box-icon></a>
                    <a href="#" className="footer__social"><box-icon color={changeTheme ? "#F3F1F1" : 'black'}  name='twitter' type='logo' ></box-icon></a>
                    <a href="#" className="footer__social"><box-icon color={changeTheme ? "#F3F1F1" : 'black'}  name='instagram-alt' type='logo' ></box-icon></a>
                </div>

            </div>
                <p className="footer copy"> &#169; 2021 <a href="https://www.linkedin.com/in/fatiha-elk/" target='_blank'> FK Web Development</a> </p>
        </footer>
    )
}

export default Footer
