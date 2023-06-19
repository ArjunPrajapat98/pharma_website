import React from 'react'

export const Contact = () => {
    return (
        <div className='px-4 py-8'>

            <span className='text-[72px] font-bold'>Contact us</span>
            <div className='flex gap-8 '>
                <div className='w-[40%]'>
                    <p>Feel free to contact us any time you want. <br /> <br />

                        We are  here with you 24*7 raise your query by filling this form and connect with us easily, or technical experts and team will answer shortly as soon as possible.</p>
                    <span>
                        {/* <video src="">Play video</video> */}

                        <img src="/image03.png" className='h-[350px] w-[600px]' alt="" />
                    </span>
                </div>

                <div className='bg-white border-[0.5px] border-solid border-[#cbc9c9] p-4 px-8 rounded-[20px]' >
                    <div className='flex'>
                        <div className='w-[50%]'>
                            <div className=' flex flex-col '>
                                <span className='text-[64px]  font-bold'>Let's talk!</span>
                                <span>hate forms? Instead, send us an e-mail.</span>
                            </div>

                            <div className='py-4 '>
                                <div className='flex py-2 gap-2'>
                                    <img src="/call.png" className='h-[22px] w-[22px]' alt="" />
                                    <span>0731-4094015</span>
                                </div>

                                <div className='flex py-2 gap-2'>
                                    <img src="/Vector01.png" className='h-[22px] w-[22px]' alt="" />
                                    <span>cgxp.compliance@gmail.com</span>
                                </div>

                                <div className='flex py-2 gap-2'>
                                    <img src="/Vector02.png" className='h-[22px] w-[22px]' alt="" />
                                    <span>Near Bhagwati niwas, sai vihar colony Rau indore M.P.</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex-col flex gap-2 w-[50%]'>
                            <span>Full Name</span>
                            <input type="text" className='border-[0.5px] border-[#565656] rounded-[6px] px-2 py-1' placeholder='Name ' />

                            <span>Email</span>
                            <input type="text" className='border-[0.5px] border-[#565656] rounded-[6px] px-2 py-1' placeholder='Email ' />

                            <span>Subject</span>
                            <input type="text" className='border-[0.5px] border-[#565656] rounded-[6px] px-2 py-1' placeholder='Subject ' />

                            <span>Message</span>
                            <input type="text" className='border-[0.5px] border-[#565656] rounded-[6px] px-2 pb-12' placeholder='Message ' />

                            <button className='bg-[#180AFB] text-white rounded-[6px] py-1 my-2'>Send this message</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className='mt-8'>
                <span className=' font-medium'>Copyright © 2023 Quality Sense</span>
            </div>
        </div>
    )
}
