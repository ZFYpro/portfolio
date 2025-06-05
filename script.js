/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});

//弹窗效果
function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  const clickSound = document.getElementById("clickSound"); // 获取音效
  clickSound.currentTime = 0;
  clickSound.play(); // 播放点击音

  document.getElementById("modal").style.display = "none";
}



//声音
window.addEventListener('DOMContentLoaded', () => {
  const hoverSound = document.getElementById('hoverSound');
  const clickSound = document.getElementById('clickSound');

  document.querySelectorAll('.icon').forEach(icon => {
    
    // 点击音效
    icon.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play();
    });

    // 悬停音效
    icon.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0;
      hoverSound.play();
    });
  });
});



document.querySelectorAll('a .icon').forEach(icon => {
  icon.addEventListener('click', e => {
    e.preventDefault(); // 阻止立即跳转
    const link = icon.parentElement.href;

    setTimeout(() => {
      window.open(link, '_blank'); // 在新标签页打开
    }, 200);
  });
});



function openGameHub() {
  document.getElementById("gameHubModal").style.display = "block";
}
function closeGameHub() {
  document.getElementById("gameHubModal").style.display = "none";
}

function openMiniGame(key) {
  const urls = {
    poem: "https://editor.p5js.org/ZFYpro/full/85Z_h0OIR",
    glitch: "https://your-glitch-game-url.com",
    language: "https://your-language-game-url.com"
  };
  document.getElementById("gameFrame").src = urls[key];
  document.getElementById("miniGameModal").style.display = "block";
}
function closeMiniGame() {
  document.getElementById("miniGameModal").style.display = "none";
  document.getElementById("gameFrame").src = "";
}

