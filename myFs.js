
class MyFs {

    // constructor() {
    //
    // }

    readFile(filename, callback) {

        // callback = err,contents,filesize

        setTimeout(() => {
            callback(null, 'This is the file contents', 23)
        }, 2000)

    }

    badReadFile(filename, callback) {

        // callback = err,contents,filesize

        setTimeout(() => {
            callback('This is the file contents 22', 22222222)
        }, 2000)

    }

}

module.exports = new MyFs()

//export class MyFs =