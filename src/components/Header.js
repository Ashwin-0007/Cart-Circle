import '../App.css';

function Header(props) {
  return (
    <div className='flex Shoping-Card'>
     <div onClick={() => props.handleShow(false)} > <b>Cart Circle</b>  </div>
    <div onClick={() => props.handleShow(true)}> <img className='header-icon' src="https://img.icons8.com/?size=48&id=59997&format=png"/>
            <sup>{props.count}</sup>
    </div>
    </div>
    
  );
}

export default Header;