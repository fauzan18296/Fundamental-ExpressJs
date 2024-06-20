import express from "express";
const app = express();
const port = 3000;
    app.get("/", (request,response) => {
  response.send("Hello World!")
})
    app.get("/fauzan", (request,response) => {
  response.send("Hello Fauzan!")
})
    app.listen(port, () => {
  console.log(`Server is started on port ${port}!`)
})