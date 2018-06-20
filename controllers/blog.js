function show (req, res){
 res.render('index', {title:'Hey', message:'Hello there!'})
}

function create (req, res){
    res.render('create', {title:'Hey', message:'Hello there!'})
   }

   function store (req, res){
    res.render('index', {title:'Hey', message:'Hello there!'})
   }



module.exports = {show, create }
