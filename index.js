const express = require('express');
const app = express();
const emojiRouter = require('./routes/emojiRouter');
app.use('/emojis', emojiRouter);

app.listen(1235, () => {
	console.log('server running')
})