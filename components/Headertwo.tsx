
type Headings = {
    heading: String
    subheading: String
}
const Headertwo = ({heading,subheading}: Headings) => {
    return (
        <div className="headertwo">
            <h4>{subheading}</h4>
            <h1>{heading}</h1>
        </div>
    )
}

export default Headertwo