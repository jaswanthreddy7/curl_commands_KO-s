document.getElementById('authMethod').addEventListener('change', function () {
  const authType = this.value;
  document.getElementById('basicAuthFields').style.display =
    authType === 'basic' ? 'block' : 'none';
  document.getElementById('tokenAuthFields').style.display =
    authType === 'token' ? 'block' : 'none';
});

document.getElementById('curl-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const requestType = document.getElementById('requestType').value;
  const url = document.getElementById('url').value;
  const authMethod = document.getElementById('authMethod').value;
  const knowledgeObject = document.getElementById('knowledgeObject').value;

  let endpoint = `:8089/services/${knowledgeObject}`;
  let curlCommand = `curl -k -X ${requestType} "${url}${endpoint}"`;

  if (authMethod === 'basic') {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
      alert('Username and Password are required for Basic Auth.');
      return;
    }

    curlCommand += ` -u ${username}:${password}`;
  } else if (authMethod === 'token') {
    const token = document.getElementById('token').value;
    if (!token) {
      alert('Token is required for Token Auth.');
      return;
    }

    curlCommand += ` -H "Authorization: Bearer ${token}"`;
  }

  document.getElementById('curlCommand').textContent = curlCommand;
});
