const commandInput = document.querySelector('#command-input');
    const outputDiv = document.querySelector('#output');

    function processCommand() {
      const command = commandInput.value.trim();
      commandInput.value = '';
      if (command === '') {
        return;
      }

      if (command === 'clear') {
        outputDiv.textContent = '';
        return;
      }

      let output = '';
      switch (command) {
        case 'help':
          output = 'Available commands:\nhelp - show this help text.\nabout - learn about this website.\nprojects - view my projects';
          break;
        case 'about':
          output = 'This website was created by Rintaro Fujita in 2023 using HTML, CSS, and JavaScript.';
          break;
          case 'portfolio':
          window.open("#", "_blank");;
          break;
        case 'rintarofujita':
        window.location.href = 'photo.html'
          break;
        case 'back':
        window.history.back();
          break;
        default:
          output = `'${command}' is not a recognized command. Type 'help' for a list of available commands.`;
          break;
      }

      outputDiv.innerHTML += `\n> ${command}<br>${output}<br>`;
      outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    commandInput.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        processCommand();
      }
    });