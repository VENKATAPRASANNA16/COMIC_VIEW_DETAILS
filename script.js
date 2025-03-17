const comicsData = [
    {
        name: 'Pearl boy/ seashell boy',
        profilePic: 'images/OIP.jpeg',
        bio: 'Pearl Boy is a Korean manhwa written by Zoy and illustrated by Inking. It was published by Lezhin Comics in 2020 and has since been digitally released in English by Lezhin Comics as well. The manhwa consists of three seasons with a total of 90 chapters, and it was completed on July 8, 20231. The story follows Kang Dooshik, a former gay bar server who absconds with funds from his workplace. Seeking refuge in a small coastal town, he faces financial struggles. When he enters a clam house to satisfy his hunger, he encounters Jooha, the server, and discovers a secret treasure within Joohas beautiful shell that could solve his money problems',
        characters: [
            { name: 'kang Doo shik', pic: 'images/kangdooshik.webp' },
            { name: 'jin jooha', pic: 'images/jinjooha.jpeg' }
        ]
    },
    {
        name: 'Taming the tiger',
        profilePic: 'images/taming.jpg',
        bio: 'Ahn Geumhoo, the eldest son of Ahns family, sets out on a journey to search for a butcher as he needed the animals blood for his little brothers medicine. Along the way, he met a nameless and peculiar-looking butcher. He gave this man, who was already famous on the streets, the name "Beom", and let him in into his home with his strange attraction. However, not knowing when, he became fascinated by Beoms charm...... Its a story about a noble who was fascinated by Beom while trying to tame the Tiger.',
        characters: [
            { name: 'Ahn Geumhoo', pic: 'images/Ahn Geumhoo.jpg' },
            { name: 'beom', pic: 'images/beom.jpg' }
        ]
    },
    {
        name: 'My bias is showing!?',
        profilePic: 'images/bias.jpg',
        bio: 'When high school teacher Na Aejoon shows up for work on an ordinary day, he never expects to bump into his favorite celebrity in the hallway. But when his school becomes a filming location for a show starring Choi Siyeol, his bias from the idol group A-One, thats exactly what happens! If thats not enough to give a fanboy a heart attack, Siyeol takes an interest in Aejoon and asks him to join the show as his “co-teacher.” Desperate to keep his fan life a secret, Aejoon is forced to put his acting skills to the test, and not just on camera. But as he spends more and more time with Siyeol, the deception becomes harder to keep up. Not to mention, he might not be the only one keeping secrets…',
        characters: [
            { name: 'Na Aejoon', pic: 'images/aejoon.jpg' },
            { name: 'Choi Siyeol', pic: 'images/Choi Siyeol.jpg' }
        ]
    },
    {
        name: 'The Third ending',
        profilePic: 'images/thoird.jpg',
        bio: 'Seo Yoonseul, who lived a perfect life so far, becomes a wreck when he starts having nightmares of a boy whom he coldly rejected when he was a student. The nightmares get even worse when he reunites with Kang Joon. Following his advice on becoming a good person to avoid nightmares, Yoonseul approaches him to win his favor.',
        characters: [
            { name: 'seo yoonseul', pic: 'images/seo.jpg' },
            { name: 'kang joon', pic: 'images/kangjoon.jpg' }
        ]
    },
    {
        name: 'Smyrna and Capri',
        profilePic: 'images/symrna.jpg',
        bio: 'What if your sworn enemy holds the key to your future? Theo Peserus: an alpha of the mighty Peserus clan, called forth to provide the clan with a child. For a tree to bear fruit, a worthy Capri must be chosen to inseminate him. Seram Marita: a revolutionary army soldier hailing from the Langeres clan. Having escaped from his imprisonment, he now weaves through the maze-like halls of the Peserus castle, looking for a way out. But a tempting odor permeates the air and leads Seram straight to the enemy. Intoxicated on pheromones, the two adversaries are now engaged, not in a battle for their lives, but in a war of lust... What fruit will come to bear when these foes, this Smyrna and this Capri, become entangled in a decadence that they both cannot resist…?',
        characters: [
            { name: 'Theo Peserus', pic: 'images/theo.jpg' },
            { name: 'Seram Marita', pic: 'images/seth.jpg' }
        ]
    }
];

const app = document.getElementById('app');
const comicsContainer = app.querySelector('.comics-container');
const comicDetails = app.querySelector('.comic-details');
const welcomePopup = document.getElementById('welcome-popup');
const backgroundInput = document.getElementById('background-input');
const closePopupButton = document.getElementById('close-popup');

// Function to display comics
function displayComics() {
    comicsContainer.innerHTML = '';
    comicsData.forEach(comic => {
        const comicItem = document.createElement('div');
        comicItem.classList.add('comic-item');
        
        const img = document.createElement('img');
        img.src = comic.profilePic;
        img.alt = comic.name;
        
        const name = document.createElement('span');
        name.textContent = comic.name;
        
        comicItem.appendChild(img);
        comicItem.appendChild(name);
        
        comicItem.addEventListener('click', () => {
            showComicDetails(comic);
        });
        
        comicsContainer.appendChild(comicItem);
    });
}

// Function to show comic details
function showComicDetails(comic) {
    comicDetails.innerHTML = `
        <h2>${comic.name}</h2>
        <img src="${comic.profilePic}" alt="${comic.name}" style="width: 100px; height: 100px; border-radius: 50%;">
        <p>${comic.bio}</p>
        <h3>Characters:</h3>
        <ul>
            ${comic.characters.map(character => `<li><img src="${character.pic}" alt="${character.name}" style="width: 50px; height: 50px; border-radius: 50%;"> ${character.name}</li>`).join('')}
        </ul>
    `;
    
    comicDetails.classList.add('active');
}

// Function to set background image
function setBackgroundImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.body.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
}

// Event listeners
backgroundInput.addEventListener('change', setBackgroundImage);
closePopupButton.addEventListener('click', () => {
    welcomePopup.style.display = 'none';
    displayComics();
});

// Initialize the app
welcomePopup.style.display = 'flex';