const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/api", async (req, res) => {
  const body = {
    query: {
      range: {
        timestamp: {
          gte: "2021-04-07",
          lte: "2021-04-07",
        },
      },
    },
  };

  try {
    const response = await fetch(
      "http://elasticsearch:9200/kibana_sample_data_logs/_search",
      {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      res.send(response);
    }

    const json = await response.json();
    res.send(json);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});

app.listen(5000);
