const random = prompt('❗️🙏🏻Будь ласка введіть число від 55 до 99 включно🙏🏻❗️');
if (random >= 55 && random <= 99) {
    alert ('✅Число потрапляє в діапазон✅');
} else{
    alert ('❌Число не потрапляє в діапазон❌')
}


const age = 'Якщо Максиму 55 років, то він дорослий';
console.log(age);


const firstname = 'Veronika';
const secondname = 'Potyomko';
if(firstname.length > 4 && secondname.length > 5 ) {
    alert (firstname.length + secondname.length);
} else{
    alert ('Упс') 
}


const number = Math.random() * (5 - 1) + 1;
const randomnumber = parseInt(number);
if (randomnumber === 1) {
    console.log('Це число 1');
}else if (randomnumber === 2){
    console.log('Це число 2');
}else if (randomnumber === 3){
    console.log('Це число 3');
}else if (randomnumber === 4){
    console.log('Це число 4');
}else{
    console.log('Це число 5');
}


const lang = prompt ('Оберіть мову');
switch (lang) {
    case 'ua':
        console.log('Серпень');
        break;
    case 'en':
        console.log('August');
        break;
    case 'ru':
        console.log('❗️😡🤬Вийди звідси❗️😡🤬');
        break;
    case 'fr':
        console.log('Août');
        break;
    default: console.log(lang);
        break;
}