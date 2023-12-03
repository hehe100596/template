const test = () => {
  console.log("Button clicked");
};

const changeColor = () => {
  const title = document.getElementById("title");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  title.style.color = randomColor;
};
