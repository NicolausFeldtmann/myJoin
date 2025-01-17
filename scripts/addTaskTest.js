let contacts  = [
  {
   "name": "Max Mustermann",
   "email": "m.´muster@yahoo.de",
   "id": "1"
  },
  {
    "name": "Lutz van Lappen",
    "email": "lappen@gmail.de",
    "id": "2"
  },
  {
    "name": "John Doe",
    "email": "doe@yahoo.de",
    "id": "3"
  },
  {
    "name": "Hans Hase",
    "email": "häschen@gamil.de",
    "id": "4"}
]


function dropDown() {
    document.getElementById("dropMenu").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdownContent");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function selectPriority(element) {
  const boxes = document.querySelectorAll('.prioBox');
  boxes.forEach(box => box.classList.remove('active'));
  element.classList.add('active');
}

function renderContacts() {
  let contentRef = document.getElementById('assigned');
  contentRef.innerHTML = "";
  for (let i = 0; i < contacts-length; i++) {
    let name = contacts[i].name;
    let mail = contacts[i].email;
    let id = contacts[i].id;
    contentRef.innerHTML += getContactsTemplate(name, mail, id) 
  }
}


