import express from 'express';
import bodyParser from 'body-parser';
// import route from './route/index';

const PORT = parseInt(process.env.PORT, 10) || 4000;

const app = express();

app.get('/', (req, res) => res.status(200).json({
  messsag: 'app home page'
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

// app.use(route)
// app.use('/api', router);

app.route('/*').all((req, res) => res.status(404).json({
  status: 404,
  error: '404 Route not found'
}));

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});


export default app;