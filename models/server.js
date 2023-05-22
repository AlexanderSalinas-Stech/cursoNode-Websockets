import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server as ServerIO } from "socket.io";
import {socketController} from '../sockets/controller.js'




class Server{
    constructor(){
        this.app=express();
        this.port =process.env.PORT;
        this.server = createServer(this.app);
        this.io = new ServerIO(this.server);

        this.paths ={

        }

        //Middlewares
        this.middlewares();
        
        //Rutas Aplicacion
        this.routes();

        //sockets
        this.sockets();
    }

    middlewares(){
        this.app.use(express.static('public'));
        //cors
        this.app.use(cors());
        //parseo body json
        this.app.use(express.json());
        
    }

    routes(){
        // this.app.use(this.paths.usuarios, router);
    }

    sockets(){
        this.io.on('connection', socketController)
    }



    listen(){
        this.server.listen(this.port,()=>{
            console.log(`Servidor iniciado en puerto ${this.port}`);
        });
    }
}

export {Server}