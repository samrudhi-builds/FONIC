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
    {
        id: 9,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 10,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 11,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 12,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 13,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 14,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 15,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 16,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 17,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 18,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 19,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 20,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 21,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 22,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 23,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
    {
        id: 24,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/8.jpeg"
    },
]
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
// document.addEventListener('DOMContentLoaded', function() {
//     Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
//         e.getElementsByTagName('img')[0].src = songs[i].poster;
//     });
// });

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', () => {
        index = e.target.id;
        //console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });
    })
});

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];
pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
});
