document.write('<div> Add some new </div>');
document.write('<br>');
document.write(`<div> Add some new </div>`);


let куди = 'Одеса';
let wagon = [];

khmelnitsky();
vinitsa();

if (куди == 'Одеса') odesa()
else kiev()


// ------------------------- fUNCTIONS: 

function khmelnitsky() {
    // Station Khmelnitsky
    alert('Khmelnitsky');
    console.log('Khmelnitsky');
    wagon.push({
        name: 'Ivan',
        age: 21
    })
}

function vinitsa() {
    // Station Vinitsa
    alert('Vinitsa');
    console.log('Vinitsa');
    wagon.push({
        name: 'Inna',
        age: 18
    })
}

function odesa () {
    alert('Odesa');
    console.log('Одеса');
    console.log(' Купити пиріжків ');
    console.log(' In wagon: ', wagon);
}

function kiev () {
    alert('Kiev')
    console.log('1');
    console.log('2');
}
