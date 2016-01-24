jQTerminal = (function() {
    var instance = new Function();
    _static = {
        instance: function(id, interpreter, settings, callback){
            var term = $(id).terminal(interpreter, settings);
            callback(term);
        }
    }
    return _static;
})();
