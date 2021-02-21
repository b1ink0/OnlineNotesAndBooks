const booksBtn = document.querySelector('.cardBooks')
const card = document.querySelector('.card')
const books = document.querySelector('.books')
function book(){
    //  card.classList.add('fadeOut');
    card.classList.add('cardRemove');
   books.classList.remove('booksRemove');
    // books.classList.remove('fadeOut');
}
function home(){
    books.classList.add('booksRemove')
    // books.classList.add('fadeOut')
    //  card.classList.remove('fadeOut')
   card.classList.remove('cardRemove')
}