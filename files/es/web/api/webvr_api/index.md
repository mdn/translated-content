---
title: WebVR API
slug: Web/API/WebVR_API
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{Non-standard_header}}

> [!NOTE]
> La API WebVR ha sido reemplazada por la [API WebXR](/es/docs/Web/API/WebXR_Device_API). WebVR nunca llegó a ratificarse como estándar, se implementó y habilitó por defecto en muy pocos navegadores y admitía un número reducido de dispositivos.

WebVR permite exponer dispositivos de realidad virtual (RV) a las aplicaciones web, por ejemplo, visores montados en la cabeza como el Oculus Rift o el HTC Vive, lo que permite a los desarrolladores convertir la información de posición y movimiento del visor en desplazamientos dentro de una escena 3D. Esto tiene numerosas e interesantes aplicaciones, desde recorridos virtuales de productos y aplicaciones de formación interactivas hasta juegos inmersivos en primera persona.

## Conceptos y uso

El método {{DOMxRef("Navigator.getVRDisplays()")}} devuelve cualquier dispositivo de RV conectado a tu computadora; cada uno estará representado por un objeto {{DOMxRef("VRDisplay")}}.

![Boceto de una persona en una silla con unas gafas etiquetadas como "Head mounted display (HMD)", frente a un monitor con una cámara web etiquetada como "Position sensor"](hw-setup.png)

{{DOMxRef("VRDisplay")}} es la interfaz central de la API WebVR; a través de sus propiedades y métodos puedes acceder a funcionalidades para:

- Obtener información útil que nos permita identificar el visor, qué capacidades tiene, controladores asociados a él y más.
- Obtener los [datos de cada fotograma](/es/docs/Web/API/VRFrameData) de contenido que quieras presentar en un visor, y enviar esos fotogramas para mostrarlos a un ritmo constante.
- Iniciar y detener la presentación de contenido en el visor.

Una aplicación WebVR típica (sencilla) funcionaría así:

1. Se usa {{DOMxRef("Navigator.getVRDisplays()")}} para obtener una referencia al visor de RV.
2. Se usa {{DOMxRef("VRDisplay.requestPresent()")}} para empezar a presentar contenido en el visor de RV.
3. Se usa el método propio de WebVR {{DOMxRef("VRDisplay.requestAnimationFrame()")}} para ejecutar el bucle de renderizado de la aplicación a la frecuencia de actualización adecuada para el visor.
4. Dentro del bucle de renderizado, obtienes los datos necesarios para mostrar el fotograma en curso ({{DOMxRef("VRDisplay.getFrameData()")}}), dibujas la escena dos veces (una por cada ojo) y luego envías la vista renderizada al visor para mostrarla al usuario ({{DOMxRef("VRDisplay.submitFrame()")}}).

Además, WebVR 1.1 añade varios eventos al objeto {{DOMxRef("Window")}} para que JavaScript pueda responder a los cambios en el estado del visor.

> [!NOTE]
> Encontrarás mucha más información sobre cómo funciona la API en nuestros artículos [Uso de la API WebVR](/es/docs/Web/API/WebVR_API/Using_the_WebVR_API) y [Conceptos de WebVR](/es/docs/Web/API/WebVR_API/Concepts).

### Disponibilidad de la API

La API WebVR, que nunca se ratificó como estándar web, ha quedado obsoleta en favor de la [API WebXR](/es/docs/Web/API/WebXR_Device_API), que avanza con buen ritmo hacia el final de su proceso de estandarización. Por eso, deberías intentar actualizar el código existente para que use la API más reciente. En general, la transición debería ser bastante sencilla.

Además, en algunos dispositivos o navegadores, WebVR requiere que la página se cargue en un contexto seguro, a través de una conexión HTTPS. Si la página no es totalmente segura, los métodos y funciones de WebVR no estarán disponibles. Puedes comprobarlo fácilmente verificando si el método {{domxref("Navigator.getVRDisplays", "getVRDisplays()")}} de {{domxref("Navigator")}} es `NULL`:

```js
if (!navigator.getVRDisplays) {
  console.error("WebVR no está disponible");
} else {
  /* Usar WebVR */
}
```

### Uso de controladores: combinación de WebVR con la API Gamepad

