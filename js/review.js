// Define an array of customer reviews
const reviews = [
  {
    name: "Yersultan Zharylkasyn",
    rating: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea totam praesentium consectetur dolore vero sed sint delectus non ipsum asperiores animi, voluptate, quae itaque tempore quo veniam officiis corrupti?",
    photo: "../images/photo1699465889%20(2).jpeg",
  },
  {
    name: "Amir Khamzin",
    rating: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea totam praesentium consectetur dolore vero sed sint delectus non ipsum asperiores animi, voluptate, quae itaque tempore quo veniam officiis corrupti?",
    photo: "../images/photo1699519878.jpeg",
  },
  {
    name: "Marzhan Omar",
    rating: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea totam praesentium consectetur dolore vero sed sint delectus non ipsum asperiores animi, voluptate, quae itaque tempore quo veniam officiis corrupti?",
    photo: "../images/avatar730285413.jpg",
  },
  {
    name: "Sagidolla Baktybek",
    rating: 4,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea totam praesentium consectetur dolore vero sed sint delectus non ipsum asperiores animi, voluptate, quae itaque tempore quo veniam officiis corrupti?",
    photo: "../images/avatar1329470069.jpg",
  },
];

// Function to display reviews
function displayReviews() {
  const reviewContainer = document.querySelector(".box-container");

  reviews.forEach((review) => {
    const reviewBox = document.createElement("div");
    reviewBox.classList.add("box");

    const stars = document.createElement("div");
    stars.classList.add("stars");
    for (let i = 0; i < review.rating; i++) {
      const starIcon = document.createElement("i");
      starIcon.classList.add("fas", "fa-star");
      stars.appendChild(starIcon);
    }

    const reviewText = document.createElement("p");
    reviewText.textContent = review.text;

    const userContainer = document.createElement("div");
    userContainer.classList.add("user");

    const userImage = document.createElement("img");
    userImage.src = review.photo;
    userImage.alt = "photo customers";

    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    const userName = document.createElement("h4");
    userName.textContent = review.name;

    const userRole = document.createElement("span");
    userRole.textContent = "happy customer";

    userContainer.appendChild(userImage);

    userInfo.appendChild(userName);
    userInfo.appendChild(userRole);

    reviewBox.appendChild(stars);
    reviewBox.appendChild(reviewText);
    reviewBox.appendChild(userContainer);
    reviewBox.appendChild(userInfo); // Append the userInfo to the reviewBox

    reviewBox.innerHTML += '<span class="fas fa-quote-right"></span>';

    reviewContainer.appendChild(reviewBox);
  });
}

function displayGuestComment(guestName, guestComment, guestRating) {
  const reviewContainer = document.querySelector(".box-container");

  const commentBox = document.createElement("div");
  commentBox.classList.add("box");

  // Adding guest name and constant guest photo
  const guestPhoto =
    "https://secure.gravatar.com/avatar/0de72e2274be4b434c7f2bfeebcb0dc1?s=500&d=mm&r=g";
  commentBox.innerHTML = `
    <div class="box">
      <div class="stars">
        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
      </div>
      <p>${guestComment}</p>
      <div class="user">
        <img src="${guestPhoto}" alt="photo ${guestName}">
        <h3>${guestName}</h3> <!-- Include the guest's name here -->
      </div>
      <span class="fas fa-quote-right"></span>
    </div>`;

  reviewContainer.appendChild(commentBox);
}

// Event listener for the guest comment form submission
const guestCommentForm = document.getElementById("guestCommentForm");
guestCommentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get details from the form
  const guestName = document.getElementById("guestName").value;
  const guestComment = document.getElementById("guestComment").value;
  const guestRating = document.getElementById("guestRating").value;

  // Display the guest comment
  displayGuestComment(guestName, guestComment, guestRating);

  // Clear the form fields
  document.getElementById("guestName").value = "";
  document.getElementById("guestComment").value = "";
  document.getElementById("guestRating").value = 0;
});

// Event listeners for rating stars
const ratingStars = document.querySelectorAll(".rating .star");
ratingStars.forEach((star) => {
  star.addEventListener("click", function () {
    const ratingValue = this.dataset.value;
    document.getElementById("guestRating").value = ratingValue;
  });
});
// Call the function to display reviews
displayReviews();

