---
title: HTTP headers
slug: Web/HTTP/Headers
---

{{HTTPSidebar}}Las cabeceras (en inglés _headers_) HTTP permiten al cliente y al servidor enviar información adicional junto a una petición o respuesta. Una cabecera de petición esta compuesta por su nombre (no sensible a las mayusculas) seguido de dos puntos '`:`', y a continuación su valor (sin saltos de línea). Los espacios en blanco a la izquierda del valor son ignoradosSe pueden agregar cabeceras propietarias personalizadas usando el prefijo 'X-', pero esta convención se encuentra desfasada desde Julio de 2012, debido a los inconvenientes causados cuando se estandarizaron campos no estandar en el [RFC 6648](https://tools.ietf.org/html/rfc6648); otras están listadas en un [registro IANA](https://www.iana.org/assignments/message-headers/perm-headers.html), cuyo contenido original fue definido en el [RFC 4229](https://tools.ietf.org/html/rfc4229), IANA tambien mantiene un [registro de propuestas para nuevas cabeceras HTTP](https://www.iana.org/assignments/message-headers/prov-headers.html)

Las Cabeceras pueden ser agrupadas de acuerdo a sus contextos:

- {{Glossary("Cabecera general")}}: Cabeceras que se aplican tanto a las peticiones como a las respuestas, pero sin relación con los datos que finalmente se transmiten en el cuerpo.
- {{Glossary("Cabecera de consulta")}}: Cabeceras que contienen más información sobre el contenido que va a obtenerse o sobre el cliente.
- {{Glossary("Cabecera de respuesta")}}: Cabeceras que contienen más información sobre el contenido, como su origen o el servidor (nombre, versión, etc.).
- {{Glossary("Cabecera de entidad")}}: Cabeceras que contienen más información sobre el cuerpo de la entidad, como el tamaño del contenido o su tipo MIME.

Las cabeceras también pueden clasificarse de acuerdo a cómo se comportan frente a ellas los proxies:

- Cabeceras de extremo a extremo
  - : Estas cabeceras deben ser enviadas al recipiente final del mensaje; esto es, el servidor (para una petición) o el cliente (para una respuesta). Los proxies intermediarios deben transmitir las cabeceras de extremo-a-extremo sin modificar, y las cachés deben guardarlas tal y como son recibidas.
- Cabeceras de paso
  - : Estas cabeceras sólo son significativas para conexiones de un paso, y no deben ser transmitidas por proxies o almacenarse en caché. Éstas cabeceras son: {{ httpheader("Connection") }}, {{ httpheader("Keep-Alive") }}, {{ httpheader("Proxy-Authenticate") }}, {{ httpheader("Proxy-Authorization") }}, {{ httpheader("TE") }}, {{ httpheader("Trailer") }}, {{ httpheader("Transfer-Encoding") }} and {{ httpheader("Upgrade") }}. La cabecera general {{ httpheader("Connection") }} sólo puede usarse para este tipo de cabeceras.

La siguiente lista agrupa las cabeceras HTTP en categorías según su uso. Para visualizar una lista en orden alfabético, use el navegador del lado izquierdo.

## Autenticación

- {{HTTPHeader("WWW-Authenticate")}}
  - : Define el método de autenticación que debería ser usado para tener acceso al contenido.
- {{HTTPHeader("Authorization")}}
  - : Contiene las credenciales para autenticar a un usuario con un servidor.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Define el método de autenticación que debería ser usado para tener acceso a un recurso que se encuentre tras un servidor proxy.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Contiene las credenciales para autenticar a un usuario con un servidor proxy.

## Almacenamiento en caché

- {{HTTPHeader("Age")}}
  - : El tiempo en el que un objeto ha estado en una caché proxy, expresado en segundos.
- {{HTTPHeader("Cache-Control")}}
  - : Especifica directivas para los mecanismos de almacenamiento en caché, tanto para peticiones como para respuestas.
- {{HTTPHeader("Expires")}}
  - : La fecha y tiempo tras las cuales una respuesta se considera agotada.
- {{HTTPHeader("Pragma")}}
  - : Cabecera specífica para implementaciones que puede tener diferentes efectos a lo lartgo del proceso de petición-respuesta. Utilizada para implementar retrocompatibilidad con cachés de tipo HTTP/1.0 donde la cabecera `Cache-Control` aún no esté presente.
- {{HTTPHeader("Warning")}}
  - : Un campo de alerta general, que contiene i nformación sobre diferentes problemas posibles.

## Indicaciones sobre el cliente

- {{HTTPHeader("Accept-CH")}}
  - : ...
- {{HTTPHeader("Accept-CH-Lifetime")}}
  - : ...
- {{HTTPHeader("Early-Data")}}
  - : ...
- {{HTTPHeader("Content-DPR")}}
  - : ...
- {{HTTPHeader("DPR")}}
  - : ...
- {{HTTPHeader("Downlink")}}
  - : ...
- {{HTTPHeader("Save-Data")}}
  - : ...
- {{HTTPHeader("Viewport-Width")}}
  - : ...
- {{HTTPHeader("Width")}}
  - : ...

## Condicionales

- {{HTTPHeader("Last-Modified")}}
  - : Se trata de un validador, indicando la fecha de la última modificación del recurso, utilizado para comparar diferentes versiones del mismo recurso. No es tan preciso como {{HTTPHeader("ETag")}}, pero es más sencillo de calcular en algunos entornos. Las peticiones condicionales que usan {{HTTPHeader("If-Modified-Since")}} y {{HTTPHeader("If-Unmodified-Since")}}utilizan este valor para cambiar el comportamiento de la petición.
- {{HTTPHeader("ETag")}}
  - : Se trata de un validador, un tipo de hilo único identificando la versión del recurso. Las peticiones condicionales que usan {{HTTPHeader("If-Match")}} y {{HTTPHeader("If-None-Match")}} utilizan este valor para cambiar el comportamiento de la petición.
- {{HTTPHeader("If-Match")}}
  - : Realiza la petición condicional y aplican el método sólo si el recurso almacenado coincide con uno de los ETags asignados.
- {{HTTPHeader("If-None-Match")}}
  - : Realiza la petición condicional y aplican el método sólo si el recurso almacenado no coincide con ninguno de los ETags. Ésta cabecera se utiliza para actualizar cachés (para peticiones seguras), o para prevenir la subida de un recurso si éste ya existe en el servidor.
- {{HTTPHeader("If-Modified-Since")}}
  - : Realiza la petición condicional y espera que la entidad sea transmitia sólo si ha sido modificada tras la fecha especificada. Esta cabecera se usa para transmitir datos si la cabecera ha quedado desfasada.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Realiza la petición condicional y espera que la entidad sea transmitia sólo si no ha sido modificada tras la fecha especificada. Esta cabecera se usa para preservar la coherencia de un nuevo fragmento de un rango especifico respecto a otros ya existentes, o para implementar un sistema de control de concurrencia optimistacuando se están modificando documentos existentes.

## Gestión de conexiones

- {{HTTPHeader("Connection")}}
  - : Controla si la conexión a la red se mantiene activa después de que la transacción en curso haya finalizado.
- {{HTTPHeader("Keep-Alive")}}
  - : Controla el tiempo durante el cual una conexión persistente debe permanecer abierta.

## Negociación de contenido

- {{HTTPHeader("Accept")}}
  - : Informa al servidor sobre los diferentes tipos de datos que pueden enviarse de vuelta. Es de tipo MIME.
- {{HTTPHeader("Accept-Charset")}}
  - : Informa al servidor sobre el set de caracteres que el cliente puede entender.
- {{HTTPHeader("Accept-Encoding")}}
  - : Informa al servidor sobre el algoritmo de codificación, habitualmente un algoritmo de compresión, que puede utilizarse sobre el recurso que se envíe de vuelta en la respuesta.
- {{HTTPHeader("Accept-Language")}}
  - : Informa al servidor sobre el lenguage que el servidor espera recibir de vuelta. Se trata de una indicación, y no estará necesariamente sometida al control del cliente: el servidor siempre deberá estar atento para no sobreescribir una selección específica del usuario (como, por ejemplo, una selección de idiomas en una lista desplegable).

## Controles

- {{HTTPHeader("Expect")}}
  - : ...
- {{HTTPHeader("Max-Forwards")}}
  - : ...

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Contiene [HTTP cookies](/es/docs/Web/HTTP/Cookies) enviadas previamente por el servidor con la cabecera {{HTTPHeader("Set-Cookie")}} .
- {{HTTPHeader("Set-Cookie")}}
  - : Envia cookies desde el servidor al usuario.
- {{HTTPHeader("Cookie2")}} {{deprecated_inline}}
  - : Habitualmente contenía una cookie HTTP, enviada previamente por el servidor con la cabecera {{HTTPHeader("Set-Cookie2")}} , pero ha quedado obsoleta por la especificación. Utiliza en su lugar {{HTTPHeader("Cookie")}}.
- {{HTTPHeader("Set-Cookie2")}} {{deprecated_inline}}
  - : Se utilizaba para enviar cookies desde el servidor al usuario, but has been obsoleted by the specification. pero ha quedado obsoleta por la especificación. Utiliza en su lugar {{HTTPHeader("Set-Cookie")}} .

## CORS

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Indica si la respuesta puede ser compartida.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Indica si la respuesta puede quedar expuesta o no cuando el marcador de la credencial retorna como 'true'.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Utilizado como respuesta a una solicitud de validación para indicár qué cabeceras HTTP pueden utilizarse a la hora de lanzar la petición.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Especifica el método (o métodos) permitido al acceder al recurso, en respuesta a una petición de validación.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Indica qué cabeceras pueden ser expuestas como parte de una respuesta al listar sus nombres.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Indica durante cuánto tiempo puede guardarse el resultado de una solicitud de validación.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Utilizada al lanzar una petición de validación, para permitir al servidor saber qué cabeceras HTTP se utilizarán cuando la petición en cuestión se lance.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Utilizada al enviar una solicitud de validación que permite al servidor saber qué [método HTTP](/es/docs/Web/HTTP/Methods) se utilizará cuando la petición en cuestión se lance.
- {{HTTPHeader("Origin")}}
  - : Indica el punto de origen de una petición de recogida.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Especifica los origines que tienen permitido ver los valores de los atributos obtenidos mediante las características de la [Resource Timing API](/es/docs/Web/API/Performance_API/Resource_timing), que de otra forma serían reportados como cero debido a los orígenes cruzados.

## Cabeceras sin seguimiento

- {{HTTPHeader("DNT")}}
  - : Usada para indicar las preferencias de seguimiento (tracking) del usuario.
- {{HTTPHeader("Tk")}}
  - : Indica el estado del seguimiento que se aplica a la petición en curso.

## Descargas

- {{HTTPHeader("Content-Disposition")}}
  - : Una cabecera de respuesta usada en caso de que el recurso transmitid deba mostrarse en pantalla , o debe ser gestionada como una descarga y por tanto el navegador deba presentar una pantalla de 'Guardar Como'.

## Mensajes sobre la información del cuerpo (body)

- {{HTTPHeader("Content-Length")}}
  - : Indica el tamaño del cuerpo del recurso, expresado en números decimales de octetos, que ha sido enviado al recipiente.
- {{HTTPHeader("Content-Type")}}
  - : Indica el tipo de medio del recurso .
- {{HTTPHeader("Content-Encoding")}}
  - : Utilizado para indicar el algoritmo de compresión.
- {{HTTPHeader("Content-Language")}}
  - : Indica el idioma (o idiomas) elegidos para los usuarios, de forma que se pueda mostrar contenido diferenciado para el usuario de acuerdo a sus preferencias de idioma.
- {{HTTPHeader("Content-Location")}}
  - : Indica un punto de origen alternativo para un recurso.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Contiene información sobre el 'lado cliente' de un servidor proxy, que se alteraría o perdería si un proxy está involucrado en la ruta de la petición.
- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifica la IP de origen de un cliente que se conecta a un servidor web a través de un proxy HTTP o un equilibrador de carga.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifies the la dirección original solicitada que un cliente haya utilizado para conectarse a un proxy o equilibrador de carga.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifica el protocolo (HTTP o HTTPS) que un cliente haya utilizado para conectarse a un proxy o equilibrador de carga.
- {{HTTPHeader("Via")}}
  - : Añadida por los proxies, y pueden aparecer tanto en las cabeceras de petición como las de respuesta.

## Redirecciones

- {{HTTPHeader("Location")}}
  - : Indica la URL a la que debe redirigir una página determinada.

## Contexto de petición

- {{HTTPHeader("From")}}
  - : Contiene la dirección de email de un usuario humano que controla el gestor de peticiones.
- {{HTTPHeader("Host")}}
  - : Especifica el nombre de dominio del servidor (para alojamiento virtual), y (opcionalmente) el número de puerto TCP en el que está escuchando el servidor.
- {{HTTPHeader("Referer")}}
  - : Indica la dirección de la página web previa desde la cual un link nos ha redirigido a la actual.
- {{HTTPHeader("Referrer-Policy")}}
  - : Establece la información del referer que deberá ser enviada en las peticiones que incluyan {{HTTPHeader("Referer")}}.
- {{HTTPHeader("User-Agent")}}
  - : Contiene un string característico que será examinado por el protocolo de red para identificar el tipo de aplicación, sistema operativo, proveedor de software o versión del software del agente de software que realiza la petición. Véase también [Firefox user agent string reference](/es/docs/Web/HTTP/Headers/User-Agent/Firefox).

## Contexto de respuesta

- {{HTTPHeader("Allow")}}
  - : Lista el rango de métodos de peticiones HTTP aceptadas por un servidor.
- {{HTTPHeader("Server")}}
  - : Contiene información sobre el software utilizado por el servidor de origen para gestionar la petición.

## Peticiones de rango

- {{HTTPHeader("Accept-Ranges")}}
  - : Indica si el servidor acepta peticiones de rango y, de ser así, en qué unidades puede expresarse ese rango.
- {{HTTPHeader("Range")}}
  - : Indica la parte del documento que el servidor debe devolver.
- {{HTTPHeader("If-Range")}}
  - : Crea una petición de rango condicional que sólo es satisfecha cuando el etag o los datos provistos coinciden con los del recurso remoto. Se usan para prevenir la descarga de dos rangos desde versiones incompatibles del mismo recurso.
- {{HTTPHeader("Content-Range")}}
  - : Indica el lugar que debe ocupar un mensaje parcial dentro de la totalidad del cuerpo del recurso.

## Seguridad

- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : Controla qué recursos puede cargar el usuario para una página concreta.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Permite a los desarrolladores web experimentar con políticas de acceso, monotorizando (pero sin implementar) sus efectos. Éstos informes de violación de protocolo contienen documentos del tipo {{Glossary("JSON")}} enviados mediante una petición HTTP `POST` hacia el URI especificado.
- {{HTTPHeader("Expect-CT")}}
  - : Permite a los sitios optar por informar y/o hacer cumplir los requerimientos de Transparencia de Certificados, lo que impide que el uso de certificados publicados incorrectamente por ese sitio, pase desapercibido. Cuando un sitio habilita el encabezado Expect-CT, se solicita a Chrome que verifique que cualquier certificado para ese sitio, aparezca en los registros públicos de CT.
- {{HTTPHeader("Public-Key-Pins")}} ({{Glossary("HPKP")}})
  - : Asocia una clave criptográfica pública y específica con un determinado servidor web para reducir el riesgo de {{Glossary("MITM")}} ataques con certificados falsificados.
- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
  - : Envía reportes al report-uri especificado en la cabecera, sin bloquear la conexión entre cliente y servidor aún cuando el pinning ha sido violado.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : Fuerza la comunicación utilizando HTTPS en lugar de HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Envía una señal al servidor expresando la preferencia del cliente por una respuesta encriptada y autenticada, y esta puede manejar de forma satisfactoria la directiva {{CSP("upgrade-insecure-requests")}}.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deshabilita el MIME sniffing y fuerza al navegador a utilizar el tipo establecido en {{HTTPHeader("Content-Type")}}.
- {{HTTPHeader("X-Download-Options")}}
  - : ...
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Le indica al navegador que debe renderizar una página utilizando {{HTMLElement("frame")}}, {{HTMLElement("iframe")}} o {{HTMLElement("object")}}.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : ...
- {{HTTPHeader("X-Powered-By")}}
  - : ...
- {{HTTPHeader("X-XSS-Protection")}}
  - : Habilita los filtros de cross-site scripting.

## Eventos enviados por el servidor

- {{HTTPHeader("Ping-From")}}
  - : ...
- {{HTTPHeader("Ping-To")}}
  - : ...
- {{HTTPHeader("Last-Event-ID")}}
  - : ...

## Codificación de transferencia

- {{HTTPHeader("Transfer-Encoding")}}
  - : Especifica la forma de codificación para transferir la entidad al usuario de forma segura.
- {{HTTPHeader("TE")}}
  - : Especifica la codificación de transferencia que el usuario estará dispuesto a aceptar.
- {{HTTPHeader("Trailer")}}
  - : Le permite al remitente incluir campos adicionales al final de un mensaje fragmentado.

## WebSockets

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : ...

## Otros

- {{HTTPHeader("Date")}}
  - : Contiene la fecha y la hora en que el mensaje fue originado.
- {{HTTPHeader("Expect-CT")}}
  - : Le permite a los sitios el optar por reportar o forzar los requerimientos de transparencia de certificado.
- {{HTTPHeader("Large-Allocation")}}
  - : Le indica al navegador que la página a ser cargada va a realizar una asignación grande.
- {{HTTPHeader("Link")}}
  - : ...
- {{HTTPHeader("Retry-After")}}
  - : Indica cuánto tiempo debe esperar el usuario antes de hacer una solicitud de seguimiento.
- {{HTTPHeader("Server-Timing")}}
  - : Comunica una o mas métricas y descripciones para un dado ciclo de petición-respuesta.
- {{HTTPHeader("SourceMap")}}
  - : Enlaza el código generado a un [source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html).
- {{HTTPHeader("Upgrade")}}
  - : Éste es un Estándar de Internet Propuesto. Para leer una guía inclusiva de todos los Estándares de Internet Oficiales y Propuestos con información detallada sobre cada uno de ellos, [visita esta referencia de Estándares de Internet,](https://www.rfc-editor.org/standards) que se actualiza de forma diaria. El documento relevante de la RFC para la Actualuzación sobre los Estándares de Cabeceras es el [RFC 7230, sección 6.7](https://tools.ietf.org/html/rfc7230#section-6.7). El estándar establece reglas para la actualización o cambios a un protocolo doferente en el cliente, servidor, o protocolo de conexiones actuales.Por ejemplo, este estándar de cabecera permite que un cliente cambie de un protocolo HTTP 1.1 al HTTP 2.0, asumiendo que el servidor decida reconocer e implementar la cabecera de Actualización. Ninguna de las partes involucradas está obligada a aceptar los cambios implementados por el campo de la Cabecera de Actualización {{HTTPHeader("Upgrade")}}. Puede usarse tanto para cabeceras de cliente como para las del servidor. Si se especifica la cabecera de Actualización, el emisor también DEBE enviar el campo de cabecera de Conexión con la opción de actualización especificada. Para más detalles sobre dicho campo, por favor revisar la[sección 6.1 de la ya mencionada RFC](https://tools.ietf.org/html/rfc7230#section-6.1).
- {{HTTPHeader("Vary")}}
  - : Determina cómo emparejar futuras cabeceras de petición para decidir si una respuesta en caché puede utilizarse, en lugar de solicitar una cabecera nueva desde el servidor de origen.
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
  - : Controla el prefetching de DNS, una característica que permite a muchos navegadores realizar resoluciones de nombre de los dominios sobre ambos enlaces, que un usuario podría elegir seguir; así como URLs pata objetos referenciados por el documento incluyendo imágenes, CSS, archivos Javascript y demás.
- {{HTTPHeader("X-Firefox-Spdy")}} {{deprecated_inline}} {{non-standard_inline}}
  - : ...
- {{HTTPHeader("X-Requested-With")}}
  - : ...
- {{HTTPHeader("X-Robots-Tag")}}
  - : ...
- {{HTTPHeader("X-UA-Compatible")}} {{non-standard_inline}}
  - : Utilizada por Internet Explorer para señalar que tipo de modo de documento utilizar.

## Ver también

- [Wikipedia- listado de cabeceras HTTP](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [Registro IANA](https://www.iana.org/assignments/message-headers/perm-headers.html)
