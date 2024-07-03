import inquirer from "inquirer";

function currencyRates(): Record<string, number> {
  return {
    USD: 300,
    EUR: 315,
    GBP: 360,
    AUD: 210,
    CAD: 220,
    INR: 3.5,
    AFG: 2.0,
  };
}

function convertToPKR(
  amount: number,
  currency: string,
  rates: Record<string, number>
): number {
  const rate = rates[currency];
  if (rate) {
    return amount * rate;
  }
  return 0;
}

async function main() {
  const rates = currencyRates();

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "amount",
      message: "Enter the amount you want to convert",
    },
    {
      type: "list",
      name: "currency",
      message: "Select the currency",
      choices: Object.keys(rates),
    },
  ]);

  const { amount, currency } = answers;
  const result = convertToPKR(amount, currency, rates);

  if (result !== null) {
    console.log(`The amount ${amount} ${currency} is equal to ${result} PKR`);
  } else {
    console.log("currency not supported");
  }
}

main();
