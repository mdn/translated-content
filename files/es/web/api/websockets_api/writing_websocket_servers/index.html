---
title: Escribir servidores WebSocket
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
translation_of: Web/API/WebSockets_API/Writing_WebSocket_servers
original_slug: Web/API/WebSockets_API/Escribiendo_servidores_con_WebSocket
---
<p>{{gecko_minversion_header("2")}}</p>

<h2 id="Introducción">Introducción</h2>

<p>Un servidor WebSocket es simplemente una aplicación TCP que escucha en cualquier puerto de un servidor que sigue un protocolo específico. La tarea de crear un servidor propio personalizado suele asustar a los desarrolladores, sin embargo puede resultar muy fácil implementar un servidor WebSocket en la plataforma que elijas.</p>

<p>Un servidor WebSocket puede ser escrito en cualquier lenguaje de programación Server-Side que sea soporte <a href="https://en.wikipedia.org/wiki/Berkeley_sockets">Berkeley Sockets</a>, como por ejemplo C++ o Python o inclusive PHP y JavaScript para servidores. Este no va a ser un tutorial para ningún lenguaje espefícamente sino que te ayudará a escribir tu propio servidor.<br>
 <br>
 Necesitarás conocer como trabaja el protocolo HTTP y una experiencia intermedia en programación. Dependiendo de las capacidades de tu lenguaje puede ser necesario tener conocimientos en sockets TCP. Esta guía te dará el conocimiento necesario para escribir un servidor con WebSocket.</p>

<div class="note">
<p>Lea las últimas especificaciones oficiales de WebSocket <a href="http://datatracker.ietf.org/doc/rfc6455/?include_text=1">RFC 6455</a>. Las secciones 1 y 4-7 son especialmente interesantes para personas que deseen implementar servidores. La sección 10 abarca temas de seguridad y definitivamente deberías leerla antes de exponer tu servidor a la red.</p>
</div>

<p>Un servidor WebSocket es explicado a un muy bajo nivel aquí. Los servidores WebSocket usualmente estan separados y especializados (por una cuestión de balance de cargas y otra razones prácticas), por lo tanto deberías usar un <a href="https://en.wikipedia.org/wiki/Reverse_proxy">Reverse Proxy</a> (semejante a un servidor HTTP común) casi siempre para detectar los Handshakes de WebSocket, preprocesarlos, y reenviar los datos de los clientes al servidor WebSocket real.<br>
  </p>

<h2 id="Paso_1_El_Handshake_del_WebSocket"><a name="Handshake">Paso 1: El Handshake del WebSocket </a></h2>

<p>Antes que nada, el servidor debe escuchar las conexiones entrantes usando un socket TCP estandar. Dependiendo de tu plataforma, esto puede ser manejado por tí. Por ejemplo asumamos que tu servidor esta escuchando la dirección example.com en el puerto 8000, y tu socket en el servidor responde a la petición GET con /chat.</p>

<div class="warning">
<p><strong>Advertencia: </strong>El servidor puede escuchar cualquier puerto que elijas, pero si elijes un puerto diferente al 80 o 443 podría haber problemas con los firewalls y proxies. Suele suceder con el puerto 443 tambien pero para eso se necesita un conexión segura (TLS/SSL). También se debe aclarar que la mayoría de los navegadores (como Firefox 8 o superiores) no permiten conexiones a servidores WebSocket sin seguridad que se realicen desde páginas web con seguridad (HTTPS). </p>
</div>

<p>El Handshake es el puente desde HTTP a WS. En el Handshake se negocian los detalles de la conexión y cualquier de las partes pueden abandonar el proceso antes de completar dicha conexión si los términos no son favorables. El servidor debe ser cuidadoso al analizar lo que el cliente pide, de lo contrario podrían introducirse problemas de seguridad.</p>

<h3 id="Petición_de_Handshake_en_el_cliente">Petición de Handshake en el cliente</h3>

