import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product'


const SearchItems = ({cart, setCart}) => {

  const {term} = useParams();

  const [filterData, setfilterData] = useState([]);

  
  useEffect(()=>{
    const filterData= () => {
      const data = items.filter((p=>p.title.toLowerCase().includes(term.toLowerCase())));
      setfilterData(data)
    }

    filterData();

  },[term])

  

  return (
    <Product cart={cart} setCart={setCart} items={filterData}/>
  )
}

export default SearchItems