---
title: Función Callback
slug: Glossary/Callback_function
---

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Ejemplo:

```js
function saludar(nombre) {
  alert("Hola " + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt("Por favor ingresa tu nombre.");
  callback(nombre);
}

procesarEntradaUsuario(saludar);
```

El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.

Sin embargo, tenga en cuenta que las callbacks a menudo se utilizan para continuar con la ejecución del código después de que se haya completado una operación a sincrónica — estas se denominan devoluciones de llamada asincrónicas. Por ejemplo, nuestro sencillo ejemplo de [maps-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/maps-example.html) ([ver en vivo](https://mdn.github.io/learning-area/javascript/apis/introduction/maps-example.html)) utiliza la API de Google Maps y la API de geolocalización para mostrar un mapa de la ubicación actual de su dispositivo.

Como obtener las coordenadas del dispositivo de su GPS es asíncrono (no sabemos exactamente cuándo se devolverán los datos), el método {{domxref("Geolocation.getCurrentPosition()")}} toma una función de devolución de llamada anónima como parámetro, que a su vez toma los datos de coordenadas devueltos como un parámetro. Esta función solo se ejecuta cuando se devuelven los datos de coordenadas.

## Aprende más

### Conocimientos generales

- [Callback](<https://es.wikipedia.org/wiki/Callback_(inform%C3%A1tica)>) en Wikipedia
