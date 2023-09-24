const { Telegraf } = require("telegraf");

const app = new Telegraf('6351469349:AAF8yamxslAc4j6VxdirYXpUXwZvkmdVC7U');

app.start(async (ctx) => {
    await ctx.reply("Hii, I'm Here");
});

app.launch();

process.once("SIGINT", () => app.stop("SIGINT"));
process.once("SIGTERM", () => app.stop("SIGTERM"));