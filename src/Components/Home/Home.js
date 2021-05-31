import React from 'react';
import hand from '../../img/home.png'
import Button from '../Button/Button'
import './Home.scss'

const Home = () => {
    return (
        <section className="home" name="home">
            <div className="home__container bd-container bd-grid">
                <div className="home__img">
                    <img src={hand} alt="home image" />
                </div>

                <div className="home__data">
                    <h1 className="home__title"> Envoyez des cadeaux pour noël.</h1>
                    <div className="home__description">
                    En ces fêtes de fin d'année, envoyez un cadeau à votre bien-aimé et partagez la joie de noël. </div>
                    <Button link={'#'} children={"C'est partie"} />

                </div>
            </div>            
        </section>
    )
}

export default Home
