// Smooth Scrolling
$('.nav-links a').on('click', function (event) {
   if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
         {
            scrollTop: $(hash).offset().top,
         },
         800,
         function () {
            window.location.hash = hash;
         }
      );
   }
});

//  SELECTORS
const photosPage = document.querySelector('.more-photos');
const myForm = document.querySelector('form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const phoneInput = document.querySelector('.phone-input');
const messageInput = document.querySelector('.message-input');
const searchInput = document.querySelector('.search-input');
const autocompletePanel = document.querySelector('.autocomplete-panel');

// EVENTS
myForm.addEventListener('submit', submitForm);
searchInput.addEventListener('keyup', autocomplete);

// FUNCTIONS
function submitForm(e) {
   e.preventDefault();
   document.querySelector('.submit-btn').style.outline = 'none';

   if (nameInput.value === '') {
      nameInput.classList.add('error');
      nameInput.placeholder = 'Please Enter Your Name';
   } else {
      nameInput.classList.replace('error', 'success');
   }

   if (emailInput.value === '') {
      emailInput.classList.add('error');
      emailInput.placeholder = 'Please Enter Your email';
   } else {
      emailInput.classList.replace('error', 'success');
   }

   if (phoneInput.value === '') {
      phoneInput.classList.add('error');
      phoneInput.placeholder = 'Please Enter Your phone';
   } else {
      phoneInput.classList.replace('error', 'success');
      //    }

      //    // convert them from html collection to an array
      if (
         nameInput.value === '' ||
         emailInput.value === '' ||
         phoneInput.value === ''
      ) {
         const inputFields = myForm.getElementsByTagName('input');
         //       // grab all the div in it
         Array.from(inputFields).forEach((inputField) => {});
      } else {
         window.location = 'email confirmation.html';
      }
   }
}

function autocomplete(e) {
   const inputText = e.target.value;

   autocompletePanel.innerHTML = '';

   const countriesArray = [
      {
         name: 'Argentina',
      },
      {
         name: 'Boston',
      },
      {
         name: 'Canada',
      },
      {
         name: 'Cancun',
      },
      {
         name: 'India',
      },
      {
         name: 'Korea',
      },
      {
         name: 'Mexico',
      },
      {
         name: 'New York',
      },
      {
         name: 'Nigeria',
      },
      {
         name: 'South Africa',
      },
      {
         name: 'Togo',
      },
      {
         name: 'Virginia',
      },
      {
         name: 'United State',
      },
      {
         name: 'USA',
      },
   ];

   const suggestions = countriesArray.filter((country) => {
      return country.name.toLowerCase().startsWith(inputText);
   });

   suggestions.forEach((suggestedCountries) => {
      // Create a new div
      const newDiv = document.createElement('div');

      newDiv.innerHTML = suggestedCountries.name;

      autocompletePanel.appendChild(newDiv);
   });

   if (inputText === '') {
      autocompletePanel.innerHTML = '';
   }
}
