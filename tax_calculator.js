function tax_calculator(income, saving) {
  if (income == undefined && saving == undefined) {
    return "Missing Parameter";
  } else if (income == undefined || saving == undefined) {
    return "Only one Parameter Pass";
  } else if (income < 250000) {
    return "No Tax";
  } else if (income < saving) {
    return "Saving > income";
  } else if (income > 250000 && income <= 500000) {
    let taxable_income = income - (saving * 50) / 100 - 250000;
    let tax = (taxable_income * 10) / 100;
    return tax;
  } else if (income > 500000 && income <= 1000000) {
    let taxable_income = income - (saving * 30) / 100 - 500000;
    let tax = (taxable_income * 20) / 100 + 22500;
    return tax;
  } else if (income > 1000000) {
    let save = (saving * 10) / 100;
    let taxable_income = income - 750000;
    if (save > 50000) {
      taxable_income = taxable_income - 50000;
    } else {
      taxable_income = taxable_income - save;
    }
    let tax = (taxable_income * 30) / 100 + 72500;
    return tax;
  }
}

module.exports = tax_calculator;
