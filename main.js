let moves = 0

function main(id){
    if(document.getElementById(`${id}`).innerText === "x" || document.getElementById(`${id}`).innerText === "o" ){
        return;
    }
    moves ++
    if(moves % 2 === 0){
        document.getElementById(`${id}`).innerHTML = `<h1>o</h1>`
        if(moves == 9){
            document.getElementById(`alert`).innerHTML = `Koniec pól!`
            return;
        }
    }else{
        document.getElementById(`${id}`).innerHTML = `<h1>x</h1>`
        if(moves == 9){
            document.getElementById(`alert`).innerHTML = `Koniec pól!`
            return;
        }
        
    }
}

function reset(){
    moves = 0;
    document.getElementById(`alert`).innerHTML = ` `
    for (let i = 1; i < 10; i++) {
        document.getElementById(`${i}`).innerHTML = ` `   
    }
}