const domElementId = "change-theme";
const link = document.getElementById(domElementId);
const body = document.getElementsByTagName("body")[0];
const themes = ["light", "dark"];
let currentTheme = localStorage.getItem("theme") || themes[0];
body.className = currentTheme;

link.onclick = () => {
  let newValue = currentTheme === themes[0] ? themes[1] : themes[0];
  localStorage.setItem("theme", newValue);
  body.className = newValue;
  currentTheme = newValue;
};
