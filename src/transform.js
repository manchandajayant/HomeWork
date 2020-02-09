function groupAdultsByAgeRange(arr) {
  const result = {
    "20 and younger": [{}],
    "21-30": [{}],
    "31-40": [{}],
    "41-50": [{}],
    "51 and older": [{}]
  };
  arr.forEach(person => {
    if (person.age > 17 && person.age < 21)
      result["20 and younger"].push({ person });
    else if (person.age > 20 && person.age < 31)
      result["21-30"].push({ person });
    else if (person.age > 30 && person.age < 41)
      result["21-30"].push({ person });
    else if (person.age > 40 && person.age < 51)
      result["21-30"].push({ person });
    else if (person.age > 50) result["21-30"].push({ person });
  });
  return result;
}

module.exports = { groupAdultsByAgeRange };
