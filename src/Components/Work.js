import React from "react";
import Projects from "./Projects";


export default function Work() {
    const data = {
     todoData: {
        description: `This is a To-Do List made with HTML, CSS and JavaScript and has basic functionality.` ,
        descriptionLength: 80,
        link: "https://github.com/davidl117/todo-list",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fonplanners.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ftemplate_fancy%2Fpublic%2Ftemplate-images%2Fprintable-daily-do-list-template_0.png&f=1&nofb=1&ipt=bac47b25a2af55e22cc0ede61eac7f72bf9449f59a88116c65263cc292d781b3&ipo=images",
     },
     webScraper: {
        description: `This is a web scraper built with JavaScript and Node.js.` ,
        descriptionLength: 80,
        link: "https://github.com/davidl117/Web-scraper",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.morioh.com%2F8feb6981d6.png&f=1&nofb=1&ipt=10cf1e94439864c0320b7ece441960d414eb83acf1fd023356518161bc09c84e&ipo=images", 
     },
     website: {
        description: "This is my website where my work is located and displayed as my portfolio. ",
        descriptionLength: 80,
        link:"https://github.com/davidl117/portfolio",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsvitla.com%2Fuploads%2F0%2F1704-websiteg.jpg%3F1552573200&f=1&nofb=1&ipt=6a1ed359db56c43f7318a78588e6c222a60d62d22b7d1bbfaf0b835793b81267&ipo=images",
     },
    }
//add screen shots for each project
    return (
      <div className="project-frame">
        <Projects 
            link={data.todoData.link}
            description={data.todoData.description}
            length={data.todoData.descriptionLength}
            image={data.todoData.image}
        />
        <Projects 
            link={data.webScraper.link}
            description={data.webScraper.description}
            length={data.webScraper.descriptionLength}
            image={data.webScraper.image}
        />
        <Projects 
            link={data.website.link}
            description={data.website.description}
            length={data.website.descriptionLength}
            image={data.website.image}
        />
      </div>
    );
  }
  
  
  