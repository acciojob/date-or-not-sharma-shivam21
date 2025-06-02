var isDate = function (input) {
  // If input is already a Date object and it's valid
  if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }

  // If input is a string or number, try to create a Date object
  const parsed = new Date(input);
  return !isNaN(parsed.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
