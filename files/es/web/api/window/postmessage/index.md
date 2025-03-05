---
title: "Window: método postMessage()"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{ApiRef("HTML DOM")}}

El método **`window.postMessage()`** permite la comunicación segura entre objetos {{domxref("Window")}} de diferentes orígenes; por ejemplo, entre una página y una ventana emergente que ha abierto, o entre una página y un _iframe_ incrustado dentro de ella.

Normalmente, a los _scripts_ en diferentes páginas se les permite acceder entre sí si y solo si las páginas de las que se originan comparten el mismo [origen](/es/docs/Web/API/Location/origin) (también conocido como "[política del mismo origen](/es/docs/Web/Security/Same-origin_policy)"). `window.postMessage()` proporciona un mecanismo controlado para eludir esta restricción de forma segura (si se usa correctamente).

Furthermore, an accessing script must have obtained the window object of the accessed document beforehand. This can occur through methods such as [`window.open()`](/es/docs/Web/API/Window/open) for popups or [`iframe.contentWindow`](/es/docs/Web/API/HTMLIFrameElement/contentWindow) for iframes.

Además, un _script_ de acceso debe haber obtenido el objeto de ventana del documento al que se ha accedido de antemano. Esto puede ocurrir a través de métodos como [`window.open()`](/es/docs/Web/API/Window/open) para ventanas emergentes o [`iframe.contentWindow`](/es/docs/Web/API/HTMLIFrameElement/contentWindow) para _iframes_.

