const jwt = require("jsonwebtoken")
const zod = require("zod")
const jwtPassword = "ramankurai1234"

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt (username , password){
    const usernameResponse = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)
    if (!usernameResponse.success || !passwordResponse.success) {
        return null
    }

    const signature = jwt.sign({
        username
    }, jwtPassword )

    return signature;
}

function decodeJwt(token) {
    const decoded = jwt.decode(token) 
    if (decoded) {
        return true
    } else {
        return false
    }
}
console.log(decodeJwt(""))// replace empty string with token

function verifyJwt(token){
    const verified = jwt.verify(token , jwtPassword)
    if (verified) {
        return true
    } else {
        return false
    }
}

console.log(verifyJwt)
const ans = signJwt("ramankurai27@gmail.com" , "123456")
console.log(ans)