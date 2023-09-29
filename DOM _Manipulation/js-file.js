const container = document.querySelector('#container');

let content = document.createElement('p');
content.style.color = 'red';
content.classList.add('content1');
content.textContent = "Hey I'm red!";
container.appendChild(content);

content = document.createElement('h3');
content.style.color = 'blue';
content.classList.add('content');
content.textContent = "I'm a blue h3!";
container.appendChild(content);


content = document.createElement('h1');
content.setAttribute('style', 'color: blue; background: pink;border-style: solid; border-color: black;'); 
content.classList.add('div');
content.textContent = "I’m in a div";
container.appendChild(content);

content = document.createElement('p');
content.style.color = 'blue';
content.classList.add('div');
content.textContent = "ME TOO!";
container.appendChild(content);