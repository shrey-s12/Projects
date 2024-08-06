let input = document.getElementById('inputBox');
        let buttons = document.querySelectorAll('button');

        let str = "";
        // // To create an array of buttons, Because -> forEach loop can't work on buttons
        let arr = Array.from(buttons)

        arr.forEach(button => {
            button.addEventListener('click', (e) => {
                if (e.target.innerHTML == "=") {
                    str = eval(str);
                    input.value = str;
                }
                else if (e.target.innerHTML == "AC") {
                    str = "";
                    input.value = str;
                }
                else if (e.target.innerHTML == "C") {
                    str = str.substring(0, str.length - 1);
                    input.value = str;
                }
                else {
                    str += e.target.innerHTML;
                    input.value = str;
                }

            }, false);
        }, false);