import React from 'react'
import "./List.scss"
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'


const List = ({catId,sort,maxPrice, subCats})=>{

    const {data, loading, error} = useFetch(
        `/products?populate=*&[filters][categories][id][$eq]=${catId}
        ${subCats.map(item=>`&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );
    console.log(data)
  return (
    <div className='list'>
        {   
            error
                ? console.log(error)
                :
            loading 
                ? "loading"
                :data?.map(item => 
                <Card item={item} key={item.attributes.id}/>
        )}          
    </div>
  )
}

export default List