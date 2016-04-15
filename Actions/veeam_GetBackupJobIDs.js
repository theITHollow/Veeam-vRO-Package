
//Connnect to Backup and Replication Server
var PostResponse = BRHost.createRequest("POST", "/api/sessionMngr/", null).execute();
//System.log("Connection Successful:  " + PostResponse.contentAsString);
 
//GET list of Backups
var backupListXML = BRHost.createRequest("GET", "api/jobs?type=job", null).execute();
//System.log("Backup Jobs " + backupListXML.contentAsString);

statusCode = backupListXML.statusCode;

if ( statusCode != 200 ) {
    throw "HTTPError: status code: " + statusCode;
} 
//System.log(backupListXML);
backupListXML = backupListXML.contentAsString
//System.log(backupListXML);

var document = XMLManager.fromString(backupListXML);
if (!document) {
	errorCode = "Invalid XML Document";
	throw "Invalid XML Document";
	}

//Get References
var referenceElementList = document.getElementsByTagName("Ref");
var numOfReferences = referenceElementList.length

//System.log("number of References : " + numOfReferences);
if (numOfReferences == 0) {
	errorCode = "Invalid XML Document - name element missing";
	throw "Invalid XML Document";
	}
	
//Get Attributes of References	
for (var i = 0; i < numOfReferences; i++) {
	var ref = referenceElementList.item(i);
	//Get attributes of each of the references
	//Create Array
	var refAttributes = ref.attributes;
	
	//Add attributes to the Array and Log each Job
	var Name = ref.getAttribute("Name");
	System.log("Backup Job Name is : " + Name);
	var UID = ref.getAttribute("UID");
	System.log("UID is : " + UID);
	
	if (Name == jobName) {
		//Format UID to be usable
		UID = UID.replace("urn:veeam:Job:", "");
		desiredJobUID = UID;
		}

	}
	
System.log("DesiredJobUID is : " + desiredJobUID);
return desiredJobUID;
