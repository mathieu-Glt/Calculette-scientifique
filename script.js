//creer une liste et chaque "li" avec une couleur
/* 
const buttonBlue = document.querySelector(".button");
console.log(buttonBlue);
const buttonRed = document.querySelector(".button1");
console.log(buttonRed);
const buttonYellow = document.querySelector(".button2");
console.log(buttonYellow);
const buttonViolet = document.querySelector(".button3");
console.log(buttonViolet);

buttonViolet.addEventListener('click', function(ChangeColor3)
{
    console.log('hello Violet')
    let list = document.createElement("ul")
    list.classList.add('violet')
    console.log(list)
    let li = document.createElement("li")
    li.innerHTML = 'Bonjour Violet';
    list.appendChild(li)
    console.log(list)
    document.querySelector(".ul").appendChild(list)
})





buttonYellow.addEventListener('click', function(ChangeColor2)
{
    console.log('hello Red')
    let list = document.createElement("ul")
    list.classList.add('yellow')
    console.log(list)
    let li = document.createElement("li")
    li.innerHTML = 'Bonjour Yellow';
    list.appendChild(li)
    console.log(list)
    document.querySelector(".ul").appendChild(list)
})


buttonRed.addEventListener('click', function(ChangeColor1)
{
    console.log('hello Red')
    let list = document.createElement("ul")
    list.classList.add('red')
    console.log(list)
    let li = document.createElement("li")
    li.innerHTML = 'Bonjour Red';
    list.appendChild(li)
    console.log(list)
    document.querySelector(".ul").appendChild(list)
})


buttonBlue.addEventListener('click', function(ChangeColor)
{
    console.log('hello Blue')
    let list = document.createElement("ul")
    list.classList.add('blue');
    console.log(list)
    let li = document.createElement("li")
    li.innerHTML = 'Bonjour Blue';
    list.appendChild(li)
    console.log(list)
    document.querySelector(".ul").appendChild(list)
})
    //list.classList.remove("blue");
    //list.classList.add("red");

    const color = document.querySelector('.blue')
    console.log(color)

*/


//change la couleur du  fond de page

const buttonbgOrange = document.querySelector(".buttonOrange");
const buttonbgRed = document.querySelector(".buttonRed");
const buttonbgRed1 = document.querySelector(".buttonRed1");
const buttonbgBlue = document.querySelector(".buttonBlue");
const buttonbgBlue1 = document.querySelector(".buttonBlue1");
const buttonbgBlue2 = document.querySelector(".buttonBlue2");
const buttonbgBlue3 = document.querySelector(".buttonBlue3");
const buttonbgBlue4 = document.querySelector(".buttonBlue4");
const buttonbgYellow = document.querySelector(".buttonYellow");
const buttonbgYellow1 = document.querySelector(".buttonYellow1");
const buttonbgPurple = document.querySelector(".buttonPurple");
const buttonbgPink = document.querySelector(".buttonPink");
const buttonbgGreen = document.querySelector(".buttonGreen");
const buttonbgBrown = document.querySelector(".buttonBrown");
const buttonbgBrown1 = document.querySelector(".buttonBrown1");
const buttonbgBlack = document.querySelector(".buttonBlack");





//const select;
//console.log(select);
document.addEventListener('DOMContentLoaded', function(RandomChnageColor) {
  console.log('HTML prêt !');
  document.body.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
  //const ColorArray = new Array["#FF5E02","#FD1102","#FF003E","#02A9FD","#08FFD2","#0866FF","#1900B9","#00D1FF","#FDC802","#F7FF02","#AD02FD","#F64EC8","#25A608","#975537","#643518","black"];
  //const randomColor = ColorArray[Math.floor(Math.random() * months.length)];
  //console.log(randomColor);
});


// pour changer le fond en couleur orange
buttonbgOrange.addEventListener('click', function(ChangeColorBgO)
{
    console.log('hello background Orange')
    document.body.style.backgroundColor = '#FF5E02';
})

// pour changer le fond en couleur rouge
buttonbgRed.addEventListener('click', function(ChangeColorBgR)
{
    console.log('hello background Red')
    document.body.style.backgroundColor = '#FD1102';
})

// pour changer le fond en couleur rouge ton 1
buttonbgRed1.addEventListener('click', function(ChangeColorBgR1)
{
    console.log('hello background Red')
    document.body.style.backgroundColor = '#FF003E';
})


