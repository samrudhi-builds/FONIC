// Create audio object (will handle missing files gracefully)
const music = new Audio('audio/1.mp3');

// Simple state tracking for visual mode
let isCurrentlyPlaying = false;

// Visual simulation variables
let currentTime = 0;
let totalDuration = 180; // 3 minutes default duration
let playbackInterval;
let playbackSpeed = 1000; // Update every 1 second

const songs = [
    {
        id: 1,
        songName: `Animals<br>
        <div class="subtitle">Martin Garrix</div>`,
        poster: "img/Music/1.png"
    },
    {
        id: 2,
        songName: `Bella Ciao<br>
        <div class="subtitle">Bella Ciao</div>`,
        poster: "img/Music/2.png"
    },
    {
        id: 3,
        songName: `On My Way<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Music/3.png"
    },
    {
        id: 4,
        songName: `On My Way<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Music/4.png"
    },
    {
        id: 5,
        songName: `Goosebumps<br>
        <div class="subtitle">HVME</div>`,
        poster: "img/Music/5.jpg"
    },
    {
        id: 6,
        songName: `On My Way<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Music/6.jpeg"
    },
    {
        id: 7,
        songName: `In My Mind<br>
        <div class="subtitle">Dynoro & Gigi D'agostino</div>`,
        poster: "img/Music/7.jpeg"
    },
    {
        id: 8,
        songName: `Light it up<br>
        <div class="subtitle">Taylor Swift</div> `,
        poster: "img/Music/8.jpeg"
    },
    {
        id: 9,
        songName: `Light it up<br>
        <div class="subtitle">Taylor Swift</div> `,
        poster: "img/Music/9.jpg"
    },
    {
        id: 10,
        songName: `Light it up<br>
        <div class="subtitle">Taylor Swift</div> `,
        poster: "img/Music/10.png"
    },
    {
        id: 11,
        songName: `Light it up<br>
        <div class="subtitle">Taylor Swift</div> `,
        poster: "img/Music/11.png"
    },
    {
        id: 12,
        songName: `Light it up<br>
        <div class="subtitle">Taylor Swift</div> `,
        poster: "img/Music/1.png"
    },
    {
        id: 13,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/Music/1.png"
    },
    {
        id: 14,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/Music/2.png"
    },
    {
        id: 15,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/Music/3.png"
    },
    {
        id: 16,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/Music/4.png"
    },
    {
        id: 17,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/Music/5.jpg"
    },
    {
        id: 18,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/Music/6.jpeg"
    },
    {
        id: 19,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/Music/7.jpeg"
    },
    {
        id: 20,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/Music/8.jpeg"
    },
    {
        id: 21,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/Music/9.jpg"
    },
    {
        id: 22,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/Music/10.png"
    },
    {
        id: 23,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/Music/11.png"
    },
    {
        id: 24,
        songName: `Light it up<br>
        <div class="subtitle">Robin Hustin x TobiMorrow</div> `,
        poster: "img/Music/1.png"
    },
];

// Initialize song items with poster and song name when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeSongItems();
    initializeEventListeners();
});

// Initialize song items with poster and song name
function initializeSongItems() {
    Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
        if (songs[i]) {
            const img = e.getElementsByTagName('img')[0];
            const h5 = e.getElementsByTagName('h5')[0];
            if (img) img.src = songs[i].poster;
            if (h5) h5.innerHTML = songs[i].songName;
        }
    });
}

// Initialize all event listeners
function initializeEventListeners() {
    // Get DOM elements
    let masterPlay = document.getElementById('masterPlay');
    let wave = document.getElementById('wave');
    let mainPlayBtn = document.getElementById('mainPlayBtn');

    // Debug: Check if elements are found
    console.log('DOM Elements found:', { masterPlay, wave, mainPlayBtn });

    // Master play button click event
    if (masterPlay) {
        masterPlay.addEventListener('click', () => {
            console.log('Master play button clicked, currently playing:', isCurrentlyPlaying);
            if (!isCurrentlyPlaying) {
                startMusic();
            } else {
                pauseMusic();
            }
        });
    }

    // Main PLAY button functionality (from hero section)
    if (mainPlayBtn) {
        mainPlayBtn.addEventListener('click', () => {
            console.log('Main play button clicked, currently playing:', isCurrentlyPlaying);
            if (!isCurrentlyPlaying) {
                startMusic();
            } else {
                pauseMusic();
            }
        });
    }

    // Initialize scroll functionality
    initializeScrollFunctionality();
    
    // Initialize playlist functionality
    initializePlaylistFunctionality();
    
    // Initialize follow button
    initializeFollowButton();
    
    // Initialize slider accessibility
    initializeSliderAccessibility();
    
    // Initialize visual player
    initializePlayer();
}

// Function to start playing music and update UI
function startMusic() {
    isCurrentlyPlaying = true;
    updatePlayUI();
    startVisualPlayback();
}

