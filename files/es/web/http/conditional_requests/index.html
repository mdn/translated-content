---
title: Peticiones condicionales en HTTP
slug: Web/HTTP/Conditional_requests
tags:
  - Guía
  - HTTP
  - Peticiones condicionales
translation_of: Web/HTTP/Conditional_requests
original_slug: Web/HTTP/Peticiones_condicionales
---
<p>{{HTTPSidebar}}</p>

<p class="summary">HTTP tiene un concepto de peticiones condicionales, donde el resultado, e incluso el éxito de una petición, se puede cambiar comparando los recursos afectados con el valor de un validador. Dichas peticiones pueden ser útiles para validar el contenido de un caché, y evitar un control inútil, para verificar la integridad de un documento, como al reanudar una descarga, o al evitar perder actualizaciones al cargar o modificar un documento en el servidor.</p>

<h2 id="Principios">Principios</h2>

<p>Las peticiones condicionales HTTP son peticiones que se ejecutan de manera diferente, dependiendo del valor de encabezados específicos. Estos encabezados definen una condición previa, y el resultado de la petición será diferente si la condición previa coincide o no.</p>

<p>Los diferentes comportamientos están definidos por el método de petición utilizado y por el conjunto de encabezados utilizados para una condición previa:</p>

<ul>
 <li>para métodos seguros, como {{HTTPMethod("GET")}}, que generalmente intenta recuperar un documento, la petición condicional se puede usar para devolver el documento, solo si es relevante. Por lo tanto, esto ahorra ancho de banda.</li>
 <li>para métodos no seguros, como {{HTTPMethod("PUT")}}, que generalmente carga un documento, la petición condicional se puede usar para cargar el documento, solo si el original en el que se basa es el mismo que el almacenado en el servidor.</li>
</ul>

<h2 id="Validadores">Validadores</h2>

<p>Todos los encabezados condicionales intentan verificar si el recurso almacenado en el servidor coincide con una versión específica. Para lograr esto, las peticiones condicionales deben indicar la versión del recurso. Como la comparación de todo el recurso byte a byte es impracticable, y no siempre lo que se desea, la petición transmite un valor que describe la versión. Tales valores se llaman validadores y son de dos tipos:</p>

<ul>
 <li>la fecha de la última modificación del documento, la fecha <em>last-modified</em>.</li>
 <li>una cadena opaca, que identifica de forma única cada versión, llamada <em>etiqueta de entidad</em>, o <em>etag</em>.</li>
</ul>

<p>Comparar versiones del mismo recurso es un poco complicado: según el contexto, hay dos tipos de controles de igualdad:</p>

<ul>
 <li><em>Validación fuerte</em>, se utiliza cuando se espera una igualdad byte a byte, por ejemplo, al reanudar una descarga.</li>
 <li><em>Validación débil</em>, se utiliza cuando el agente de usuario solo necesita determinar si los dos recursos tienen el mismo contenido. Incluso si son pequeñas diferencias, como diferentes anuncios, o un pie de página con una fecha diferente.</li>
</ul>

<p>El tipo de validación es independiente del validador utilizado. Ambos {{HTTPHeader("Last-Modified")}} y {{HTTPHeader("ETag")}} permiten ambos tipos de validación, aunque la complejidad para implementarlo en el lado del servidor puede variar. HTTP utiliza la validación fuerte de forma predeterminada, y especifica cuándo se puede usar una validación débil.</p>

<h3 id="Validación_fuerte">Validación fuerte</h3>

<p id="sect1">La validación sólida consiste en garantizar que el recurso es, byte a byte, idéntico al que se compara. Esto es obligatorio para algunos encabezados condicionales, y el predeterminado para los demás. La validación sólida es muy estricta y puede ser difícil garantizarla a nivel del servidor, pero garantiza que no se pierdan datos en ningún momento, a veces a expensas del rendimiento.</p>

<p>Es bastante difícil tener un identificador único para una validación fuerte con {{HTTPHeader("Last-Modified")}}. A menudo, esto se hace usando una {{HTTPHeader("ETag")}} con el hash MD5 del recurso (o un derivado).</p>

<h3 id="Validación_débil">Validación débil</h3>

