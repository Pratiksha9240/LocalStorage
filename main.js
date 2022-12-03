// const list = document.querySelectorAll('.item');
// list.forEach((l) => {console.log(l)});

// list[0].innerText = 'HELLO'
// list[1].innerHTML = '<h1>World</h1>'

// list[0].style.color = 'green';
// list[1].style.color = 'yellow';

const btn = document.querySelector('.btn');

// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     console.log('Submitted');
// })

// btn.addEventListener('mouseover',(e) => {
//     e.preventDefault();
//     document.querySelector('body').style.color = 'grey';
// })


// btn.addEventListener('mouseout',(e) => {
//     e.preventDefault();
//     document.querySelector('body').style.color = 'black';
// })

const name1 = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');
const form = document.querySelector('#my-form');

form.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(name1.value === '' || email.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all the fields';
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name1.value} : ${email.value}`));
        users.appendChild(li);
        const l = document.querySelectorAll('li');
        l.forEach((u) => {
            console.log(u.innerText);
        })
        name1.value = '';
        email.value = '';
    }
}
