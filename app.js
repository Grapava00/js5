//1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი ანუ რომ დავკლიკავ ღილაკზე გაქრეს

const accessBtn = document.querySelector('.btn');

function deleteBtn() {
    accessBtn.remove();
}

accessBtn.addEventListener('click', deleteBtn);

//2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ: https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg სურათის ლინკს 
//და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).

const imgElement = document.createElement('img');
imgElement.src = 'https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg';
imgElement.style.display = 'block';
imgElement.style.marginTop = '20px';

document.body.appendChild(imgElement);



