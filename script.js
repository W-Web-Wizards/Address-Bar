function search() {
    var query = document.getElementById("query").value;
    window.location.href = (query.startsWith('https://') ? '' : 'https://') + query;
}
function keyCode(event) {
  var x = event.keyCode;
  if (x == 13) {
    var query = document.getElementById("query").value;
    window.location.href = (query.startsWith('https://') ? '' : 'https://') + query;
  }
}