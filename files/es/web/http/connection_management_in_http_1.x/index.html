---
title: Gestión de la conexión en  HTTP/1.x
slug: Web/HTTP/Connection_management_in_HTTP_1.x
translation_of: Web/HTTP/Connection_management_in_HTTP_1.x
original_slug: Web/HTTP/Gestion_de_la_conexion_en_HTTP_1.x
---
<div>{{HTTPSidebar}}</div>

<p class="summary">La gestión de las conexiones en un tema fundamental en HTTP: crear y mantener una conexión tiene una gran influencia en el rendimiento de las páginas Web y las aplicaciones Web. En la versión HTTP/1.x, hay modos de conexión: conexiones breves, conexiones persistentes, y '<em>pipelining</em>'.</p>

<p>HTTP la mayor parte de las veces se basa en TCP, como protocolo de transporte, dando conexión entre el cliente y el servidor. En sus comienzos, HTTP, únicamente tenia un modelo para gestionar dichas conexiones. Aquellas conexiones eran conexiones breves: se creaba una cada vez que una petición necesitaba ser transmitida, y se cerraba, una vez que la respuesta se había recibido. </p>

<p>Este sencillo modelo tenía una limitación intrínseca en su rendimiento: abrir una conexión TCP es una operación costosa en recursos. Se necesitan intercambiar varios mensajes entre el cliente y el servidor para hacerlo. Y la latencia de la red y su ancho de banda, se veían afectados cuando se realizaba una petición. Las páginas web actuales, necesitan varias peticiones (una docena o más) para tener la información necesaria, de manera que este primer modelo es ineficiente para ellas.</p>

<p>Dos nuevos modelos se presentaron en HTTP/1.1. La conexión persistente, mantiene las conexiones abiertas, entre peticiones sucesivas, eliminando así el tiempo necesario para abrir nuevas conexiones. El modelo 'pipelining' va un paso más allá, y envía varias peticiones sucesivas, sin esperar por la respuesta, reduciendo significativamente la latencia en la red. </p>

<p><img alt="Compares the performance of the three HTTP/1.x connection models: short-lived connections, persistent connections, and HTTP pipelining." src="https://mdn.mozillademos.org/files/13727/HTTP1_x_Connections.png" style="height: 538px; width: 813px;"></p>

<div class="note">
<p>HTTP/2 añade nuevos modelos para la gestión de la conexión. </p>
</div>

<p>Un punto significativo a tener en cuenta en la gestión de la conexión de HTTP, es que este se refiere a la conexión establecida entre dos nodos consecutivos de la red, esto se denomina <a href="/en-US/docs/Web/HTTP/Headers#hbh">hop-by-hop</a>, en contraposición al concepto de  <a href="/en-US/docs/Web/HTTP/Headers#e2e">end-to-end</a>. El modelo de conexión entre un cliente y su primer proxy, puede ser distinto que la comunicación entre el proxy y el servidor de destino (u otro proxy intermedio).  Las cabeceras de HTTP utilizadas para definir el modelo de conexión como  {{HTTPHeader("Connection")}} y {{HTTPHeader("Keep-Alive")}}, se refieren a una conexión <a href="/en-US/docs/Web/HTTP/Headers#hbh">hop-by-hop</a>, y estos parámetros, pueden variar en las comunicaciones de los nodos intermedios. </p>

<p>Un tema también relativo a esto, es el concepto de conexiones con protocolos HTTP superiores, donde una conexión HTTP/1.1 se actualiza a un protocolo distinto, como puede ser TLS/1.0, WebSockets, o HTTP/2.  Este <a href="/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism">mecanismo de actualización del </a><a href="/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism">protocolo</a> se encuentra documentado en otra página.</p>

<h2 id="Conexiones_breves">Conexiones breves</h2>

<p>El modelo original de HTTP, y el modelo de HTTP/1.0, está basado, en conexiones breves. Cada petición HTTP, se completa estableciendo (iniciando, estableciendo y cerrando) su propia conexión. Esto supone que la coordinación en el protocolo HTTP (handshake), sucede de forma previa a cada petición HTTP.</p>

