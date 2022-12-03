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
    const user = {
        name : name1.value,
        email : email.value
    }
    if(name1.value === '' || email.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all the fields';
    }
    else{
        const li = document.createElement('li');
        
        // localStorage.setItem('Username',name1.value);
        // localStorage.setItem('Email',email.value);
        
        // storing user object
        // localStorage.setItem('Users',JSON.stringify(user));

        // storing multiple users
        localStorage.setItem(user.email,JSON.stringify(user));


//Adding users to li using localStorage
        let u1 = JSON.parse(localStorage.getItem(localStorage.key(localStorage[localStorage.length-1])));
        li.appendChild(document.createTextNode(u1.name +" " + u1.email));
        
        users.appendChild(li);
        const l = document.querySelectorAll('li');
        l.forEach((u) => {
            console.log(u.innerText);
        })

        name1.value = '';
        email.value = '';
    }
    
}
