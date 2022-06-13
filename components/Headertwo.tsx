
const Headertwo = ({heading,subheading}:  {
    heading: String
    subheading: String
}) => {
    return (
        <div className="headertwo">
            <h4>{subheading}</h4>
            <h1>{heading}</h1>
        </div>
    )
}

export default Headertwo