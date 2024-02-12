import { Editor } from 'reactjs-editor';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1 style={{color:'blue'}}>REACTJS-EDITOR</h1>
  <Editor
        /** htmlContent accepts only one element. Just wrap everything on one element **/
        htmlContent={`<main>
   
        <div style="border-radius:30px;width:80%;padding:0 0 0px 0; margin:30px auto 40px auto; box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;background:#fff;">
       <header 
               class="demo-header" style="color:#000;border-top-left-radius:30px;border-top-right-radius:30px;text-align:center;padding:25px;background-color:#f2f2f2;">Select Text Below and See the Magic</header>
        <div style="display:flex;">
        <aside class="para" style="border-right:2px solid #f2f2f2;">
            <p style="padding:10px 20px;text-align:left;color:#000;line-height:25px;">
            Programming is the art of instructing computers to perform tasks through the use of structured instructions and algorithms.    It encompasses a vast array of languages and paradigms, each tailored to different purposes and problem domains. From low-level languages like C and assembly, which interact directly with hardware, to high-level languages such as Python and JavaScript, which offer abstraction and ease of use, programming empowers individuals to create software solutions that address real-world challenges. Whether it's developing web applications using HTML, CSS, and JavaScript, designing algorithms for artificial intelligence, or optimizing code for efficiency and performance, programmers continuously innovate and refine their craft.  Through collaboration, experimentation, and lifelong learning, programmers push the boundaries of what is possible in the digital realm, shaping the future of technology and driving progress in society.  As technology evolves, so too does the art and science of programming, opening new frontiers and opportunities for creativity and problem-solving.    Their proficiency in coding enables them to create innovative applications, websites, and software products that enhance communication, streamline processes, and revolutionize industries. Beyond their technical prowess, programmers demonstrate exceptional problem-solving abilities, deciphering
          </p>
        </aside>
        <aside class="para">
            <p style="padding:10px 20px;text-align:left;color:#000;line-height:25px;">
            
A web developer is a skilled professional responsible for creating and maintaining websites. They possess expertise in various programming languages such as HTML, CSS, and JavaScript, which they use to design and build visually appealing and functional web pages. Web developers collaborate with designers to ensure seamless user experiences, incorporating interactive elements and responsive designs.  They also work with backend technologies like databases and server-side scripting to enable dynamic content and data processing.      With a keen eye for detail and a solid understanding of web standards and best practices, web developers play a crucial role in bringing ideas to life on the internet, contributing to the ever-evolving landscape of the digital world.
            </p>

           <p style="padding:10px 20px;text-align:left;color:#000;line-height:25px;">
         
Programmers  are often regarded as modern-day superhumans due to their remarkable ability to transform abstract ideas into functional software solutions that power the digital world. Armed with an extensive toolkit of programming languages, frameworks, and technologies, programmers possess the extraordinary skill to craft intricate algorithms, design intuitive user interfaces, and         engineer robust systems that tackle complex problems with elegance and efficiency.   
          </p>
          </aside>
        </div>
  </main>`
              }
      />
    </div>
  );
}

export default App;
