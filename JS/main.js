const albumContainer = document.getElementById('album-container');

let idBtn = 1;
let number = 1;

for (i = 1; i <= 2 ; i++) {

    let albumRandomValue = [1, 2, 3, 4, 5, 6, 7, 8];
    albumRandomValue = albumRandomValue.sort(function() {return Math.random() - 0.5});
    
    for (let albumPosition = [0, 1, 2, 3, 4, 5, 6, 7], i = albumPosition.length; i--; ) {
        
        let valueRandomPosition = albumPosition.splice(Math.trunc(Math.random() * (i + 1)), 1)[0];

        albumContainer.innerHTML += `<button id="${idBtn++}" onmouseover='getAlbum(${number++})' value='${albumRandomValue[valueRandomPosition]}' class="album"><img class='album__img' src='IMG/album${albumRandomValue[valueRandomPosition]}.jpg'></button>`;
        
    }

}

let arreglo = []

function getAlbum(alb) {

    const albumBtn = document.getElementById(alb);
    const albumImg = document.getElementById(alb).firstChild;

    arreglo.push(albumBtn.value);
    //console.log(arreglo[0])

    albumBtn.addEventListener('mouseout', ()=> {
        console.log('saliste');
    })

    albumBtn.addEventListener('click', (e)=> {
        if (arreglo[0] == e.target.value) {
            albumBtn.disabled = true;
            albumImg.style.zIndex = '1';
            console.log('son iguales');
        } else {
            console.log('no son iguales');
        }
    })

}