      google.setOnLoadCallback(drawChart);

      function drawChart() {

        var dashboard = new google.visualization.Dashboard(
          document.getElementById('programmatic_dashboard_div'));

        // We omit "var" so that programmaticSlider is visible to changeRange.
        programmaticSlider = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'programmatic_control_div',
          'options': {
            'filterColumnLabel': 'Prostate Referrals',
            'ui': {'labelStacking': 'vertical'}
          }
        });

       programmaticChart  = new google.visualization.ChartWrapper({
        'chartType': 'PieChart',
        'containerId': 'programmatic_chart_div',
        'options': {
          'width': 300,
          'height': 300,
          'legend': 'none',
          'chartArea': {'left': 15, 'top': 15, 'right': 0, 'bottom': 0},
          'pieSliceText': 'value'
        }
      });
  
      var data = google.visualization.arrayToDataTable([
        ['Name', 'Prostate Referrals'],
        ['Alden Reine' , 37],
        ['Scott Stoioff', 27],
        ['Author Klose', 23],
        ['John Lovett', 22],
        ['Natarajan Rajan', 20],
        ['Robert Reagan', 20],
        ['Edward Janosko', 18]
      ]);

      dashboard.bind(programmaticSlider, programmaticChart);
      dashboard.draw(data);
    }
