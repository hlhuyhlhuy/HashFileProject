let button = document.getElementById("submitFile")
let inputFile = document.getElementById("inputFile")
let hashAlgorithm = document.getElementById("md5");
let hashString = document.getElementById("hash_string")
button.addEventListener("click", function() {
    let formData = new FormData()
    formData.append('file', inputFile.files[0])
    axios.post('/upload', formData).then(response => {
        let hash = response.data
        hashString.value = hash
    }).catch(error => {
        console.log(error)
    })

})