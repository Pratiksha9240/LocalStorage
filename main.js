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

// const user = {
//     name : name1.value,
//     email : email.value
// }
// const li = document.createElement('li');
// for(i=0;i<localStorage.length;i++){
//     let u1 = JSON.parse(localStorage.getItem(localStorage.key(i)));
//     li.appendChild(document.createTextNode(u1.name +" " + u1.email));
//     users.appendChild(li);
// }


// const l = document.querySelectorAll('li');
// l.forEach((u) => {
//     // console.log(u.innerText);
// })

form.addEventListener('submit',onSubmit);
users.addEventListener('click',remove);

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
        
 
        // localStorage.setItem('Username',name1.value);
        // localStorage.setItem('Email',email.value);
        
        // storing user object
        // localStorage.setItem('Users',JSON.stringify(user));

        // storing multiple users
        localStorage.setItem(user.email,JSON.stringify(user));
        showOnScreen();
        name1.value = '';
        email.value = '';
    }
   
}
function remove(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        //console.log(li.textContent.split(' ')[1]);
        users.removeChild(li);
        localStorage.removeItem(li.textContent.split(' ')[1]);
    }
}

function showOnScreen(){
    //Adding users to li using localStorage
        var li = document.createElement('li');

        let u1 = JSON.parse(localStorage.getItem(localStorage.key(localStorage[localStorage.length-1])));
        li.appendChild(document.createTextNode(u1.name +" " + u1.email));

        users.appendChild(li);

        delBtn = document.createElement('button');
        delBtn.className = 'btn btn-danger btn-sm float-right delete';
        delBtn.id = 'del';
        delBtn.appendChild(document.createTextNode(' X'))

        li.appendChild(delBtn);
        users.appendChild(li);

}