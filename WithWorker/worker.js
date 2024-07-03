// worker.js
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

self.onmessage = function(event) {
  console.log("received msg... start working...");
  const result = fibonacci(event.data);
  self.postMessage(result);
};