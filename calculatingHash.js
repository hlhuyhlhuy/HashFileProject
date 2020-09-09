const crypto = require('crypto')


function calculateHash(file, algorithm = 'md5') {
    return new Promise(async(resolve, reject) => {
        let hash = crypto.createHash(algorithm).update(file).digest('hex')
        return resolve(hash)
    })
}





module.exports = calculateHash