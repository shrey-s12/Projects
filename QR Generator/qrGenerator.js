let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let button = document.getElementById("btn");


button.addEventListener('click', () => {
    let text = qrText.value.trim();

    if (text == "") {
        alert("Input is Empty");
        qrText.value = "";
    } else {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrText.value = "";
        imgBox.classList.add("show-img");
    }
});
