import Headertwo from "../components/Headertwo"
import Image from 'next/image'
const Training = () => {

  const headings = {
    heading: 'Join our training',
    subheading: 'OUR TRAINING'
  }

  return (
    <>
     <Headertwo {...headings} />

     <div className="container">
      <div>
        <Image src="/garm1.png" alt="Our Shop"  width="5" height="3" layout="responsive" />
      </div>
     </div>



     <div className="container cont-my">
        <div>
          <h1>Garment Construction </h1>

          <p>
          As we talk about fashion designing, the first thing that comes to our mind is either apparel or garments. Therefore, garment construction is the core of fashion designing. It involves all kinds of processes like understating machines, seam types, and stitching of the garment. In garment manufacturing, the skills of pattern making and garment construction are essential as these are the core areas of garment manufacturing. It is very important to understand the garment from all aspects in order to perform pattern making. 
          </p>

        </div>
        <div>
        <Image src="/garm2.jpeg" alt="Garment Construction" width="5" height="4" layout="responsive" />
        </div>
     </div>


     
     <div className="container cont-my">
        <div>
        <Image src="/pattern1.jpeg" alt="Pattern Making"  width="5" height="3" layout="responsive" />
        </div>

        <div>
          <h1>Pattern Making</h1>

          <p>
          Essentially, an accurate profile of your clothing will produce the first fit sample of your collection. This sample has to be as close as possible to the final garment. Otherwise, significant changes will have to be made, which will cause costly setbacks.
          </p>

        </div>

     </div>



     
     <div className="container cont-my">
        <div>
          <h1>Freehand Cutting </h1>

          <p>
          Freehand cutting is the process of drafting out designs and directly cutting them out on the fabric. Freehand cutting involves garment construction without the use of a commercial pattern.
          </p>

        </div>
        <div>
        <Image src="/freehandcutting.png" alt="Freehand Cutting"  width="5" height="4" layout="responsive" />
        </div>
     </div>



     
     <div className="container cont-my">
        <div>
        <Image src="/weddinggown.jpeg" alt="Wedding Gowns"  width="5" height="4" layout="responsive" />
        </div>
        <div>
          <h1>Wedding Gowns </h1>

          <p>
          Find the dress of your dreams within our beautiful assortment of dresses for weddings! Let your fashion sense take over with a trendy wedding dress style that is all your own, or keep it simple with a basic wedding dress silhouette with few embellishments.
          </p>

        </div>
     </div>


     
     <div className="container cont-my">
        <div>
          <h1>Tie Dyeing & Batik</h1>

          <p>
          This course also teaches you how to make textile patterns on clothes using dies. The student will be able to learn how to produce tye and dye and batik textiles and its uses. The student will be acquainted with the chemicals used for it and so more.
          </p>

        </div>
        <div>
        <Image src="/tieanddye.jpg" alt="Tie Dyeing & Batik"  width="5" height="4" layout="responsive" />
        </div>
     </div>


     
     <div className="container cont-my">
        <div>
        <Image src="/mil.png" alt="Millinery"  width="5" height="4" layout="responsive" />
        </div>
        <div>
          <h1>Millinery </h1>

          <p>
          Learn how to use a variety of materials to make creative headwear for your next millinery collection. Grow your millinery creativity by learning with us. 
          </p>

        </div>
     </div>




    </>
  )

}

export default Training