---
title: Navigator.getUserMedia
slug: Web/API/Navigator/getUserMedia
---

Pide al usuario permiso para usar un dispositivo multimedia como una cámara o micrófono. Si el usuario concede este permiso, el successCallback es invocado en la aplicación llamada con un objeto [LocalMediaStream](/es/docs/WebRTC/MediaStream_API#LocalMediaStream) como argumento.

## Sintaxis

```
navigator.getUserMedia ( constraints, successCallback, errorCallback );
```

**Ejemplo**

Aquí hay un ejemplo usando getUserMedia() con los prefijos del navegador.

```js
navigator.getMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

navigator.getMedia(
  // Restricciones (contraints) *Requerido
  {
    video: true,
    audio: true,
  },

  // Funcion de finalizacion (Succes-Callback) *Requerido
  function (localMediaStream) {
    var video = document.querySelector("video");
    video.src = window.URL.createObjectURL(localMediaStream);
    video.onloadedmetadata = function (e) {
      // Haz algo con el video aquí.
    };
  },

  // errorCallback *Opcional
  function (err) {
    console.log("Ocurrió el siguiente error: " + err);
  },
);
```

## Parámetros

| Parámetro       | Requerido/Opcional | Descripción                                                                                  |
| --------------- | ------------------ | -------------------------------------------------------------------------------------------- |
| constraints     | Requerido          | El tipo de multimedia que soporta el objeto LocalMediaStream devuelto en el successCallback. |
| successCallback | Requerido          | La función a invocar cuando se pasa el objeto LocalMediaStream.                              |
| errorCallback   | Opcional           | La función que se invoca en la aplicación si falla la llamada.                               |

### constraints

El parámetro `constraints` es un objeto `MediaStreamConstraints` con dos miembros booleanos: `video` y `audio`. Estos describen el los tipos de multimedia soportados por el objeto [LocalMediaStream](/es/docs/WebRTC/MediaStream_API#LocalMediaStream). Uno o ambos deben ser especificados para validar el argumento del parametro constraint. Si un constraint especificado no es soportado por el navegador, `getUserMedia` llama a la función `errorCallback` con el error `NOT_SUPPORTED_ERROR`. Si el navegador no puede encontrar ninguna fuente multimedia con el tipo especificado, `getUserMedia` llama a la función `errorCallback` con el error `MANDATORY_UNSATISFIED_ERR`.

Si el valor o el miembro no es especificado en el objeto, el valor del miembro por defecto será falso. El siguiente ejemplo muestra como definir el constraints para audio y video:

```
{ video: true, audio: true }
```

### successCallback

La función getUserMedia llamará a la función especificada en el `successCallback` con el objeto [LocalMediaStream](/es/docs/WebRTC/MediaStream_API#LocalMediaStream) que contenga la secuencia multimedia. Puedes asignar el objeto al elemento apropiado y trabajar con él, como se muestra en el siguiente ejemplo:

```
function(localMediaStream) {
   var video = document.querySelector('video');
   video.src = window.URL.createObjectURL(localMediaStream);
   video.onloadedmetadata = function(e) {
      // Haz algo aquí con el video.
   };
},
```

### errorCallback

La función `getUserMedia` llama a la función indicada en el errorCallback con un `código` como argumento. Los códigos de error se describen a continuación:

| Error                       | Descripción                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------- |
| PERMISSION_DENIED           | El usuario denegó el permiso para usar el dispositivo multimadia requerido para esta operación. |
| NOT_SUPPORTED_ERROR         | Un constraint especificado no es soportado por el navegador.                                    |
| MANDATORY_UNSATISFIED_ERROR | No se encontraron fuentes multimedia del tipo especificado en el constraints.                   |
| NO_DEVICES_FOUND            | No se encontró ninguna webcam instalada.                                                        |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vease también

- [WebRTC](/es/docs/WebRTC) - la página introductoria a la API
- [MediaStream API](/es/docs/WebRTC/MediaStream_API) - la API para los objetos multimedia
- [Taking webcam photos](/es/docs/WebRTC/taking_webcam_photos) - un tutorial acerca del uso de getUserMedia()
