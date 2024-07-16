// script.js

// Function to handle form submission
document.getElementById('curl-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch form values
    var requestType = document.getElementById('requestType').value;
    var url = document.getElementById('url').value.trim(); // Trim whitespace
    var authMethod = document.getElementById('authMethod').value;
    var knowledgeObject = document.getElementById('knowledgeObject').value;
    var curlCommand = 'curl';

    // Add request type option
    curlCommand += ' -X ' + requestType;

    // Add authentication options if selected
    if (authMethod === 'basic') {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        curlCommand += ' -u ' + username + ':' + password;
    } else if (authMethod === 'token') {
        var token = document.getElementById('token').value;
        curlCommand += ' -H "Authorization: Bearer ' + token + '"';
    }

    // Construct full URL with fixed https:// prefix and user-provided domain
    var fullUrl = 'https://' + url;

    // Add knowledge object endpoint
    curlCommand += ' ' + fullUrl + '/services/' + knowledgeObject;

    // Display generated curl command
    document.getElementById('curlCommand').innerText = curlCommand;
});

// Function to toggle authentication fields based on selection
function toggleAuthFields() {
    var authMethod = document.getElementById('authMethod').value;
    var basicAuthFields = document.getElementById('basicAuthFields');
    var tokenAuthFields = document.getElementById('tokenAuthFields');

    if (authMethod === 'basic') {
        basicAuthFields.style.display = 'block';
        tokenAuthFields.style.display = 'none';
    } else if (authMethod === 'token') {
        basicAuthFields.style.display = 'none';
        tokenAuthFields.style.display = 'block';
    } else {
        basicAuthFields.style.display = 'none';
        tokenAuthFields.style.display = 'none';
    }
}
