import { useState } from "react";
import ConnectButton from "../ConnectButton/ConnectButton";
import MintButton from "../MintButton/MintButton";
import "./index.css"
import logo from "../../assets/images/logo.png"
const Header = () => {
  const [connect,setConnect] = useState()
  const [mintCount,setMintCount] = useState()

  const Connect = (e) => {
    setConnect(e)
  }

  const Count = (e) => {
    setMintCount(e)
  }

  return (
    <header>
      <div className="headerWidth">
        <div className="logoLeft"></div>
        <ConnectButton className="buttonRight" connect={Connect} mintcount={Count}/>
      </div>
      <MintButton connect={connect} mintcount={mintCount}/>
    </header>
  )
}

export default Header;