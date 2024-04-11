const q = document.querySelectorAll(".question");
const a = document.querySelectorAll(".answer");

for (let i = 0; i < q.length; i++){
    q[i].addEventListener('click',() =>{
        a[i].classList.toggle('answer-opened');
        q[i].classList.toggle('question-blue');
    });
}
