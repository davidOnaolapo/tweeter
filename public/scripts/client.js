
$(document).ready(function() {

  const loadTweets = () => {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (res) {
      renderTweets(res);
    });
  }

  loadTweets();

  const renderTweets = (tweetsArr) => {
    for (let tweet of tweetsArr) {
      const $tweet = createTweetElement(tweet);
      $(".container").append($tweet);
    }
    return;
  }

  const createTweetElement = (tweetData) => {
    const newTweet = `
      <article id="tweet-container">
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
            ${tweetData.content.text}
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
})












// Test / driver code (temporary). Eventually will get this from the server.



// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.