import React from 'react'

export const HomePage = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[60%] bg-black'>
                    <div className='flex ' >
                        <div>
                            <img src='/image01.png' alt="" className='w-[400px] h-[400px]' />
                        </div>

                        <div className='imageText w-[45%]'>
                            Welcome to the <span style={{ color: '#D715CF' }}>QUALITY SENSE </span> here you will get the information about which types of services  we have providing and many more that is very  needful and truly  important for you.
                        </div>

                    </div>
                    <div className='p-4 p1 ' >
                        <p>
                            Quality Sense offers quality Services of validation, calibration and comprehensive knowledge consulting of current regulatory standards of various countries across the world.
                            We specialize in the calibration, qualification, validation of Instruments equipment's, facilities and utilities, in the field of Pharmaceuticals API manufacturing and formulation plants, Clinical-Research, R&D, Quality Control Laboratories, Hospitals etc… and work to meet the requirements of the Schedule M (National Regulatory Body), WHO Geneva, UNICEF, USFDA, TGA (Australia), European (EMEA), MHRA (European Countries), PICs (Germany), MCC (South Africa).
                            In knowledge consulting we offer training, concept sharing and QA consulting services. For these services Quality Sense has dedicated consultants and talented team of doctorates Masters with immense knowledge and experience in training, assisting with defining the quality strategy and developing a quality assurance plan and executing the same.
                            We are committed to the success of our client applications and take care that all testing processes are performed to the highest standards. Our engagement model incorporates the best industry practices and ensures a high degree of confidence that your applications and systems meet the most stringent requirements.
                            Our approach is to work closely with our clients to ensure their requirements are clearly understood and the objectives achieved in a cost effective and timely manner.
                        </p>
                    </div>
                </div>

                <div className="w-[40%]">
                    <div className='flex justify-center'>
                        <img src='/omLogo.png' width="187" height="142" alt="" />
                    </div>

                    <div className='p2'>
                        Shubham Karoti Kalyaannam-Aarogyam Dhana-Sampadaa |Shatru-Buddhi-Vinaashaaya Diipa-Jyotir-Namostute ||
                    </div>

                    <div className='p3' >
                        Your trust our Aim
                    </div >

                    <div className=' relative'>
                        <img src='/image02.png' alt="" width='524' height='524' />
                        <span className=' absolute top-[40%]  left-16 text-[26px] font-normal'>
                            QUALITY
                        </span>
                        <span className=' absolute top-[25%] right-[24%] text-[24px] font-normal'>
                            SAFETY
                        </span>
                        <span className=' absolute bottom-[58px] left-[42%] text-[18px] font-normal'>
                            EFFICACY
                        </span>
                    </div>

                    <div className='list items-center px-10 py-4'>
                        <span className='text-[28px] px-2'>
                            The quality sense is a business of
                        </span>
                        <li>
                            Providing validation services
                        </li>
                        <li>
                            Providing Calibration services
                        </li>
                        <li>
                            Providing consultant services
                        </li>
                        <li>
                            Providing management services
                        </li>
                        <li>
                            Providing quality compliances
                        </li>

                        <li>
                            Providing opportunities
                        </li>

                    </div>

                </div>
            </div>


            <div className='flex p-4 gap-2'>
                <div className='w-[40%]'>
                    <img src="/image03.png" alt="" />
                    <p className='list2'>
                        A quality inspection involves measuring, examining, testing, or gauging various characteristics of a product and comparing those results with specified requirements to determine whether there is a conformity
                    </p>
                </div>
                <div className='w-[60%] bg-black'>
                    <img src="/image04.png" className='p-4 bg-contain' alt="" />
                    <p className='list3 p-4'>
                        we are bring here the biggest platform of quality solutions, which is not just for providing validation and compliances services but also for training to full fill the CGXP requirements and regulatory compliances.

                    </p>
                </div>
            </div>

            <div className='pt-16 flex justify-center bg-white'>
                <span className='list4'>
                    Work together grow together
                </span>
            </div>

            <div>
                <img src="/Earth.png" className='h-[100%] w-full' alt="" />
            </div>
            <div>
                <p className='list5 px-4 bg-white'>
                With the technical experts of the specific fields, toughest particular task can completed easily the 
                <span className='text-[#EA1A33]'> Quality Sense </span>
                 is a business' of support to the require, our experts suggest and provide quality compliance services in order to improve the quality system of Nutraceutical,  pharmaceutical and food industries, this is the corporate world of compliance come with us we will support you and in growth of your business.
                </p>
            </div>
            <div className='flex justify-center py-10 '>
                <p className='list6'>
                Its just biggening of implementation of our skills  in order to support our clients
                </p>
            </div>

            <div className='flex justify-center px-4 gap-2 bg-white py-4 '>
                <div className='w-[50%]'>
                    <p className='list7'>
                    The quality is not just result of any single step, it is the final output of many efforts gathering steps that are undergoes through zero tolerance & effective inspection, it can considered as the smart or potent ideology and technical knowledge of individual processes for execute safely. 
                    </p>
                </div>
                <div className=''>
                    <img src="/Assurancre.png" className='' alt="" />
                </div>
            </div>
        </div>
    )
}


export default HomePage
