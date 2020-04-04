window.onload = function () {
    lastArticles(10);
    rankArticles(10);
    linkKeywords();
    // fullSearch("");
}

function lastArticles(num) {
    var httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState != 4 || httpReq.status != 200)
            return;
        document.getElementById("last-articles").innerHTML = httpReq.responseText;
    }
    var url = "/last_articles.cgi?num=" + num;
    httpReq.open("GET", url, true);
    httpReq.send(null);
}

function rankArticles(num) {
    var httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function() {
        if (httpReq.readyState != 4 || httpReq.status != 200)
            return;
        document.getElementById("rank-articles").innerHTML = httpReq.responseText;
    }
    var url = "/rank_articles.cgi?num=" + num;
    httpReq.open("GET", url, true);
    httpReq.send(null);
}

function linkKeywords(){
    var httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState != 4 || httpReq.status != 200) {
            return;
        }
        document.getElementById("keywords").innerHTML = httpReq.responseText;
    }
    var word = document.getElementById("keywords").innerHTML;
    var url = "/link_keywords.cgi?keywords=" + encodeURIComponent(word);
    httpReq.open("GET", url, true);
    httpReq.send(null);
}

function fullSearch(){
    var word = document.getElementById("full-search-box").value;
    if (word == "")
        return;
    
    var httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function() {
        if (httpReq.readyState != 4 || httpReq.status != 200) {
            return;
        }
        document.getElementById("article-body").innerHTML = httpReq.responseText;
        document.body.style.cursor = "default";
    }
    var url = "/bsview/full_search.cgi?word=" + encodeURIComponent(word);
    httpReq.open("GET", url, true);
    httpReq.send(null);
    document.body.style.cursor = "wait"
}
