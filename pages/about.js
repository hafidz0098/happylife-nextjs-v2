import Layout from "../layouts/default";
import Head from 'next/head';
import Link from "next/link";
 
function About(){
    return(
        <Layout>
        <Head>
              <title>Tentang Kami</title>
          </Head>
        <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
            <div className="title-section mb-5">
                Meet Our Team
            </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src="/hafidzz.jpg" className="img-fluid" alt=""/></div>
                <div className="member-info">
                  <h4>Hafidz</h4>
                  <span>Fullstack Developer</span>
                  <div className="social">
                    <Link href="https://github.com/hafidz0098" target="_blank">
                      <i className="ri-github-fill"></i>
                    </Link>
                    <Link href="https://www.instagram.com/hafidz_hafidz" target="_blank">
                      <i className="ri-instagram-fill"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/in/hafidz-%E2%80%8E-855b211a9/" target="_blank">
                      <i className="ri-linkedin-box-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src="/image-aji.jpeg" className="img-fluid" alt=""/></div>
                <div className="member-info">
                  <h4>Septian Aji Saputra</h4>
                  <span>Frontend Developer</span>
                  <div className="social">
                    <Link href="https://github.com/septiannaji" target="_blank">
                      <i className="ri-github-fill"></i>
                    </Link>
                    <Link href="https://www.instagram.com/septiannaji/" target="_blank">
                      <i className="ri-instagram-fill"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/in/septian-aji-saputra-aa0097276/" target="_blank">
                      <i className="ri-linkedin-box-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src="/Aulia.png" className="img-fluid" alt=""/></div>
                <div className="member-info">
                  <h4>Aulia Azzaskia</h4>
                  <span>Frontend Developer</span>
                  <div className="social">
                    <Link href="https://github.com/ulskki" target="_blank">
                      <i className="ri-github-fill"></i>
                    </Link>
                    <Link href="https://instagram.com/ulskki/" target="_blank">
                      <i className="ri-instagram-fill"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/in/aulia-azzaskia-1053b8236/" target="_blank">
                      <i className="ri-linkedin-box-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src="/indyis.jpeg" className="img-fluid" alt=""/></div>
                <div className="member-info">
                  <h4>Indy Istiqamah N</h4>
                  <span>Frontend Developer</span>
                  <div className="social">
                    <Link href="https://github.com/inndyis" target="_blank">
                      <i className="ri-github-fill"></i>
                    </Link>
                    <Link href="https://www.instagram.com/inndyis/" target="_blank">
                      <i className="ri-instagram-fill"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/in/indy-istiqamah/" target="_blank">
                      <i className="ri-linkedin-box-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </Layout>
    )
}
 
export default About