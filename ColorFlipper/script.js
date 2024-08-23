//hex char array
let hex =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

//getting the wrapper
let wrapper = document.querySelector('#wrapper');

//getting button
let btn = document.querySelector('button');

//creating new element
let displayCol = document.createElement("h2");
//setting id 
displayCol.id = "result";
displayCol.innerHTML = '#FFFFFF'

//getting heading element and appending the newly created elements as its child.
let heading = document.querySelector('#heading');
heading.appendChild(displayCol);

//adding eventlistener to button
btn.addEventListener('click',function(){
    let color='#';
    for(let i=0;i<6;i++){
        color+=randomHexGen();
    }
    wrapper.style.backgroundColor = color;
    displayCol.innerHTML = color;
});

//helper method to fetch char from hex array randomly
function randomHexGen(){
    return hex[Math.floor(Math.random()*16)];
}