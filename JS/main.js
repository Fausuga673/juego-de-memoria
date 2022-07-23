const albumContainer = document.getElementById('album-container');

let idBtn = 1;
let number = 1;

for (i = 1; i <= 2; i++) {

    let albumRandomValue = [1, 2, 3, 4, 5, 6, 7, 8];
    albumRandomValue = albumRandomValue.sort(function() {return Math.random() - 0.5});
    
    for (let albumPosition = [0, 1, 2, 3, 4, 5, 6, 7], i = albumPosition.length; i--; ) {
        
        let valueRandomPosition = albumPosition.splice(Math.trunc(Math.random() * (i + 1)), 1)[0];

        albumContainer.innerHTML += `<button id="${idBtn++}" onclick='getAlbum(${number++})' value='${albumRandomValue[valueRandomPosition]}' class="album"><img class='album__img' src='IMG/album${albumRandomValue[valueRandomPosition]}.jpg'></button>`;
        
    }

}

let btnValue = [];
let idAlbum = [];

function getAlbum(alb) {

    const albumBtn = document.getElementById(alb);
    const albumImg = document.getElementById(alb).firstChild;

    albumImg.style.zIndex = '1';
    albumBtn.disabled = true;

    btnValue.push(albumBtn.value);
    idAlbum.push(albumBtn.id);

    const firstAlbumBtn = document.getElementById(idAlbum[0]);
    const secondAlbumBtn = document.getElementById(idAlbum.at(-1));
    const firstAlbumImg = document.getElementById(idAlbum[0]).firstChild;
    const secondAlbumImg = document.getElementById(idAlbum.at(-1)).firstChild;

    if (btnValue.length == 2) {

        if (btnValue.at(-2) == btnValue.at(-1)) {

            btnValue.splice(0);
            idAlbum.splice(0);
            
        } else {
            
            btnValue.splice(0);
            idAlbum.splice(0);

            firstAlbumBtn.disabled = false;
            secondAlbumBtn.disabled = false;

            const hiddenImage = ()=> {
                setTimeout( ()=> {
        
                    firstAlbumImg.style.zIndex = '-1';
                    secondAlbumImg.style.zIndex = '-1';
        
                }, 1000);
            }
            hiddenImage();
        }

    }

}