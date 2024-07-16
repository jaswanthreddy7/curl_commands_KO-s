document.getElementById('authMethod').addEventListener('change', function() {
    const authType = this.value;
    document.getElementById('basicAuthFields').style.display = authType === 'basic' ? 'block' : 'none';
    document.getElementById('tokenAuthFields').style.display = authType === 'token' ? 'block' : 'none';
});

document.getElementById('curl-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const requestType = document.getElementById('requestType').value;
    const url = document.getElementById('url').value;
    const authMethod = document.getElementById('authMethod').value;
    const knowledgeObject = document.getElementById('knowledgeObject').value;

    let endpoint = '';
    switch (knowledgeObject) {
        case 'data/props/extractions':
            endpoint = '/servicesNS/-/-/data/props/extractions';
            break;
        case 'data/ui/panels':
            endpoint = '/servicesNS/-/-/data/ui/panels';
            break;
        case 'data/ui/views':
            endpoint = '/servicesNS/-/-/data/ui/views';
            break;
        case 'data/indexes':
            endpoint = '/servicesNS/-/-/data/indexes';
            break;
        case 'data/props/lookups':
            endpoint = '/services/data/transforms/lookups';
            break;
        case 'data/ui/alerts':
            endpoint = '/servicesNS/-/-/data/ui/alerts';
            break;
        case 'data/ui/nav':
            endpoint = '/servicesNS/-/-/data/ui/nav';
            break;
        case 'data/transforms/lookups':
            endpoint = '/servicesNS/-/-/data/transforms/lookups';
            break;
        case 'data/ui/workflows':
            endpoint = '/servicesNS/-/-/data/ui/workflows';
            break;
        case 'data/ui/fieldtransformations':
            endpoint = '/servicesNS/-/-/data/ui/fieldtransformations';
            break;
        // Add more cases as needed
        default:
            endpoint = '';
    }

    let curlCommand = `curl -X ${requestType} "${url}${endpoint}"`;

    if (authMethod === 'basic') {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        curlCommand += ` -u ${username}:${password}`;
    } else if (authMethod === 'token') {
        const token = document.getElementById('token').value;
        curlCommand += ` -H 'Authorization: Bearer ${token}'`;
    }

    document.getElementById('curlCommand').textContent = curlCommand;
});
