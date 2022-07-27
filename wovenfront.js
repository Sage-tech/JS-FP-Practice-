function billFor(month, activeSubscription, users) {
  if (!activeSubscription || users.length === 0) { return 0; }

  // Calculate a daily rate for the active subscription tier
  const monthlySubscriptionRate = activeSubscription.monthlyPriceInDollars;
  month = new Date(month);
  const monthStartDate = firstDayOfMonth(month);
  const monthEndDate = lastDayOfMonth(month);
  const daysInMonth = monthEndDate - monthStartDate;
  const dailyRate = monthlySubscriptionRate / daysInMonth;

  // For each day of month, identify which users were active that day
  let dailyActiveUsers = [];
  let currentDate = monthStartDate;
  while (currentDate <= monthEndDate) {
    let dailyUsers = 0;
    users.forEach(user => {
      if (currentDate >= user.activatedOn && currentDate <= user.deactivatedOn) { dailyUsers++; }
    })
    dailyActiveUsers.push(dailyUsers);
    currentDate = nextDay(currentDate);
  }
  // Multiply number of active users for the day by daily rate to calculate daily total
  let totalMonthlyBill = dailyActiveUsers
    .map(users => users * monthlySubscriptionRate)
    .reduce((sum, dailyBill) => sum + dailyBill);
  Number(totalMonthlyBill.toFixed(2));
  return Number(totalMonthlyBill.toFixed(2)); // refactor to return a decimal instead of a string.
}