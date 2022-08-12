---
title: Evolución del protocolo HTTP
slug: Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP
translation_of: Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP
---
<p>{{HTTPSidebar}}</p>

<p><strong>HTTP</strong> es el protocolo en el que se basa la Web. Fue inventado por Tim Berners-Lee entre los años 1989-1991, HTTP ha visto muchos cambios, manteniendo la mayor parte de su simplicidad y desarrollando su flexibilidad. HTTP ha evolucionado, desde un protocolo destinado al intercambio de archivos en un entorno de un laboratorio semi-seguro, al actual laberinto de Internet, sirviendo ahora para el intercambio de imágenes, vídeos en alta resolución y en 3D.</p>

<h2 id="Invención_de_la_World_Wide_Web">Invención de la World Wide Web</h2>

<p>En 1989, mientras trabajaba en el CERN, Tim Berners-Lee escribió una propuesta para desarrollar un sistema de hipertexto sobre Internet. Inicialmente lo llamó: '<em>Mesh' </em>(malla, en inglés), y posteriormente se renombró como<em> World Wide Web </em>(red mundial), durante su implementación en 1990. Desarrollado sobre los protocolos existentes TCP e IP, está basado en cuatro bloques:</p>

<ul>
 <li>Un formato de texto para representar documentos de hiper-texto: <em><a href="/en-US/docs/Web/HTML">HyperText Markup Language</a></em> (HTML).</li>
 <li>Un protocolo sencillo para el intercambio de esos documentos, del inglés: <em>HypertText Transfer Protocol </em>(HTTP) : protocolo de transferencia de hiper-texto.</li>
 <li>Un cliente que muestre (e incluso pueda editar) esos documentos. El primer navegador Web, llamado: <em>WorldWideWeb</em>.</li>
 <li>Un servidor para dar acceso a los documentos, una versión temprana: <em>httpd (http daemon)</em></li>
</ul>

<p>Estos cuatro bloques fundamentales se finalizaron para finales de 1990, y los primeros servidores estaban ya funcionando fuera del CERN a principios del 1991. El 6 de Agosto de 1991, el <a href="https://groups.google.com/forum/#!msg/alt.hypertext/eCTkkOoWTAY/urNMgHnS2gYJ">post</a> de Tim Berners-Lee, se considera actualmente como el inicio oficial de la Web como proyecto público. </p>

<p>La versión del protocolo HTTP usada en aquel momento, era realmente muy sencilla, posteriormente pasó a HTTP/0.9, referido algunas veces, como el protocolo de una sola línea.</p>

<h2 id="HTTP0.9_–_El_protocolo_de_una_sola_línea">HTTP/0.9 – El protocolo de una sola línea</h2>

<p>La versión inicial de HTTP, no tenía número de versión; aunque posteriormente se la denominó como 0.9 para distinguirla de las versiones siguientes. HTTP/0.9 es un protocolo extremadamente sencillo: una petición consiste simplemente en una única linea, que comienza por el único método posible {{HTTPMethod("GET")}}, seguido por la dirección del recurso a pedir (no la URL, ya que tanto el protocolo, el servidor y el puerto, no son necesarios una vez ya se ha conectado al servidor).</p>

<pre>GET /miPaginaWeb.html</pre>

<p>La respuesta también es muy sencilla: solamente consiste el archivo pedido.</p>

<pre>&lt;HTML&gt;
Una pagina web muy sencilla
&lt;/HTML&gt;</pre>

<p>Al contrario que sus posteriores evoluciones, el protocolo HTTP/0.9 no usa cabeceras HTTP, con lo cual únicamente es posible transmitir archivos HTML, y ningún otro tipo de archivos. Tampoco había información del estado ni códigos de error: en el caso un problema, el archivo HTML pedido, era devuelto con una descripción del problema dentro de él, para que una persona pudiera analizarlo.</p>

<h2 id="HTTP1.0_–_Desarrollando_expansibilidad">HTTP/1.0 – Desarrollando expansibilidad</h2>

