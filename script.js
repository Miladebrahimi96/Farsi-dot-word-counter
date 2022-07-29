const textBox = document.querySelector('#text');
const charCounter = document.querySelector('.char-counter');
const dotCounter = document.querySelector('.dot-counter');

const oneDot = ["ب","ج","خ","ذ","ز","ض","ظ","غ","ن"];
const twoDot = ["ت","ق"];
const threeDot = ["پ","ث","چ","ژ","ش"];
const exeption = ["ی"];

let dot = 0;
let wordCount = 0;

text.addEventListener('keyup', e => {
    e.preventDefault();
    dot = 0;
    wordCount = 0;

    wordCounter(textBox.value);
    charCounter.innerText = `تعداد کلمات: ${wordCount}`;

    counter(textBox.value);
    dotCounter.innerText = `تعداد نقطه: ${dot}`;
}
)

function counter (text) {

    let textArray = text.split('');
    
    for(let i = 0; i <textArray.length; i++) {
        const letter = textArray[i];
        if(oneDot.includes(letter)){
            dot++;
        };
        if(twoDot.includes(letter)){
            dot+= 2;
        }
        if(threeDot.includes(letter)){
            dot+= 3;
        }

        if(exeption.includes(letter) && i !== textArray.length-1){
            if(textArray[i+1] !== " "){
                dot += 2;
            }
        }
    }
}    

function wordCounter(text) {
    const words = text.split(" ");
    wordCount = words.length - 1;
}
