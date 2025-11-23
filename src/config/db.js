import moongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await moongoose.connect(process.env.MONGODB_URI); 
        console.log('Conectado a la base de datos');
        } catch (error) {
            console.error('Error al conectar a la base de datos', error);
            process.exit(1);
        }
    };


        