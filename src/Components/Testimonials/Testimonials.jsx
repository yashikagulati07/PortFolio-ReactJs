import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
function Testimonials() {

    const clients = [
        {
            img: profilePic1,
            review:
                "I am writing to highly recommend Yashika for opportunities in the field of CSE. As her former teacher in several CSE courses, I had the pleasure of witnessing their impressive growth and development as a student, as well as their dedication and passion for the subject matter. She consistently demonstrated a strong work ethic and commitment to learning. They were an active and engaged participant in class discussions, frequently contributing thoughtful insights and questions that demonstrated a deep understanding of the material.",
        },
        {
            img: profilePic2,
            review:
                "I am writing to recommend Yashika for any positions or opportunities in the field of Computer Science and Engineering (CSE). As a senior in the same program, I have had the pleasure of working with her on several occasions and have been consistently impressed by their work ethic, technical abilities, and dedication to the subject matter.",
        },
        {
            img: profilePic3,
            review:
                "Yashika has excellent communication and interpersonal skills, and is a pleasure to work with. She is always willing to assist peers and contribute to group projects, demonstrating strong teamwork skills and a willingness to collaborate. Overall, I strongly recommend her for any position in the field of CSE. Their skills, dedication, and passion for the subject matter make them an excellent candidate for any opportunity in the field.",
        },
        ,
    ];
    return (
        <div className='t-wrapper'>
            <div className="t-heading">
                <span> Reviews/Feedback from </span>
                <span> my Teachers and Seniors </span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='testimonial'>
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonials