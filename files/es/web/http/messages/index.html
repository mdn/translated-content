---
title: Mensajes HTTP
slug: Web/HTTP/Messages
translation_of: Web/HTTP/Messages
---
<div>{{HTTPSidebar}}</div>

<p class="summary">Los mensajes HTTP, son los medios por los cuales se intercambian datos entre servidores y clientes. Hay dos tipos de mensajes: <em>peticiones</em>, enviadas por el cliente al servidor, para pedir el inicio de una acción; y <em>respuestas</em>, que son la respuesta del servidor. </p>

<p>Los mensajes HTTP están compuestos de texto, codificado en ASCII, y pueden comprender múltiples líneas. En HTTP/1.1, y versiones previas del protocolo, estos mensajes eran enviados de forma abierta a través de la conexión. En HTTP/2.0 los mensajes, que anteriormente eran legibles directamente, se conforman mediante tramas binarias codificadas para aumentar la optimización y rendimiento de la transmisión.</p>

<p>Los desarrolladores de páginas Web, o administradores de sitios Web, desarrolladores... raramente codifican directamente estos mensajes HTTP. Normalmente especifican estos mensajes HTTP, mediante archivos de configuración (para proxies, y servidores), APIs (para navegadores) y otros medios.</p>

<p><img alt="From a user-, script-, or server- generated event, an HTTP/1.x msg is generated, and if HTTP/2 is in use, it is binary framed into an HTTP/2 stream, then sent." src="https://mdn.mozillademos.org/files/13825/HTTPMsg2.png" style="height: 538px; width: 1174px;"></p>

<p>El mecanismo de tramas binarias de HTTP/2 ha sido diseñado para que no necesite ninguna modificación de las APIs o archivos de configuración utilizados: es totalmente transparente para el usuario.</p>

<p>Las peticiones y respuestas HTTP, comparten una estructura similar, compuesta de:</p>

<ol>
 <li>Una<em> línea de inicio</em> ('<em>start-line</em>' en inglés) describiendo la petición a ser implementada, o su estado, sea de éxito o fracaso. Esta línea de comienzo, es siempre una única línea. </li>
 <li>Un grupo opcional de <em>cabeceras HTTP</em>, indicando la petición o describiendo el cuerpo ('<em>body</em>' en inglés) que se incluye en el mensaje. </li>
 <li>Una línea vacía ('<em>empty-line</em>' en inglés) indicando toda la meta-información ha sido enviada.</li>
 <li>Un campo de cuerpo de mensaje opcional ('<em>body</em>' en inglés) que lleva los datos asociados con la petición (como contenido de un formulario HTML), o los archivos o documentos asociados a una respuesta (como una página HTML, o un archivo de audio, vídeo ... ) . La presencia del cuerpo y su tamaño es indicada en la línea de inicio y las cabeceras HTTP.</li>
</ol>

<p>La línea de inicio y las cabeceras HTTP, del mensaje, son conocidas como la <em>cabeza</em> de la peticiones, mientras que su contenido en datos se conoce como el <em>cuerpo</em> del mensaje.</p>

<p><img alt="Requests and responses share a common structure in HTTP" src="https://mdn.mozillademos.org/files/13827/HTTPMsgStructure2.png" style="height: 368px; width: 1239px;"></p>

<h2 id="Peticiones_HTTP">Peticiones HTTP</h2>

<h3 id="Línea_de_inicio">Línea de inicio</h3>

<p>Las peticiones HTTP son mensajes enviados por un cliente, para iniciar una acción en el servidor. Su línea de inicio está formada por tres elementos: </p>

<ol>
 <li>Un <em><a href="/en-US/docs/Web/HTTP/Methods">método HTTP</a></em>, un verbo como: {{HTTPMethod("GET")}}, {{HTTPMethod("PUT")}} o {{HTTPMethod("POST")}}) o un nombre como: {{HTTPMethod("HEAD")}} o  {{HTTPMethod("OPTIONS")}}), que describan la acción que se pide sea realizada. Por ejemplo, <code>GET</code> indica que un archivo ha de ser enviado hacia el cliente, o <code>POST</code> indica que hay datos que van a ser enviados hacia el servidor (creando o modificando un recurso, o generando un documento temporal para ser enviado).</li>
 <li>El objetivo de una petición, normalmente es una {{glossary("URL")}}, o la dirección completa del protocolo, puerto y dominio también suelen ser especificados por el contexto de la petición. El formato del objetivo de la petición varia según los distintos métodos HTTP. Puede ser:
  <ul>
   <li>Una dirección absoluta, seguida de un signo de cierre de interrogación  <code>'?'</code> y un texto de consulta. Este es el formato más comun, conocido como el formato original ('<em>origin form</em>' en inglés), se usa en los métodos <code>GET</code>, <code>POST</code>, <code>HEAD</code>, y <code>OPTIONS</code> . <br>
    <code>POST / HTTP 1.1<br>
    GET /background.png HTTP/1.0<br>
    HEAD /test.html?query=alibaba HTTP/1.1<br>
    OPTIONS /anypage.html HTTP/1.0</code></li>
   <li>Una URL completa; conocido como el formato absoluto, usado mayormente con <code>GET</code> cuando se conecta a un proxy.<br>
    <code>GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1</code></li>
   <li>El componente de autoriade de una URL, formado por el nombre del domínio y opcionalmente el puerto (el puerto precedido por el simbolo <code>':'</code> ), se denomina a este formato como el formato de autoridad. Unicamente se usa con  <code>CONNECT</code> cuando se establece un tunel HTTP.<br>
    <code>CONNECT developer.mozilla.org:80 HTTP/1.1</code></li>
   <li>El formato de asterisco, se utliza un asterisco (<code>'*'</code>)  junto con las opciones: <code>OPTIONS</code> , representando al servidor entero en conjunto. <br>
    <code>OPTIONS * HTTP/1.1</code></li>
  </ul>
 </li>
 <li>la versión de HTTP, la cual define la estructura de los mensajes, actuando como indicador, de la versión que espera que se use para la respuesta.</li>
