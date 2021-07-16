$(document).ready(function() {

  const loadTweets = () => {            //Gets tweet info from endpoint and renders using renderTweets()
    $.ajax('/tweets', { method: 'GET' })
    .then(function (res) {
      renderTweets(res);
    });
  }

  loadTweets();
  window.loadTweets = loadTweets;         //Load tweets made to be global

  const renderTweets = (tweetsArr) => {   //Takes an array of objects, creats HTML using createTweettElement() & renders
    $(".tweets").empty();

    for (let tweet of tweetsArr) {
      const $tweet = createTweetElement(tweet);
      $(".tweets").prepend($tweet);
    }
    return;
  }

  const createTweetElement = (tweetData) => {   // Creates an tweet HTML given an obj
    const newTweet = `
      <article class="tweet-container">
        <header class="article-header">
          <div class="header-content">
            <div class="img-group">
              <img class="article-img" src=${tweetData.user.avatars}>
              <span class="header-text">
                ${tweetData.user.name}
              </span> 
            </div>
            <span class="tweeter-handle">
              ${tweetData.user.handle}
            </span>
          </div>
        </header>
        <div class="article-tweet">
          <span class="div-text">
            ${escape(tweetData.content.text)}
          </span>
        </div>
        <footer>
          <span class="footer-text">
            ${timeago.format(tweetData.created_at)}
          </span>
          <div class="icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>`

    return newTweet;
  }
  
  const escape = function (str) {                 // To catch cross-site scripting
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
})