En términos generales, una ventana puede obtener una referencia a otra (por ejemplo, a través de `targetWindow = window.opener`) y luego enviar un {{domxref("MessageEvent")}} a través de `targetWindow.postMessage()`. La ventana receptora queda entonces libre para [manejar este evento](/es/docs/Web/Events/Event_handlers) según sea necesario. Los argumentos pasados ​​a `window.postMessage()` (es decir, el "mensaje") se [exponen a la ventana receptora a través del objeto de evento](#el_evento_enviado).

## Sintaxis

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Parámetros

- `message`
  - : Datos que se enviarán a la otra ventana. Los datos se serializan utilizando el {{domxref("Web_Workers_API/Structured_clone_algorithm", "algoritmo de clonación estructurada", "", 1)}}. Esto significa que puedes pasar una amplia variedad de objetos de datos de forma segura a la ventana de destino sin tener que serializarlos tú mismo.
- `targetOrigin` {{optional_Inline}}
  - : Especifica el [origen](/es/docs/Glossary/Origin) que debe tener la ventana del destinatario para recibir el evento. Para que se envíe el evento, el origen debe coincidir exactamente (incluido el esquema, el nombre de host y el puerto). Si se omite, se toma como valor predeterminado el origen que llama al método. Este mecanismo proporciona control sobre el lugar al que se envían los mensajes; por ejemplo, si se utilizó `postMessage()` para transmitir una contraseña, sería absolutamente fundamental que este argumento fuera una URI cuyo origen sea el mismo que el del receptor previsto del mensaje que contiene la contraseña, para evitar la intercepción de la contraseña por parte de un tercero malintencionado. También se puede proporcionar `*`, lo que significa que el mensaje se puede enviar a un receptor con cualquier origen.
    > [!NOTE]
    > Siempre proporcione un `targetOrigin` específico, no `*`, si sabe dónde debe ubicarse el documento de la otra ventana. Si no proporciona un target específico, podría revelar datos a un sitio malicioso.
- `transfer` {{optional_inline}}
  - : Un [arreglo](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) opcional de [objetos transferibles](/es/docs/Web/API/Web_Workers_API/Transferable_objects) para transferir la propiedad. La propiedad de estos objetos se otorga al lado de destino y ya no se pueden utilizar en el lado de envío. Estos objetos transferibles deben adjuntarse al mensaje; de ​​lo contrario, se moverían pero no serían accesibles en el extremo receptor.
- `options` {{optional_inline}}
  - : Un objeto opcional que contiene las siguientes propiedades:
    - `transfer` {{optional_inline}}
      - : Tiene el mismo significado que el parámetro `transfer`.
    - `targetOrigin` {{optional_inline}}
      - : Tiene el mismo significado que el parámetro `targetOrigin`.

### Valor de retorno

Ninguno ({{jsxref("undefined")}}).

## El evento enviado

Un objeto `window` puede escuchar mensajes enviados ejecutando el siguiente JavaScript:

```js
window.addEventListener(
  "message",
  (event) => {
    if (event.origin !== "http://example.org:8080") return;

    // …
  },
  false,
);
```

Las propiedades del mensaje enviado son:

- `data`
  - : El objeto pasado desde la otra ventana.
- `origin`
  - : El {{Glossary("origin", "origen")}} de la ventana que envió el mensaje en el momento en que se llamó a `postMessage`. Esta cadena es la concatenación del protocolo y "://", el nombre de host si existe, y ":" seguido de un número de puerto si hay un puerto presente y difiere del puerto predeterminado para el protocolo dado. Ejemplos de orígenes típicos son `https://example.org` (implicando el puerto `443`), `http://example.net` (implicando el puerto `80`), y `http://example.com:8080`. Ten en cuenta que este origen _no_ está garantizado para ser el origen actual o futuro de esa ventana, que podría haber sido navegada a una ubicación diferente desde que se llamó a `postMessage`.
- `source`
  - : Una referencia al objeto {{domxref("window")}} que envió el mensaje; puedes usar esto para establecer una comunicación bidireccional entre dos ventanas con diferentes orígenes.

## Preocupaciones de seguridad

**Si no esperas recibir mensajes de otros sitios, _no_ agregues ningún detector de eventos para eventos de `mensaje`**. Esta es una forma completamente infalible de evitar problemas de seguridad.

Si esperas recibir mensajes de otros sitios, **siempre verifica la identidad del remitente** usando las propiedades `origin` y posiblemente `source`. Cualquier ventana (incluyendo, por ejemplo, `http://evil.example.com`) puede enviar un mensaje a cualquier otra ventana, y no tienes garantías de que un remitente desconocido no enviará mensajes maliciosos. Habiendo verificado la identidad, sin embargo, aún deberías **verificar siempre la sintaxis del mensaje recibido**. De lo contrario, un agujero de seguridad en el sitio en el que confiabas para enviar solo mensajes confiables podría entonces abrir un agujero de _scripting_ entre sitios en tu sitio.

**Siempre especifica un origen de destino exacto, no `*`, cuando uses `postMessage` para enviar datos a otras ventanas.** Un sitio malicioso puede cambiar la ubicación de la ventana sin tu conocimiento y, por lo tanto, interceptar los datos enviados utilizando `postMessage`.

### Mensajería segura de memoría compartida

Si `postMessage()` lanza una excepción cuando se usa con objetos {{jsxref("SharedArrayBuffer")}}, es posible que necesites asegurarte de que tu sitio esté correctamente aislado entre sitios. La memoria compartida está protegida detrás de dos encabezados HTTP:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} con `same-origin` como valor (protege tu origen de atacantes)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} con `require-corp` o `credentialless` como valor (protege a las víctimas de tu origen)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Para comprobar si el aislamiento entre sitios ha sido exitoso, puedes probar contra la propiedad {{domxref("Window.crossOriginIsolated")}} disponible para los contextos de ventana y _worker_:

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

## Ejemplos

```js
/*
 * En los scripts de la ventana A, con A en http://example.com:8080:
 */

const popup = window.open(/* detalles de la ventana emergente */);

// Cuando la ventana emergente se haya cargado completamente, si no está bloqueada por un bloqueador de ventanas emergentes:

// Esto no hace nada, suponiendo que la ventana no haya cambiado su ubicación.
popup.postMessage(
  "El usuario es 'bob' y la contraseña es 'secret'",
  "https://secure.example.net",
);

// Esto colocará exitosamente un mensaje en la cola para ser enviado a la ventana emergente,
// suponiendo que la ventana no haya cambiado su ubicación.

popup.postMessage("¡Hola!", "http://example.com");

window.addEventListener(
  "message",
  (event) => {
    // ¿Confiamos en el remitente de este mensaje? (podría ser
    // diferente de lo que originalmente abrimos, por ejemplo).
    if (event.origin !== "http://example.com") return;

    // event.source es popup
    // event.data es "¡hola a ti mismo! la respuesta secreta es: ¡rheeeeet!"
  },
  false,
);
```

