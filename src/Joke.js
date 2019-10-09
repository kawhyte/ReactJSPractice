import React from 'react'


function Joke(props){

    console.log(props.jokes.question)
return(
<div>

<h1>Q: {props.jokes.question}</h1>
<h1>A: {props.jokes.punch}</h1>

</div>


)

}

export default Joke