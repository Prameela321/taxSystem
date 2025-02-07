Tax Calculator Based On TaxSlabs

The tax calculator  managment system is a node js based system developed using express.js framework, with mongoDB as the chosen database. This application manages the information
related to tax slabs and tax to be paid.It exposes specific endpoints to handle crud(CREATE,READ,UPDATE,DELETE) operations for tax calculator

End Points:
  calculateTax 
    end Point : POST/getTaxDetails
    description  : allows us to get the total tax to be paid 

sample API request : 

curl  -X POST \
  'http://localhost:5100/getTaxDetails' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "salary" : 1750000
}'


Usage : 

 Dependencies :
 npm install
 
