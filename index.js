
function getEmailFromDb(username, callback) {

    // let dbLayer = new MyDbLayer()
    //
    // dbLayer.query('SELECT *', function(rows) {
    //
    // })

    // this code MUST be non-blocking
    if (username === 'admin') {
        callback('admin@blah.com')
    } else {
        callback('bob@blah.com')
    }
}

// top level code
getEmailFromDb('admin', (userEmail) => {
    console.log(userEmail)
})