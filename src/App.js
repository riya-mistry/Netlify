import React, { useState } from 'react';
import logo from './news360.png';
import profile from './profile-icon.png';
import './Article.css';

const Article = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [comments, setComments] = useState([]);
  const [upvotes, setUpvotes] = useState(0);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if (comment.trim() !== '') {
      const newComment = {
        username: 'Riya Mistry',
        content: comment,
      };
      setComments([...comments, newComment]);
      e.target.comment.value = '';
    }
  };

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  return (
    <div className="article">
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="News360" className="header__logo-img" />
          <h1 className="header__logo-text">News360</h1>
        </div>
        <div className="header__profile">
          <span className="header__username">Riya Mistry</span>
          <img src={profile} alt="Profile" className="header__user-icon" />
        </div>
      </header>

      <h2 className="article__title">Investment Strategies for Volatile Markets</h2>
      <p className="article__metadata">
        <span className="article__author">Author: John Doe</span>
        <span className="article__created-date">Created: March 12, 2023</span>
        <span className="article__domain">Domain: Finance</span>
      </p>
      <p className="article__summary">
      Market volatility is inevitable: It's the nature of the markets to move up and down over the short term.
Volatile markets are usually characterized by wide price fluctuations and heavy trading.
One way to deal with volatility is to avoid it altogether; this means staying invested and not paying attention to short-term fluctuations.
If you are trading in a volatile market, the limit order—an order placed with a brokerage to buy or sell and at or better than a specified price—is your friend.
      </p>

      {showDetails ? (
        <div>
          <h3 className="article__section-heading">Full Article</h3>
          <p className="article__content">
          Long-Term Investing in a Volatile Market
          </p>
          <p className="article__content">
        One way to deal with volatility is to avoid it altogether. This means staying invested and not paying attention to short-term fluctuations. Sometimes this can be harder than it sounds—watching your portfolio take a 50% hit in a bear market can be more than most can take.
</p><p className="article__content">
        But, the standard advice is that for most long-term investors, the best way to deal with volatile markets is to remain calm and stay the course. Staying the course, however, is predicated on having a well-diversified and sound strategy to begin with.

One common misconception about a buy-and-hold strategy is that holding a stock for 20 years is what will always make you money. Long-term investing still requires homework because markets are driven by corporate fundamentals.
</p><p className="article__content">
<h4>17.3% </h4>
</p><p className="article__content">
The average return of the S&P 500 from 2011 to 2021.
2

If you find a company with a strong balance sheet and consistent earnings, the short-term fluctuations won't affect the long-term value of the company. In fact, periods of volatility could be a great time to buy if you believe a company is good for the long term.
</p><p className="article__content">
The main argument behind the buy-and-hold strategy is that missing the best few days of the year will cut your return significantly. It varies depending on where you get your data, but the statistic will usually sound something like this: "Missing the 20 best days could cut your return by more than half."
</p><p className="article__content">
For the most part, this is true. But on the other hand, missing the worst 20 days will also increase your portfolio considerably and in some cases, you may want to make trades during volatile market conditions.
</p><p className="article__content">
How Investing May Be Affected During Times of Volatility
Investors, especially those that use an online broker, should know that during times of extreme volatility, many brokerages implement procedures designed to decrease the firm's exposure to extraordinary market risk. For example, in the past, some market-maker firms have temporarily discontinued normal automatic order executions and handled orders manually.
</p><p className="article__content">
How securities are executed during times of volatile prices and high volume is also different in other ways. The following are some things you should be aware of:
</p><p className="article__content">
Delays: Volatile markets are associated with high volumes of trading, which may cause delays in execution. These high volumes may also cause executions to occur at prices that are very different from the market price quoted at the time the order was entered. Investors should ask firms to explain how market makers handle order executions when the market is volatile. With the proliferation of online trading, we have come to expect quick executions at prices at or near the quotes displayed on our internet-enabled devices. Take into account that this isn't always the case.
Digital mayhem: You may have difficulty executing your trades because of the limitations of a system's capacity. In addition, if you are trading online, you may have trouble accessing your account due to high levels of internet traffic. For these reasons, most online trading firms offer alternatives like phone trades or talking to a broker over the phone to initiate an order.
Incorrect quotes: There can be major price discrepancies between the quote you receive and the price at which your trade is executed. Remember, in a volatile market environment, even real-time quotes (RTQs) may be far behind what is currently happening in the market. In addition, the number of shares available at a certain price (known as the size of a quote) may change rapidly, affecting the likelihood of a quoted price being available to you.
Choosing an Order Type in a Volatile Market
The type of order you choose is very important when the markets aren't moving in their normal fashion. A market order will always be executed, but, in fast markets, you might be surprised at what price you get. It can be substantially different from the quoted price.
</p><p className="article__content">
The Bottom Line
In a volatile market, the limit order—an order placed with a brokerage to buy or sell at a predetermined amount of shares and at or better than a specified price—is your friend. Limit orders may cost slightly more than market orders but are always a good idea to use because the price at which you will purchase or sell securities is set. On the flip side, a limit order does not guarantee you an execution if the limit price is never triggered.

Investors need to be aware of the potential risks during times of volatility. Choosing to stay invested can be a great option if you're confident in your strategy. If, however, you do decide to trade during a spike in volatility, be aware of how the market conditions will affect your trade.

Should I Sell Stocks When Markets Are Volatile?
In general, the answer is no (with caveats). Over time, market volatility subsides and prices increase. Maintaining a long-term strategy through rocky patches can also allow you to accumulate more shares when stocks are on sale. If, however, you are in a position where you need the value of your assets fairly immediately or for income to live on (for instance, if you're a retiree), it may be best to rotate out of stocks and into more conservative investments when volatility strikes.

Should I Buy Stocks When Prices Fall?
For long-term investors, buying into a down market can be a way to lower the dollar-cost-average (DCA) and pick up shares at better prices. If you were planning to buy $100 of stocks every month anyway over the course of several years, for instance, a volatile market can create lucrative buying opportunities.

How Can I Limit Losses to My Portfolio in a Volatile Market?
If you want to limit losses but do not want to sell your holdings, you can buy protective puts. These are options contracts that give you the right to sell the underlying stock or index at a specified price. You can set that specified price at some level below the current market, below which you want to be stopped out for losses (e.g., 10% below the current price). Buying options does incur some cost, so think of it as buying insurance on your portfolio.
</p><p className="article__content">
SPONSORED
Don’t miss the new RAW Pricing model
Discover major pairs with ultra-low spreads right down to 0.0 pips*, and take advantage of the ability to earn rebates on commissions – all on elite platforms with a trusted Canadian broker. Don't miss out on our brand-new pricing option. Sign up with FOREX.com today. Commission applies.
          </p>

          <h3 className="article__section-heading">Comments</h3>
          <ul className="article__comment-list">
            {comments.map((comment, index) => (
              <li key={index} className="article__comment-item">
                <strong>{comment.username}:</strong> {comment.content}
              </li>
            ))}
          </ul>

          <form onSubmit={handleCommentSubmit} className="article__comment-form">
            <textarea name="comment" placeholder="Add a comment"></textarea>
            <button type="submit">Submit</button>
          </form>

          <div className="article__upvotes">
            <h4>Upvotes: {upvotes}</h4>
            <button onClick={handleUpvote}>Upvote</button>
          </div>
        </div>
      ) : (
        <button onClick={handleToggleDetails
}>View Details</button>
      )}
    </div>
  );
};

export default Article;
