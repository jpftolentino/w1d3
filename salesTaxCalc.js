/*
  - Go through object and get total sales and total tax grouped by company
*/

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var result = {};
  //Object with both totals
  var totals = {};
  //index through object using keys

  //loop that output the names to organize in if statement
  for(var i = 0; i < salesData.length; i++){

      //keys that keep track of totals
      var totalSales = 0;
      var totalTax = 0;

      //loop that adds up all the sales based on the names
      for ( var j = 0; j < salesData[i].sales.length; j ++){

        //how do you add the total for each individual company
        //how do you create a total object and add it to the specific company name
        // - get total of object

        totalSales += Number(salesData[i].sales[j]);
      }
      totalTax += totalSales * taxRates[salesData[i].province];

      var companyName = salesData[i].name;


      //a flag that determines if companu name exist or not already
      if(result[companyName] == undefined){

        //object result gets total sales but I need an object inside company name with totals
        totals = {totalSales, totalTax};
        result[companyName] = totals;
      } else {
        result[companyName].totalSales += totalSales;
        result[companyName].totalTax += totalTax;
      }

  }
  return result;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/