// Define founder details
const founderDetails = {
  name: "",
  imageSrc: "../images/f.jpg",
  bio: "",
  profileLink: "https://www.instagram.com/maratovvich__/",
};

// Function to display founder details

// Function to display founder details
function displayFounderDetails() {
  const founderSection = document.querySelector(".founder");

  const founderBox = document.createElement("div");
  founderBox.classList.add("box", "row", "align-items-center");

  const founderColumn = document.createElement("div");
  founderColumn.classList.add("col-md-6");

  const founderHeading = document.createElement("h2");
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  cardContainer.style.maxWidth = "250px"; // Adjusted maximum width

  const founderImage = document.createElement("img");
  founderImage.classList.add("card-img-top", "founder-photo", "rounded-cube");
  founderImage.src = founderDetails.imageSrc;
  founderImage.alt = "Founder's image";
  founderImage.style.width = "250px"; // Smaller image size

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const founderName = document.createElement("h4");
  founderName.classList.add("card-title");
  founderName.textContent = founderDetails.name;

  const founderQuote = document.createElement("p");
  founderQuote.classList.add("card-text", "font-italic", "mb-4", "fs-5");
  founderQuote.textContent = `"Scott Frank (born March 10, 1960) is an American film director, producer, screenwriter, and author."`; // Adjust with the actual phrase or quote

  const founderBio = document.createElement("p");
  founderBio.classList.add("card-text", "mb-4", "fs-5");
  founderBio.textContent = founderDetails.bio;

  const profileLink = document.createElement("a");
  profileLink.classList.add("btn", "btn-primary");
  profileLink.href = founderDetails.profileLink;
  profileLink.textContent = "See Profile";
  profileLink.setAttribute("data-toggle", "tooltip");
  profileLink.setAttribute("title", "Visit Founder's Profile");

  cardBody.appendChild(founderName);
  cardBody.appendChild(founderQuote);
  cardBody.appendChild(founderBio);
  cardBody.appendChild(profileLink);

  cardContainer.appendChild(founderImage);
  cardContainer.appendChild(cardBody);

  founderColumn.appendChild(founderHeading);
  founderColumn.appendChild(cardContainer);

  const achievementsColumn = document.createElement("div");
  achievementsColumn.classList.add(
    "col-md-6",
    "text-center",
    "achievements-column",
  );

  const achievementsTitle = document.createElement("h3");
  achievementsTitle.textContent = "Achievements";
  achievementsTitle.classList.add("text-primary", "fw-bold", "mb-4");

  const achievementsList = document.createElement("ul");
  achievementsList.classList.add("list-unstyled", "ps-0");

  const achievements = [
    "Emmy-winning director of 'The Queen's Gambit'",
    "Renowned screenwriter of 'Out of Sight' and 'Logan'",
    "Versatile in directing, producing, and impactful storytelling",
    "Consistent critical acclaim for compelling storytelling",
  ];

  achievements.forEach((achievement) => {
    const listItem = document.createElement("li");
    listItem.textContent = achievement;
    listItem.classList.add("my-2", "text-start", "achievement-item");
    achievementsList.appendChild(listItem);
  });

  achievementsColumn.appendChild(achievementsTitle);
  achievementsColumn.appendChild(achievementsList);

  founderBox.appendChild(founderColumn);
  founderBox.appendChild(achievementsColumn);

  founderSection.appendChild(founderBox);

  // Phrase about Queen's Gambit
  const phraseBox = document.createElement("div");
  phraseBox.classList.add("box");

  phraseBox.appendChild(phrase);

  founderSection.appendChild(phraseBox);
}

// Call the function to display founder details
displayFounderDetails();

// Initialize Bootstrap tooltips

// Initialize Bootstrap tooltips
// Event listener to open founder's profile link
const profileLink = document.querySelector(".btn-primary");
profileLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.open(founderDetails.profileLink, "_blank");
});

// Event listener to show a tooltip with the rating when hovering over stars
const stars = document.querySelectorAll(".stars .fa-star");
stars.forEach((star, index) => {
  star.addEventListener("mouseover", function () {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = `Rating: ${index + 1}`;
    this.appendChild(tooltip);
  });

  star.addEventListener("mouseout", function () {
    const tooltip = this.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }
  });
});

// Initialize Bootstrap tooltips
$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});
