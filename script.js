
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

/* ---------------- Form to Sheets ---------------- */
const scriptURL = 'https://script.google.com/macros/s/AKfycbyVKx_L0jCPpOWi9w6FEgOBWuhMHB7GvcE7tfIzKTkePwjN0ytQddQVntlxOCkyrjh3/exec'

    const form = document.forms['submit-to-google-sheet']
    
    const msg = document.getElementById("msg")
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML = "Message sent!"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })