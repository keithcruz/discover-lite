const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.json());

app.post("/api", async (req, res) => {
  const body = {
    sort: [{ timestamp: { order: "asc" } }],
    query: {
      range: {
        timestamp: {
          gte: `${req.body.start}`,
          lte: `${req.body.end}`,
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
      console.log(JSON.stringify(response, null, 2));
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
