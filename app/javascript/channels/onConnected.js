export default () => {
  window.connectionStatus.querySelector('span').innerHTML = 'Online';
  const div = window.connectionStatus.querySelector('div')
  div.classList.add('bg-green-400');
  div.classList.remove('bg-red-600');
}
