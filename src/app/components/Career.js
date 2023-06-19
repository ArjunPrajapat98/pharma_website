import React from 'react'

export const Career = () => {
    return (
        <>
            <div className='bg-[#417EC6CF]'>

                <div className='flex justify-between px-4 items-center' >
                    <div className='w-[50%] items-center justify-between flex align-center py-4 gap-4  text-center'>
                        <div className='flex items-center gap-4'>
                            <div>
                                <img src="/QualityLogo.png" width="60" height="60" alt="" />
                            </div>
                            <div>
                                <small className='text-white'>
                                    Your Growth Our Aim <br />
                                    Your Aim Our MIssion

                                </small>
                            </div>
                        </div>
                        <div className=' text-center items-center'>
                            <p className='text-white text-[22px] font-bold'>WE DEALS WITH ENTIRE QUALITY UNIT</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='ml-6'>
                            <small>Date:- <Date></Date></small>
                        </div>
                        <div className='menuList '>
                            <a href="url">Home</a>
                            <a href="url">About us</a>
                            <a href="url">Career</a>
                            <a href="url">
                                <span>
                                    Contact us
                                </span>
                            </a>


                            {/* <div className='pin'></div> */}
                            <span> Location</span>


                        </div>

                    </div>
                </div>
            </div>

            <div className='px-8'>
                <div className='flex  align-center text-center justify-evenly'>
                    <div className='w-[25%]'></div>
                    <div className='roll w-[50%] flex' >
                        <p  >MY SCHOOL</p>
                        <p>MY COLLEGE</p>
                        <p>MY PROJECT</p>
                        <p>MY LIBRARY</p>
                    </div>
                    <div className='text-[#0C23F6] w-[25%] text-[28px] font-extrabold'>
                        Hi  <br />
                        Your Social Media Is <br /> Here
                    </div>
                </div>

                <div className='gap-8 flex py-4'>
                    <div className='pharmaList w-[25%]'>
                        <h4>PHARMA INDUSTRY</h4>
                        <h4>MEDICAL SERVICES</h4>
                        <h4>HOSPITAL SERVICES</h4>
                        <h4>LABORATORY SERVICES</h4>
                        <h4>FOOD SECTION</h4>
                        <h4>TODAY SPECIAL</h4>
                        <h4>REAL RELATION</h4>
                    </div>

                    <div className='w-[50%]  text-center '>
                        <div className='bg-[#F9FE13] px-2 py-1 rounded-[6px]'>
                            <p className=' font-extrabold text-[18px] text-[#CF2C66]'>Subscribe My Zone on <span className='text-[#2C50CF]'>Qualityplus.Com</span> to Improve Your Skills
                                <span className='text-[#2C50CF]'>Click Here to subscribe</span></p>
                        </div>
                        <div className='mt-4 text-white text-[30px] bg-[rgba(89,_82,_170,_0.51)] px-10 py-24 rounded-[50px]'>
                            IMPORTANT INFORMATIONS
                        </div>
                    </div>

                    <div className='w-[25%] text-center'>
                        <div className='text-center ml-8 relative'>
                            <img src="/Star.png" className='h-[200px] w-[250px]' alt="" />
                            <span className='text-[#3B55DF] absolute top-[40%] left-[30%] font-extrabold'>Login to <br /> MY ZONE</span>

                        </div>
                        <div className='px-8 my-8 py-2 rounded-[20px] text-[#1019F1] font-bold bg-[rgba(31,_49,_211,_0.25)]'>
                            Create New Account <br />
                            Forget your password
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-8 px-8 mt-4 '>
                <div className='relative'>
                    <img src="/Polygon.png" alt="" />
                    <span className='text-[#1D48E2] font-extrabold text-[22px] absolute left-[50px] bottom-4'>ASTROLOGY</span>
                </div>
                <div className='relative'>
                    <img src="/Polygon.png" alt="" />
                    <span className='text-[#1D48E2] font-extrabold text-[22px] absolute left-[80px] bottom-4'>SCIENCE</span>
                </div>
                <div className='relative'>
                    <img src="/Polygon.png" alt="" />
                    <span className='text-[#1D48E2] font-extrabold text-[22px] absolute left-[80px] bottom-4'>NEWS</span>
                </div>
                <div className='relative'>
                    <img src="/Polygon.png" alt="" />
                    <span className='text-[#1D48E2] font-extrabold text-[22px] absolute left-[80px] bottom-4'>TALENT</span>
                </div>
                <div className='relative'>
                    <img src="/Polygon.png" alt="" />
                    <span className='text-[#1D48E2] font-extrabold text-[22px] absolute left-[50px] bottom-4'>MEDITATION</span>
                </div>
            </div>

        </>
    )
}
