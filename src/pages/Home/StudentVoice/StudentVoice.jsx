import React, { useEffect, useState } from 'react';
import studentVoiceImg from '../../../assets/images/student-voice/student-voice.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const StudentVoice = () => {
  const [studentVoice, setStudentVoice] = useState([]);
  useEffect(() => {
    fetch('studentVoice.json').then(res => res.json()).then(data => setStudentVoice(data))
  }, [])
  
    return (
        <div className='my-24 px-6 md:px-[240px] md:flex items-center gap-6'>
            <div className='md:w-1/2'>
                <img src={studentVoiceImg} />
            </div>
            <div className='md:w-1/2 mt-6 md:mt-0'>
              <h1 className='font-semibold text-2xl mb-2 text-center'>Our Student Voice</h1>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                  studentVoice.map(sv => <SwiperSlide
                    key={sv.id}
                    className=''
                  >
                    <div className=' flex items-center justify-center flex-col'>
                      <div className='text-center mt-2'>
                        <h4 className='font-medium mb-2'>{sv.courseName}</h4>
                        <p className='w-[250px] md:w-[600px] text-sm text-[#757575] mb-2'>
                          {sv.speech}
                        </p>
                        <div className='mt-4'>
                          <h3 className='font-semibold'>{sv.studentName}</h3>
                          <p className='text-sm text-[#757575]'>{sv.location}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>)
                }
            </Swiper>
            </div>
        </div>
    );
};

export default StudentVoice;