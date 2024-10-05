const dayjs = require("dayjs"); // For working with dates

module.exports = {
  name: "arcane_when",
  description:
    "Returns how many days and hours are left until a constant date.",
  execute(message) {
    // Fixed target timestamp: 1731163832 (represents a specific date and time)
    const targetTimestamp = 1731163832;

    // Get the current date and time
    const now = dayjs();

    // Convert the target timestamp to a Day.js date object
    const targetDate = dayjs.unix(targetTimestamp);

    // Calculate the difference in days and hours
    const daysLeft = targetDate.diff(now, "day");
    const hoursLeft = targetDate.diff(now, "hour") % 24;

    // Check if the date is in the future
    if (daysLeft < 0 && hoursLeft < 0) {
      return message.channel.send("The target date has already passed!");
    }

    // Send the result back to the Discord channel
    return message.channel.send(
      `There are ${daysLeft} days and ${hoursLeft} hours left until arcane is out.`
    );
  },
};
