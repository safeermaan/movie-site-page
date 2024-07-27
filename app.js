const arrows = document.querySelectorAll('.arrow');
const movieList = document.querySelectorAll('.movie-list');



arrows.forEach((arrow, i) => {
    const itemLength = movieList[i].querySelectorAll('img').length;
    let clickCounter = 0;
    arrow.addEventListener('click', () => {
        clickCounter++;
        if (itemLength - (4 + clickCounter) >= 0) {
            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get('transform')[0].x.value - 300}px)`; 
        } else {
            movieList[i].style.transform = 'translateX(0)';
            clickCounter = 0;
        }
        
    });
});


//Toggle//

const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container, .movie-list-title, .nav-container, .sidebar, .sidebar-icons, .toggle'); 


ball.addEventListener('click', ()=> {
    items.forEach(item => {
        item.classList.toggle('active')
    })
    ball.classList.toggle('active');
})