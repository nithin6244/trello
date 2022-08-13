import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCard } from '../../state/actions/actions'
import "./card.css"
export default function Card(props) {
    const dispatch=useDispatch()

    const handleClick=(id)=>{
        dispatch({
            type:"DELETE",
            payload:id
        })
    }
    return (
        <div className='cardContainer'>
            <div className="cardTitle">
                <h3>{props.title}</h3>
            </div>
            <div className="cardDescription">
                <p>{props.description}</p>
            
            </div>

            <div className="button">
                <button onClick={()=>{
                    const del=window.confirm("Do You Want to delete")
                    if(del)
                    {
                       handleClick(props.cardId)
                    }
                }}>Delete</button>
            </div>
         </div>
    )
}
