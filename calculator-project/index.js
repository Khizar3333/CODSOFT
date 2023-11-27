function appendToScreen(value) {
    const screen = document.getElementById('screen');
    screen.value += value;
  }
  function clearScreen() {
    const screen = document.getElementById('screen');
    screen.value = '';
}
function removeLastCharacter() {
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, screen.value.length - 1);
  }
  
          function compute() {
              const expression = document.getElementById('screen').value;
              try {
                  const result = eval(expression);
                  document.getElementById('screen').value = result;
              } catch (error) {
                  document.getElementById('screen').value = 'Error';
              }
          }