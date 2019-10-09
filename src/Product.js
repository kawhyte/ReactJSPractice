import React from 'react'


function Product(props){

console.log(props)
return(
<div>
<h1>{props.name}</h1>
<p>Price: ${props.price}</p>
<p>Description: {props.description}</p>

<hr />

</div>
)
}

export default Product