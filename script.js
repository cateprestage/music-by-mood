 const songs = [
  /* Happy Pop*/
  {title: "Lush Life - Zara Larsson", mood: "happy", genre: "pop", spotify: "https://open.spotify.com/track/0r4SsYcwvd8URat6AS2m6f"}, 
  {title: "Flowers - Miley Cyrus", mood: "happy", genre: "pop", spotify:"https://open.spotify.com/track/0yLdNVWF3Srea0uzk55zFn"}, 
  {title: "Ain't It Fun - Paramore", mood: "happy", genre: "pop", spotify:"https://open.spotify.com/track/1j8z4TTjJ1YOdoFEDwJTQa"}, 

  /*Chill Indie*/
  {title: "Cigarette Daydreams - Cage The Elephant", mood: "chill", genre: "indie", spotify:"https://open.spotify.com/track/3cHyrEgdyYRjgJKSOiOtcS"}, 
  {title: "Sweater Weather - The Neighbourhood", mood: "chill", genre: "indie", spotify:"https://open.spotify.com/track/2QjOHCTQ1Jl3zawyYOpxh6"}, 
  {title: "Say Yes to Heaven - Lana Del Rey", mood: "chill", genre: "indie", spotify:"https://open.spotify.com/track/6GG73Jik4jUlQCkKg9JuGO"}, 
  {title: "Somebody Else - The 1975", mood: "chill", genre: "indie", spotify:"https://open.spotify.com/track/5hc71nKsUgtwQ3z52KEKQk"}, 

  /*Chill Pop*/
  {title: "Fallin' All In You - Shawn Mendes", mood: "chill", genre: "pop", spotify:"https://open.spotify.com/track/4QIo4oxwzzafcBWkKjDpXY"}, 
  {title: "Lovely - Billie Eilish & Khalid", mood: "chill", genre: "pop", spotify:"https://open.spotify.com/track/0u2P5u6lvoDfwTYjAADbn4"}, 
  {title: "Saturday Nights - Khalid", mood: "chill", genre: "pop", spotify:"https://open.spotify.com/track/6Kk4p9w4Gqk9P6J2nE6l6P"}, 
  {title: "Man I Need - Olivia Dean", mood: "chill", genre: "pop", spotify:"https://open.spotify.com/track/3QGsuHI8jO1Rx4JWLUh9jd"}, 

  /* Sad Indie*/
  {title: "The Night We Met - Lord Huron", mood: "sad", genre: "indie", spotify:"https://open.spotify.com/track/0QZ5yyl6B6utIWkxeBDxQN"}, 
  {title: "Landslide - Fleetwood Mac", mood: "sad", genre: "indie", spotify:"https://open.spotify.com/track/5ihS6UUlyQAfmp48eSkxuQ"}, 
  {title: "Ceilings - Lizzy McAlpine", mood: "sad", genre: "indie", spotify: "https://open.spotify.com/track/0HqZX76SFLDz2aW8aiqi7G"}, 
  {title: "iloveitiloveitiloveit - Bella Kay", mood: "sad", genre: "indie", spotify:"https://open.spotify.com/search/iloveitiloveitiloveit%20Bella%20Kay"}, 

  /* Energetic Pop*/
  {title: "Physical - Dua Lipa", mood: "energetic", genre: "pop", spotify:"https://open.spotify.com/track/3AzjcOeAmA57TIOr9zF1ZW"},
  {title: "Blinding Lights - The Weeknd", mood: "energetic", genre: "pop", spotify:"https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"},
  {title: "Hot to Go! - Chappell Roan", mood: "energetic", genre: "pop", spotify:"https://open.spotify.com/track/4xdBrk0nFZaP54vvZj0yx7"},
  {title: "Murder on the Dancefloor - Sophie Ellis-Bextor", mood: "energetic", genre: "pop", spotify:"https://open.spotify.com/track/4tKGFmENO69tZR9ahgZu48"},

  /* Energetic Rock*/
  {title: "Thunderstruck - AC/DC", mood: "energetic", genre: "rock", spotify:"https://open.spotify.com/track/57bgtoPSgt236HzfBOd8kj"},
  {title: "Mr. Brightside - The Killers", mood: "energetic", genre: "rock", spotify:"https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp"},
  {title: "Welcome To The Jungle - Guns N' Roses", mood: "energetic", genre: "rock", spotify:"https://open.spotify.com/track/0G21yYKMZoHa30cYVi1iA8"},
  {title: "Don't Stop Me Now - Queen", mood: "energetic", genre: "rock", spotify:"https://open.spotify.com/track/5T8EDUDqKcs6OSOwEsfqG7"},

  /* Sad Sad */
  {title: "Someone You Loved - Lewis Capaldi", mood: "sad", genre: "sad", spotify:"https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf"},
  {title: "Drivers License - Olivia Rodrigo", mood: "sad", genre: "sad", spotify:"https://open.spotify.com/track/5wANPM4fQCJwkGd4rN57mH"},
  {title: "Falling - Harry Styles", mood: "sad", genre: "sad", spotify:"https://open.spotify.com/track/1ZMiCix7XSAbfAJlEZWMCp"},
  {title: "River of Tears - Alessia Cara", mood: "sad", genre: "sad", spotify:"https://open.spotify.com/track/6GquF9vxjIY3nK0q8K6R2z"},

  /* Romance Love*/
  {title: "Perfect - Ed Sheeran", mood: "romance", genre: "love", spotify:"https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"},
  {title: "Say You Won't Let Go - James Arthur", mood: "romance", genre: "love", spotify:"https://open.spotify.com/track/5uCax9HTNlzGybIStD3vDh"},
  {title: "I Will Always Love You - Whitney Houston", mood: "romance", genre: "love", spotify:"https://open.spotify.com/track/4eHbdreAnSOrDDsFfc4Fpm"},
  {title: "Enchanted - Taylor Swift", mood: "romance", genre: "love", spotify: "https://open.spotify.com/track/3sW3oSbzsfecv9XoUdGs7h"},

  /* Romance Pop*/
  {title: "Love Story - Taylor Swift", mood: "romance", genre: "pop", spotify:"https://open.spotify.com/track/1qrpoAMXodY6895hGKoUpA"},
  {title: "Just the Way You Are - Bruno Mars", mood: "romance", genre: "pop", spotify:"https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ"},
  {title: "DAISIES - Justin Bieber", mood: "romance", genre: "pop", spotify:"https://open.spotify.com/search/daisies%20justin%20bieber"},
  {title: "I Know Love - Tate McRae ft. The Kid LAROI", mood: "romance", genre: "pop", spotify:"https://open.spotify.com/search/i%20know%20love%20tate%20mcrae"},

  /* Sad Country*/
  {title: "Something in the Orange - Zach Bryan", mood: "sad", genre: "country", spotify:"https://open.spotify.com/track/3WMj8moIAXJhHsyLaqIIHI"},
  {title: "Forever After All - Luke Combs", mood: "sad", genre: "country", spotify:"https://open.spotify.com/track/6IBcOGPsniK3Pso1wHIhew"},
  {title: "If I Die Young - The Band Perry", mood: "sad", genre: "country", spotify:"https://open.spotify.com/track/4u5LQ3F9h9h2a5sY6g6i8s"},
  {title: "Choosin' Texas - Ella Langley", mood: "sad", genre: "country", spotify:"https://open.spotify.com/search/ella%20langley%20choosin"}
];

