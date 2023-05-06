function solution(D) {
  const newDict = { MON: 0, TUE: 0, WEN: 0, THU: 0, FRI: 0, SAT: 0, SUN: 0 };
  const dates = Object.keys(D).sort();

  for (let i = 0; i < dates.length; i++) {
    const date = new Date(dates[i]);
    const day = date
      .toLocaleString("en-us", { weekday: "short" })
      .toUpperCase();
    const value = D[dates[i]];

    if (i === 0) {
      newDict[day] += value;
      const prevDay = new Date(date.getTime() - 24 * 60 * 60 * 1000);
      const prevDayName = prevDay
        .toLocaleString("en-us", { weekday: "short" })
        .toUpperCase();
      newDict[prevDayName] += value;
    } else {
      newDict[day] += value;
    }
  }

  return newDict;
}
