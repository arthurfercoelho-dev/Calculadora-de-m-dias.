function inserirNoDisplay(data){
    document.querySelector('#display').value += data;
}

function apagartudo(){
    document.querySelector('#display').value = ""
}

function apagar(){
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
}

function resultado() {
    const display = document.querySelector('#display');

    if (display.value.trim() === "") {
        return;
    }

    try {
        const conta = eval(display.value);

        if (conta === undefined) {
            display.value = "";
        } else {
            display.value = conta;
        }

    } catch (e) {
        display.value = "Erro";
    }
}
