'use strict'

const openModal = () => 
     document.getElementById('modal')
        .classList.add('active')


const closeModal = () => document.getElementById('modal')
        .classList.remove('active')


// CRUD - creat, read, update, delete



 ///Eventos       

document.getElementById('CadastrarCliente')
        .addEventListener('click', openModal)

document.getElementById('modalclose')
        .addEventListener('click', openModal)        