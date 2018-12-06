
function Tree(){

    this.root = null; 

}

Tree.prototype.reset = function(){
    this.root = null;
}

//
// INSERTION 
// ====================================================
//

Tree.prototype.insert = function(data){
    this.root = this.insertR(this.root, data); 

}

Tree.prototype.insertR = function(node, data) {

    // if root of current tree is null, add the new node here
    if(node == null){

        node = new Node(data);

    } 
    
    // if the data is smaller or equal to the root of the current tree
    else if (data <= node.data){
        node.targeted = true;
        // insert it into the left subtree
        node.left = this.insertR(node.left, data);
        this.show();
        node.targeted = false;
        
    } 
    
    // if the data is larger than the root of the current tree 
    else {

        node.targeted = true;
        // insert it into the right subtree
        node.right = this.insertR(node.right, data);
        this.show();
        node.targeted = false;

    }

    // return the root of the current subtree
    return node;

}

//
// SEARCHING  
// ====================================================
//

Tree.prototype.search = function(data){

    return this.searchR(this.root, data);

}

Tree.prototype.searchR = function(node, data){
    if (node == null) return false; 
    if (node.data == data) return true;
    if (data < node.data) return this.searchR(node.left, data);
    else return this.searchR(node.right, data);
}

//
// TO STRING  
// ====================================================
//

Tree.prototype.inorder = function(node){

    if (node == null)
    return "";

    return this.inorder(node.left) + "" + node.data + this.inorder(node.right);

}


//
// REMOVAL  
// ====================================================
//

Tree.prototype.remove = function(data){

    this.root = this.removeR(this.root, data);

}

Tree.prototype.removeR = function(node, data){

    // Case 1 : Root of subtree DNE
    if (node == null) return node;

    // Case 2 : Data is less than root 
    if (data < node.data){

        // Remove from left subtree
        node.left = this.removeR(node.left, data);

    }

    // Case 3 : Data is greater than root 
    else if (data > node.data){

        // Remove from right subtree
        node.right = this.removeR(node.right, data);

    }

    // Case 4 : Data is equal to this root
    else {

        // Case 1 : root is Leaf
        if (isLeaf(node)){
            return null;
        }
        
        // Case 2 : root has one child tree
        if (children(node) == 1) {
            return (node.left != null ? node.left : node.right);
        }

        // Case 3 : root has two children trees 
        else {

            // Case 1 : if left is the preceeding 
            if (node.left.right == null) {

                // swap data 
                node.data = node.left.data;

                // remove leaf 
                node.left = null;

            }

            // Case 2 : if left is not the preceeding 
            else {
                // use remove largest to get the preceeding node
                preceeding_nodes_data = this.removeLargest(node.left, node.left.right);
                node.data = preceeding_nodes_data;
            }

        }

    }

    
    return node;
}

Tree.prototype.removeLargest = function(parent, node){

    // Case 1 : node is the largest
    if (node.right == null) {
        parent.right = null;
        return node.data;
    }

    // Case 2 : it is not the largest
    return this.removeLargest(node, node.right);

}

//
// UTILITY FOR TREE
// ===================================================
// 

function isLeaf(node){

    return node.left == null && node.right == null;

}

function children(node){

    return (node.left != null ? 1 : 0) + (node.right != null ? 1 : 0);

}

function largest(node){

    return (node.right != null ? largest(node.right) : node);

}

//
// VISUALIZATION OF BINARY TREE
// ===================================================
// 

Tree.prototype.show = function(){

    if (this.root == null) return;
    this.showR(this.root, width / 4, width / 2, 10); 

}

Tree.prototype.showR = function(node, level, x,  y){

    // ensure current subtree's root exists
    if(node == null) return ;

    // draw node 
    line(x, y, (x - level), y + 50);
    line(x, y, (x + level), y + 50);
    node.show(x, y, 15);

    this.showR(node.left, level / 2, (x - level), y + 50);
    this.showR(node.right, level / 2, (x + level), y + 50);

}

