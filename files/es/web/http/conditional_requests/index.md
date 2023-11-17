---
title: Peticiones condicionales en HTTP
slug: Web/HTTP/Conditional_requests
---

{{HTTPSidebar}}

HTTP tiene un concepto de peticiones condicionales, donde el resultado, e incluso el éxito de una petición, se puede cambiar comparando los recursos afectados con el valor de un validador. Dichas peticiones pueden ser útiles para validar el contenido de un caché, y evitar un control inútil, para verificar la integridad de un documento, como al reanudar una descarga, o al evitar perder actualizaciones al cargar o modificar un documento en el servidor.

## Principios

Las peticiones condicionales HTTP son peticiones que se ejecutan de manera diferente, dependiendo del valor de encabezados específicos. Estos encabezados definen una condición previa, y el resultado de la petición será diferente si la condición previa coincide o no.

Los diferentes comportamientos están definidos por el método de petición utilizado y por el conjunto de encabezados utilizados para una condición previa:

- para métodos seguros, como {{HTTPMethod("GET")}}, que generalmente intenta recuperar un documento, la petición condicional se puede usar para devolver el documento, solo si es relevante. Por lo tanto, esto ahorra ancho de banda.
- para métodos no seguros, como {{HTTPMethod("PUT")}}, que generalmente carga un documento, la petición condicional se puede usar para cargar el documento, solo si el original en el que se basa es el mismo que el almacenado en el servidor.

## Validadores

Todos los encabezados condicionales intentan verificar si el recurso almacenado en el servidor coincide con una versión específica. Para lograr esto, las peticiones condicionales deben indicar la versión del recurso. Como la comparación de todo el recurso byte a byte es impracticable, y no siempre lo que se desea, la petición transmite un valor que describe la versión. Tales valores se llaman validadores y son de dos tipos:

- la fecha de la última modificación del documento, la fecha _last-modified_.
- una cadena opaca, que identifica de forma única cada versión, llamada _etiqueta de entidad_, o _etag_.

Comparar versiones del mismo recurso es un poco complicado: según el contexto, hay dos tipos de controles de igualdad:

- _Validación fuerte_, se utiliza cuando se espera una igualdad byte a byte, por ejemplo, al reanudar una descarga.
- _Validación débil_, se utiliza cuando el agente de usuario solo necesita determinar si los dos recursos tienen el mismo contenido. Incluso si son pequeñas diferencias, como diferentes anuncios, o un pie de página con una fecha diferente.

El tipo de validación es independiente del validador utilizado. Ambos {{HTTPHeader("Last-Modified")}} y {{HTTPHeader("ETag")}} permiten ambos tipos de validación, aunque la complejidad para implementarlo en el lado del servidor puede variar. HTTP utiliza la validación fuerte de forma predeterminada, y especifica cuándo se puede usar una validación débil.

### Validación fuerte

La validación sólida consiste en garantizar que el recurso es, byte a byte, idéntico al que se compara. Esto es obligatorio para algunos encabezados condicionales, y el predeterminado para los demás. La validación sólida es muy estricta y puede ser difícil garantizarla a nivel del servidor, pero garantiza que no se pierdan datos en ningún momento, a veces a expensas del rendimiento.

Es bastante difícil tener un identificador único para una validación fuerte con {{HTTPHeader("Last-Modified")}}. A menudo, esto se hace usando una {{HTTPHeader("ETag")}} con el hash MD5 del recurso (o un derivado).

### Validación débil

La validación débil difiere de la validación fuerte, ya que considera dos versiones del documento como idénticas si el contenido es equivalente. Por ejemplo, una página que diferiría de otra solo por una fecha diferente en su pie de página, o una publicidad diferente, se consideraría idéntica a la otra con validación débil. Estas dos versiones iguales se consideran diferentes cuando se usa una validación fuerte. Construir un sistema de etags que cree una validación débil puede ser complejo, ya que implica conocer la importancia de los diferentes elementos de una página, pero es muy útil para optimizar el rendimiento del caché.

## Encabezados condicionales

Varios encabezados HTTP, llamados encabezados condicionales, conducen a peticiones condicionales. Estos son:

- {{HTTPHeader("If-Match")}}
  - : Tiene éxito si la {{HTTPHeader("ETag")}} del recurso remoto es igual a una que se encuentra en este encabezado. Por defecto, a menos que el etag tenga el prefijo `'W/'`, realiza una validación fuerte.
- {{HTTPHeader("If-None-Match")}}
  - : Tiene éxito si la {{HTTPHeader("ETag")}} del recurso remoto es diferente a cada una de las enumeradas en este encabezado. Por defecto, a menos que el etag tenga el prefijo `'W/'`, realiza una validación fuerte.
