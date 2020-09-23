export default (data) => {
  const p = document.createElement('p');
  p.classList.add('font-bold');
  p.innerHTML = `[${new Date().toISOString()}]`;

  const div = document.createElement('div');
  div.classList.add('whitespace-pre');
  div.innerHTML = JSON.stringify(data.channel, null, 2);

  const li = document.createElement('li');
  li.classList.add(...'px-4 py-1 hover:bg-gray-200 hover:text-gray-800'.split(' '));
  li.appendChild(p);
  li.appendChild(div);
  window.messageList.append(li);
  li.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
};
