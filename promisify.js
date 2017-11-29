let myFs = require("./myFs")
const BB = require('bluebird')

BB.promisifyAll(myFs);

// name the anon function
(async myReadFileAsync => {
    const contents = await myFs.readFileAsync('filename.txt')
    console.log('promisifyAll: ', contents)
})()


myFs.readFile('filename.txt', (err, contents, filesize) => {
    console.log('contents', contents)
    console.log('filesize', filesize)
})

const readFileAsync = BB.promisify(myFs.readFile, {multiArgs: true})

readFileAsync('filename.txt')
    .then((callbackParams) => {
        console.log('readFileAsync contents: ', callbackParams[0])
        console.log('readFileAsync fileSize: ', callbackParams[1])
    })
    .catch((error) => {
        console.error('There was an ERROR', error)
    })


function badReadFileAsync(filename) {
    return new Promise((resolve, reject) => {
        myFs.badReadFile(filename, (contents, filesize) => {
            // no error info
            resolve([contents, filesize])
        })
    })
}

badReadFileAsync('filename.txt')
    .then((callbackParams) => {
        console.log('badReadFileAsync contents: ', callbackParams[0])
        console.log('badReadFileAsync fileSize: ', callbackParams[1])
    })

async function doLoadsOfFunkyStuff() {
    let callbackParams = await badReadFileAsync('filename.txt')

    console.log('doLoadsOfFunkyStuff contents: ', callbackParams[0])
    console.log('doLoadsOfFunkyStuff fileSize: ', callbackParams[1])

    callbackParams = await badReadFileAsync('filename.txt')

    console.log('doLoadsOfFunkyStuff contents: ', callbackParams[0])
    console.log('doLoadsOfFunkyStuff fileSize: ', callbackParams[1])

    callbackParams = await badReadFileAsync('filename.txt')

    console.log('doLoadsOfFunkyStuff contents: ', callbackParams[0])
    console.log('doLoadsOfFunkyStuff fileSize: ', callbackParams[1])
}

doLoadsOfFunkyStuff()
