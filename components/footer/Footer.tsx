import Image from 'next/image'

const Footer = ()=>{
    return (
        <>
        <section className="last-section">
            <div className="container">
            <div>
                <Image src="/pic3.jpeg" alt="" width="3" height="4" layout="responsive" />
            </div>
            <div className="instagram">
                <div className="text-center">
                <h3>@eminence_needleart</h3>
                <a href="https://www.instagram.com/eminence_needleart/">FOLLOW US</a>
                </div>
            </div>
            <div>
            <Image src="/pic4.jpeg" alt="" width="3" height="4" layout="responsive" />
            </div>
            </div>

            </section>
    
        <footer>


          <div className="container">

            <div className="line-wrapper">
                <div className="thin-line"></div>
            </div>
   
            <div className="social-wrapper">
                <p>GET SOCIAL WITH US</p>
                <div className="social-box">
                    <a href="https://www.facebook.com/eminence.needleart">
                        <i title="Facebook" className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.twitter.com/">
                        <i title="Twitter" className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/eminence_needleart/">
                        <i title="Instagram" className="fa fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/233245854747?text=Hello%2C%20I%20want%20to%20make%20enquiries">
                        <i className="fa fa-whatsapp"></i>
                    </a>
                </div>
            </div>

            <div className="line-wrapper">
            <div className="thin-line"></div>
            </div>

          </div>


          <div className="container">

            <div></div>

            <div className="location-contact">
                <p>
                    &copy; 2022 EMINENCE NEEDLE ART ALL RIGHTS RESERVED
                </p>
                
                <p>
                    Musuku Junction/ Roundabout, Opposite just Torch Restaurant/ Pub, Kwabenya .
                </p>
                <div className="text-center">
                    <i className="fa fa-phone">
                        233 (0) 245854747
                    </i>
                </div>
            </div>


            <div></div>

          </div>




        </footer>
        </>
    )
}

export default Footer
