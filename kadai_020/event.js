const text = document.getElementById('text');

const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
})