- {{HTTPHeader("If-Modified-Since")}}
  - : Tiene éxito si la fecha {{HTTPHeader("Last-Modified")}} del recurso remoto es más reciente que la dada en este encabezado.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Tiene éxito si la fecha {{HTTPHeader("Last-Modified")}} del recurso remoto es más antigua que la dada en este encabezado.
- {{HTTPHeader("If-Range")}}
  - : Similar a {{HTTPHeader("If-Match")}}, o {{HTTPHeader("If-Unmodified-Since")}}, pero sólo puede tener una etag, o una fecha. Si falla, la petición de rango falla, y en lugar de una respuesta {{HTTPStatus("206")}} `Partial Content` , se envía un {{HTTPStatus("200")}} `OK` con el recurso completo.

## Casos de uso

### Actualización de caché

El caso de uso más común para las peticiones condicionales es la actualización de un caché. Con un caché vacío, o sin un caché, el recurso solicitado se devuelve con un estado {{HTTPStatus("200")}} `OK`.

![The request issued when the cache is empty triggers the resource to be downloaded, with both validator value sent as headers. The cache is then filled.](cache1.png)

Junto con el recurso, los validadores se envían en los encabezados. En este ejemplo, ambos {{HTTPHeader("Last-Modified")}} y {{HTTPHeader("ETag")}} son enviados, pero igualmente podría haber sido solo uno de ellos. Estos validadores se almacenan en caché con el recurso (como todos los encabezados) y se utilizarán para elaborar peticiones condicionales, una vez que el caché se vuelva obsoleto.

Mientras la memoria caché no esté obsoleta, no se emitirá ninguna petición. Pero una vez se haya vuelto obsoleta, esto se controla principalmente por el encabezado {{HTTPHeader("Cache-Control")}}, el cliente no usa el valor en caché directamente, pero emite una _petición condicional_. El valor del validador se utiliza como parámetro de los encabezados {{HTTPHeader("If-Modified-Since")}} y {{HTTPHeader("If-Match")}}.

Si el recurso no ha cambiado, el servidor envía una respuesta {{HTTPStatus("304")}} `Not Modified`. Esto hace que la caché se actualice nuevamente, y el cliente usa el recurso almacenado en caché. Aunque hay una respuesta/petición de ida y vuelta que consume algunos recursos, esto es más eficiente que transmitir de nuevo todo el recurso a través del cable.

![With a stale cache, the conditional request is sent. The server can determine if the resource changed, and, as in this case, decide not to send it again as it is the same.](httpcache2.png)

Si el recurso ha cambiado, el servidor simplemente envía una respuesta {{HTTPStatus("200")}} `OK`, con la nueva versión del recurso, como si la petición no fuera condicional y el cliente usara este nuevo recurso (y lo almacena en caché).

