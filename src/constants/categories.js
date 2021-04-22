const incomeColors = [
  "#123123",
  "#154731",
  "#165f40",
  "#16784f",
  "#14915f",
  "#10ac6e",
  "#0bc77e",
  "#04e38d",
  "#00ff9d",
];
const expenseColors = [
  "#b50d12",
  "#bf2f1f",
  "#c9452c",
  "#d3583a",
  "#dc6a48",
  "#e57c58",
  "#ee8d68",
  "#f79d79",
  "#ffae8a",
  "#cc474b",
  "#f55b5f",
];

export const incomeCategories = [
  { type: "İş", amount: 0, color: incomeColors[0] },
  { type: "Yatırım", amount: 0, color: incomeColors[1] },
  { type: "Ekstra Gelir", amount: 0, color: incomeColors[2] },
  { type: "Mevduat", amount: 0, color: incomeColors[3] },
  { type: "Piyango", amount: 0, color: incomeColors[4] },
  { type: "Hediye", amount: 0, color: incomeColors[5] },
  { type: "Maaş", amount: 0, color: incomeColors[6] },
  { type: "Birikim", amount: 0, color: incomeColors[7] },
  { type: "Kira Geliri", amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: "Fatura", amount: 0, color: expenseColors[0] },
  { type: "Araba", amount: 0, color: expenseColors[1] },
  { type: "Kıyafetler", amount: 0, color: expenseColors[2] },
  { type: "Seyahat", amount: 0, color: expenseColors[3] },
  { type: "Yemek", amount: 0, color: expenseColors[4] },
  { type: "Alışveriş", amount: 0, color: expenseColors[5] },
  { type: "Ev", amount: 0, color: expenseColors[6] },
  { type: "Eğlence", amount: 0, color: expenseColors[7] },
  { type: "Telefon", amount: 0, color: expenseColors[8] },
  { type: "Evcil Hayvan", amount: 0, color: expenseColors[9] },
  { type: "Diğer", amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};
