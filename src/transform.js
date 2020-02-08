function groupAdultsByAgeRange([{ name, age }]) {
  const filt = age.map(un => un.age > 18);
  return filt;
}

module.exports = { groupAdultsByAgeRange };
