import request from "supertest";
import express from "express";

const app = express();
app.get("/", (req, res) => {
  if(req.query.name) {
    res.status(200)
    res.send(`Hello ${req.query.name}`)
  }else{
    res.status(400).end()
  }
})
test('Test Response Status', async () => {
  let response = await request(app).get("/").query({name:"Ahmad Fauzan"})
  expect(response.status).toBe(200)
  expect(response.text).toBe("Hello Ahmad Fauzan")

  response = await request(app).get("/")
  expect(response.status).toBe(400)
})
