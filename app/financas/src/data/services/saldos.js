import { useState, useEffect } from 'react';

const BaseUrl = process.env.REACT_APP_URL_API;

export default function GetSaldo(url){
    const [saldo, setSaldo] = useState([]);
     useEffect(() => {
        fetch(BaseUrl + url)
           .then((response) => response.json())
           .then((data) => {
              setSaldo(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
     return (
      saldo.saldo
     )
  }
  