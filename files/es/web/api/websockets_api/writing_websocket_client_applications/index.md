---
title: Escribiendo aplicaciones con WebSockets
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
---

WebSockets es una tecnología basada en el protocolo ws, este hace posible establecer una conexión continua full-duplex, entre un cliente y servidor. Un cliente websocket podría ser el navegador del usuario, pero el protocolo es una plataforma independiente.

> **Nota:** Tenemos un ejemplo funcional de un sistema de chat/servidor usado para ejemplos de código que estará disponible una vez nuestra infraestructura esté en posición de hospedar ejemplos de WebSocket apropiadamente.

## Disponibilidad de WebSockets

La API de WebSocket esta disponible para el código JavaScript cuyo alcance DOM sea un objeto {{ domxref("Window") }} o cualquier objeto implementando {{ domxref("WorkerUtils") }}; si es así, puedes usarlos desde los Web Workers.

> **Nota:** La API de WebSockets (y el protocolo subyacente) continúan en activo desarrollo, y existen muchos problemas de compatibilidad entre los navegadores en este momento (e inclusive entre los diferentes lanzamientos del mismo navegador).

## Creando un Objeto WebSocket

Para comunicarse utilizando el protocolo webSocket, necesitarás crear un objeto WebSocket; este automáticamente abrirá una conexión temporal al servidor.

El constructor WebSocket requiere de un parámetro obligatorio y otro opcional:

```
WebSocket WebSocket(
  in DOMString url,
  in optional DOMString protocols
);

WebSocket WebSocket(
  in DOMString url,
  in optional DOMString[] protocols
);
```

- `url`
  - : La url a la que conectar; esta es la URL a la que el WebSocket responde.
- `protocols` {{ optional_inline() }}
  - : Un string o array de strings con el/los protocolos a usar. Estos strings son usados para indicar sub-protocolos, para que el servidor pueda implementar multiples sub-protocolos WebSocket (por ejemplo, puede necesitar usar un servidor para manejar diferentes tipos de interacciones dependiendo del protocolo especificado). Si no se especifica el string como protocolo, se asumirá un string vacío.

El constructor puede lanzar excepciones:

- `SECURITY_ERR`
  - : El puerto de la conexión está siendo bloqueado.

<!---->

### Errores de conexión

Si ocurre un error al intentar conectar, lo primero que recibiremos será un evento con el nombre de "error" en el objeto `WebSocket` (de este modo se invoca el manejador `onerror`), y luego [`CloseEvent`](/en/WebSockets/WebSockets_reference/CloseEvent) es enviado al objeto `WebSocket` (de este modo se invoca el manejador `onclose`), para indicar la razón del cierre de la conexión.

