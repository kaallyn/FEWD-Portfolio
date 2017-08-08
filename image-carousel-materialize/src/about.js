import React, { Component } from 'react';
import HomeCarousel from './carousel/carousel.js';
import HeadshotImage from './images/headshot.jpg';

class About extends Component {
  render() {
    let altText = 'Credit: Benjeman Nichols';
    return (
      <body>
        <section className='flex-container'>
        <div className='flex-image'>
          <img src={HeadshotImage} className='flex-image' alt={altText}/>
        </div>
        <p className='text'>
          Soprano Meghan Guse sang her first professional performance at age 12, when she provided backup vocals for a Japanese children’s television show, and she has been actively performing ever since. She was most recently featured as Zina in Third Eye Theatre Ensemble's production of <span className='italics'>Dark Sisters</span>. While earning her Master of Music degree from the Chicago College of Performing Arts, she performed as Flora in <span className='italics'>Turn of the Screw</span> and the Nightingale in <span className='italics'>L’enfant et les sortilèges</span>. She also played Nerina in the American premiere of Cimarosa’s <span className='italics'>L’infedeltà fedele</span> with Millennium Chamber Players. Prior to moving to Chicago, Meghan studied at Illinois Wesleyan University, and performed the roles of the Queen of the Night in <span className='italics'>Die Zauberflöte</span> and Jenny in Kurt Weill’s <span className='italics'>Down in the Valley</span>. She spent her summers learning several Gilbert and Sullivan roles with Prairie Fire Theatre: Zorah in <span className='italics'>Ruddigore</span>, Phyllis in <span className='italics'>Iolanthe</span>, and Peep Bo in <span className='italics'>The Mikado</span>. Meghan has been an active member of <a href="www.vox3.org"> Vox 3 Collective </a> since 2011, specializing in Vox's cabaret series.
        </p>
        </section>
        <footer>
          <h6>Meghan Guse&copy; 2017</h6>
          <img src='nucleo-social-icons/social-1_logo-facebook.svg' />
        </footer>
      </body>
    );
  }
}

export default About;