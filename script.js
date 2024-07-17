document.getElementById('authMethod').addEventListener('change', function() {
    const authType = this.value;
    document.getElementById('basicAuthFields').style.display = authType === 'basic' ? 'block' : 'none';
    document.getElementById('tokenAuthFields').style.display = authType === 'token' ? 'block' : 'none';
});

document.getElementById('curl-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const requestType = document.getElementById('requestType').value;
    const url = document.getElementById('url').value;
    const authMethod = document.querySelector('input[name="authMethod"]:checked').value; // Updated to get selected authMethod
    const knowledgeObject = document.getElementById('knowledgeObject').value;

    let endpoint = '';
    switch (knowledgeObject) {
        case 'admin/summarization':
            endpoint = ':8089/services/admin/summarization';
            break;
        case 'admin/summarization/tstats:DM_{app}_{data_model_ID}':
            endpoint = ':8089/services/admin/summarization/tstats:DM_{app}_{data_model_ID}';
            break;
        case 'data/lookup-table-files':
            endpoint = ':8089/services/data/lookup-table-files';
            break;
        case 'data/lookup-table-files/{name}':
            endpoint = ':8089/services/data/lookup-table-files/{name}';
            break;
        case 'data/props/calcfields':
            endpoint = ':8089/services/data/props/calcfields';
            break;
        case 'data/props/calcfields/{name}':
            endpoint = ':8089/services/data/props/calcfields/{name}';
            break;
        case 'data/props/extractions':
            endpoint = ':8089/services/data/props/extractions';
            break;
        case 'data/props/extractions/{name}':
            endpoint = ':8089/services/data/props/extractions/{name}';
            break;
        case 'data/props/fieldaliases':
            endpoint = ':8089/services/data/props/fieldaliases';
            break;
        case 'data/props/fieldaliases/{name}':
            endpoint = ':8089/services/data/props/fieldaliases/{name}';
            break;
        case 'data/props/lookups':
            endpoint = ':8089/services/data/props/lookups';
            break;
        case 'data/props/lookups/{name}':
            endpoint = ':8089/services/data/props/lookups/{name}';
            break;
        case 'data/props/sourcetype-rename':
            endpoint = ':8089/services/data/props/sourcetype-rename';
            break;
        case 'data/props/sourcetype-rename/{name}':
            endpoint = ':8089/services/data/props/sourcetype-rename/{name}';
            break;
        case 'data/transforms/extractions':
            endpoint = ':8089/services/data/transforms/extractions';
            break;
        case 'data/transforms/extractions/{name}':
            endpoint = ':8089/services/data/transforms/extractions/{name}';
            break;
        case 'data/transforms/lookups':
            endpoint = ':8089/services/data/transforms/lookups';
            break;
        case 'data/transforms/lookups/{name}':
            endpoint = ':8089/services/data/transforms/lookups/{name}';
            break;
        case 'data/transforms/metric-schema':
            endpoint = ':8089/services/data/transforms/metric-schema';
            break;
        case 'data/transforms/statsdextractions':
            endpoint = ':8089/services/data/transforms/statsdextractions';
            break;
        case 'data/ui/global-banner':
            endpoint = ':8089/services/data/ui/global-banner';
            break;
        case 'data/ui/panels':
            endpoint = ':8089/services/data/ui/panels';
            break;
        case 'data/ui/views':
            endpoint = ':8089/services/data/ui/views';
            break;
        case 'data/ui/views/{name}':
            endpoint = ':8089/services/data/ui/views/{name}';
            break;
        case 'datamodel/acceleration (DEPRECATED)':
            endpoint = ':8089/services/datamodel/acceleration';
            break;
        case 'datamodel/acceleration/{name} (DEPRECATED)':
            endpoint = ':8089/services/datamodel/acceleration/{name}';
            break;
        case 'datamodel/model':
            endpoint = ':8089/services/datamodel/model';
            break;
        case 'datamodel/model/{name}':
            endpoint = ':8089/services/datamodel/model/{name}';
            break;
        case 'datamodel/pivot':
            endpoint = ':8089/services/datamodel/pivot';
            break;
        case 'directory':
            endpoint = ':8089/services/directory';
            break;
        case 'directory/{name}':
            endpoint = ':8089/services/directory/{name}';
            break;
        case 'saved/bookmarks/monitoring_console':
            endpoint = ':8089/services/saved/bookmarks/monitoring_console';
            break;
        case 'saved/eventtypes':
            endpoint = ':8089/services/saved/eventtypes';
            break;
        case 'saved/eventtypes/{name}':
            endpoint = ':8089/services/saved/eventtypes/{name}';
            break;
        case 'search/fields':
            endpoint = ':8089/services/search/fields';
            break;
        case 'search/fields/{field_name}':
            endpoint = ':8089/services/search/fields/{field_name}';
            break;
        case 'search/fields/{field_name}/tags':
            endpoint = ':8089/services/search/fields/{field_name}/tags';
            break;
        case 'search/tags':
            endpoint = ':8089/services/search/tags';
            break;
        case 'search/tags/{tag_name}':
            endpoint = ':8089/services/search/tags/{tag_name}';
            break;
        default:
            endpoint = '';
    }

    let curlCommand = `curl -k -X ${requestType} "${url}${endpoint}"`;

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
