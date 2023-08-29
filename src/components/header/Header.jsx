// import React from 'react'
import { BsEye } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { RxExit } from "react-icons/rx";
import LogoVB from "../../assets/vb_logo_white.png"

const Header = () => {
  return (
    <div className="header">
        <header>
            <div className="logo-header">
                <img src={LogoVB} className="image-vb" alt="" />
                <h2 className="ola">Olá, Bom dia!</h2>
            </div>
            
            <div className="icones-header">
                <BsEye className="icon_header"/>
                <BiMessageDetail className="icon_header"/>
                <RxExit className="icon_header"/>
            </div>
        </header>
    </div>
    
  )
}

export default Header