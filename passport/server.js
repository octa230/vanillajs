
if(process.env.NODE !== 'production'){
    require('dotenv').config
}

const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const passport = require('passport')
const initialize = require('./config');
const flash = require('express-flash');
const session = require('express-session')



initialize(passport, email => users.email === email);

const users = [];

app.use(flash())
app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res)=> {
    res.render('index.ejs')
});

/* app.get('/login', (req, res) => {
    res.render('login.ejs')
});
app.get('/register', (req, res) => {
    res.render('register.ejs')
}); */

app.post ('/register', async(req, res)=> {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({

            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        res.redirect('/login')

    } catch {
        res.redirect('/redirect')
    }
    console.log(users)
});
app.post('/register', (req, res)=> {
})

app.listen(4000, ()=> {
    console.log('app started on server port 4000')
})