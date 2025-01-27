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

            <label for="authMethod">Authentication Method:</label>
            <select id="authMethod" name="authMethod" onchange="toggleAuthFields()" required>
                <option value="none">None</option>
                <option value="basic">Basic (Username/Password)</option>
                <option value="token">Token</option>
            </select>

            <div id="basicAuthFields" class="auth-fields" style="display: none;">
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
                <option value="data/props/extractions">data/props/extractions</option>
                <option value="data/ui/panels">data/ui/panels</option>
                <option value="data/ui/views">data/ui/views</option>
                <option value="data/indexes">data/indexes</option>
                <option value="data/props/lookups">data/props/lookups</option>
                <option value="data/ui/alerts">data/ui/alerts</option>
                <option value="data/ui/nav">data/ui/nav</option>
                <option value="data/transforms/lookups">data/transforms/lookups</option>
                <option value="data/ui/workflows">data/ui/workflows</option>
                <option value="data/ui/fieldtransformations">data/ui/fieldtransformations</option>
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
</body>
</html>
