if (!!window.EventSource) {
  var source = new EventSource('/events');

  source.addEventListener('new_readings', function(e) {
    var data = JSON.parse(e.data);
    document.getElementById("analog1").innerHTML = data.analog1;
    document.getElementById("analog2").innerHTML = data.analog2;
    document.getElementById("analog3").innerHTML = data.analog3;
  }, false);

  source.addEventListener('open', function(e) {
    console.log("Events Connected");
  }, false);

  source.addEventListener('error', function(e) {
    if (e.readyState == EventSource.CLOSED) {
      console.log("Events Disconnected");
    }
  }, false);
}