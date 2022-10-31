const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// custom route
app.get("/1", (request, response) => {
  response.json([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ]);
});

app.get("/sushi.html", (request, response) => {
  response.json([
    {
      id: 1,
    }
  ]);
});

app.post("/product", (request, response) => {
  console.log(request.body);

  response.json({
    status: "ok",
  });
});

// sever curretn directiry as static fiels
app.use(express.static("."));

const port = 5001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
