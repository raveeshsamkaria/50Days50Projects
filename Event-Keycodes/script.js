const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>ASCII Value</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>

<div class="return">
<a href=index.html>Return</a>
</div>
  `
})