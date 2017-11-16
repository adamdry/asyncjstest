
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


async function startsOffNormalFunc() {

    console.log('happy non blocking stuff')

    let userEmail = await getEmailFromDb('admin')

    return 3.12

}

function uisefhseui() {
    return startsOffNormalFunc()
}

// let result2 = uisefhseui()
//     .then((result) => )
// console.log(result2 / 12)


async function updateTheUserTwiceProd() {

    let userEmail = await getEmailFromDb('admin')
     let updateWorked = await updateUserBasedOnEmail(userEmail)
     updateWorked = await updateUserBasedOnEmail(userEmail)
    //await myBusinessLogic(username)

    // do some stuff

    return 'aukfhuseifh'
}

updateTheUserTwiceProd()



async function myBusinessLogic(userEmail) {
    let updateWorked = await updateUserBasedOnEmail(userEmail)
    updateWorked = await updateUserBasedOnEmail(userEmail)
}

async function updateTheUserTwice() {

    // first bit

    let userEmail = await getEmailFromDb('admin')
    console.log(userEmail)

    // second bit

    // do some blocking work....
    let updateWorked = await updateUserBasedOnEmail(userEmail)

    // third bit

    // do some more blocking stuff....

    console.log('userEmail: ', userEmail)

    console.log('DB Updated?: ', updateWorked)

    updateWorked = await updateUserBasedOnEmail(userEmail)

    // fourth bit
    // do some more blocking stuff....

    console.log('DB Updated again?: ', updateWorked)

    console.log('everything done')

}



updateTheUserTwice()
    .then(() => {
        console.log('FINAL THEN')
    })
    .catch((error) => {
        console.error('FINAL ERROR', error)
    })
    .then(() => {
        console.log('FINAL FINALLY')
    })

// getEmailFromDb('admin')
//     .then((userEmail) => {
//         console.log(userEmail)
//
//         userEmail2 = userEmail
//
//         // do some blocking work....
//         return updateUserBasedOnEmail(userEmail)
//
//     })
//     .then((worked) => {
//
//         // do some more blocking stuff....
//
//         console.log('userEmail2: ', userEmail2)
//
//         console.log('DB Updated?: ', worked)
//
//         return updateUserBasedOnEmail(userEmail2)
//     })
//     .then((worked) => {
//         // do some more blocking stuff....
//
//         console.log('DB Updated again?: ', worked)
//
//         console.log('everything done')
//     })
//     .catch((error) => {
//         console.error('ERROR: ' + error)
//     })