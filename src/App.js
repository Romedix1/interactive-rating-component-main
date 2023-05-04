import React , {useState} from 'react';
import appStyles from './app.css'
import starIcon from './images/icon-star.svg'
import thanks from './images/illustration-thank-you.svg'




function App() {

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [items, setItems] = useState("none")

    const Button = ({number}) =>{
        return (
            <button onClick={() => setItems(number)} className='rating-list-element'>{number}</button>
        )
    }
    
    
    return (
        <>
        {!isSubmitted && 
        <main className='container'>
            <section className='text-section'>

                <article className='star-box'>
                    <img className='star-icon' src={starIcon} alt='star icon' />
                </article>

                <h1 className='main-header'>How did we do?</h1>

                <p className='main-text'>
                    Please let us know how we did with your support request. All feedback is appreciated 
                    to help us improve our offering!
                </p>
            </section>

            <section className='rating-section'>
                <ul className='rating-list'>
                    <li>
                        <Button number={1}/>
                    </li>
                    <li>
                        <Button number={2}/>
                    </li>
                    <li>
                        <Button number={3}/>
                    </li>
                    <li>
                        <Button number={4}/>
                    </li>
                    <li>
                        <Button number={5}/>
                    </li>
                </ul>
                
                <button onClick={()=> setIsSubmitted(true)} className='submit-button'>SUBMIT</button>
            </section>

        </main>
        }
        {isSubmitted && <Thanks items={items} setIsSubmitted={setIsSubmitted} />}

        </>
    )
}


     const Thanks = ({items, setIsSubmitted}) =>{
     return (
            <main className='container'>
                <section className='rate-section'>
                    <img className='thanksImg' src={thanks} alt='thanks img' />
                </section>

                <p className='rate-area'>You selected {items} out of 5</p>

                <section className='rate-text-section'>
                    <h2 className='thanks-text'>Thank you!</h2>

                    <p class='bottom-text-area'>We appreciate you taking the time to give a rating. If you ever need more support, 
                    don’t hesitate to get in touch!</p>

                </section>
            
            </main>
        )
    }


export default App;