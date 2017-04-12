//This is where you are going to write your JS for 
//AJAX assignment.

function retrieveQuestion(input) {

    let parent = document.querySelector('main');
   
    let ctgry = document.querySelector('main h2');
    ctgry.textContent = input.category;

    let q = document.querySelector('.question');
    q.textContent = input.question;

 /*  let el = document.createElement('li');
    el.classList.add('question');

    let q = document.createElement('p');
    q.textContent = input.question;

   parent.appendChild(el);
    el.appendChild(q); */

};

window.addEventListener('load', function() {
    
    let request = new XMLHttpRequest();
    request.open('GET', 'http://jservice.io/api/random');

    request.addEventListener('load', function() {

    
    let response = JSON.parse(request.responseText);
    console.log(response);

    let input = {
        question: response[0].question,
        value: response[0].value,
        category: response[0].category.title,
    };
    
retrieveQuestion(input);

});

request.send();

});