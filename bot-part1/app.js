const { Telegraf } = require("telegraf");
const axios = require('axios');

const app = new Telegraf('6649458926:AAGvGcmj8jQExYnUMctucbm_aTGlb2y_7D8');

// app.use((ctx) => {
//     ctx.reply("Hii Human!!")
// });

app.start((ctx) => {
    ctx.reply("Bot telah dimulai")
});

app.help((ctx) => {
    ctx.reply("Bot dapat melakukan perintah berikut\n - /start\n - /help - \nsend Sticker");
});

app.on("sticker", (ctx) => {
    return ctx.reply('Cool Sticker!!')
});

app.hears("hello", async (ctx) => {
    await ctx.reply("Hello kembali Bapak, apa kabar anda?")
});

app.command("say", async (ctx) => {
    msg = ctx.message.text;
    msgArray = msg.split(' ');

    console.log(msgArray);
    msgArray.shift();
    console.log(msgArray);

    newMsg = msgArray.join(' ');

    ctx.reply(newMsg);
});


app.command("fortune", async (ctx) => {
    url = "http://yerkee.com/api/fortune";

    axios.get(url) .then((res) => {
        ctx.reply(res.data.fortune);
    });
});


app.launch();

process.once("SIGINT", () => app.stop("SIGINT"));
process.once("SIGTERM", () => app.stop("SIGTERM"));