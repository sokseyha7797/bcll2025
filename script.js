const question = document.querySelector(".question");
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "I love you too babe😽";
    gif .src="https://i.pinimg.com/originals/72/52/41/72524114ea3c0848badb88015d6ffeea.gif";
})

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.floor() * maxY)

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})