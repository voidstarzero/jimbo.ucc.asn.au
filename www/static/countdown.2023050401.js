window.setInterval(function() {
    const ttl = document.getElementById('TTL');

    var newText = String(ttl.innerText - 1);
    if (newText == '0') {
        newText = '3600';
    }

    var textLen = newText.length;
    if (textLen < 4) {
        newText = '\xa0'.repeat(4 - textLen) + newText;
    }
    ttl.innerText = newText;
}, 1000);
