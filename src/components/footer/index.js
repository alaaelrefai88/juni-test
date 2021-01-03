import React, {useState} from 'react';
import './style.css';

function Footer(props) {
    const [loading, setLoading] = useState(false);

    // simulando o carregamento de botão
    function loadButton() {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false);
        },2000)
    }
    return(
        <div  className="footer">
            <div className="wrapper">
                <div className="img-footer">
                    <img src={props.img} alt='product'/>
                    <div className="info">
                        <div>{props.name}</div>
                        <p>Preço: R${props.price} </p>
                        <p>Preço com desconto: R${props.discountedPrice}</p>
                    </div>
                </div>
                {}
                <div className='buttons'>
                    {loading ?
                    (<button className='buy-btn spinner'>
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </button>):
                    (<button className='buy-btn' onClick={loadButton}> ADICIONAR A SACOLA</button>)
                    }
                    <button className='close-btn'><span>x</span></button>
                </div>
            </div>
        </div>
    )
}

export default Footer;