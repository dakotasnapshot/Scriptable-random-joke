// Fetch a random dad joke from the icanhazdadjoke.com API.
let jokeURL = "https://icanhazdadjoke.com/";
let request = new Request(jokeURL);
request.headers = { "Accept": "application/json" };
let jokeData = await request.loadJSON();
let jokeText = jokeData.joke;

// Display the joke as a widget.
let widget = createWidget(jokeText);
if (config.runsInWidget) {
  // Show the widget on the Home Screen.
  Script.setWidget(widget);
} else {
  // Preview the widget in the app.
  widget.presentMedium();
}

// This function creates a widget with the provided text.
function createWidget(text) {
  let widget = new ListWidget();
  widget.addText(text);
  return widget;
}
