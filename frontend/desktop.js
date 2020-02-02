$(document).ready(function() {
  $.get("http://127.0.0.1:3000/studentColorMapping", function(res) { // res is a string here
    const PARENT = $("#parent-container");
    const OBJ = JSON.parse(res); // Turns res into an JS object
    for(let color in OBJ) { // object key traversal method. traverse the keys. in => obj keys. of => iterables (arrays and strings)
      const CHILD = $("<div></div>");
      CHILD.css("background-color", color); // using css specific property values as a an object property name
      CHILD.text(OBJ[color]); // dot notation doesn't work because it is a string 'red' in this case
      PARENT.append(CHILD);
    }
  });
});