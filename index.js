#!/usr/bin/env node

/* eslint-disable n/no-process-exit */

/*
Usage:
    $ ./countdown.js <seconds> <messageOnComplete> <messageOnAbort>
For example:
    $ ./countdown.js 10 "Proceed" "Aborted"
    $ ./countdown.js 10 "Countdown complete!" "Countdown aborted!"
*/

const readline = require('node:readline');

let countdownSeconds = Number.parseInt(process.argv[2]);
const messageOnComplete = process.argv[3];
const messageOnAbort = process.argv[4];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if (Number.isNaN(countdownSeconds) || countdownSeconds <= 0) {
    console.warn('Using default countdown of 5 seconds.');
    console.warn('You can hide this message by providing the number of seconds for the countdown.');
    console.log('');
    console.log('Usage:');
    console.log('    $ countdown <seconds> <messageOnComplete> <messageOnAbort>');
    console.log('For example:');
    console.log('    $ countdown  5 "Proceed" "Aborted"');
    console.log('    $ countdown 10 "Launch the rocket" "Abort rocket launch!"');
    console.log('');
    countdownSeconds = 5;
}

let currentTime = countdownSeconds;

function updateCountdown() {
    // process.stdout.clearLine();
    // process.stdout.cursorTo(0);
    if (currentTime > 0) {
        if (currentTime !== countdownSeconds) {
            process.stdout.write(' ');
        }
        process.stdout.write(`${currentTime}`);
    }

    currentTime -= 1;

    if (currentTime < 0) {
        clearInterval(interval);
        // process.stdout.clearLine();
        // process.stdout.cursorTo(0);
        console.log('');
        if (messageOnComplete) {
            console.info(messageOnComplete);
        }
        rl.close();
        process.exit(0);
    }
}

const interval = setInterval(updateCountdown, 1000);

// Listen for 'Enter' key press
rl.on('line', (input) => { // eslint-disable-line no-unused-vars
    clearInterval(interval);
    // process.stdout.clearLine();
    // process.stdout.cursorTo(0);
    if (messageOnComplete) {
        // Note: A line is already inserted by the 'Enter' key press
        console.log(messageOnComplete);
    }
    rl.close();
    process.exit(0);
});

// Handle Ctrl+C
rl.on('SIGINT', () => {
    // process.stdout.clearLine();
    // process.stdout.cursorTo(0);
    console.log('');
    if (messageOnAbort) {
        console.error(messageOnAbort);
    }
    rl.close();
    process.exit(1);
});

// Start the countdown
updateCountdown();
