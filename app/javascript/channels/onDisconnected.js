export default () => {
  window.connectionStatus.querySelector('span').innerHTML = 'Offline';
  const div = window.connectionStatus.querySelector('div')
  div.classList.add('bg-red-600');
  div.classList.remove('bg-green-400');
}
