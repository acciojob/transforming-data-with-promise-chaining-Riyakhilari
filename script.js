//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
  // Step 1: Get the input value and create a promise that resolves after 2 seconds
  const inputNumber = Number(document.getElementById('ip').value);
  
  // Function to create a promise that resolves after a delay
  function delayResult(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }

  // Promise 1: Resolves after 2 seconds with the number in the input
  delayResult(inputNumber, 2000)
    .then((result) => {
      // Display the result after first operation
      document.getElementById('output').textContent = `Result: ${result}`;

      // Promise 2: Multiply by 2 after 1 second
      return delayResult(result * 2, 1000);
    })
    .then((result) => {
      // Display the result after second operation
      document.getElementById('output').textContent = `Result: ${result}`;

      // Promise 3: Subtract 3 after 1 second
      return delayResult(result - 3, 1000);
    })
    .then((result) => {
      // Display the result after third operation
      document.getElementById('output').textContent = `Result: ${result}`;

      // Promise 4: Divide by 2 after 1 second
      return delayResult(result / 2, 1000);
    })
    .then((result) => {
      // Display the result after fourth operation
      document.getElementById('output').textContent = `Result: ${result}`;

      // Promise 5: Add 10 after 1 second
      return delayResult(result + 10, 1000);
    })
    .then((finalResult) => {
      // Display the final result
      document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      // Handle any errors or rejections
      console.error('Error:', error);
      document.getElementById('output').textContent = 'An error occurred.';
    });
});
