const bacBtn = document.querySelector("back-btn");

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

    const lawyers = [
      //Civil Lawyers
      {
        name: "Adv. Parveen Southey",
        type: "Civil Lawyer",
        location: "West Patel Nagar, Delhi",
        specialty:
          "Domestic Violence, Divorce Case, Family Case, Matrimonial Cases",
        contact: 7048382235,
      },
      {
        name: "Adv. Dharampal Singh",
        type: "Civil Lawyer",
        location: "Surajpur, Greater Noida",
        specialty: "Divorce Case, Documentation, Family Case, Legal Advisor",
        contact: 8105359678,
      },
      {
        name: "Adv. Rohit Gupta ",
        type: "Civil Lawyer",
        location: "East of Kailash, Delhi",
        specialty:
          "Domestic Violence, Divorce Case, Family Case, Legal Advisor",
        contact: 7487085162,
      },
      {
        name: "Adv. Vivek Singh ",
        type: "Civil Lawyer",
        location: "Raj Nagar, Ghaziabad",
        specialty:
          "Matrimonial Cases, Divorce Case, Family Case, Real Estate Lawyer",
        contact: 7411840165,
      },
      {
        name: "Adv. Shreya Dixit ",
        type: "Civil Lawyer",
        location: "Sohna Road, Gurgaon",
        specialty:
          "Divorce Case, Domestic Violence, Criminal Lawyer, Employment Lawyer",
        contact: 8147943845,
      },
      {
        name: "Adv. Praveen Thukral ",
        type: "Civil Lawyer",
        location: "Jagat Puri, Delhi",
        specialty:
          "Divorce Case, Criminal Lawyer, Family Lawyer, Marriage Registrar",
        contact: 7795666575,
      },
      {
        name: "Adv. Suprabh Kumar Roshan ",
        type: "Civil Lawyer",
        location: "India Gate, Delhi",
        specialty:
          "Domestic Violence, Divorce Case, Family Case, Matrimonial Cases",
        contact: 7947432825,
      },
      {
        name: "Ajay Kumar Singh",
        type: "Civil Lawyer",
        location: "Supreme Court, Delhi",
        specialty:
          "Divorce Case, Matrimonial Cases, Real Estate Lawyer, Criminal Lawyer",
        contact: 9035640550,
      },
      {
        name: "Adv. Pratyush Raj ",
        type: "Civil Lawyer",
        location: "India Gate, Delhi",
        specialty:
          "Society Registration, Family Case, Matrimonial Cases, Real Estate Lawyer",
        contact: 7947132653,
      },
      //immigration lawyers
      {
        name: "Adv. Manoj Kr Mishra ",
        type: "Immigration Lawyer",
        location: "Tis Hazari, Delhi",
        specialty:
          "Cyber Lawyer, Immigration Lawyer, Criminal Lawyer, Real Estate Lawyer",
        contact: 7411825831,
      },
      {
        name: "Adv. Bhumika Aggarwal ",
        type: "Immigration Lawyer",
        location: "Patiala House, Delhi",
        specialty:
          "Tax Lawyer, Cyber Lawyer, Muslim Lawyer, Immigration Lawyer",
        contact: 9035275632,
      },
      {
        name: "Adv. RK Sharma ",
        type: "Immigration Lawyer",
        location: "Adv. RK Sharma ",
        specialty: "Immigration Lawyer, Real Estate Lawyer, Employment Lawyer",
        contact: 7942685455,
      },
      {
        name: "Adv. Shashank Vachher ",
        type: "Immigration Lawyer",
        location: "Karol Bagh, Delhi",
        specialty:
          "Tax Lawyer, Immigration Lawyer, Family Lawyer, Real Estate Lawyer",
        contact: 7947415407,
      },
      {
        name: "Adv. Santram Bhati ",
        type: "Immigration Lawyer",
        location: "Greater Noida",
        specialty:
          "Tax Lawyer, Immigration Lawyer, Insurance Lawyer, Matrimonial Lawyer",
        contact: 8105467398,
      },
      {
        name: "Adv. Pooja Kaintora ",
        type: "Immigration Lawyer",
        location: "Saket, Delhi",
        specialty: "Immigration Lawyer",
        contact: 7942777398,
      },
      /* Real estate lawyers */
      {
        name: "Adv. Manoj Kr Mishra ",
        type: "Real Estate Lawyer",
        location: "Tis Hazari, Delhi",
        specialty:
          "Cyber Lawyer, Immigration Lawyer, Criminal Lawyer, Real Estate Lawyer",
        contact: 7411825831,
      },
      {
        name: "Adv. Vivek Singh ",
        type: "Real Estate Lawyer",
        location: "Raj Nagar, Ghaziabad",
        specialty:
          "Matrimonial Cases, Divorce Case, Family Case, Real Estate Lawyer",
        contact: 7411840165,
      },
      {
        name: "Ajay Kumar Singh",
        type: "Real Estate Lawyer",
        location: "Supreme Court, Delhi",
        specialty:
          "Divorce Case, Matrimonial Cases, Real Estate Lawyer, Criminal Lawyer",
        contact: 9035640550,
      },
      {
        name: "Adv. Pratyush Raj ",
        type: "Real Estate Lawyer",
        location: "India Gate, Delhi",
        specialty:
          "Society Registration, Family Case, Matrimonial Cases, Real Estate Lawyer",
        contact: 7947132653,
      },
      {
        name: "Adv. Shashank Vachher ",
        type: "Real Estate Lawyer",
        location: "Karol Bagh, Delhi",
        specialty:
          "Tax Lawyer, Immigration Lawyer, Family Lawyer, Real Estate Lawyer",
        contact: 7947415407,
      },
      {
        name: "Adv. RK Sharma ",
        type: "Real Estate Lawyer",
        location: "Adv. RK Sharma ",
        specialty: "Immigration Lawyer, Real Estate Lawyer, Employment Lawyer",
        contact: 7942685455,
      },
      {
        name: "Adv. Rovin Singh ",
        type: "Real Estate Lawyer",
        location: "New Delhi",
        specialty: "Real Estate Lawyer, Criminal Lawyer, Employment Lawyer",
        contact: 7947152902,
      },

      //Criminal Lawyers
      {
        name: "Adv. Manoj Kr Mishra ",
        type: "Criminal Lawyer",
        location: "Tis Hazari, Delhi",
        specialty:
          "Cyber Lawyer, Immigration Lawyer, Criminal Lawyer, Real Estate Lawyer",
        contact: 7411825831,
      },
      {
        name: "Adv. Shreya Dixit ",
        type: "Criminal Lawyer",
        location: "Sohna Road, Gurgaon",
        specialty:
          "Divorce Case, Domestic Violence, Criminal Lawyer, Employment Lawyer",
        contact: 8147943845,
      },
      {
        name: "Adv. Narendra Singh ",
        type: "Criminal Lawyer",
        location: "Supreme Court, Delhi",
        specialty: "Criminal Lawyer",
        contact: 9811338667,
      },
      {
        name: "Adv. Kapil Chandna ",
        type: "Criminal Lawyer",
        location: "Supreme Court, Delhi",
        specialty:
          "Criminal Lawyer, Cyber Lawyer, Intellectual Property Lawyer",
        contact: 7947181991,
      },
      {
        name: "Ajay Kumar Singh",
        type: "Criminal Lawyer",
        location: "Supreme Court, Delhi",
        specialty:
          "Divorce Case, Matrimonial Cases, Real Estate Lawyer, Criminal Lawyer",
        contact: 9035640550,
      },
      {
        name: "Adv. Praveen Thukral ",
        type: "Criminal Lawyer",
        location: "Jagat Puri, Delhi",
        specialty:
          "Divorce Case, Criminal Lawyer, Family Lawyer, Marriage Registrar",
        contact: 7795666575,
      },
      {
        name: "Adv. Rovin Singh ",
        type: "Criminal Lawyer",
        location: "New Delhi",
        specialty: "Real Estate Lawyer, Criminal Lawyer, Employment Lawyer",
        contact: 7947152902,
      },
      //Tax Lawyers
      {
        name: "Adv. Amit Jha ",
        type: "Tax Lawyer",
        location: "Tis Hazari, Delhi",
        specialty: "Income Tax",
        contact: 7947418590,
      },
      {
        name: "Adv. Rajat Gupta ",
        type: "Tax Lawyer",
        location: "Hisar, Haryana",
        specialty: "Tax Lawyer",
        contact: 7988034379,
      },
      {
        name: "Adv. Bhumika Aggarwal ",
        type: "Tax Lawyer",
        location: "Patiala House, Delhi",
        specialty:
          "Tax Lawyer, Cyber Lawyer, Muslim Lawyer, Immigration Lawyer",
        contact: 9035275632,
      },
      {
        name: "Adv. Shashank Vachher ",
        type: "Tax Lawyer",
        location: "Karol Bagh, Delhi",
        specialty:
          "Tax Lawyer, Immigration Lawyer, Family Lawyer, Real Estate Lawyer",
        contact: 7947415407,
      },
      {
        name: "Adv. Santram Bhati ",
        type: "Tax Lawyer",
        location: "Greater Noida",
        specialty:
          "Tax Lawyer, Immigration Lawyer, Insurance Lawyer, Matrimonial Lawyer",
        contact: 8105467398,
      },
      //IP Lawyers
      {
        name: "Adv. Kapil Chandna ",
        type: "Intellectual Property Lawyer",
        location: "Supreme Court, Delhi",
        specialty:
          "Criminal Lawyer, Cyber Lawyer, Intellectual Property Lawyer",
        contact: 7947181991,
      },
      {
        name: "Adv. Aditya Deshwal ",
        type: "Intellectual Property Lawyer",
        location: "TIS hazari, Delhi",
        specialty: "Intellectual Property Lawyer",
        contact: 7947416841,
      },
      {
        name: "Adv. Purushottam Tiwari ",
        type: "Intellectual Property Lawyer",
        location: "Supreme Court, Delhi",
        specialty: "Intellectual Property Lawyer, International Trade Law",
        contact: 7411562763,
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

        /*  // Lawyer image
        var lawyerImageContainer = document.createElement("div");
        lawyerImageContainer.classList.add("lawyer-image");
        var lawyerImage = document.createElement("img");
        lawyerImage.src = "placeholder.jpg"; // Placeholder image source
        lawyerImage.alt = "Lawyer Image";
        lawyerImageContainer.appendChild(lawyerImage);
        listItem.appendChild(lawyerImageContainer); */

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

        var lawyerSpecialty = document.createElement("p");
        lawyerSpecialty.textContent = `Specialty: ${lawyer.specialty}`;

        var lawyerContact = document.createElement("p");
        lawyerContact.textContent = `Contact: ${lawyer.contact}`;

        lawyerDetails.appendChild(lawyerName);
        lawyerDetails.appendChild(lawyerType);
        lawyerDetails.appendChild(lawyerLocation);
        lawyerDetails.appendChild(lawyerSpecialty);
        lawyerDetails.appendChild(lawyerContact);

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

// Function to search for lawyers by type
const searchByType = (type) => {
  // Get the input element
  let searchInput = document.getElementById("searchInput");
  // Set the input value to the type of lawyer
  searchInput.value = type;
  // Trigger the search function
  searchLawyers();
};
const goBack = () => {
  console.log("click");
  var suggestions = document.getElementById("suggestions");
  var searchResults = document.getElementById("searchResults");
  var resultsList = document.getElementById("resultsList");
  suggestions.style.display = "block";
  searchResults.style.display = "none";
};
