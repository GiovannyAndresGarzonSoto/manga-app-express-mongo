import mongoose, {connect} from 'mongoose' 

mongoose.set('strictQuery', true)
export const connectDatabase = async() => {
    try{
        await connect(`mongodb+srv://${process.env.ATLAS_URI}@cluster0.jfmq85b.mongodb.net:27017/manga-app?retryWrites=true&w=majority`)
        console.log('Database is connected')
    }catch(err){
        console.log(err)
    }
}