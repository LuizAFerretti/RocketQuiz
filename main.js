
import Modal from './modal.js'


const modal = Modal()

const modalTitle = document.querySelector('.modal h3')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')




//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")
checkButtons.forEach(button =>{
    //adicionar a escuta
    button.addEventListener("click" , handleClick)
     
    })



//bloco de código para excluir uma opção de resposta
/*Quando o botão delete for clicado ele abre a modal */
const deleteButton = document.querySelectorAll(".actions a.trash")
deleteButton.forEach(button =>{
    button.addEventListener("click", (event) => handleClick (event , false))
     })

     function handleClick(event ,  check =true){
         event.preventDefault()
         const text = check ? "Marcar como lida " : "Excluir "
         const slug = check ? "check" : "trash"
         const roomId = document.querySelector("#room-id").dataset.id
         const questionId = event.target.dataset.id


         const form = document.querySelector(".modal form")  
         form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)
         


         modalTitle.innerHTML = `${text} esta pergunta`
         modalDescription.innerHTML =  `Você  tem certeza que deseja ${text.toLowerCase()}esta pergunta ? `
         modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
         check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    
        
       
     //abrir modal
         modal.open()
     }






export function toLowerCase() {
    throw new Error('Function not implemented.')
}

