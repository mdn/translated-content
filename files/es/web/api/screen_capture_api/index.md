---
title: API de captura de pantalla
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: 6b1e3eebf22abf1b73bb219581335b1147b75d7a
---

{{DefaultAPISidebar("Screen Capture API")}}

La API de captura de pantalla incorpora adiciones a la API de Secuencias y Captura de Medios existente para permitir que el usuario seleccione una pantalla o parte de una pantalla (como una ventana) para capturar como una secuencia de medios. Esta transmisión se puede grabar o compartir con otros a través de la red.

## Conceptos y uso de la API de captura de pantalla

La API de captura de pantalla es relativamente simple de usar. Su único método es {{domxref("MediaDevices.getDisplayMedia()")}}, cuyo trabajo es pedirle al usuario que seleccione una pantalla o parte de una pantalla para capturar en forma de {{domxref("MediaStream") }}.

Para comenzar a capturar video desde la pantalla, llama a `getDisplayMedia()` en `navigator.mediaDevices`:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

La {{jsxref("Promise","Promesa")}} devuelta por `getDisplayMedia()` se resuelve en un {{domxref("MediaStream")}} que transmite los medios capturados.

Consulte el artículo [Uso de la API de captura de pantalla](/es/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) para obtener una visión más detallada de cómo usar la API para capturar el contenido de la pantalla como una transmisión.

## Interfaces

- {{domxref("CaptureController")}}
  - : Proporciona métodos que se pueden usar para manipular aún más una sesión de captura separada de su inicio a través de {{domxref("MediaDevices.getDisplayMedia()")}}. Un objeto `CaptureController` se asocia con una sesión de captura pasándolo a una llamada {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} como el valor de la propiedad `controller` del objeto de opciones.

## Adiciones a la interfaz MediaDevices

- {{domxref("MediaDevices.getDisplayMedia()")}}
  - : El método `getDisplayMedia()` se agrega a la interfaz `MediaDevices`. Similar a {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, este método crea una promesa que se resuelve con un {{domxref("MediaStream")}} que contiene el área de visualización seleccionada por el usuario, en un formato que coincida con las opciones especificadas.

## Adiciones a los diccionarios existentes

La API de captura de pantalla agrega propiedades a los siguientes diccionarios definidos por otras especificaciones.

### MediaTrackConstraints

- {{domxref("MediaTrackConstraints.cursor")}}
  - : Un [`ConstrainDOMString`](/es/docs/Web/API/MediaTrackConstraints#constraindomstring) que indica si el cursor debe incluirse o no en la transmisión de la superficie de visualización capturada, y si debe estar siempre visible o si solo debe estar visible mientras el ratón está en movimiento.
- {{domxref("MediaTrackConstraints.displaySurface")}}
  - : Un [`ConstrainDOMString`](/es/docs/Web/API/MediaTrackConstraints#constraindomstring) que indica qué tipo de superficie de visualización se va a capturar. El valor puede ser `browser`, `monitor` o `window`.
- {{domxref("MediaTrackConstraints.logicalSurface")}}
  - : Indica si el video en la transmisión representa o no una superficie de visualización lógica (es decir, una que puede no ser completamente visible en la pantalla o puede estar completamente fuera de la pantalla). Un valor `true` indica que se va a capturar una superficie de visualización lógica.
- {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback")}}
  - : Controla si el audio que se reproduce en una pestaña continuará reproduciéndose desde los altavoces locales de un usuario cuando se capture la pestaña, o si se suprimirá. Un valor `true` indica que se suprimirá.

### MediaTrackSettings

- {{domxref("MediaTrackSettings.cursor")}}
  - : Una cadena que indica si la superficie de visualización que se está capturando incluye o no el cursor del mouse y, de ser así, si solo es visible mientras el mouse está en movimiento o si siempre está visible. El valor es `always`, `motion` o `never`.
- {{domxref("MediaTrackSettings.displaySurface")}}
  - : Una cadena que indica qué tipo de superficie de visualización se está capturando actualmente. El valor puede ser `browser`, `monitor` o `window`.
- {{domxref("MediaTrackSettings.logicalSurface")}}
  - : Un valor booleano, que es `true` si el video que se captura no corresponde directamente a una sola área de visualización en pantalla.
- {{domxref("MediaTrackSettings.suppressLocalAudioPlayback")}}
  - : Un valor booleano, que es `true` si el audio que se captura no se reproduce en los altavoces locales del usuario.

### MediaTrackSupportedConstraints

- {{domxref("MediaTrackSupportedConstraints.cursor")}}
  - : Un valor booleano, que es `true` si el _user agent_ y el dispositivo admiten la restricción {{domxref("MediaTrackConstraints.cursor")}}.
- {{domxref("MediaTrackSupportedConstraints.displaySurface")}}
  - : Un valor booleano, que es `true` si el entorno actual admite la restricción {{domxref("MediaTrackConstraints.displaySurface")}}.
- {{domxref("MediaTrackSupportedConstraints.logicalSurface")}}
  - : Un valor booleano, que es `true` si el entorno actual admite la restricción {{domxref("MediaTrackConstraints.logicalSurface")}}.
- {{domxref("MediaTrackSupportedConstraints.suppressLocalAudioPlayback")}}
  - : Un valor booleano, que es `true` si el entorno actual admite la restricción {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback")}}.

## Validación de la política de permisos

Los {{Glossary("User agent")}} que admiten la [Política de permisos](/es/docs/Web/HTTP/Permissions_Policy) (ya sea utilizando el HTTP {{HTTPHeader("Permissions-Policy")}} o el atributo {{HTMLElement("iframe")}} [`allow`](/es/docs/Web/HTML/Element/iframe#allow)) puede especificar el deseo de usar la API de captura de pantalla usando la directiva `display-capture`:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

La lista de permitidos predeterminada es `self`, que permite que cualquier contenido dentro del mismo origen use Captura de pantalla.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Uso de la API de captura de pantalla](/es/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getDisplayMedia()")}}
