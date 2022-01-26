'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const imgs = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          backGr = document.querySelector('.promo__bg'),
          films = document.querySelector('.promo__interactive-list');
    
    
    const deleteAdv = (arr) => {
        arr.forEach( item => {
            item.remove();
        });
    };

    const makeChanges = () =>{
        deleteAdv(imgs);
        genre.textContent = 'Драма';
    };
    
    makeChanges();

    backGr.style.cssText = "background: url('img/bg.jpg')";
    
    const addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let nameF,
            nameFilm = addInput.value;
        if(addInput.value.length != 0){
            if(addInput.value.length > 21){
                nameF = addInput.value.slice(0,21);
                nameFilm = nameF + '...';
            }
    
            movieDB.movies.push(nameFilm);
    
            createMovieList(movieDB.movies, films);
    
            if(checkbox.checked == true){
                console.log('Добавляем любимый фильм');
            }
    
            e.target.reset();
        }
    });

    function arrSort(arr) {
        arr.sort();
    }

    function createMovieList (films, parent) {
        parent.innerHTML = '';
        arrSort(films);
    
        films.forEach( (film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });

        
    }

    createMovieList(movieDB.movies, films);
});


