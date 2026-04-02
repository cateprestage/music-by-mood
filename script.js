 let currentMood = "";
let currentGenre = "";
let selectedMoodBtn = null;
let selectedGenreBtn = null;

const songs = [
    /*Happy, Pop*/
    {"title":"Lush Life", "artist":"Zara Larsson", "mood":"happy", "genre":"pop", "spotify":"https://open.spotify.com/track/0r4SsYcwvd8URat6AS2m6f"},
    {"title":"Flowers", "artist":"Miley Cyrus", "mood":"happy", "genre":"pop", "spotify":"https://open.spotify.com/track/0yLdNVWF3Srea0uzk55zFn"},
    {"title":"Ain't It Fun", "artist":"Paramore", "mood":"happy", "genre":"pop", "spotify":"https://open.spotify.com/track/1j8z4TTjJ1YOdoFEDwJTQa"},
    {"title":"American Girls", "artist":"Harry Styles", "mood":"happy", "genre":"pop", "spotify":"https://open.spotify.com/track/7gtG45ieyQzKtNKobfLd49?si=065a4cd08e144208"},
    
    /*Chill, Indie*/
    {"title":"Cigarette Daydreams", "artist":"Cage The Elephant", "mood":"chill", "genre":"indie", "spotify":"https://open.spotify.com/track/6jHvX8ZnHKC1PnrPMJ0Emt?si=9cfff91ed2d246c6"},
    {"title":"Sweater Weather", "artist":"The Neighbourhood", "mood":"chill", "genre":"indie", "spotify":"https://open.spotify.com/track/0cQVqPuHQP4KEwc7ZUQmj6?si=0aaff161e4cb45d6"},
    {"title":"Say Yes to Heaven", "artist":"Lana Del Rey", "mood":"chill", "genre":"indie", "spotify":"https://open.spotify.com/track/6GGtHZgBycCgGBUhZo81xe?si=25f975c815a94f93"},
    {"title":"Somebody Else", "artist":"The 1975", "mood":"chill", "genre":"indie", "spotify":"https://open.spotify.com/track/4m0q0xQ2BNl9SCAGKyfiGZ?si=02b447bcdda443a4"},
    {"title":"Meant To Be", "artist":"Ber & Charlie Oriain", "mood":"chill", "genre":"indie", "spotify":"https://open.spotify.com/track/0wxGIpOZbDR4RGy1sh3XhR?si=4b87626c531f43c2"},

    /* Chill, Pop */
    {"title":"Fallin' All In You", "artist":"Shawn Mendes", "mood":"chill", "genre":"pop", "spotify":"https://open.spotify.com/track/5EYBryPOgIEPB7r5QIy6eG?si=0f2ca676fd46431a"},
    {"title":"Lovely", "artist":"Billie Eilish & Khalid", "mood":"chill", "genre":"pop", "spotify":"https://open.spotify.com/track/0u2P5u6lvoDfwTYjAADbn4?si=1554359b78dc4a4d"},
    {"title":"Saturday Nights", "artist":"Khalid", "mood":"chill", "genre":"pop", "spotify":"https://open.spotify.com/track/5kfNriitmkNE8mUbZ7gbq8?si=ff7e9439ce714cb6"},
    {"title":"Man I Need", "artist":"Olivia Dean", "mood":"chill", "genre":"pop", "spotify":"https://open.spotify.com/track/1qbmS6ep2hbBRaEZFpn7BX?si=dcad8b79281c40e2"},
    
    /* Sad, Indie */
    {"title":"The Night We Met", "artist":"Lord Huron", "mood":"sad", "genre":"indie", "spotify":"https://open.spotify.com/track/5yJaXWIErrrsjQ3J0eR5aK?si=9a0af93d3f6e4f8e"},
    {"title":"Landslide", "artist":"Fleetwood Mac", "mood":"sad", "genre":"indie", "spotify":"https://open.spotify.com/track/5ihS6UUlyQAfmp48eSkxuQ?si=521be76888954eb2"},
    {"title":"Ceilings", "artist":"Lizzy McAlpine", "mood":"sad", "genre":"indie", "spotify":"https://open.spotify.com/track/2L9N0zZnd37dwF0clgxMGI?si=81c8890c6f0344e5"},
    {"title":"iloveitiloveitiloveit", "artist":"Bella Kay", "mood":"sad", "genre":"indie", "spotify":"https://open.spotify.com/track/5IMpnpD0tQVcqWlVIgtAtV?si=8f7795dca7644039"},
    {"title":"Haunt Me", "artist":"Yana", "mood":"sad", "genre":"indie", "spotify":"https://open.spotify.com/track/5zmLRdgheUjzeeL6697YK1?si=0af9824a52654d69"},
    {"title":"A Little Time", "artist":"Charlie Oriain", "mood":"sad", "genre":"indie", "spotify":"https://open.spotify.com/track/6N3OVYTX4ceap1TxWVTq7T?si=acf2af929fa14cce"},

    /* Sad, Pop */
    {"title":"Someone You Loved", "artist":"Lewis Capaldi", "mood":"sad", "genre":"pop", "spotify":"https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf?si=c05f2110e6af4513"},
    {"title":"Drivers License", "artist":"Olivia Rodrigo", "mood":"sad", "genre":"pop", "spotify":"https://open.spotify.com/track/5wANPM4fQCJwkGd4rN57mH?si=2127124c9a2549ef"},
    {"title":"Falling", "artist":"Harry Styles", "mood":"sad", "genre":"pop", "spotify":"https://open.spotify.com/track/1ZMiCix7XSAbfAJlEZWMCp?si=4cd92de0aec1451a"},
    {"title":"River of Tears", "artist":"Alessia Cara", "mood":"sad", "genre":"pop", "spotify":"https://open.spotify.com/track/3ArYVrRb0lDBLzuJJqIXzC?si=b1504173b4df469d"},
    
    /* Sad, Country */
    {"title":"Something in the Orange", "artist":"Zach Bryan", "mood":"sad", "genre":"country", "spotify":"https://open.spotify.com/track/3WMj8moIAXJhHsyLaqIIHI?si=560109ba564c40b6"},
    {"title":"Forever After All", "artist":"Luke Combs", "mood":"sad", "genre":"country", "spotify":"https://open.spotify.com/track/6IBcOGPsniK3Pso1wHIhew?si=294dafed5489469f"},
    {"title":"If I Die Young", "artist":"The Band Perry", "mood":"sad", "genre":"country", "spotify":"https://open.spotify.com/track/4aY0tZIaboefmkBEsjAovI?si=ed75dfd840ba4b2a"},
    {"title":"Choosin' Texas", "artist":"Ella Langley", "mood":"sad", "genre":"country", "spotify":"https://open.spotify.com/track/65DbTqJKhbwqYbZ1Okr0rc?si=922f79d3c6774cb9"},
    
    /* Energetic, Pop */
    {"title":"Physical", "artist":"Dua Lipa", "mood":"energetic", "genre":"pop", "spotify":"https://open.spotify.com/track/3AzjcOeAmA57TIOr9zF1ZW?si=67cc3602d95749b8"},
    {"title":"Blinding Lights", "artist":"The Weeknd", "mood":"energetic", "genre":"pop", "spotify":"https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?si=f8b628a6279b459a"},
    {"title":"Hot to Go!", "artist":"Chappell Roan", "mood":"energetic", "genre":"pop", "spotify":"https://open.spotify.com/track/4xdBrk0nFZaP54vvZj0yx7?si=7aa94c45356145c5"},
    {"title":"Murder on the Dancefloor", "artist":"Sophie Ellis-Bextor", "mood":"energetic", "genre":"pop", "spotify":"https://open.spotify.com/track/4tKGFmENO69tZR9ahgZu48?si=a6e924678e3340c5"},
    
    /* Energetic, Rock */
    {"title":"Thunderstruck", "artist":"AC/DC", "mood":"energetic", "genre":"rock", "spotify":"https://open.spotify.com/track/57bgtoPSgt236HzfBOd8kj?si=74a20f42f2e1481b"},
    {"title":"Mr. Brightside", "artist":"The Killers", "mood":"energetic", "genre":"rock", "spotify":"https://open.spotify.com/track/003vvx7Niy0yvhvHt4a68B?si=3547e10e30c6494f"},
    {"title":"Welcome To The Jungle", "artist":"Guns N' Roses", "mood":"energetic", "genre":"rock", "spotify":"https://open.spotify.com/track/0G21yYKMZoHa30cYVi1iA8?si=e531cfd4d90c46bf"},
    {"title":"Don't Stop Me Now", "artist":"Queen", "mood":"energetic", "genre":"rock", "spotify":"https://open.spotify.com/track/6e3y6sczcHWehxZo528OZ7?si=97bc00d02d0c47e8"},
    
    /* Romance, Love */
    {"title":"Perfect", "artist":"Ed Sheeran", "mood":"romance", "genre":"love", "spotify":"https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v?si=6bf50736c53d4351"},
    {"title":"Say You Won't Let Go", "artist":"James Arthur", "mood":"romance", "genre":"love", "spotify":"https://open.spotify.com/track/5uCax9HTNlzGybIStD3vDh?si=f689dc18741d4b5e"},
    {"title":"I Will Always Love You", "artist":"Whitney Houston", "mood":"romance", "genre":"love", "spotify":"https://open.spotify.com/track/4eHbdreAnSOrDDsFfc4Fpm?si=de9d4404c8c047bd"},
    {"title":"Enchanted", "artist":"Taylor Swift", "mood":"romance", "genre":"love", "spotify":"https://open.spotify.com/track/04S1pkp1VaIqjg8zZqknR5?si=9aa278314c1c48a6"},
    
    /* Romance, Pop */
    {"title":"Love Story", "artist":"Taylor Swift", "mood":"romance", "genre":"pop", "spotify":"https://open.spotify.com/track/1D4PL9B8gOg78jiHg3FvBb?si=14ce607aaf914370"},
    {"title":"Just the Way You Are", "artist":"Bruno Mars", "mood":"romance", "genre":"pop", "spotify":"https://open.spotify.com/track/47Slg6LuqLaX0VodpSCvPt?si=fe7992c6aee84122"},
    {"title":"DAISIES", "artist":"Justin Bieber", "mood":"romance", "genre":"pop", "spotify":"https://open.spotify.com/track/5BZsQlgw21vDOAjoqkNgKb?si=644aed5ddbdf4a68"},
    {"title":"I Know Love", "artist":"Tate McRae", "mood":"romance", "genre":"pop", "spotify":"https://open.spotify.com/track/57DTKgkc3CjkUxg0urNl1u?si=d810a577420942ee"},

    /* Happy, Country */
    {"title":"Take Me Home, Country Roads", "artist":"John Denver", "mood":"happy", "genre":"country", "spotify":"https://open.spotify.com/track/1QbOvACeYanja5pbnJbAmk?si=b5ee69628e314afd"},
    {"title":"Cruise", "artist":"Florida Georgia Line", "mood":"happy", "genre":"country", "spotify":"https://open.spotify.com/track/1aS5oaBNG6wsf186ZZMCzX?si=b749c775c6c84d97"},   
    {"title":"Austin", "artist":"Dasha", "mood":"happy", "genre":"country", "spotify":"https://open.spotify.com/track/2uqYupMHANxnwgeiXTZXzd?si=2fb78d857dfe415c"},
    {"title":"9 to 5", "artist":"Dolly Parton", "mood":"happy", "genre":"country", "spotify":"https://open.spotify.com/track/4w3tQBXhn5345eUXDGBWZG?si=9476909cee5648c5"},
    
    /* Happy, Rock */
    {"title":"Shut Up and Dance", "artist":"WALK THE MOON", "mood":"happy", "genre":"rock", "spotify":"https://open.spotify.com/track/4kbj5MwxO1bq9wjT5g9HaA?si=3768924407d84341"},
    {"title":"You Make My Dreams", "artist":"Daryl Hall & John Oates", "mood":"happy", "genre":"rock", "spotify":"https://open.spotify.com/track/4o6BgsqLIBViaGVbx5rbRk?si=38d3136ebd2f4bcb"},
    {"title":"The Best", "artist":"Tina Turner", "mood":"happy", "genre":"rock", "spotify":"https://open.spotify.com/track/4OeFQtRyT7vsLnRTv7t8YT?si=bf8b9fc82cd94f0a"},
    {"title":"Walking On Sunshine", "artist":"Katrina & The Waves", "mood":"happy", "genre":"rock", "spotify":"https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0?si=b31891fa4896482a"},
   
    /* Happy, Indie */
    {"title":"Dog Days Are Over", "artist":"Florence + The Machine", "mood":"happy", "genre":"indie", "spotify":"https://open.spotify.com/track/456WNXWhDwYOSf5SpTuqxd?si=8503d306b2bf46ac"},
    {"title":"Birds of a Feather", "artist":"Billie Eilish", "mood":"happy", "genre":"indie", "spotify":"https://open.spotify.com/track/6dOtVTDdiauQNBQEDOtlAB?si=dc1476505beb4e30"},
    {"title":"Pink Pony Club", "artist":"Chappell Roan", "mood":"happy", "genre":"indie", "spotify":"https://open.spotify.com/track/1k2pQc5i348DCHwbn5KTdc?si=f35eaca390714f80"},
    {"title":"Too Sweet", "artist":"Hozier", "mood":"happy", "genre":"indie", "spotify":"https://open.spotify.com/track/3HMY0r2BAdpasXMY8rseR0?si=0d311cedd0674de4"},
    
    /* Chill, Country */
    {"title":"Slow Burn", "artist":"Kacey Musgraves", "mood":"chill", "genre":"country", "spotify":"https://open.spotify.com/track/6ET9kf9riLETWs9lePUEAI?si=69c709ba127c483b"},
    {"title":"Sun to Me", "artist":"Zach Bryan", "mood":"chill", "genre":"country", "spotify":"https://open.spotify.com/track/1SjsVdSXpwm1kTdYEHoPIT?si=68c175b482344e8b"},
    {"title":"Stick Season", "artist":"Noah Kahan", "mood":"chill", "genre":"country", "spotify":"https://open.spotify.com/track/0mflMxspEfB0VbI1kyLiAv?si=782df7bf2a124927"},
    {"title":"Wildflowers and Wild Horses", "artist":"Lainey Wilson", "mood":"chill", "genre":"country", "spotify":"https://open.spotify.com/track/6RWCvgNCEqXuVZYnDTPDEh?si=5fb2f187fc784fa1"},
    
    /* Chill, Rock */
    {"title":"Yellow", "artist":"Coldplay", "mood":"chill", "genre":"rock", "spotify":"https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg?si=5f8f801471974da8"},
    {"title":"Bright Lights", "artist":"The Killers", "mood":"chill", "genre":"rock", "spotify":"https://open.spotify.com/track/6Nd4WPRscBW9wGi2l7K1Ot?si=a2bf42baabea40d1"},
    {"title":"Feels Like We Only Go Backwards", "artist":"Tame Impala", "mood":"chill", "genre":"rock", "spotify":"https://open.spotify.com/track/0LtOwyZoSNZKJWHqjzADpW?si=48e0622ae7e444ae"},    
    {"title":"Snow (Hey Oh)", "artist":"Red Hot Chili Peppers", "mood":"chill", "genre":"rock", "spotify":"https://open.spotify.com/track/6fgbQt13JlpN59PytgTMsA?si=a6196902481a40de"},
    
    /* Energetic, Country */
    {"title":"Life is a Highway", "artist":"Rascal Flatts", "mood":"energetic", "genre":"country", "spotify":"https://open.spotify.com/track/5gB2IrxOCX2j9bMnHKP38i?si=04c8e1465af04f29"},
    {"title":"I Had Some Help", "artist":"Post Malone feat. Morgan Wallen", "mood":"energetic", "genre":"country", "spotify":"https://open.spotify.com/track/7221xIgOnuakPdLqT0F3nP?si=c038774c5da94c70"},
    {"title":"Before He Cheats", "artist":"Carrie Underwood", "mood":"energetic", "genre":"country", "spotify":"https://open.spotify.com/track/0ZUo4YjG4saFnEJhdWp9Bt?si=7acd91b7cabc4453"},
    {"title":"Texas Hold 'Em", "artist":"Beyoncé", "mood":"energetic", "genre":"country", "spotify":"https://open.spotify.com/track/0Z7nGFVCLfixWctgePsRk9?si=008d9dcb63a84ba1"},

    /* Energetic, Indie */
    {"title":"A-Punk", "artist":"Vampire Weekend", "mood":"energetic", "genre":"indie", "spotify":"https://open.spotify.com/track/2DrGEaqoruCSn0FffWCf5O?si=58b1f63464544b2f"},
    {"title":"Mariner Boy", "artist":"Amble", "mood":"energetic", "genre":"indie", "spotify":"https://open.spotify.com/track/7Jr756yOdYwH8a1NzD2iiy?si=b16e4509f9e445a5"},
    {"title":"Killeagh", "artist":"Kingfishr", "mood":"energetic", "genre":"indie", "spotify":"https://open.spotify.com/track/5Zx1iBItF4TWFQt4C9P5hZ?si=d387d1289d6140f9"},    
    {"title":"Little Lion Man", "artist":"Mumford & Sons", "mood":"energetic", "genre":"indie", "spotify":"https://open.spotify.com/track/3QjpO5xOB9ErJ95AxT0h0r?si=d57764f659da4666"},
    
    /* Romance, Country */
    {"title":"Die A Happy Man", "artist":"Thomas Rhett", "mood":"romance", "genre":"country", "spotify":"https://open.spotify.com/track/5kNe7PE09d6Kvw5pAsx23n?si=2943cd2aaf5a4585"},
    {"title":"Beautiful as You", "artist":"Thomas Rhett", "mood":"romance", "genre":"country", "spotify":"https://open.spotify.com/track/1SBoKG4MjtH2vMUpftdQtc?si=9c405153a3024e87"},
    {"title":"In Your Love", "artist":"Tyler Childers", "mood":"romance", "genre":"country", "spotify":"https://open.spotify.com/track/1olWQ1LOUYs4VBwx5N8Lz9?si=c3b6cbd30cc34232"},
    {"title":"Love You Anyway", "artist":"Luke Combs", "mood":"romance", "genre":"country", "spotify":"https://open.spotify.com/track/2kYevr8cbIAH2ha8210Bnz?si=dc93c7f9a61f4ec1"},

    /* Romance, Indie */
    {"title":"First Day Of My Life", "artist":"Bright Eyes", "mood":"romance", "genre":"indie", "spotify":"https://open.spotify.com/track/0eBryM7ePQH3Klt3jz8xZd?si=aab0887ddac74f03"},
    {"title":"Work Song", "artist":"Hozier", "mood":"romance", "genre":"indie", "spotify":"https://open.spotify.com/track/35PKfoynRpVFoAUE3D5Kc6?si=0b29d215c7ba4678"},
    {"title":"End of Beginning", "artist":"Djo", "mood":"romance", "genre":"indie", "spotify":"https://open.spotify.com/track/3qhlB30KknSejmIvZZLjOD?si=81208d197a9a41ad"},
    {"title":"A Little Time", "artist":"Charlie Oriain", "mood":"romance", "genre":"indie", "spotify":"https://open.spotify.com/track/6N3OVYTX4ceap1TxWVTq7T?si=6b3eaf2120bf465a"},

    /* Romance, Rock */
    {"title":"I Want to Know What Love Is", "artist":"Foreigner", "mood":"romance", "genre":"rock", "spotify":"https://open.spotify.com/track/04OjLvOApQve45B0ISx4XN?si=dd2937887b254afa"},
    {"title":"Iris", "artist":"Goo Goo Dolls", "mood":"romance", "genre":"rock", "spotify":"https://open.spotify.com/track/6Qyc6fS4DsZjB2mRW9DsQs?si=8eb9d01e4f324df6"},
    {"title":"Chasing Cars", "artist":"Snow Patrol", "mood":"romance", "genre":"rock", "spotify":"https://open.spotify.com/track/5GuZz08qie5efPtqsQFsdT?si=593c304f5ce94905"},
    {"title":"I Don't Want to Miss a Thing", "artist":"Aerosmith", "mood":"romance", "genre":"rock", "spotify":"https://open.spotify.com/track/225xvV8r1yKMHErSWivnow?si=20a4fd07ee784498"},
    
    /* Sad, Sad */
    {"title":"Whiskey Lullaby", "artist":"Brad Paisley", "mood":"sad", "genre":"sad", "spotify":"https://open.spotify.com/track/4BXkf6yww23Vdju7E1fUrn?si=6408658cec9c4666"},
    {"title":"Hurt", "artist":"Johnny Cash", "mood":"sad", "genre":"sad", "spotify":"https://open.spotify.com/track/28cnXtME493VX9NOw9cIUh?si=c2280f8eb0ac4965"},
    {"title":"Die On This Hill", "artist":"Sienna Spiro", "mood":"sad", "genre":"sad", "spotify":"https://open.spotify.com/track/2gYTC8DsplN3RNdpdBcCOQ?si=ae55a295c9f94530"},
    {"title":"How Do I Say Goodbye", "artist":"Dean Lewis", "mood":"sad", "genre":"sad", "spotify":"https://open.spotify.com/track/5hnGrTBaEsdukpDF6aZg8a?si=54bac86eeb5b4f58"},
    
    /* Romance, Sad */
    {"title":"Say Something", "artist":"A Great Big World & Christina Aguilera", "mood":"romance", "genre":"sad", "spotify":"https://open.spotify.com/track/6Vc5wAMmXdKIAM7WUoEb7N?si=f40a87e711624eed"},
    {"title":"Another Love", "artist":"Tom Odell", "mood":"romance", "genre":"sad", "spotify":"https://open.spotify.com/track/3JvKfv6T31zO0ini8iNItO?si=e2024978246640e7"},
    {"title":"Apologize", "artist":"OneRepublic & Timbaland", "mood":"romance", "genre":"sad", "spotify":"https://open.spotify.com/track/3UhXPxLDFKCj1ZO6mmtV0a?si=29b386836ca8443f"},
    {"title":"Lose You to Love Me", "artist":"Selena Gomez", "mood":"romance", "genre":"sad", "spotify":"https://open.spotify.com/track/4l0Mvzj72xxOpRrp6h8nHi?si=999d1b7aacc34579"},
    
    /* Happy, Love */
    {"title":"Intentions", "artist":"Justin Bieber feat. Quavo", "mood":"happy", "genre":"love", "spotify":"https://open.spotify.com/track/364dI1bYnvamSnBJ8JcNzN?si=b4f556c859894388"},
    {"title":"Sugar", "artist":"Maroon 5", "mood":"happy", "genre":"love", "spotify":"https://open.spotify.com/track/2iuZJX9X9P0GKaE93xcPjk?si=05d71ab0941e4c7b"},
    {"title":"L-O-V-E", "artist":"Nat King Cole", "mood":"happy", "genre":"love", "spotify":"https://open.spotify.com/track/4QxDOjgpYtQDxxbWPuEJOy?si=361630e7b5874ace"},
    {"title":"Espresso", "artist":"Sabrina Carpenter", "mood":"happy", "genre":"love", "spotify":"https://open.spotify.com/track/2qSkIjg1o9h3YT9RAgYN75?si=80c56ef35c5a464f"}, 
    
    /* Sad, Love */
    {"title":"Wish You The Best", "artist":"Lewis Capaldi", "mood":"sad", "genre":"love", "spotify":"https://open.spotify.com/track/3gdPwk2wyOXNRnTA1KXnEr?si=9922a58cdef045a2"},
    {"title":"the grudge", "artist":"Olivia Rodrigo", "mood":"sad", "genre":"love", "spotify":"https://open.spotify.com/track/3Nl5OkkmS5DaBZvuYofpAt?si=50aae098010a4232"},
    {"title":"traitor", "artist":"Olivia Rodrigo", "mood":"sad", "genre":"love", "spotify":"https://open.spotify.com/track/5CZ40GBx1sQ9agT82CLQCT?si=097596a5b2254461"},
    {"title":"Say Don't Go", "artist":"Taylor Swift", "mood":"sad", "genre":"love", "spotify":"https://open.spotify.com/track/4NioO5R9sHEZh4cGzMHyNt?si=6a1fe387420049b7"},

    /* Chill, Love */
    {"title":"Moonlight", "artist":"Ariana Grande", "mood":"chill", "genre":"love", "spotify":"https://open.spotify.com/track/5A7CwBNDUhvLWuSU5oJEh3?si=f6628831306844dd"},
    {"title":"Best Part", "artist":"Daniel Caesar feat. H.E.R.", "mood":"chill", "genre":"love", "spotify":"https://open.spotify.com/track/1Q7EgiMOuwDcB0PJC6AzON?si=b61fbc8071244542"},
    {"title":"Put Your Records On", "artist":"Corinne Bailey Rae", "mood":"chill", "genre":"love", "spotify":"https://open.spotify.com/track/2nGFzvICaeEWjIrBrL2RAx?si=34327101fb0a4841"},
    {"title":"Invisible String", "artist":"Taylor Swift", "mood":"chill", "genre":"love", "spotify":"https://open.spotify.com/track/6VsvKPJ4xjVNKpI8VVZ3SV?si=5591e05eab72487d"},

    /* Chill, Sad */
    {"title":"Video Games", "artist":"Lana Del Rey", "mood":"chill", "genre":"sad", "spotify":"https://open.spotify.com/track/0fBSs3fRoh1yJcne77fdu9?si=49e7898c440c4459"},
    {"title":"Say It Over", "artist":"Ruel feat. Cautious Clay", "mood":"chill", "genre":"sad", "spotify":"https://open.spotify.com/track/4jSE5cAaa5rwTyhDSXfwQN?si=d5c474bd3a084d0b"},
    {"title":"you broke me first", "artist":"Tate McRae", "mood":"chill", "genre":"sad", "spotify":"https://open.spotify.com/track/4l0RmWt52FxpVxMNni6i63?si=780373223a6d4d3b"},
    {"title":"Ghostin", "artist":"Ariana Grande", "mood":"chill", "genre":"sad", "spotify":"https://open.spotify.com/track/2vdBo4ALPYbHRUPKgtE5iC?si=1d685b4dbe3a47a8"},

    /* Energetic, Love */
    {"title":"How You Get The Girl", "artist":"Taylor Swift", "mood":"energetic", "genre":"love", "spotify":"https://open.spotify.com/track/0fM9dEhUFV4MHDuJgrcfOv?si=a4bf35b35a224497"},
    {"title":"Something Just Like This", "artist":"The Chainsmokers & Coldplay", "mood":"energetic", "genre":"love", "spotify":"https://open.spotify.com/track/0hreO9tj5yiYftUuVThaea?si=027332b881174273"},
    {"title":"I Wanna Dance with Somebody", "artist":"Whitney Houston", "mood":"energetic", "genre":"love", "spotify":"https://open.spotify.com/track/2tUBqZG2AbRi7Q0BIrVrEj?si=13f0e014aee34383"},
    {"title":"Can't Stop The Feeling!", "artist":"Justin Timberlake", "mood":"energetic", "genre":"love", "spotify":"https://open.spotify.com/track/6JV2JOEocMgcZxYSZelKcc?si=d59a8f88d6f145f4"},

    /* Sad, Rock */
    {"title":"Be Still", "artist":"The Killers", "mood":"sad", "genre":"rock", "spotify":"https://open.spotify.com/track/1B5tiGNcOHERcXcBHiL6Xs?si=21fea798aba945b6"},
    {"title":"Snuff", "artist":"Slipknot", "mood":"sad", "genre":"rock", "spotify":"https://open.spotify.com/track/3RptaQ5Xb8WvtpItZ2f9Hi?si=42d7ed62c9824b64"},
    {"title":"Black", "artist":"Pearl Jam", "mood":"sad", "genre":"rock", "spotify":"https://open.spotify.com/track/5Xak5fmy089t0FYmh3VJiY?si=3b40ded087dc42f6"},
    {"title":"Wake Me Up When September Ends", "artist":"Green Day", "mood":"sad", "genre":"rock", "spotify":"https://open.spotify.com/track/3ZffCQKLFLUvYM59XKLbVm?si=d6f6150d572942ae"},
];

