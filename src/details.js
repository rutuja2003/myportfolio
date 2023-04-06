import resume from "./assests/images/projects/certficate.jpg";
import tikitaka from "./assests/images/projects/tikitaka.png";
import pinterest from "./assests/images/projects/pinterest.png";
import ecommerce from "./assests/images/projects/ecommerce.png";
import crypto from "./assests/images/projects/crypto.png";
import blog from "./assests/images/projects/blog.png";
import authentication from "./assests/images/projects/authentication.png";
import cpp from "./assests/images/language/cpp.png";
import C from "./assests/images/language/C.png";
import bootstrap from "./assests/images/language/bootstrap.png";
import django from "./assests/images/language/django.png";
import html from "./assests/images/language/html.png";
import javascript from "./assests/images/language/javascript.png";
import jquery from "./assests/images/language/jquery.png";
import python from "./assests/images/language/python.png";
import rec from "./assests/images/language/react.png";
import sql from "./assests/images/language/sql.png";
import css from "./assests/images/language/css.png";
import insta from "./assests/images/social/insta.png";
import github from "./assests/images/social/github.png";
import leetcode from "./assests/images/social/leetcode.png";
import linkedin from "./assests/images/social/linkedin.png";

export const social = [
  // {link:"https://www.instagram.com/satyam_4484/?hl=en",img:insta},
  {link:"https://github.com/rutuja2003",img:github},
  {link:"https://leetcode.com/Rutuja_Sathe/",img:leetcode},
  {link:"https://www.linkedin.com/in/rutuja-sathe-344583250/",img:linkedin}
]

export const colors= {
  'Django':'info',
  'rest-framework':'primary',
  'React js':'warning',
  'Bootstrap':'success',
  'Css':'secondary',
  'Html':'danger'
}
export const education = [
  {
    id: 1,
    year: "2020-2024",
    course: "Bachelor of Engineering",
    university: "Pune University",
    gpa: "9.04",
    style:"fade-up-right"
  },
  {
    id: 2,
    year: "2018-2020",
    course: "Higher Secondary School",
    university: "CBSE Board",
    gpa: "9.82",
    style:"fade-up-left"
  },
  {
    id: 3,
    year: "2007-2018",
    course: "Senior Secondary School",
    university: "CBSE Board",
    gpa: "8.20",
    style:"fade-up"
  },
];

export const projects = [
  {
    id: 1,
    title: "Resume Builder",
    image: resume,
    desc: [
      "Frontend is implemented using React Js , Bootstrap and Backend is implemented using Django",
      "It also uses kendo-react which convert JSX to PDF in React",
      "Rest-api's have been implemented using django-rest framework and also it uses JWT Tokens for Authentication",
      "Resume is built using Education ,Experiences ,Skills ,Projects , Achievements",
    ],
    link:'github.com/rutuja2003',
    tools:['Django','rest-framework','React js','KendoReact','Bootstrap','Css','Html','Postman'],
    style:"flip-left"

  },
  {
    id: 2,
    title: "Tiki-Taka Coaching",
    image: tikitaka,
    desc: [
      "Backend is implmented using Django and Frontend using Django-forms",
      "It is an online platform that train's football players without visiting to any sport's center",
      "Player's progress is tracked by the coach and feedback is visible in player's profile",
      "Parent's can also see the profile of their children by logging to their account",
    ],
    link:'https://github.com/satyam4484/TIKI-TAKA-Coaching',
    tools:['Django','Bootstrap','Html','Css','JavaScript'],
    style:"flip-right"
  },
  {
    id: 3,
    title: "Ecommerce",
    image: ecommerce,
    desc: [
      "Backend is implmented using Django and Frontend using Django-forms and jQuery",
      "Product items contains category,subcategory,cart,wishlist",
      "uses AJAX for Asynchronous tasks and filtering methods",
    ],
    link:'https://github.com/satyam4484/E-commerce',
    tools:['Django','Bootstrap','Html','Css','JavaScript','AJAX'],
    style:"flip-left"
  },
  {
    id: 4,
    title: "Pinterest Clone",
    image: pinterest,
    desc: [
      "Uses Django as a backend",
      "Project also contains functionality like like,dislike,add comments, download image",
      "It uses AJAX for Like and dislikes and also provide userDashboard",
    ],
    link:'https://github.com/satyam4484/pinterest',
    tools:['Django','Bootstrap','Html','Css','JavaScript','AJAX'],
    service:'https://pinterest-s.herokuapp.com/',
    style:"flip-right"
  },
  {
    id:5,
    title:"Cryptocurrency App",
    image:crypto,
    desc:[
      "Uses Cypto api to fetch data and display",
      "Provides filter methods also"

    ],
    link:'https://github.com/satyam4484/cryptocurrency-App-',
    tools:['React Js','Bootstrap','Html','Css','React Js','Postman'],
    style:"flip-left"
  },
  {
    id:6,
    title:"Authentication Provider",
    image:authentication,
    desc:[
      "Uses Django-restframework for api implementation",
      "The whole api is hosted on hereko server and documentation can be found below"
    ],
    link:'https://github.com/satyam4484/authentication-Provider',
    tools:['Django','rest-framework','Postman'],
    service:'https://documenter.getpostman.com/view/17718134/Uz5NiCxw',
    style:"flip-right"
  },
  {
    id:7,
    title:"Coding Blog",
    image:blog,
    desc:[
        "Implemented CRUD Features With search functionality and Interactive user dashboard",
        "Use of CKE Editor For providing text editor in admin page",
        "user will write the content and that content is parsed by the database, save it and show the content in formatted way"
    ],
    link:'https://github.com/satyam4484/A_Coding_Blog',
    tools:['Django','Html','Css','JavaScript','CKE Editor'],
    style:"flip-up"
  }
];



export const experiences =[
  {
    id:1,
    jobtitle:'Backend Developer',
    company:'PDB Technology and Solution',
    from:"Aug 2021",
    to:"Nov 2021",
    location:'Baner,Pune',
    desc:[
      "Implemented Rest Api's for the application in backened part using python and JIRA rest Api's to track and manage issues",
      "Implemented the whole issue managment tool with Django and React js",
      "Implemented email notification system which reduces the overall cost upto 80% for creating users to Jira"
    ]
  },
]

export const skills = [
  {title:"Cpp",img:cpp,val:80},
  // {title:"Python",img:python,val:50},
  {title:"React Js",img:rec,val:60},
  {title:"JavaScript",img:javascript,val:60},
  // {title:"Django",img:django,val:80},
  {title:"Html",img:html,val:90},
  {title:"Css",img:css,val:70},
  {title:"C",img:C,val:80},
  {title:"Bootstrap",img:bootstrap,val:60},
  {title:"JQuery",img:jquery,val:60},
  {title:"MySql",img:sql,val:70},
]


