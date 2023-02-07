window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    // const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
    // let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];


    // const updateLocalStorage = () => {
    //     localStorage.setItem('transactions', JSON.stringify(transactions));
    // };


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        // localStorage.setItem('item', task);

        if (!task) {
            alert("Please fill out the form!");
            return;
        }

        const div_el = document.createElement("div");
        div_el.classList.add("task");

        localStorage.setItem('item', div_el);

        const div_content_el = document.createElement("div");
        div_content_el.classList.add("content");

        div_el.appendChild(div_content_el);

        const input_el = document.createElement("input");
        input_el.classList.add("text");
        input_el.type = "text";
        input_el.value = task;
        input_el.setAttribute("readonly", "readonly");

        div_content_el.appendChild(input_el);

        const actions_el = document.createElement("div");
        actions_el.classList.add("actions");

        const edit_el = document.createElement("button");
        edit_el.classList.add("edit");
        edit_el.innerHTML = "Edit";

        const delete_el = document.createElement("button");
        delete_el.classList.add("delete");
        delete_el.innerHTML = "Delete";

        actions_el.appendChild(edit_el);
        actions_el.appendChild(delete_el);

        div_el.appendChild(actions_el);
        list_el.appendChild(div_el);

        
        input.value = "";
        getItem();
        
        edit_el.addEventListener('click', () => {
            if (edit_el.innerText.toLowerCase() == "edit") {
                input_el.removeAttribute("readonly");
                input_el.focus();
                edit_el.innerText = "Save";
            } else {
                input_el.setAttribute("readonly", "readonly");
                edit_el.innerText = "Edit";
            }
        });

        delete_el.addEventListener('click', () => {
            list_el.removeChild(div_el);
            localStorage.removeItem('item');
        });   
        


        function getItem () {
            const itens = localStorage.getItem('item');
    
            if (itens) {
                div_el.style.display = "flex";
    
                const div_itens = document.querySelector(".task");
    
                div_itens.textContent = input.value;
            }
            
        };


    }); 



    // function getItem() {

    //     const itemPego = document.querySelector(".task");

    //     localStorage.getItem('item');

    //     if (itemPego) {
    //         itemPego.style.display = "flex";
    //     } else {
    //         itemPego.style.display = "none";
    //     }
        
    // };

});