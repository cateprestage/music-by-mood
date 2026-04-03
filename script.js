const songs = [
  /*Happy, Pop*/
    {"title":"Lush Life", "artist":"Zara Larsson", "mood":"happy", "genre":"pop", "spotify":"https://open.spotify.com/track/0r4SsYcwvd8URat6AS2m6f"},
    {"title":"Flowers", "artist":"Miley Cyrus", "mood":"happy", "genre":"pop", "spotify":"https://open.spotify.com/track/0yLdNVWF3Srea0uzk55zFn"},
    {"title":"Ain't It Fun", "artist":"Paramore", "mood":"happy", "genre":"pop", "spotify":"https://open.spotify.com/track/1j8z4TTjJ1YOdoFEDwJTQa"},
    {"title":"American Girls", "artist":"Harry Styles", "mood":"happy", "genre":"pop", "spotify":"https://open.spotify.com/track/7gtG45ieyQzKtNKobfLd49?si=065a4cd08e144208"},
    
    /*Chill, Indie*/
    {"title":"Cigarette Daydreams", "artist":"Cage The Elephant", "mood":"chill", "genre":"indie", "spotify":"https://open.spotify.com/track/6jHvX8ZnHKC1PnrPMJ0Emt?si=38e245845a2d4301"},
    {"title":"Sweater Weather", "artist":"The Neighbourhood", "mood":"chill", "genre":"indie", "spotify":"https://open.spotify.com/track/0cQVqPuHQP4KEwc7ZUQmj6?si=93edfb2d29524c1b"},
    {"title":"Say Yes to Heaven", "artist":"Lana Del Rey", "mood":"chill", "genre":"indie", "spotify":"https://open.spotify.com/track/6GGtHZgBycCgGBUhZo81xe?si=032ba7974d774fab"},
    {"title":"Somebody Else", "artist":"The 1975", "mood":"chill", "genre":"indie", "spotify":"https://open.spotify.com/track/4m0q0xQ2BNl9SCAGKyfiGZ?si=83d888ed30ec423c"},
    {"title":"Meant To Be", "artist":"Ber & Charlie Oriain", "mood":"chill", "genre":"indie", "spotify":"https://open.spotify.com/track/0wxGIpOZbDR4RGy1sh3XhR?si=5251872a61a24fc6"},

    /* Chill, Pop */
    {"title":"Fallin' All In You", "artist":"Shawn Mendes", "mood":"chill", "genre":"pop", "spotify":"https://open.spotify.com/track/5EYBryPOgIEPB7r5QIy6eG?si=a7f54d1061454308"},
    {"title":"Lovely", "artist":"Billie Eilish & Khalid", "mood":"chill", "genre":"pop", "spotify":"https://open.spotify.com/track/0u2P5u6lvoDfwTYjAADbn4?si=429175d3213d47ec"},
    {"title":"Saturday Nights", "artist":"Khalid", "mood":"chill", "genre":"pop", "spotify":"https://open.spotify.com/track/5kfNriitmkNE8mUbZ7gbq8?si=89853410c5884131"},
    {"title":"Man I Need", "artist":"Olivia Dean", "mood":"chill", "genre":"pop", "spotify":"https://open.spotify.com/track/1qbmS6ep2hbBRaEZFpn7BX?si=b41ce4ac6cfe4bc1"},
    
    /* Sad, Indie */
    {"title":"The Night We Met", "artist":"Lord Huron", "mood":"sad", "genre":"indie", "spotify":"https://open.spotify.com/track/5yJaXWIErrrsjQ3J0eR5aK?si=14b8623992894d0a"},
    {"title":"Landslide", "artist":"Fleetwood Mac", "mood":"sad", "genre":"indie", "spotify":"https://open.spotify.com/track/5ihS6UUlyQAfmp48eSkxuQ?si=1b41f46b837741d2"},
    {"title":"Ceilings", "artist":"Lizzy McAlpine", "mood":"sad", "genre":"indie", "spotify":"https://open.spotify.com/track/2L9N0zZnd37dwF0clgxMGI?si=b3588366f8fe4e21"},
    {"title":"iloveitiloveitiloveit", "artist":"Bella Kay", "mood":"sad", "genre":"indie", "spotify":"https://open.spotify.com/track/5IMpnpD0tQVcqWlVIgtAtV?si=428d931511fa4e55"},
    {"title":"Haunt Me", "artist":"Yana", "mood":"sad", "genre":"indie", "spotify":"https://open.spotify.com/track/5zmLRdgheUjzeeL6697YK1?si=6e68b7dcb7b84a1b"},
    {"title":"A Little Time", "artist":"Charlie Oriain", "mood":"sad", "genre":"indie", "spotify":"https://open.spotify.com/track/6N3OVYTX4ceap1TxWVTq7T?si=2558bfa84d474d24"},

    /* Sad, Pop */
    {"title":"Someone You Loved", "artist":"Lewis Capaldi", "mood":"sad", "genre":"pop", "spotify":"https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf?si=7a0c7e930d92462a"},
    {"title":"Drivers License", "artist":"Olivia Rodrigo", "mood":"sad", "genre":"pop", "spotify":"https://open.spotify.com/track/5wANPM4fQCJwkGd4rN57mH?si=c293750d154b4d82"},
    {"title":"Falling", "artist":"Harry Styles", "mood":"sad", "genre":"pop", "spotify":"https://open.spotify.com/track/1ZMiCix7XSAbfAJlEZWMCp?si=a28e26dbc6ab469f"},
    {"title":"River of Tears", "artist":"Alessia Cara", "mood":"sad", "genre":"pop", "spotify":"https://open.spotify.com/track/3ArYVrRb0lDBLzuJJqIXzC?si=42ca943536274b9d"},
    
    /* Sad, Country */
    {"title":"Something in the Orange", "artist":"Zach Bryan", "mood":"sad", "genre":"country", "spotify":"https://open.spotify.com/track/3WMj8moIAXJhHsyLaqIIHI?si=f05bded40b7f4fea"},
    {"title":"Forever After All", "artist":"Luke Combs", "mood":"sad", "genre":"country", "spotify":"https://open.spotify.com/track/6IBcOGPsniK3Pso1wHIhew?si=71ea007f4507467f"},
    {"title":"If I Die Young", "artist":"The Band Perry", "mood":"sad", "genre":"country", "spotify":"https://open.spotify.com/track/4aY0tZIaboefmkBEsjAovI?si=b629da9d5d68477e"},
    {"title":"Choosin' Texas", "artist":"Ella Langley", "mood":"sad", "genre":"country", "spotify":"https://open.spotify.com/track/65DbTqJKhbwqYbZ1Okr0rc?si=454fdf5d827a4798"},
    
    /* Energetic, Pop */
    {"title":"Physical", "artist":"Dua Lipa", "mood":"energetic", "genre":"pop", "spotify":"https://open.spotify.com/track/3AzjcOeAmA57TIOr9zF1ZW?si=49a3bd041ec74717"},
    {"title":"Blinding Lights", "artist":"The Weeknd", "mood":"energetic", "genre":"pop", "spotify":"https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?si=f47d3b520b074c64"},
    {"title":"Hot to Go!", "artist":"Chappell Roan", "mood":"energetic", "genre":"pop", "spotify":"https://open.spotify.com/track/4xdBrk0nFZaP54vvZj0yx7?si=5399bdb05d0146ac"},
    {"title":"Murder on the Dancefloor", "artist":"Sophie Ellis-Bextor", "mood":"energetic", "genre":"pop", "spotify":"https://open.spotify.com/track/4tKGFmENO69tZR9ahgZu48?si=dd362368bb6a4208"},
    
    /* Energetic, Rock */
    {"title":"Thunderstruck", "artist":"AC/DC", "mood":"energetic", "genre":"rock", "spotify":"https://open.spotify.com/track/57bgtoPSgt236HzfBOd8kj?si=3baf5b9a4ee2490b"},
    {"title":"Mr. Brightside", "artist":"The Killers", "mood":"energetic", "genre":"rock", "spotify":"https://open.spotify.com/track/003vvx7Niy0yvhvHt4a68B?si=d79a708778fa44e8"},
    {"title":"Welcome To The Jungle", "artist":"Guns N' Roses", "mood":"energetic", "genre":"rock", "spotify":"https://open.spotify.com/track/0G21yYKMZoHa30cYVi1iA8?si=4bac649bb73c48d3"},
    {"title":"Don't Stop Me Now", "artist":"Queen", "mood":"energetic", "genre":"rock", "spotify":"https://open.spotify.com/track/6e3y6sczcHWehxZo528OZ7?si=c64e0a3878b34882"},
    
    /* Romance, Love */
    {"title":"Perfect", "artist":"Ed Sheeran", "mood":"romance", "genre":"love", "spotify":"https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v?si=058c683625e44841"},
    {"title":"Say You Won't Let Go", "artist":"James Arthur", "mood":"romance", "genre":"love", "spotify":"https://open.spotify.com/track/5uCax9HTNlzGybIStD3vDh?si=9a1936d0f07c42ff"},
    {"title":"I Will Always Love You", "artist":"Whitney Houston", "mood":"romance", "genre":"love", "spotify":"https://open.spotify.com/track/4eHbdreAnSOrDDsFfc4Fpm?si=b4218c20728544d3"},
    {"title":"Enchanted", "artist":"Taylor Swift", "mood":"romance", "genre":"love", "spotify":"https://open.spotify.com/track/04S1pkp1VaIqjg8zZqknR5?si=3ad7ef960ee94c27"},
    
    /* Romance, Pop */
    {"title":"Love Story", "artist":"Taylor Swift", "mood":"romance", "genre":"pop", "spotify":"https://open.spotify.com/track/1D4PL9B8gOg78jiHg3FvBb?si=3de0601af6f94895"},
    {"title":"Just the Way You Are", "artist":"Bruno Mars", "mood":"romance", "genre":"pop", "spotify":"https://open.spotify.com/track/47Slg6LuqLaX0VodpSCvPt?si=0d1c453bd46e4695"},
    {"title":"DAISIES", "artist":"Justin Bieber", "mood":"romance", "genre":"pop", "spotify":"https://open.spotify.com/track/5BZsQlgw21vDOAjoqkNgKb?si=5517d2a6f5aa42f8"},
    {"title":"I Know Love", "artist":"Tate McRae", "mood":"romance", "genre":"pop", "spotify":"https://open.spotify.com/track/57DTKgkc3CjkUxg0urNl1u?si=d579d5efa0a04032"},

    /* Happy, Country */
    {"title":"Take Me Home, Country Roads", "artist":"John Denver", "mood":"happy", "genre":"country", "spotify":"https://open.spotify.com/track/1QbOvACeYanja5pbnJbAmk?si=9a2c7e29413d463f"},
    {"title":"Cruise", "artist":"Florida Georgia Line", "mood":"happy", "genre":"country", "spotify":"https://open.spotify.com/track/1aS5oaBNG6wsf186ZZMCzX?si=cba2559bdcc8499b"},   
    {"title":"Austin", "artist":"Dasha", "mood":"happy", "genre":"country", "spotify":"https://open.spotify.com/track/2uqYupMHANxnwgeiXTZXzd?si=71d631b54bd540cf"},
    {"title":"9 to 5", "artist":"Dolly Parton", "mood":"happy", "genre":"country", "spotify":"https://open.spotify.com/track/4w3tQBXhn5345eUXDGBWZG?si=fd22f2dca1db49cd"},
    
    /* Happy, Rock */
    {"title":"Shut Up and Dance", "artist":"WALK THE MOON", "mood":"happy", "genre":"rock", "spotify":"https://open.spotify.com/track/4kbj5MwxO1bq9wjT5g9HaA?si=3768924407d84341"},
    {"title":"You Make My Dreams", "artist":"Daryl Hall & John Oates", "mood":"happy", "genre":"rock", "spotify":"https://open.spotify.com/track/4o6BgsqLIBViaGVbx5rbRk?si=38d3136ebd2f4bcb"},
    {"title":"The Best", "artist":"Tina Turner", "mood":"happy", "genre":"rock", "spotify":"https://open.spotify.com/track/4OeFQtRyT7vsLnRTv7t8YT?si=bf8b9fc82cd94f0a"},
    {"title":"Walking On Sunshine", "artist":"Katrina & The Waves", "mood":"happy", "genre":"rock", "spotify":"https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0?si=b31891fa4896482a"},
   
    /* Happy, Indie */
    {"title":"Dog Days Are Over", "artist":"Florence + The Machine", "mood":"happy", "genre":"indie", "spotify":"https://open.spotify.com/track/456WNXWhDwYOSf5SpTuqxd?si=1c2fe6e1d011458d"},
    {"title":"Birds of a Feather", "artist":"Billie Eilish", "mood":"happy", "genre":"indie", "spotify":"https://open.spotify.com/track/6dOtVTDdiauQNBQEDOtlAB?si=211f6e47726443f7"},
    {"title":"Pink Pony Club", "artist":"Chappell Roan", "mood":"happy", "genre":"indie", "spotify":"https://open.spotify.com/track/1k2pQc5i348DCHwbn5KTdc?si=20daf1a62f32486f"},
    {"title":"Too Sweet", "artist":"Hozier", "mood":"happy", "genre":"indie", "spotify":"https://open.spotify.com/track/3HMY0r2BAdpasXMY8rseR0?si=79a8b42123d3473c"},
    
    /* Chill, Country */
    {"title":"Slow Burn", "artist":"Kacey Musgraves", "mood":"chill", "genre":"country", "spotify":"https://open.spotify.com/track/6ET9kf9riLETWs9lePUEAI?si=dde55dd291b44579"},
    {"title":"Sun to Me", "artist":"Zach Bryan", "mood":"chill", "genre":"country", "spotify":"https://open.spotify.com/track/1SjsVdSXpwm1kTdYEHoPIT?si=bdf0ef3916e9440b"},
    {"title":"Stick Season", "artist":"Noah Kahan", "mood":"chill", "genre":"country", "spotify":"https://open.spotify.com/track/0mflMxspEfB0VbI1kyLiAv?si=6b8a0addd97c4ee0"},
    {"title":"Wildflowers and Wild Horses", "artist":"Lainey Wilson", "mood":"chill", "genre":"country", "spotify":"https://open.spotify.com/track/6RWCvgNCEqXuVZYnDTPDEh?si=09cf71dd47664319"},
    
    /* Chill, Rock */
    {"title":"Yellow", "artist":"Coldplay", "mood":"chill", "genre":"rock", "spotify":"https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg?si=39e3f3d51f064349"},
    {"title":"Bright Lights", "artist":"The Killers", "mood":"chill", "genre":"rock", "spotify":"https://open.spotify.com/track/6Nd4WPRscBW9wGi2l7K1Ot?si=dadfb45d3bb347a8"},
    {"title":"Snow (Hey Oh)", "artist":"Red Hot Chili Peppers", "mood":"chill", "genre":"rock", "spotify":"https://open.spotify.com/track/6fgbQt13JlpN59PytgTMsA?si=8f5256ed52324cca"},
    {"title":"Feels Like We Only Go Backwards", "artist":"Tame Impala", "mood":"chill", "genre":"rock", "spotify":"https://open.spotify.com/track/0LtOwyZoSNZKJWHqjzADpW?si=6a5eb963d5ec458f"},

    /* Energetic, Country */
    {"title":"Life is a Highway", "artist":"Rascal Flatts", "mood":"energetic", "genre":"country", "spotify":"https://open.spotify.com/track/5gB2IrxOCX2j9bMnHKP38i?si=9d49af3465804bd8"},
    {"title":"I Had Some Help", "artist":"Post Malone feat. Morgan Wallen", "mood":"energetic", "genre":"country", "spotify":"https://open.spotify.com/track/7221xIgOnuakPdLqT0F3nP?si=a89bda7b81854ccd"},
    {"title":"Before He Cheats", "artist":"Carrie Underwood", "mood":"energetic", "genre":"country", "spotify":"https://open.spotify.com/track/0ZUo4YjG4saFnEJhdWp9Bt?si=20b242ab57dc4482"},
    {"title":"Texas Hold 'Em", "artist":"Beyoncé", "mood":"energetic", "genre":"country", "spotify":"https://open.spotify.com/track/0Z7nGFVCLfixWctgePsRk9?si=55bf06226b584982"},

    /* Energetic, Indie */
    {"title":"A-Punk", "artist":"Vampire Weekend", "mood":"energetic", "genre":"indie", "spotify":"https://open.spotify.com/track/2DrGEaqoruCSn0FffWCf5O?si=e49400518c98461f"},
    {"title":"Mariner Boy", "artist":"Amble", "mood":"energetic", "genre":"indie", "spotify":"https://open.spotify.com/track/7Jr756yOdYwH8a1NzD2iiy?si=b93d35cb659c48de"},
    {"title":"Killeagh", "artist":"Kingfishr", "mood":"energetic", "genre":"indie", "spotify":"https://open.spotify.com/track/5Zx1iBItF4TWFQt4C9P5hZ?si=6f2bbaff455e4571"},    
    {"title":"Little Lion Man", "artist":"Mumford & Sons", "mood":"energetic", "genre":"indie", "spotify":"https://open.spotify.com/track/3QjpO5xOB9ErJ95AxT0h0r?si=a49a10b8ce344c37"},
    
    /* Romance, Country */
    {"title":"Die A Happy Man", "artist":"Thomas Rhett", "mood":"romance", "genre":"country", "spotify":"https://open.spotify.com/track/5kNe7PE09d6Kvw5pAsx23n?si=b35a4c5d32eb45c4"},
    {"title":"Beautiful as You", "artist":"Thomas Rhett", "mood":"romance", "genre":"country", "spotify":"https://open.spotify.com/track/1SBoKG4MjtH2vMUpftdQtc?si=d9956de3d02745d2"},
    {"title":"In Your Love", "artist":"Tyler Childers", "mood":"romance", "genre":"country", "spotify":"https://open.spotify.com/track/1olWQ1LOUYs4VBwx5N8Lz9?si=6f439702d6174dcc"},
    {"title":"Love You Anyway", "artist":"Luke Combs", "mood":"romance", "genre":"country", "spotify":"https://open.spotify.com/track/2kYevr8cbIAH2ha8210Bnz?si=fe02b2726c0f491e"},

    /* Romance, Indie */
    {"title":"First Day Of My Life", "artist":"Bright Eyes", "mood":"romance", "genre":"indie", "spotify":"https://open.spotify.com/track/0eBryM7ePQH3Klt3jz8xZd?si=dc03689c711e4e07"},
    {"title":"Work Song", "artist":"Hozier", "mood":"romance", "genre":"indie", "spotify":"https://open.spotify.com/track/35PKfoynRpVFoAUE3D5Kc6?si=ca3172806b9d4eb2"},
    {"title":"End of Beginning", "artist":"Djo", "mood":"romance", "genre":"indie", "spotify":"https://open.spotify.com/track/3qhlB30KknSejmIvZZLjOD?si=583d1c3046d44db4"},
    {"title":"A Little Time", "artist":"Charlie Oriain", "mood":"romance", "genre":"indie", "spotify":"https://open.spotify.com/track/6N3OVYTX4ceap1TxWVTq7T?si=ee88ef9a6e864693"},

    /* Romance, Rock */
    {"title":"I Want to Know What Love Is", "artist":"Foreigner", "mood":"romance", "genre":"rock", "spotify":"https://open.spotify.com/track/04OjLvOApQve45B0ISx4XN?si=4842e81913f943cb"},
    {"title":"Iris", "artist":"Goo Goo Dolls", "mood":"romance", "genre":"rock", "spotify":"https://open.spotify.com/track/6Qyc6fS4DsZjB2mRW9DsQs?si=d162901692c64662"},
    {"title":"Chasing Cars", "artist":"Snow Patrol", "mood":"romance", "genre":"rock", "spotify":"https://open.spotify.com/track/5GuZz08qie5efPtqsQFsdT?si=662fc2a320f54c77"},
    {"title":"I Don't Want to Miss a Thing", "artist":"Aerosmith", "mood":"romance", "genre":"rock", "spotify":"https://open.spotify.com/track/225xvV8r1yKMHErSWivnow?si=aac5475168d24318"},
    
    /* Sad, Sad */
    {"title":"Whiskey Lullaby", "artist":"Brad Paisley", "mood":"sad", "genre":"sad", "spotify":"https://open.spotify.com/track/4BXkf6yww23Vdju7E1fUrn?si=ffc7a0baccf747c9"},
    {"title":"Hurt", "artist":"Johnny Cash", "mood":"sad", "genre":"sad", "spotify":"https://open.spotify.com/track/28cnXtME493VX9NOw9cIUh?si=522b60ce81954e08"},
    {"title":"Die On This Hill", "artist":"Sienna Spiro", "mood":"sad", "genre":"sad", "spotify":"https://open.spotify.com/track/2gYTC8DsplN3RNdpdBcCOQ?si=20ec6c77d6ed4d0f"},
    {"title":"How Do I Say Goodbye", "artist":"Dean Lewis", "mood":"sad", "genre":"sad", "spotify":"https://open.spotify.com/track/5hnGrTBaEsdukpDF6aZg8a?si=79f0d4c4aff5499d"},
   
    /* Romance, Sad */
    {"title":"Say Something", "artist":"A Great Big World & Christina Aguilera", "mood":"romance", "genre":"sad", "spotify":"https://open.spotify.com/track/6Vc5wAMmXdKIAM7WUoEb7N?si=053409a41f34452b"},
    {"title":"Another Love", "artist":"Tom Odell", "mood":"romance", "genre":"sad", "spotify":"https://open.spotify.com/track/3JvKfv6T31zO0ini8iNItO?si=96c02fc299804b57"},
    {"title":"Apologize", "artist":"OneRepublic & Timbaland", "mood":"romance", "genre":"sad", "spotify":"https://open.spotify.com/track/3UhXPxLDFKCj1ZO6mmtV0a?si=a70e1d74410a485f"},
    {"title":"Lose You to Love Me", "artist":"Selena Gomez", "mood":"romance", "genre":"sad", "spotify":"https://open.spotify.com/track/4l0Mvzj72xxOpRrp6h8nHi?si=d686f1adb33b4b47"},
    
    /* Happy, Love */
    {"title":"Intentions", "artist":"Justin Bieber feat. Quavo", "mood":"happy", "genre":"love", "spotify":"https://open.spotify.com/track/364dI1bYnvamSnBJ8JcNzN?si=98b97d557cff4f94"},
    {"title":"Sugar", "artist":"Maroon 5", "mood":"happy", "genre":"love", "spotify":"https://open.spotify.com/track/2iuZJX9X9P0GKaE93xcPjk?si=65425ca7789a418b"},
    {"title":"L-O-V-E", "artist":"Nat King Cole", "mood":"happy", "genre":"love", "spotify":"https://open.spotify.com/track/4QxDOjgpYtQDxxbWPuEJOy?si=7ff2bb915d8644d7"},
    {"title":"Espresso", "artist":"Sabrina Carpenter", "mood":"happy", "genre":"love", "spotify":"https://open.spotify.com/track/2qSkIjg1o9h3YT9RAgYN75?si=635339a3b2984b8a"}, 
    
    /* Sad, Love */
    {"title":"Wish You The Best", "artist":"Lewis Capaldi", "mood":"sad", "genre":"love", "spotify":"https://open.spotify.com/track/3gdPwk2wyOXNRnTA1KXnEr?si=56cfbacc3a1046d3"},
    {"title":"the grudge", "artist":"Olivia Rodrigo", "mood":"sad", "genre":"love", "spotify":"https://open.spotify.com/track/3Nl5OkkmS5DaBZvuYofpAt?si=9794539f69c54301"},
    {"title":"traitor", "artist":"Olivia Rodrigo", "mood":"sad", "genre":"love", "spotify":"https://open.spotify.com/track/5CZ40GBx1sQ9agT82CLQCT?si=b6f4fe58761d4118"},
    {"title":"Say Don't Go", "artist":"Taylor Swift", "mood":"sad", "genre":"love", "spotify":"https://open.spotify.com/track/4NioO5R9sHEZh4cGzMHyNt?si=99fc98e94afd4e03"},

    /* Chill, Love */
    {"title":"Moonlight", "artist":"Ariana Grande", "mood":"chill", "genre":"love", "spotify":"https://open.spotify.com/track/5A7CwBNDUhvLWuSU5oJEh3?si=60a879e9aa6f4b62"},
    {"title":"Best Part", "artist":"Daniel Caesar feat. H.E.R.", "mood":"chill", "genre":"love", "spotify":"https://open.spotify.com/track/1Q7EgiMOuwDcB0PJC6AzON?si=21e746bfd18846f7"},
    {"title":"Put Your Records On", "artist":"Corinne Bailey Rae", "mood":"chill", "genre":"love", "spotify":"https://open.spotify.com/track/2nGFzvICaeEWjIrBrL2RAx?si=a1f73ecee6de45f8"},
    {"title":"Invisible String", "artist":"Taylor Swift", "mood":"chill", "genre":"love", "spotify":"https://open.spotify.com/track/6VsvKPJ4xjVNKpI8VVZ3SV?si=d1913048a40f4c4b"},

    /* Chill, Sad */
    {"title":"Video Games", "artist":"Lana Del Rey", "mood":"chill", "genre":"sad", "spotify":"https://open.spotify.com/track/0fBSs3fRoh1yJcne77fdu9?si=5961c96699194983"},
    {"title":"Say It Over", "artist":"Ruel feat. Cautious Clay", "mood":"chill", "genre":"sad", "spotify":"https://open.spotify.com/track/4jSE5cAaa5rwTyhDSXfwQN?si=c8f6c43283d24eb1"},
    {"title":"you broke me first", "artist":"Tate McRae", "mood":"chill", "genre":"sad", "spotify":"https://open.spotify.com/track/4l0RmWt52FxpVxMNni6i63?si=3423cbbfee354228"},
    {"title":"Ghostin", "artist":"Ariana Grande", "mood":"chill", "genre":"sad", "spotify":"https://open.spotify.com/track/2vdBo4ALPYbHRUPKgtE5iC?si=95788e35a9e740c8"},

    /* Energetic, Love */
    {"title":"How You Get The Girl", "artist":"Taylor Swift", "mood":"energetic", "genre":"love", "spotify":"https://open.spotify.com/track/0fM9dEhUFV4MHDuJgrcfOv?si=47fe4780fb7e4414"},
    {"title":"Something Just Like This", "artist":"The Chainsmokers & Coldplay", "mood":"energetic", "genre":"love", "spotify":"https://open.spotify.com/track/1dNIEtp7AY3oDAKCGg2XkH?si=4ab49a6986324e34"},
    {"title":"I Wanna Dance with Somebody", "artist":"Whitney Houston", "mood":"energetic", "genre":"love", "spotify":"https://open.spotify.com/track/2tUBqZG2AbRi7Q0BIrVrEj?si=b89883dd89764b50"},
    {"title":"Can't Stop The Feeling!", "artist":"Justin Timberlake", "mood":"energetic", "genre":"love", "spotify":"https://open.spotify.com/track/6JV2JOEocMgcZxYSZelKcc?si=02a9bf9c38b743f8"},

    /* Sad, Rock */
    {"title":"Be Still", "artist":"The Killers", "mood":"sad", "genre":"rock", "spotify":"https://open.spotify.com/track/1B5tiGNcOHERcXcBHiL6Xs?si=435d97974a0b42ca"},
    {"title":"Snuff", "artist":"Slipknot", "mood":"sad", "genre":"rock", "spotify":"https://open.spotify.com/track/3RptaQ5Xb8WvtpItZ2f9Hi?si=2920a5375eae41b1"},
    {"title":"Black", "artist":"Pearl Jam", "mood":"sad", "genre":"rock", "spotify":"https://open.spotify.com/track/5Xak5fmy089t0FYmh3VJiY?si=c313969f5cf44d8c"},
    {"title":"Wake Me Up When September Ends", "artist":"Green Day", "mood":"sad", "genre":"rock", "spotify":"https://open.spotify.com/track/3ZffCQKLFLUvYM59XKLbVm?si=c9ba4da024164b64"},
];

