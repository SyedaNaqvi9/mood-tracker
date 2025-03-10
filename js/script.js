let dateDisplay = document.querySelector("#dateDisplay");
let moodValue = document.querySelector("#mood");
let btn = document.querySelector("#saveMood");
let list = document.querySelector("#moodHistory");
let clearBtn = document.querySelector("#clearMood");
let body = document.querySelector("body");
let quote = document.querySelector("#quote");
let playlistContainer = document.querySelector("#playlist");
let footer = document.querySelector("footer");

const today = new Date().toLocaleString();
dateDisplay.textContent = `📅 Today's Date: ${today}`;

let moodHistory = JSON.parse(localStorage.getItem("moods")) || [];

moodHistory.forEach(mood => {
    let li = document.createElement("li");
    list.appendChild(li);
    li.textContent = mood;
})

let happyQuote = [`\"Happiness is the best makeup!"`, `\"Happiness is a state of mind!"`,  `\"If you want to be happy, be!"`];
let sadQuote = [`\"Learning is a gift. Even when pain is your teacher!"`, `\"Sadness is but a wall between two gardens!"`,  `\"Sometimes it takes sadness to know happiness!"`];
let angryQuote = [`\"When anger rises, think of the consequences!"`, `\"The best answer to anger is silence!"`,  `\"A man that studieth revenge keeps his own wounds green!"`];
let tiredQuote = [`\"Breathe. It's just a bad day, not a bad life!"`, `\"It's okay to be a glowstick; sometimes we need to break before we shine!"`,  `\"Fatigue is the price we pay for the work we have put in!"`];
let excitedQuote = [`\"Life is too short to not be excited about something!"`, `\"The best way to predict your future is to create it.!"`,  `\"Dance like nobody's watching, sing like no one's listening!"`];

const playlists = {
    "Happy": "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",
    "Sad": "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
    "Angry": "https://open.spotify.com/embed/playlist/37i9dQZF1DWY6tYEFs22tT",
    "Tired": "https://open.spotify.com/embed/playlist/37i9dQZF1DX3Ogo9pFvBkY",
    "Excited": "https://open.spotify.com/embed/playlist/37i9dQZF1DX8FwnYE6PRvL"
};

let index;

btn.addEventListener("click", () => {
    let mood = moodValue.value;
    if (playlists[mood]) {
        playlistContainer.innerHTML = `<iframe src="${playlists[mood]}" width="100%" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    } else {
        playlistContainer.innerHTML = `<p>No playlist available for this mood.</p>`;
    }
});

moodValue.addEventListener("change", () => {
        btn.disabled = false;
})

btn.addEventListener("click", () => {
    if(moodValue.value == ""){
        alert("Please select a mood");
        btn.style.display = none;
    }

    if(moodValue.value == "Happy"){
        body.style.backgroundImage = "url('https://syedanaqvi9.github.io/mood-tracker/images/happy.png')";
          
        index = Math.floor(Math.random() * happyQuote.length);
        quote.textContent = happyQuote[index];

    }
    else if(moodValue.value == "Sad"){
        body.style.backgroundImage = "url('https://syedanaqvi9.github.io/mood-tracker/images/sad.png')";
        index = Math.floor(Math.random() * sadQuote.length);
        quote.textContent = sadQuote[index];

    } else if(moodValue.value == "Angry"){
        body.style.backgroundImage = "url('https://syedanaqvi9.github.io/mood-tracker/images/angry.png')";
        index = Math.floor(Math.random() * angryQuote.length);
        quote.textContent = angryQuote[index];

    }
    else if(moodValue.value == "Tired"){
        body.style.backgroundImage = "url('https://syedanaqvi9.github.io/mood-tracker/images/tired.png')";
        index = Math.floor(Math.random() * tiredQuote.length);
        quote.textContent = tiredQuote[index];

    } 
    else if(moodValue.value == "Excited"){
        body.style.backgroundImage = "url('https://syedanaqvi9.github.io/mood-tracker/images/excited.png')";
        index = Math.floor(Math.random() * excitedQuote.length);
        quote.textContent = excitedQuote[index];
        
    } 

    let currentMood = `${today} - ${moodValue.value}`;
    moodHistory.push(currentMood);

    

    let listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.textContent = currentMood;

    localStorage.setItem("moods", JSON.stringify(moodHistory));

   
})

clearBtn.addEventListener("click", () => {
    let confirmClear = confirm("Are you sure you want to clear all the moods?")
    if(confirmClear){
    localStorage.removeItem("moods");
    moodHistory = [];
    list.innerHTML = "";
    body.style.backgroundImage = "url('https://syedanaqvi9.github.io/mood-tracker/images/mood-finder.png')";
    quote.textContent = "Today's Quote";
    moodValue.value = "";
    playlistContainer.innerHTML = "";


    }

})