// pour changer le fond en couleur bleu
buttonbgBlue.addEventListener('click', function(ChangeColorBgB)
{
    console.log('hello background Blue')
    document.body.style.backgroundColor = '#02A9FD';
})

// pour changer le fond en couleur bleu ton 1
buttonbgBlue1.addEventListener('click', function(ChangeColorBgB1)
{
    console.log('hello background Blue')
    document.body.style.backgroundColor = '#08FFD2';
})

// pour changer le fond en couleur bleu ton 2
buttonbgBlue2.addEventListener('click', function(ChangeColorBgB2)
{
    console.log('hello background Blue')
    document.body.style.backgroundColor = '#0866FF';
})

// pour changer le fond en couleur bleu ton 3
buttonbgBlue3.addEventListener('click', function(ChangeColorBgB3)
{
    console.log('hello background Blue')
    document.body.style.backgroundColor = '#1900B9';
})

// pour changer le fond en couleur bleu ton 4
buttonbgBlue4.addEventListener('click', function(ChangeColorBgB4)
{
    console.log('hello background Blue')
    document.body.style.backgroundColor = '#00D1FF';
})

// pour changer le fond en couleur jaune
buttonbgYellow.addEventListener('click', function(ChangeColorBgY)
{
    console.log('hello background Yellow')
    document.body.style.backgroundColor = '#FDC802';
})

// pour changer le fond en couleur jaune ton 1
buttonbgYellow1.addEventListener('click', function(ChangeColorBgY1)
{
    console.log('hello background Yellow')
    document.body.style.backgroundColor = '#F7FF02';
})


// pour changer le fond en couleur violet
buttonbgPurple.addEventListener('click', function(ChangeColorBgP)
{
    console.log('hello background Purple')
    document.body.style.backgroundColor = '#AD02FD';
})

// pour changer le fond en couleur rose
buttonbgPink.addEventListener('click', function(ChangeColorBgPik)
{
    console.log('hello background Pink')
    document.body.style.backgroundColor = '#F64EC8';
})

// pour changer le fond en couleur vert
buttonbgGreen.addEventListener('click', function(ChangeColorBgG)
{
    console.log('hello background Green')
    document.body.style.backgroundColor = '#25A608';
})

// pour changer le fond en couleur marron
buttonbgBrown.addEventListener('click', function(ChangeColorBgBw)
{
    console.log('hello background Brown')
    document.body.style.backgroundColor = '#975537';
})

// pour changer le fond en couleur marron ton 1
buttonbgBrown1.addEventListener('click', function(ChangeColorBgBw1)
{
    console.log('hello background Brown')
    document.body.style.backgroundColor = '#643518';
})

// pour changer le fond en couleur noir
buttonbgBlack.addEventListener('click', function(ChangeColorBgBlk)
{
    console.log('hello background Brown')
    document.body.style.backgroundColor = 'black';
})



// creation d'un menu select pour choisir l'operateur de la table de multiplication

let select = document.querySelector('select');
console.log(select);

