var _ = require('lodash')

module.exports = {
    getCommand:getCommand
}

function getCommand(message){

    if (message.startsWith("/")){
        var params = message.split(" ");
        var commandName = params[0].substring(1,params[0].length);
        if (typeof(commands[commandName])==typeof(Function))
           return  _.reduce(_.tail(params),
                function(fun, param){
                    return _.partial(fun,param);
                },
                commands[commandName] );
        else
            return unrecognized;
    }
    else {
        return unrecognized;
    }


}
var commands = {
    hello: function(name, surname){
        return 'hello '+name;
    },

    start: function(){
        return {
            text: "Ciao! Anche se sono in ferie, provero' a rispondere alle tue domande! Spara!"
        }
    }
}

function unrecognized(message){
        return 'Ma che stai dicendo?';
}