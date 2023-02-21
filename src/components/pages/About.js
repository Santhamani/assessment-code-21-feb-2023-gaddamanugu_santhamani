
import './About.css';
import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <div className='about'>
                    <h1>About Us</h1>
                    <p className='about-tag'>Allow us to tell you a short story...</p>
                </div>
                <div className='about-content'>
                    <div className='content'>
                        <img src='./images/abouts_5.png' className='about-img' />
                        <div className='chapter'>
                            <h3>Chapter I</h3>
                            <div className='about-aminities'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <img src='./images/about_6.png' className='about-img' />
                        <div className='chapter'>
                            <h3>Chapter II</h3>
                            <div className='about-aminities'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-content'>
                    <div className='content'>
                        <img src='./images/aboutus_3.png' className='about-img' />
                        <div className='chapter'>
                            <h3>Chapter III</h3>
                            <div className='about-aminities'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <img src='./images/aboutus_4.png' className='about-img' />
                        <div className='chapter'>
                            <h3>Chapter IV</h3>
                            <div className='about-aminities'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;
