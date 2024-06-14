const express = require('express');
const axios = require('axios');
const { apiKey, apiBaseUrl, historicalUrl } = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint untuk konversi nilai tukar mata uang terkini
app.get('/convert', async (req, res) => {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return res.status(400).json({ error: 'Parameter from, to, dan amount harus disertakan' });
  }

  try {
    const response = await axios.get(`${apiBaseUrl}`);
    const rate = response.data.conversion_rates[to];
    console.log(rate)
    const convertedAmount = amount * rate;
    res.json({ from, to, amount, convertedAmount, rate });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
