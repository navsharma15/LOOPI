const songs = [
  { name: "Channa Mereya", artist: "Arijit Singh", image: "https://scrolldroll.com/wp-content/uploads/2023/02/ae-dil-hai-mushqil-best-bollywood-romantic-movies.jpg" },
  { name: "Galliyan", artist: "Ankit Tiwari", image: "https://images.indianexpress.com/2014/05/villain480.jpg?w=414" },
  { name: "Raabta", artist: "Arijit Singh", image: "https://i.ytimg.com/vi/iBa00L677qs/maxresdefault.jpg" },
  { name: "Tera Ban Jaunga", artist: "Akhil Sachdeva", image: "https://newsarenaindia.com/_next/image?url=https%3A%2F%2Fimages.newsarenaindia.com%2F%2Funtitled-design-20241228t165436359jpg_1735385559844.jpg&w=1920&q=75" },
  { name: "Shayad", artist: "Arijit Singh", image: "https://staticimg.amarujala.com/assets/images/2020/01/16/love-aaj-kal-2-first-look_1579157167.jpeg" },
  { name: "Hasi Ban Gaye", artist: "Ami Mishra", image: "https://i.ytimg.com/vi/OSF1k2pn4yI/sddefault.jpg" },
  { name: "Rait Zara Si", artist: "Arijit Singh", image: "https://anandkumarrsonfilms.com/wp-content/uploads/2021/12/atrangi-re-movie-poster.jpg" },
  { name: "Tum Se Hi", artist: "Mohit Chauhan", image: "https://i.ytimg.com/vi/uV50UfcIT68/maxresdefault.jpg" },
  { name: "Pee Loon", artist: "Mohit Chauhan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9McBUoSstc69BeLCr5x5J9TicIPWJHxBog&s" },
  { name: "Dil Mein Ho Tum", artist: "Armaan Malik", image: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/06/enkkl9quwaemacm2363521.jpg?w=777&crop=0,10,777px,437px" },
  { name: "Jeene Laga Hoon", artist: "Atif Aslam", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJynzFJ6yHxOTPqh76HTFc0sUVH0VuoJVLU8zkktZP26h-qMag0Hzi4xUx4SFJomrX94&usqp=CAU" },
  { name: "Tum Hi Ho", artist: "Arijit Singh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaQ1YuqhEm2QmMKS3RP1CodO0v9conbN8Mg&s" }
];

const songsGrid = document.getElementById("songsGrid");

songs.forEach((song) => {
  const card = document.createElement("div");
  card.classList.add("song-card");
  card.innerHTML = `
    <img src="${song.image}" alt="${song.name}">
    <div class="info">
      <h3>${song.name}</h3>
      <p>${song.artist}</p>
    </div>
  `;
  songsGrid.appendChild(card);
});
