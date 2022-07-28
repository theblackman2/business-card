import './Footer.css'
import twitterLogo from './../../assets/icons/Twitter Icon.png'
import facebookLOgo from './../../assets/icons/Facebook Icon.png'
import instagramLogo from './../../assets/icons/Instagram Icon.png'
import gitHubLogo from './../../assets/icons/GitHub Icon.png'

function Footer() {
  return (
    <div className="footer">
      <ul className="social-links">
        <li className="social-link">
          <a href="https://twitter.com/pascal_lushimba?t=G1JQULl9aIxUbPfLOSURjw&s=09">
            <img src={twitterLogo} alt="Facebool" />
          </a>
        </li>
        <li className="social-link">
          <a href="https://web.facebook.com/pascal.lushimba.311">
            <img src={facebookLOgo} alt="Facebool" />
          </a>
        </li>
        <li className="social-link">
          <a href="http://instagram.com/pascallushimba?utm_source=qr">
            <img src={instagramLogo} alt="Facebool" />
          </a>
        </li>
        <li className="social-link">
          <a href="https://github.com/theblackman2">
            <img src={gitHubLogo} alt="Facebool" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer