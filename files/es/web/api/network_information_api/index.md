---
title: Network Information API
slug: Web/API/Network_Information_API
---

{{DefaultAPISidebar("Network Information API")}}{{SeeCompatTable}}

La Network Information (Información de red) API provee información sobre el sistema de conexión en términos genéricos de tipos de conexión (ej., 'wifi', 'cellular', etc.). Esta puede ser usada para elegir contenido en alta definición o contenido baja definición basándose en la conexión del usuario. Toda la API consiste en la adición de la {{domxref("NetworkInformation")}} interfaz y una única propiedad para la {{domxref("Navigator")}} interfaz: {{domxref("Navigator.connection")}}.

{{AvailableInWorkers}}

## Examples

### Detectar cambios de conexión

```js
var connection =
  navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var tipo = connection.effectiveType;

function updateConnectionStatus() {
  console.log(
    "Connection type changed from " + tipo + " to " + connection.effectiveType,
  );
  tipo = connection.effectiveType;
}

connection.addEventListener("change", updateConnectionStatus);
```

### Precargar recursos grandes

El objeto de conexión es muy útil por ir decidiendo entre precargar recursos que ocupan mucho ancho de banda o memoria. Este ejemplo puede ser llamado justo después de que la página cargue para verificar el tipo de conexión donde precargar un video tal vez no sea lo deseado.Si se detecta la conexión de un celular, entonces el `preloadVideo` flag está seteado en `false`. Para simplificación y claridad, este ejemplo sólo testea un tipo de conexión. Una real-word usa case probablemente una declaración de switch o otro método para verificar todos los posibles valores de {{domxref("NetworkInformation.type")}}.

en caso usaría una declaración de switch o algún otro método para verificar todos los valores posibles de
use case would likely use a switch statement or some other method to check all of the possible values of {{domxref("NetworkInformation.type")}}. Independientemente del valor de tipo, puede obtener una estimación de la velocidad de conexión a través de la propiedad {{domxref("NetworkInformation.effectiveType")}}.

```js
let preloadVideo = true;
var connection =
  navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
  if (connection.effectiveType === "slow-2g") {
    preloadVideo = false;
  }
}
```

## Interfaces

- {{domxref("NetworkInformation")}}
  - : Provee información sobre la conexión de un dispositivo si está usándose para cominicarse con la red y proveer un tipo de scripts para ser notificado si el tipo de conexión cambia. La intefaz de `NetworkInformation` no puede ser inicializada. En lugar de esto, se accede a través de la interfaz {{domxref("Navigator")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Network Information API Specification](http://w3c.github.io/netinfo/)
- [Online and offline events](/es/docs/Online_and_offline_events)
- {{domxref("Navigator.connection", "window.navigator.connection")}}
