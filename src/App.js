import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillFacebook, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import image from "./assets/image.jpg";
import code from "./assets/code.png";
import design from "./assets/design.png";
import consulting from "./assets/consulting.png";
import {useState} from "react"
import Resume from "./assets/SahandAzad-CV.pdf";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
     <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
      <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className='text-xl dark:text-white'>Sahand Azad Abdul</h1>
        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
          </li>
          <li>
            <a href={Resume} download={"resume"} className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a>
          </li>
        </ul>
      </nav>
      <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Sahand Azad</h2>
          <h3 className='text-2xl py-2 dark:text-white'>Software Engineer and Graphic Designer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>A Software Engineering graduate with the skills of Full-Stack Web Development and Graphic Designing</p>
      </div>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
          <a href="https://www.facebook.com/SahandB99"><AiFillFacebook/></a>
          <a href="https://www.linkedin.com/in/sahand-berzinji"><AiFillLinkedin/></a>
          <a href="https://www.youtube.com/@SahandB99"><AiFillYoutube/></a>
      </div>
      <div className='relative mx-auto rounded-full w-100 h-80 mt-10 overflow-hidden'>
        <img src={image} className="rounded-full mx-auto w-100 h-80 object-cover"/>
      </div>
      </section>

      <section className='lg:flex gap-10 justify-center'>
        <div className='shadow-lg py-8 px-8 rounded-xl'>
          <img className='mx-auto h-28' src={consulting} alt="" />
          <h3 className='text-3xl py-1 text-center text-teal-600'>Services I offer</h3>
          <p className='text-md py-2 leading-8 text-gray-800 text-center dark:text-white'>
            <ul>
              <li>Frontend Website </li> 
              <li>Backend Website</li> 
              <li>Full Stack development website</li> 
              <li>Graphic design</li>
            </ul>
          </p>
        </div>
        <div className='shadow-lg py-8 px-8 rounded-xl'>
        <img className='mx-auto h-28' src={design} alt="" />
          <h3 className='text-3xl py-1 text-center text-teal-600'>Softwares I use</h3>
          <p className='text-md py-2 leading-8 text-gray-800 text-center dark:text-white'>
            <ul>
              <li>Visual Studio Code </li> 
              <li>Adobe Photoshop</li> 
              <li>Adobe After Effects</li> 
            </ul>
          </p>
        </div>
        <div className='shadow-lg py-8 px-8 rounded-xl'>
        <img className='mx-auto h-28' src={code} alt="" />
          <h3 className='text-3xl py-1 text-center text-teal-600'>Languages I use</h3>
          <p className='text-md py-2 leading-8 text-gray-800 text-center dark:text-white'>
            <ul>
              <li>HTML </li> 
              <li>CSS</li> 
              <li>JavaScript</li>
              <li>PHP</li> 
            </ul>
          </p>
        </div>
      </section>
    </div>
    </div>
  );
}

export default App;