A partir de Firefox 11, es normal recibir un mensaje de error descriptivo en la consola de la plataforma Mozilla, y un código de cierre como está definido en el [RFC 6455, Section 7.4](http://tools.ietf.org/html/rfc6455#section-7.4) a través de un [`CloseEvent`](/en/WebSockets/WebSockets_reference/CloseEvent).

### Ejemplos

En este ejemplo de crea un nuevo WebSocket, conectandose al servidor `ws://www.example.com/socketserver`. El nombre del protocolo "protocolOne" es el utilizado para la consulta del socket, aunque puede ser omitido.

```js
var exampleSocket = new WebSocket(
  "ws://www.example.com/socketserver",
  "protocolOne",
);
```

Como respuesta, `exampleSocket.readyState` es `CONNECTING`. El `readyState` será `OPEN` una vez que la conexión este lista para transferir información.

Si se quiere establecer una conexión que soporte varios protocolos, se puede establecer un array de protocolos:

```js
var exampleSocket = new WebSocket("ws://www.example.com/socketserver", [
  "protocolOne",
  "protocolTwo",
]);
```

Una vez que la conexión este establecida (`readyState` estará `OPEN`), `exampleSocket.protocol` te dirá qué protocolo ha seleccionado el servidor.

En los ejemplos anteriores `ws` sustituye `http`, y de igual manera `wss` sustituye a `https`. Al crear un WebSocket se hace uso del mecanismo Upgrade de HTTP, por lo que la petición de actualización del protocolo está implícita cuando accedemos al servidor HTTP con `ws://www.example.com` o `wss://www.example.com`.

## Enviando Información al servidor

Una vez la conexión esta abierta, se puede comenzar a enviar datos al servidor. Para hacer esto, simplemente se llama al metodo [`send()`](</en/WebSockets/WebSockets_reference/WebSocket#send()> "en/WebSockets/WebSockets reference/WebSocket#send()") del objeto `WebSocket`, cada vez que se desea enviar un mensaje:

```js
exampleSocket.send("Here's some text that the server is urgently awaiting!");
```

Puedes enviar información como un string, {{ domxref("Blob") }}, o en un [`ArrayBuffer`](/en/JavaScript_typed_arrays/ArrayBuffer).

> **Nota:** Antes de la version 11, Firefox sólo soportaba el envío de datos como una cadena.

Como la conexión es asincronica y es propensa a fallar, no hay garantia de poder llamar al metodo `send()` inmediatamente despúes de haber creado el objeto WebSocket de manera exitosa. Para enviar información se debe estar seguro de que almenos una conexión ya esta abierta, usando el manejador `onopen`:

```js
exampleSocket.onopen = function (event) {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
```

### Usando JSON para transferir Objetos

Una forma de enviar información compleja al servidor es utilizar [JSON](/en/JSON). Por ejemplo, un programa para chatear puede interactuar con el servidor usando un protocolo que implementa el uso de paquetes de JSON:

```js
// Envia texto a todos los usuarios através del servidor
function sendText() {
  // Se construye un Objeto msg que contiene la información que el servidor necesita procesar de ese cliente.
  var msg = {
    type: "message",
    text: document.getElementById("text").value,
    id: clientID,
    date: Date.now(),
  };

  // Send the msg object as a JSON-formatted string.
  exampleSocket.send(JSON.stringify(msg));

  // Blank the text input element, ready to receive the next line of text from the user.
  document.getElementById("text").value = "";
}
```

## Recibiendo mensajes del servidor

WebSockets API es un manejador de eventos; cuando el mensaje es recibido, un "message" el evento es pasado el manejador `onmessage`. Para escuchar la entrada de información, se puede hacer algo como lo siguiente:

```js
exampleSocket.onmessage = function (event) {
  console.log(event.data);
};
```

### Recibiendo e interpretando objetos JSON

Vamos a imaginar una aplicación de chat, donde el cliente usa JSON para transmitir objetos con información. Hay varios tipos de paquetes que el cliente recibirá:

- Inicio de sesión handshake
- Mensajes de texto
- Actualización de Lista de usuarios

El código que interpretará los mensajes entrantes será así:

```js
exampleSocket.onmessage = function (event) {
  var f = document.getElementById("chatbox").contentDocument;
  var text = "";
  var msg = JSON.parse(event.data);
  var time = new Date(msg.date);
  var timeStr = time.toLocaleTimeString();

  switch (msg.type) {
    case "id":
      clientID = msg.id;
      setUsername();
      break;
    case "username":
      text =
        "<b>User <em>" +
        msg.name +
        "</em> signed in at " +
        timeStr +
        "</b><br>";
      break;
    case "message":
      text = "(" + timeStr + ") <b>" + msg.name + "</b>: " + msg.text + "<br>";
      break;
    case "rejectusername":
      text =
        "<b>Your username has been set to <em>" +
        msg.name +
        "</em> because the name you chose is in use.</b><br>";
      break;
    case "userlist":
      var ul = "";
      for (i = 0; i < msg.users.length; i++) {
        ul += msg.users[i] + "<br>";
      }
      document.getElementById("userlistbox").innerHTML = ul;
      break;
  }

  if (text.length) {
    f.write(text);
    document.getElementById("chatbox").contentWindow.scrollByPages(1);
  }
};
```

Se usa [`JSON.parse()`](/en/JavaScript/Reference/Global_Objects/JSON/parse) para convertir el objeto JSON de vuelta al original, luego se examina y se realiza la acción pertinente.

### Formato de texto de los datos

El texto recibido a través de la conexión WebSocket está en formato UTF-8.

Antes de Gecko 9.0 (Firefox 9.0 / Thunderbird 9.0 / SeaMonkey 2.6), algunos no-caracteres que siguen siendo texto UTF-8 válido podrían causar el cierre de la conexión. Ahora Gecko permite esos valores.

## Cerrando la conexión

Cuando se ha terminado de usar la conexión WebSocket, se llama el método [`close()`](</en/WebSockets/WebSockets_reference/WebSocket#close()> "en/WebSockets/WebSockets reference/WebSocket#close()") del objeto `WebSocket`:

```js
exampleSocket.close();
```

Puede ser de gran ayuda revisar el atributo `bufferedAmount` del socket para verificar que toda la información ha sido enviada antes de intentar cerrar el socket.

## Consideraciones de Seguridad

Los WebSockets no deben ser usados en entornos de contenido mixto; eso es, no debes abrir una conexión de WebSocket _no segura_ desde una página cargada usando _HTTPS_ o viceversa. De hecho, muchos navegadores solo admiten conexiones WebSocket seguras, y ya no soportan su uso en contextos no seguros.
