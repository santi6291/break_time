# Break Time

Simple node bin script to notify you when you should take a break

## Installing
- install: `sudo npm install -g`
	- [Building command line tools with Node.js](https://developer.atlassian.com/blog/2015/11/scripting-with-node/)
- cron job: `0 0/1 * * * /usr/local/bin/node /usr/local/bin/break_time >> /PATH/TO/YOUR/LOG/FILE/cron_log.log`
	- [cron helper](http://crontab.guru/)

## What it does
- runs every hour
- will notify you to take a break
- will delay for 20 seconds before notifying you fun is over