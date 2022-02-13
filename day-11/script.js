// window.addEventListener('keydown', (e) => {
//     console.log(e);
// })

const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.key</small>
</div>
<div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
</div>
<div class="key">
    ${event.code}
    <small>event.code</small>
</div>`
})

// *NOTE* keyCode is deprecated, so it may or may not work