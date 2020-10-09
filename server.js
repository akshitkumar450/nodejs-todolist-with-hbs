const express = require('express');
const app = express();
//make sure that the hbs files are in the views folder
//to set the view engivre for hbs 
app.set('view engine', 'hbs')
//uses only in post request 
app.use(express.urlencoded({ extended: true }))
let task = ['sampe']
app.get('/', (req, res) => {
    // let tasks = task.map(t => `<li>${t}</li>`).join('\n')
    //the url given in action is called when the form is submitted 
    // to use hbs file
    res.render('home', {
        title: 'todo list',
        task
    })
})
app.post('/', (req, res) => {
    task.push(req.body.newtask)
    //to redirect the page after li is being added to page
    res.redirect('/');
})

app.listen(5555, () => {
    console.log('server started at http://localhost:5555');
})