function selectMood(mood, btn) {
    currentMood = mood;
    if (selectedMoodBtn) selectedMoodBtn.classList.remove("selected");
    btn.classList.add("selected");
    selectedMoodBtn = btn;
    updateRecommendations();
}

function selectGenre(genre, btn) {
    currentGenre = genre;
    if (selectedGenreBtn) selectedGenreBtn.classList.remove("selected");
    btn.classList.add("selected");
    selectedGenreBtn = btn;
    updateRecommendations();
}

async function updateRecommendations() {
    const resultsDiv = document.getElementById("results");
    if (!resultsDiv) return;

    if (!currentMood || !currentGenre) {
        resultsDiv.innerHTML = "<p>Please select both a mood and a genre.</p>";
        return;
    }

    const filteredSongs = songs.filter(song => song.mood === currentMood && song.genre === currentGenre);

    if (filteredSongs.length === 0) {
        resultsDiv.innerHTML = "<p>No songs match this specific combination. Try another!</p>";
        return;
    }

    resultsDiv.innerHTML = "<p>Finding your music...</p>";
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const ul = document.createElement("ul");
    resultsDiv.innerHTML = ""; 

    for (const song of filteredSongs) {
        const searchTerm = encodeURIComponent(`${song.title} ${song.artist}`);
        const apiUrl = `https://itunes.apple.com/search?term=${searchTerm}&entity=song&limit=1`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const itunesArtwork = data.results[0] ? data.results[0].artworkUrl100 : 'https://via.placeholder.com/100';

            const fullID = `${song.title} - ${song.artist}`;
            const isFav = favourites.includes(fullID.trim().toLowerCase());

            const li = document.createElement("li");
            li.innerHTML = `
                <div class="song-card ${isFav ? 'favourite' : ''}">
                    <img src="${itunesArtwork}" class="cover" alt="cover">
                    <div class="song-info">
                        <strong>${song.title}</strong>
                        <p style="font-size:0.8rem; color:#666;">${song.artist}</p>
                        <div class="actions">
                            <a href="${song.spotify}" target="_blank">🎧</a>
                            <button onclick="saveFavourite('${song.title.replace(/'/g, "\\'")}', '${song.artist.replace(/'/g, "\\")}')">⭐</button>
                        </div>
                    </div>
                </div>
            `;
            ul.appendChild(li);
        } catch (error) {
            console.error("Fetch Error:", error);
        }
    }
    resultsDiv.appendChild(ul);
}
function saveFavourite(title, artist) {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    
    // Find the full song object from my array
    const songObj = songs.find(s => s.title === title && s.artist === artist);
    
    // Check if it's already there (using a unique string)
    const songIndex = favourites.findIndex(f => f.title === title && f.artist === artist);

    if (songIndex === -1) {
        favourites.push(songObj); // Save the whole object!
        alert(`Added "${title}" to your favourites!`);
    } else {
        favourites.splice(songIndex, 1); // Remove it
        alert(`Removed "${title}" from your favourites.`);
    }
    
    localStorage.setItem("favourites", JSON.stringify(favourites));
    updateRecommendations();
}

function viewFavourites() {
    window.location.href = "favourites.html";
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#mood-buttons button").forEach(btn => {
        btn.addEventListener("click", () => selectMood(btn.dataset.mood, btn));
    });

    document.querySelectorAll("#genre-buttons button").forEach(btn => {
        btn.addEventListener("click", () => selectGenre(btn.dataset.genre, btn));
    });

    const favBtn = document.getElementById("viewFavouritesBtn");
    if (favBtn) {
        favBtn.addEventListener("click", viewFavourites);

    }
});

