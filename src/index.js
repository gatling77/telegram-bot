"use strict";

// include the node.js native http package 
var http = require('http');
var https = require('https');

// Include TelegramBot package
var TelegramBot = require('node-telegram-bot-api');

// Telegram bot token (given when you create a new bot using the BotFather);
var telegramBotToken = '234006299:AAHVUROGpmbmbh4ZNQmVdq9emvygeurfKgA';

// Telegram bot setup
var telegramBot = new TelegramBot(telegramBotToken, {polling: false});    

// By default, handler is called when the Lambda function is run.  
// 'event' contains all of the information about the request, including the Telegram user's info and their message
// See the 'sample-message.json' file for an example
exports.handler = function(event, context, lambdaCallback) {
    function finish(){
        lambdaCallback(null,'')
    }

    // parse the chat ID so we can respond
    var chatId = event.message.chat.id;
    
    // let them know we're working
    telegramBot.sendMessage(chatId, "hello world!").then(finish)


};

