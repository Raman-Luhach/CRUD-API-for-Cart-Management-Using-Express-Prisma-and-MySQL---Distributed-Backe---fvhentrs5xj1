const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const connectDB = async ()=>{
    try {
        await prisma.$connect()
        console.log("Connected to db")
    }catch (err){
        console.error(err)
    }
}

module.exports={prisma , connectDB};
