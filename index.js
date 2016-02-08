#!/usr/bin/env node
var notifier = require('terminal-notifier');

console.log('break start:', new Date())

notifier('20 seconds', { 
	title: 'Time for break',
	sound: 'Ping'
});

setTimeout(function () {
	console.log('break end:', new Date())
	notifier('Back to work', { 
		title: 'Breaks over',
		sound: 'Basso'
	});
}, 20000);

// cronjob: 0 0/1 * * * /usr/local/bin/node /usr/local/bin/break_time >> /PATH/TO/YOUR/LOG/FILE/cron_log.log