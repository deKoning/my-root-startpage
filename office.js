/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */

const NAME = "Worker";

const CARDS = [
  {
    name: "Intranet",
    icon: "ri-book-read-line",
    link: "https://stichtingmenzisbeheer.sharepoint.com/sites/intranet/",
  },
  {
    name: "Requirements",
    icon: "ri-list-ordered",
    link: "http://tfs.loods2.org:8080/tfs/",
  },
  {
    name: "Environments",
    icon: "ri-link",
    link: "https://stichtingmenzisbeheer.sharepoint.com/sites/iv-classic/commercie/teamweb/SitePages/Linkjes-ACC.aspx",
  },
  {
    name: "Mockups",
    icon: "ri-pencil-ruler-line",
    link: "https://projects.invisionapp.com/d/main?origin=v7#/projects",
  },
  {
    name: "Office online",
    icon: "ri-building-line",
    link: "https://www.office.com/apps?auth=2&home=1",
  },
  {
    name: "Draw.io",
    icon: "ri-bubble-chart-line",
    link: "https://app.diagrams.net/",
  },

  
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

/****************/
/* STARTER CODE */
/****************/

userName.innerHTML = NAME;
printCards();
updateDate();
