import request from "supertest";
import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send(`Hello ${req.query.firstname} ${req.query.lastname}`)
})
test('Test Query Parameter', async () => {
  const response = await request(app).get("/").query({firstname: "Ahmad", lastname: "Fauzan"})
  expect(response.text).toBe("Hello Ahmad Fauzan")
})
