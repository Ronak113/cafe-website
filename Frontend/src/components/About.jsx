import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineArrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we're serious about is food</p>
            </div>
            <p className="mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aut dolor inventore, illum deserunt praesentium ullam, ipsa aliquid modi corporis laboriosam? Saepe nam eaque dolorem, odio ab accusantium fuga. Tenetur harum earum saepe totam soluta cumque iste repudiandae ut architecto minima qui consequatur aperiam obcaecati officiis libero, id, aliquid hic.</p>
            <Link to={"/"} >Explore Menu{" "}
            <span>
                <HiOutlineArrowRight/>
            </span>
            </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about"/>
        </div>
      </div>
    </section>
  )
}

export default About
