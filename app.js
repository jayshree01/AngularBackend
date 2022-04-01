// var createError = require('http-errors');
var express = require('express');
const port = process.env.PORT || 3000;
var path = require('path');
const mongoose = require('mongoose');
const DB = "mongodb+srv://thekrishnarajput:Krish%40143@practice.h6lsp.mongodb.net/jay?retryWrites=true&w=majority"
var indexRouter = require('./router/index');
var categoryRouter = require('./router/category');
const cors = require('cors');
var app = express();
app.use(cors());
mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then((result)=>{
    console.log("connection succesfulll");
}).catch(err=>{
    console.log("connection failed");
});
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

// http://localhost:3000/signup
app.use('/', indexRouter);
app.use('/category',categoryRouter);
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });
app.listen(port,()=>{
    console.log("Server is running");
});
