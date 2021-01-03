import './style.css';

function Footer(props) {
    return(
        <div  className="footer">
            <div className="wrapper">
                <div className="img-footer">
                    <img src={props.img} alt={'error'}/>
                    <div className="info">
                        <div>RAGLAN FIO TINTO LISTRA CAROL</div>
                        <p>Preço: R$  {props.price} </p>
                        <p>Preço com desconto: R$ {props.price}</p>    
                    </div>
                </div>
                <div className='buttons'>
                    <button className='buy-btn'>ADICIONAR A SACOLA</button>
                    <button className='close-btn'><span>x</span></button>
                </div>
            </div>
        </div>
    )
}

export default Footer;