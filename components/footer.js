//import Link
import Link from 'next/link';

function Footer() {

    return (
        <footer id="footer" className="footer">

        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-5 col-md-12 footer-info">
              <Link  href="/" legacyBehavior><a className="logo d-flex align-items-center">
                <span>HappyLife</span>
              </a></Link>
              <p>Terima kasih telah mengunjungi website kami. Mari bersama-sama kita tingkatkan kesadaran dan perhatian terhadap kesehatan mental yang penting dan sering terlupakan ini.</p>
            </div>
    
            <div className="col-lg-3 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link href="/" legacyBehavior>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/artikel" legacyBehavior>
                    <a>Artikel</a>
                  </Link></li>
                <li>
                  <Link href="/about" legacyBehavior>
                    <a>Tentang Kami</a>
                  </Link>
                </li>
              </ul>
            </div>
    
            <div className="col-lg-3 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Issue kesesehatan mental</a></li>
                <li><a href="#">Pencegahan dan penanganan</a></li>
                <li><a href="#">Product Management</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </div>
    
          </div>
        </div>
    
        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright 2023 <strong><span>HappyLife</span></strong>. All Rights Reserved
          </div>
        </div>
    
      </footer>
    )

}

export default Footer