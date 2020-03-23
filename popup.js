


document.addEventListener('DOMContentLoaded', function() {
    var loadtime = document.getElementById('loadtime');
    var rubrictime = document.getElementById('rubrictime');
    var checkPageButton = document.getElementById('submit');

    loadtime.value = localStorage.getItem("loadtime");
    rubrictime.value = localStorage.getItem("rubrictime");


    checkPageButton.addEventListener('click', function() {
      chrome.tabs.getSelected(null, function(tab) {
          localStorage.setItem("loadtime", loadtime.value);
          localStorage.setItem("rubrictime", rubrictime.value);
      });
    }, false);
  }, false);
