import React from 'react'
import './SendGift.scss'
import img from "../../img/send.png";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";


const SendGift = () => {
    const sendEmail = e => {
        e.preventDefault();
        
        emailjs.sendForm('gmail', 'christmas', e.target, 'user_sgJIpTNQzaTR9saHvr4Wn')
          .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Le Père Noël est en route pour offrir votre cadeau 🎅🎅',
                    showConfirmButton: false,
                    timer: 1500
                })
          }, (error) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tornade est malade 🙁',
                showConfirmButton: false,
                timer: 1500
              })
          });
      }

    
    return (
        <section className="send section">
            <div className="send__container bd-container bd-grid">
                <div className="send__content">
                    <h2 className="section-title-center Send__title">Envoyer un cadeau maintenant.</h2>
                    <p className="send__description">Commencer à offrir avant la fin des vacances. Ecrivez l'adresse de la personnes qui recevra le cadeau.</p>
                    <form onSubmit={sendEmail} >
                        <div className="send__direction">
                            <input type="text" name="address" placeholder="Adresse email" className="send__input" required />
                            <input type="submit" className="button send__button" value="Send" />
                        </div>
                    </form>
                </div>

                <div className="send__img">
                    <img src={img} alt="image send" />
                </div>
            </div>
            
        </section>
    )
}

export default SendGift