<p>La versión HTTP/0.9 era ciertamente limitada y tanto los navegadores como los servidores, pronto ampliaron el protocolo para que fuera más flexible.</p>

<ul>
 <li>La versión del protocolo se envía con cada petición: HTTP/1.0 se añade a la línea de la petición GET.</li>
 <li>Se envía también un código de estado al comienzo de la respuesta, permitiendo así que el navegador pueda responder al éxito o fracaso de la petición realizada, y actuar en consecuencia (como actualizar el archivo o usar la caché local de algún modo).</li>
 <li>El concepto de cabeceras de HTTP, se presentó tanto para las peticiones como para las respuestas, permitiendo la trasmisión de meta-data y conformando un protocolo muy versátil y ampliable. </li>
 <li>Con el uso de las cabeceras de HTTP, se pudieron transmitir otros documentos además de HTML, mediante la cabecera {{HTTPHeader("Content-Type")}}.</li>
</ul>

<p>Una petición normal, sigue la estructura: </p>

<pre>GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
&lt;HTML&gt;
Una pagina web con una imagen
  &lt;IMG SRC="/miImagen.gif"&gt;
&lt;/HTML&gt;</pre>

<p>Continua con una segunda conexión y la petición de una imagen:</p>

<pre>GET /myImagen.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
<em>(image content)</em></pre>

<p>Estas innovaciones, no se desarrollaron de forma planeada, sino más bien con una aproximación de prueba y error, entre los años 1991 y 1995: un servidor y un navegador, añadían una nueva funcionalidad y se evaluaba su aceptación. Debido a esto, en ese periodo eran muy comunes los problemas de interoperatividad.  En Noviembre de 1996, para poner fin a estos problemas se publicó un documento informativo que describía las prácticas adecuadas, {{RFC(1945)}}. Esté documento es la definición del protocolo HTTP/1.0. Resulta curioso, que realmente no es un estándar oficial. </p>

<h2 id="HTTP1.1_–_El_protocolo_estándar.">HTTP/1.1 – El protocolo estándar.</h2>

<p>En paralelo al uso, un poco desordenado, y las diversas implementaciones de HTTP/1.0, y desde el año 1995,  un año antes de la publicación del documento del HTTP/1.0, un proceso de estandarización formal ya estaba en curso. La primera versión estandarizada de HTTP: el protocolo HTTP/1.1, se publicó en 1997, tan solo unos meses después del HTTP/1.0 </p>

<p>HTTP/1.1 aclaró ambigüedades y añadió numerosas mejoras: </p>

<ul>
 <li>Una conexión podía ser reutilizada, ahorrando así el tiempo de re-abrirla repetidas veces para mostrar los recursos empotrados dentro del documento original pedido.</li>
 <li>Enrutamiento ('Pipelining' en inglés) se añadió a la especificación, permitiendo realizar una segunda petición de datos, antes de que fuera respondida la primera, disminuyendo de este modo la latencia de la comunicación.</li>
 <li>Se permitió que las respuestas a peticiones, podían ser divididas en sub-partes.</li>
 <li>Se añadieron controles adicionales a los mecanismos de gestión de la cache. </li>
 <li>La negociación de contenido, incluyendo el lenguaje, el tipo de codificación, o tipos, se añadieron a la especificación, permitiendo que servidor y cliente, acordasen el contenido más adecuado a intercambiarse. </li>
 <li>Gracias a la cabecera, {{HTTPHeader("Host")}}, pudo ser posible alojar varios dominios en la misma dirección IP. </li>
</ul>

<p>El flujo normal de una serie de peticiones y respuestas, bajo una única conexión, se expone a continuación:</p>

<pre>GET /en-US/docs/Glossary/Simple_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

<em>(...contenido...)</em>


GET /static/img/header-background.png HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Age: 9578461
Cache-Control: public, max-age=315360000
Connection: keep-alive
Content-Length: 3077
Content-Type: image/png
Date: Thu, 31 Mar 2016 13:34:46 GMT
Last-Modified: Wed, 21 Oct 2015 18:27:50 GMT
Server: Apache