<p>A pesar de que estamos creando un servidor, un cliente es quien tiene que comenzar el proceso de Handshake de WebSocket. Entonces tú tienes que saber cómo interpretar la petición del cliente. El cliente enviará una linda petición HTTP estandar que lucirá algo asi (la versión del HTTP debe ser 1.1 o mayor y el método debe ser GET):</p>

<pre>GET /chat HTTP/1.1
Host: example.com:8000
<strong>Upgrade: websocket</strong>
<strong>Connection: Upgrade</strong>
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13

</pre>

<p>El cliente puede solicitar aquí extensiones y/o sub protocolos; vea <a href="#Miscellaneous">Misceláneos</a> para más detalles. También, cabeceras comunes como <code>User-Agent</code>, <code>Referer</code>, <code>Cookie</code>, or cabeceras de autenticación podrían ser incluidos. Haz lo que quieras con ellos; no pertencen a WebSocket. También puedes ignorarlos. En muchas configuraciones comunes, un proxy inverso ya ha tratado con ellos.</p>

<p>Si alguna cabecera no se entiende o posee un valor incorrecto, el servidor debe responder "<a href="https://developer.mozilla.org/es/docs/HTTP/Response_codes#400">400 Bad Request</a>" e inmediatamente cerrar la conexión. Normalmente, también puede dar la razón porque falló el <em>handshake</em> en el cuerpo de la respuesta HTTP, pero el mensaje podría no ser mostrado (el browser no lo muestra). Si el servidor no comprende que la versión del WebSockets, debería enviar una cabecera <code>Sec-WebSocket-Version</code> que contenga la(s) versión(es) no entendidas. (Esta guía explica v13, la más nueva). Ahora, vamos a ver la cabecera más curiosa, <code>Sec-WebSocket-Key</code>.</p>

<div class="note">
<p><strong>Tip:</strong> Todos los <strong>navegadores</strong> deben enviar una <a href="https://developer.mozilla.org/es/docs/HTTP/Access_control_CORS#Origin"><code>cabecera Origin</code></a>. Tu puedes usar esta cabecera por seguridad (revisando por el mismo origen, listas blancas/ listas negras, etc.) y enviar un <a href="https://developer.mozilla.org/es/docs/HTTP/Response_codes#403">403 Forbidden</a> si no te gusta lo que ves. Sin embargo, se advierte que los agentes no navegadores pueden enviar un falso <code>Origin</code>.  La mayoría de las aplicaciones rechazaran las solicitudes sin esta cabecera.</p>
</div>

<div class="note">
<p><strong>Tip:</strong> The request-uri (<code>/chat</code> here) has no defined meaning in the spec. So many people cleverly use it to let one server handle multiple WebSocket applications. For example, <code>example.com/chat</code> could invoke a multiuser chat app, while <code>/game</code> on the same server might invoke a multiplayer game.</p>
</div>

<div class="note">
<p><strong>Note:</strong> <a href="https://developer.mozilla.org/en-US/docs/HTTP/Response_codes">Regular HTTP status codes</a> can only be used before the handshake. After the handshake succeeds, you have to use a different set of codes (defined in section 7.4 of the spec).</p>
</div>

<h3 id="Respuesta_de_Handshake_del_servidor">Respuesta de Handshake del servidor</h3>

<p>Después de la petición, el servidor debería enviar una linda respuesta (aunque todavía en formato HTTP) que se verá asi (hay que recordar que la cabecera termina con \r \n y agrega un \r \n extra después del último):</p>

<pre><strong>HTTP/1.1 101 Switching Protocols</strong>
Upgrade: websocket
Connection: Upgrade
<strong>Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=

</strong></pre>

