const albumContainer = document.getElementById('album-container');

let id = 1;

for (i = 1; i <= 2 ; i++) {

    let albumRandomValue = [1, 2, 3, 4, 5, 6, 7, 8];
    albumRandomValue = albumRandomValue.sort(function() {return Math.random() - 0.5});
    
    for (let albumPosition = [0, 1, 2, 3, 4, 5, 6, 7], i = albumPosition.length; i--; ) {
        
        let valuePositionRandom = albumPosition.splice(Math.trunc(Math.random() * (i + 1)), 1)[0];
        console.log('album random: ' + albumRandomValue[valuePositionRandom]);
        
        albumContainer.innerHTML += `<img class='album__img' id='${id++}' src='IMG/album${albumRandomValue[valuePositionRandom]}.jpg'>`;
        
    }
    
}