import React from 'react'
import { Link } from 'react-router-dom'


export default function(){
    return(
        <div>
            <h2>Oops, no match!</h2>
            <Link to='/'>Go Home</Link>
        </div>
    )
}