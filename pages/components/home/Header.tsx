const Header = () => {

    return (
        <>
        <div className="header-box">

        </div>
        <style jsx>
            {`

            @media(min-width: 35em){  
                .header-box{
                    width: 100vw;
                    height: 50rem;
                    background-image: url('./header.jpg');
                    background-size: cover;
                    background-position: top;
                    border-radius: 0% 100% 46% 54% / 0% 0% 100% 100%;
                }
            }

            @media(max-width: 35em){  
                .header-box{
                    width: 100vw;
                    height: 20rem;
                    background-image: url('./header.jpg');
                    background-size: cover;
                    background-position: center;
                }
            }
                
            `}
        </style>
        
        </>


    )

}

export default Header