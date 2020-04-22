var todos = ["blah"];

var input = prompt("What would you like to do?");

while ( input !== "quit" ) {
    if ( input === "new" ) {
        // Add a todo item
        var entry = prompt("Item to add: ");
        todos.push(entry);
        console.log("Item added");
    } else if ( input === "list" ) {
        // List todo items
        console.log("**********");
        todos.forEach(function(item, index) {
            console.log(`${index}: ${item}`);
        });
        console.log("**********");
    } else if ( input === "delete" ) {
        // Delete a todo item
        var index = prompt("Which index to delete?");
        if(index < todos.length) {
            todos.splice(index,1);
            console.log("Item removed");
        } else {
            console.log("Index out of range");
        }
    }

    input = prompt("What would you like to do?");
}

