let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let btn = document.querySelector('.new-quote');

const quotes = [
    {
       quote: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Deserunt ipsa ex ab animi? Dolor, cum. Ratione vero at provident sint quidem"`,
       person: `Jesse Grace`
    }, 
    {
        quote: `"Lorem ipsum dolor, 
        sit amet consectetur adipisicing elit. Velit, nam?Deserunt ipsa ex ab animi? Dolor, cum."`,
        person: `Eugene Brown`
    },
    {
        quote: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Deserunt ipsa ex ab animi? Dolor, cum."`,
        person: `Ruth Kahtrine`
    },
    {
        quote: `" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ratione vero at provident sint quidem nostrum nihil animi 
        consequatur iure delectus?"`,
        person: `ODK Selorm`
    },
    {
        quote: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Deserunt ipsa ex ab animi? Dolor, cum.Lorem ipsum dolor sit"`,
        person: `Precious Hesed`
    },
    {
        quote: `"Lorem ipsum dolor, 
        sit amet consectetur adipisicing elit. Velit, nam?Lorem ipsum"`,
        person: `Angei Rose`
    }
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});z