const wordInput = document.querySelector('#word');
const resultList = document.querySelector('.result-list');

wordInput.addEventListener('keyup', async (e) => {
  resultList.innerHTML = '';
  if (!wordInput.value) return;
  const promises = words.map((word) => {
    if (word.includes(e.target.value.toLowerCase())) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(word));
      resultList.appendChild(li);
    }
  });

  await Promise.all(promises);
});
