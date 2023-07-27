const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();

const publicDirectoryPath = path.join(__dirname, 'public');


app.use(cors());
app.use(express.static(publicDirectoryPath));

let lastCall = 0;
let data;


app.get('/', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'widget.html'));
});
app.get('/TrackerWidget.js', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'TrackerWidget.js'));
});

app.get('/prices', async (req, res) => {
  
  try {
    const currentTime = Date.now();
    
    // Check if 60 seconds have elapsed since the last call
    if (currentTime - lastCall >= 60000) {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,dogecoin,monero,wownero&vs_currencies=usd,eur,gbp');

      lastCall = currentTime;
      data = response.data;
    }

    res.status(200).json(data);
  } 
  catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});