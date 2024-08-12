const calculateTimeAgo = (dateString) => {
  const createdAtDate = new Date(dateString);
  const currentDate = new Date();

  // Calculate the difference in time
  const timeDifference = currentDate - createdAtDate;

  // Convert time difference from milliseconds to days
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysAgo < 30) {
    return `${daysAgo} days ago`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
  }
};

export default calculateTimeAgo;
