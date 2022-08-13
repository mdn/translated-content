---
title: Escribiendo aplicaciones con WebSockets
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
tags:
  - Guía WebSocket WebSockets
translation_of: Web/API/WebSockets_API/Writing_WebSocket_client_applications
---
<p><span style="background-clip: initial; font-family: arial,sans-serif; font-size: 10.5pt; line-height: 115%;">WebSockets es una tecnología basada en el protocolo ws, este hace posible establecer una conexión continua  full-duplex, entre un cliente y servidor. Un cliente websocket podría ser el navegador del usuario, pero el protocolo es una plataforma independiente.</span></p>

<div class="note"><strong>Nota:</strong> Tenemos un ejemplo funcional de un sistema de chat/servidor usado para ejemplos de código que estará disponible una vez nuestra infraestructura esté en posición de hospedar ejemplos de WebSocket apropiadamente.</div>

<h2 id="Disponibilidad_de_WebSockets">Disponibilidad de WebSockets</h2>

<p>La API de WebSocket esta disponible para el código JavaScript cuyo alcance DOM sea un objeto {{ domxref("Window") }} o cualquier objeto implementando {{ domxref("WorkerUtils") }}; si es así, puedes usarlos desde los Web Workers.</p>

<div class="note"><strong>Nota: </strong>La API de WebSockets (y el protocolo subyacente) continúan en activo desarrollo, y existen muchos problemas de compatibilidad entre los navegadores en este momento (e inclusive entre los diferentes lanzamientos del mismo navegador).</div>

<h2 id="Creando_un_Objeto_WebSocket">Creando un Objeto WebSocket</h2>

<p>Para comunicarse utilizando  el protocolo webSocket, necesitarás crear un objeto WebSocket; este automáticamente abrirá una conexión temporal al servidor.</p>

<p>El constructor WebSocket requiere de un parámetro obligatorio y otro opcional:</p>

<pre>WebSocket WebSocket(
  in DOMString url,
  in optional DOMString protocols
);

WebSocket WebSocket(
  in DOMString url,
  in optional DOMString[] protocols
);
</pre>

<dl>
 <dt><code>url</code></dt>
 <dd>La url a la que conectar; esta es la URL a la que el WebSocket responde.</dd>
 <dt><code>protocols</code> {{ optional_inline() }}</dt>
 <dd>Un string o array de strings con el/los protocolos a usar. Estos strings son usados para indicar sub-protocolos, para que el servidor pueda implementar multiples sub-protocolos WebSocket (por ejemplo, puede necesitar usar un servidor para manejar diferentes tipos de interacciones dependiendo del protocolo especificado). Si no se especifica el string como protocolo, se asumirá un string vacío.</dd>
</dl>

<p>El constructor puede lanzar excepciones:</p>

<dl>
 <dt><code>SECURITY_ERR</code></dt>
 <dd>El puerto de la conexión está siendo bloqueado.</dd>
</dl>

<dl>
</dl>

<h3 id="Errores_de_conexión">Errores de conexión</h3>

<p>Si ocurre un error al intentar conectar, lo primero que recibiremos será un evento con el nombre de "error" en el objeto <code><a href="/en/WebSockets/WebSockets_reference/WebSocket" title="WebSocket">WebSocket</a> </code>(de este modo se invoca el manejador <code>onerror</code>), y luego <a href="/en/WebSockets/WebSockets_reference/CloseEvent" title="CloseEvent"><code>CloseEvent</code></a> es enviado al objeto <code><a href="/en/WebSockets/WebSockets_reference/WebSocket" title="WebSocket">WebSocket</a> </code>(de este modo se invoca el manejador <code>onclose</code>), para indicar la razón del cierre de la conexión.</p>

<p>A partir de Firefox 11, es normal recibir un mensaje de error descriptivo  en la consola de la plataforma Mozilla, y un código de cierre como está definido en el <a class="external" href="http://tools.ietf.org/html/rfc6455#section-7.4" title="RFC 6455 Section 7.4">RFC 6455, Section 7.4</a> a través de un <a href="/en/WebSockets/WebSockets_reference/CloseEvent" title="CloseEvent"><code>CloseEvent</code></a>.</p>

<h3 id="Ejemplos">Ejemplos</h3>