<p>Adicionalmente, el servidor puede decidir respecto de las solicitudes "extension/subprotocol" en este punto (ver <a href="#Miscellaneous">Miscelláneos</a> para más detalles). La cabecera <code>Sec-WebSocket-Accept</code> es interesante. El servidor debe derivarla a partir de la cabecera <code>Sec-WebSocket-Key</code> enviada anteriormente por el cliente. Para lograr esto se deben concatenar la cabecera del cliente<span style="line-height: 1.5em;"> </span><code style="font-size: 14px;">Sec-WebSocket-Key</code><span style="line-height: 1.5em;"> y el string "</span><code style="font-size: 14px;">258EAFA5-E914-47DA-95CA-C5AB0DC85B11</code><span style="line-height: 1.5em;">" (es un "</span><a href="https://en.wikipedia.org/wiki/Magic_string" style="line-height: 1.5em;">magic string</a><span style="line-height: 1.5em;">"), calcular el </span><a href="https://en.wikipedia.org/wiki/SHA-1" style="line-height: 1.5em;">hash SHA-1</a><span style="line-height: 1.5em;"> del resultado y devolver el string codificado en</span><span style="line-height: 1.5em;"> </span><a href="https://en.wikipedia.org/wiki/Base64" style="line-height: 1.5em;">base64</a><span style="line-height: 1.5em;"> de este hash.</span></p>

<div class="note">
<p><strong>FYI:</strong> Este aparentemente complicado e innecesario proceso se realiza de manera que sea obvio para el cliente si el servidor soporta o noWebSockets. Esto es importante de realizar, ya que podrían crearse problemas de seguridad si el servidor acepta conexiones WebSockets pero interpreta los datos como solicitudes HTTP.</p>
</div>

<p>Así, si la cabecera <code>Sec-WebSocket-Key</code> era "<code>dGhlIHNhbXBsZSBub25jZQ==</code>", la correspondiente respuesta <code>Sec-WebSocket-Accept</code> será "<code>s3pPLMBiTxaQ9kYGzzhZRbK+xOo=</code>". Una vez que el servidor envía estas cabeceras, el "handshake" se considera completo y puedes comenzar a intercambiar datos.</p>

<div class="note">
<p>El servidor puede enviar otras cabeceras como Set-Cookie, o solicitar autenticación o redirigir mediante otros status codes antes de responder al handshake.</p>
</div>

<h3 id="Llevando_registro_de_los_clientes">Llevando registro de los clientes</h3>

<p>Esto no está directamente relacionado con el protocolo WebSocket, pero no está de más mencionarlo: tu servidor debe llevar el registro de los sockets de los clientes, de manera de no realizar handshakes constantemente con los clientes que ya han completado este proceso. La misma dirección IP cliente puede intentar conectarse múltiples veces (pero el servidor puede denegar la conexión si se intentan demasiadas conexiones con el objetivo de evitar ataques <a href="https://en.wikipedia.org/wiki/Denial_of_service">ataques DoS</a>).</p>

<h2 id="Paso_2_Intercambiando_Data_Frames">Paso 2: Intercambiando Data Frames</h2>

<p>Tanto el cliente como el servidor puede decidir enviar un mensaje en cualquier momento — ese es el encanto de los WebSockets. Sin embargo, extraer información de esos denominados "frames" o tramas de datos no es una experiencia muy mágica. Aunque todos los frames siguen el mismo formato específico, los datos que van del cliente al servidor se enmascaran utilizando el <a href="https://en.wikipedia.org/wiki/XOR_cipher">cifrado XOR</a> (con una clave de 32 bits). La sección 5 de la especificación describe esto en detalle.</p>

<h3 id="Formato">Formato</h3>

<p>Cada trama de datos (desde el cliente al servidor o viceversa) sigue este mismo formato:</p>

<pre style="float: left; margin-right: 20px;"> 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |    Extended payload length    |
|I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
|N|V|V|V|       |S|             |   (if payload len==126/127)   |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
|     Extended payload length continued, if payload len == 127  |
+ - - - - - - - - - - - - - - - +-------------------------------+
|                               |Masking-key, if MASK set to 1  |
+-------------------------------+-------------------------------+
| Masking-key (continued)       |          Payload Data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                     Payload Data continued ...                :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     Payload Data continued ...                |
+---------------------------------------------------------------+</pre>

<p>Los RSV1-3 se pueden ignorar, son para las extensiones.</p>

<p>El bit MASK simplemente indica si el mensaje está codificado. Los mensajes del cliente deben estar enmascarados, por lo que tu servidor debe esperar que valga 1. (De hecho, la <a href="http://tools.ietf.org/html/rfc6455#section-5.1">sección 5.1 de las espeficicaciones</a>  dice que tu servidor debe desconectarse de un cliente si ese cliente envía un mensaje sin enmascarar). Cuando se envía una trama al cliente, no lo ocultes y no pongas el bit de la máscara. Te explicaremos el enmascaramiento más tarde. <em>Nota: Tienes que enmascarar los mensajes incluso cuando uses un socket seguro.</em></p>

<p>El campo opcode define cómo interpretar los datos de la carga útil:<code style="font-style: normal; line-height: 1.5;">0x0</code><span style="line-height: 1.5;"> </span><span style="line-height: 1.5;">para continuar,</span><span style="font-family: courier new,andale mono,monospace; line-height: 1.5;"> </span><code style="font-style: normal; line-height: 1.5;">0x1</code><span style="line-height: 1.5;"> para texto (que siempre se codifica con UTF-8), </span><code style="font-style: normal; line-height: 1.5;">0x2</code><span style="line-height: 1.5;"> para datos binarios, otros llamados "códigos de control" se explican más tarde. En esta versión de WebSockets, de <code>0x3</code> a <code>0x7</code> y de <code>0xB</code> a <code>0xF</code> no tienen significado.</span></p>

<p>El bit FIN indica si este es el último mensaje de una serie. Si es 0, el servidor seguirá escuchando más partes del mensaje; de lo contrario, el servidor debería considerar el mensaje entregado. Más sobre esto después.</p>

<h3 id="Decoding_Payload_Length">Decoding Payload Length</h3>

<p>To read the payload data, you must know when to stop reading. That's why the payload length is important to know. Unfortunately, this is somewhat complicated. To read it, follow these steps:</p>

<ol>
 <li>Read bits 9-15 (inclusive) and interpret that as an unsigned integer. If it's 125 or less, then that's the length; you're <strong>done</strong>. If it's 126, go to step 2. If it's 127, go to step 3.</li>
 <li>Read the next 16 bits and interpret those as an unsigned integer. You're <strong>done</strong>.</li>
 <li>Read the next 64 bits and interpret those as an unsigned integer. You're <strong>done</strong>.</li>
</ol>

<h3 id="Reading_and_Unmasking_the_Data">Reading and Unmasking the Data</h3>

<p>If the MASK bit was set (and it should be, for client-to-server messages), read the next 4 octets (32 bits); this is the masking key. <span style="line-height: 1.5;">Once the payload length and masking key is decoded, you can go ahead and read that number of bytes from the socket. Let's call the data <strong>ENCODED</strong>, and the key <strong>MASK</strong>. To get <strong>DECODED</strong>, loop through the octets (bytes a.k.a. characters for text data) of <strong>ENCODED</strong> and XOR the octet with the (i modulo 4)th octet of MASK. In pseudo-code (that happens to be valid JavaScript):</span></p>

<pre>var DECODED = "";
for (var i = 0; i &lt; ENCODED.length; i++) {
    DECODED[i] = ENCODED[i] ^ MASK[i % 4];
<span style="line-height: 1.5;">}</span></pre>

<p><span style="line-height: 1.5;">Now you can figure out what <strong>DECODED</strong> means depending on your application.</span></p>

<h3 id="Message_Fragmentation">Message Fragmentation</h3>

<p>The FIN and opcode fields work together to send a message split up into separate frames.  This is called message fragmentation. Fragmentation is only available on opcodes <code>0x0</code> to <code>0x2</code>.</p>

<p><span style="line-height: 1.5;">Recall that the opcode tells what a frame is meant to do. If it's <code>0x1</code>, the payload is text. If it's <code>0x2</code>, the payload is binary data.</span><span style="line-height: 1.5;"> However, if it's </span><code style="font-style: normal; line-height: 1.5;">0x0,</code><span style="line-height: 1.5;"> the frame is a continuation frame. This means the server should concatenate the frame's payload to the last frame it received from that client.</span><span style="line-height: 1.5;"> Here is a rough sketch, in which a server reacts to a client sending text messages. The first message is sent in a single frame, while the second message is sent across three frames. FIN and opcode details are shown only for the client:</span></p>

<pre style="font-size: 14px;"><strong>Client:</strong> FIN=1, opcode=0x1, msg="hello"
<strong>Server:</strong> <em>(process complete message immediately) </em>Hi.
<strong>Client:</strong> FIN=0, opcode=0x1, msg="and a"
<strong>Server:</strong> <em>(listening, new message containing text started)</em>
<strong>Client:</strong> FIN=0, opcode=0x0, msg="happy new"
<strong>Server:</strong> <em>(listening, payload concatenated to previous message)</em>
<strong>Client:</strong> FIN=1, opcode=0x0, msg="year!"
<strong>Server:</strong> <em>(process complete message) </em>Happy new year to you too!</pre>

<p>Notice the first frame contains an entire message (has <code>FIN=1</code> and <code>opcode!=0x0</code>), so the server can process or respond as it sees fit. The second frame sent by the client has a text payload (<code>opcode=0x1</code>), but the entire message has not arrived yet (<code>FIN=0</code>). All remaining parts of that message are sent with continuation frames (<code>opcode=0x0</code>), and the final frame of the message is marked by <code>FIN=1</code>. <a href="http://tools.ietf.org/html/rfc6455#section-5.4">Section 5.4 of the spec</a> describes message fragmentation.</p>

<h2 id="Pings_and_Pongs_The_Heartbeat_of_WebSockets">Pings and Pongs: The Heartbeat of WebSockets</h2>

<p>At any point after the handshake, either the client or the server can choose to send a ping to the other party. When the ping is received, the recipient must send back a pong as soon as possible. You can use this to make sure that the client is still connected, for example.</p>

<p>A ping or pong is just a regular frame, but it's a <strong>control frame</strong>. Pings have an opcode of <code>0x9</code>, and pongs have an opcode of <code>0xA</code>. When you get a ping, send back a pong with the exact same Payload Data as the ping (for pings and pongs, the max payload length is 125). You might also get a pong without ever sending a ping; ignore this if it happens.</p>

<div class="note">
<p>If you have gotten more than one ping before you get the chance to send a pong, you only send one pong.</p>
</div>

<h2 id="Step_4_Closing_the_connection">Step 4: Closing the connection</h2>

<p>To close a connection either the client or server can send a control frame with data containing a specified control sequence to begin the closing handshake (detailed in <a href="http://tools.ietf.org/html/rfc6455#section-5.5.1">Section 5.5.1</a>). Upon receiving such a frame, the other peer sends a Close frame in response. The first peer then closes the connection. Any further data received after closing of connection is then discarded. </p>

<h2 id="Miscellaneous_2"><a name="Miscellaneous">Miscellaneous</a></h2>

<div class="note">
<p>WebSocket codes, extensions, subprotocols, etc. are registered at the <a href="http://www.iana.org/assignments/websocket/websocket.xml">IANA WebSocket Protocol Registry</a>.</p>
</div>

<p>WebSocket extensions and subprotocols are negotiated via headers during <a href="#Handshake">the handshake</a>. Sometimes extensions and subprotocols seem too similar to be different things, but there is a clear distinction. Extensions control the WebSocket <strong>frame</strong> and <strong>modify</strong> the payload, while subprotocols structure the WebSocket <strong>payload</strong> and <strong>never modify</strong> anything. Extensions are optional and generalized (like compression); subprotocols are mandatory and localized (like ones for chat and for MMORPG games).</p>

<h3 id="Extensions">Extensions</h3>

<div class="note">
<p><strong>This section needs expansion. Please edit if you are equipped to do so.</strong></p>
</div>

<p>Think of an extension as compressing a file before e-mailing it to someone. Whatever you do, you're sending the <em>same</em> data in different forms. The recipient will eventually be able to get the same data as your local copy, but it is sent differently. That's what an extension does. WebSockets defines a protocol and a simple way to send data, but an extension such as compression could allow sending the same data but in a shorter format.</p>

<div class="note">
<p>Extensions are explained in sections 5.8, 9, 11.3.2, and 11.4 of the spec.</p>
</div>

<p><em>TODO</em></p>

<h3 id="Subprotocols">Subprotocols</h3>

<p>Think of a subprotocol as a custom <a href="https://en.wikipedia.org/wiki/XML_schema">XML schema</a> or <a href="https://en.wikipedia.org/wiki/Document_Type_Definition">doctype declaration</a>. You're still using XML and its syntax, but you're additionally restricted by a structure you agreed on. WebSocket subprotocols are just like that. They do not introduce anything fancy, they just establish structure. Like a doctype or schema, both parties must agree on the subprotocol; unlike a doctype or schema, the subprotocol is implemented on the server and cannot be externally refered to by the client.</p>

<div class="note">
<p>Subprotocols are explained in sections 1.9, 4.2, 11.3.4, and 11.5 of the spec.</p>
</div>

<p>A client has to ask for a specific subprotocol. To do so, it will send something like this <strong>as part of the original handshake</strong>:</p>

<pre>GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp

</pre>

<p>or, equivalently:</p>

<pre>...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp

</pre>

<p>Now the server must pick one of the protocols that the client suggested and it supports. If there are more than one, send the first one the client sent. Imagine our server can use both <code>soap</code> and <code>wamp</code>. Then, in the response handshake, it'll send:</p>

<pre>Sec-WebSocket-Protocol: soap

</pre>

<div class="warning">
<p>The server can't send more than one <code>Sec-Websocket-Protocol</code> header.<br>
 <span style="line-height: 1.5;">If the server doesn't want to use a</span><span style="line-height: 1.5;">ny subprotocol, </span><strong style="line-height: 1.5;">it shouldn't send any <code>Sec-WebSocket-Protocol</code> header</strong><span style="line-height: 1.5;">. Sending a blank header is incorrect.<br>
 The client may close the connection if it doesn't get the subprotocol it wants.</span></p>
</div>

<p>If you want your server to obey certain subprotocols, then naturally you'll need extra code on the server. Let's imagine we're using a subprotocol <code>json</code>. In this subprotocol, all data is passed as <a href="https://en.wikipedia.org/wiki/JSON">JSON</a>. If the client solicits this protocol and the server wants to use it, the server will need to have a JSON parser. Practically speaking, this will be part of a library, but the server will need to pass the data around.</p>

<div class="note">
<p><strong>Tip:</strong> To avoid name conflict, it's recommended to make your subprotocol name part of a domain string. If you are building a custom chat app that uses a proprietary format exclusive to Example Inc., then you might use this: <code>Sec-WebSocket-Protocol: chat.example.com</code>. For different versions, a widely-used method is to add a <code>/</code> followed by the version number, like <code>chat.example.com/2.0</code>. Note that this isn't required, it's just an optional convention, and you can use any string you wish.</p>
</div>

<h2 id="Related">Related</h2>

<ul>
 <li><a href="/en-US/docs/WebSockets/Writing_WebSocket_server" title="/en-US/docs/WebSockets/Writing_WebSocket_server">Tutorial: Websocket server in C#</a></li>
 <li><a href="/en-US/docs/WebSockets/Writing_WebSocket_client_applications">Writing WebSocket client applications</a></li>
 <li><a href="/en-US/docs/WebSockets/WebSocket_Server_Vb.NET">Tutorial: Websocket server in VB.NET</a></li>
</ul>
