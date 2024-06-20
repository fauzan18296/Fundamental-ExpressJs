import request from "supertest";
import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.set({
    'X-Powered-By': 'Ahmad Fauzan',
    'X-Author': 'Fauzan'
  })
  res.send("Hello Response")
})
test('Test Response Header', async () => {
  const response = await request(app).get("/")
  expect(response.text).toBe("Hello Response")
  expect(response.get('X-Powered-By')).toBe('Ahmad Fauzan')
  expect(response.get('X-Author')).toBe('Fauzan')
})
