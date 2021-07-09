import Modal from './modal.js'
const rooms = document.querySelectorAll('.delete-room')
const modal = Modal()

rooms.forEach(room => {
    room.addEventListener('click',event=>{
        event.preventDefault()
        const roomId = event.currentTarget.dataset.id
        const form = document.querySelector(".modal form")
        
        form.setAttribute("action",`/admin/${roomId}/delete`)
        modal.open()
    })
})