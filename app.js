/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */

const NAME = "Vincent";

const CARDS = [
  {
    name: "pfSense Router",
    icon: "ri-router-fill",
    link: "https://pfsense/",
  },
  {
    name: "Home Assistant",
    icon: "ri-home-heart-fill",
    link: "http://homeassistant:8123/",
  },
  {
    name: "Kodi Media PC",
    icon: "ri-play-circle-fill",
    link: "http://vdekoning-ms-7890:8080/",
  },
  {
    name: "TrueNas",
    icon: "ri-save-3-fill",
    link: "http://truenas",
  },
  {
    name: "Sonarr (TV-series)",
    icon: "ri-movie-fill",
    link: "http://vm-werkplek:8989/",
  },
  {
    name: "Radarr (Movies)",
    icon: "ri-film-fill",
    link: "http://vm-werkplek:7878/",
  },
  {
    name: "Qbittorrent",
    icon: "ri-download-cloud-2-fill",
    link: "http://vm-werkplek:8085/",
  },
  {
    name: "SABnzbd",
    icon: "ri-download-cloud-2-fill",
    link: "http://vm-werkplek:8080/",
  },
   
/* Disabled Cards
  {
    name: "Camera front",
    icon: "ri-webcam-fill",
    link: "#",
  },
  {
    name: "Camera back",
    icon: "ri-webcam-fill",
    link: "#",
  },
*/
   
];

/* -------------------------------------------------------- */

/******************/
/* CLOCK FUNCTION */
/******************/

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const updateDate = () => {
  // Create a new Date object and get the complete Date/Time information
  const completeDate = new Date();

  // Time Variables
  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  // Date Variables
  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();
  let currentYear = completeDate.getFullYear();

/* Disabled
  // Update the Time - AM, PM
  currentTime.innerHTML = `${
    currentHour % 12 == 0 ? "12" : currentHour % 12
  }:${currentMinute} ${currentHour > 11 ? "PM" : "AM"}`;
*/

// Update the Time - 24 hour
  currentTime.innerHTML = `${currentHour}:${currentMinute}`;

  // Update the Date
  currentDate.innerHTML = `${DAYS[currentDay]} ${currentNumber}, ${MONTHS[currentMonth]} ${currentYear}`;

  // Create a Loop
  setTimeout(() => {
    updateDate();
  }, 1000);
};

const formatDigit = (digit) => {
  return digit > 9 ? `${digit}` : `0${digit}`;
};

/******************/
/* CARDS FUNCTION */
/******************/

const printCards = () => {
  for (const card of CARDS) {
    let currentCard = document.createElement("a");
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardIcon = document.createElement("i");
    currentCardIcon.classList.add(card.icon);

    // Style the Card Element
    currentCard.classList.add("card");
    currentCard.href = card.link;

    // Style the Icon
    currentCardIcon.classList.add("card__icon");

    // Style the Text
    currentCardText.classList.add("card__name");

    currentCard.append(currentCardIcon);
    currentCard.append(currentCardText);
    cardContainer.appendChild(currentCard);
  }
};

/******************/
/* URL Parameter FUNCTION */
/******************/

        // Script to get the parameter from the url
        const queryString = window.location.search;
        console.log(queryString);
        // Example: https://www.mysite.nl/index.html?nameurl=Vincent
        // value: ?nameurl=Vincent
    
 
        // Script to show the name in an alert box
          const urlParams = new URLSearchParams(queryString);

          const nameUser = urlParams.get('nameurl')
        //  alert(nameUser);
        
        // update the nameUser in the HTML file
        // document.getElementById("nameurl").innerHTML = nameUser;
       

/****************/
/* STARTER CODE */
/****************/

// userName.innerHTML = NAME;
userName.innerHTML = nameUser;
printCards();
updateDate();
