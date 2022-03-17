document.querySelectorAll('.main-nav li').forEach(li => {
    li.addEventListener('mouseout', () => {
        let timeout;
        clearTimeout(timeout);
        li.className = "slide";
        timeout = setTimeout(() => {
            li.className = "";
        }, 320);
    });
});

// Hero Texts
// const texts = document.querySelectorAll('.cont div');
// const words = ['article writer', 'ghost writer', 'student'];
// let i = 0;

// const renderTexts = texts => {
//     words.forEach((t, i) => {
//         [...t].forEach((l, li) => {
//             const delay = li === 0 ? 100 : li * 160;
//             texts[i].innerHTML += `<p style="transition:${delay}ms;">${l === ' ' ? "&nbsp;" : l}</p>`;
//         });
//     });
// }
// renderTexts(texts);

// const int = () => {
//     setTimeout(() => {
//         i++;
//         i = i >= 3 ? 0 : i;
//         showWord(i);
//     }, 5000);
// }

// const showWord = i => {
//     const prevI = i === 0 ? 2 : i === 1 ? 0 : 1;
//     const nextI = i === 0 ? 1 : i === 1 ? 2 : 0;

//     texts[prevI].className = 'prev';
//     texts[nextI].className = 'next';
//     texts[i].className = 'active';
//     int();
// }

// showWord(i);