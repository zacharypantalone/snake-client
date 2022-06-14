
const net = require("net");
// This function establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.2.18',
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("", data);
  });

  // this inteprets incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

connect();

module.exports = {connect};