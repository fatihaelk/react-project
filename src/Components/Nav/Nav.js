import React, { useState, useEffect } from 'react';
import './Nav.scss';
import 'boxicons';
import * as Scroll from 'react-scroll';
import { Link,  animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

const Nav = ({changeTheme, setChangeTheme}) => {
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.pageYOffset);

    useEffect(() => {
        let body = document.body;
            changeTheme
            ? body.classList.add('dark-theme')
            : body.classList.remove('dark-theme');

        const changeWidth = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [changeTheme])

    const display = () => setToggle(!toggle);
    const theme = () => setChangeTheme(!changeTheme);

    /*======= SCROLL TOP  =======*/
    const changeHeight = () => {
        setHeight(window.pageYOffset);
    }
    window.addEventListener('scroll', changeHeight);


  return (
    <>
    {
           height >= 300 && (
                <Link className="scrolltop" onClick={ () => scroll.scrollTo('home')} >
                <box-icon type='solid' name='up-arrow-alt'/>
                </Link>
            )
        }
       
       <header className="l-header" name="header">
                <nav className="nav bd-container">
                    <Link to="home" className="nav__logo">Christmas Gift</Link>

                    <div className={toggle ? "show-menu nav__menu" : "nav__menu"}>
                        <ul className="nav__list">
                            <li  className="nav__item">
                                <Link to="home"  className="nav__link" activeClass="active-link" spy={true} smooth={true} duration={100}  >Accueil</Link>
                            </li>

                            <li  className="nav__item">
                                <Link to="share"  className="nav__link" activeClass="active-link" spy={true} smooth={true} duration={100}  >Recherche</Link>
                            </li>

                            <li  className="nav__item">
                                <Link to="decoration" className="nav__link" activeClass="active-link" spy={true} smooth={true} duration={100}  >Decorations</Link>
                            </li>

                            <li  className="nav__item">
                                <Link to="accessory" className="nav__link" activeClass="active-link" spy={true} smooth={true} duration={100}  >Accessoires</Link>
                            </li>

                            <li  className="change-theme" onClick={theme}>
                                {
                                    changeTheme ? <box-icon color="#F3F1F1" size="md" name='toggle-right'/>: <box-icon  size="md" name='toggle-left'/>
                                }
                            </li>
                        </ul>
                    </div>

                    {width <= 768 &&
                    <span onClick={display} >
                        {changeTheme ? <box-icon color="#F3F1F1" name='grid-alt'/> :  <box-icon name='grid-alt'/>}
                    </span> }
                </nav>
            </header>
    </>
  );
};

export default Nav;
