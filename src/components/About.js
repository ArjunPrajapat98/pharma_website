import React from 'react'

export const About = () => {
    return (
        <div className='px-4 py-4'>

            <div className='flex'>
                <div className='flex w-[60%]  py-4 '>
                    <div className=''>
                        <p className='text-[96px] font-bold text-[#000000]'>About us</p>
                        <p className='text-[24px] font-medium'>
                            our Goals
                        </p>
                        <p className='text-[18px] font-normal'>We are trying to reach and full fill every aspects of pharmaceutical, nutraceutical and food supplement industries related to the quality system  globally.</p>
                        <ul className=''>
                            <li>
                                <span className='px-2'>&#10003;</span>   To provide cotractual validation services.
                            </li>
                            <li>
                                <span className='px-2'>&#10003;</span>   To provide documentation services.
                            </li>
                            <li>
                                <span className='px-2'>&#10003;</span>   To organize and handle audit management.
                            </li>
                            <p className='flex '>
                                <img src="/Vector.png" className='px-2 h-5 w-10' alt="" />
                                <p>Know More</p>
                            </p>
                        </ul>
                    </div>

                    <div className=''>
                        <img src="/pngegg.png" className='h-[240px] w-[650px]' alt="" />
                    </div>

                </div>

                <div className='w-[40%]'>

                    <p className='headingText'>
                        Who We Are
                    </p>
                    <p >
                        <span className='headingPara'> The quality sense is a platform where we are sharing our entire experience and qualitative services in order to improvement the quality system of pharmaceutical, Nutraceuticals, Health and food manufacturing and packaging industries, We are here to support you and in growth of your business.
                        </span>
                        <small>
                            <br />
                            Our Aim to carry out the validations and calibrations activities traceable to international standards and make feel customer comfortable with regulatory bodies audits such as Schedule M (National Regulatory Body), WHO Geneva, UNICEF, USFDA, TGA (Australia), MHRA (European Countries), PICs (Germany), MCC (South Africa), Etc. by meeting the requirements of necessary tests, test methods and documentation as per the guidelines laid by the above regulatory bodies. We would like to bring to the notice of our customers about the conditions of their Cleanrooms, Equipment's and Measuring Instruments by caring out test with high accuracy, which plays vital role for meeting the Organizational Quality policy.
                        </small>
                    </p>

                </div>
            </div>

            <div className='flex pt-8'>
                <div className='w-[30%]'>
                    <p className='text-[22px]'>Grow up your Workflow
                        Speed</p>
                    <ol type='1'  className=' list-decimal px-5 growTable'>
                        <li>Analyze Your Current Process.</li>
                        <li>Reduce Your Workflow Complexity. </li>
                        <li>Strive to Make Tasks Simpler.</li>
                        <li>Move Past Multitasking. </li>
                        <li>Feng Shui Your Workspace. </li>
                        <li>Minimize Work Interruptions.</li>
                        <li>Optimize Team Communications.</li>
                        <li>Streamline Your Collaboration.</li>
                    </ol>
                </div>

                <div className='w-[40%] '>
                    <p className='list8'>True success is all about working towards meaningful goals and dreams.</p>
                </div>

                <div className='w-[30%] text-center '>
                    <span className='text-[42px] font-normal  '>Our Team</span>
                    <br />
                    <small>team with passionate talanted people</small>
                    <div className=' relative h-[250px]'>
                        <img className='el01 h-[103px] w-[83px]' src="/Ellipse17.png" alt="" />
                        <img className='el02 h-[103px] w-[83px]' src="/Ellipse18.png" alt="" />
                        <img className='el03 h-[103px] w-[83px]' src="/Ellipse19.png" alt="" />
                        <img className='el04 h-[103px] w-[83px]' src="/Ellipse20.png" alt="" />
                        <span className=' absolute top-[9.25rem]  right-[8.50rem]' ><small>You are in excellent Guidance</small></span>
                    </div>
                </div>
            </div>


            <div className='flex  px-8 gap-60 '>

                <div className='table'>
                    <ul className=' list-disc'>
                        <li>Team</li>
                        <li>Gallery</li>
                        <li>Privacy Policy</li>
                        <li>Terme of Services</li>
                    </ul>
                </div>
                <div  className='table'>
                    <ul  className=' list-disc'>
                        <li>Career</li>
                        <li>Accounts and Purchase</li>
                        <li>Events/Project Management</li>
                        <li>Students Zone</li>


                    </ul>
                </div>
            </div>
            <div>
                <p className='px-4 py-10'>Copyright © 2023 Quality Sense</p>
            </div>
        </div>
    )
}
