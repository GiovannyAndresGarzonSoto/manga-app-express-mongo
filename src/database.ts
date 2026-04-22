import mongoose, {connect} from 'mongoose' 

mongoose.set('strictQuery', false)
export const connectDatabase = async() => {
    const uri = `mongodb+srv://${process.env.ATLAS_URI}@cluster0.jfmq85b.mongodb.net/manga-app?appName=Cluster0`
    try{
        await connect(uri)
        console.log('Database is connected')
    }catch(err){
        console.log(err)
    }
}