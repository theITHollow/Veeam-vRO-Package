
//Connnect to Backup and Replication Server
var PostResponse = BRHost.createRequest("POST", "/api/sessionMngr/", null).execute();
//System.log("Connection Successful:  " + PostResponse.contentAsString);
 
//GET list of Backups
var BackupResponse = BRHost.createRequest("GET", "api/jobs?type=job", null).execute();
//System.log("Backup Jobs " + BackupResponse.contentAsString);

statusCode = BackupResponse.statusCode;

if ( statusCode != 200 ) {
    throw "HTTPError: status code: " + statusCode;
} 

var XMLFile = XMLManager.fromString(BackupResponse.contentAsString);
var XMLelement = XMLFile.documentElement.getElementsByTagName("Ref");


for(i=0;i<XMLelement.getLength();i++){
 var BackupJob = XMLelement.item(i).getAttribute("Name")

if ( BackupJob == BackupJobName){
 
 var UIDBackup = XMLelement.item(i).getAttribute("UID")
 var UIDBackupJob = UIDBackup.substring(14,50)
 var VMResponse = BRHost.createRequest("GET", "/api/jobs/" + UIDBackupJob + "/includes", null).execute();
 
//System.log("VMs included: " + VMResponse.contentAsString);

}
}

//System.log(backupListXML);
vmListString = VMResponse.contentAsString
//System.log(vmListString);

var document = XMLManager.fromString(vmListString);
if (!document) {
	errorCode = "Invalid XML Document";
	throw "Invalid XML Document";
	}

//Get References
var objectElementList = document.getElementsByTagName("Name");
//System.log("objectElementList is : " + objectElementList);
var numOfObjects = objectElementList.length

//System.log("Number of Objects : " + numOfObjects);
if (numOfObjects == 0) {
	errorCode = "Invalid XML Document - name element missing";
	throw "Invalid XML Document";
	}

//Get Attributes of References	
for (var i = 0; i < numOfObjects; i++) {
	var ref = objectElementList.item(i);

//List VMs
	System.log(ref.textContent);
	}

return vmListString;

