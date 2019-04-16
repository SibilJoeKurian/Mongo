//read update delete operations

const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='mydb'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if (error)
    return console.log('Unable to connect')
    
    const db=client.db(databaseName)
    
    db.collection('users').insertOne({
        name:'Sibil',
        age:25
    })
})