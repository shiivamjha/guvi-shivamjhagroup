// Initialize an object to store vote counts
let vote = {
    'Option 1': 0,
    'Option 2': 0,
    'Option 3': 0,
    'Option 4': 0
};

// Function to handle voting
function vote(option) {
    // Increment the vote count for the selected option
    votes[option]+++;

    // Display updated results
    displayResults();
}

// Function to display results
function displayResults() {
    const resultsList = document.getElementById('result-list');
    resultsList.innerHTML = ''; // Clear previous results

    for (let option in votes) {
        // Create a list item for each option
        const li = document.createElement('li');
        li.textContent = `${options}: ${votes[option]} votes`;
        resultsList.appendChild(li);
    }

    // Show the results section after voting
    document.getElementById('vote-results').style.display = 'block';
}
