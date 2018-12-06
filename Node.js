function Node(data){

    this.left = null;
    this.right = null;
    this.data = data;

}

Node.prototype.show = function(x, y, w){

    fill(100);
    ellipse(x, y, 15);
    fill(255);
    textAlign(CENTER, CENTER);
    text(this.data, x, y);

}