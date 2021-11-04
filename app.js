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

//3. html შექმენით <div id="user-list"></div> გამოიყენეთ მიმაგრებული სურათი (hiok.png) დიზაინის ასაწყობად, 
//არქივში ( lecture17.zip ) => app.js ში ნახეთ users  მასივი რომელიც შედგება 4 ობიექტისგან
//ეს მასივი გამოიყენეთ და html ში გამოიტანეთ(ჯავასკრიპტით) 4 user card როგორც დიზანშია ნაჩვენები, თვითვეული
//ქარდი უნდა შეიცავდეს შემდეგ ინგფირმაციას users მასივის ელემენტებიდან(ობიექტებიდან): 
//1. ავატარი ჩასვით სურათის ადგილას. 2. "John Doe" ს ადგილას ჩასვით first_name და last_name.

const users = [
    {
        avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
        first_name: "John",
        last_name: "Doe",
        email: "John.Doe@gmail.com",
    },
    {
        avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
        first_name: "John",
        last_name: "Doe",
        email: "John.Doe@gmail.com",
    },
    {
        avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
        first_name: "John",
        last_name: "Doe",
        email: "John.Doe@gmail.com",
    },
    {
        avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
        first_name: "John",
        last_name: "Doe",
        email: "John.Doe@gmail.com",
    },
];

function renderUser() {
    const userTableContainer = document.querySelector("#user-list");
    const userTableBody = userTableContainer.querySelector("tbody");

    const userItems = users.map(user => {
        return `<tr> 
                <td><img alt='${user}' src='${user.avatar}'/></td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td><button class='user_remove' type='button'>remove</button></td>
                <td><button class='user_info' type='button'>info</button></td>
            </tr>`;
    });

    userTableBody.innerHTML = userItems.join("");
}

renderUser();






