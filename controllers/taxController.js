const  {TAX_SLABS }= require('../config/constants');


function getTaxDetails(req,res){
    const salary =  req.body.salary;
    let sum =0.00, amount , endCondition = 0,response=[];
    for(let element of TAX_SLABS){
       if(salary < element.max ||  element.max == "above"){
           amount = (salary -  element.min+1) 
           endCondition = 1;
       }else{
           amount =  (element.max - element.min+1) 
       }
       const amountPercentage =  (amount*  (element.percentage/100));
       sum += parseFloat(amountPercentage.toFixed(2))
       response.push({ "amount" : amount , "percentage" : element.percentage, "taxApplied" : amountPercentage.toFixed(2)})
       if(endCondition){
         break;
       } 
    }
    response.push({"totalTax" : sum})
    res.status(200).json(response);
}


module.exports = {
    getTaxDetails
}

