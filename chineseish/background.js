// Credit to MAKA by Tom Royal

function DeMakaMenuClick(info, script) {
    chrome.scripting.query({
        "active": true,
        "currentWindow": true
    }, function (script) {
        chrome.scripting.sendMessage(script[0].id, {
            "functiontoInvoke": "undoMAKA"
        });
    });
}

var setMAKAmenu1 = chrome.contextMenus.create({"title": "chinglish(", "contexts":["page"], "onclick": DeMakaMenuClick});