![In the case where the resource was changed, it is sent back as if the request wasn't conditional.](httpcache3.png)

Además de la configuración de los validadores en el lado del servidor, este mecanismo es transparente: todos los navegadores administran una memoria caché y envían dichas peticiones condicionales sin que los desarrolladores web realicen ningún trabajo especial.

### Integridad de una descarga parcial

La descarga parcial de archivos es una funcionalidad de HTTP que permite reanudar operaciones previas, ahorrando tiempo y ancho de banda, manteniendo la información ya obtenida:

![A download has been stopped and only partial content has been retrieved.](httpresume1.png)

Un servidor que admite descargas parciales transmite esto enviando el encabezado {{HTTPHeader("Accept-Ranges")}}. Una vez que esto sucede, el cliente puede reanudar una descarga enviando un encabezado {{HTTPHeader("Ranges")}} con los rangos ausentes:

![The client resumes the requests by indicating the range he needs and preconditions checking the validators of the partially obtained request.](httpresume2.png)

El principio es simple, pero hay un problema potencial: si el recurso descargado se modificó entre ambas descargas, los rangos obtenidos corresponderán a dos versiones diferentes del recurso y el documento final estará corrupto.

Para evitar esto, se utilizan peticiones condicionales. Para los rangos, hay dos formas de hacer esto. El más flexible hace uso de {{HTTPHeader("If-Modified-Since")}} y {{HTTPHeader("If-Match")}} y el servidor devuelve un error si la precondición falla, entonces el cliente reinicia la descarga desde el principio:

![When the partially downloaded resource has been modified, the preconditions will fail and the resource will have to be downloaded again completely.](httpresume3.png)

Incluso si este método funciona, agrega un intercambio adicional de respuesta / petición cuando el documento ha sido cambiado. Esto altera el rendimiento, y HTTP tiene un encabezado específico para evitar este escenario: {{HTTPHeader("If-Range")}}:

![The If-Range headers allows the server to directly send back the complete resource if it has been modified, no need to send a 412 error and wait for the client to re-initiate the download.](httpresume4.png)

Esta solución es más eficiente, pero ligeramente menos flexible, ya que solo se puede usar una etag en la condición. Rara vez se necesita flexibilidad adicional.

### Evitar el problema de actualización perdida con bloqueo optimista

Una operación común en aplicaciones web es _actualizar_ un documento remoto. Esto es muy común en cualquier sistema de archivos o aplicaciones de control de origen, pero cualquier aplicación que permita almacenar recursos remotos necesita tal mecanismo. Los sitios web comunes, como los wikis y otros CMS, tienen tal necesidad.

Con el método {{HTTPMethod("PUT")}} eres capaz de implementarlo. El cliente primero lee los archivos originales, los modifica y finalmente los envía al servidor:

![Updating a file with a PUT is very simple when concurrency is not involved.](httplock1.png)

Desafortunadamente, las cosas se vuelven un poco inexactas cuando tenemos en cuenta la concurrencia. Mientras un cliente modifica localmente su nueva copia del recurso, un segundo cliente puede obtener el mismo recurso y hacer lo mismo con su copia. Lo que sucede a continuación es muy desafortunado: cuando se devuelven al servidor, las modificaciones del primer cliente son descartadas por la inserción del siguiente cliente, ya que este segundo cliente desconoce los cambios del primer cliente en el recurso. La decisión sobre quién gana, no se comunica a la otra parte. De qué cliente se deberán mantener los cambios, variará con la velocidad a la que se realicen, esto depende del rendimiento de los clientes, del servidor e incluso de la edición humana del documento en el cliente. El ganador cambiará de una vez a la siguiente. Esta es una condición de carrera y conduce a comportamientos problemáticos, que son difíciles de detectar y depurar:

![When several clients update the same resource in parallel, we are facing a race condition: the slowest win, and the others don't even know they lost. Problematic!](httplock2.png)

No hay manera de lidiar con este problema sin molestar a uno de los dos clientes. Sin embargo, se deben evitar las actualizaciones perdidas y las condiciones de la carrera. Queremos resultados predecibles y esperamos que se notifique a los clientes cuando se rechacen sus cambios.

Las peticiones condicionales permiten implementar el _algoritmo de bloqueo optimista_ (utilizado por la mayoría de las wikis o sistemas de control de fuente). El concepto es permitir que todos los clientes obtengan copias del recurso, luego permitirles modificarlo localmente, controlando la concurrencia al permitir que el primer cliente envíe una actualización. Todas las actualizaciones posteriores, basadas en la versión ahora obsoleta del recurso, se rechazan:

![Conditional requests allow to implement optimistic locking: now the quickest wins, and the others get an error.](httplock3.png)

Esto se implementa utilizando el encabezado {{HTTPHeader("If-Match")}} o {{HTTPHeader("If-Unmodified-Since")}}. Si la etag no coincide con el archivo original, o si el archivo ha sido modificado desde que se obtuvo, el cambio simplemente se rechaza con un error {{HTTPStatus("412")}} `Precondition Failed`. Depende entonces del cliente lidiar con el error: ya sea notificando al usuario que vuelva a comenzar (esta vez en la versión más reciente) o mostrándole al usuario una _diferencia_ entre ambas versiones, Ayudándoles a decidir qué cambios desean mantener.

### Tratar con la primera subida de un recurso

La primera subida de un recurso es un caso similar al anterior. Como cualquier actualización de un recurso, está sujeta a una condición de carrera si dos clientes intentan realizarla en tiempos similares. Para evitar esto, se pueden utilizar peticiones condicionales: añadiendo el encabezado {{HTTPHeader("If-None-Match")}} con el valor especial `'*'`, representando cualquier etag. La petición sólo tendrá éxito si el recurso no existía antes:

![Like for a regular upload, the first upload of a resource is subject to a race condition: If-None-Match can prevent it.](httpfirst.png)

`If-None-Match` solo funcionará con servidores compatibles con HTTP/1.1 (y posteriores). Si no está seguro de que el servidor sea compatible, primero debe emitir una petición {{HTTPMethod("HEAD")}} al recurso para comprobarlo.

## Conclusión

Las peticiones condicionales son una característica clave de HTTP y permiten la creación de aplicaciones eficientes y complejas. Para almacenar en caché o reanudar las descargas, el único trabajo requerido para los webmasters es configurar el servidor correctamente, establecer etags correctas en algunos entornos puede ser complicado. Una vez logrado, el navegador atenderá las peticiones condicionales esperadas.

Para los mecanismos de bloqueo, ocurre lo contrario: los desarrolladores web deben emitir una petición con los encabezados adecuados, mientras que los webmasters pueden confiar en la aplicación para realizar las comprobaciones correspondientes.

En ambos casos está claro, las peticiones condicionales son una característica fundamental de la Web.
