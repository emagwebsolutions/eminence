import  Link  from 'next/link'
import Hamburgeropen from './Hamburgeropen'
import Hamburgerclose from './Hamburgerclose'
import React, { useRef,useEffect } from 'react'
import Image from 'next/image'


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
        <Hamburgeropen opennav = {opennav}  name="Eminence Needle Art" />
  
        <nav data-nav="false" ref={nav} className="nav">
            <div className="nav-wrapper">

            <Hamburgerclose closenav = {closenav}  />

            <Image src="/logo.png"  width="6" height="4" alt="" layout="responsive" />
           
            <ul>
                <li className="active">
                    <Link href="/">
                        <a onClick={closenav}>Home</a>
                    </Link>
                </li>

                <li>
                    <Link href="/training">
                        <a onClick={closenav}>Training</a>
                    </Link>
                </li>

                <li className="heading-logo">
                        <Image src="/logo.png" width="10" height="6" alt="" layout="responsive" />
                </li>

                <li>
                    <Link href="/about">
                        <a onClick={closenav}>About Us</a>  
                    </Link>
                </li>
                <li>
                    <Link href="/contacts">
                        <a onClick={closenav}>Contact Us</a>
                    </Link>
                </li>
  
            </ul>

            </div>
        </nav>
        </>
    )
}

export default Nav