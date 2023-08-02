# CryptoTracker-Widget
Web-Widget to Track the Price (USD, EUR, GBP) of the 4 Most Important Cryptos; Bitcoin, Monero, Doge and WoW.

Built with Node and Express.js

# How to Implement
You can implement this widget just by adding this simple script tag right before the closing body tag of your HTML:

```html
<script currency="usd" src="https://crypto-tracker-rr98.onrender.com/TrackerWidget.js" id="CryptoTrackerWidget"></script>
```

The ```currency``` value can accept 3 values: ```usd```, ```eur``` and ```gbp```. The value being passed will determine the price returned and displayed for the currencies, see for instance how it looks at [tools.monerochans.club](tools.monerochans.club):

![Widget](https://github.com/starshard-dev/CryptoTracker-Widget/assets/114453333/1cb1b009-fdaa-461c-8af2-972ac04628fa)

# About
This is a useful and minimalistic tool that intends to provide real-time (refreshed every 2 min.) price changes of the "4 most important cryptos".
The server used to host the endpoint for this widget is free, so if you're pretending to add this to your website and it has high traffic, I recommend you to clone this repo and self-host it with a paid plan on a VPS or hosting dedicated to deploy Node Apps.

If you proceed with hosting your own instance of this repo, you will just need to change the urls of the widget.html, index.js and TrackerWidget.js files to the url where your widget will be hosted.
