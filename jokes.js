const jokesGenerate = async () => {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  showJokes(data);
};

const showJokes = (jokes) => {
  const inside = document.getElementById("jokesText");
  inside.innerHTML = `
  <h3>${jokes.joke}</h3>
  `;
};
