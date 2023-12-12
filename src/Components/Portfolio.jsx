/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
 {
    title: "Online Book Store",
    description:
      "This project is based on an Online Book store where Users can visit our Website and Buy Books. The website also includes an admin page where administrators can add, delete, and update book details. Implemented using HTML, CSS, jQuery, JavaScript, PHP, and MYSQL.",
    url: "https://github.com/GurusGeek/Online-Book-Store",
  },
  {
    title: "Employee Management System",
    description:
      "This project is based on an employees, student department system. It involves CRUD operations for these roles and is implemented using C using .NET Entity Framework.",
    url: "https://github.com/GurusGeek/Student-Department-Employee-Managment-System",
  },
  {
    title: "WECORD (BGMI)",
    description:
      "Built a tool for Google Solution. The solution mainly consists of a Flutter-based mobile app. This small and simple mobile application aims to check whether your body-to-mass ratio is normal or not. Chose Flutter for its cross-platform capabilities.",
    url: "https://github.com/GurusGeek/project",
  },
  {
    title: "Car Parking System",
    description:
      "Includes deployment of a Car Parking System that shows the system of car parking and how this system works through console simulation. Implemented using Flutter (Dart), PHP, and MYSQL.",
    url: "https://github.com/GurusGeek/CAR-PARKING_SYSTEM",
  },
  {
    title: "Online Voting System",
    description:
      "Includes an online voting system where users can vote for their desired political party all over the country. Implemented using Flutter (Dart), PHP, and MYSQL.",
    url: "https://github.com/GurusGeek/online-voting-system",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