<em>(image content of 3077 bytes)</em></pre>

<p>HTTP/1.1 fue publicado inicialmente como {{rfc(2068)}} en Enero de 1997.</p>

<h2 id="Más_de_15_años_de_expansiones">Más de 15 años de expansiones</h2>

<p>Gracias a su expansibilidad - ya que la creación de nuevas cabeceras o métodos es sencilla - e incluso teniendo en cuenta que el protocolo HTTP/1.1 fue mejorado en dos revisiones: la primera, el documento {{RFC("2616")}}, publicado en Junio de 1999 y posteriormente en los documentos {{RFC("7230")}}-{{RFC("7235")}} publicados en Junio del 2014, en previsión de la publicación de HTTP/2. Así pues, el protocolo HTTP/1.1 ha sido increíblemente estable durante más de 15 años.</p>

<h3 id="El_uso_de_HTTP_para_transmisiones_seguras">El uso de HTTP para transmisiones seguras</h3>

<p>El mayor cambio en el desarrollo de HTTP, fue a finales de 1994. En vez de trasmitir HTTP sobre la capa de TCP/IP, se creo una capa adicional sobre esta: SSL. La versión SSL 1.0 nunca fue publicada fuera de las compañías desarrolladoras, pero el SSL 2.0 y sus sucesoras SSL 3.0 y SSL 3.1 permitieron la creación del comercio electrónico en la Web (e-commerce), encriptando y garantizando la autenticidad de los mensajes intercambiados entre servidor y cliente. SSL se añadió a la lista de estándares y posteriormente evolucionó hasta ser el protocolo TLS, con versiones 1.0, 1.1 y 1.2, que fueron apareciendo para resolver vulnerabilidades. Actualmente se está desarrollando el protocolo TLS 1.3.</p>

<p>Durante el mismo periodo, la necesidad por una capa de trasporte encriptada aumentó; la Web, que permitía una relativa confianza de lo que era una mayoría de trabajo académico, pasó a ser una jungla donde anuncios, individuos aleatorios o criminales competían para obtener tanta información privada sobre la gente como pudieran, o trataban de suplantarlos o incluso sustituir los datos trasmitidos por otros alterados. A medida que hubo aplicaciones que se desarrollaban y funcionaban sobre HTTP, fueron más y más funcionales, tener acceso a más y mayor información personal como contactos, e-mails, o posición geográfica del usuario, la necesidad de tener el protocolo TLS, fue fundamental incluso fuera del ámbito del comercio electrónico.</p>

<h3 id="Uso_de_HTTP_para_aplicaciones_complejas">Uso de HTTP para aplicaciones complejas</h3>

<p>La visión original de Tim Berners-Lee para la Web no era solo un medio de 'solo' lectura. Él había visionado una Web donde la gente pudiese añadir y mover documentos de forma remota, un estilo de sistema de archivos distribuido. Sobre el año 1996, HTTP se había desarrollado para  permitir la autoría, y fue creado un estándar denominado WebDAB. Este fue más tarde ampliado por aplicaciones especificas como CardDAV, para permitir libros de direcciones, y CalDAV para trabajar con calendarios. Pero todos estas extensiones  '*DAV', tenían una debilidad, y es que debian ser implementadas por los servidores, para poder ser usadas, lo cual era bastante complejo. Así pues su uso en la Web fue bastante acotado. </p>

<p>En el año 2000, un nuevo formato para usar HTTP fue diseñado: REST (del inglés:  '{{glossary("REST", "Representational State Transfer")}}'). Las acciones de la nueva API, no estaban supeditadas a nuevos métodos HTTP, unicamente al acceso a URIs especificas con métodos HTTP/1.1). Esto permitió que cualquier aplicación Web dispusiera de una API, para permitir la recuperación y modificación de datos, sin tener que actualizar servidores o navegadores; todo lo que se necesitaba era incluido en los archivos servidos por los sitios Web. La contrapartida del modelo REST está en que cada sitio Web define su propia versión no estándar de API RESTful y tiene un control total sobre ella; al contrario del formato *DAV donde clientes y servidores eran interoperables. La arquitectura REST empezó a ser muy común a partir del año 2010.</p>

