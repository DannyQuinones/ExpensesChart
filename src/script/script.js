const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tues', 'Weds', 'Thur', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'US Dollars',
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: 'hsl(10, 79%, 65%)',
        borderRadius: 5,
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });