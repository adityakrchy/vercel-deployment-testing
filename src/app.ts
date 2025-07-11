import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express + Vercel!' });
});

app.get("/",(req,res)=>{
  res.json({ message: 'Hello from Express + Vercel!' });
})

export default app;