<p>Desde el año 2005, las APIs disponibles para páginas Web han aumentado considerablemente, y muchas de estas nuevas APIs dependen de cabeceras HTTP específicas para funciones concretas: </p>

<ul>
 <li><a href="/en-US/docs/Web/API/Server-sent_events">Eventos enviados por el servidor</a>: El servidor es el que ocasionalmente inicia los mensajes hacia el navegador. </li>
 <li><a href="/en-US/docs/Web/API/WebSocket_API">WebSocket</a>, un nuevo protocolo que puede establecerse actualizando una conexión HTTP existente.</li>
</ul>

<h3 id="Relajación_del_modelo_de_seguridad_de_la_Web">Relajación del modelo de seguridad de la Web</h3>

<p>El protocolo HTTP es independiente del modelo de seguridad de la Web: la <a href="/en-US/docs/Web/Security/Same-origin_policy">política del mismo origen</a>. De hecho, el actual modelo de seguridad de la Web, ha sido desarrollado con posterioridad  a la creación del protocolo HTTP. A lo largo de los años, se ha probado útil, poder ser más permisivo con ella, permitiendo que bajo ciertos requerimientos se puedan levantar algunas de las restricciones de esta política. Cuanto y cuantas de estas restricciones se pueden saltar es comunicado desde el servidor al cliente, mediante una serie de nuevas cabeceras HTTP. Estas están especificadas en los documentos como CORS ( del inglés <a href="/en-US/docs/Glossary/CORS">Cross-Origin Resource Sharing</a>, que viene a significar: recursos compartidos de orígenes cruzados) y el CSP (del inglés: <a href="/en-US/docs/Web/Security/CSP">Content Security Policy</a> , que traducido es: política de seguridad de contenidos).</p>

<p>Además de estas ampliaciones, muchas otras cabeceras han sido añadidas, algunas unicamente experimentales. Algunas de ellas notables son: Do Not Track ({{HTTPHeader("DNT")}}); cabecera de control de privacidad:  {{HTTPHeader("X-Frame-Options")}}, y  {{HTTPHeader('Upgrade-Insecure-Requests')}}.</p>

<h2 id="HTTP2_–_Un_protocolo_para_un_mayor_rendimiento">HTTP/2 – Un protocolo para un mayor rendimiento</h2>

<p>A lo largo de los años, las páginas Web han llegado a ser mucho más complejas, incluso llegando a poder considerarse como aplicaciones por derecho propio. La cantidad de contenido visual, el tamaño de los scripts, y los scripts que añaden interactividad ha aumentado mucho también. Muchismos más datos son transmitidos bajo muchas mas peticiónes HTTP. Las conexiones HTTP/1.1 han de enviar las peticiones HTTP en el orden correcto. Teóricamente, seria posible usar varias conexiones en paralelo (normalmente entre 5 y 8), aumentando consecuentemente la complejidad del proceso. Por ejemplo, el HTTP 'pipelining' ha demostrado ser un lastre para el desarrollo Web. </p>

<p>En la primera mitad de la década de 2010, Google demostró un proceso alternativo para el intercambio de data entre clientes y servidores, implementando el protocolo experimental SPDY (pronunciado como en inglés <em>'speedy'</em>). Este atrajo mucho interés por los desarrolladores de tanto los navegadores como los servidores. Definiendo una mejora en los tiempos de respuesta, y resolviendo el problema de datos duplicados transmitidos. SPDY sirvió como base para el desarrollo del protocolo HTTP/2. </p>

<p>El protocolo HTTP/2, tiene notables diferencias fundamentales respecto a la versión anterior HTTP/1.1</p>

