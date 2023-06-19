import React from 'react'

export const Services = () => {
    return (
        <div className='px-8 py-8 bgsServices'>
            <div className='flex gap-12'>
                <div className='flex gap-4 w-[70%]'>
                    <div className='flex w-[30%] flex-col text-center fonts gap-4'>
                        <div className='bg-[#5B2CE061] rounded-[20px] leading-6 px-4 py-8 text-[16px] text-white'>Document services with the 21 CFR Compliance</div>
                        <div className='bg-[#5B2CE061] rounded-[20px] leading-6 px-4 py-8 text-[16px] text-white'>Thermal & Cold room validation </div>
                        <div className='bg-[#5B2CE061] rounded-[20px]  leading-6 px-4 py-8 text-[16px] text-white' >Temperature mapping & documentation
                        </div>
                        <div className='bg-[#5B2CE061] rounded-[20px]   leading-6 px-4 py-8 text-[16px] text-white'>Equipment heat distribution study i.e. Autoclave, Deep Freezer</div>
                        <div className='bg-[#5B2CE061] rounded-[20px]  leading-6 px-4 py-8 text-[16px] text-white'>CSV & PLC validation </div>
                        <div className='bg-[#5B2CE061] rounded-[20px]  leading-6 px-4 py-8 text-[16px] text-white'>Qualification & Validation</div>
                    </div>

                    <div className=' flex flex-col justify-between'>
                        <div className='flex gap-8'>
                            <div className='bg-[#5B2CE061] rounded-[20px]  leading-6 px-4 py-8 text-[16px] text-white' >HVAC and Compressed air validation</div>
                            <div className='bg-[#5B2CE061] rounded-[20px]   leading-6 px-4 py-8 text-[16px] text-white'>Calibration of Instruments and sensors</div>
                            <div className='bg-[#5B2CE061] rounded-[20px]  leading-6 px-4 py-8 text-[16px] text-white'>Paid training sessions on  current practices and regulatory requirements</div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='bg-[#5B2CE061] text-center rounded-[50%]  leading-6 px-8 py-16 text-[24px] text-white'>Our <br /> Services</div>
                        </div>
                        <div className='flex justify-center'>
                            <span className='text-[52px] font-bold text-[#631CD8]'>ALCOA+CCEA</span>
                        </div>



                    </div>

                </div>

                <div className='gap-12 justify-between flex flex-col w-[40%]'>
                    <div>
                        <img src="/lab01.png" alt="" />
                    </div>

                    <div>
                        <img src="/lab02.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
