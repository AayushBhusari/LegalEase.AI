function searchLawyers() {
  var searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  var suggestions = document.getElementById("suggestions");
  var searchResults = document.getElementById("searchResults");
  var resultsList = document.getElementById("resultsList");

  // Clear previous search results
  resultsList.innerHTML = "";

  if (searchInput !== "") {
    // Hide suggestions and display search results
    suggestions.style.display = "none";
    searchResults.style.display = "block";

    // Mocking search results with random names
    const lawyers = [
      {
        name: "Rahul Sharma",
        type: "Criminal Lawyer",
        location: "Indira Nagar, Delhi",
        ratings: "4.2 with 15 reviews",
      },
      {
        name: "Sneha Patel",
        type: "Civil Lawyer",
        location: "Bandra, Mumbai",
        ratings: "4.7 with 20 reviews",
      },
      {
        name: "Ananya Singh",
        type: "Family Lawyer",
        location: "Koramangala, Bangalore",
        ratings: "4.5 with 12 reviews",
      },
      {
        name: "Vikram Malhotra",
        type: "Corporate Lawyer",
        location: "Salt Lake City, Kolkata",
        ratings: "4.9 with 25 reviews",
      },
      {
        name: "Anil Reddy",
        type: "Labor and Employment Lawyer",
        location: "Madhapur, Hyderabad",
        ratings: "4.3 with 18 reviews",
      },
      {
        name: "Priya Joshi",
        type: "Real Estate Lawyer",
        location: "Powai, Mumbai",
        ratings: "4.6 with 22 reviews",
      },
      {
        name: "Rajiv Gupta",
        type: "Intellectual Property Lawyer",
        location: "Viman Nagar, Pune",
        ratings: "4.8 with 30 reviews",
      },
      {
        name: "Neha Shah",
        type: "Tax Lawyer",
        location: "Marathahalli, Bangalore",
        ratings: "4.4 with 17 reviews",
      },
      {
        name: "Amit Kumar",
        type: "Immigration Lawyer",
        location: "Gomti Nagar, Lucknow",
        ratings: "4.6 with 21 reviews",
      },
      {
        name: "Rakesh Gupta",
        type: "Consumer Lawyer",
        location: "Nehru Place, Delhi",
        ratings: "4.5 with 19 reviews",
      },
      {
        name: "Shreya Singh",
        type: "Environmental Lawyer",
        location: "Salt Lake, Kolkata",
        ratings: "4.7 with 23 reviews",
      },
      {
        name: "Avinash Patel",
        type: "Human Rights Lawyer",
        location: "Malad, Mumbai",
        ratings: "4.9 with 28 reviews",
      },
      {
        name: "Aditi Verma",
        type: "Medical Malpractice Lawyer",
        location: "Jayanagar, Bangalore",
        ratings: "4.3 with 16 reviews",
      },
      {
        name: "Harish Tiwari",
        type: "Bankruptcy Lawyer",
        location: "Chandni Chowk, Delhi",
        ratings: "4.8 with 27 reviews",
      },
      {
        name: "Nisha Singh",
        type: "Personal Injury Lawyer",
        location: "Juhu, Mumbai",
        ratings: "4.6 with 24 reviews",
      },
      {
        name: "Suresh Kumar",
        type: "Divorce Lawyer",
        location: "Aundh, Pune",
        ratings: "4.4 with 18 reviews",
      },
      {
        name: "Meera Sharma",
        type: "Property Lawyer",
        location: "Sector 18, Noida",
        ratings: "4.7 with 22 reviews",
      },
      {
        name: "Alok Singh",
        type: "Employment Lawyer",
        location: "Secunderabad, Hyderabad",
        ratings: "4.5 with 20 reviews",
      },
      {
        name: "Vikas Gupta",
        type: "Contracts Lawyer",
        location: "Vasant Kunj, Delhi",
        ratings: "4.8 with 26 reviews",
      },
      {
        name: "Neha Verma",
        type: "Traffic Lawyer",
        location: "Vashi, Mumbai",
        ratings: "4.6 with 23 reviews",
      },
    ];

    // Filter lawyers based on search input
    const filteredLawyers = lawyers.filter((lawyer) => {
      const nameMatch = lawyer.name.toLowerCase().includes(searchInput);
      const typeMatch = lawyer.type.toLowerCase().includes(searchInput);
      const locationMatch = lawyer.location.toLowerCase().includes(searchInput);
      return nameMatch || typeMatch || locationMatch;
    });

    // Display search results
    if (filteredLawyers.length > 0) {
      filteredLawyers.forEach((lawyer) => {
        var listItem = document.createElement("div");
        listItem.classList.add("lawyer-item");

        // Lawyer image
        var lawyerImageContainer = document.createElement("div");
        lawyerImageContainer.classList.add("lawyer-image");
        var lawyerImage = document.createElement("img");
        lawyerImage.src = "placeholder.jpg"; // Placeholder image source
        lawyerImage.alt = "Lawyer Image";
        lawyerImageContainer.appendChild(lawyerImage);
        listItem.appendChild(lawyerImageContainer);

        // Lawyer details
        var lawyerDetails = document.createElement("div");
        lawyerDetails.classList.add("lawyer-details");

        var lawyerName = document.createElement("h4");
        lawyerName.textContent = lawyer.name;

        var lawyerType = document.createElement("p");
        lawyerType.textContent = `Type: ${lawyer.type}`;
        lawyerType.classList.add("highlight");

        var lawyerLocation = document.createElement("p");
        lawyerLocation.textContent = `Location: ${lawyer.location}`;

        var lawyerRatings = document.createElement("p");
        lawyerRatings.textContent = `Ratings: ${lawyer.ratings}`;

        lawyerDetails.appendChild(lawyerName);
        lawyerDetails.appendChild(lawyerType);
        lawyerDetails.appendChild(lawyerLocation);
        lawyerDetails.appendChild(lawyerRatings);

        listItem.appendChild(lawyerDetails);

        resultsList.appendChild(listItem);
      });
    } else {
      // If no matching lawyers found, display a message
      resultsList.textContent = "No matching lawyers found.";
    }
  } else {
    // If search input is empty, display suggestions and hide search results
    suggestions.style.display = "block";
    searchResults.style.display = "none";
  }
}
