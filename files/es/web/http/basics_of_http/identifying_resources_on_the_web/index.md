---
title: Identificación de recursos web
slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
translation_of: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
original_slug: Web/HTTP/Basics_of_HTTP/Identificación_recursos_en_la_Web
---
<div>{{HTTPSidebar}}</div>

<p class="summary">El objetivo de una solicitud HTTP se denomina "recurso", (es decir: datos), y dicho recurso, no posee un tipo definido por defecto; puede ser un documento, o una foto, o cualquier otra posibilidad. Cada recurso es identificado por un Identificador Uniforme de Recursos ({{Glossary("URI")}})  y es utilizado a través de HTTP, para la identificación del tipo de recurso.</p>

<p>La identidad y la localización del recursos en la Web son en su mayoria proporcionados por una sola dirección URL (Localicador de Recursos Uniforme; un tipo de URI). A veces, el mismo URI no proporciona la identidad ni la ubicación: HTTP usa un encabezado HTTP especifico, {{HTTPHeader("Alt-Svc")}} cuando el recurso solicitado por el cliente quiere acceder a él en otra ubicación.</p>

<h2 id="URLs_and_URNs">URLs and URNs</h2>

<h3 id="URLs">URLs</h3>

<p>La forma más común de URI es la ({{Glossary("URL")}}) (de las siglas en ingles: "<em>Uniform Resource Locator</em>", que podría traducirse como: Localizador Uniforme de Recursos), <em>que se conoce como la dirección web.</em></p>

<pre>https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL</pre>

<p>Cualquiera de estas URLs se pueden escribir en la barra de direcciones de su navegador para decirle que cargue la pagina asociada (recurso).</p>

<p>Una URL esta compuesta de diferentes partes, algunas obligatorias y otras son opcionales. Un ejemplo más complejo podría tener este aspecto:</p>

<pre>http://www.example.com:80/path/to/myfile.html?key1=value1&amp;key2=value2#SomewhereInTheDocument</pre>

<h3 id="URNs">URNs</h3>

<p><span id="result_box" lang="es"><span>Un</span> <span>URN</span> <span>es</span> <span>una URI que</span> <span>identifica un recurso</span> <span>por su nombre en</span> <span>un espacio de nombres</span> <span>particular.</span></span></p>

<pre>urn:isbn:9780141036144
urn:ietf:rfc:7230
</pre>

<p>Las dos URNs corresponden a</p>

<ul>
 <li>El libro "1984" por George Orwell,</li>
 <li>La especificación IETF 7230, Hypertext Transfer Protocol (HTTP/1.1): Sintaxis de Mensajes y Enrutamiento.</li>
</ul>

<h2 id="Sintaxis_de_Identificador_Uniforme_de_Recursos_(URIs)">Sintaxis de Identificador Uniforme de Recursos (URIs)</h2>

<h3 id="sect1"> </h3>

<h3 id="Esquema_o_protocolo">Esquema o protocolo</h3>

<dl>
 <dt><img alt="Protocol" src="https://mdn.mozillademos.org/files/8013/mdn-url-protocol@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>http://</code> es el protocolo. Indica que el protocolo debe utilizar el navegador. Por lo general, es el protocolo HTTP o su versión segura, HTTPS. La Web requiere de uno de estos dos, pero los navegadores también saben como manejar otros protocolos como  <code>mailto:</code> (para abrir un cliente de correo) o <code>ftp:</code> para manejar la transferencia de archivos, por lo que no se sorprenda si usted ve este tipo de protocolos. Los esquemas comunes son:</dd>
