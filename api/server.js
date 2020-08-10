const express = require("express");

const AccountsRouter = require("../accounts/Accounts-router")

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h2> Node db 1 Project is UP! </h2>`);
})

server.use("/api/accounts", AccountsRouter)

module.exports = server;
