let express=require('express')
let morgan = require('morgan')
let app=express()
app.use(morgan(':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length]'))
app.get('/',(req,res)=>{
	res.send('Hello World!')
})
const PORT= process.env.PORT || 8000
app.listen(PORT,()=>{
	console.log(`Listening on port ${PORT}`)
})