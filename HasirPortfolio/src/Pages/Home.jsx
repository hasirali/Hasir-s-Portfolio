import React from 'react'
import banner from '../assets/profile.png'
import '../styles/Home.css'

function Home() {
  return (
    <>
     <div class="section__container header__container" id="home">
      <div class="header__image">
        <img src={banner} alt="hero" />
      </div>
      <div class=" header__content">
        <h4>Documenting my growth, skills, and passion </h4>
        <h1 class="section__header">through my personal Portfolio.</h1>
        <p>
        Hello and welcome to my Portfolio!! I am Hasir Ali, a student pursuing an undergraduate degree in Information Technology at the United College of Engineering and Research. I have skills in video editing using Adobe Premiere Pro, programming in C/C++, web development and proficiency in Git and GitHub for version control. I also have a strong grasp of Data Structures and Algorithms, and I'm a content creator with over 30,000 followers on Instagram. Join me on my journey through the world of technology and content creation. 
        </p>
        <div class="header__btn  ">
          <button class="btn"><a href="https://drive.google.com/file/d/1lFwzCKVcGcM2BbRFmkxQ9DPKpYu50F3P/view?usp=drive_link" class="btn" target='_blank'>My Resume</a></button>
        </div>
      </div>
    </div>



    </>
  )
}

export default Home