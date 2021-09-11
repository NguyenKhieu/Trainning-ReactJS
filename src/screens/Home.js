import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import {getP} from '../services/Api'
import { ClipLoader } from 'react-spinners';
// import { ClipLoader } from 'react-spinners/ClipLoader';
import Items from "../components/items"


export default function Home() {

  const [productList, setProductList] = useState([])

//Cach 1:
  // useEffect(() => {
  //   const getProduct = () => {
  //     axios.get('https://mobileshop.hungvu.net/swagger/')
  //     .then(function(response){
  //       //handle success 
  //       console.log(response);
  //     })
  //     .catch(function(error){
  //       //handle error
  //       console.log(error);
  //     })
  //     .then(function() {
  //       //always executed
  //     });
  //   };
  //   getProduct();
  // }, []);

//cach 2:
const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getProduct = async() => {
      setLoading(true)
      try {
        const result = await getP();
        setLoading(false)
        setProductList(result.data.data)
        console.log('result', result);
      } catch (error) {
        setLoading(false)
      }
     
    }
    getProduct()
  },[])


  const history = useHistory();
  const onMoveDetail = (e) =>{
    e.preventDefault()
    history.push({pathname:'/ProductDetail/1', state: {id:1}});
  }
    return (
        <>
            <div class="products">
            <div className="sweet-loading">
            <ClipLoader color={'green'} loading={loading}  size={50} /> </div>
                <h3>Sản phẩm nổi bật</h3>
                <div class="product-list card-deck">
                  {/* <div class="product-item card text-center">
                   <Link to = "ProductDetail/1" >
                      <img src="images/product-1.png" />
                      </Link>
                    <h4>
                      <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
                    </h4>
                    <p>
                      Giá Bán: <span>32.990.000đ</span>
                    </p>
                  </div>
                  <div class="product-item card text-center" onClick= {onMoveDetail}>
                    <a href="#">
                      <img src="images/product-2.png" />
                    </a>
                    <h4>
                      <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
                    </h4>
                    <p>
                      Giá Bán: <span>32.990.000đ</span>
                    </p>
                  </div>
                   */}
                   {productList?.map(e => <Items data= {e} /> )}
                   
                </div>
               {/* error data */}
              </div>
              <div class="products">
                <h3>Sản phẩm mới</h3>
               
                <div class="product-list card-deck">
                
                  <div class="product-item card text-center">
                    <a href="#">
                      <img src="images/product-12.png" />
                    </a>
                    <h4>
                      <a href="#">iPhone Xs Max 2 Sim - 256GB</a>
                    </h4>
                    <p>
                      Giá Bán: <span>32.990.000đ</span>
                    </p>
                  </div>
                </div>
              </div>
        </>
    )
}
