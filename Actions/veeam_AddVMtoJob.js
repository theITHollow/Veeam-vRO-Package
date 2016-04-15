
//Connnect to Backup and Replication Server
var PostResponse = BRHost.createRequest("POST", "/api/sessionMngr/", null).execute();
//System.log("Connection Successful:  " + PostResponse.contentAsString);
 
//---------------------------------------------------------------------


//Create REST Request

var content = xmlString;
System.log("Content: " + content);

var request = BRHost.createRequest("POST", "api/jobs/" + jobID + "/includes", content);
request.contentType = "application\/xml";
request.setHeader("Accept", "application/xml");

//Log Request Details
System.log("Request URL: " + request.fullUrl);
System.log("Request: " + request)

//Execute REST Request
var response = request.execute();
//prepare output parameters
System.log("Response: " + response);
statusCode = response.statusCode;
statusCodeAttribute = statusCode;
System.log("Status code: " + statusCode);
contentLength = response.contentLength;
System.log("Content length is: " + contentLength);
headers = response.getAllHeaders();
contentAsString = response.contentAsString;
System.log("Content as string: " + contentAsString);

if ( statusCode != 202 ) {
    throw "HTTPError: status code: " + statusCode;
} else {
    return true;
}