</dl>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Esquema</th>
   <th scope="col">Descripción</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>data</td>
   <td><a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs">Datos URIs</a></td>
  </tr>
  <tr>
   <td>file</td>
   <td>Host-nombre de archivo específicos</td>
  </tr>
  <tr>
   <td>ftp</td>
   <td><a href="/en-US/docs/Glossary/FTP">Protocolo de Transferencia de  Archivos</a></td>
  </tr>
  <tr>
   <td>http/https</td>
   <td><a href="/en-US/docs/Glossary/HTTP">Protocolo de transferencia de Hipertexto (Seguro)</a></td>
  </tr>
  <tr>
   <td>mailto</td>
   <td>Dirección de correo electrónico</td>
  </tr>
  <tr>
   <td>ssh</td>
   <td>shell seguro</td>
  </tr>
  <tr>
   <td>tel</td>
   <td>teléfono</td>
  </tr>
  <tr>
   <td>urn</td>
   <td>Nombres Uniformes de Recursos</td>
  </tr>
  <tr>
   <td>view-source</td>
   <td>Código fuente del recurso</td>
  </tr>
  <tr>
   <td>ws/wss</td>
   <td>(Encriptado) conexiones <a href="/en-US/docs/Web/API/WebSockets_API">WebSocket</a></td>
  </tr>
 </tbody>
</table>

<h3 id="Autoridad">Autoridad</h3>

<dl>
 <dt><img alt="Domaine Name" src="https://mdn.mozillademos.org/files/8015/mdn-url-domain@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>www.example.com</code> es el nombre de dominio o autoridad que gobierna el espacio de nombres. Indica cuando es solicitado el servidor Web . Alternativamente, Es posile usar directamente una {{Glossary("IP address")}}, pero debido a que es menos conveniente, no se usa muy amenudo en la Web.</dd>
</dl>

<h3 id="Puerto">Puerto</h3>

<dl>
 <dt><img alt="Port" src="https://mdn.mozillademos.org/files/8017/mdn-url-port@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>:80</code> es el puerto en este caso. Indica la técnica "puerta" usada para acceder a los recursos en el servidor web. Usualmente es omitido si el servidor web usa los puertos estándares del protocolo HTTP (80 para HTTP y 443 para HTTPS) para permitir el acceso a sus recursos. De lo contrario, es obligatorio.</dd>
</dl>

<h3 id="Ruta_de_Acceso">Ruta de Acceso</h3>

<dl>
 <dt><img alt="Path to the file" src="https://mdn.mozillademos.org/files/8019/mdn-url-path@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>/path/to/myfile.html</code> es la ruta de acceso al recurso en el servidor Web. En los primeros dias de la Web, una ruta como esta presentaba la ubicación fisica del archivo en el servidor Web. Hoy en día, es sobre todo una abstracción manejada por los servidores Web sin ningún tipo de realidad fisica.</dd>
</dl>

<h3 id="Consulta">Consulta</h3>

<dl>
 <dt><img alt="Parameters" src="https://mdn.mozillademos.org/files/8021/mdn-url-parameters@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>?key1=value1&amp;key2=value2</code> son unos parametros adicionales proporcionados al servidor Web. Esos parámetros son una lista de pares llave/valores separados por el simbolo &amp;. El servidor Web puede utilizar estos parámetros para hacer cosas adicionales antes de retornar el recurso al usuario. Cada servidor Web tiene sus propias reglas con respecto a los parametros, y la única manera confiable de saber cómo un servidor web especifico está manejando parametros es preguntando al usuario del servidor web.</dd>
</dl>

<h3 id="Fragmento">Fragmento</h3>

<dl>
 <dt><img alt="Anchor" src="https://mdn.mozillademos.org/files/8023/mdn-url-anchor@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>#SomewhereInTheDocument</code> es una referencia a otra parte del propio recurso. Esto representa una especie de "marcador" dentro del recurso, otorgandole al navegador las instrucciones para mostrar el contenido que se encuentra en esa referencia señalada. En un documento HTML, por ejemplo, el navegador se desplazará hasta el punto donde se define el fragmento; en un video o documento de audio, el navegador intentará ir a la vez que el ancla se presenta. Vale la pena señalar que la parte despues de la  #, también conocido como indentificador de fragmento, nunca se envia al servidor con la solicitud.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<pre>https://developer.mozilla.org/en-US/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7230", "Uniform Resource Identifiers", "2.7")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</td>
  </tr>
 </tbody>
</table>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Common_questions/What_is_a_URL">Qué es una URL?</a></li>
 <li><a href="http://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml">Lista de esquemas URI IANA </a></li>
</ul>
