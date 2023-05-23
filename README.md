# Dev Studio - Validators actions and workflows.


Product layout yaml checks

    The validator should check if this config file is in a valid format.  – Done

The validator should check if this config file has the much needed sections.  – TBD, after the new left nav design is available

Tenant config yaml checks

    The validator should check if this config file is in a valid json format.- Done

    The validator should check if the spec files referenced in the “apiSpecFileNames” array exists in the references folder in tenant repo.  – Done

    The validator should check if the “apiSpecFileNames” array has any syntax errors.  – Done

    The validator should check if the “versionType“ is correctly added for api versions.  – Done

DED File Checks 

    Validator is checking DED Yaml file format. – Done

    Validator is checking markdown files mentioned in DED exists under docs directory.  – Done

Specs Yaml file checks

    The validator should always parse the open api spec in the same way platform-service parses it while indexing.   – In progress


Postman and Specs Zip download 

    : We are using Github action to generate a zip files for every tenant repository and store in single repository. 
    : Currently, what we are doing is generating postmand collection and spec zip file on the fly, when user click the download button. In many case request is timming out where there are lot of yaml files. 
    : With this new approach zip files will already be generated and located in single place. We will just tranfer zip file from UI request. 


    
