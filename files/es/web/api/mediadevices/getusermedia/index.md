---
title: MediaDevices.getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

El método **`MediaDevices.getUserMedia()`** solicita al usuario permisos para usar un dispositivo de entrada de vídeo y/o uno de audio como una cámara o compartir la pantalla y/o micrófono. Si el usuario proporciona los permisos, entonces le retornará un {{domxref("Promise")}} que es resuelto por el resultado del objeto [`MediaStream`](/es/docs/WebRTC/MediaStream_API#LocalMediaStream). Si el usuario niega el permiso, o si el recurso multimedia no es válido, entonces el promise es rechazado con `NotAllowedError` o `NotFoundError` respectivamente. Nótese que es posible que el promise retornado no sea ni resuelto ni rechazado, ya que no se requiere que el usuario tome una decisión.

## Sintaxis

```
var gumPromise = MediaDevices.getUserMedia(constraints);
```

Generalmente, accederás al objeto singleton {{domxref("MediaDevices")}} usando {{domxref("navigator.mediaDevices")}}, de esta forma:

```
navigator.mediaDevices.getUserMedia(myConstraints).then(function(mediaStream) {
  /* usar el flujo de datos */
}).catch(function(err) {
  /* manejar el error */
});
```

### Parámetros

- `constraints`

  - : Es un objeto {{domxref("MediaStreamConstraints")}} que especifica los tipos de recursos a solicitar, junto con cualquier requerimiento para cada tipo.

    El parámetro constraints es un objeto `MediaStreamConstaints` con dos miembros: `video` y `audio`, que describen los tipos de recurso solicitados. Debe especificarse uno o ambos. Si el navegador no puede encontrar todas las pistas de recursos con los tipos especificados que reúnan las restricciones dadas, entonces el promise retornado es rechazado con `NotFoundError`.

    Lo siguiente realiza la petición de tanto audio como vídeo sin requerimientos específicos:

    ```js
    { audio: true, video: true }
    ```

    Mientras que la información acerca de las cámaras y micrófonos de los usuarios se encuentran inaccesibles por razones de privacidad, una aplicación puede solicitar la cámara y las capacidades del micrófono que este requiera, usando restricciones adicionales. El siguiente código es para mosrtar una resolución de una cámara de 1280x720.

    ```js
    {
      audio: true,
      video: { width: 1280, height: 720 }
    }
    ```

    El navegador tratará de respetar esto, pero puede devolver otras resoluciones si una coincidencia exacta no está disponible o si el usuario la reemplaza.

    Para _conseguir_ otras resoluciones, puede utilizar las propiedaes `min`, `max`, or `exact` (también conocido como min == max). El siguiente ejemplo le muestra cómo solicitar una resolución mínima de 1280x720.

    ```js
    {
      audio: true,
      video: {
        width: { min: 1280 },
        height: { min: 720 }
      }
    }
    ```

    Si no existe una cámara con una resolución mínima para trabajar, entonces la promesa devuelta será rechazada con NotFoundError, y no se le pedirá al usuario.

    La razón de esto es debido a que las propiedades `min`, `max`, y `exact`son inherentemente obligatorias, mientras que los valores planos y una propiedad llamada _ideal_ no lo son. He aquí un ejemplo más completo:

    ```js
    {
      audio: true,
      video: {
        width: { min: 1024, ideal: 1280, max: 1920 },
        height: { min: 776, ideal: 720, max: 1080 }
      }
    }
    ```

    Un valor perteneciente a la propiedad `ideal`, cuando es usada, tiene gravedad, lo que significa que el navegador tratará de encontrar la configuración (una cámara, si tienes más de una), con la distancia de aptitud más pequeña ([fitness distance](http://w3c.github.io/mediacapture-main/#methods-5)) de los valores ideales dados.

    Los valores planos son inherentemente ideales, lo que significa que de los ejemplos mostrados anteriormente, podrían haberse escrito de la siguiente manera:

    ```js
    {
      audio: true,
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    }
    ```

    No todas las restricciones son números. Por ejemplo, en dispositivos móviles, los siguientes preferirán la cámara frontal (si está disponible) sobre la posterior:

    ```js
    { audio: true, video: { facingMode: "user" } }
    ```

    Para _solicitar_ la cámara frontal, use:

    ```js
    { audio: true, video: { facingMode: { exact: "environment" } } }
    ```

### Valor de retorno

Un {{jsxref("Promise")}} que resuelve a un objeto {{domxref("MediaStream")}}.

### Errores

Los rechazos de la promesa devuelta se realizan con un objeto {{domxref ("MediaStreamError")}} que está modelado en {{domxref ("DOMException")}}. Los errores más relevantes son:

- `SecurityError`
  - : Permiso para usar un dispositivo fue denegado por el usuario o por el sistema.
- `NotFoundError`
  - : No se encontraron pistas multimedia del tipo especificado que satisfagan las restricciones especificadas.

## Ejemplos

### Usando la Promesa (Promise)

Este ejemplo asigna el objeto {{domxref("MediaStream")}} al elemento apropiado.

```
var p = navigator.mediaDevices.getUserMedia({ audio: true, video: true });

p.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.src = window.URL.createObjectURL(mediaStream);
  video.onloadedmetadata = function(e) {
    // Do something with the video here.
  };
});

p.catch(function(err) { console.log(err.name); }); // always check for errors at the end.
```

### Ancho y alto

He aquí un ejemplo del uso de `mediaDevices.getUserMedia()`, incluyendo un polyfill para hacer frente a los navegadores más antiguos.

```js
var promisifiedOldGUM = function (constraints, successCallback, errorCallback) {
  // First get ahold of getUserMedia, if present
  var getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;

  // Some browsers just don't implement it - return a rejected promise with an error
  // to keep a consistent interface
  if (!getUserMedia) {
    return Promise.reject(
      new Error("getUserMedia is not implemented in this browser"),
    );
  }

  // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
  return new Promise(function (successCallback, errorCallback) {
    getUserMedia.call(navigator, constraints, successCallback, errorCallback);
  });
};

// Older browsers might not implement mediaDevices at all, so we set an empty object first
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// Some browsers partially implement mediaDevices. We can't just assign an object
// with getUserMedia as it would overwrite existing properties.
// Here, we will just add the getUserMedia property if it's missing.
if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = promisifiedOldGUM;
}

// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: true, video: { width: 1280, height: 720 } };

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (stream) {
    var video = document.querySelector("video");
    video.src = window.URL.createObjectURL(stream);
    video.onloadedmetadata = function (e) {
      video.play();
    };
  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  });
```

### Cuadros por segundo

Pocos frame-rates ó cuadros por segundo pueden ser deseables en algunos casos, como transmisiones WebRTC con restricciones de ancho de banda.

```js
var constraints = { video: { frameRate: { ideal: 10, max: 15 } } };
```

### Camara frontal y camara trasera

En telefonos moviles.

```js
var front = false;
document.getElementById("flip-button").onclick = function () {
  front = !front;
};

var constraints = { video: { facingMode: front ? "user" : "environment" } };
```

## Permisos

Para usar `getUserMedia()` en una app instalable (por ejemplo, una [Firefox OS app](/en-US/Apps/Build/Building_apps_for_Firefox_OS/Firefox_OS_app_beginners_tutorial)), necesitas especificar uno o ambos de los siguientes campos dentro de tu archivo manifest:

```js
"permissions": {
  "audio-capture": {
    "description": "Required to capture audio using getUserMedia()"
  },
  "video-capture": {
    "description": "Required to capture video using getUserMedia()"
  }
}
```

Ver [permission: audio-capture](/en-US/Apps/Developing/App_permissions#audio-capture) y [permission: video-capture](/en-US/Apps/Developing/App_permissions#video-capture) para más información.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver También

- The older [navigator.getUserMedia](/es/docs/Web/API/Navigator/getUserMedia) legacy API.
- [navigator.enumerateDevices](/es/docs/Web/API/MediaDevices/enumerateDevices) - learn the types and number of devices the user has available.
- [WebRTC](/es/docs/WebRTC) - the introductory page to the API
- [MediaStream API](/es/docs/WebRTC/MediaStream_API) - the API for the media stream objects
- [Taking webcam photos](/es/docs/WebRTC/taking_webcam_photos) - a tutorial on using `getUserMedia() for taking photos rather than video.`
