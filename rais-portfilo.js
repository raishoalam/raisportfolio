var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Backend Developer", "YouTuber", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,

    backDelay: 1000,
    loop: true
})


document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increament = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increament;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }

    counter("count2", 0, 500, 3000);
    counter("count3", 0, 1500, 3000);
    counter("count4", 0, 3000, 2000);
});