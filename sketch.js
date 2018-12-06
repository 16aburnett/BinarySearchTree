var i = 0;
var tree;

// mode
// 0 : insert mode
// 1 : remove mode
var mode;
var button;
var clearButton;
var inorderButton;

function setup(){

    createCanvas(600, 600);

    // Buttons
    mode = 0;
    button = document.getElementById("mode");
    labelButton();
    clearButton = document.getElementById("clear");
    inorderButton = document.getElementById("inorder");

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

function keyPressed(){

    key = key.toLowerCase();

    if (mode == 0){

        tree.insert(key);
        console.log("inserted : " + key);

    }
    else if (mode == 1) {

        tree.remove(key);
        console.log("removed : " + key);

    }

}
