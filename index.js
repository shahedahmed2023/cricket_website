/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById('theme-button')

// Step 2: Write the callback function
const toggleDarkMode = (event) => {
    // Write your code here
    // This section will run whenever the button is clicked
  document.querySelector('.subbody').classList.toggle("dark-mode");
  }

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function

themeButton.addEventListener('click', toggleDarkMode );
/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/

const participantsContainer = document.querySelector('.rsvp-participants');
const rsvpButton = document.querySelector('#rsvp-button');
let participantCount = 3;

const addParticipant = (person) => {

  const participantEntry = document.createElement("p");
  participantEntry.innerText = `🎉 ${person.name} ${person.message}`;
  participantsContainer.appendChild(participantEntry);

  participantCount += 1;

  const existingCountElement = document.querySelector('#rsvp-count');
  if (existingCountElement) existingCountElement.remove();

  const newCountElement = document.createElement('p');
  newCountElement.id = 'rsvp-count';
  newCountElement.textContent = `⭐ ${participantCount} people have RSVP'd to this event!`;
  participantsContainer.appendChild(newCountElement);
}



/*** Form validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.
const validateForm = (event) => {
   event.preventDefault();
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;

  const person = {
    name:rsvpInputs[0].value,
    email:rsvpInputs[1].value,
    message:rsvpInputs[2].value,
  }

  // // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++)
  {
  // TODO: Inside loop, validate the value of each input
    if (rsvpInputs[i].value.length < 2)
    {
      containsErrors = true;
      rsvpInputs[i].classList.add('error')

    }
  else{
       rsvpInputs[i].classList.remove('error')
     }
  }

     if (!person.email.includes('.com') || !person.email.includes("@")) {
        containsErrors = true;
        rsvpInputs[1].classList.add('error'); 
    } else {
        rsvpInputs[1].classList.remove('error'); 
    }
    // TODO: If no errors, call addParticipant() and clear fields
  if (!containsErrors){
      addParticipant(person);
      toggleModal(person)
      for (let i = 0; i < rsvpInputs.length-1 ; i++){
        rsvpInputs[i].value = '';
      }
    }

  }

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener('click', validateForm)

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    const modal = document.getElementById('success-modal');
    const modalContent = document.getElementById('modalContent');
    modal.style.display = "flex";

    const para = document.createElement("p");
    para.classList.add('modal-text')
    para.innerText = `Hey ${person.name}, thanks for signing up! 
    Can't wait to see you at the cricket match it's going to be epic! 🏏`;
    modalContent.appendChild(para);
    let intervalId = setInterval(animateImage, 500);
    setTimeout(()=>{
      modal.style.display = 'none'
      clearInterval(intervalId)
    },5000)

  
    
}

// TODO: animation variables and animateImage() function
let rotateFactor = 0;
modalImage = document.getElementById('modal-img');

const animateImage = ()=>{
  rotateFactor = rotateFactor === 0 ? -10 : 0
  modalImage.style.transform = `rotate(${rotateFactor}deg)`

}