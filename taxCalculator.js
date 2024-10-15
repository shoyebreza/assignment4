function calculateTax(income, expense) {
    if (income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }
    let saving = income - expense;
    let tax = saving * 0.20;
    return tax;
}
