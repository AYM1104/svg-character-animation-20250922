// デリゲーションで .char をクリック停止（<use> のイベント伝播差異に強い）
const svg = document.querySelector('svg.character');
if (svg) {
  svg.addEventListener('click', (e) => {
    const char = e.target.closest('.char'); // <use> をクリックしても .char は取れる
    if (char) char.classList.toggle('paused');
  });
}