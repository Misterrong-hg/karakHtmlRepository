app.post('/index.html', (req, res) => {
return res.send(req.body);
console.log('Data: ', req.body,first);
});
function myFunction() {

    var contactData = [];
    var fName = document.getElementById("name").value;
    var pho = document.getElementById("tel").value;
    var adDre = document.getElementById("code").value;
    var stuObj = {name:fName, tel:pho, code:adDre};
    
    localStorage.contactRecord = JSON.stringify(stuObj);
    // console.log(localStorage.contactRecord);
    
    var jsonString = localStorage.getItem("contactRecord");

    var retrieveObject = JSON.parse(jsonString);
    // console.log(retrieveObject.email);

    return retrieveObject.email;
}