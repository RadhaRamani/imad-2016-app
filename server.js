var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
    title:'ArticleOne',
    heading:'Hello',
    content:`This is the content of this page. This is the content of this page. This is the content of this page. This is the content of this page. This is the content of this page. This is the content of this page. This is the content of this page.`
    },
    'article-two':{
    title:'ArticleTwo',
    heading:'Hello',
    content:`This is the content of this page. This is the content of this page. This is the content of this page. This is the content of this page. This is the content of this page. This is the content of this page. This is the content of this page.`
    },
    'article-three':{
    title:'ArticleThree',
    heading:'Hello',
    content:`This is the content of this page. This is the content of this page. This is the content of this page. This is the content of this page. This is the content of this page. This is the content of this page. This is the content of this page.`
    }
};
   
function createtemplate(data) {
    var heading=data.heading;
    var content=data.content;
    var title=data.title;

var htmltemplate=`<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width ,initial-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
    <div class="container">
        <div>
           <a href="/">Home</a> 
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>
            ${content}
        </div>
     </div>  
    </body>
    


</html>`;

return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName',function(req,res){
   
     var articleName=req.params.articleName;
     res.send(createtemplate(articles[articleName]));
});
var names=[];
app.get('/submit-name',function(req,res){
    var name=req.query.name;
    names.push(name);
    
    res.send(JSON.stringify(names));
});

//app.get('/:articleName',function(req,res){
   
     var articleName=req.params.articleName;
     res.send(createtemplate(articles[articleName]));
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
