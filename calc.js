let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    if(buttonText == 'C'){
      screenValue = screen.value;
      screenValue = screenValue.slice(0, screenValue.length - 1);
      screen.value = screenValue;
    }
    else if(buttonText == 'AC'){
      screenValue = '';
      screen.value = screenValue;
    }
    else if(buttonText == '='){
      screen.value = eval(screenValue);
    }
    else{
      screenValue += buttonText;
      screen.value = screenValue;
    }
  })
}