<p>La coordinación o inicialización de una comunicación en el protocolo TCP, requiere un tiempo dado, pero al adaptarse el protocolo TCP a su carga de transmisión de datos, este incrementa su eficiencia cuando se mantiene la conexión en el tiempo, utilizándose una conexión para transmitir numerosos peticiones de datos. Las conexiones breves, no utilizan esta característica del protocolo TCP, y el rendimiento de la conexión es peor que en el caso óptimo, al estar constantemente necesitando iniciar conexiones para transmitir cada mensaje (esto se conoce como conexiones 'en frio', o en inglés: 'cold connections'). </p>

<p>La conexión breve es la conexión usada por defecto en HTTP/1.0 (únicamente en el caso de no esté definida la  cabecera {{HTTPHeader("Connection")}}, o su valor sea  <code>close</code>  entonces, no se utilizaria el modelo de conexiones breves). En HTTP/1.1, este modelo de conexión unicamente se utiliza al definir la cabecera  {{HTTPHeader("Connection")}} como <code>close</code>  .</p>

<div class="note">
<p>A menos que  se de la situación en que se ha de trabajar con sistemas antiguos que no soportan conexiones persistentes, no hay otra razón para el uso de este modelo de conexiones. </p>
</div>

<h2 id="Conexiones_persistentes">Conexiones persistentes</h2>

<p>Las conexiones breves, tienen dos importantes desventajas: el tiempo que necesitan para establecer una nueva conexión es significativo, y la eficacia del protocolo inferior a HTTP: el TCP unicamente mejora cuando la conexión ha estado funcionando durante algún tiempo (conexión caliente o 'warm connection' en inglés). Para atenuar dichos inconvenientes, se presentó el concepto de conexión persistente, ya incluso antes de presentar el protocolo HTTP/1.1. También se le conoce como <em>'keep-alive connection</em>' que en inglés indica una conexión que se mantiene viva. </p>

