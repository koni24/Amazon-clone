import React, { Component } from 'react'
import AdvertisementFour from './AdvertisememtFour/AdvertisementFour';
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import './MainPage.css'
class MainPage extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <div className='mainpage'>
                <div style={{paddingTop:"270px", display: "flex", flexWrap:"wrap"}}>
                    <AdvertisementOne/>
                    <AdvertisementFour/>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                    <AdvertisementOne/>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                    <AdvertisementOne/>
                </div>
            </div>
        );
    }
}
export default MainPage;