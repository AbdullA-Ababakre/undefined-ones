import { useState } from "react";
import "./index.css"
import logo from "../../assets/images/logo2.gif"
import mintBtn from "../../assets/images/mint.png"
const MintButton = function (props) {

  const [nftContract,setNftContract] = useState('')
  const [showMint,setShowMint] = useState(false)
  const [value , setValue] = useState(1)
  const [mintCount,setMintCount] = useState()

  setInterval(()=>{
    if(props.mintcount) {
      setMintCount(props.mintcount)
      // console.log(props.mintcount);
    }
  },1000)

  const Mint = async() => {
    const data = Date.now() / 1000
    if(data < 1656345600) return alert('Sale is not on')
    const minus = 10 ** 18
    // console.log('buy count',value * 0.02 * minus);
    if(mintCount  < 2000){
      var price = 0
    }else{
      var price = value * 0.02 * minus
    }
    console.log(price);

    const abi = [{"inputs":[{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintOneTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleConfig","outputs":[{"internalType":"uint32","name":"freeMintCount","type":"uint32"},{"internalType":"uint64","name":"publicSalePriceWei","type":"uint64"},{"internalType":"uint256","name":"saleStartingTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_saleStartingTime","type":"uint256"}],"name":"setStartingTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]
    const nftContractAddress = "0x8E82463AF4071DEB614A1EA528ce091C4CA920dE";
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })

    const nftContract = new props.connect.eth.Contract(abi, nftContractAddress);
    setNftContract(nftContract);
    await nftContract.methods.mint(accounts[0], value).send({ from: accounts[0], value: price });

    // await nftContract.methods.totalSupply().call();
  };
  const showMintBtn = () => {
    if(!props.connect) return alert('Connect your wallet before minting')
    setShowMint(true)
  }
  const hideMintBtn = () => {
    setShowMint(false)
  }
  // buy 
  const inputChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value)
  }



  return (
    <>
      <button className="mintButton" onClick={() => showMintBtn()}>
        Mint
      </button>
      {
        showMint ? (
          <div className="content">
            {/* <img className="contentLogo" src={logo} alt="" /> */}
            <div className="contentDel" onClick={()=> hideMintBtn()}>
              <svg t="1656218022245" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2917" width="200" height="200"><path d="M512 0C229.29408 0 0 229.248 0 512c0 282.76736 229.26336 512 512 512 282.76736 0 512-229.18144 512-512C1024 229.29408 794.76736 0 512 0z m209.90976 654.09024a47.5904 47.5904 0 0 1 14.08512 33.90976 47.95392 47.95392 0 0 1-47.99488 47.99488 47.75936 47.75936 0 0 1-33.90976-14.08512L512 579.89632l-141.99296 142.05952a47.9488 47.9488 0 0 1-34.00704 14.08512c-26.45504 0-47.95904-21.45792-47.95904-48.01536A47.68768 47.68768 0 0 1 302.08 654.15168L444.15488 512 302.1056 369.95584a47.88224 47.88224 0 0 1-14.03904-33.95584 47.99488 47.99488 0 0 1 81.92-33.95584l141.99296 142.07488L654.07488 302.08a47.92832 47.92832 0 0 1 33.90976-14.03904c26.48576 0 47.99488 21.45792 47.99488 47.99488a47.75424 47.75424 0 0 1-14.08512 33.95584l-141.99808 141.99296 142.01344 142.1056z m0 0" fill="#1296db" p-id="2918"></path></svg>
            </div>
            <div className="contentTitle">mint</div>
            {/* <div className="contentText">Select your bbys quantity</div> */}
            <div className="contentText">First 2000 nfts free mint</div>
            <div className="contentMax">
              <text className="contentCount" >MAX 5</text>
              <input className="contentInput" type="number" value={value} min="1" max="5" step='1' onChange={(value)=>inputChange(value)}/>
              <div className="contentCount"><text>*0.02 ETH</text></div>
            </div>
            {/* {
              value == 5 ? <text className="contentMax" >MAX 5 NFTs</text> :''
            } */}
            
            <div className="contentText">Progress <text>{mintCount}</text>/10000</div>
            
            <img className="mintBtn" src={mintBtn} onClick={()=>Mint()}/> 
          </div>
        ):''
      }
      
    </>
  );
};

export default MintButton;
