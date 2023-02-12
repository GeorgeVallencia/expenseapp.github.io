let addExpense = document.querySelector('.add-expense-btn');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');
let list = document.querySelector('.list-items');


// input.addEventListener('keyup', () => {
//     if(input.value.trim() != 0){
//         addBtn.classList.add('active');
//     }else{
//        addBtn.classList.remove('active');
//     }
// })

addExpense.addEventListener('click', () => {
    if(input1.value && input2.value && input3.value){
        let newRow = document.createElement('tr');
        // let newCell = document.createElement('td');
        newRow.classList.add('td');
        newRow.innerHTML = `
        <td>${input1.value}</td>
        <td>${input2.value}</td>
        <td>${input3.value}</td>
        <td><i class='bx bxs-x-square'></i></td>
        `

        list.appendChild(newRow);
        input1.value = '';
        input2.value = '';
        input3.value = '';
    }else{
        alert('enter all the inputs!');
    }
})

list.addEventListener('click', (e) => {
  if(e.target.classList.contains('bxs-x-square')){
        e.target.parentElement.parentElement.remove();
  }
})