const bcrypt = require('bcrypt');
const saltRounds = 10;
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.hash(someOtherPlaintextPassword, saltRounds, function(err, hash) {
    console.log(hash);
});