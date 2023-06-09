const questionsItems = document.querySelectorAll('.questions__item');
const textWrappers = document.querySelectorAll('.questions__text-wrapper');
const questionsIcons = document.querySelectorAll('.questions__icon');
const sticks = document.querySelectorAll('.question__stick-one');

let heightWrapper = 0;

textWrappers.forEach((elem) => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

questionsItems.forEach((q,index) => {
    q.addEventListener('click', () => {
        for (let i = 0; i < textWrappers.length; i++){
            if(i === index) {
                textWrappers[i].classList.toggle('item_active');
                sticks[i].classList.toggle('question__stick-one--display-none');
                textWrappers[i].style.height = 
                    textWrappers[i].classList.contains('item_active') ?
                    `${heightWrapper}px` : '';
            } else {
                textWrappers[i].classList.remove('item_active');
                sticks[i].classList.remove('question__stick-one--display-none');
                textWrappers[i].style.height = "";
            }
        }
    })
})

// questionsItems.forEach((q,index) => {
//     q.addEventListener('click', () => {
//         const stick = q.querySelector('.questions__icon > path');
//         for (let i = 0; i < questionsItems.length; i++){
//             if(i === index) {}
//             if (textWrappers[index].classList.contains('item_active')){
//                 textWrappers[index].classList.toggle('item_active');
//                 stick.style.display = '';
//             } else {
//                 textWrappers[index].classList.toggle('item_active');
//                 stick.style.display = 'none';
//             }
//         }
//     })
// })