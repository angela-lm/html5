onmessage = function(e){
    var name = e.data.name;
    console.log('name:' + name);
    this.postMessage(name);
}