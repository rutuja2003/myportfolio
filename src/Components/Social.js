import { useState } from 'react'
import { Plus } from 'react-bootstrap-icons'
import { social } from '../details'

const Social = () => {
    const [show,setShow] = useState(false);
    const toggleDisplayHandler = () => {
        if(show) {
            setShow(false);
        }else{
            setShow(true);
        }
    }
  return (
    <div className="social">
        <div className="social__items" style={{display:(show?"block":"none")}}>
            {social.map((item,id) => <div key={id} >
                <a href={item.link} target="_blank"> <img className="img-fluid" src={item.img}/></a>
            </div>)}
        </div>
        <div className={`social__button ${(show?"rotate":"")}`} onClick={toggleDisplayHandler}>
            <Plus size={35} color="red" className='rotate' />
        </div>
    </div>
  )
}

export default Social