
import Headertwo from "../components/Headertwo"
import Image from 'next/image'
import Map from '../components/Map'

const Contacts = () => {

  const headings = {
    heading: 'Where to find us',
    subheading: 'CONTACT US'
  }

  return (
    <>
     <Headertwo {...headings} />

     <div className="container mobile-contact-container">
      <div>
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
          Musuku Junction/ Roundabout, Opposite just Torch Restaurant/ Pub, Kwabenya .
          </p>
        </div>
   

       <p>
        <i className="fa fa-phone"></i>
        : 233 (0) 245854747
       </p>

       <p>
        <i className="fa fa-whatsapp"></i>
        233 ( 0) 245854747
       </p>

       <p>
        <i className="fa fa-instagram"></i>
        eminence_needleart
       </p>

       <p>
        <i className="fa fa-envelope"></i>
        eminenceneedleart@gmail.com
       </p>



      <p>
        <i className="fa fa-facebook"></i>
        eminence needleart
      </p>

      </div>
      <div>
        <Image src="/pic2.jpeg" alt="Our Shop"  width="3" height="5" layout="responsive" />
      </div>
     </div>

<br /><br />
     <Map  
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.2268472463893!2d-0.2448534875279261!3d5.6803158958826865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9e8cd0a43d33%3A0xf495a0902c705b6!2sMusuku%20Junction%20Bus%20Stop!5e0!3m2!1sen!2sgh!4v1655074542617!5m2!1sen!2sgh"
              width = ""
              height = ""
              allowfullscreen =  ""
              loading =  "lazy"
              referrerpolicy =  "no-referrer-when-downgrade"
        
        />
        <br /><br />
    </>
  )

}

export default Contacts