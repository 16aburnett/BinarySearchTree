var i = 0;
var tree;

// mode
// 0 : insert mode
// 1 : remove mode
var mode;
var button;
var clearButton;
var inorderButton;
var textarea;
// data type 
// 0 : numbers 
// 1 : characters 
// 2 : objects (coming soon)
var type;
var typeButton;

function setup(){

    createCanvas(600, 600);

    // Buttons
    mode = 0;
    button = document.getElementById("mode");
    labelButton();
    clearButton = document.getElementById("clear");
    inorderButton = document.getElementById("inorder");
    textarea = document.getElementById("text");
    type = 1;
    typeButton = document.getElementById("type");
    labelTypeButton();

    // Tree
    tree = new Tree();

}

function draw(){

    background(225);

    tree.show();

}

function toggle(){
    mode++;
    if (mode == 2) {

        mode = 0;

    }
    labelButton();
    
}

function toggleType(){
    type++;
    if (type == 2) {

        type = 0;

    }
    labelTypeButton();
    
}

function inorderTree(){

    console.log(tree.inorder(tree.root));

}

function clearTree(){
    console.log("clearing tree");
    tree.reset();
}

function labelButton(){
    if (mode == 0){

        button.innerText = "insert mode";
        console.log("current mode : insert");

    } else if (mode == 1){

        button.innerText = "remove mode";
        console.log("current mode : remove");

    }
}

function labelTypeButton(){
    if (type == 0){

        typeButton.innerText = "numbers";
        console.log("current data type : numbers");

    } else if (type == 1){

        typeButton.innerText = "characters";
        console.log("current data type : characters");

    }
}


function keyPressed(){

    key = key.toLowerCase();

    if(keyCode == ENTER){

        var val = textarea.value;

        if(val != ""){

            if (mode == 0){

                if (type == 0) { // numbers 

                    val = parseFloat(val);


                    // insert value 
                    tree.insert(val);
                    console.log("inserted : " + val);

                } else if (type == 1) { // characters

                    for (var i = 0; i < val.length; i++){

                        // insert value 
                        tree.insert(val[i]);
                        console.log("inserted : " + val[i]);

                    }


                }

        
            }
            else if (mode == 1) {
        
                if (type == 0) { // numbers 

                    val = parseFloat(val);


                    // remove value 
                    tree.remove(val);
                    console.log("removed : " + val);

                } else if (type == 1) { // characters

                    for (var i = 0; i < val.length; i++){

                        // remove value 
                        tree.remove(val[i]);
                        console.log("removed : " + val[i]);

                    }


                }
        
            }

        }


        textarea.value = "";
    }

}
