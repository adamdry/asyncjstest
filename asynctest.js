
async function one() {
    let res = await two()
    console.log('func one: ', res + 2)
}

async function two() {

    return await getFromDb()

    //return 23
}

one()
    .then(() => {
        // ultimate res in here
    })


async function anotherOne() {
    let res = await two()

    console.log('func anotherOne: ', res + 2)
}

// this executre the contents of anotherOne even though we're not handling the then callback
anotherOne()





function getFromDb() {
    return new Promise((resolve) => {

        // blocking stuff
        return resolve(23)
    })
}



fs.readFile('blah.txt', function(contents, fileSize, fileExtension) {

})