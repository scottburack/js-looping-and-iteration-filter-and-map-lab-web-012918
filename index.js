// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let results = [];
  for (const ele of drivers) {
    if (ele.revenue > revenue) {
      results.push(ele.name);
    }
  }
  return results;
}

function exactMatch(drivers, obj) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in obj) {
      matches = driver[key] === obj[key];
    }

    return matches;
  })
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map (
    function (driver) {
      return driver.name;
    });
}
