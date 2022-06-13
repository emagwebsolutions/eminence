
const Hamburgerclose = ({closenav}: {
    closenav: (e:React.MouseEvent<HTMLDivElement>)=> void
})=>{

    return (
        <div className="hamburgerclose" style={{display: 'none'}}>
            <div className="hamburger-inner">
                <div className="btntimes">
                    <div className="tms" onClick={closenav}>                                     
                    &times;
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Hamburgerclose