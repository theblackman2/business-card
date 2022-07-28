import Image from '../Image/Image'
import Footer from '../Footer/Footer'
import Body from '../Body/Body'
import './Card.css'

function Card() {
  return (
    <div className="card">
      <Image />
      <Body />
      <Footer />
    </div>
  )
}

export default Card