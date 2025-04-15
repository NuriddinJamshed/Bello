import React from 'react'
import "./App.css"

const App = () => {
  return (
    <div>
      <div className='header'>
        <div className='nav'>
          <div className='menu'>
            <img src="../public/Frame (11).png" alt="" />
            <a href="#" className='a'>Life insurance</a>
            <a href="#" className='selected'>Why Bello</a>
            <a href="#" className='a'>Help</a>
          </div>
          <div className='login'>
            <a href="#" className='logLink'>Log in</a>
            <a href="#" className='btnLog'>GET MY PRICE</a>
          </div>
        </div>
        <p className='hr1'></p>
        <div className='sectionHeader'>
          <div className='left'>
            <span className='span'>MEET BELLO</span>
            <h1 className='h1'>A new kind of life insurance</h1>
            <p className='p'>Secure your family's financial future, in as little as 10 minutes.</p>
            <button className='getBtn'>Get my price <samp><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></samp></button>
          </div>
          <img className='rightImg' src="../public/hero 1.png" alt="" />
        </div>
      </div>
      <div className='section1'>
        <img src="../public/Frame (7).png" alt="" />
        <div className='right'>
        <span className='span'>Secure your future</span>
            <h1 className='h2'>It’s more affordable than you think</h1>
            <p className='p'>Life insurance shouldn’t be confusing or expensive. Bello’s term life insurance makes protecting your loved ones easy and affordable.</p>
            <button className='myBtn'>Get my price <samp><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></samp></button>
        </div>
      </div>
      <div className='section1 section11'>
        <div className='right'>
            <span className='span'>Technology meets service</span>
            <h1 className='h2'>We're here to help</h1>
            <p className='p'>Bella, our smart bot, can guide you to your perfect policy. There’s also human help whenever you need it.</p>
            <button className='myBtn helpBtn'>Get help <samp><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></samp></button>
        </div>
        <img src="../public/Frame (8).png" alt="" />
      </div>
      <div className='section2'>
        <img className='imgUmbrella' src="../public/Rectangle.png" alt="" />
        <span className='span'>Top-Rated Term Life Insurance</span>
        <h2 className='h2'>You’re in safe hands</h2>
        <p className='p'>We've partnered with, [insert underwriter], one of the world’s largest, most trusted insurance companies. This means we can ensure reliability in paying Claims.</p>
        <div className='box'>
          <div className='card'>
            <img src="../public/top-rated 1.png" alt="" />
            <h2>Top-Rated</h2>
            <p>A+ Financial Strength Rating by A.M. Best.  
            What does this mean?</p>
          </div>
          <div className='card'>
            <img src="../public/experience 1.png" alt="" />
            <h2>Expert guidance</h2>
            <p>We've placed millions of dollars in coverage people nationwide.</p>
          </div>
          <div className='card'>
            <img src="../public/insurance 1.png" alt="" />
            <h2>We care</h2>
            <p>We care about you. We’re a 5 star insurance company. Well… Close enough!</p>
          </div>
        </div>
      </div>
      <div className='section2 section22'>
        <img className='dog' src="../public/Rectangle (3).png" alt="" />
        <span className='span'>How it works</span>
        <h2 className='h2' style={{color: "#fff"}}>Affordable life insurance in minutes</h2>
        <p className='p' style={{color: "#ACB4BF"}}>We use technology to save you time and money – no pushy sales agents, paperwork, or extra fees. Just a few clicks and you’re done.</p>
        <img src="../public/Path 17.png" className='path' alt="" />
        <div className='rains'>
          <img className='rain' src="../public/4 (2).png" alt="" />
          <img className='rain' src="../public/4 (2).png" alt="" />
        </div>
        <div className='box' style={{width: "80%"}}>
          <div className='card2'>
            <img style={{position: "relative", zIndex: "2"}} src="../public/Rectangle (4).png" alt="" />
            <img className='circle' src="../public/Rectangle (6).png" alt="" />
            <h2 style={{color: "#fff"}}>Get My Price</h2>
            <p style={{color: "#ACB4BF"}}>Choose the amount that you would like to be covered for and we’ll give you a quote.</p>
          </div>
          <div className='card2'>
            <img style={{position: "relative", zIndex: "2"}} src="../public/Rectangle (5).png" alt="" />
            <img className='circle' src="../public/Rectangle (6).png" alt="" />
            <h2 style={{color: "#fff"}}>Apply</h2>
            <p style={{color: "#ACB4BF"}}>Answer a few questions and get your final price.</p>
          </div>
          <div className='card2'>
            <img style={{position: "relative", zIndex: "2"}} src="../public/3 1.png" alt="" />
            <img className='circle' src="../public/Rectangle (6).png" alt="" />
            <h2 style={{color: "#fff"}}>You’re Covered</h2>
            <p style={{color: "#ACB4BF"}}>Congratulations on securing your loved ones financial future!</p>
          </div>
          <img className='confetti' src="../public/confetti 1.png" alt="" />
        </div>
        <button className='getBtn'>Get my price <samp><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></samp></button>
      </div>
      <div className='section1' style={{marginTop: "0px", paddingTop: "150px", marginBottom: "0px", paddingBottom: "50px"}}>
        <div>
        <img src="../public/Frame (9).png" alt="" />
        <p className='smile'>Nerd out in our Learning Center 🤓</p>
        </div>
        <div className='right right2'>
        <span className='span'>You've Got This</span>
            <h1 className='h2'>Everything you need—
            completely free</h1>
            <p className='p'>Here’s the latest info, guides, and, helpful tools, from the Bello team. Learn about life insurance, finances, health and wellness.</p>
            <button className='myBtn'>Visit Learning Center <samp><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></samp></button>
        </div>
      </div>
      <div className='section3'>
        <div className="box1">
          <h1>Calculator</h1>
          <p>How much life insurance do I need?</p>
          <button className='myBtn'>Calculate Coverage <samp><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></samp></button>
        </div>
        <div className="box1 box2">
          <h1>Term vs. perm</h1>
          <p>Term vs. whole life insurance. Which is best for you?</p>
          <button className='myBtn'>See the winner <samp><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></samp></button>
        </div>
        <div className="box1 box3">
          <h1>Pricing</h1>
          <p>How much does life insurance cost?</p>
          <button className='myBtn'>Tell me more <samp><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></samp></button>
        </div>
        <div className="box1 box4">
          <h1>Insurance
          101</h1>
          <p>The ultimate guide to life insurance.</p>
          <button className='myBtn'>Become an expert <samp><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></samp></button>
        </div>
      </div>
      <div className='section4'>
        <img className='personUmbrella' src="../public/Rectangle (1).png" alt="" />
        <i></i>
        <div className='main'>
          <h2 className='h2'>Get Started Today.</h2>
          <p className='p'>Join the Bello community of people who are securing their financial future.</p>
          <button className='getBtn'>Get my price <samp><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></samp></button>
          </div>
        <img className='person' src="../public/Rectangle (2).png" alt="" />
      </div>
      <div className='footer'>
        <div className='leftFooter'>
          <img src="../public/Frame (11).png" alt="" />
          <p className='p' style={{fontSize: "14px"}}>Bello is a trading name of Bello Insurance Services LLC. Bello policies are issued by [Insert Underwriter here].</p>
          <div className='inputDiv'>
            <input type="text"/>
            <button style={{background: "#126F85", borderRadius: "0px"}} className='getBtn'>GO <samp><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></samp></button>
          </div>
          <img src="../public/Frame (10).png" alt="" />
        </div>
        <div className='rightFooter'>
          <div>
            <h2>RESOURCES</h2>
            <p>Term life insurance plans</p>
            <p>Insurance calculator</p>
            <p>Guide to life insurance</p>
            <p>Contact</p>
            <p>FAQs</p>
          </div>
          <div>
            <h2>MAGAZINE</h2>
            <p>Insurance</p>
            <p>Finances</p>
            <p>Health</p>
            <p>Updates</p>
          </div>
          <div>
            <h2>MORE</h2>
            <p>Claims</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Licenses</p>
          </div>
        </div>
      </div>
      <footer>
        <p>© 2020 Bello insurance Services LLC. All right reserved.</p>
        <a href="#" className='btnLog'>GET MY PRICE</a>
      </footer>
    </div>
  )
}

export default App