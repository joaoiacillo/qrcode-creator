const dataInput = document.getElementById("data");
const qrCode = document.getElementById("qrcode");
const optionInput = document.getElementById("option");
const sizeInput = document.getElementById("size");

const DEFAULT_DATA = "Default";
const DEFAULT_SIZE = "150x150";
const URL_BASE = "https://api.qrserver.com/v1/create-qr-code/";

var data = DEFAULT_DATA;
var size = DEFAULT_SIZE;

function makeQRCodeURL() {
    return `${URL_BASE}?data=${data}&size=${size}`;
}

function makeQRCodeData() {
    let data = dataInput.value || DEFAULT_DATA;
    return optionInput.value + data;
}

function updateQRCodeURL() {
    var url = makeQRCodeURL();
    qrCode.src = url;
}

function updateQRCode() {
    data = makeQRCodeData();
    updateQRCodeURL();
}

function getDownloadFileName() {
    var now = Date.now();
    return `${now}.png`;
}

dataInput.addEventListener("input", updateQRCode);
optionInput.addEventListener("input", updateQRCode);

sizeInput.addEventListener("input", () => {
    size = sizeInput.value;
    updateQRCodeURL();
});
