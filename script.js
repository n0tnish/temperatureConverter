let celciusInput = document.getElementById("celcius");
let fahrenheitInput = document.getElementById("fahrenheit");

let input = document.getElementsByClassName("input");

for (let i = 0; i < input.length; i++) {
    let input = input[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);

        switch (e.target.name) {
            case "celcius":
                fahrenheitInput.value = (value * 1.8) + 32
                console.log("c");
                break;
            case "fahrenheit":
                console.log("f");
                break;

        }
        console.log(e.target.name + ":" + value);

    });
}