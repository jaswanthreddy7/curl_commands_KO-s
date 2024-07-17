<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curl Command Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Curl Command Generator</h1>
        <form id="curl-form">
            <label for="requestType">Request Type:</label>
            <select id="requestType" name="requestType" required>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="DELETE">DELETE</option>
            </select>

            <label for="url">URL:</label>
            <input type="text" id="url" name="url" value="https://" required>

            <fieldset>
                <legend>Authentication Method:</legend>
                <label>
                    <input type="radio" name="authMethod" value="basic" checked>
                    Basic (Username/Password)
                </label>
                <label>
                    <input type="radio" name="authMethod" value="token">
                    Token
                </label>
            </fieldset>

            <div id="basicAuthFields" class="auth-fields">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password">
            </div>

            <div id="tokenAuthFields" class="auth-fields" style="display: none;">
                <label for="token">Token:</label>
                <input type="text" id="token" name="token">
            </div>

            <label for="knowledgeObject">Knowledge Object:</label>
            <select id="knowledgeObject" name="knowledgeObject" required>
                <option value="admin/summarization">admin/summarization</option>
                <option value="admin/summarization/tstats:DM_{app}_{data_model_ID}">admin/summarization/tstats:DM_{app}_{data_model_ID}</option>
                <option value="data/lookup-table-files">data/lookup-table-files</option>
                <option value="data/lookup-table-files/{name}">data/lookup-table-files/{name}</option>
                <option value="data/props/calcfields">data/props/calcfields</option>
                <option value="data/props/calcfields/{name}">data/props/calcfields/{name}</option>
                <option value="data/props/extractions">data/props/extractions</option>
                <option value="data/props/extractions/{name}">data/props/extractions/{name}</option>
                <option value="data/props/fieldaliases">data/props/fieldaliases</option>
                <option value="data/props/fieldaliases/{name}">data/props/fieldaliases/{name}</option>
                <option value="data/props/lookups">data/props/lookups</option>
                <option value="data/props/lookups/{name}">data/props/lookups/{name}</option>
                <option value="data/props/sourcetype-rename">data/props/sourcetype-rename</option>
                <option value="data/props/sourcetype-rename/{name}">data/props/sourcetype-rename/{name}</option>
                <option value="data/transforms/extractions">data/transforms/extractions</option>
                <option value="data/transforms/extractions/{name}">data/transforms/extractions/{name}</option>
                <option value="data/transforms/lookups">data/transforms/lookups</option>
                <option value="data/transforms/lookups/{name}">data/transforms/lookups/{name}</option>
                <option value="data/transforms/metric-schema">data/transforms/metric-schema</option>
                <option value="data/transforms/statsdextractions">data/transforms/statsdextractions</option>
                <option value="data/ui/global-banner">data/ui/global-banner</option>
                <option value="data/ui/panels">data/ui/panels</option>
                <option value="data/ui/views">data/ui/views</option>
                <option value="data/ui/views/{name}">data/ui/views/{name}</option>
                <option value="datamodel/acceleration (DEPRECATED)">datamodel/acceleration (DEPRECATED)</option>
                <option value="datamodel/acceleration/{name} (DEPRECATED)">datamodel/acceleration/{name} (DEPRECATED)</option>
                <option value="datamodel/model">datamodel/model</option>
                <option value="datamodel/model/{name}">datamodel/model/{name}</option>
                <option value="datamodel/pivot">datamodel/pivot</option>
                <option value="directory">directory</option>
                <option value="directory/{name}">directory/{name}</option>
                <option value="saved/bookmarks/monitoring_console">saved/bookmarks/monitoring_console</option>
                <option value="saved/eventtypes">saved/eventtypes</option>
                <option value="saved/eventtypes/{name}">saved/eventtypes/{name}</option>
                <option value="search/fields">search/fields</option>
                <option value="search/fields/{field_name}">search/fields/{field_name}</option>
                <option value="search/fields/{field_name}/tags">search/fields/{field_name}/tags</option>
                <option value="search/tags">search/tags</option>
                <option value="search/tags/{tag_name}">search/tags/{tag_name}</option>
                <!-- Add more options as needed -->
            </select>

            <button type="submit">Generate Command</button>
        </form>

        <div id="result">
            <h2>Generated Command:</h2>
            <code id="curlCommand"></code>
        </div>
    </div>

    <footer>
        <p>Prepared for Prudent's Internal Team Only!</p>
    </footer>

    <script src="script.js"></script>
    <script>
        // Function to toggle authentication fields based on radio button selection
        function toggleAuthFields() {
            var authMethod = document.querySelector('input[name="authMethod"]:checked').value;
            var basicAuthFields = document.getElementById('basicAuthFields');
            var tokenAuthFields = document.getElementById('tokenAuthFields');

            if (authMethod === 'basic') {
                basicAuthFields.style.display = 'block';
                tokenAuthFields.style.display = 'none';
            } else if (authMethod === 'token') {
                basicAuthFields.style.display = 'none';
                tokenAuthFields.style.display = 'block';
            }
        }

        // Event listener for radio buttons
        var radioButtons = document.querySelectorAll('input[name="authMethod"]');
        radioButtons.forEach(function(radio) {
            radio.addEventListener('change', toggleAuthFields);
        });
    </script>
</body>
</html>
