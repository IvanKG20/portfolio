import React, {useState} from 'react'
import "./portfolio.css"
import Menu from './Menu'

const Portfolio = () => {
  const[items, setItems] = useState(Menu)
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
        return curElem.category === categoryItem
    })

    setItems(updatedItems)
  }

  return (
      <section className="work container section" id='portfolio'>
        <h2 className="section__title">Recent Projects</h2>

        <div className="work__filters">
          <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
          <span className="work__item" onClick={() => filterItem("WebApp")}>Web Apps</span>
          <span className="work__item"onClick={() => filterItem("Games")}>Games</span>
          <span className="work__item"onClick={() => filterItem("3DModels")}>3D Designs</span>
        </div>

        <div className="work__container grid">
        {items.map((elem) => {
          const{ id,image, title, category, link} = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img className='work__image' src={image} alt="" srcset="" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button" target='_blank'>
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}

        </div>
      </section>
  )
}

export default Portfolio