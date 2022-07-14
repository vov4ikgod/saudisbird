const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('5538154901:AAFYXVlp0kHzeZMr2pROJpGVQDon0LpnHqA');

bot.start((ctx) => ctx.reply(`Hello ${ctx.message.from.first_name} ${ctx.message.from.last_name}
This is the official bot of the Saudis Billionaire project. 
Here you can find out everything about the project.
`,      Markup.keyboard([
            ['info', 'offical-link'],
            ['roadmap', 'sneak-peek'],
            ['team']
        ])
        .resize()
    )
);

bot.hears('info', (ctx) => ctx.reply(`
Info

SAUDIS BILLIONAIRE it's a NFT collection of 5555 saudis birds.
Mint price: Free
Mint data: TBA
Network: ETH
`));

bot.hears('team', (ctx) => ctx.reply(`
🤭
`));

bot.hears('offical-link', (ctx) => ctx.reply(`
Offical link

Twitter: https://twitter.com/BILLIONERSNFT
Discord: https://discord.gg/saudis
`));

bot.hears('roadmap', (ctx) => ctx.reply(`
🤭
`));

bot.hears('sneak-peek', (ctx) => ctx.reply(`
Sneak-peek

https://cdn.discordapp.com/attachments/995676494842040440/996527377129672854/unknown-2.png
https://cdn.discordapp.com/attachments/995676494842040440/996748316245229578/BILLIONER__PFP_015.png
https://cdn.discordapp.com/attachments/995676494842040440/996527359480041543/unknown-1.png
https://cdn.discordapp.com/attachments/995676494842040440/996271907315916862/BILLIONER_PFP_013.png
https://cdn.discordapp.com/attachments/995676494842040440/996088011827724439/BILLIONER_DOODLES.png
https://cdn.discordapp.com/attachments/995676494842040440/996043176039174214/BILLIONER_PFP_010.png
`));




bot.on('sticker', (ctx) => ctx.reply('👍🏼'));

bot.hears('hi', (ctx) => ctx.reply(`🤚🏼`));
bot.hears('Hi', (ctx) => ctx.reply(`🤚🏼`));
bot.hears('hello', (ctx) => ctx.reply(`🤚🏼`));
bot.hears('Hello', (ctx) => ctx.reply(`🤚🏼`));

bot.hears('How are you?', (ctx) => ctx.reply(`I'm fine😁`));
bot.hears('how are you?', (ctx) => ctx.reply(`I'm fine😁`));

bot.hears('Thank', (ctx) => ctx.reply(`You are very welcome😌`));
bot.hears('thank', (ctx) => ctx.reply(`You are very welcome😌`));
bot.hears('Thanks', (ctx) => ctx.reply(`You are very welcome😌`));
bot.hears('thanks', (ctx) => ctx.reply(`You are very welcome😌`));

bot.hears('Goodbye', (ctx) => ctx.reply(`👋🏼`));
bot.hears('goodbye', (ctx) => ctx.reply(`👋🏼`));
bot.hears('Bye', (ctx) => ctx.reply(`👋🏼`));
bot.hears('bye', (ctx) => ctx.reply(`👋🏼`));

bot.launch();
