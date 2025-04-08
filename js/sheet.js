fetch("https://script.google.com/macros/s/AKfycbwQxLfj0i90-QKzQxOS8AA0y7I2CWuMWrHRdPFqTanbaOZI49yI1vlvikf1NeP46Wkefw/exec")
            .then(response => response.text())
            .then(data => document.getElementById("data").innerText = data)
            .catch(error => console.error(error));
