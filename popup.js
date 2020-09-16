


document.addEventListener('DOMContentLoaded', function() {
   
    
    chrome.storage.local.set({'value': theValue}, function() {
        // Notify that we saved.
        message('Settings saved');
    });
    
    chrome.storage.local.get('value', function(obj) {
        //Notify that we get the value.
        message('Value is ' + obj.value);
    });

    
    
    var loadtime = document.getElementById('loadtime');
    var rubrictime = document.getElementById('rubrictime');
    var checkPageButton = document.getElementById('submit');

    loadtime.value = localStorage.getItem("loadtime");
    rubrictime.value = localStorage.getItem("rubrictime");


    checkPageButton.addEventListener('click', function() {
      chrome.tabs.getSelected(null, function(tab) {
          alert("submit");
          localStorage.setItem("loadtime", loadtime.value);
          localStorage.setItem("rubrictime", rubrictime.value);
      });
    }, false);
  }, false);
