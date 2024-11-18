import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Chetan",
  lastName: "Menaria",
  initials: "JS", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎", 
      text: "based in the India",
    },
    {
      emoji: "💼",
      text: "Full stack developer at Lakebrains Technologies",
    },
    {
      emoji: "📧",
      text: "chetanmenaria900@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://facebook.com",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/chetanmenaria00",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/chetanmenaria00",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "I'm Chetan, a Full Stack Developer at Lakebrains Technologies, specializing in the MERN stack, Docker, and GCP with CI/CD. I build scalable, cloud-based apps and am always ready to tackle new challenges. When I'm not coding, I'm taking long walks (and pondering AI's inevitable takeover).",
  skills: {
    proficientWith: [
      "HTML5",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Material UI",
      "Tailwind",
      "Bootstrap",
      "Axios/Fetch",
      "Chrome Extension Development",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Postman",
      "git",
      "github",
      "WebRTC",
      "Webpack",
    ],
    exposedTo: [
      "React Native",
      "GCP services",
      "Cloud Functions",
      "Cloud Build",
      "Firebase",
      "DigitalOcean",
      "CI/CD pipelines",
      "linux",
      "Docker",
      "Jenkins",
    ],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "chess",
      emoji: "♟️",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "https://qa.devopspro.co.in/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://chromewebstore.google.com/detail/live-transcript-extension/bbdgdpkamhamfdcbbkbooomiliaiahpn?authuser=0&hl=en-GB",
      source: "https://github.com",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://task-management-blond-omega.vercel.app/",
      source: "https://github.com/",
      image: mock3,
    },
    // {
    //   title: "Project 4",
    //   live: "https://classy-sopapillas-ceda71.netlify.app/",
    //   source: "https://github.com/",
    //   image: mock4,
    // },
    // {
    //   title: "Project 5",
    //   live: "https://idyllic-kleicha-f32328.netlify.app/",
    //   source: "https://github.com/",
    //   image: mock5,
    // },
    // {
    //   title: "Project 6",
    //   live: "https://nextjs-blog-web-lovat.vercel.app/",
    //   source: "https://github.com/",
    //   image: mock6,
    // },
  ],

  experiences: [
    {
      label: "Software Developer at Lakebrains Technologies",
      emoji: "💻",
      desc: "Developed AI-driven Chrome extensions, built scalable backend systems with Node.js, and deployed apps on GCP & DigitalOcean for high availability. Integrated payment gateways like Stripe and Paytm, and collaborated with international clients to deliver impactful solutions.",
    },
    {
      label: "Web Developer Intern at Lakebrains Technologies",
      emoji: "🖥️",
      desc: "Developed responsive UIs using React, HTML5, and CSS4. Supported product development and optimized application compatibility for cross-device performance and browser functionality.",
    },
  ],
};
