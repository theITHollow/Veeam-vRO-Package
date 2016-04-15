//Connnect to Backup and Replication Server
var PostResponse = BRHost.createRequest("POST", "/api/sessionMngr/", null).execute();
//System.log("Connection Successful:  " + PostResponse.contentAsString);
 
//Remove virtual machine from job through REST call
var PostResponse = BRHost.createRequest("POST", "/api/jobs/" + jobID + "?action=start", null).execute();
System.log("Backup Starting:  " + PostResponse.contentAsString);

statusCode = PostResponse.statusCode;

if ( statusCode != 202 ) {
    throw "HTTPError: status code: " + statusCode;
} else {
    return true;
}