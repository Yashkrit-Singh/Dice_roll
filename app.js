const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const dice = document.querySelector('.dice');
const r = Math.floor(Math.random() * 360); 
const g = Math.floor(Math.random() * 360); 
const b = Math.floor(Math.random() * 360); 
dice.style.transform = `rotateY(${r}deg) rotateX(${g}deg) rotateZ(${b}deg)`;

button.addEventListener('click',() => {
    dice.style.transform='';
    let delay = Math.floor(Math.random() * 3000) + 1000
    let random_side =  Math.floor(Math.random() * 6) + 1;
    console.log(random_side);
    dice.classList.add('dices');
    setTimeout(() =>  {
        dice.classList.remove('dicef', 'dicer', 'diced', 'diceu', 'dicel', 'diceb');
        dice.classList.remove('dices');
            
        switch(random_side){
            case 6:
                dice.classList.add('dicef');
                break;
            case 4:
                dice.classList.add('dicer');
                break;
            case 2:
                dice.classList.add('diced');
                break;
            case 5:
                dice.classList.add('diceu');
                break;
            case 3:
                dice.classList.add('dicel');
                break;
            case 1:
                dice.classList.add('diceb');
                break;
        }
        h1.innerText = `You got ${random_side}`;
    },delay);
})