import Headertwo from "../components/Headertwo"
import Image from 'next/image'

const About = () => {

  const headings = {
    heading: 'Professional Needle Artist',
    subheading: 'ABOUT US'
  }

  return (
    <>
     <Headertwo {...headings} />

     <div className="container">
        <div>
          <Image src="/appr3.jpeg" alt="Our Workers"  width="4" height="6" layout="responsive" />
        </div>
        <div>
        <Image src="/appr2.jpeg" alt="Our Workers"  width="4" height="6" layout="responsive" />
        </div>
        <div>
        <Image src="/appr1.jpeg" alt="Our Workers"  width="4" height="6" layout="responsive" />
        </div>
      </div>


      <div className="container cont-my">
        <div>
          <p>
          We offer a truly good service of tailoring and design of the highest quality. 
          We can offer professional advice and services for custom designs and alterations, as well as assisting you in creating your own designs.
          </p>
        </div>
      </div>

    </>
  )

}

export default About