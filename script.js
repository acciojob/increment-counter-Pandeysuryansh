//your JS code here. If required.
 const counterParagraph = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

    
    incrementButton.addEventListener('click', function() {
      
      const currentValue = parseInt(counterParagraph.textContent);

      
      alert("Current (un-incremented) value: " + currentValue);

      
      counterParagraph.textContent = currentValue + 1;
    });