import express from "express";
import { userRouter } from './router/index.js'
const app = express();

const startpage = (req, res) => res.send("hi, homepage!");

app.get('/', startpage);
app.use('/user', userRouter);

app.listen(3000, function () {
    console.log('3000!');
});
export default app;