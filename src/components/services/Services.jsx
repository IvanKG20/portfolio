import React from 'react'
import "./services.css"
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"


const data = [
  {
    id: 1,
    image: Image1,
    title: "UX/UI design",
    description:
      "UX/UI Design has become a passion of mine since joining university, I have learnt how to do a good research and apply that to my products. ",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Web Development so far has been my favorite subject that I constantly like to work on and improve, my skills include languages like HTML, CSS, SASS, JavaScript and right now I am beginning to learn ReactJS. I also have a bit of experience in Swift.",
  }
];

const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({id,image,title,description}) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services