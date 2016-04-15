//get virtual machine name
vmName = virtualMachine.name
//get virtual machine moRef ID
moRef = virtualMachine.id

//Log the inputs to the system log
System.log("hierRef is : " + hierRef);
System.log("moRef is : " + moRef);
System.log("vmName is : " + vmName);

//format the XML string
xmlString = '<?xml version="1.0" encoding="utf-8"?><CreateObjectInJobSpec xmlns="http://www.veeam.com/ent/v1.0" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><HierarchyObjRef>urn:VMware:VM:' + hierRef + "." + moRef + '</HierarchyObjRef><HierarchyObjName>' + vmName + '</HierarchyObjName><Order>0</Order><GuestProcessingOptions><AppAwareProcessingMode>RequireSuccess</AppAwareProcessingMode><FileSystemIndexingMode>ExceptSpecifiedFolders</FileSystemIndexingMode><IncludedIndexingFolders/><ExcludedIndexingFolders><Path>%windir%</Path><Path>%ProgramFiles%</Path><Path>%TEMP%</Path></ExcludedIndexingFolders><CredentialsId/></GuestProcessingOptions></CreateObjectInJobSpec>'

//Log the xmlString to the System log
System.log(xmlString);

return xmlString;