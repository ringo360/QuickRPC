const { Client } = require("@xhayper/discord-rpc");

const client = new Client({
    clientId: "1158695510052458557"
});

const startTimestamp = new Date();

client.on("ready", () => {
    client.user?.setActivity({
		details: "Testing Nodejs",
        state: "Hello, sekai!",
		startTimestamp,
		largeImageKey: 'chino',
		largeImageText: 'chino',
		instance: false, //TODO jsonでステータスを設定可能+選択可能にする
    });
	console.log('RPC is Ready!');
});

client.login();