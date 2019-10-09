import React from 'react'


function Joke(props){

    console.log(props)
return(
<div>

<h1>Q: {props.question}</h1>
<h1>A: {props.punch}</h1>
<hr />

</div>
)
}

export default Joke