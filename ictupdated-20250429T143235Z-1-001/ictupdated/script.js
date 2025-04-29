document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const pages = document.querySelectorAll(".page");
    let currentPage = document.querySelector(".page.active");

    // Tab Switching Logic
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetPage = document.getElementById(this.getAttribute("data-page"));

            if (targetPage && targetPage !== currentPage) {
                currentPage.classList.remove("active");
                targetPage.classList.add("active");

                // Fix: Update active navigation link
                navLinks.forEach(nav => nav.classList.remove("active"));
                this.classList.add("active");

                currentPage = targetPage;
            }
        });
    });

    // Modal Pop-up Logic
    const aboutButtons = document.querySelectorAll(".about-btn");
    const buyButtons = document.querySelectorAll(".buy-tickets");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close");
    const modalContent = document.getElementById("modalContent");

    function showModal(content) {
        modal.style.display = "block";
        modalContent.innerHTML = content;
    }

    aboutButtons.forEach(button => {
        button.addEventListener("click", function () {
            showModal("Movie details will be displayed here.");
        });
    });

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            showModal("Booking system is under development.");
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    //Close modal when clicking outside (overlay)
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const pages = document.querySelectorAll(".page");
    let currentPage = document.querySelector(".page.active");

    // Tab Switching Logic
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetPage = document.getElementById(this.getAttribute("data-page"));

            if (targetPage && targetPage !== currentPage) {
                currentPage.classList.remove("active");
                targetPage.classList.add("active");
                currentPage.style.left = "100%"; 
                targetPage.style.left = "0";      
                currentPage = targetPage;
            }
        });
    });

    // Show Booking Form When "Buy Tickets" is Clicked
    document.querySelectorAll(".buy-tickets").forEach(button => {
        button.addEventListener("click", function () {
            document.getElementById("bookingForm").style.display = "block";
        });
    });

    // Close Booking Form
    window.closeBookingForm = function () {
        document.getElementById("bookingForm").style.display = "none";
    };
});

function showPopup(title, description) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-description").innerText = description;

    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}



pages.foreach(page => page.classList.remove("active"));
targetPage.classList.add("active");

function showNowShowing() {
    // Hide all other sections
    document.querySelectorAll('.page').forEach(section => {
        section.style.display = 'none';
    });

    // Show the Now Showing section
    document.getElementById('now-showing').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    // Get all nav links
    const navLinks = document.querySelectorAll("nav a");

    // Get all page sections
    const pages = document.querySelectorAll(".page");

    // Default: Show home page
    document.getElementById("home").style.display = "block";

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Stop the page from refreshing

            let pageId = this.getAttribute("data-page"); // Get the page ID
            
            // Hide all pages first
            pages.forEach(page => {
                page.style.display = "none";
            });

            // Show the selected page
            document.getElementById(pageId).style.display = "block";
        });
    });
});

// Function to Show Popup
function showPopup(title, description) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Function to Close Popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Function to Open Booking Form
function openBookingForm() {
    document.getElementById('bookingForm').style.display = 'block';
}

// Function to Close Booking Form
function closeBookingForm() {
    document.getElementById('bookingForm').style.display = 'none';
}

// Ensure event listeners are properly attached to all movies
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.about-btn').forEach(button => {
        button.addEventListener('click', function() {
            const title = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            const description = this.getAttribute('onclick').match(/'([^']+)'/g)[1].replace(/'/g, '');
            showPopup(title, description);
        });
    });

    document.querySelectorAll('.buy-tickets').forEach(button => {
        button.addEventListener('click', openBookingForm);
    });
});