</ol>

<h3 id="Cabeceras">Cabeceras</h3>

<p>Las <a href="/en-US/docs/Web/HTTP/Headers">cabeceras HTTP</a>  de una petición siguen la misma estructura que la de una cabecera HTTP. Una cadena de caracteres, que no diferencia mayusculas ni minusculas, seguida por dos puntos  (<code>':'</code>)  y un valor cuya estructura depende de la cabecera. La cabecera completa, incluido el valor, ha de ser formada en una única línea, y pude ser bastante larga. </p>

<p>Hay bastantes cabeceras posibles. Estas se pueden clasificar en varios grupos: </p>

<ul>
 <li><em>Cabeceras generales,</em> ('<em>General headers</em>' en inglés), como {{HTTPHeader("Via")}},  afectan al mensaje como una unidad completa.</li>
 <li>Cabeceras de petición, ('<em>Request headers</em>' en inglés), como {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Accept-Type")}}, modifican la petición especificándola en mayor detalle ( como: {{HTTPHeader("Accept-Language")}}, o dándole un contexto, como:  {{HTTPHeader("Referer")}}, o restringiéndola condicionalmente, como: {{HTTPHeader("If-None")}}.</li>
 <li><em>Cabeceras de entidad, ('Entity headers' </em>en ingles), como {{HTTPHeader("Content-Length")}} las cuales se aplican al cuerpo de la petición. Por supuesto, esta cabecera no necesita ser transmitida si el mensaje no tiene cuerpo ('<em>body</em>' en inglés). </li>
</ul>

<p><img alt="Example of headers in an HTTP request" src="https://mdn.mozillademos.org/files/13821/HTTP_Request_Headers2.png" style="height: 280px; width: 872px;"></p>

<h3 id="Cuerpo">Cuerpo</h3>

<p>La parte final de la petición el el cuerpo. No todas las peticiones llevan uno: las peticiones que reclaman datos, como <code>GET</code>, <code>HEAD</code>, <code>DELETE</code>, o <code>OPTIONS</code>, normalmente, no necesitan ningún cuerpo. Algunas peticiones pueden mandar peticiones al servidor con el fin de actualizarlo: como es el caso con la petición <code>POST</code>  (que contiene datos de un formulario HTML). </p>

<p>Los cuerpos pueden ser dividos en dos categorias:</p>

<ul>
 <li>Cuerpos con un único dato, que consisten en un único archivo defindo por las dos cabeceras: {{HTTPHeader("Content-Type")}} y {{HTTPHeader("Content-Length")}}.   </li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data">Cuerpos con múltiples datos</a>, que están formados por distintos contenidos, normalmente estan asociados con los <a href="/en-US/docs/Web/Guide/HTML/Forms">formularios HTML</a>. </li>
</ul>

<h2 id="Respuestas_HTTP">Respuestas HTTP</h2>

<h3 id="Línea_de_estado">Línea de estado</h3>

<p>La línea de inicio de una respuesta HTTP, se llama la<em> línea de estado</em>, y contienen la siguiente información: </p>

<ol>
 <li>La <em>versión del protocolo</em>, normalmente <code>HTTP/1.1</code>.</li>
 <li>Un <em>código de estado</em>, indicando el éxito o fracaso de la petición. Códigos de estado muy comunes son:  {{HTTPStatus("200")}}, {{HTTPStatus("404")}}, o {{HTTPStatus("302")}}</li>
 <li>Un <em>texto de estado</em>, que es una breve descripción, en texto, a modo informativo, de lo que significa el código de estado, con el fin de que una persona pueda interpretar el mensaje HTTP.</li>
</ol>

<p>Una línea de estado típica es por ejemplo:  <code>HTTP/1.1 404 Not Found.</code></p>

<h3 id="Cabeceras_2">Cabeceras</h3>

<p>Las <a href="/en-US/docs/Web/HTTP/Headers">cabeceras HTTP</a> para respuestas siguen también la misma estructura como cualquier otra cabecera: una cadena de texto, que no diferencia entre mayusculas y minúsculas, seguida por dos puntos (<code>':'</code>) y un valor cuya estructura depende del tipo de cabecera. Toda la cabecera incluido su valor, se ha de expresar en una única línea. </p>

<p>Existen varias cabeceras posibles. Estas se puede dividir en distintos grupos:</p>

<ul>
 <li><em>Cabeceras generales,</em> ('<em>General headers</em>' en inglés), como {{HTTPHeader("Via")}},  afectan al mensaje completo.</li>
 <li>Cabeceras de petición, ('<em>Request headers</em>' en inglés), como {{HTTPHeader("Vary")}} , {{HTTPHeader("Accept-Ranges")}}, dan información adicional sobre el servidor, que no tiene espacio en la línea de estado.</li>
 <li><em>Cabeceras de entidad, ('Entity headers' </em>en ingles), como {{HTTPHeader("Content-Length")}} las cuales se aplican al cuerpo de la petición. Por supuesto, esta cabecera no necesita ser transmitida si el mensaje no tiene cuerpo ('<em>body</em>' en inglés). </li>
</ul>

<p>*<img alt="Example of headers in an HTTP response" src="https://mdn.mozillademos.org/files/13823/HTTP_Response_Headers2.png" style="height: 344px; width: 805px;"></p>

<h3 id="Cuerpo_2">Cuerpo</h3>

<p>La última parte del mensaje de respuesta el es 'cuerpo'. No todas las respuestas tienen uno, respuestas con un código de estado como {{HTTPStatus("201")}} o {{HTTPStatus("204")}} normalmente prescinden de él.</p>

<p>De forma general, los cuerpos se pueden diferenciar en tres categorias: </p>

<ul>
 <li>Cuerpos con un único dato, consisten en un simple archivo, de longitud conocida y definido en las cabeceras: {{HTTPHeader("Content-Type")}} y {{HTTPHeader("Content-Length")}}.</li>
 <li>Cuerpos con un único dato, consisten en un simple archivo, de longitud desconocida, y codificado en partes, indicadas con {{HTTPHeader("Transfer-Encoding")}} valor <code>chunked</code> (que significa: 'partido' en inglés).</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data">Cuerpos con múltiples datos</a>, consisten de varios datos, cada uno con una sección distinta de información. Este caso es relativamente raro y poco común.</li>
</ul>

<h2 id="Tramas_HTTP2">Tramas HTTP/2</h2>

<p>Los mensajes HTTP/1.x tienen algunas desventajas por su no muy alta eficiencia en la transmisión.</p>

<ul>
 <li>Las cabeceras, al contrario de los cuerpos, no se comprimen.</li>
 <li>Las cabeceras, habitualmente se repiten de un mensaje al siguiente, aún así, la cabecera se repite en todos los mensajes.</li>
 <li>No se puede multiplexar. Se han de abrir varias conexiones para el mismo servidor, las conexiones TCP 'en caliente' ('<em>warm TCP connections</em>' en inglés) son más eficientes que las conexiones 'en frio'.</li>
</ul>

<p>HTTP/2 introduce un paso extra: divide los mensajes HTTP/1.x en tramas que integra en un flujo de datos. Los datos y las tramas de las cabeceras, se separan, esto permite  la compresión de las cabeceras. Varios flujos de datos pueden combinarse juntos, y entonces se puede usar un procedimiento de multiplexación, permitiendo un uso más eficiente, de las conexiónes TCP.</p>

<p><img alt="HTTP/2 modify the HTTP message to divide them in frames (part of a single stream), allowing for more optimization." src="https://mdn.mozillademos.org/files/13819/Binary_framing2.png" style="height: 735px; width: 810px;"></p>

<p>Las tramas HTTP son trasnparentes para los desarrolladores Web. Este paso adicional en HTTP/2, de los mensajes HTTP/1.0 y el protocolo por debajo. No son necesarios cambios en las APIs usadas por los desarrolladores Web para utilizar estas tramas HTTP, cuando las usan ambos: servidor y navegador. </p>

<h2 id="Conclusión">Conclusión</h2>

<p>Los mensajes HTTP son la clave para usar HTTP; su estructura es sencilla y son fácilmente ampliables. El protocolo HTTP/2 añade un mecanismo de tramas y una capa intermedia entre la sintaxis de HTTP/1.x y su protocolo inferior, sin modificarlo radicalmente: se construye sobre mecanismos de transmisión probados.</p>
