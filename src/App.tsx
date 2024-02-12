import { Editor } from "reactjs-editor";
import "./App.css";
function App() {
  return (
    <div className="App">
      <a
        target="_blank"
        href="https://www.npmjs.com/package/reactjs-editor"
        style={{ height: "100px", width: "300px" }}
        rel="noreferrer"
      >
        <img
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          }}
          src="https://raw.githubusercontent.com/vivekneupane11/qanuny/main/REACT.png"
          alt="reactjs-editor"
        />
      </a>{" "}
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
  </main>`}
      />
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            target="_blank"
            href="https://www.npmjs.com/package/reactjs-editor"
            style={{ color: "blue", padding: "30px", fontSize: "24px" }}
            rel="noreferrer"
          >
            @reactjs-editor
          </a>
          <a
            target="_blank"
            href="https://github.com/vivekneupane11/reactjs-editor-demo"
            rel="noreferrer"
          >
            <svg
              style={{ padding: "0 20px", cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              {/* GitHub icon */}
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.793 8.207 11.387.6.105.82-.26.82-.577 0-.286-.01-1.045-.015-2.05-3.338.724-4.042-1.52-4.042-1.52-.546-1.383-1.333-1.75-1.333-1.75-1.088-.742.083-.727.083-.727 1.205.084 1.838 1.24 1.838 1.24 1.07 1.833 2.808 1.303 3.496.998.108-.774.42-1.303.763-1.604-2.672-.307-5.477-1.336-5.477-5.93 0-1.31.468-2.38 1.236-3.22-.124-.307-.536-1.522.116-3.176 0 0 1.008-.322 3.3 1.23a11.53 11.53 0 013.004-.404c1.018.007 2.043.136 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.654.243 2.869.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.608-2.81 5.618-5.485 5.918.43.37.818 1.102.818 2.22 0 1.604-.015 2.896-.015 3.29 0 .317.215.686.825.572C20.566 21.785 24 17.287 24 12c0-6.63-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/vivek-neupane-b99259194/"
            rel="noreferrer"
          >
            <svg
              style={{ padding: "0 20px", cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              {/* LinkedIn icon */}
              <path d="M2 22h4V8H2v14zM4 4a2 2 0 11-4 0 2 2 0 014 0zM22 22h-4v-7.348c0-1.74-.632-2.935-2.206-2.935-1.208 0-1.927.817-2.243 1.606-.115.283-.144.676-.144 1.07V22h-4V8h3.844v1.66h.052c.537-.998 1.846-2.045 3.795-2.045 2.857 0 5.006 1.862 5.006 5.87V22z" />
            </svg>
          </a>
          {/* Include other icons similarly */}
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=iR4xtbGtoU0"
            rel="noreferrer"
          >
            <svg
              style={{ padding: "0 20px", cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              {/* YouTube icon */}
              <path d="M23.974 7.174s-.197-1.39-.797-1.993c-.795-.804-1.59-.805-2.002-.851C17.233 4 12 4 12 4s-5.233 0-9.175.33c-.413.047-1.207.047-2.002.85-.6.603-.797 1.993-.797 1.993S0 8.467 0 10.468v3.04c0 2 .198 3.294.797 3.994.795.804 1.793.82 2.24.875.99.087 6.76.13 6.76.13s5.232 0 9.174-.33c.413-.047 1.208-.047 2.003-.85.6-.603.796-1.993.796-1.993s.197-1.39.197-3.392v-3.04c0-2-.198-3.293-.796-3.993zM9.505 15.52V8.468l6.68 3.527-6.68 3.527z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
