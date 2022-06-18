import Header from '../components/home/Header'
import Image from 'next/image'
const Home = () => {

  return (
    <>

    <Header />

    <div className="container">
      <p className="home-para pt-2 pb-2 text-center">
      We deal in all kinds of fabrics, Dummies, sewing machines and Accessories, African $ Continental Wear , Training in Fashion Designing
      </p>
    </div>

    <div className="container mob-container ">
      <div className="boxBorder">    
        <Image
          src="/pic2.jpeg"
          alt="Picture of the author"
          width={5}
          height={7}
          layout="responsive"
        />
      </div>

      <div className="boxBorder">
      <Image
          src="/pic10.jpeg"
          alt="Picture of the author"
          width={5}
          height={7}
          layout="responsive"
        />
      </div>
    </div>



    <section className="wedding-gawn">
    <div className="wedding-box">

      <div>
        <h1>Wedding Gowns</h1>
        <p>
        Our Aim Is To Provide Our Brides With The Best Bridal Experience Possible. Fittings & Alterations Available.  
      </p>

    </div>
    </div>
    </section>



    <section className="aboutus">

    <h1>Why Eminence Needle Art?</h1>

    <div className="container">

    <div>
    <i className="fa fa-dollar"></i>
    <h2>Affordability</h2>
    <p>
    At Eminence Needle Art our aim is to provide quality outfits at affordable prices!
    </p>
    </div>


    <div>
    <i className="fa fa-gg"></i>
    <h2>Authenticity</h2>
    <p>
    Any piece purchased at EMINENCE NEEDLE ART has been carefully selected, inspected and is guaranteed authentic.
    </p>
    </div>

    <div>
    <i className="fa fa-users"></i>
    <h2>Satisfaction</h2>
    <p>
    We uphold our values and stay true to our promises. When it comes to meeting customer&apos;s needs.
    </p>
    </div>

    </div>
    </section>

      
    <style jsx>
      {`
      @media(min-width: 35em){
        .wedding-gawn{
          background-image: url('/gawn.jpg');
          height: 50rem;
          background-size: cover;
          background-position: center;
        }
      }

      @media(max-width: 35em){
        .wedding-gawn{
          background-image: url('/gawn.jpg');
          height: 52rem;
          background-size: cover;
          background-position: center;
        }
      }
    
      `}
    </style>

    </>
  )

}

export default Home