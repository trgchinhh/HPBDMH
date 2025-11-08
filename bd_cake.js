// Thực hiện mở khi click vào thư 

document.getElementById("envelope").addEventListener("click", function() {
    this.classList.toggle("open");
});

const audio = document.getElementById('bg-music');
const btn = document.getElementById('music-btn');
const cd = document.querySelector('.cd');

window.addEventListener('load', () => {
    const audio = document.getElementById('bg-music');
    audio.play().catch(() => {
        console.log("Autoplay bị chặn, người dùng cần tương tác.");
    });
});

btn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        cd.classList.add('spin');  // CD bắt đầu xoay
        btn.textContent = 'Tắt nhạc';
    } else {
        audio.pause();
        cd.classList.remove('spin'); // CD ngừng xoay
        btn.textContent = 'Bật nhạc';
    }
});