async function recommendSongs() {
    const selectedMoodBtn = document.querySelector('#mood-buttons .selected');
    const selectedGenreBtn = document.querySelector('#genre-buttons .selected');

    if (!selectedMoodBtn || !selectedGenreBtn) return;

    const mood = selectedMoodBtn.getAttribute('data-mood');
    const genre = selectedGenreBtn.getAttribute('data-genre');
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = "<p style='text-align:center; padding:20px; color:#666;'>Loading your vibe...</p>"; 

    const filteredSongs = songs.filter(song => song.mood === mood && song.genre === genre);

    if (filteredSongs.length === 0) {
        resultsDiv.innerHTML = "<p style='text-align:center; padding: 20px; color:#666;'>No matches found. Try another combo!</p>";
        return;
    }

    const ul = document.createElement('ul');
    ul.style = "list-style: none; padding: 0; margin: 20px auto; max-width: 800px;";

    for (const item of filteredSongs) {
        let artworkUrl = "https://via.placeholder.com/150?text=🎵"; 

        try {
            const cleanArtistForSearch = item.artist.replace(/\//g, " ");
            const searchTermFull = encodeURIComponent(`${item.title} ${cleanArtistForSearch}`);
            
            
            let response = await fetch(`https://itunes.apple.com/search?term=${searchTermFull}&entity=musicTrack&limit=1`);
            let data = await response.json();
            
            if (data.results && data.results.length > 0) {
                artworkUrl = data.results[0].artworkUrl100;
            } else {
                
                let resGeneral = await fetch(`https://itunes.apple.com/search?term=${searchTermFull}&limit=1`);
                let dataGeneral = await resGeneral.json();
                if (dataGeneral.results && dataGeneral.results.length > 0) {
                    artworkUrl = dataGeneral.results[0].artworkUrl100;
                } else {
                    // ATTEMPT 3: Fallback to just Title
                    let resTitle = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(item.title)}&limit=1`);
                    let dataTitle = await resTitle.json();
                    if (dataTitle.results && dataTitle.results.length > 0) {
                        artworkUrl = dataTitle.results[0].artworkUrl100;
                    }
                }
            }
          
            artworkUrl = artworkUrl.replace("100x100bb.jpg", "300x300bb.jpg");
            item.artwork = artworkUrl;
        } catch (e) {
            console.log("Cover fetch failed for:", item.title);
        }

        const li = document.createElement("li");
        li.style = "background: #fff; padding: 15px 20px; margin: 12px 0; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 10px rgba(0,0,0,0.08); transition: 0.2s; cursor: pointer;";
        
        const cleanTitle = item.title.replace(/'/g, "\\'");
        const cleanArtist = item.artist.replace(/'/g, "\\'");

        li.innerHTML = `
            <div style="display:flex; align-items:center; gap:15px;">
                <img src="${artworkUrl}" style="width:60px; height:60px; border-radius:8px; object-fit:cover; background:#f0f0f0;" alt="">
                <div style="text-align: left;">
                    <span style="font-weight:600; display:block; color:#1c1c1c;">${item.title}</span>
                    <span style="font-size:0.8rem; color:#666;">${item.artist}</span>
                </div>
            </div>
            <div style="display:flex; align-items:center; gap:15px;">
                <button onclick="toggleFavourite('${cleanTitle}', '${cleanArtist}')" style="background:none; border:none; font-size:1.5rem; cursor:pointer;">⭐</button>
                <a href="${item.spotify}" target="_blank" style="font-size: 1.5rem; text-decoration: none;">🎧</a>
            </div>
        `;
        
        li.onmouseover = () => li.style.transform = "translateY(-3px)";
        li.onmouseout = () => li.style.transform = "translateY(0)";
        ul.appendChild(li);
    }

    resultsDiv.innerHTML = ""; 
    resultsDiv.appendChild(ul);
}

function toggleFavourite(title, artist) {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const songObj = songs.find(s => s.title === title && s.artist === artist);
    const index = favourites.findIndex(f => f.title === title && f.artist === artist);

    if (index === -1) {
        favourites.push(songObj);
        alert(`"${title}" added to favourites!`);
    } else {
        favourites.splice(index, 1);
        alert(`"${title}" removed from favourites.`);
    }
    
    localStorage.setItem("favourites", JSON.stringify(favourites));
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mood-btn, .genre-btn').forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.parentElement;
            parent.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
            button.classList.add('selected');
            recommendSongs();
        });
    });

    const viewFavBtn = document.getElementById("viewFavouritesBtn");
    if (viewFavBtn) {
        viewFavBtn.addEventListener("click", () => {
            window.location.href = "favourites.html";
        });
    }
});