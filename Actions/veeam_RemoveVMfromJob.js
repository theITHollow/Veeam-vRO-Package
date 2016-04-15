//Connnect to Backup and Replication Server
var PostResponse = BRHost.createRequest("POST", "/api/sessionMngr/", null).execute();
//System.log("Connection Successful:  " + PostResponse.contentAsString);
 
//Remove virtual machine from job through REST call
var PostResponse = BRHost.createRequest("DELETE", "/api/jobs/" + jobID + "/includes/" + VM.name, null).execute();
//System.log("Connection Successful:  " + PostResponse.contentAsString);

statusCode = PostResponse.statusCode;

if ( statusCode != 202 ) {
    throw "HTTPError: status code: " + statusCode;
} 