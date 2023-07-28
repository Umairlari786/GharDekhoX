import React from 'react'
import "./contact.css"
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        <div className='flexColStart c-left'>
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'>Easy to contact us</span>
            <span className='secondaryText'>We always ready to help by providing the best services for you.We belive a good blace to live can make your life better</span>

            <div className='flexColStart contactModes'>
                {/*left side */}
                <div className='flexStart row'>
                    <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <MdCall size ={25}></MdCall>
                            </div>
                            <div className='flexColStart detail'>
                             <span className='primaryText'>call</span>
                                <span className='secondaryText'>021 123 145 12</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Call Now</div>
                    </div>
                    {/* second */}

                    <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size ={25}></BsFillChatDotsFill>
                            </div>
                            <div className='flexColStart detail'>
                             <span className='primaryText'>chat</span>
                                <span className='secondaryText'>021 123 145 12</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Chat Now</div>
                    </div>

                 </div>

                 {/*second row */}

                 <div className='flexStart row'>
                    <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size ={25}></BsFillChatDotsFill>
                            </div>
                            <div className='flexColStart detail'>
                             <span className='primaryText'>VideoCall</span>
                                <span className='secondaryText'>021 123 145 12</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Call Now</div>
                    </div>
                    {/* fourth Mode */}

                    <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <HiChatBubbleBottomCenter size ={25}></HiChatBubbleBottomCenter>
                            </div>
                            <div className='flexColStart detail'>
                             <span className='primaryText'>Message</span>
                                <span className='secondaryText'>021 123 145 12</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Message Now</div>
                    </div>

                 </div>
            </div>

        </div>


      <div className='c-right'>
                    <div className='image-container'>
                        <img src='./contact.jpg' alt='home'></img>
                    </div>
         </div>
      </div>
    </section>
  )
}

export default Contact
