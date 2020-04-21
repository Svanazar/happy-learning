let express=require('express')
let morgan = require('morgan')
let app=express()
app.use(morgan('common'))
app.get('/',(req,res)=>{
	res.send('Hello World!')
})
const PORT= process.env.PORT || 8000
app.listen(PORT,()=>{
	console.log(`Listening on port ${PORT}`)
})