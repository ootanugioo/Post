var Nub = 1;
function postFunction() {
  var text = document.getElementById("text1").value;
  if (document.getElementById("text1").value != "") {
    if (Nub == 1) {
      var post = document.getElementById("post1");
      post.innerHTML = text;
    } else if (Nub == 2) {
      var post = document.getElementById("reply1");
      post.innerHTML = text;
    } else if (Nub == 3) {
      var post = document.getElementById("reply2");
      post.innerHTML = text;
    }
    Nub++;
    document.getElementById("text1").value = null;
  }
}

function clearFunction() {
  document.getElementById("post1").innerHTML = null;
  document.getElementById("reply1").innerHTML = null;
  document.getElementById("reply2").innerHTML = null;
  Nub = 1;
}
