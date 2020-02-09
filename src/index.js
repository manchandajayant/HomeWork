console.log("Holla amigo");
function lukeSkywalker() {
  fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("luke").innerHTML = JSON.stringify(
        myJson,
        null,
        " "
      );
    })
    .catch(err => {
      console.log(err);
    });
}
function darthVader() {
  fetch("https://swapi.co/api/people/4/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("button").innerHTML = JSON.stringify(
        myJson,
        null,
        " "
      );
    })
    .catch(err => {
      console.log(err);
    });
}

lukeSkywalker();
