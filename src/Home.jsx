import React from 'react';
import { useEffect, useState } from 'react';
import Profile from './assets/sketch';
import ContactForm from './assets/ContactForm';
import './App.css';
import './Home.css';
import Project from './assets/Project';
import Contact from './assets/Contact';

import earthquake from './assets/photos/unit1-brown.png';
import cmd from './assets/photos/unit3-brown.png';
import covid from './assets/photos/unit6-brown.png';
import ccny from './assets/photos/ccny.png';
import dill from './assets/photos/dill.png';
import hybound from './assets/photos/hybound.png';
import pvz from './assets/photos/plants-vs-zombies.png';
import shxttalk from './assets/photos/shxttalk.png';
import solar from './assets/photos/solar-scape.png';
import spend from './assets/photos/spend-mood.png';
import wbar from './assets/photos/wbar.png';
import webserver from './assets/photos/3157.png';

function Home() {
  const [openProjectId, setOpenProjectId] = React.useState(null);
  const [scale, setScale] = React.useState(1);
  useEffect(() => {
    const updateScale = () => {
      const el = document.getElementById('profile-wrapper');
      if (el) {
        const value = getComputedStyle(el).getPropertyValue('--scale').trim();
        setScale(parseFloat(value) || 1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  const projects = [
    { id: 1, title: "Webserver", blurb: 'Created an HTTP/1.0 web server in C', 
      description: ["Created an HTTP/1.0 web server in C (using Vim) capable of serving static HTML and image files. Built an additional ", 
      "dynamic component that connects with a database server to allow users to search through messages. The server supports GET requests ",
      "from HTTP/1.0 and HTTP/1.1 clients and handles errors responses including 400, 403, 404, and 501. "], 
      link: 'https://cs3157.github.io/www/2025-9/', image: webserver, alt: 'Welcome page of the Advance Programming computer'
    },

    { id: 2, title: "Hybound", blurb: 'Created mock Stripe data', 
      description: ["Worked with the Stripe API to generate mock test data for a B2B startup. Built a CLI tool to create historical and ", 
        "current customer data with multiple configurable data patterns."],
      link: 'https://www.hybound.com/', image: hybound, alt: 'Graphs showing the distribution of products purchased in the mock data'
    },

    { id: 3, title: "SpendMood", blurb: 'Financial tracking application that connects user spending and to mood', 
      description: ["Created a financial tracking application that analyzes user spending patterns and associates them with mood to help users become ", 
        "more aware of how emotions impact their spending habits. Integrated the Capital One Nessie API to enable quick uploads of ",
        "historical spending data. Built using Auth0 for authentication, FastAPI for the backend, Gemini for analytics, and custom CSS ",
        "for the frontend."],
      link: "https://devpost.com/software/spendmood?_gl=1*fzdted*_ga*MTE3MzQ3NDc5Ny4xNzY5NTE5MjEw*_ga_0YHJK3Y10M*czE3Njk1MTkyMTAkbzEkZzAkdDE3Njk1MTkyMTAkajYwJGwwJGgw", image: spend,
      alt: 'Dashboard of SpendMood'
    },

    { id: 4, title: "Wbar Website", blurb: 'Maintain and improve the WBAR radio station website', 
      description: ["Maintained a website that streams the WBAR radio station 22 hours a day. Responsible for record updates, bug fixes, database", 
        "management, and ongoing feature improvements."],
      link: "https://wbar.org/ ", image: wbar, alt: 'Wbar website page'
    },

    { id: 5, title: "Shxttalks", blurb: 'Built a campus bathroom database with a review-based frontend and data integrity controls.',
      description: ["Created a campus bathroom database following the full database development workflow, including ER diagram design, mock data ",
        "generation, and implementation in PostgreSQL. Built a frontend that allows users to interact with the database by submitting reviews ",
        "and filtering available bathrooms. Implemented database triggers to maintain data consistency and prevent spam or duplicate submissions."],
      link: 'https://www.cs.columbia.edu/~kar/4111f25/', image: shxttalk, alt: 'Data from the buildings table'
    },

    { id: 6, title: "Princeton Labatory Learning Program", blurb: 'Created a campus bathroom database following the full database development workflow', 
      description: ["Conducted researched a Dr. Puchalla's lab in Princeton. In summer of 2023, Expanded upon ChatGPT's capabilities to create an AI-powered ",
        "tutoring website. Implemented image and audio uploads, converted AI responses into audio output, and designed customizable AI personalities using ",
        "pre-configured prompts and props. Additionally, worked on experimenting with AI to identify chemicals on Burst Analysis Spectroscopy data using MATLAB."],
        link: "https://sites.google.com/view/puchallalab/home", image: dill, alt: 'Dill dashboard'
    },

     { id: 7, title: "Pacbot", blurb: 'Built and presented an Ardunio-controlled robotic car with multiple movement capabilites', 
      description: ["Built an Arduino-controlled robotic car featuring remote control, ultrasonic obstacle avoidance, and line-following behavior; selected ",
        "to present to 300+ attendees at the STEM Institue at CCNY program’s final panel."],
      link: 'https://steminstitutenyc.org/', image: ccny, alt: 'Panel from presentation of pacbot'
    },

     { id: 8, title: "Earthquakes", blurb: 'Created and analyzed a map of the recent earthquakes in Central America', 
      description: ["Created a map of recent earthquakes in Central America, presented earthquake activity using an original diagram, and ",
        "proposed strategies to improve earthquake preparedness and reduce damage. Learned coding basics and key concepts including ",
        "seismic waves, lava, and tectonic plates."],
      link: "https://github.com/dellaetta/brown-scholars-projects/tree/main/unit1", image: earthquake, alt: 'Map of earthquakes in central america'
    },

     { id: 9, title: "Stars", blurb: 'Created a Color-Magnitude Diagram (CMD) for the Prasepe star cluster using Matplotlib and pandas ', 
      description: ["Created and presented a Color–Magnitude Diagram (CMD) for the Praesepe star cluster. Learned Matplotlib and advanced pandas ",
        "skills while studying stellar magnitude, TGAS data, and the Hertzsprung–Russell diagram."],
      link: "https://github.com/dellaetta/brown-scholars-projects/tree/main/unit3", image: cmd, alt: 'Color magnitude diagram of praesepe'
    },

     { id: 10, title: "COVID Map", blurb: 'Live data visualization on COVID-19 cases, deaths, and recoveries', 
      description: ["Analyzed U.S. COVID-19 data by visualizing cases, deaths, and recoveries, with a focused study on New York. Gained experience working ",
        "with live datasets, Plotly, and choropleth maps."],
      link: "https://github.com/dellaetta/brown-scholars-projects/tree/main/unit6", image: covid, alt: 'Map indicating the amount of covid related deaths in the United States'
    },

     { id: 11, title: "Solar Scapes", blurb: 'Finalist for the Game for Change competition', 
      description: ["Developed a Scratch game to raise awareness about sustainable cities. Players improve the environmental impact of their town by ",
        "completing mini-games. Awarded 2022 Games for Change Sustainable Cities Award Finalist, Northeast Senior Division."],
      link: "https://scratch.mit.edu/projects/656913371/", image: solar, alt: 'title screen of solar scapes video game'
    },

     { id: 12, title: "Plants vs Zombies", blurb: 'Manufactured an arcade version of the classic Plants vs Zombies game', 
      description: ["Collaborated with a team to build a real-life Plants vs. Zombies–inspired game. Contributed on the manufacturing team by ",
        "laser-cutting wooden components and designing and 3D printing a rack-and-pinion system."],
      link: "https://www.coursicle.com/columbia/courses/ENGI/E1102/", image: pvz, alt: 'Plants vs zombies project'
    }
  ];

  return (
    <div>
      <div className = 'intro-container'>
        <div className='profile-wrapper' id = 'profile-wrapper'>
          <a href="https://github.com/dellaetta/selfie" target="_blank" rel="noopener noreferrer"></a>
          <Profile SCALE = {scale}/>
        </div>
        <div className = 'home-right'>
          <div className = 'text'>
            <h1>Chloe Velez</h1>
            <p>Hello! I’m Chloe Velez, a computer science undergraduate at Columbia University. 
              I’ve been passionate about coding since middle school, elementary school if you count Scratch. 
              Over the years, I’ve explored a variety of tech fields, including game design, research and 
              machine learning, data science, and robotics. I’m always eager to learn new skills and take 
              on exciting challenges.
            </p>
          </div>
          <Contact type = 'home'/>
        </div>
      </div>

      <div id = 'education' className = 'education-container'>
        <h1 className = 'timeline_header'>Education</h1>
        <div className ='timeline timeline--d'>
          <div className ='timeline_middle timeline_middle--d'>
            <div className ='timeline_point timeline_point--d'></div>
          </div>

          <div className ='timeline_component timeline_component--bg'>
            <h2 className ='timeline_title'>Columbia University | BS Computer Science | NY, NY | Expected: May 2028</h2>
            <ul>
              <li>Relevant courses: Cryptography: Theory & Practice (in progress), Inferential Statistics (in progress), Linear Algebra for Engineers (in progress),
                Web Development (in progress), Advance Programming (C), Discrete, Introduction to Databases (SQL), Data Structures 
                and Algorithms in Java, Introduction to Java, Introduction to Computing for Engineers and Applied Scientists (Python)
                and Multivariable calculus.
              </li>
            <li>Clubs: Barnard College's Freeform Radio Station (WBAR) and CUCyber</li>
          </ul>
          </div>

          <div className ='timeline_middle timeline_middle--d'>
            <div className ='timeline_point timeline_point--d'></div>
          </div>

          <div className ='timeline_component timeline_component--bottom timeline_component--bg'>
            <h2 className ='timeline_title'>Eleanor Roosevelt High School | NY, NY | Graduated June 2024</h2>
            <ul>
              <li>Relevant courses: AP Computer Science Principles (perfect score), AP Chemistry, AP Physics 1, AP Calculus BC, AP Statistics</li>
              <li>Clubs: Technology (Co-leader, 12th grade), Animal Welfare (Co-leader, 10th & 12th grade), Math, Science Olympiad, Girls Lead Our World</li>
            </ul>
          </div>
        </div>
      </div>

      <div id = 'experience' className = 'experience-container'>
        <h1 className = 'timeline_header'>Experience</h1>
        <div className ='timeline timeline--x'>

          <div className ='timeline_middle timeline_middle--x'>
            <div className ='timeline_point timeline_point--x'></div>
          </div>
          <div className ='timeline_component timeline_component--bg'>
            <h2 className ='timeline_title'>Hybound Intern | NY, NY | Summer 2025</h2>
            <ul>
              <li>Developed an open-source CLI in TypeScript to generate test data in Stripe sandbox.</li>
              <li>Built a method to adapt Stripe test clocks for creating historical datasets.</li>
              <li>Designed commands to generate realistic customer purchase patterns for testing purposes.</li>
            </ul>
          </div>

          <div className ='timeline_middle timeline_middle--x'>
            <div className ='timeline_point timeline_point--x'></div>
          </div>
          <div className ='timeline_component timeline_component--bg'>
            <h2 className ='timeline_title'>Barnard College's Freeform Radio Station Web Team Lead | NY, NY | August 2025 - Present</h2>
            <ul>
              <li>Lead development and maintenance of the station’s website, improving frontend performance using React, JavaScript, HTML, and CSS.</li>
              <li>Maintained backend functionality and database management with Supabase and Python.</li>
            </ul>
          </div>

          <div className ='timeline_middle timeline_middle--x'>
            <div className ='timeline_point timeline_point--x'></div>
          </div>
          <div className ='timeline_component timeline_component--bg'>
            <h2 className ='timeline_title'>Math Tutor | NY, NY | 2023 - 2024</h2>
            <ul>
              <li>Provided weekly tutoring in algebra to a 7th-grade student, improving grades from 70–80% to 90%+.</li>
              <li>Strengthened communication and instructional skills through personalized lesson planning and ski instructor training clinics.</li>
            </ul>
          </div>

          <div className ='timeline_middle timeline_middle--x'>
            <div className ='timeline_point timeline_point--x'></div>
          </div>
          <div className ='timeline_component timeline_component--bg'>
            <h2 className ='timeline_title'>Princeton University Laboratory Learning Program | Princeton, NJ | Summer 2023</h2>
            <ul>
              <li>Conducted research in Dr. Jason Puchalla’s biophysics lab, creating an AI-enhanced tutoring interface and tools for burst spectroscopy data analysis.</li>
              <li>Gained hands-on experience with Matplotlib, JavaScript, React, HTML, Streamlit, and Jupyter Notebooks.</li>
              <li>Presented bi-weekly research updates to lab mentors and peers.</li>
            </ul>
          </div>

          <div className ='timeline_middle timeline_middle--x'>
            <div className ='timeline_point timeline_point--x'></div>
          </div>
          <div className ='timeline_component timeline_component--bg'>
            <h2 className ='timeline_title'>City College of New York (CCNY) STEM Institute | NY, NY | Summer 2022</h2>
            <ul>
              <li>Completed two six-week college-level courses in Engineering Design and Entrepreneurship.</li>
              <li>Built a fully functional robot in C++ with light and sonic sensors and remote control capabilities.</li>
              <li>Selected to present the team’s robot at the closing ceremony</li>
              <li>Named Student of the Week in both classes and received a Gold Award as one of the top students in Entrepreneurship.</li>
            </ul>
          </div>

          <div className ='timeline_middle timeline_middle--x'>
            <div className ='timeline_point timeline_point--x'></div>
          </div>
          <div className ='timeline_component timeline_component--bg'>
            <h2 className ='timeline_title'>School of Interactive Arts | NY, NY | Summer 2021</h2>
             <ul>
              <li>Completed a five-week intensive program in game design, digital animation, augmented reality, and music production.</li>
              <li>Learned C# programming in Unity to create interactive games and AR experiences.</li>
              <li>Designed original pixel art, story-driven narratives, and immersive game mechanics, demonstrating creative and technical integration.</li>
              <li>Produced multimedia projects combining programming, visual design, and sound, enhancing collaboration and cross-disciplinary skills.</li>
            </ul>
          </div>

          <div className ='timeline_middle timeline_middle--x'>
            <div className ='timeline_point timeline_point--x'></div>
          </div>
          <div className ='timeline_component timeline_component timeline_component--bg'>
            <h2 className ='timeline_title'>Brown Scholars Program | American Museum of Natural History | NY, NY | 2020 – 2021</h2>
            <ul>
              <li>Completed 120 hours of coursework in Python, data visualization, and databases, applying computer science to scientific topics.</li>
              <li>Studied topics including COVID-19 trends, DNA-to-RNA translation, earthquakes, and climate change.</li>
              <li>Used pandas, NumPy, Plotly, and Matplotlib to conduct and present data analysis projects.</li>
            </ul>
          </div>

          <div className ='timeline_middle timeline_middle--x'>
            <div className ='timeline_point timeline_point--x'></div>
          </div>
          <div className ='timeline_component timeline_component--bottom timeline_component--bg'>
            <h2 className ='timeline_title'>Ski Instructor | Belleayre Mountain Ski Center| Highmount, NY |  2021 - 2024</h2>
            <ul>
              <li>Led ski group lessons for children ages 4-12 at the first-time, novice and intermediate levels.</li>
              <li>Taught technical components of skiing, including speed/stop control and parallel skiing, while promoting a safe learning environment for students.</li>
            </ul>
          </div>
        </div>
      </div>

      <div id = 'project' className = 'projects-container'>
        <h1>Projects</h1>
        <div className = 'projects-grid'>
          {projects.map(project => (
            <div key={project.id}>
              <button className='project' onClick={() => setOpenProjectId(project.id)}> 
                <h2> {project.title} </h2>
                <p> {project.blurb} </p>
              </button>

              <Project
                open = {openProjectId === project.id}
                onClose = {() => setOpenProjectId(null)}
                title = {project.title}
                description = {project.description}
                link = {project.link}
                image = {project.image}
              />
            </div>
          ))}
        </div>

      </div>

      <div id = 'contact' className = 'contact-container'>
        <h1>Contact Me</h1>
        <ContactForm/>
      </div>

      <div className = 'footer-container'>
        <p>Chloe Velez 2026</p>
        <Contact type = 'footer'/>
      </div>
    </div>
  );
}
export default Home;