<p>En este ejemplo de crea un nuevo WebSocket, conectandose al servidor <code><span class="nowiki">ws://www.example.com/socketserver</span></code>. El nombre del protocolo "protocolOne"  es el utilizado para la consulta del socket, aunque puede ser omitido.</p>

<pre class="brush: js">var exampleSocket = new WebSocket("ws://www.example.com/socketserver", "protocolOne");
</pre>

<p>Como respuesta, <code>exampleSocket</code>.<code>readyState</code> es <code>CONNECTING</code>. El <code>readyState</code> será  <code>OPEN</code> una vez que la conexión este lista para transferir información.</p>

<p>Si se quiere establecer una conexión que soporte varios protocolos, se puede establecer un array de protocolos:</p>

<pre class="brush: js">var exampleSocket = new WebSocket("ws://www.example.com/socketserver", ["protocolOne", "protocolTwo"]);
</pre>

<p>Una vez que la conexión este establecida (<code>readyState</code> estará <code>OPEN</code>), <code>exampleSocket.protocol</code> te dirá qué protocolo ha seleccionado el servidor.</p>

<p>En los ejemplos anteriores <code>ws</code> sustituye <code>http</code>, y de igual manera <code>wss</code> sustituye a <code>https</code>. Al crear un WebSocket se hace uso del mecanismo Upgrade de HTTP, por lo que la petición de actualización del protocolo está implícita cuando accedemos al servidor HTTP con <code><span class="nowiki">ws://www.example.com</span></code> o <code><span class="nowiki">wss://www.example.com</span></code>.</p>

<h2 id="Enviando_Información_al_servidor">Enviando Información al servidor</h2>

<p>Una vez la conexión esta abierta, se puede comenzar<span style="line-height: 1.5;"> a enviar datos al servidor. Para hacer esto, simplemente se llama al metodo</span><span style="line-height: 1.5;"> </span><a href="/en/WebSockets/WebSockets_reference/WebSocket#send()" style="line-height: 1.5;" title="en/WebSockets/WebSockets reference/WebSocket#send()"><code>send()</code></a><span style="line-height: 1.5;"> del objeto </span><code style="font-style: normal; line-height: 1.5;">WebSocket</code>, <span style="line-height: 1.5;">cada vez que se desea enviar un mensaje:</span></p>

<pre class="brush: js">exampleSocket.send("Here's some text that the server is urgently awaiting!");
</pre>

<p>Puedes enviar información como un string, {{ domxref("Blob") }}, o en un  <a href="/en/JavaScript_typed_arrays/ArrayBuffer" title="en/JavaScript typed arrays/ArrayBuffer"><code>ArrayBuffer</code></a>.</p>

<div class="note"><strong>Nota:</strong> Antes de la version 11, Firefox sólo soportaba el envío de datos como una cadena.</div>

<p>Como la conexión es asincronica y es propensa a fallar, no hay garantia de poder llamar al metodo <code>send()</code> inmediatamente despúes de haber creado el objeto WebSocket de manera exitosa. Para enviar información se debe estar seguro de que almenos una conexión ya esta abierta, usando el manejador <code>onopen</code>:</p>

