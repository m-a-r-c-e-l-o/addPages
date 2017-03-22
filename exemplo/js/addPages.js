window.onload = function addHTML(){
  var doc, i, j, pag, xhr;
  j = document.getElementsByTagName("*");
  for(i = 0; i < j.length; i++){
    doc = j[i];
    pag = doc.getAttribute("addPages");
    if(pag){
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          doc.innerHTML = this.responseText;
          doc.removeAttribute("addPages");
          addHTML();
        }
      }      
      xhr.open("GET", pag, true);
      xhr.send();
      return;
    }
  }
}