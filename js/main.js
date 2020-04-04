(()=> {

let openButton = document.querySelectorAll(".Section"),
  lightbox = document.querySelector(".LightBox"),
  closeButton = document.querySelector(".close-button"),
  headText = document.querySelector(".LightBox h2"),
  paraText = document.querySelector(".Info");


const headData = [["Can Yucel Bal"],["Ashwin Kumar"]];

const data = [["As the designer of our team, I designed the wireframes for 3 different devices and high fidelity prototypes of our website.  As a result of great efforts, I developed Tetley's logo in Huggies font and design.  I designed beer bottles for our brand using Cinema 4D software. I completed the arrangements of this promotion in After Effects.  I found and edited pictures for the craft and advertising pages on our website.  I have designed 4 images that include a wide initial image and process for use on our homepage.  I prepared style guide and process presentations about our logo."],
["I am the coder of the team. I take care of html, css and js part of the project. After the designer od our team (Can) uploaded the designs of website and the pictures of beer bottles. I started to place thosee elements with Html and positioned with css. Then i had to do media queries to make them responsive. Then i started to do some pretty basic js (javascript)."]];

function showLightBox() {
	headText.textContent = `${headData[this.dataset.offset][0]}`;
	paraText.textContent = `${data[this.dataset.offset][0]}`;
	lightbox.classList.add("show-lightbox");
}
function hideLightBox() {
  lightbox.classList.remove("show-lightbox");
}
openButton.forEach(button => button.addEventListener("click", showLightBox));
closeButton.addEventListener("click", hideLightBox);
})();