<p>La validación débil difiere de la validación fuerte, ya que considera dos versiones del documento como idénticas si el contenido es equivalente. Por ejemplo, una página que diferiría de otra solo por una fecha diferente en su pie de página, o una publicidad diferente, se consideraría idéntica a la otra con validación débil. Estas dos versiones iguales se consideran diferentes cuando se usa una validación fuerte. Construir un sistema de etags que cree una validación débil puede ser complejo, ya que implica conocer la importancia de los diferentes elementos de una página, pero es muy útil para optimizar el rendimiento del caché.</p>

<h2 id="Encabezados_condicionales">Encabezados condicionales</h2>

<p>Varios encabezados HTTP, llamados encabezados condicionales, conducen a peticiones condicionales. Estos son:</p>

<dl>
 <dt>{{HTTPHeader("If-Match")}}</dt>
 <dd>Tiene éxito si la {{HTTPHeader("ETag")}} del recurso remoto es igual a una que se encuentra en este encabezado. Por defecto, a menos que el etag tenga el prefijo <code>'W/'</code>, realiza una validación fuerte.</dd>
 <dt>{{HTTPHeader("If-None-Match")}}</dt>
 <dd>Tiene éxito si la {{HTTPHeader("ETag")}} del recurso remoto es diferente a cada una de las enumeradas en este encabezado. Por defecto, a menos que el etag tenga el prefijo <code>'W/'</code>, realiza una validación fuerte.</dd>
 <dt>{{HTTPHeader("If-Modified-Since")}}</dt>
 <dd>Tiene éxito si la fecha {{HTTPHeader("Last-Modified")}} del recurso remoto es más reciente que la dada en este encabezado.</dd>
 <dt>{{HTTPHeader("If-Unmodified-Since")}}</dt>
 <dd>Tiene éxito si la fecha {{HTTPHeader("Last-Modified")}} del recurso remoto es más antigua que la dada en este encabezado.</dd>
 <dt>{{HTTPHeader("If-Range")}}</dt>
 <dd>Similar a {{HTTPHeader("If-Match")}}, o {{HTTPHeader("If-Unmodified-Since")}}, pero sólo puede tener una etag, o una fecha. Si falla, la petición de rango falla, y en lugar de una respuesta {{HTTPStatus("206")}} <code>Partial Content</code> , se envía un {{HTTPStatus("200")}} <code>OK</code> con el recurso completo.</dd>
</dl>

<h2 id="Casos_de_uso">Casos de uso</h2>

<h3 id="Actualización_de_caché">Actualización de caché</h3>

<p>El caso de uso más común para las peticiones condicionales es la actualización de un caché. Con un caché vacío, o sin un caché, el recurso solicitado se devuelve con un estado {{HTTPStatus("200")}} <code>OK</code>.</p>

<p><img alt="The request issued when the cache is empty triggers the resource to be downloaded, with both validator value sent as headers. The cache is then filled." src="https://mdn.mozillademos.org/files/13729/Cache1.png" style="height: 265px; width: 741px;"></p>

<p>Junto con el recurso, los validadores se envían en los encabezados. En este ejemplo, ambos {{HTTPHeader("Last-Modified")}} y {{HTTPHeader("ETag")}} son enviados, pero igualmente podría haber sido solo uno de ellos. Estos validadores se almacenan en caché con el recurso (como todos los encabezados) y se utilizarán para elaborar peticiones condicionales, una vez que el caché se vuelva obsoleto.</p>

<p>Mientras la memoria caché no esté obsoleta, no se emitirá ninguna petición. Pero una vez se haya vuelto obsoleta, esto se controla principalmente por el encabezado {{HTTPHeader("Cache-Control")}}, el cliente no usa el valor en caché directamente, pero emite una <em>petición condicional</em>. El valor del validador se utiliza como parámetro de los encabezados {{HTTPHeader("If-Modified-Since")}} y {{HTTPHeader("If-Match")}}.</p>

<p>Si el recurso no ha cambiado, el servidor envía una respuesta {{HTTPStatus("304")}} <code>Not Modified</code>. Esto hace que la caché se actualice nuevamente, y el cliente usa el recurso almacenado en caché. Aunque hay una respuesta/petición de ida y vuelta que consume algunos recursos, esto es más eficiente que transmitir de nuevo todo el recurso a través del cable.</p>

<p><img alt="With a stale cache, the conditional request is sent. The server can determine if the resource changed, and, as in this case, decide not to send it again as it is the same." src="https://mdn.mozillademos.org/files/13731/HTTPCache2.png" style="height: 265px; width: 741px;"></p>

