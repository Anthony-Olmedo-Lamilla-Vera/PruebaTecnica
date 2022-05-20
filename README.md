# PruebaTecnica
Prueba Tecnica Desarollo Node
#fecha 19/5/2022
##Herramientas
##TIEMPO 3HORAS
####Para la elaboracion de la prueba tecnica de node JS, pues estuve utilizando como framework principal NodeJS
##NodeJS
##API TWITTER - NPM twitter-api-client
##DYNAMO DB - PARTIQL
##EXPRESS
##dynamodb-marshaler##
###NODEMON para los tests de la API
#API 
##La API cuenta con 3 puntos de accesos 

### CREAR USUARIO  path: ./backend/methods/CreateUser
Para crear el usuario utilizamos el lenguaje de consulta sql , Mediante el servicio PARTIQL 


### EDITAR USUARIO  path: ./backend/methods/UpdateUser
realizamos un endpoint para editar unicamente la descripcion del Usurio, es Decir la experiencia

## LEER Usuario path: ./backend/methods/UpdateUser 
realizamos un endpoint para leer los datos del usuario con el objetivo de enviarlos con el metodo POST la api rest


## PRUEBAS
# POSTMAN
 -GET localhost://api/v1/user  -LEER
 -PUT localhost://api/v1/update-user -EDITAR
 -POST localhost://api/v1/create-user  -CREAR

### DIFICULTADES
Mi sincera Dificultad fue que anteriormente no habia trabajado con DynamoDB y me costo un poco aprender como funcioona pero no tanto porque 
ya habia trabajado con bases de datos no SQL, Mas que todo eso fue para mi un reto ya que el resto si se me facilito bastante.