<ul>
 <li>Es un protocolo binario, en contraposición a estar formado por cadenas de texto, tal y como estában basados sus protocolos anteriores. Así pues no se puede leer directamente, ni crear manualmente A pesar de este inconveniente, gracias a este cambio es posible utilizar en él técnicas de optimización. </li>
 <li>Es un protocolo multiplexado. Peticiones paralelas pueden hacerse sobre la misma connexión, no está sujeto pues a mantener el orden de los mensajes, ni otras restricciónes que tenian los protocolos anteriores HTTP/1.x</li>
 <li>Comprime las cabeceras, ya que estas, normalmente son similares en un grupo de peticiones. Esto elimina la duplicación y retardo en los datos a transmitir. </li>
 <li>Esto permite al servidor almacenar datos en la caché del cliente, previamente a que estos sean pedidos, mediante un mecanismo denominado '<em>server push</em>'.</li>
</ul>

<p>Estandarizado de manera oficial en Mayo de 2015, HTTP/2 ha conseguido muchos éxitos. En Julio de 2016, un 8.7% de todos los sitios Web<sup><a href="https://w3techs.com/technologies/details/ce-http2/all/all">[1]</a></sup> estaban usandolo ya, representando más del 68% de todo su tráfico<sup><a href="https://www.keycdn.com/blog/http2-statistics/">[2]</a></sup>. Los sitios Web con mucho tráfico, fueron aquellos que lo adoptaron más rápidamente, ahorrando considerablemente las sobrecargas en la transferencia de datos, ... y en sus presupuestos.</p>

<p>Esta rápida adopción era esperada, ya que el uso de HTTP/2, no requiere de una adaptación de los sitios Web y aplicaciones: el uso de HTTP/1.1 o HTTP/2 es transparente para ellos. El uso de un servidor actual, comunicandose con un navegador actualizado, es suficiente para permitir su uso: únicamente en casos partículares fue necesario impulsar su utilización; y según se actualizan servidores y navegadores antiguos, su utilización aumenta, sin que requiera un mayor esfuerzo de los desarrolladores Web.</p>

<h2 id="Post-evolución_del_HTTP2">Post-evolución del HTTP/2</h2>

<p>Con la publicación de la versión del protocolo HTTP/2, esté no ha dejado de evoluciónar. Como con el HTTP/1.x, anteriormente, la extensibilidad del HTTP se sigue usando para añadir nuevas funcionalidades. Podemos enumerar algunas de estas nuevas características que se desarrollaron en el año 2016: </p>

<ul>
 <li>Soporte de la cabecera {{HTTPHeader("Alt-Svc")}}, la cual permite disociar la identificación de una ubicación, con respecto a un recurso pedido, permitiendo el uso más inteligente de los mecanismos de cacheo de memoria de los {{Glossary("CDN")}}.</li>
 <li>La introducción de la cabecera {{HTTPHeader("Client-Hints")}}, que permíte al navegador, o cliente, comunicar proactivamente al servidor, sus necesidades o restricciones de hardware.</li>
 <li>La introducción de prefijos de seguridad en la cabecera {{HTTPHeader("Cookie")}}, esto ayuda a garantizar que una cookie, no ha sido alterada.</li>
</ul>

<p>Esta evolución del HTTP demuestra su capacidad de ampliación y simplicidad, permitiendo así de forma deliverada su uso para muchas aplicaciónes y favoreciendo el uso de este protocolo. El entorno en el que el HTTP se usa hoy en día, es muy distinto al que habia a principios de la década de 1990. El desarrollo original de HTTP, ha demostrado ser una obra maestra, permitiendo a la Web evolucionar a lo largo de un cuarto de siglo, sin la necesidad de un 'amotinamiento'. Corrigiendo errores, y manteniendo la flexibilidad y extensibilidad que han hecho al HTTP un éxito, la adopción del HTTP/2 tiene un brillante futuro.</p>
