Template.jQTerminal.rendered = function() {
    
    var div = this.$(this.firstNode);
    
    // If values are undefined, it doesn't matter
    div.attr('id',this.data.id);
    div.addClass(this.data.class);
    
    // Initialize terminal() on the div
    div.terminal(this.data.interpreter,this.data.options);

}