<p>Una conexión persistente es aquella la cual permanece abierta por un periodo, y puede ser reutilizada por varias peticiones de datos, ahorrando así la necesidad de efectuar nuevas sincronizaciones a nivel de TCP, de esta manera se puede usar más eficazmente el protocolo TCP. Esta conexión no estará abierta permanentemente, si la conexión no se usa, se cerrará después de un tiempo determinado (un servidor puede usar la cabecera {{HTTPHeader("Keep-Alive")}} para definir el tiempo mínimo que la conexión debería estar abierta. </p>

<p>Las conexiones persistentes también tienen sus desventajas: incluso cuando no están transmitiendo datos, consumen recursos, y en casos en que la red esté soportando una carga de transferencia muy alta, un {{glossary("DoS attack", "ataque DoS ")}} puede realizarse. En estos casos, el uso de conexiones no persistentes, las cuales se cierran tan pronto como no necesitan transmitir, pueden resultar en un sistema más eficaz.</p>

<p>HTTP/1.0 las conexiones HTTP/1.0 no son persistentes por defecto. Si se indica en la cabecera de un mensaje {{HTTPHeader("Connection")}} cualquier otro valor que no sea:  <code>close</code>, como puede ser: <code>retry-after</code>,  en tal caso, se harán conexiones persistentes. </p>

<p>En HTTP/1.1 las conexiones son persistentes por defecto, así que esa cabecera no se necesita (aunque usualmente se añade como medida defensiva, en caso de que se tenga que utilizar el protocolo HTTP/1.0).</p>

<h2 id="HTTP_pipelining">HTTP pipelining</h2>

<div class="note">
<p>HTTP pipelining no está activado por defecto en los navegacdores modernos:</p>

<ul>
 <li><a href="https://en.wikipedia.org/wiki/Proxy_server">Proxies</a> con defectos de implementación son habituales y provocan comportamientos extraños y erráticos, que los desarrolladores de Webs, no pueden predecir, ni corregir fácilmente.</li>
 <li>HTTP Pipelining es complicado de implementar correctamente: el tamaño del recurso pedido, el correcto <a href="https://en.wikipedia.org/wiki/Round-trip_delay_time">RTT</a> que será utilizado, así como el ancho de banda efectivo, tienen un impacto directo en la en la mejora de rendimiento de este método. Sin conocer estos valores, puede que mensajes importantes, se vean retrasados, por mensajes que no lo son. El concepto de "importante" incluso cambia según se carga la maquetación (layout) de la página. De ahí que este método solamente presente una mejora marginal en la mayoría de los casos.  </li>
 <li>HTTP Pipelining  presenta un problema conocido como <a href="https://en.wikipedia.org/wiki/Head-of-line_blocking">HOL</a> </li>
</ul>

<p>Así, debido a estas razones este método ha sido relevado por un algoritmo mejor, la <strong>multiplexación</strong>, que es el que usa HTTP/2.</p>
</div>

<p>Por defecto, las peticiones HTTP son realizadas de manera sequencial. La siguiente petición es realizada una vez que la respuesta a la petición actual ha sido recibida. Debido a que se ven afectadas por latencias en la red y limitaciones en el ancho de banda, ésto puede llevar a retardos significativos hasta que la siguiente petición es <em>vista</em> por el servidor.</p>

<p>Pipelining es un proceso para enviar peticiones sucesivas, sobre la misma conexión persistente, sin esperar a la respuesta. Esto evita latencias en la conexión. En teoría, el rendimiento también podría mejorar si dos peticiones HTTP se empaquetaran en el mismo mensaje TCP. El MSS (Maximum Segment Size) típico, es suficientemente grande para contener varias peticiones simples, aunque la demanda de tamaño de las peticiones HTTP sigue creciendo.</p>

<p>No todos los tipos de peticiones HTTP pueden ser utilizadas en pipeline: solo métodos {{glossary("idempotent")}} como {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} and {{HTTPMethod("DELETE")}} pueden ser repetidos sin incidencias. Si ocurre un fallo, el contenido se puede simplemente reenviar.</p>

<p>Hoy en día, todo proxy y servidor que cumpla con HTTP/1.1 debería dar soporte a pipelining, aunque en práctica tenga muchas limitaciones. Por esta razón, ningún explorador moderno lo activa por defecto.</p>

<h2 id="Domain_sharding">Domain sharding</h2>

<div class="note">
<p>Unless you have a very specific immediate need, don't use this deprecated technique; switch to HTTP/2 instead. In HTTP/2, domain sharding is no more useful: the HTTP/2 connection is able to handle parallel unprioritized requests very well. Domain sharding is even detrimental to performance. Most HTTP/2 implementation use a technique called <a href="I wonder if it's related to the nobash/nobreak/nopick secret exit s of Elrond's chambers.">connection coalescing</a> to revert eventual domain sharding.</p>
</div>

<p>As an HTTP/1.x connection is serializing requests, even without any ordering, it can't be optimal without large enough available bandwidth. As a solution, browsers open several connections to each domain, sending parallel requests. Default was once 2 to 3 connections, but this has now increased to a more common use of 6 parallel connections. There is a risk of triggering <a href="/en-US/docs/Glossary/DOS_attack">DoS</a> protection on the server side if attempting more than this number.</p>

<p>If  the server wishes a faster Web site or application response, it is possible for the server to force the opening of more connections. For example, Instead of having all resources on the same domain, say <code>www.example.com</code>, it could split over several domains, <code>www1.example.com</code>, <code>www2.example.com</code>, <code>www3.example.com</code>. Each of these domains resolve to the <em>same</em> server, and the Web browser will open 6 connections to each (in our example, boosting the connections to 18). This technique is called <em>domain sharding</em>.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13783/HTTPSharding.png" style="height: 727px; width: 463px;"></p>

<h2 id="Conclusión">Conclusión</h2>

<p>Las mejoras en la gestión de las conexiones, han significado un considerable aumento en el rendimiento del protocolo HTTP. Con HTTP/1.1 o HTTP/1.0, el uso de una conexión persistente - al menos hasta que que no necesite transmitir más datos- resulta en un significativo aumento en el rendimiento de la comunicación. Incluso, el fracaso de. método de pipelining, ha resultado en el diseño de modelos superiores para la gestión de la conexión, todo lo cual se ha incorporado en HTTP/2. </p>
