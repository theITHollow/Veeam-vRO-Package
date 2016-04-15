//Connnect to Backup and Replication Server
var PostResponse = BRHost.createRequest("POST", "/api/sessionMngr/", null).execute();
//System.log("Connection Successful:  " + PostResponse.contentAsString);
 
//GET list of Backups
var backupListXML = BRHost.createRequest("GET", "api/hierarchyRoots", null).execute();
System.log("Backup Jobs " + backupListXML.contentAsString);

statusCode = backupListXML.statusCode;

if ( statusCode != 200 ) {
    throw "HTTPError: status code: " + statusCode;
} 

//System.log(backupListXML);
backupListString = backupListXML.contentAsString
//System.log(backupListString);

var document = XMLManager.fromString(backupListString);
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
	
	//Add attributes to the Array and Log each hierarchy root
	var Name = ref.getAttribute("Name");
	System.log("Hierarchy Root Name is : " + Name);
	var UID = ref.getAttribute("UID");
	System.log("Hierarchy UID is : " + UID);	
	
	//Update Outputs if desired vCenter ID is found
	if (Name == vCenter){
		//FORMAT UID to be useable
		var UID = UID.replace('urn:veeam:HierarchyRoot:', "");
		hierRootID = UID
		}

	}
if (hierRootID != null){
	System.log ("Root Found! ID is : " + hierRootID);
	}
else {
	System.log("Hierarchy Root Not Found!");
}
	
return hierRootID;

