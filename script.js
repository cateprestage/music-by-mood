 /* 1. Spotify Credentials */
const clientId = "cacf68e060cd4310b9b7544ce011731f"; 
const clientSecret = "0c8ff99a97ae4e4cb75e43b53e989d7f";

const moodMap = {
  happy: { valence: 0.8, energy: 0.8, seed_genres: "pop,happy" },
  sad: { valence: 0.2, energy: 0.3, seed_genres: "acoustic,sad" },
  chill: { valence: 0.5, energy: 0.4, seed_genres: "chill,ambient" },
  energetic: { valence: 0.8, energy: 0.9, seed_genres: "dance,work-out" },
  romance: { valence: 0.7, energy: 0.5, seed_genres: "romance,soul" }
};

async function getAccessToken() {
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
}

async function getRecommendations(mood, genre) {
  const token = await getAccessToken();
  const config = moodMap[mood] || moodMap.happy;
  const searchGenre = genre || config.seed_genres.split(',')[0];

  const url = `https://api.spotify.com/v1/recommendations?limit=10&seed_genres=${searchGenre}&target_valence=${config.valence}&target_energy=${config.energy}`;

  const response = await fetch(url, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  const data = await response.json();
  return data.tracks;
}

/* THIS HANDLES THE CLICKS*/ 
async function handleSelection(clickedButton, type) {
  /* Remove 'selected' class from others in the same group*/
  const parentId = type === 'mood' ? '#mood-buttons' : '#genre-buttons';
  document.querySelectorAll(`${parentId} button`).forEach(btn => btn.classList.remove('selected'));
  
  /* Mark this button as selected*/
  clickedButton.classList.add('selected');

  /* Get current selections*/
  const selectedMoodBtn = document.querySelector('#mood-buttons .selected');
  const selectedGenreBtn = document.querySelector('#genre-buttons .selected');

  /* We need at least a mood to search*/
  if (selectedMoodBtn) {
    const mood = selectedMoodBtn.getAttribute('data-mood');
    const genre = selectedGenreBtn ? selectedGenreBtn.getAttribute('data-genre') : null;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<p style='color: #ff4d4f;'>Tuning into your vibe... 🎧</p>";

    try {
        const tracks = await getRecommendations(mood, genre);
        displayResults(tracks);
    } catch (error) {
        resultsDiv.innerHTML = "<p>Error connecting to Spotify. Check your Client ID/Secret!</p>";
        console.error(error);
    }
  }
}

function displayResults(tracks) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ""; 

  if (!tracks || tracks.length === 0) {
    resultsDiv.innerHTML = "<p>No songs found. Try a different combo!</p>";
    return;
  }

  tracks.forEach(track => {
    const songCard = document.createElement('div');
    songCard.style = "background: white; padding: 15px; margin-bottom: 10px; border-radius: 10px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 4px 6px rgba(0,0,0,0.1);";
    
    songCard.innerHTML = `
      <div style="display: flex; align-items: center;">
        <img src="${track.album.images[0]?.url}" style="width: 50px; height: 50px; border-radius: 5px; margin-right: 15px;">
        <div>
          <strong style="display: block;">${track.name}</strong>
          <small>${track.artists[0].name}</small>
        </div>
      </div>
      <a href="${track.external_urls.spotify}" target="_blank" style="background: #1DB954; color: white; padding: 8px 12px; border-radius: 20px; text-decoration: none; font-size: 12px;">Play</a>
    `;
    resultsDiv.appendChild(songCard);
  });
}


document.addEventListener('DOMContentLoaded', () => {
 
    document.querySelectorAll('#mood-buttons button').forEach(button => {
        button.addEventListener('click', () => handleSelection(button, 'mood'));
    });

 
    document.querySelectorAll('#genre-buttons button').forEach(button => {
        button.addEventListener('click', () => handleSelection(button, 'genre'));
    });
});