<p>Si el recurso ha cambiado, el servidor simplemente envía una respuesta {{HTTPStatus("200")}}<code> OK</code>, con la nueva versión del recurso, como si la petición no fuera condicional y el cliente usara este nuevo recurso (y lo almacena en caché).</p>

<p><img alt="In the case where the resource was changed, it is sent back as if the request wasn't conditional." src="https://mdn.mozillademos.org/files/13733/HTTPCache3.png"></p>

<p>Además de la configuración de los validadores en el lado del servidor, este mecanismo es transparente: todos los navegadores administran una memoria caché y envían dichas peticiones condicionales sin que los desarrolladores web realicen ningún trabajo especial.</p>

<h3 id="Integridad_de_una_descarga_parcial">Integridad de una descarga parcial</h3>

<p>La descarga parcial de archivos es una funcionalidad de HTTP que permite reanudar operaciones previas, ahorrando tiempo y ancho de banda, manteniendo la información ya obtenida:</p>

<p><img alt="A download has been stopped and only partial content has been retrieved." src="https://mdn.mozillademos.org/files/16190/HTTPResume1.png" style="height: 397px; width: 764px;"></p>

<p>Un servidor que admite descargas parciales transmite esto enviando el encabezado {{HTTPHeader("Accept-Ranges")}}. Una vez que esto sucede, el cliente puede reanudar una descarga enviando un encabezado {{HTTPHeader("Ranges")}} con los rangos ausentes:</p>

<p><img alt="The client resumes the requests by indicating the range he needs and preconditions checking the validators of the partially obtained request." src="https://mdn.mozillademos.org/files/13737/HTTPResume2.png"></p>

<p>El principio es simple, pero hay un problema potencial: si el recurso descargado se modificó entre ambas descargas, los rangos obtenidos corresponderán a dos versiones diferentes del recurso y el documento final estará corrupto.</p>

<p>Para evitar esto, se utilizan peticiones condicionales. Para los rangos, hay dos formas de hacer esto. El más flexible hace uso de {{HTTPHeader("If-Modified-Since")}} y {{HTTPHeader("If-Match")}} y el servidor devuelve un error si la precondición falla, entonces el cliente reinicia la descarga desde el principio:</p>

<p><img alt="When the partially downloaded resource has been modified, the preconditions will fail and the resource will have to be downloaded again completely." src="https://mdn.mozillademos.org/files/13739/HTTPResume3.png"></p>

<p>Incluso si este método funciona, agrega un intercambio adicional de respuesta / petición cuando el documento ha sido cambiado. Esto altera el rendimiento, y HTTP tiene un encabezado específico para evitar este escenario: {{HTTPHeader("If-Range")}}:</p>

<p><img alt="The If-Range headers allows the server to directly send back the complete resource if it has been modified, no need to send a 412 error and wait for the client to re-initiate the download." src="https://mdn.mozillademos.org/files/13741/HTTPResume4.png" style="height: 263px; width: 770px;"></p>

<p>Esta solución es más eficiente, pero ligeramente menos flexible, ya que solo se puede usar una etag en la condición. Rara vez se necesita flexibilidad adicional.</p>

<h3 id="Evitar_el_problema_de_actualización_perdida_con_bloqueo_optimista">Evitar el problema de actualización perdida con bloqueo optimista</h3>

<p>Una operación común en aplicaciones web es <em>actualizar</em> un documento remoto. Esto es muy común en cualquier sistema de archivos o aplicaciones de control de origen, pero cualquier aplicación que permita almacenar recursos remotos necesita tal mecanismo. Los sitios web comunes, como los wikis y otros CMS, tienen tal necesidad.</p>

<p>Con el método {{HTTPMethod("PUT")}} eres capaz de implementarlo. El cliente primero lee los archivos originales, los modifica y finalmente los envía al servidor:</p>

<p><img alt="Updating a file with a PUT is very simple when concurrency is not involved." src="https://mdn.mozillademos.org/files/13743/HTTPLock1.png"></p>

