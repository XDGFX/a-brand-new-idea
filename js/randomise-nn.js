function randomise() {
    // Select a random idea
    var idea = data[Math.floor(Math.random() * Object.keys(data).length)];
    idea =
        AvsAn.query(pluralize.singular(idea)).article +
        " <b>" +
        pluralize.singular(idea);

    ide = document.getElementById("idea");

    ide.innerHTML =
        ide.innerHTML +
        "design " +
        idea.toLowerCase() +
        "</b>." +
        '<br><br style="line-height:-0.6em">';

    ide.scrollTop = ide.scrollHeight;
}

const detectRobot = (userAgent) => {
    const robots = new RegExp(
        [
            /bot/,
            /spider/,
            /crawl/, // GENERAL TERMS
            /APIs-Google/,
            /AdsBot/,
            /Googlebot/, // GOOGLE ROBOTS
            /mediapartners/,
            /Google Favicon/,
            /FeedFetcher/,
            /Google-Read-Aloud/,
            /DuplexWeb-Google/,
            /googleweblight/,
            /bing/,
            /yandex/,
            /baidu/,
            /duckduck/,
            /yahoo/, // OTHER ENGINES
            /ecosia/,
            /ia_archiver/,
            /facebook/,
            /instagram/,
            /pinterest/,
            /reddit/, // SOCIAL MEDIA
            /slack/,
            /twitter/,
            /whatsapp/,
            /youtube/,
            /semrush/, // OTHER
        ]
            .map((r) => r.source)
            .join("|"),
        "i"
    ); // BUILD REGEXP + "i" FLAG

    return robots.test(userAgent);
};

const userAgent = navigator.userAgent;
const isRobot = detectRobot(userAgent);

if (isRobot) {
    // Generate 100 ideas automatically
    for (var i = 0; i < 100; i++) {
        randomise();
    }
}
