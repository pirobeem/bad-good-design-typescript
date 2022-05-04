const normalArray = [];
const unmodifiedArray: readonly string[] = [];

function main() {
  // No error
  normalArray.push(1);

  // Error: "Property 'push' does not exist on type 'readonly string[]'.ts(2339)"
  unmodifiedArray.push(2);
}
