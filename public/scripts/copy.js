const button = document.getElementById('room-id')

button.addEventListener('click',()=>{
    const text = document.getElementById('room-id2')
    text.select()
    document.execCommand('copy')
})