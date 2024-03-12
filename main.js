document.addEventListener('DOMContentLoaded', () => {
  const dailyValues = [
    "5hrs", "7hrs",
    "1hr", "2hrs",
    "0hrs", "1hr",
    "1hr", "1hr",
    "1hr", "3hrs",
    "0hrs", "1hr"
  ];

  const weeklyValues = [
    "32hrs", "36hrs",
    "10hrs", "8hrs",
    "4hrs", "7hrs",
    "4hrs", "5hrs",
    "5hrs", "10hrs",
    "2hrs", "2hrs"
  ];

  const monthlyValues = [
    "103hrs", "128hrs",
    "23hrs", "29hrs",
    "13hrs", "19hrs",
    "11hrs", "18hrs",
    "21hrs", "23hrs",
    "7hrs", "11hrs"
  ];

  const dailyLink = document.querySelector('#daily-link');
  const weeklyLink = document.querySelector('#weekly-link');
  const monthlyLink = document.querySelector('#monthly-link');

  const activities = [
    'work',
    'play',
    'study',
    'exercise',
    'social',
    'self-care'
  ];

  function updateStats(timeframe) {
    let values;
    switch (timeframe) {
        case 'Daily':
            values = dailyValues;
            break;
        case 'Weekly':
            values = weeklyValues;
            break;
        case 'Monthly':
            values = monthlyValues;
            break;
    }

    activities.forEach(activity => {
        const activityDiv = document.getElementById(activity);
        const hours = activityDiv.querySelector('.hours');
        const previousPeriodText = activityDiv.querySelector('.previous-period-text');
        const previousHours = activityDiv.querySelector('.previous-hours');

        const index = activities.indexOf(activity);
        hours.textContent = values[index * 2];
        previousPeriodText.textContent = `${timeframe === 'Daily' ? 'Yesterday' : timeframe === 'Weekly' ? 'Last Week' : 'Last Month'} -`;
        previousHours.textContent = values[(index * 2) + 1];
    });
  }

  dailyLink.addEventListener('click', () => {
    updateStats('Daily');
    dailyLink.classList.add('active');
    weeklyLink.classList.remove('active');
    monthlyLink.classList.remove('active');
  });

  weeklyLink.addEventListener('click', () => {
    updateStats('Weekly');
    dailyLink.classList.remove('active');
    weeklyLink.classList.add('active');
    monthlyLink.classList.remove('active');
  });

  monthlyLink.addEventListener('click', () => {
    updateStats('Monthly');
    dailyLink.classList.remove('active');
    weeklyLink.classList.remove('active');
    monthlyLink.classList.add('active');
  });

  updateStats('Daily'); // Set initial state to Daily
});
