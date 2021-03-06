// load and save options from MAKA <-- inspired by MAKA

// Saves options to chrome.storage
function save_options() {
  var lvl1 = document.getElementById('lvl1').checked;
  var lvl2 = document.getElementById('lvl2').checked;
  var lvl3 = document.getElementById('lvl3').checked;
  var lvl4 = document.getElementById('lvl4').checked;
  var lvl5 = document.getElementById('lvl5').checked;
  var lvl6 = document.getElementById('lvl6').checked;
  var lvl7 = document.getElementById('lvl7').checked;

  chrome.storage.local.set({
    lvl1: lvl1,
    lvl2: lvl2,
    lvl3: lvl3,
    lvl4: lvl4,
    lvl5: lvl5,
    lvl6: lvl6,
    lvl7: lvl7,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value
  chrome.storage.local.get({
    lvl1: false,
    lvl2: false,
    lvl3: false,
    lvl4: false,
    lvl5: false,
    lvl6: false,
    lvl7: false,
  }, function(items) {
    document.getElementById('lvl1').checked = items.lvl1;
    document.getElementById('lvl2').checked = items.lvl2;
    document.getElementById('lvl3').checked = items.lvl3;
    document.getElementById('lvl4').checked = items.lvl4;
    document.getElementById('lvl5').checked = items.lvl5;
    document.getElementById('lvl6').checked = items.lvl6;
    document.getElementById('lvl7').checked = items.lvl7;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
