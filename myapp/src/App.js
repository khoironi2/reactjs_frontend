import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

function App() {
  
  return (
  <div className="Parentbox">
    <FotoProduk/>
    <ProdukInfo isDiscount="yes" name="YOGS ARAB" catetogry="LEBARAN"/>
    <ReviewItems/>
    
  </div>

  );
}




function FotoProduk(){

  return(
    <div className="Foto">
    <img src="sepatu khoironi.png"/>
    </div>
  );
  
}

function CheckDiscount(props){
  const {isDiscount, discount} = props;
  if(isDiscount == "yes"){
    return(
      <p>Discount {discount}% Off</p>
    );
  }else if (isDiscount == "coming"){
    return(
      <p>Diskon Segera datang</p>
    );
  }else{
    return(
      <p>Belum ada discount</p>
    );
  }
}

function ProdukInfo(props) {
  const {catetogry, name, isDiscount} = props;
  var price = 74000000;

  const benefit = ["nyaman dikaki", "nyaman di dada", "nyaman di jual"]
  const listbenefit = benefit.map((benefits) =>
  <li key={benefits}>
    {benefits}
  </li>
  );
  return (
    <div>
       <div className="Deskripsi">
        <p className="Cate">{catetogry}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {price}</p>
        <CheckDiscount isDiscount={isDiscount} discount={60}/>
        <p className="Info">
        RAJ Empire Sepatu Sneakers Pria, sneakers shoes berbahan comfort lining yang didesain trendy dengan detail neat stitching, eyelets, dan foam outsole, nyaman saat digunakan.
        </p>
        {listbenefit}

        <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
  
      </div>
  
    </div>
    );

}

function TambahCart(e){
  return console.log("membeli " + e)

}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;
