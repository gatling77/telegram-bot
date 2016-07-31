"use strict";

// include the node.js native http package 
var http = require('http');
var https = require('https');

var TelegramBot = require('node-telegram-bot-api');
var telegramBotToken = require('./telegram-token.js').token;

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
    
    // let them know we're working
   telegramBot.sendMessage(chatId, "hello world!!",
           {reply_markup:
               JSON.stringify(
                   {keyboard:[['yes','no'],['maybe','fu']]}
                   )}).then(finish);

};

