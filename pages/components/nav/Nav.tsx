import  Link  from 'next/link'
import Hamburgeropen from './Hamburgeropen'
import Hamburgerclose from './Hamburgerclose'
import React, { useRef,useEffect } from 'react'


const Nav = ()=>{

    const nav = useRef<HTMLElement>(null)

    const opennav = ( e:React.MouseEvent<HTMLDivElement> )=>{
        const cur = nav.current? nav.current : ''
        const navElem = cur ? cur.getAttribute('data-nav') : ''
        if(navElem === 'false'){
            cur && cur.setAttribute('data-nav', 'true')
        }
    }

    const closenav = ( e:any) => { 
        const cur = nav.current? nav.current : ''
        const navElem = cur ? cur.getAttribute('data-nav') : ''
        if(navElem === 'true'){
            cur && cur.setAttribute('data-nav', 'false')
        }
    }

    useEffect(() => {
        const onclick = (ev: any) => {
            if(ev.target.matches('nav')){
                ev.target.setAttribute('data-nav', 'false')
            }
        }
          
        window.addEventListener('click', onclick);
    
        return () => {
          window.removeEventListener('click', onclick);
        }
      }, []);


    return (
        <> 
        <Hamburgeropen opennav = {opennav}  name="Eminence
Needle Art" />

        <nav data-nav="false" ref={nav} className="nav">
            <div className="nav-wrapper">

            <Hamburgerclose closenav = {closenav}  />

            <ul>
                <li className="active">
                    <Link href="/">
                        <a onClick={closenav}>HOME</a>
                    </Link>
                </li>

                <li>
                    <Link href="/training">
                        <a onClick={closenav}>TRAINING</a>
                    </Link>
                </li>

                <li className="heading-logo">
                        <h1>Eminence </h1>
                        <p>NEEDLE ART </p>
                </li>

                <li>
                    <Link href="/about">
                        <a onClick={closenav}>ABOUT US</a>  
                    </Link>
                </li>
                <li>
                    <Link href="/contacts">
                        <a onClick={closenav}>CONTACT US</a>
                    </Link>
                </li>
  
            </ul>

            </div>
        </nav>
        </>
    )
}

export default Nav