<pre class="brush: js">exampleSocket.onopen = function (event) {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
</pre>

<h3 id="Usando_JSON_para_transferir_Objetos">Usando JSON para transferir Objetos</h3>

<p>Una forma de enviar información compleja al servidor es utilizar <a href="/en/JSON" title="en/JSON">JSON</a>. Por ejemplo, un programa para chatear puede interactuar con el servidor usando un protocolo que implementa el uso de paquetes de JSON:</p>

<pre class="brush: js">// Envia texto a todos los usuarios através del servidor
function sendText() {
  // Se construye un Objeto msg que contiene la información que el servidor necesita procesar de ese cliente.
  var msg = {
    type: "message",
    text: document.getElementById("text").value,
    id:   clientID,
    date: Date.now()
  };

  // Send the msg object as a JSON-formatted string.
  exampleSocket.send(JSON.stringify(msg));

  // Blank the text input element, ready to receive the next line of text from the user.
  document.getElementById("text").value = "";
}
</pre>

<h2 id="Recibiendo_mensajes_del_servidor">Recibiendo mensajes del servidor</h2>

<p>WebSockets<span style="line-height: 1.5;"> </span><span style="line-height: 1.5;">API</span><span style="line-height: 1.5;"> es un manejador de eventos; cuando el mensaje es recibido, un "message" el evento es pasado el manejador </span><code style="font-style: normal; line-height: 1.5;">onmessage</code><span style="line-height: 1.5;">. Para escuchar la entrada de información, se puede hacer algo como lo siguiente:</span></p>

<pre class="brush: js">exampleSocket.onmessage = function (event) {
  console.log(event.data);
}
</pre>

<h3 id="Recibiendo_e_interpretando_objetos_JSON">Recibiendo e interpretando objetos JSON</h3>

<p>Vamos a imaginar una aplicación de chat, donde el cliente usa JSON para transmitir objetos con información. Hay varios tipos de paquetes que el cliente recibirá:</p>

<ul>
 <li>Inicio de sesión handshake</li>
 <li>Mensajes de texto</li>
 <li>Actualización de Lista de usuarios</li>
</ul>

<p>El código que interpretará los mensajes entrantes será así:</p>

<pre class="brush: js">exampleSocket.onmessage = function(event) {
  var f = document.getElementById("chatbox").contentDocument;
  var text = "";
  var msg = JSON.parse(event.data);
  var time = new Date(msg.date);
  var timeStr = time.toLocaleTimeString();

  switch(msg.type) {
    case "id":
      clientID = msg.id;
      setUsername();
      break;
    case "username":
      text = "&lt;b&gt;User &lt;em&gt;" + msg.name + "&lt;/em&gt; signed in at " + timeStr + "&lt;/b&gt;&lt;br&gt;";
      break;
    case "message":
      text = "(" + timeStr + ") &lt;b&gt;" + msg.name + "&lt;/b&gt;: " + msg.text + "&lt;br&gt;";
      break;
    case "rejectusername":
      text = "&lt;b&gt;Your username has been set to &lt;em&gt;" + msg.name + "&lt;/em&gt; because the name you chose is in use.&lt;/b&gt;&lt;br&gt;"
      break;
    case "userlist":
      var ul = "";
      for (i=0; i &lt; msg.users.length; i++) {
        ul += msg.users[i] + "&lt;br&gt;";
      }
      document.getElementById("userlistbox").innerHTML = ul;
      break;
  }

  if (text.length) {
    f.write(text);
    document.getElementById("chatbox").contentWindow.scrollByPages(1);
  }
};
</pre>

<p>Se usa <code><a href="/en/JavaScript/Reference/Global_Objects/JSON/parse" title="en/JavaScript/Reference/Global Objects/JSON/parse">JSON.parse()</a></code> para convertir el objeto JSON de vuelta al original, luego se examina y se realiza la acción pertinente.</p>

<h3 id="Formato_de_texto_de_los_datos">Formato de texto de los datos</h3>

<p>El texto recibido a través de la conexión WebSocket está en formato UTF-8.</p>

<p>Antes de Gecko 9.0 {{ geckoRelease("9.0") }}, algunos no-caracteres que siguen siendo texto UTF-8 válido podrían causar el cierre de la conexión. Ahora Gecko permite esos valores.</p>

<h2 id="Cerrando_la_conexión">Cerrando la conexión</h2>

<p>Cuando se ha terminado de usar la conexión WebSocket, se llama el método <code><a href="/en/WebSockets/WebSockets_reference/WebSocket#close()" title="en/WebSockets/WebSockets reference/WebSocket#close()">close()</a></code> del objeto <code>WebSocket</code>:</p>

<pre class="brush: js">exampleSocket.close();
</pre>

<p>Puede ser de gran ayuda revisar el atributo <code>bufferedAmount</code> del socket para verificar que toda la información ha sido enviada antes de intentar cerrar el socket.</p>

<h2 id="Consideraciones_de_Seguridad">Consideraciones de Seguridad</h2>

<p>Los WebSockets no deben ser usados en entornos de contenido mixto; eso es, no debes abrir una conexión de WebSocket <em>no segura</em> desde una página cargada usando <em>HTTPS </em>o viceversa. De hecho, muchos navegadores solo admiten conexiones WebSocket seguras, y ya no soportan su uso en contextos no seguros.</p>

<p>{{ languages ( {"zh-tw": "zh_tw/WebSockets/Writing_WebSocket_client_applications"} ) }}</p>
