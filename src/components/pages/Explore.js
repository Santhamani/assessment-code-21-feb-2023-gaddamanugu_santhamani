
import './Explore.css';
import React from 'react';

class Explore extends React.Component {
    render() {
        return (
            <div>
                <div className='explore'>
                    <h1>Explore</h1>
                    <p className='explore-tag'>From one-guest rooms to <br></br>penthouses with pools and gardens</p>
                </div>
                <div className='explore-content'>
                    <div className='e-content'>
                        <img src='./images/explore_room.png' className='explore-img' />
                        <div className='cost'>
                            <div className='aminities'>
                            <h3>Room with King Bed</h3>
                                <span className='fare'> 35$ </span>
                                <span className='fare'> 28sqft. </span>
                            </div>
                            <div className='aminities'>
                                <span className='book'>
                                    Book!
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='e-content'>
                        <img src='./images/explore_2.png' className='explore-img' />
                        <div className='cost'>
                            <div className='aminities'>
                            <h3>Room with King Bed</h3>
                                <span className='fare'> 35$ </span>
                                <span className='fare'> 28sqft. </span>
                            </div>
                            <div className='aminities'>
                                <span className='book'>
                                    Book!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Explore;
