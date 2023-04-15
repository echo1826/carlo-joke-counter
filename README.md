# Carlos Funny Counter (previously named zen-bot)

Carlos Funny Counter is a discord bot that I am working on as a personal project for my friends. It uses the discord.js package to make the bot and give it functionality. It currently has 3 commands:

`/hello` will reply to the user who ran the command with Hello World!
<br/>
`/howmanydays` will reply with the current value of daysSince in the lastFunny.json file
<br/>
`/carlosmadeafunny` will reset the daysSince field in the lastFunny.json file to 0

There is also a setInterval that will increment the daysSince value by 1 every 24 hours

# In Development
- Keeping track of the longest streak of days Carlos has gone since making a funny joke
- Keeping track of the shortest streak of days Carlos has gone since making a funny joke

# Reason Why I Developed This (4/14/2023)
This idea formed among my group of friends that I've known for a long time. It is long known in our friend group that Carlos's humor never matched up with ours so there was a running inside joke that it takes Carlos a long time to say something actually funny to us. One of our friends decided to tease Carlos about it that every time he made us laugh, his "counter" would reset to 0 that day. Well we were out eating dinner one evening and decided it would be really awesome if we had something to actually keep track of the days rather than just resetting to 0 days every time, so I threw out the idea that I had started making a discord bot a while ago and I could change it to work for this idea. So within a day after we talked about it, I renamed zen-bot to the Carlos Funny Counter and it had the basic functionality of seeing how many days it's been since Carlos last made us laugh, resetting his days, and a basic hello greeting.

# Technologies
- [discord.js](https://discord.js.org)
- [node](https://nodejs.org/en)