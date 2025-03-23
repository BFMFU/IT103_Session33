function countCharacters() {
    let text = document.getElementById("textInput").value;
    let count = text.length;
    document.getElementById("charCount").innerText = count + " ký tự";
}