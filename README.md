## File Metadata Microservice
This creates a metadata service that listens for POSTs with a file to /api/post 
and returns a JSON object in the format of:

{'name':'name','size':'size', 'mime-type':'mime-type'}

The service is fairly rudimentary and relies on memory storage, so a particularly
large file might not work as expected.