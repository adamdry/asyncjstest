
function getEmailFromDb(username) {
    return new Promise((resolve) => {

        // this calls .catch
        //return reject('something went wrong')

        // this calls .then

        // this code MUST be non-blocking
        // this is a pretend SELECT statement
        if (username === 'admin') {
            return resolve('admin@blah.com')
        } else {
            return resolve('bob@blah.com')
        }

    })
}

function updateUserBasedOnEmail(userEmail) {

    return new Promise((resolve) => {

        // UPDATE
        if (userEmail === 'admin@blah.com') {
            return resolve(true)
        } else {
            return resolve(false)
        }

    })
}

getEmailFromDb('admin')
    .then((userEmail) => {
        console.log(userEmail)

        userEmail2 = userEmail

        // do some blocking work....
        return updateUserBasedOnEmail(userEmail)

    })
    .then((worked) => {

        // do some more blocking stuff....

        console.log('userEmail2: ', userEmail2)

        console.log('DB Updated?: ', worked)

        return updateUserBasedOnEmail(userEmail2)
    })
    .then((worked) => {
        // do some more blocking stuff....

        console.log('DB Updated again?: ', worked)

        console.log('everything done')
    })
    .catch((error) => {
        console.error('ERROR: ' + error)
    })