document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultsSection = document.getElementById('resultsSection');
    const searchResults = document.getElementById('searchResults');
    
    // Sample destination data - in a real app, this would come from an API
    const destinations = [
        {
            id: 1,
            name: "Paris, France",
            description: "The city of love and lights, famous for the Eiffel Tower and Louvre Museum.",
            image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            name: "Tokyo, Japan",
            description: "A vibrant mix of traditional culture and cutting-edge technology.",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            name: "New York, USA",
            description: "The city that never sleeps, with iconic landmarks like Times Square and Central Park.",
            image: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            name: "Sydney, Australia",
            description: "Famous for its Opera House and Harbour Bridge, with stunning beaches nearby.",
            image: "https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5,
            name: "Rome, Italy",
            description: "The Eternal City, home to ancient ruins like the Colosseum and Roman Forum.",
            image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6,
            name: "Cape Town, South Africa",
            description: "Stunning natural beauty with Table Mountain and beautiful coastlines.",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
    ];
    
    // Search function
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm === '') {
            alert('Please enter a search term');
            return;
        }
        
        // Filter destinations based on search term
        const filteredDestinations = destinations.filter(destination => 
            destination.name.toLowerCase().includes(searchTerm) || 
            destination.description.toLowerCase().includes(searchTerm)
        );
        
        displayResults(filteredDestinations);
    });
    
    // Clear function
    clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        resultsSection.style.display = 'none';
    });
    
    // Display results function
    function displayResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No destinations found matching your search.</p>';
        } else {
            results.forEach(destination => {
                const card = document.createElement('div');
                card.className = 'destination-card';
                card.innerHTML = `
                    <img src="${destination.image}" alt="${destination.name}">
                    <div class="destination-card-content">
                        <h3>${destination.name}</h3>
                        <p>${destination.description}</p>
                    </div>
                `;
                searchResults.appendChild(card);
            });
        }
        
        resultsSection.style.display = 'block';
    }
    
    // Allow search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to a server
        // For this example, we'll just show a success message
        alert('Form submitted:', { name, email, message });
        
        // Show success message
        contactForm.classList.add('hidden');
        successMessage.classList.remove('hidden');
        
        // Reset form (optional)
        contactForm.reset();
        
        // Hide success message after 5 seconds (optional)
        setTimeout(() => {
            successMessage.classList.add('hidden');
            contactForm.classList.remove('hidden');
        }, 1000);
    });
});