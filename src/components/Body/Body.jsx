import './Body.css'
import mailIcon from './../../assets/icons/Icon.png'
import linkedInIcon from './../../assets/icons/Vector.png'

const BodyHeader = () => {
  return (
    <div className="body-header">
      <h1 className="name">Pascal Kasonga</h1>
      <h4 className="title">FullStack developper</h4>
      <a className='site' href="https://pkasonga.wordifysites.com/">pkasonga.com</a>
      <div className="direct-messages">
        <a href="mailto:paskasonga@gmail.com" className="email btn">
          <img src={mailIcon} alt="Mail icon" />
          Email
        </a>
        <a href="https://www.linkedin.com/in/pascal-kasonga-310b071ba" className="linked-in btn">
          <img src={linkedInIcon} alt="LinkedIn icon" />
          LinkedIn
        </a>
      </div>
    </div>
  )
}

const BodyContent = () => {
  return (
    <div className="body-content">
      <h2 className="content-title">About</h2>
      <p className="content-text">
        I'm a FullStack web developper from DRC, I am motivated and always thirsty for learning, I like to take up challenges in order to be able to solve the problems that I encounter in my daily life using new technologies.
      </p>
      <h2 className="content-title">Interests</h2>
      <p className="content-text">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja.
      </p>
    </div>
  )
}

function Body() {
  return (
    <div className="body">
      <BodyHeader />
      <BodyContent />
    </div>
  )
}

export default Body