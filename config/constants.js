 const  TAX_SLABS = [
   { "min" : 0 , "max" : 350000 , "percentage" :  0 },
   { "min" : 350001 , "max": 625000 ,"percentage" : 9 },
   { "min" : 625001 , "max" : 1200000 , "percentage" : 18},
   { "min" : 1200001 , "max" :  "above" , "percentage" : 35}
       
];

module.exports = {
    TAX_SLABS
}