// Function to pause music and update UI
function pauseMusic() {
    isCurrentlyPlaying = false;
    updatePauseUI();
    stopVisualPlayback();
}

// Visual playback simulation
function startVisualPlayback() {
    if (playbackInterval) clearInterval(playbackInterval);
    
    playbackInterval = setInterval(() => {
        if (isCurrentlyPlaying && currentTime < totalDuration) {
            currentTime += 1;
            updateProgressBar();
            updateTimeDisplays();
        } else if (currentTime >= totalDuration) {
            // Song ended
            currentTime = 0;
            pauseMusic();
            updateProgressBar();
            updateTimeDisplays();
        }
    }, playbackSpeed);
}

function stopVisualPlayback() {
    if (playbackInterval) {
        clearInterval(playbackInterval);
        playbackInterval = null;
    }
}

// Update UI for play state
function updatePlayUI() {
    let wave = document.getElementById('wave');
    let masterPlay = document.getElementById('masterPlay');
    let mainPlayBtn = document.getElementById('mainPlayBtn');
    
    if (wave) wave.classList.add('active1');
    if (masterPlay) {
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    if (mainPlayBtn) mainPlayBtn.textContent = 'PAUSE';
    console.log('UI updated to PLAY state');
}

// Update UI for pause state  
function updatePauseUI() {
    let wave = document.getElementById('wave');
    let masterPlay = document.getElementById('masterPlay');
    let mainPlayBtn = document.getElementById('mainPlayBtn');
    
    if (wave) wave.classList.remove('active1');
    if (masterPlay) {
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
    if (mainPlayBtn) mainPlayBtn.textContent = 'PLAY';
    console.log('UI updated to PAUSE state');
}

// Initialize scroll functionality for popular sections
function initializeScrollFunctionality() {
    // Popular songs scroll functionality
    let pop_song_left = document.getElementById('pop_song_left');
    let pop_song_right = document.getElementById('pop_song_right');
    let pop_song = document.getElementsByClassName('pop_song')[0];

    console.log('Popular songs elements:', { pop_song_left, pop_song_right, pop_song });

    if (pop_song_right && pop_song) {
        pop_song_right.addEventListener('click', () => {
            console.log('Popular songs right button clicked, scrolling...');
            pop_song.scrollLeft += 220;
        });
    }

    if (pop_song_left && pop_song) {
        pop_song_left.addEventListener('click', () => {
            console.log('Popular songs left button clicked, scrolling...');
            pop_song.scrollLeft -= 220;
        });
    }

    // Popular artists scroll functionality
    let pop_art_left = document.getElementById('pop_art_left');
    let pop_art_right = document.getElementById('pop_art_right');
    let item = document.getElementsByClassName('item')[0];

    console.log('Popular artists elements:', { pop_art_left, pop_art_right, item });

    if (pop_art_right && item) {
        pop_art_right.addEventListener('click', () => {
            console.log('Popular artists right button clicked, scrolling...');
            item.scrollLeft += 200;
        });
    }

    if (pop_art_left && item) {
        pop_art_left.addEventListener('click', () => {
            console.log('Popular artists left button clicked, scrolling...');
            item.scrollLeft -= 200;
        });
    }
}

// Initialize playlist functionality
function initializePlaylistFunctionality() {
    let index = 0;
    let poster_master_play = document.getElementById('poster_master_play');
    let title = document.getElementById('title');
    
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
        e.addEventListener('click', () => {
            index = e.target.id;
            
            // Reset playback for new song
            pauseMusic();
            currentTime = 0;
            totalDuration = Math.floor(Math.random() * 180) + 120; // Random 2-5 minutes
            updateProgressBar();
            updateTimeDisplays();
            
            // Update poster in master play section
            if (poster_master_play) {
                poster_master_play.src = `img/Music/${index}.jpg`;
            }
            
            // Start the new song
            startMusic();

            // Update title in master play section
            let songTitles = songs.filter((els) => {
                return els.id == index;
            });

            songTitles.forEach(elss => {
                let { songName } = elss;
                if (title) title.innerHTML = songName;
            });
        });
    });
}

// Initialize follow button functionality
function initializeFollowButton() {
    let followBtn = document.getElementById('followBtn');
    let isFollowing = false;

    if (followBtn) {
        followBtn.addEventListener('click', () => {
            if (isFollowing) {
                followBtn.textContent = 'FOLLOW';
                isFollowing = false;
            } else {
                followBtn.textContent = 'FOLLOWING';
                isFollowing = true;
            }
        });
    }
}

// Initialize slider accessibility
function initializeSliderAccessibility() {
    // Get slider elements for accessibility updates
    let seekSlider = document.getElementById('seek');
    let volumeSlider = document.getElementById('vol_control');

    // Update aria-valuenow when sliders change
    if (seekSlider) {
        seekSlider.addEventListener('input', function() {
            this.setAttribute('aria-valuenow', this.value);
        });
    }

    if (volumeSlider) {
        volumeSlider.addEventListener('input', function() {
            this.setAttribute('aria-valuenow', this.value);
        });
    }
}

