import React from 'react'
import './RandomQuotes.css' 
import { useState } from 'react'
import twitter from '../images/icons8-twitterx-30.png'
import refresh from '../images/icons8-refresh-30.png'
export const RandomQuotes = () => { 
    let quotes=[];

    async function loadQuotes(){
        const response=await fetch("https://type.fit/api/quotes");
        quotes=await response.json();
    }
    const random=()=>{
        const select=quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const twitters=()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`)
    }

    const [quote,setQuote]=useState({
        text:"Difficulties increase the nearer we get to the goal.",
        author:"Johann Wolfgang von goethe",
    });
    loadQuotes();
    return (
    <div className='container'>
        <div className="quotes">
            {quote.text}
        </div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">- {quote.author.split(',')[0]}</div>
            <div className="icon">
                <img src={refresh} onClick={()=>{random()}} alt="refresh"/>
                <img src={twitter} onClick={()=>{twitters()}} alt="twitter"/>
            </div>
        </div>
    </div>
    
  )
}
