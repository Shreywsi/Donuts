window.onload = () => {
    const mainDonut = document.getElementById('main-donut');
    const page2 = document.querySelector('.page2');
    const frostedDonut = document.querySelector('.frosted-donut');
    const page1 = document.querySelector('.page1');
    const pageHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        const page2Offset = page2.offsetTop;
        const page1Offset = page1.offsetTop;
        if (window.scrollY >= page2Offset - pageHeight / 2) {
            mainDonut.style.transform = "translate(-50%, -150%) rotate(180deg)";
            mainDonut.style.height = "50px";
            mainDonut.style.width = "50px";
        } else if (window.scrollY <= page1Offset + pageHeight / 2) {
            mainDonut.style.transform = "translate(-50%, -50%) rotate(0deg)";
            mainDonut.style.height = "680px";
            mainDonut.style.width = "680px";
        }
    });
};