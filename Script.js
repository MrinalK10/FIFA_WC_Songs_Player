console.log("Welcome to Music Player");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let myprogessbar = document.getElementById('myprogessbar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Knaan - Wavin Flag", filePath: "songs/1.mp3", coverpath: "Covers/1.jpg" },
    { songName: "PitBull - We Are One", filePath: "songs/2.mp3", coverpath: "Covers/2.jpg" },
    { songName: "Shakira - Waka Waka", filePath: "songs/3.mp3", coverpath: "Covers/3.jpg" },
    { songName: "Ahmed Chauki - Magic in the air", filePath: "songs/4.mp3", coverpath: "Covers/4.jpg" },
    { songName: "Shakira- La La La", filePath: "songs/5.mp3", coverpath: "Covers/5.jpg" },
    { songName: "Jungkook - Dreamers", filePath: "songs/6.mp3", coverpath: "Covers/6.jpg" },
    { songName: "Nicky Jam - Live It Up", filePath: "songs/7.mp3", coverpath: "Covers/7.jpg" },
    { songName: "Rahma Riad, Manal - Light the sky ", filePath: "songs/8.mp3", coverpath: "Covers/8.jpg" },
    { songName: "Vegedream – Ramenez La Coupe à La Maison", filePath: "songs/9.mp3", coverpath: "Covers/9.jpg" },
    { songName: "Queen - We Are The Champions", filePath: "songs/10.mp3", coverpath: "Covers/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})


masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();

        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }

    else {
        audioElement.pause();

        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogessbar.value = progress;
}
)

myprogessbar.addEventListener('change', () => {

    audioElement.currentTime = (myprogessbar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {

    element.addEventListener('click', (e) => {
        makeAllPlays();

        songIndex = parseInt(e.target.id);

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerText=songs[songIndex-1].songName;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;


    })


})

document.getElementById('next').addEventListener('click', () => {

    if (songIndex >= 10) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex-1].songName;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex-1].songName;

    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

})



