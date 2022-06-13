import styles from '../styles/Hamburger.module.scss'



const Hamburgeropen = ({opennav,name}: {
    opennav: (e:React.MouseEvent<HTMLDivElement>)=> void
    name: string
})=>{

    return (
        <div className="hamburgeropen" style={{display: 'none'}}>
            <div className="hamburger-inner">
                <div className="btntimes">
                    <div className="strips" onClick={opennav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default Hamburgeropen