let moves = 0
function main(id){
    moves ++
    if(moves % 2 === 0){
        document.getElementById(`${id}`).innerHTML = `<h1>x</h1>`
    }else{
        document.getElementById(`${id}`).innerHTML = `<h1>o</h1>`
    }

}