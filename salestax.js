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

function sumNumArray(numArray){
  // sum an array of numbers return total
  var total = 0;
  for (num in numArray){
    total += numArray[num];
  }
  return total;
}

function calculateTax(province,salesTotal){
// sales * sales tax for province
  return determineTaxRate(province) * salesTotal;
}

function determineTaxRate(province){
  // read the tax rate object with key province
  return salesTaxRates[province];
}

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  // start with empty object
result = {};
  // sales data is in an object.
  // loop through the company
  for (company in salesData){

    if (result[salesData[company].name] === undefined) {
       result[salesData[company].name] =
          createCompSalesObj(
       // sales
            sumNumArray(salesData[company].sales),
       // taxes
            calculateTax(salesData[company].province,sumNumArray(salesData[company].sales))
          )
    }
    else {
// add sales and taxes to existing.
      result[salesData[company].name].totalSales += sumNumArray(salesData[company].sales);
      result[salesData[company].name].totalTaxes += calculateTax(salesData[company].province,sumNumArray(salesData[company].sales));

    }
  }
  return result;
}

function createCompSalesObj(totSales, totTaxes){
// create an object with total sales and total taxes
  return { totalSales: totSales,
           totalTaxes: totTaxes
          };
}

// run
console.log(calculateSalesTax(companySalesData,salesTaxRates));