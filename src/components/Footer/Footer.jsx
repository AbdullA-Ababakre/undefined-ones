import React, { Fragment, useEffect, useState} from 'react'
import './Footer.css'
import Twitter from "../../assets/images/twitter.png";
// import Discord from "../../assets/images/discord.png";
import Opensea from "../../assets/images/opensea.png";

const Footer =  () =>  {

    useEffect(()=>{
    })

    return(
        <Fragment>
            <footer >
                <div className='footer-container'>
                    <div className='copyright-text'>
                        ©2022 Project UndefinedOnes In Space. All rights reserved.
                    </div>
                    <div className='icon-container'>
                        <a href='https://twitter.com/Undefined_Ones' target={'_blank'} style={{display: 'flex',alignItems:'center'}}>
                            <img src={ Twitter } alt="" className='icon'/>
                        </a>
                        <a href='https://opensea.io/collection/undefinedones' target={'_blank'} style={{display: 'flex',alignItems:'center'}}>
                            <img style={{height:'24px',width:'24px'}} src={ Opensea } alt="" className='icon'/>
                        </a>
                    </div>               
                </div>
                
            </footer>
        </Fragment>
    )
}

export default Footer
