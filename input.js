const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
  

};

const handleUserInput = function(key) {
    
  if (key === '\u0003') {
    process.exit();
  }

  if (key === '\u0077') {
    connection.write("Move: up");
  }

  if (key === '\u0073') {
    connection.write("Move: down");
  }

  if (key === '\u0061') {
    connection.write("Move: left");
  }

  if (key === '\u0064') {
    connection.write("Move: right");
  }

  if (key === '\u0071') {
    connection.write("Say: I iz hungry!");
  }

  if (key === '\u0065') {
    connection.write("Say: Oh that's delicous!");
  }
  
};

let connection;

module.exports = setupInput;