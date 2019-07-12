# Time Zones

Api REST para convertir una hora en zona local a UTC

## ¿Cómo correr este proyecto?

Despues de clonar, vaya al directorio del proyecto y ejecute:

### `npm install`

Para instalar los paquetes, después de instalados, debe correr:

### `npm start`

Para levantar el servidor en modo desarrollo.<br>
Para ejecutar el servidor, use una aplicación como Postman o similar y mediante un método post ejecutar el siguiente query: <br>
`http:\\localhost:3000?time={hora_local}&zone={zona}` <br>
Donde zona es un numero entre -15 y 15, que genera el siguiente response:

``` javascript
{
    "response": {
        "time": "16:45:00",
        "timezone": "utc"
    }
}
```

## Consideraciones

El lenguaje usado para este proyecto fue `NodeJS`, además se usaron los siguientes componentes: `express` para montar la infraestructura del API y sus rutas, así como los diferentes métodos HTTP, y `moment.js` para formatear las fechas y las horas.