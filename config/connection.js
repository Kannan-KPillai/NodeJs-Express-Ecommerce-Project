const mongoClient= require('mongodb').MongoClient
const state={
    db:null
}
module.exports.connect=function(done){
    // const url='mongodb://127.0.0.1:27017/:27017'
    const url= 'mongodb+srv://kpillaikannan62:2255A%40@cluster0.4tlrlkz.mongodb.net/'
    const dbname='shopping'
    
    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })
}
                  
module.exports.get=()=>{
    return state.db
}