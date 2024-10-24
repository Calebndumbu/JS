function showMessage(from, text = "no text to output") {
  console.log(from + ":" + text);
}
showMessage("Caleb", "Hello!");
showMessage("Caleb");
showMessage("Caleb", undefined);