/* 2. Logic to Show Songs */
function recommendSongs() {
  const selectedMoodBtn = document.querySelector('#mood-buttons .selected');
  const selectedGenreBtn = document.querySelector('#genre-buttons .selected');

  if (!selectedMoodBtn || !selectedGenreBtn) {
    return; // Wait for both selections
  }

  const mood = selectedMoodBtn.getAttribute('data-mood');
  const genre = selectedGenreBtn.getAttribute('data-genre');
  const resultsDiv = document.getElementById('results');
  
  resultsDiv.innerHTML = ""; 

  const filteredSongs = songs.filter(song => song.mood === mood && song.genre === genre);

  if (filteredSongs.length === 0) {
    resultsDiv.innerHTML = "<p>No matches found in your list for this combo. Try another!</p>";
    return;
  }

  const ul = document.createElement('ul');
  ul.style.padding = "0";

  filteredSongs.forEach(song => {
    const li = document.createElement('li');
    li.style = "padding: 15px; border-bottom: 1px solid #eee; list-style: none; display: flex; justify-content: space-between; align-items: center; background: white; margin-bottom: 10px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);";
    
    li.innerHTML = `
      <span>🎵 <strong>${song.title}</strong></span>
      <a href="${song.spotify}" target="_blank" style="background: #ff4d4f; color: white; padding: 5px 15px; border-radius: 20px; text-decoration: none; font-size: 0.8em;">Listen</a>
    `;
    ul.appendChild(li);
  });
  resultsDiv.appendChild(ul);
}

/* 3. Event Listeners */
document.addEventListener('DOMContentLoaded', () => {
    // Mood Buttons
    document.querySelectorAll('#mood-buttons button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('#mood-buttons button').forEach(b => b.classList.remove('selected'));
            button.classList.add('selected');
            recommendSongs();
        });
    });

    /* Genre Buttons*/
    document.querySelectorAll('#genre-buttons button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('#genre-buttons button').forEach(b => b.classList.remove('selected'));
            button.classList.add('selected');
            recommendSongs();
        });
    });
});