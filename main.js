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