<p>Desafortunadamente, las cosas se vuelven un poco inexactas cuando tenemos en cuenta la concurrencia. Mientras un cliente modifica localmente su nueva copia del recurso, un segundo cliente puede obtener el mismo recurso y hacer lo mismo con su copia. Lo que sucede a continuación es muy desafortunado: cuando se devuelven al servidor, las modificaciones del primer cliente son descartadas por la inserción del siguiente cliente, ya que este segundo cliente desconoce los cambios del primer cliente en el recurso. La decisión sobre quién gana, no se comunica a la otra parte. De qué cliente se deberán mantener los cambios, variará con la velocidad a la que se realicen, esto depende del rendimiento de los clientes, del servidor e incluso de la edición humana del documento en el cliente. El ganador cambiará de una vez a la siguiente. Esta es una condición de carrera y conduce a comportamientos problemáticos, que son difíciles de detectar y depurar:</p>

<p><img alt="When several clients update the same resource in parallel, we are facing a race condition: the slowest win, and the others don't even know they lost. Problematic!" src="https://mdn.mozillademos.org/files/13749/HTTPLock2.png" style="height: 504px; width: 904px;"></p>

<p>No hay manera de lidiar con este problema sin molestar a uno de los dos clientes. Sin embargo, se deben evitar las actualizaciones perdidas y las condiciones de la carrera. Queremos resultados predecibles y esperamos que se notifique a los clientes cuando se rechacen sus cambios.</p>

<p>Las peticiones condicionales permiten implementar el <em>algoritmo de bloqueo optimista</em> (utilizado por la mayoría de las wikis o sistemas de control de fuente). El concepto es permitir que todos los clientes obtengan copias del recurso, luego permitirles modificarlo localmente, controlando la concurrencia al permitir que el primer cliente envíe una actualización. Todas las actualizaciones posteriores, basadas en la versión ahora obsoleta del recurso, se rechazan:</p>

<p><img alt="Conditional requests allow to implement optimistic locking: now the quickest wins, and the others get an error." src="https://mdn.mozillademos.org/files/13751/HTTPLock3.png" style="height: 471px; width: 904px;"></p>

<p>Esto se implementa utilizando el encabezado {{HTTPHeader("If-Match")}} o {{HTTPHeader("If-Unmodified-Since")}}. Si la etag no coincide con el archivo original, o si el archivo ha sido modificado desde que se obtuvo, el cambio simplemente se rechaza con un error {{HTTPStatus("412")}} <code>Precondition Failed</code>. Depende entonces del cliente lidiar con el error: ya sea notificando al usuario que vuelva a comenzar (esta vez en la versión más reciente) o mostrándole al usuario una <em>diferencia </em>entre ambas versiones, Ayudándoles a decidir qué cambios desean mantener.</p>

<h3 id="Tratar_con_la_primera_subida_de_un_recurso.">Tratar con la primera subida de un recurso.</h3>

<p>La primera subida de un recurso es un caso similar al anterior. Como cualquier actualización de un recurso, está sujeta a una condición de carrera si dos clientes intentan realizarla en tiempos similares. Para evitar esto, se pueden utilizar peticiones condicionales: añadiendo el encabezado {{HTTPHeader("If-None-Match")}} con el valor especial <code>'*'</code>, representando cualquier etag. La petición sólo tendrá éxito si el recurso no existía antes:</p>

<p><img alt="Like for a regular upload, the first upload of a resource is subject to a race condition: If-None-Match can prevent it." src="https://mdn.mozillademos.org/files/13753/HTTPFirst.png" style="height: 311px; width: 895px;"></p>

<p><code>If-None-Match</code> solo funcionará con servidores compatibles con HTTP/1.1 (y posteriores). Si no está seguro de que el servidor sea compatible, primero debe emitir una petición {{HTTPMethod("HEAD")}} al recurso para comprobarlo.</p>

<h2 id="Conclusión">Conclusión</h2>

<p>Las peticiones condicionales son una característica clave de HTTP y permiten la creación de aplicaciones eficientes y complejas. Para almacenar en caché o reanudar las descargas, el único trabajo requerido para los webmasters es configurar el servidor correctamente, establecer etags correctas en algunos entornos puede ser complicado. Una vez logrado, el navegador atenderá las peticiones condicionales esperadas.</p>

<p>Para los mecanismos de bloqueo, ocurre lo contrario: los desarrolladores web deben emitir una petición con los encabezados adecuados, mientras que los webmasters pueden confiar en la aplicación para realizar las comprobaciones correspondientes.</p>

<p>En ambos casos está claro, las peticiones condicionales son una característica fundamental de la Web.</p>
