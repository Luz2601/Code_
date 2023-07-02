// thsi sis an empty array
const todoList = [];
const ele = document.querySelector('.js-input');
const ele1 = document.querySelector('.js-date');

function Addtodo() {
    let name = ele.value;
    let dat = ele1.value;
    todoList.push({
        Name: `${name}`,
        Date: `${dat}`
    });
    // now whenever were adding anythings the textbox dosent resets to fix it:
    ele.value = '';
}

function render() {
    let todolistHTML = '';
    for (i = 0; i < todoList.length; i++ ) {
        let a = todoList[i];
        let name = a.Name;
        let date = a.Date;
        let html = `<div>${name}</div> <div>${date}</div> <div><button onclick="todoList.splice(${i}, 1);render();" class="css-del">Delete</button></div>`;
        todolistHTML += html;
        document.querySelector('.js-paragraph').innerHTML = todolistHTML;
    }
    /*
        detailed:
        say todo list length is 2
        todolistHtml is an empty placeholder 
        html is placeholder with pagargraph emlements
        name holds name value from a (object)
        date holds date value from a (object)

        1st i === 0 ie i < todolist.lenght therefor 'a' holds 0th index value of todoList, then html updates and replaces '$' with 'a' ie 0th value hence todolisthtml stores html as its value 
        |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
        |    INCRIMENT   VALUE OF i      i < todolist.lenght   VALUE IN a                      VALUE IN html                            |
        |    1st         0               yes                   0th index value of todolist     <p>0th index value of todolist</p>       |
        |    2nd         1               yes                   1st index value of todolist     <p>1st index value of todolist</p>       |
        |    3rd         2               no                    ___________________________     __________________________________       |
        |                                                                                                                               |
        |   todolistHtml VALUE AT 1st INCRIMENT: <p>0th index value of todolist</p>                                                     |
        |   todolistHtml VALUE AT 2nd INCRIMENT: <p>0th index value of todolist</p><p>1st index value of todolist</p>                   |
        |   todolistHtml VALUE AT 3rd INCRIMENT: <p>0th index value of todolist</p><p>1st index value of todolist</p>                   |
        |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|

    */
}

function res() {
    
    todoList.splice(0,todoList.length+1);
    
    document.querySelector('.js-paragraph').innerHTML = 'List Deleated';
    
    render();
}

    