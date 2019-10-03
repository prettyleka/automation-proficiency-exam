const SeleniumInfra = require('./seleniumInfra.js')
let x = new SeleniumInfra


class TodosPage {
    constructor(url){
        url = x.getURL("https://elevation-local-todo.herokuapp.com/")
    }

    //insertAndDelete(todoText)
async insertAndDelete(todoText) {
await  x.write(todoText, "id", "todo-input")
await x.clickElement("id", "addToDo")
if(await x.findElementBy("className", "todo")){
    console.log("found a new div")
    if(await x.getTextFromElement("css", "#todos > div")==todoText){
        console.log("New div has the same text")
    }
    else{
        console.log("Error: New div does not has the same text")
    }}
else{
    console.log("Error: Can’t find a new div")
}
await x.clickElement("css", "#todos > div > span.delete > i")
if(await x.isElementExists("css", "#todos > div")){
    console.log("The div was not deleted")
}
else{
    console.log("The div was deleted")
}
x.close()
}

async insertAndComplete(todoText) {
    await  x.write(todoText, "id", "todo-input")
    await x.clickElement("id", "addToDo")
    if(await x.findElementBy("className", "todo")){
        console.log("found a new div")
    }
    else{
        console.log("Error: Can’t find a new div")
    }
    await x.clickElement("css", "#todos > div > i")
    if(await x.findElementBy("className", "todo complete")){
        console.log("the new div was checked")
    }
    else{
        console.log("Error: the new div was NOT checked")
    }
    x.close()

}

async insertTwoDeleteFirst(todoText1, todoText2){
    await  x.write(todoText1, "id", "todo-input")
    await x.clickElement("id", "addToDo")
    if(await x.findElementBy("className", "todo")){
        console.log("found a new div")
    }
    else{
        console.log("Error: Can’t find a new div")
    }
    await  x.write(todoText2, "id", "todo-input")
    await x.clickElement("id", "addToDo")
    if(await x.findElementBy("css", "#todos > div:nth-child(2)")){
        console.log("found a new div")
    }
    else{
        console.log("Error: Can’t find a new div")
    }
    await x.clickElement("css", "#todos > div:nth-child(1) > span.delete > i")
    if(await x.isElementExists("css", "#todos > div:nth-child(1)")){
        console.log("the first div was deleted")
    }
    else{
        console.log("Error: the first div was NOT deleted")
    }
    x.close()
    



}
}


module.exports = TodosPage

