const songs = [
    {tittle: "Pluto", artist: "Rushjet1", src: "music/music_1.mp3", cover: "img/album_1.jpg"},
    {tittle: "Angelfire", artist: "Lemon Demon", src: "music/music_2.mp3", cover: "img/album_2.jpg"},
    {tittle: "Kaleidoskull", artist: "Lemon Demon", src: "music/music_3.mp3", cover: "img/album_3.jpg"},
    {tittle: "Daughter of Hallownest", artist: "Christopher Larkin", src: "music/music_4.mp3", cover: "img/album_4.jpg"},
    {tittle: "End of time", artist: "Rushjet1", src: "music/music_5.mp3", cover: "img/album_5.jpg"}
]

let currentSongindex = 0

let isPlaying = false

let audio

function playCurrentSong() {
    if (audio) {
        audio.stop()
    }

    audio = new Howl({
        src: [songs[currentSongindex].src],
        autoplay: isPlaying,
        volume: volumeSlider.value,
        onend: function() {
            playNextSong()
        }
    })

    updateSongInfo()
}

const playButton = document.getElementById("play")
const pauseButton = document.getElementById("pause")
const nextButton = document.getElementById("next")
const prevButton = document.getElementById("prev")
const volumeSlider = document.getElementById("volume")
const songTitle = document.getElementById("songTitle")
const songArtist = document.getElementById("songArtist")
const albumCover = document.querySelector(".card-img-top")

playButton.addEventListener("click", () => {
    isPlaying = true
    playCurrentSong()
})

pauseButton.addEventListener("click", () => {
    isPlaying = false
    audio.pause()
})

nextButton.addEventListener("click", () => {
    playNextSong()
})

prevButton.addEventListener("click", () => {
    if (audio.seek() > 5) {
        audio.seek(0)
    } else {
        currentSongindex = (currentSongindex - 1 + songs.length) % songs.length
        playCurrentSong()
    }
})

volumeSlider.addEventListener("input", () => {
    audio.volume(volumeSlider.value)
})

function updateSongInfo() {
    songTitle.textContent = songs[currentSongindex].tittle
    songArtist.textContent = songs[currentSongindex].artist
    albumCover.src = songs[currentSongindex].cover
}

function playNextSong() {
    currentSongindex = (currentSongindex + 1) % songs.length
    playCurrentSong()
}

playCurrentSong()