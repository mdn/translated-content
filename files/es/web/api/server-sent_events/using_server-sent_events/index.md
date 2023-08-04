---
title: Utilizando eventos enviados por el servidor (server-sent event)
slug: Web/API/Server-sent_events/Using_server-sent_events
---

Desarrollar una aplicación web que utilice server-sent events es muy fácil. Solo necesitas un pequeño código del lado del servidor para transmitir los eventos a la aplicación web, pero del lado de la aplicacion web se trabaja prácticamente igual que con cualquier otro tipo de eventos.

Puedes ver un ejemplo [aqui](/samples/sse/) (actualmente no funciona).

[ejemplo2](http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_sse)

## Recibiendo eventos desde el servidor

El server-sent event API está contenido en la interfaz [`EventSource`](/en/Server-sent_events/EventSource); para abrir una conexión al servidor para recibir eventos de él. Se crea un nuevo objeto new [EventSource](/en/Server-sent_events/EventSource), especificando el URI de un script que genera los eventos, Por ejemplo:

```js
var evtSource = new EventSource("ssedemo.php");
```

> **Nota:** Aunque todavía no es parte de la norma, EventSource es soportado por Firefox 11 y posteriores. Se espera que pronto forme parte del estándar.

Una vez que ha instanciado el origen del evento, puede comenzar a escuchar los mensajes:

```js
evtSource.onmessage = function (e) {
  var newElement = document.createElement("li");

  newElement.innerHTML = "message: " + e.data;
  eventList.appendChild(newElement);
};
```

Este codigo escucha todos los mensajes entrantes (Es decir, todos los avisos del servidor, que no tienen un campo de eventos en ellos) y anexa texto del mensaje a la lista en el documento HTML.

También puedes escuchar eventos, usando `addEventListener()`:

```js
evtSource.addEventListener(
  "ping",
  function (e) {
    var newElement = document.createElement("li");

    var obj = JSON.parse(e.data);
    newElement.innerHTML = "ping at " + obj.time;
    eventList.appendChild(newElement);
  },
  false,
);
```

Este código es similar, excepto que este se activa cada vez que el servidor envia un mensaje con el campo de evento "ping"; entonces se analiza el JSON en el campo de datos y retorna esa informacion.

## Enviando eventos desde el servidor

El script del servidor que envia los datos tiene que responder con el tipo MIME text/event-stream. Cada notificación se envia con un bloque de texto terminado en un par de saltos de línea, para mas detalles sobre el formato sobre la secuencia de evetos, ver [Event stream format](#event_stream_format),

El codigo PHP para este ejemplo que estamos utilizando:

```php
date_default_timezone_set("America/New_York");
header("Content-Type: text/event-stream\n\n");

$counter = rand(1, 10);
while (1) {
  // Every second, sent a "ping" event.

  echo "event: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";

  // Send a simple message at random intervals.

  $counter--;

  if (!$counter) {
    echo 'data: This is a message at time ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }

  ob_flush();
  flush();
  sleep(1);
}
```

Se genera un evento cada segundo, con el evento "ping". Los datos de cada evento es un objeto JSON que contiene, en este caso, solo la fecha en formato ISO 8601 correspondiente a la hora en que se generó el evento. A intervalos aleatorios, se envia un mensaje simple (sin ningún tipo de evento)

## Gestion de errores

Cuando se producen problemas (como un tiempo de espera o problemas relacionados con el control de acceso), se genera un evento de error. Puedes tomar acción sobre esto al implementar una devolución de llamada al objeto EventSource:

```js
evtSource.onerror = function (e) {
  alert("EventSource failed.");
};
```

En Firefox 22, no parece que haya manera de distinguir entre los diferentes de eventos de error.

## Cerrando flujo de eventos

Por defecto, si la conexión entre el cliente y el servidor se cierra, la conexión es reiniciada. Podemos terminar la conexión con el método `.close()`

```html
evtSource.close();
```

## Formato de flujo de eventos (formato stream)

El flujo de eventos es una corriente sencilla de datos de texto, que deben ser codificados usando UTF-8. Los mensajes en el flujo de eventos están separados por un par de caracteres de salto de línea. Si hay un símbolo de dos puntos como primer caracter de una línea, se entiende que es un comentario y es ignorado.

> **Nota:** La línea de comentario se puede usar para prevenir que la conexión se agote por tiempo (timeout); un sevidor puede enviar periódicamente un comentario para mantener viva la conexión.

Cada mensaje consiste en una o más líneas de texto que enumeran los campos para ese mensaje. Cada campo está representado por el nombre del campo, seguido por los datos de texto para el valor de ese campo.

### Campos

Los siguientes nombres de campo son definidos por la especificación:

- `event`

  - : El tipo de evento. Si se especifica, un evento se enviará al navegador a la escucha para el nombre del evento especificado, el sitio web usaria `addEventLister()` para escuchar eventos nombrados. El controlador `onmessage` se llama si no se especifica el nombre del evento para un mensaje.

- `data`

  - : El campo de datos para el mensaje. Cuando el EventSource recibe múltiples lineas con "`data:`", se concatenara, insertando un caracter de nueva de linea entre cada uno. Se eliminan los saltos de línea al final **\[VERIFICAR].**

- `id`

  - : El ID del evento que establecerá el último ID del objeto EventSource.

- `Retry`

  - : El tiempo de reconexión para usar al intentar enviar el evento. \[Qué código maneja esto?] Este debe ser un número entero, que especifica el tiempo de reconexion en milisegundos. Si se especifica un valor no entero, el campo se ignora.

Se omiten todos los demas nombres de campo.

> **Nota:** Si una línea no contiene dos puntos, la línea entera se tratara como un nombre de campo, con una cadena de valor vacio.

### Ejemplos

#### Mensajes con datos únicamente

En el siguiente ejemplo, hay tres mensajes enviados. El primero es solo un comentario, debido a que empieza con dos puntos. Como se mencionó anteriormente, esto puede ser útil para mantener la conexión viva si los mensajes no son enviados regularmente.

The second message contains a data field with the value "some text". The third message contains a data field with the value "another message\nwith two lines". Note the newline in the value.

El segundo mensaje contiene un campo de datos con el valor "some text". El tercer mensaje contiene un campo de datos con el valor "another message\nwith two lines". Nota la nueva línea en el valor.

```
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### Eventos nombrados

Este ejemplo envia algunos eventos nombrados. Cada uno tiene un nombre de evento especificado por el campo `event`, y un campo `data` cuyo valor es una cadena JSON apropiada con los datos necesarios para que el cliente actue sobre el evento. El campo `data`, podria, por supuesto, tener cualquier cadena; no tiene que ser un JSON.

```
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}

event: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

event: usermessage
data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
```

#### Mezclando y emparejando

No tienes que usar solamente mensajes sin nombrar o eventos tipados; puedes mezclarlo juntos en un solo flujo de evento.

```
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Here's a system message of some kind that will get used
data: to accomplish some task.

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
```

## Compatibilidad con navegadores

{{Compat}}
