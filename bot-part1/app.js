const { Telegraf } = require("telegraf");

const app = new Telegraf('6649458926:AAGvGcmj8jQExYnUMctucbm_aTGlb2y_7D8');

app.use((ctx) => {
    ctx.reply("Hii Human!!")
});

app.launch();

process.once("SIGINT", () => app.stop("SIGINT"));
process.once("SIGTERM", () => app.stop("SIGTERM"));