const albumContainer = document.getElementById('album-container');

let idBtn = 1;
let number = 1;

for (i = 1; i <= 2; i++) {

    let albumRandomValue = [1, 2, 3, 4, 5, 6, 7, 8];
    albumRandomValue = albumRandomValue.sort(function() {return Math.random() - 0.5});
    
    for (let albumPosition = [0, 1, 2, 3, 4, 5, 6, 7], i = albumPosition.length; i--; ) {
        
        let valueRandomPosition = albumPosition.splice(Math.trunc(Math.random() * (i + 1)), 1)[0];

        albumContainer.innerHTML += `<button id="${idBtn++}" onmouseover='getAlbum(${number++})' value='${albumRandomValue[valueRandomPosition]}' class="album"><img class='album__img' src='IMG/album${albumRandomValue[valueRandomPosition]}.jpg'></button>`;
        
    }

}

let btnValue = [];
let idAlbum = [];

function getAlbum(alb) {

    const albumBtn = document.getElementById(alb);
    const albumImg = document.getElementById(alb).firstChild;

    albumBtn.addEventListener('click', (e)=> {

        albumBtn.disabled = true;
        albumImg.style.zIndex = '1';

        btnValue.push(albumBtn.value);
        btnValue.splice(1);
        idAlbum.push(albumBtn.id);

        if (btnValue[0] == e.target.value) {

            btnValue.push(albumBtn.value);
            console.log('son iguales');

        } else {
            
            let firstAlbumBtn = document.getElementById(idAlbum[0]);
            let secondAlbumBtn = document.getElementById(idAlbum.at(-1));
            let firstAlbumImg = document.getElementById(idAlbum[0]).firstChild;
            let secondAlbumImg = document.getElementById(idAlbum.at(-1)).firstChild;

            const hiddenImage = ()=> {
                setTimeout( ()=> {
                    firstAlbumImg.style.zIndex = '-1';
                    secondAlbumImg.style.zIndex = '-1';
                    firstAlbumBtn.disabled = false
                    secondAlbumBtn.disabled = false

                }, 1000);
            }
            hiddenImage();
            console.log('no son iguales');
            
        }

    })

}