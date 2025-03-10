const crypto = require('crypto')
const data = 'username is Akash'
const password = 'akash@123'

const encrypted = crypto.Hash.encrypt(data, password).toString();
console.log(encrypted)
console.log("Decrypted data")

const decrypted = crypto.Hash.decrypt(encrypted, key)
                                    .toString(crypto.enc.Utf8)
console.log(decrypted)