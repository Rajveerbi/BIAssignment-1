import http from "http"
import {myfunc} from "./routess/routes.js"

const server=http.createServer()   //created server
server.on('request',myfunc)     

server.listen(8080)