```js
/*
 * En los scripts de la ventana emergente, ejecutándose en http://example.com:
 */

// Llamado en algún momento después de que se llama a postMessage
window.addEventListener("message", (event) => {
  // ¿Confiamos en el remitente de este mensaje?
  if (event.origin !== "http://example.com:8080") return;

  // event.source es window.opener
  // event.data es "¡Hola!"

  // Suponiendo que has verificado el origen del mensaje recibido (lo cual
  // debes hacer en cualquier caso), un modismo conveniente para responder a un
  // mensaje es llamar a postMessage en event.source y proporcionar
  // event.origin como el targetOrigin.
  event.source.postMessage(
    "¡hola a ti mismo! la respuesta secreta " + "es: ¡rheeeeet!",
    event.origin,
  );
});
```

### Notas

Cualquier script en un documento en una ventana puede solicitar que se envíe un mensaje a un documento en otra ventana cuyo objeto de ventana haya obtenido, llamando a `.postMessage()` en ese objeto de ventana. En consecuencia, cualquier detector de eventos utilizado para recibir mensajes **debe** comprobar primero la identidad del remitente del mensaje, utilizando las propiedades `origin` y posiblemente `source`. Esto no se puede exagerar: **No comprobar las propiedades `origin` y posiblemente `source` permite ataques de secuencias de comandos entre sitios**.

Como con cualquier script despachado asincrónicamente (tiempos de espera, eventos generados por el usuario), no es posible para el llamador de `postMessage` detectar cuando un controlador de eventos que detecta eventos enviados por `postMessage` lanza una excepción.

Después de que se llama a `postMessage()`, el {{domxref("MessageEvent")}} se despachará _solo después de que todos los contextos de ejecución pendientes hayan terminado_. Por ejemplo, si `postMessage()` se invoca en un controlador de eventos, ese controlador de eventos se ejecutará hasta completarse, al igual que cualquier controlador restante para ese mismo evento, antes de que se despache el {{domxref("MessageEvent")}}.

El valor de la propiedad `origin` del evento despachado no se ve afectado por el valor actual de `document.domain` en la ventana llamadora.

Para nombres de host IDN solamente, el valor de la propiedad `origin` no es consistentemente Unicode o punycode; para una mayor compatibilidad, verifica tanto los valores IDN como punycode cuando uses esta propiedad si esperas mensajes de sitios IDN. Este valor eventualmente será consistentemente IDN, pero por ahora debes manejar ambas formas, IDN y punycode.

El valor de la propiedad `origin` cuando la ventana que envía contiene una URL [`javascript:`](/es/docs/Web/URI/Schemes/javascript) o [`data:`](/es/docs/Web/URI/Schemes/data) es el origen del script que cargó la URL.

### Uso de window\.postMessage en extensiones {{Non-standard_inline}}

`window.postMessage` está disponible para JavaScript que se ejecuta en código de _chrome_ (por ejemplo, en extensiones y código privilegiado), pero la propiedad `source` del evento despachado siempre es `null` como una restricción de seguridad. (Las otras propiedades tienen sus valores esperados).

No es posible para _scripts_ de contenido o contextos web especificar un `targetOrigin` para comunicarse directamente con una extensión (ya sea el _script_ de fondo o un _script_ de contenido). Los _scripts_ web o de contenido _pueden_ usar `window.postMessage` con un `targetOrigin` de `"*"` para transmitir a cada oyente, pero esto no se recomienda, ya que una extensión no puede estar segura del origen de tales mensajes, y otros oyentes (incluidos aquellos que no controlas) pueden detectar.

Los _scripts_ de contenido deben usar {{WebExtAPIRef("runtime.sendMessage")}} para comunicarse con el _script_ de fondo. Los _scripts_ de contexto web pueden usar eventos personalizados para comunicarse con los _scripts_ de contenido (con nombres de eventos generados aleatoriamente, si es necesario, para evitar el espionaje desde la página invitada).

Por último, publicar un mensaje a una página en una URL `file:` actualmente requiere que el argumento `targetOrigin` sea `"*"`. `file://` no puede ser usado como una restricción de seguridad; esta restricción puede ser modificada en el futuro.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Document.domain")}}
- {{domxref("CustomEvent")}}
- {{domxref("BroadcastChannel")}} - Para comunicación del mismo origen.
