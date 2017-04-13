//This is where you are going to write your JS for 
//AJAX assignment.

function retrieveQuestion(input) {

    let parent = document.querySelector('main');
   
    let ctgry = document.querySelector('#category');
    ctgry.textContent = input.category;

    let ptvalue = document.querySelector('#points');
    ptvalue.textContent = 'For ' + input.value;

    let q = document.querySelector('.question');
    q.textContent = input.question;

};

window.addEventListener('load', function() {
    
    let request = new XMLHttpRequest();
    request.open('GET', 'http://jservice.io/api/random');
        

    request.addEventListener('load', function() {

    
    let response = JSON.parse(request.responseText);
   
    console.log(request.responseText);
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