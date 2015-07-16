$(function() {

  var testLogs = [
    {type: 'cardio', calories: 300},
    {type: 'strength training', calories: 300}
  ];

  var logTemplate = _.template($('#log-template').html());

  _.each(testLogs, function(log, index) {
    console.log(log);
    var $logHtml = $(logTemplate(log));
    console.log($logHtml);
    $('#log-list').append($logHtml);
  });

});