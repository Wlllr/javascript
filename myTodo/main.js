window.addEventListener('load', () => {
    
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#content");
    // const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const todo = {
            content: e.target.content,
            done: false,
            createAt: new Date().getTime()

        }

        todos.push(todo);

        localStorage.setItem('todos', JSON.stringify(todos));

        //reset the form
        e.target.reset();

        displayTodos();
        }); 

        // const task = input.value;

        // JSON.stringify(localStorage.setItem('item', task));

        // localStorage.setItem('item', JSON.stringify(task));
        // localStorage.setItem('item', task);


        // if (!task) {
        //     alert("Please fill out the form!");
        //     return;
        // }

        // const div_el = document.createElement("div");
        // div_el.classList.add("task");

        // // localStorage.setItem('item', JSON.stringify(div_el));

        // const div_content_el = document.createElement("div");
        // div_content_el.classList.add("content");

        // div_el.appendChild(div_content_el);

        // const input_el = document.createElement("input");
        // input_el.classList.add("text");
        // input_el.type = "text";
        // input_el.value = task;
        // input_el.setAttribute("readonly", "readonly");

        // div_content_el.appendChild(input_el);

        // const actions_el = document.createElement("div");
        // actions_el.classList.add("actions");

        // const edit_el = document.createElement("button");
        // edit_el.classList.add("edit");
        // edit_el.innerHTML = "Edit";

        // const delete_el = document.createElement("button");
        // delete_el.classList.add("delete");
        // delete_el.innerHTML = "Delete";

        // actions_el.appendChild(edit_el);
        // actions_el.appendChild(delete_el);

        // div_el.appendChild(actions_el);
        // list_el.appendChild(div_el);

        
        // function user () {
        //     const disp = task;

        //     const data = JSON.parse(localStorage.getItem('item'));

        //     if (!disp && data) {
        //         div_el.style.display = "none";
        //         div_el.textContent = data;
        //     } else {
        //         div_el.style.display = "flex";
        //         div_el.textContent = data;
        //     }
        // };

        // input.value = "";
        // getItem();
        // user();
        
        // edit_el.addEventListener('click', () => {
        //     if (edit_el.innerText.toLowerCase() == "edit") {
        //         input_el.removeAttribute("readonly");
        //         input_el.focus();
        //         edit_el.innerText = "Save";
        //     } else {
        //         input_el.setAttribute("readonly", "readonly");
        //         edit_el.innerText = "Edit";
        //     }
        // });

        // delete_el.addEventListener('click', () => {
        //     list_el.removeChild(div_el);
            
        // });   

    displayTodos();

});

function displayTodos () {
    const list_el = document.querySelector("#tasks");
    list_el.innerHTML = "";

    todos.forEach(todo => {
        const div_el = document.createElement("div");
        div_el.classList.add("task");

        const div_content_el = document.createElement("div");
        const input_el = document.createElement("input");
        const actions_el = document.createElement("div");
        const edit_el = document.createElement("button");
        const delete_el = document.createElement("button");


        div_content_el.classList.add("content");

        input_el.classList.add("text");
        input_el.type = "text";
        input_el.value = task;
        input_el.setAttribute("readonly", "readonly");

        actions_el.classList.add("actions");

        edit_el.classList.add("edit");
        edit_el.innerHTML = "Edit";

        delete_el.classList.add("delete");
        delete_el.innerHTML = "Delete";

        //Appends
        div_el.appendChild(div_content_el);
        div_content_el.appendChild(input_el);
        actions_el.appendChild(edit_el);
        actions_el.appendChild(delete_el);
        div_el.appendChild(actions_el);

        list_el.appendChild(div_el);


        edit_el.addEventListener('click', () => {
            const input = content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', (e) => {
                input.setAttribute('readonly', true);
                todo.content = e.target.value;
                localStorage.setItem('todos', JSON.stringify(todos));
                displayTodos();
            });
        });

        delete_el.addEventListener('click', () => {
            todos = todos.filter(t => t != todo);
            localStorage.setItem('todos', JSON.stringify(todos));
            displayTodos();
        });

    })
};