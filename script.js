 /* 1. Spotify Credentials */
const clientId = "cacf68e060cd4310b9b7544ce011731f"; 
const clientSecret = "0c8ff99a97ae4e4cb75e43b53e989d7f";

/* 2. Mapping Moods to Spotify Audio Features*/
const moodMap = {
  happy: { valence: 0.8, energy: 0.8, seed_genres: "pop,happy" },
  sad: { valence: 0.2, energy: 0.3, seed_genres: "acoustic,sad" },
  chill: { valence: 0.5, energy: 0.4, seed_genres: "chill,ambient" },
  energetic: { valence: 0.8, energy: 0.9, seed_genres: "dance,work-out" },
  romance: { valence: 0.7, energy: 0.5, seed_genres: "romance,soul" }
};

/* 3. Get Access Token from Spotify*/
async function getAccessToken() {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + btoa(clientId + ":" + clientSecret)
      },
      body: "grant_type=client_credentials"
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
  }
}

/* 4. Get Recommendations based on Mood and Genre*/
async function getRecommendations(mood, genre) {
  const token = await getAccessToken();
  const config = moodMap[mood];
  
  /* Combine user selected genre with mood-based */
  const searchGenre = genre || config.seed_genres.split(',')[0];

  const url = `https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_genres=${searchGenre}&target_valence=${config.valence}&target_energy=${config.energy}`;

  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const data = await response.json();
  return data.tracks;
}

/* 5. Interactivity: Handle User Clicks*/
async function handleSelection() {
  const selectedMood = document.querySelector('.mood-btn.selected')?.dataset.mood;
  const selectedGenre = document.querySelector('.genre-btn.selected')?.dataset.genre;

  if (!selectedMood) {
    alert("Please select a mood first!");
    return;
  }

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = "<p>Tuning into your vibe... 🎧</p>";

  const tracks = await getRecommendations(selectedMood, selectedGenre);
  displayResults(tracks);
}

/*6. Displaying the Dynamic Results*/
function displayResults(tracks) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ""; // Clear loading message

  if (!tracks || tracks.length === 0) {
    resultsDiv.innerHTML = "<p>No songs found for this vibe. Try another combo!</p>";
    return;
  }

  const ul = document.createElement('ul');
  tracks.forEach(track => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="song-card">
        <img src="${track.album.images[0]?.url}" alt="Cover" class="cover">
        <div class="song-info">
          <span class="song-title">${track.name}</span>
          <span class="song-genre">${track.artists[0].name}</span>
        </div>
      </div>
      <div class="actions">
        <a href="${track.external_urls.spotify}" target="_blank" class="play-btn">Listen on Spotify</a>
      </div>
    `;
    ul.appendChild(li);
  });

  resultsDiv.appendChild(ul);
}

/* 7. Event Listeners for Buttons*/
document.querySelectorAll('.mood-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');
    handleSelection();
  });
});