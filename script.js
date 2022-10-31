function search() {
    var query = document.getElementById("query").value;
    if (Boolean(query.includes('://')) === false) {
      query = `https://${query}`
    }
    window.location.href = query;
}
function keyCode(event) {
  var x = event.keyCode;
  if (x == 13) {
    search()
  }
}