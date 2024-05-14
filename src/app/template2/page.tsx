import './template2.scss'
import ImagesCarousel from '../components/carousel/ImagesCarousel'
import TestimonialsCarousel from '../components/carousel/TestimonialsCarousel'

export default function Template2() {
  return (
    <div className="template2">
      <div className='wrapper'>
        <div className="container">
          <div className="image-container">
            <img src="/placeholder2.png" alt="image placeholder" />
          </div>
          <div className="text-container">
            <div className='main-header'>
              <h1>Hi,</h1>
              <h1>I'm Dewi</h1>
            </div>
            <div className="content">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut </h2>
            </div>

          </div>
        </div>
        <div className="container2">
          I do these things for these industries and achieve these results
        </div>
        <div className='details'>
          <div className='column1'>At Work</div>
          <div className='column2 bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat </div>
        </div>
        <div className='custom-carousel'>
          <ImagesCarousel>
            <img src="/placeholder4.png" alt="image placeholder" />
            <img src="/placeholder4.png" alt="image placeholder" />
            <img src="/placeholder4.png" alt="image placeholder" />
          </ImagesCarousel>
        </div>

        <div className='details'>
          <div className='column1'>In Life</div>
          <div className='column2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat </div>
        </div>
        <div className="heart-divider">
          <div className='divider'></div>
          <img src="/heart-solid.png" alt="heart" />
          <div className='divider'></div>
        </div>
        <div className="interests">
          <div className="word">Collaboration</div>
          <div className="word">Earl Grey</div>
          <div className="word">Launch Day</div>
          <div className="word">Rock Climbing</div>
          <div className="word">Simple solutions</div>
          <div className="word">Nintendo 64</div>
        </div>
        <div className='details'>
          <div className='column1'>Clients</div>
          <div className='column2 font-21'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</div>
        </div>

        <div className="card-grid">
          <div className="card">
            <h3 className="card-title">Client Logo</h3>
            <p className="card-description">
              Brief description, what they do, what you did, successes and or things learnt.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Client Logo</h3>
            <p className="card-description">
              Brief description, what they do, what you did, successes and or things learnt.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Client Logo</h3>
            <p className="card-description">
              Brief description, what they do, what you did, successes and or things learnt.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Client Logo</h3>
            <p className="card-description">
              Brief description, what they do, what you did, successes and or things learnt.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Client Logo</h3>
            <p className="card-description">
              Brief description, what they do, what you did, successes and or things learnt.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Client Logo</h3>
            <p className="card-description">
              Brief description, what they do, what you did, successes and or things learnt.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Client Logo</h3>
            <p className="card-description">
              Brief description, what they do, what you did, successes and or things learnt.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Client Logo</h3>
            <p className="card-description">
              Brief description, what they do, what you did, successes and or things learnt.
            </p>
          </div>
        </div>

        <div className='testimonials-wrapper'>

          <div className="profile-card">
            <img src="/rounded-icon.png" alt="avatar" />
            <div className="profile-info">
              <div className="profile-name">NAME</div>
              <div className="profile-title">Job Title</div>
            </div>
          </div>
          <TestimonialsCarousel>
            <div className='testimonials-card'>
              Testimonial Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
            </div>
            <div className='testimonials-card'>
              Testimonial2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
            </div>
            <div className='testimonials-card'>
              Testimonial2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
            </div>
          </TestimonialsCarousel>
        </div>

      </div>
    </div >
  )
}