select.addEventListener('change', function(){
    
    //console.log('value => '+this.value);
    const selectValue = this.value
    if (selectValue == 'multiplication') {
        const inputValue = parseFloat(prompt("Saisissez un nombre!"))
        console.log(inputValue)
        const inputValue1 = parseFloat(prompt("Saisissez un autre nombre!"))
        console.log(inputValue1)

        if (!isNaN(inputValue) & !isNaN(inputValue1)) {
        const result = inputValue * inputValue1
        console.log(result)
        document.write(`Le résultat de la multiplication est : ${result}`)

        } else {
            console.log('Ces entrés ne sont pas des nombres!')
            document.write('Ces entrés ne sont pas des nombres!')
        }
    } 
    else if(selectValue == 'addition'){
        const inputValue = parseFloat(prompt("Saisissez un nombre!"))
        console.log(inputValue)
        const inputValue1 = parseFloat(prompt("Saisissez un autre nombre!"))
        console.log(inputValue1)

        if (!isNaN(inputValue) & !isNaN(inputValue1)) {
        const result = inputValue + inputValue1
        console.log(result)
        document.write(`Le résultat de l'addition est : ${result}`)

        } else {
            console.log('Ces entrés ne sont pas des nombres!')
            document.write('Ces entrés ne sont pas des nombres!')
        }
    } 
    else if (selectValue == 'soustraction') {
        const inputValue = parseFloat(prompt("Saisissez un nombre!"))
        console.log(inputValue)
        const inputValue1 = parseFloat(prompt("Saisissez un autre nombre!"))
        console.log(inputValue1)

        if (!isNaN(inputValue) & !isNaN(inputValue1)) {
        const result = inputValue - inputValue1
        console.log(result)
        document.write(`Le résultat de la soustraction est : ${result}<br>`)
        } else {
            console.log('Ces entrés ne sont pas des nombres!')
            document.write('Ces entrés ne sont pas des nombres!')

        }

    } 
    else if (selectValue == 'division') {
        const inputValue = parseFloat(prompt("Saisissez un nombre!"))
        console.log(inputValue)
        const inputValue1 = parseFloat(prompt("Saisissez un autre nombre!"))
        console.log(inputValue1)

        if (!isNaN(inputValue) & !isNaN(inputValue1) & inputValue1 !== 0) {
            const result = inputValue / inputValue1
            console.log(result)
            const result1 = inputValue % inputValue1
            console.log(result1)
            document.write(`Le résultat de la division est : ${result}<br>`)
            document.write(`Le reste de la division est : ${result1}`)

        } else {
            console.log('Ces entrés ne sont pas des nombres! Ou dans le cas d\'une division le dividende ne doit pas être égal à zéro!')
            document.write('Ces entrés ne sont pas des nombres! Ou dans le cas d\'une division le dividende ne doit pas être égal à zéro!')
        }
    } 
    else if (selectValue == 'racine_carre') {
        const inputValue = parseFloat(prompt("Saisissez un nombre!"))
        console.log(inputValue)
        if (!isNaN(inputValue) & inputValue > 0) {
        const result = Math.sqrt(inputValue)
        console.log(result)
        document.write(`La valeur carre de ce nombre est : ${result}`)

        } else {
            console.log('Ces entrés ne sont pas des nombres! Ou dans le cas d\'une racine carrée pas de nombre négaitf!')
            document.write('Ces entrés ne sont pas des nombres! Ou dans le cas d\'une racine carrée pas de nombre négaitf!')
        }
    } else if (selectValue == 'logarithme') {
        const inputValue = parseFloat(prompt("Saisissez un nombre!"))
        console.log(inputValue)

        if (!isNaN(inputValue) & !isNaN(inputValue1)) {
        const result = Math.log(inputValue)
        console.log(result)
        document.write(`La valeur logarithme de ce nombre est : ${result}`)
    } else {
        console.log('Ces entrés ne sont pas des nombres!')
        document.write('Ces entrés ne sont pas des nombres!')
    }

    } else if (selectValue == 'exponentielle') {
        const inputValue = parseFloat(prompt("Saisissez un nombre!"))
        console.log(inputValue)

        if (!isNaN(inputValue) & !isNaN(inputValue1)) {
        const result = Math.exp(inputValue)
        console.log(result)
        document.write(`La valeur exponentielle de ce nombre est : ${result}`)
    } else {
        console.log('Ces entrés ne sont pas des nombres!')
        document.write('Ces entrés ne sont pas des nombres!')
    }

    } else if (selectValue == 'puissance') {
        const inputValue = parseFloat(prompt("Saisissez un nombre!"))
        console.log(inputValue)
        const inputValue1 = parseFloat(prompt("Saisissez un exposant!"))
        console.log(inputValue1)

        if (!isNaN(inputValue) & !isNaN(inputValue1)) {
        const result = Math.pow(inputValue, inputValue1)
        console.log(result)
        document.write(`La valeur puissance de ce nombre est : ${result}`)

        } else {
            console.log('Ces entrés ne sont pas des nombres!')
            document.write('Ces entrés ne sont pas des nombres!')
        }

    }
    //console.log(selectValue)
})
/*
button.addEventListener('click', myfunction(){
    const inputValue = parseFloat(prompt("Saisissez un nombre!"));
    if (inputValue) {
        const inputValue = parseFloat("Saisissez un autre nombre!")
    } else {
        alert('Votre entree n\'est pas valide!')
    }
});
        console.log("Vous n'avez pas entré les bonnes valeurs!")
        phrase = `Vous n'avez pas entré les bonnes valeurs!`

/*
function myfunction(){
    const value = parseFloat(prompt("Saisis un nombre!"));
    if (!isNaN(value)) {
        let select = document.querySelector('select');
        select.addEventListener('change', function(){
        //console.log('value => '+this.value);
        const selectValue = this.value;
        console.log(selectValue);
} */

