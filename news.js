var tablinks=document.getElementsByClassName("tab-links");
        var tabcontens=document.getElementsByClassName("tab-contens");
        var sidemenu=document.getElementById("sidemenu")
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link")
            }
            for(tabconten of tabcontens){
                tabconten.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")
        }
        function openmenu(){
            sidemenu.style.right="0"
        }
        function closemenu(){
            sidemenu.style.right="-200px"
        }
  
const msg=document.getElementById("msg");




        

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwyESx-CHi3uua5MdkBBGi-iPaI88s8KSZABZ0sVaghswTR3-gPE0fzex4B8I3YJ_7Cag/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response)
    msg.innerHTML="Message sent successfully!"
    setTimeout(function(){
        msg.innerHTML=""
    },5000)
form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })
