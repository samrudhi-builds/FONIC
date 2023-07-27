const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Animals<br>
        <div class="subtitle">Martin Garrix</div>`,
        poster: "img/1.png"
    },
    {
        id: 2,
        songName: `Bella Ciao<br>
        <div class="subtitle">Bella Ciao</div>`,
        poster: "img/2.png"
    },
    {
        id: 3,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/3.png"
    },
    {
        id: 4,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/4.png"
    },
    {
        id: 5,
        songName: `Goosebumps<br>
        <div class="subtitle">HVME</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/6.jpeg"
    },
    {
        id: 7,
        songName: `In My Mind<br>
        <div class="subtitle">Dynoro & Gigi D'agostino</div>`,
        poster: "img/7.jpeg"
    },
    {
        id: 8,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
]
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];
pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})