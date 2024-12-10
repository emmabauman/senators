import { allSenators } from "../data/senators.js";
console.log(allSenators);

// Tag the HTML elements
const myNavigation = document.querySelector('nav');
const myParent = document.querySelector('#senatorHere');

// Establish photograph path
const photoPath = "https://www.govtrack.us/static/legislator-photos/";

// Create an "All Senators" button
const btnAll = document.createElement('button');
btnAll.textContent = "All Senators";
btnAll.addEventListener('click', () => displaySenators(allSenators));

// Create a "Democrats" button with filter
const btnDemocrat = document.createElement('button');
btnDemocrat.textContent = "Democrats";
btnDemocrat.addEventListener('click', () => {
    const arrayDemocrat = allSenators.filter(senator => senator.party === 'D');
    displaySenators(arrayDemocrat);
});

// Create a "Republicans" button
const btnRepublican = document.createElement('button');
btnRepublican.textContent = "Republicans";
btnRepublican.addEventListener('click', () => {
    const arrayRepublican = allSenators.filter(senator => senator.party === 'R');
    displaySenators(arrayRepublican);
});

// Create a "Females" button
const btnFemale = document.createElement('button');
btnFemale.textContent = "Females";
btnFemale.addEventListener('click', () => {
    const arrayFemale = allSenators.filter(senator => senator.gender === 'F');
    displaySenators(arrayFemale);
});

// Create a "Males" button
const btnMale = document.createElement('button');
btnMale.textContent = "Males";
btnMale.addEventListener('click', () => {
    const arrayMale = allSenators.filter(senator => senator.gender === 'M');
    displaySenators(arrayMale);
});

// Add buttons to page
myNavigation.appendChild(btnAll);
myNavigation.appendChild(btnDemocrat);
myNavigation.appendChild(btnRepublican);
myNavigation.appendChild(btnFemale);
myNavigation.appendChild(btnMale);

// Loop through all the people
function displaySenators(x) {
    myParent.textContent = ""; // Clear previous content
    x.forEach(senator => {
        const myFigure = document.createElement('figure');

        const myImage = document.createElement('img');
        // Use govtrack_id directly for the image path
        myImage.src = `${photoPath}${senator.govtrack_id}-200px.jpeg`;
        myImage.alt = `${senator.first_name} ${senator.last_name}`;

        const myCaption = document.createElement('figcaption');
        myCaption.textContent = `${senator.first_name} ${senator.last_name}`;

        // Create additional information (party, state, state rank)
        const partyStateInfo = document.createElement('p');
        partyStateInfo.textContent = `${senator.party} from ${senator.state}`;

        const stateRankInfo = document.createElement('p');
        stateRankInfo.textContent = `State Rank: ${senator.state_rank}`;

        // Assign party class
        switch (senator.party) {
            case "D":
                myFigure.className = "Democrat";
                break;
            case "R":
                myFigure.className = "Republican";
                break;
            default:
                myFigure.className = "other";
        }

        // Assemble the parts
        myFigure.appendChild(myImage);
        myFigure.appendChild(myCaption);
        myFigure.appendChild(partyStateInfo);
        myFigure.appendChild(stateRankInfo);

        // Attach to the HTML page
        myParent.appendChild(myFigure);
    });
}

// Call the function to display all senators by default
displaySenators(allSenators);
