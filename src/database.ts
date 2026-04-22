import mongoose, {connect} from 'mongoose' 

mongoose.set('strictQuery', true)
export const connectDatabase = async() => {
    const uri = `mongodb://${process.env.ATLAS_URI}@ac-gh5w1ew-shard-00-00.jfmq85b.mongodb.net,ac-gh5w1ew-shard-00-01.jfmq85b.mongodb.net:27017,ac-gh5w1ew-shard-00-02.jfmq85b.mongodb.net:27017/?ssl=true&replicaSet=atlas-j5r3s9-shard-0&authSource=admin&appName=Cluster0`
    try{
        await connect(uri)
        console.log('Database is connected')
    }catch(err){
        console.log(err)
    }
}