// Listen for music events
music.addEventListener('ended', () => {
    isCurrentlyPlaying = false;
    updatePauseUI();
});

music.addEventListener('error', () => {
    console.log('Audio file not found - continuing in visual mode');
});

// Progress Bar Functionality (Visual Simulation)
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.querySelector('.bar .dot');
let currentStart = document.querySelector('.currentStart');
let currentEnd = document.querySelector('.currentEnd');

// Update progress bar visually
function updateProgressBar() {
    if (totalDuration > 0) {
        let progressPercent = (currentTime / totalDuration) * 100;
        
        // Update visual elements
        if (seek) seek.value = progressPercent;
        if (bar2) bar2.style.width = progressPercent + '%';
        if (dot) dot.style.left = progressPercent + '%';
    }
}

// Handle seek bar interaction (click and drag)
if (seek) {
    seek.addEventListener('input', () => {
        let seekValue = seek.value;
        currentTime = (seekValue / 100) * totalDuration;
        
        // Update visual elements immediately
        if (bar2) bar2.style.width = seekValue + '%';
        if (dot) dot.style.left = seekValue + '%';
        
        updateTimeDisplays();
    });
}

// Handle clicking on progress bar track
let progressBar = document.querySelector('.bar');
if (progressBar) {
    progressBar.addEventListener('click', (e) => {
        let rect = progressBar.getBoundingClientRect();
        let clickX = e.clientX - rect.left;
        let progressBarWidth = rect.width;
        let clickPercent = (clickX / progressBarWidth) * 100;
        
        // Ensure percentage is within bounds
        clickPercent = Math.max(0, Math.min(100, clickPercent));
        
        // Update current time
        currentTime = (clickPercent / 100) * totalDuration;
        
        // Update visual elements
        if (seek) seek.value = clickPercent;
        if (bar2) bar2.style.width = clickPercent + '%';
        if (dot) dot.style.left = clickPercent + '%';
        
        updateTimeDisplays();
    });
}

// Format time display (convert seconds to MM:SS)
function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);
    
    // Add leading zero if needed
    let formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    
    return minutes + ':' + formattedSeconds;
}

// Update time displays
function updateTimeDisplays() {
    if (currentStart) {
        currentStart.textContent = formatTime(currentTime);
    }
    if (currentEnd) {
        currentEnd.textContent = formatTime(totalDuration);
    }
}

// Initialize player
function initializePlayer() {
    currentTime = 0;
    updateProgressBar();
    updateTimeDisplays();
    
    // Set random duration for variety (2-5 minutes)
    totalDuration = Math.floor(Math.random() * 180) + 120; // 2-5 minutes
    updateTimeDisplays();
}

// Volume Control Functionality (Visual Only)
let vol_control = document.getElementById('vol_control');
let vol_bar = document.querySelector('.vol .vol_bar');
let vol_dot = document.getElementById('vol_dot');
let volume_icon = document.querySelector('.vol .bi');

// Set initial volume display
if (vol_control) {
    vol_bar.style.width = vol_control.value + '%';
    vol_dot.style.left = vol_control.value + '%';
}

// Handle volume slider input (visual only)
if (vol_control) {
    vol_control.addEventListener('input', () => {
        let volumeValue = vol_control.value;
        
        // Update visual elements only
        vol_bar.style.width = volumeValue + '%';
        vol_dot.style.left = volumeValue + '%';
        
        // Update volume icon based on level
        updateVolumeIcon(volumeValue);
    });
}

// Handle volume icon click (mute/unmute visual)
let lastVolumeValue = 30;
let isMuted = false;

if (volume_icon) {
    volume_icon.addEventListener('click', () => {
        if (!isMuted) {
            // Visual mute
            lastVolumeValue = vol_control.value;
            vol_control.value = 0;
            vol_bar.style.width = '0%';
            vol_dot.style.left = '0%';
            isMuted = true;
            updateVolumeIcon(0);
        } else {
            // Visual unmute
            vol_control.value = lastVolumeValue;
            vol_bar.style.width = lastVolumeValue + '%';
            vol_dot.style.left = lastVolumeValue + '%';
            isMuted = false;
            updateVolumeIcon(lastVolumeValue);
        }
    });
}

// Update volume icon based on volume level
function updateVolumeIcon(volume) {
    if (!volume_icon) return;
    
    // Remove all volume classes
    volume_icon.classList.remove('bi-volume-mute-fill', 'bi-volume-down-fill', 'bi-volume-up-fill');
    
    if (volume == 0) {
        volume_icon.classList.add('bi-volume-mute-fill');
    } else if (volume <= 50) {
        volume_icon.classList.add('bi-volume-down-fill');
    } else {
        volume_icon.classList.add('bi-volume-up-fill');
    }
}

// Initialize volume icon
updateVolumeIcon(vol_control ? vol_control.value : 30);
