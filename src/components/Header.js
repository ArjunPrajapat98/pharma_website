import React from 'react'

export const Header = () => {
    return (

        <div className='flex justify-between px-4 items-center' >
            <div className='w-[50%] flex  align-center py-4 gap-4 text-center'>
                <div>
                    <img src="/QualityLogo.png" width="60" height="60" alt="" />
                </div>
                <div>
                    <p>
                        Grow your business' with our innovative ideas and quality services
                        <br />
                        <a className='link' href="">www.qualitysense.com</a>
                    </p>
                </div>
            </div>
            <div className=''>
                <div className='menuList'>
                 <a href="url">Home</a>
                 <a href="url">About</a>
                 <a href="url">Our Services</a>
                 <a href="url">Documentation</a>
                 <a href="url">
                     <span>
                    Contact us
                    </span>
                </a>
                </div>
            </div>
        </div>
    )
}


export default Header