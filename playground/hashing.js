const {SHA256} = require("crypto-js");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'Mueen1223';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$Oe11BXbV2m.mbEVCotAes.ObYZ2WeMI0z/yCaDJlbI9dQa2RS.5oq'
bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res)
});

// var data = {
//     id: 5
// };
//
// var token = jwt.sign(data, 'myId');
// console.log(token);
//
// var decoded = jwt.verify(token, 'myId');
// console.log('decoded', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
