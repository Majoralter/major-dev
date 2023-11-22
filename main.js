import "./public/style.css";
// import projectShot01 from "/images/"

document.querySelector("#app").innerHTML = `
  <nav>
    <a class="logo" href="/">
      Jenrola Jackson
    </a>

    <ul>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact" class="cta">Get in touch</a></li>
    </ul>
  </nav>

  <main>
    <section class="hero--section">
      <div class="container"></div> 
      <h1>
        <span>J</span>enrola <span>J</span>ackson <br/> Frontend web <br /> developer.<br/>-->'Folio 2023<--
      </h1>
      
      <p>
        Hello, <br/> I'm a frontend web developer based in Lagos, Nigeria. <br/> I mainly work with React but I've used a number of tools <br /> and languages like Svelte, Gsap, Firebase, and a number of <br /> different libraries. When I'm not working, I mostly spend my <br /> time researching stuff related to development, playing fps <br /> games or reading fiction. 
      </p>
    </section>

    <section class="projects--section" id="projects">
      <h2><span>S</span>elected <span>P</span>rojects</h2>

      <div class="projects">
        <div class="project">
          <img src="./public/images/projectShot01.jpg" alt="Snapshot of a website on a gradient background" />

          <div>
            <h3>Portfolio for a UX designer</h3>
            
            <ul>
              <li>2023</li>
              <li>Single page</li>
              <li>Svelte</li>
              <li>Gsap</li>
            </ul>

            <a href="https://nneoma-folio.vercel.app/" target="_blank">View Live</a>
          </div>
        </div>
        <div class="project">
          <img src="./public/images/projectShot02.jpg" alt="Snapshot of a website on a gradient background" />

          <div>
            <h3>Web app for latest football news, <br /> highlights and more</h3>
            
            <ul>
              <li>2023</li>
              <li>Multi page</li>
              <li>Svelte</li>
              <li>Firebase</li>
              <li>Api</li>
            </ul>

            <a href="https://footnet-v2.vercel.app/" target="_blank">View Live</a>
          </div>
        </div>
        <div class="project">
          <img src="./public/images/projectShot03.jpg" alt="Snapshot of a website on a gradient background" />

          <div>
            <h3>Landing page for a saving platform</h3>
            
            <ul>
              <li>2023</li>
              <li>Single page</li>
              <li>React</li>
              <li>Web design</li>
            </ul>

            <a href="https://savewise.vercel.app/" target="_blank">View Live</a>
          </div>
        </div>
      </div>

      <a href="https://github.com/Majoralter?tab=repositories">View more on Github</a>
    </section>

    <footer class="contact--section" id="contact">
      <h4>
        <span>H</span>ave a <span>P</span>roject in mind?
      </h4>
      
      <ul>
        <li><a href="mailto:jenrolajackson@gmail.com">Get in touch</a></li>
        <li><a href="" target="_blank">Twitter</a></li>
      </ul>
    </footer>
  </main>
`;

const main = document.querySelector(".container"),
  array = [];

const getBlocks = () => {
  const size = window.innerWidth * 0.05,
    amount = Math.ceil(window.innerHeight / size);

  for (let i = 0; i <= amount; i++) array.push(`<div class="block"></div>`);
};

const colorize = (e) => {
  const colors = [
      "#f2f2f2",
      "#07beb8",
      "#f2dc5d",
      "#a4031f",
      "#240b36",
      "#1affd5",
      "#007fff",
      "#ff4a1c",
    ],
    randomIndex = Math.floor(Math.random() * colors.length);

  e.target.style.backgroundColor = colors[randomIndex];
  setTimeout(() => {
    e.target.style.backgroundColor = "transparent";
  }, 300);
};

const cols = [...Array(20)].map((_) => {
  getBlocks();
  const col = document.createElement("div");
  col.className = "col";
  array.forEach((item) => (col.innerHTML += item));
  return col;
});

for (let i = 0; i < cols.length; i++) {
  main.append(cols[i]);
}

const blocks = document.querySelectorAll(".block");
blocks.forEach((block) =>
  block.addEventListener("mouseenter", (e) => colorize(e))
);
