const albumContainer = document.getElementById('album-container');
const albumItem = document.querySelector('.album')

for (a = 1; a <= 2 ; a++) {

    let album = [1, 2, 3, 4, 5, 6, 7, 8];
    album = album.sort(function() {return Math.random() - 0.5});

    for (let position = [0, 1, 2, 3, 4, 5, 6, 7], i = position.length; i--; ) {
        
        let valueRandom = position.splice(Math.trunc(Math.random() * (i + 1)), 1)[0];
        console.log(valueRandom);

        albumContainer.innerHTML += `<button class="album" value="${album[valueRandom]}"></div><img class="album__img" src="img/album${album[valueRandom]}.jpg"></button>`;

    }

}