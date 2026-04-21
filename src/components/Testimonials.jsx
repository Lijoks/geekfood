import React from 'react'
import profilePic from '../assets/profile_pic.jpg'  // Import the profile image

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!",
      name: "Gladis Lennon",
      role: "Head of SEO"
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae.",
      name: "Gladis Lennon",
      role: "Head of SEO"
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
      name: "Gladis Lennon",
      role: "Head of SEO"
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit.",
      name: "Gladis Lennon",
      role: "Head of SEO"
    },
    {
      id: 5,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.",
      name: "Gladis Lennon",
      role: "Head of SEO"
    }
  ]

  return (
    <section className="testimonials">
      <h2 className="section-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
      </h2>
      <div className="testimonials-grid">
        {testimonialsData.map(item => (
          <div key={item.id} className="testimonial-card">
            <p className="testimonial-text">{item.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img 
                  src={profilePic} 
                  alt={`${item.name}`} 
                  className="avatar-image"
                />
              </div>
              <div className="author-info">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials