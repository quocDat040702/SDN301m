const express = require("express");
const http = require("http");

const dishRouter = require("./dishRouter");
const promoRouter = require("./promoRouter");
const leaderRouter = require("./leaderRouter");

const hostname = "localhost";
const port = 3000;

const app = express();

app.use(express.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
