function encodeAndDecodeMessages(){
    buttonCodeDecode = [...document.getElementsByTagName("button")];
        buttonCodeDecode.forEach(btn => btn.addEventListener("click", codeDecode));
        resultEncoded = '';
        resultDecoded = '';
    
        function codeDecode(event) {
            button = event.target;
            if (button.textContent === "Encode and send it") {
                resultEncoded = '';
                divEncode = button.parentNode;
                textAreaInput = divEncode.getElementsByTagName("textarea")[0];
                textToEncode = textAreaInput.value;
                for (each of textToEncode) {
                    newIndex = each.charCodeAt() + 1;
                    resultEncoded += (String.fromCharCode(newIndex));
                }
                textAreaInput.value = '';
                textAreaOutput = document.getElementsByTagName("textarea")[1];
                textAreaOutput.textContent = resultEncoded;
                textToDecode = textAreaOutput.textContent;
            }
            if (button.textContent === "Decode and read it") {
                resultDecoded = '';
                divDecode = button.parentNode;
                for (each of textToDecode) {
                    newIndex1 = each.charCodeAt() - 1;
                    resultDecoded += (String.fromCharCode(newIndex1));
                }
                textAreaOutput.textContent = resultDecoded;
            }
    
        }
    
    }