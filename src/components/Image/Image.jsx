import img from './../../assets/image.jpg'
import './Image.css'

function Image() {
  return (
    <div className="image">
      <img src={img} alt="Pascal" />
    </div>
  )
}

export default Image