Muchas configuraciones de hardware de WebVR incluyen controladores que acompañan al visor. Pueden usarse en aplicaciones WebVR mediante la [API Gamepad](/es/docs/Web/API/Gamepad_API) y, en concreto, mediante la [API de extensiones de Gamepad](/es/docs/Web/API/Gamepad_API#extensiones_experimentales_de_los_gamepads), que añade características a la API para acceder a la [pose del controlador](/es/docs/Web/API/GamepadPose), los [actuadores hápticos](/es/docs/Web/API/GamepadHapticActuator) y más.

> [!NOTE]
> Nuestro artículo [Uso de controladores de RV con WebVR](/es/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) explica los conceptos básicos para usar controladores de RV en aplicaciones WebVR.

## Interfaces de WebVR

- {{DOMxRef("VRDisplay")}}
  - : Representa cualquier dispositivo de RV compatible con esta API. Incluye información genérica, como los ID y las descripciones del dispositivo, además de métodos para empezar a presentar una escena de RV, obtener los parámetros de los ojos y las capacidades del visor, y otras funcionalidades importantes.
- {{DOMxRef("VRDisplayCapabilities")}}
  - : Describe las capacidades de un {{DOMxRef("VRDisplay")}}; sus características sirven para comprobar qué puede hacer el dispositivo de RV, por ejemplo, si es capaz de devolver información de posición.
- {{DOMxRef("VRDisplayEvent")}}
  - : Representa el objeto de evento de los eventos relacionados con WebVR (consulta los [eventos de Window](#eventos_de_window) enumerados más abajo).
- {{DOMxRef("VRFrameData")}}
  - : Representa toda la información necesaria para renderizar un solo fotograma de una escena de RV; se construye mediante {{DOMxRef("VRDisplay.getFrameData()")}}.
- {{DOMxRef("VRPose")}}
  - : Representa el estado de posición en una marca de tiempo determinada (que incluye orientación, posición, velocidad y aceleración).
- {{DOMxRef("VREyeParameters")}}
  - : Proporciona acceso a toda la información necesaria para renderizar correctamente una escena para cada ojo, incluida la información del campo de visión.
- {{DOMxRef("VRFieldOfView")}}
  - : Representa un campo de visión definido por 4 valores distintos en grados que describen la vista desde un punto central.
- {{DOMxRef("VRLayerInit")}}
  - : Representa una capa que se presentará en un {{DOMxRef("VRDisplay")}}.
- {{DOMxRef("VRStageParameters")}}
  - : Representa los valores que describen el área del escenario para dispositivos que admiten experiencias a escala de sala.

### Extensiones a otras interfaces

La API WebVR amplía las siguientes API y añade las características que se indican.

#### Gamepad

- {{DOMxRef("Gamepad.displayId")}} {{ReadOnlyInline}}
  - : _Devuelve el {{DOMxRef("VRDisplay.displayId")}} del {{DOMxRef("VRDisplay")}} asociado, es decir, el `VRDisplay` cuya escena controla el gamepad._

#### Navigator

- {{DOMxRef("Navigator.activeVRDisplays")}} {{ReadOnlyInline}}
  - : Devuelve un array con todos los objetos {{DOMxRef("VRDisplay")}} que están presentando contenido en este momento ({{DOMxRef("VRDisplay.isPresenting")}} es `true`).
- {{DOMxRef("Navigator.getVRDisplays()")}}
  - : Devuelve una promesa que se resuelve con un array de objetos {{DOMxRef("VRDisplay")}} que representan los visores de RV disponibles conectados a la computadora.

#### Eventos de Window

- {{DOMxRef("Window.vrdisplaypresentchange_event", "vrdisplaypresentchange")}}
  - : Se dispara cuando cambia el estado de presentación de un visor de RV, es decir, cuando pasa de presentar contenido a no hacerlo, o viceversa.
- {{DOMxRef("Window.vrdisplayconnect_event", "vrdisplayconnect")}}
  - : Se dispara cuando se conecta a la computadora un visor de RV compatible.
- {{DOMxRef("Window.vrdisplaydisconnect_event", "vrdisplaydisconnect")}}
  - : Se dispara cuando se desconecta de la computadora un visor de RV compatible.
- {{DOMxRef("Window.vrdisplayactivate_event", "vrdisplayactivate")}}
  - : Se dispara cuando ya se puede presentar contenido en un visor.
- {{DOMxRef("Window.vrdisplaydeactivate_event", "vrdisplaydeactivate")}}
  - : Se dispara cuando ya no se puede presentar contenido en un visor.

## Ejemplos

Puedes encontrar varios ejemplos en estos lugares:

- [webvr-tests](https://github.com/mdn/webvr-tests): ejemplos muy sencillos que acompañan la documentación de WebVR en MDN.
- [Carmel starter kit](https://github.com/facebookarchive/Carmel-Starter-Kit): ejemplos sencillos y bien comentados que acompañan a Carmel, el navegador WebVR de Facebook.
- [WebVR.info samples](https://webvr.info/samples/): ejemplos algo más detallados, junto con el código fuente
- [Página principal de A-Frame](https://aframe.io/): ejemplos que muestran el uso de A-Frame

## Especificaciones

Esta API se especificó en la antigua [API WebVR](https://immersive-web.github.io/webvr/spec/1.1/), que ha sido reemplazada por la [WebXR Device API](https://immersive-web.github.io/webxr/). Ya no está en camino de convertirse en un estándar.

Hasta que todos los navegadores hayan implementado las nuevas [API WebXR](/es/docs/Web/API/WebXR_Device_API/Fundamentals), se recomienda recurrir a frameworks como [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) o [Three.js](https://threejs.org/), o a un [polyfill](https://github.com/immersive-web/webxr-polyfill), para desarrollar aplicaciones WebXR que funcionen en todos los navegadores. Para más información, consulta la guía [Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) de Meta.

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [A-Frame](https://aframe.io/): framework web de código abierto para crear experiencias de RV.
- [webvr.info](https://webvr.info/): información actualizada sobre WebVR, la configuración de navegadores y la comunidad.
- [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate): una plantilla de inicio útil sobre la que escribir aplicaciones WebVR.
- [Web VR polyfill](https://github.com/immersive-web/webvr-polyfill): implementación de WebVR en JavaScript.
- [WebVR Directory](https://webvr.directory/): lista de sitios WebVR de calidad.
