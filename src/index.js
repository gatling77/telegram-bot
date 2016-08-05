"use strict";

// include the node.js native http package 
var http = require('http');
var https = require('https');

var TelegramBot = require('node-telegram-bot-api');
var telegramBotToken = require('./telegram-token.js').token;

var router = require('./router.js');

// Telegram bot setup
var telegramBot = new TelegramBot(telegramBotToken, {polling: false});    

// By default, handler is called when the Lambda function is run.  
// 'event' contains all of the information about the request, including the Telegram user's info and their message
// See the 'sample-message.json' file for an example
exports.handler = function(event, context, lambdaCallback) {
    function finish(){
        lambdaCallback(null,'');
    }

    // parse the chat ID so we can respond
    var chatId = event.message.chat.id;

    var command = router.getCommand(event.message.text);

    var response = command();

    if (response.keyboard){
        telegramBot.sendMessage(chatId, response.text,
           {reply_markup:
               JSON.stringify(
                   {keyboard:response.keyboard}
                   )}).then(finish);
    }else{
        telegramBot.sendMessage(chatId, response.text).then(finish);
    }

};

