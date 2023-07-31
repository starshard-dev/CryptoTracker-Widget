# CryptoTracker-Widget
Web-Widget to Track the Price(USD, EUR, GBP) of the 4 Most Important Cryptos; Bitcoin, Monero, Doge and WoW.

Built with Node and Express.js

# How to Implement
You can implement this widget just by adding this simple script tag right before the closing body tag of your HTML:

```html
<script currency="usd" src="https://crypto-tracker-rr98.onrender.com/TrackerWidget.js" id="CryptoTrackerWidget"></script>
```

The ```currency``` value can be passed 3 values: ```usd```, ```eur``` and ```gbp```. The value being passed will determine the price returned and displayed for the currencies, see for instance how it looks at [tools.monerochans.club](tools.monerochans.club):

![Widget](https://github.com/starshard-dev/CryptoTracker-Widget/assets/114453333/1cb1b009-fdaa-461c-8af2-972ac04628fa)
