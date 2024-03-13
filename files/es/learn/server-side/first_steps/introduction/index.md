---
title: Introducción al lado servidor
slug: Learn/Server-side/First_steps/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}

¡Bienvenidos al curso MDN de programación para principiantes de lado servidor! En este primer artículo enfocamos la programación de Lado-Servidor desde un nivel alto, respondiendo a preguntas tales como "¿qué es?", "¿en qué se diferencia de la programación de Lado-Cliente?" y "¿porqué es tan útil?". Después de leer este artículo entenderás el poder adicional para los sitios web disponible a través de la codificación lado-servidor.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        Nociones básicas de computación. Entender lo que es un servidor web.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Familiarizarse con lo que es la programación de lado servidor, qué puede
        hacer y en qué se diferencia de la programación de lado cliente.
      </td>
    </tr>
  </tbody>
</table>

La mayoría de los grandes sitios web usan código de lado servidor para presentar, cuando se necesitan, diferentes datos, generalmente extraidos de una base de datos almacenada en un servidor y enviada al cliente para ser presentada mediante algún código (ej, HTML y JavaScript). Quizá el beneficio más significativo de la codificación de lado servidor es que te permite confeccionar el contenido del sitio web para usuarios individuales. Los sitios dinámicos pueden resaltar contenido que es más relevante basándose en las preferencias del usuario y sus hábitos. Puede hacer también que los sitios sean más fáciles de usar al almacenar las preferencias personales y la información - por ejemplo reusando los detalles de la tarjeta de crédito guardados para agilizar los pagos siguientes. Puede incluso permitir la interacción con los usuarios fuera del sitio, enviando notificaciones y actualizaciones via email o a traves de otros canales. Todas estas capacidades permite un mayor compromiso con los usuarios.

En el mundo moderno del desarrollo web, el aprendizaje sobre desarrollo de lado servidor es altamente recomendable.

## ¿Qué es la programación de sitios web de lado servidor?

Los exploradores web se comunican con los [servidores web](/es/docs/Learn/Common_questions/What_is_a_web_server) usando el Protocolo de Transporte de Hyper Texto (HyperText Transport Protocol ({{glossary("HTTP")}}). Cuando pinchas en un enlace en una página web, envías un formulario o ejecutas una búsqueda, se envía una peticion HTTP desde tu explorador web al servidor web de destino. La petición incluye un URL que identifica el recurso afectado, un método que define la acción requerida (por ejemplo, obtener, borrar o publicar el recurso), y puede incluir información adicional codificada en parámetros en el URL (los pares campo-valor enviados en una cadena de consulta ([query string](https://en.wikipedia.org/wiki/Query_string)), como datos POST (datos enviados mediate el método POST de HTTP, [HTTP POST method](/es/docs/Web/HTTP/Methods/POST)), o en {{glossary("Cookie", "associated cookies")}}.

Los servidores web esperan los mensajes de petición de los clientes, los procesan cuando llegan y responden al explorador web con un mensaje de respuesta HTTP. La repuesta contiene una línea de estado indicando si la petición ha tenido éxito o no (ej, "HTTP/1.1 200 OK" en caso de éxito). El cuerpo de una respuesta exitosa a una petición podría contener el resurso solicitado (ej, una nueva página HTML, o una imagen, etc...), que el explorador web podría presentar en pantalla.

### Sitios Estáticos

El diagrama de abajo muestra una arquitectura de servidor web básica correspondiente a un _sitio estático_ (un sitio estático es aquél que devuelve desde el servidor el mismo contenido insertado en el código "hard coded" siempre que se solicita un recurso en particular). Cuando un usuario quiere navegar a una página, el explorador envía una petición HTTP "GET" especificando su URL. El servidor recupera de su sistema de ficheros el documento solicitado y devuelve una respuesta HTTP que contiene el documento y un [estado de éxito "success status](/es/docs/Web/HTTP/Status#Successful_responses)" (normalmente 200 OK). Si el fichero no puede ser recuperado por alguna razón, se devuelve un estado de error (ver [respuestas de error del cliente](/es/docs/Web/HTTP/Status#Client_error_responses) and [respuestas de error del servidor](/es/docs/Web/HTTP/Status#Server_error_responses)).

![A simplified diagram of a static web server.](basic_static_app_server.png)

### Sitios Dinámicos

Un sitio dinámico es aquél en que algun contenido de la respuesta está generado _dinámicamente_ sólo cuando se necesita. En un sitio web dinámico las páginas HTML se crean normalmente insertando datos desde una base en variables dentro de plantillas HTML (esta es una forma mucho más eficiente de almacenar gran cantidad de contenido que la que usan los sitios web estáticos). Un sitio dinámico puede devolver datos diferentes para un URL basados en la información proporcionada por el usuario o sus preferencias almacenadas y puede realizar otras operaciones como parte de la devolución de respuesta (ej, enviar notificaciones).

La mayor parte del código para soportar un sitio web dinámico debe correr en el servidor. La creación de este código se conoce como "programación de lado-servidor" (o algunas veces "back-end scripting").

El diagrama de abajo muestra una arquitectura simple para un*sitio web dinámico.* Como en el diagrama previo, los exploradores web envían peticiones HTTP al servidor, el servidor procesa a continuación las peticiones y devuelve las respuestas HTTP apropiadas. Las peticiones de recursos _estáticos_ son gestionadas de la misma manera que para los _sitios estáticos_ (los recursos estáticos son cualquier fichero que no cambia - generalmente: CSS, JavaScript, Imágenes, ficheros PDF creados previamente, etc...)

![A simplified diagram of a web server that uses server-side programming to get information from a database and construct HTML from templates. This is the same diagram as is in the Client-Server overview.](web_application_with_html_and_steps.png)

Las peticiones de recursos dinámicos, por el contrario, son reenviadas (2) al código del lado-servidor (mostrado en el diagrama como _Web Application_). Para las "peticiones dinámicas" el servidor interpreta la petición, lee de la base de datos la información requerida (3), combina los datos recuperados con las plantillas HTML (4), y envía de vuelta una respuesta que contiene el HTML generado (5,6).

## ¿Son iguales la programación del lado-servidor y lado-cliente?

Prestemos ahora nuestra atención al código involucrado en la programación de lado-servidor y lado-cliente. En cada caso, el código es significativamente diferente:

- Tienen diferentes propósitos y preocupaciones.
- Por lo general no usan los mismos lenguajes de programación (siendo la excepción el JavaScript, que puede usarse tanto en lado servidor como en lado cliente).
- Se ejecutan entornos de diferentes sistemas operativos.

El código que se ejecuta en el explorador se conoce como código de lado-cliente, y su principal preocupación es la mejora de la apariencia y el comportamiento de una página web entregada. Esto incluye la selección y estilo de los componentes UI, la creación de layouts, navegación, validación de formularios, etc. Por otro lado, la programación de sitios web de lado servidor en su mayor parte implica la elección de _qué contenido_ se ha de devolver al explorador como respuesta a sus peticiones. El código de lado-servidor gestiona tareas como la validación de los datos enviados y las peticiones, usando bases de datos para almacenar y recuperar datos, y enviando los datos correctos al cliente según se requiera.

El código del lado cliente está escrito usando [HTML](/es/docs/Learn/HTML), [CSS](/es/docs/Learn/CSS), y [JavaScript](/es/docs/Learn/JavaScript) — es ejecutado dentro del explorador web y tiene poco o ningún acceso al sistema operativo subyacente (incluyendo un acceso limitado al sistema de ficheros).

Los desarrolladores web no pueden controlar qué explorador web usará cada usuario para visualizar un sitio web — los exploradores web proporcionan niveles de compatibilidad inconsistentes con las características de codificación lado cliente, y parte del reto de la programación de lado cliente es gestionar con dignidad las diferencias de soporte entre exploradores.

El código del lado servidor puede escribirse en cualquier número de lenguajes de programación — ejemplos de lenguajes de programación populares incluyen PHP, Python, Ruby, C# y NodeJS(JavaScript). El código del lado servidor tiene acceso completo al sistema operativo del servidor y el desarrollador puede elegir qué lenguaje de programación (y qué versión específica) desea usar.

Los desarrolladores generalmente escriben su código usando web frameworks. Los web framworks son colecciones de funciones, objetos, reglas y otras construcciones de código diseñadas para resolver problemas comunes, acelerar el desarrollo y simplificar los diferentes tipos de tareas que se han de abordar en un dominio en particular.

De nuevo, mientras que, tanto el código lado cliente y el lado servidor usan frameworks, los dominios son muy diferentes, y por lo tanto también lo son los frameworks. Los frameworks del lado cliente simplifican los diseños y las tareas de presentación mientras que los del lado servidor proporcionan un montón de funcionalidades "comunes" que tendría que haber implementado uno mismo (ej, soporte para las sesiones, soporte para los usuarios y autenticación, acceso fácil a la base de datos, librerías de plantillas, etc...).

> **Nota:** Los frameworks del lado cliente se usan con frecuencia para acelerar el desarrollo del código del lado cliente, pero también se puede elegir escribir todo el código a mano; de hecho, escribir el código a mano puede ser más rápido y más eficiente si sólo se necesita una UI para sitio web pequeña y simple. Por contra, casi nunca se consideraría escribir el componente del lado servidor de una aplicación web ("web app") sin un framework — implementar una característica vital como un servidor HTTP es realmente difícil de hacer de la nada en un lenguaje como, por ejemplo, Python, pero los web frameworks de Python como Django proporcionan uno listo para usar, junto con otras herramientas muy útiles.

## ¿Qué se puede hacer en el lado-servidor?

La programación del lado-servidor es muy útil porque nos permite distribuir _eficientemente_ información a medida para usuarios individuales y por lo tanto crear una experiencia de usuario mucho mejor.

Compañías como Amazon utilizan la programación del lado-servidor para construir resultados de búsquedas de productos, hacer sugerencias sobre productos escogidos basados en las preferencias del cliente y sus hábitos de compra previos, simplificar las adquisiciones, etc. Los bancos usan la programación del lado-servidor para almacenar la información sobre las cuentas y permitir ver y realizar transacciones sólo a los usuarios autorizados. Otros servicios como Facebook, Twitter, Instagram y Wikipedia usan la programación de lado-servidor para destacar, compartir y controlar el acceso al contenido interesante.

Algunos de los usos y beneficios comunes de la programación de lado-servidor se lista debajo. Notarás que hay algo de solapamiento.

### Almacenaje y distribución eficiente de información

Imagina cuántos productos están disponibles en Amazon, e imagina cuántas entradas se han escrito en Facebook. Crear una página estática separada para cada producto o entrada sería completamente ineficiente.

La programación de lado-servidor nos permite por el contrario almacenar la información en una base de datos y construir dinámicamente y devolver ficheros HTML y de otros tipos (ej, PDFs, imágenes, etc.). También es posible devolver simplemente datos ({{glossary("JSON")}}, {{glossary("XML")}}, etc.) para presentar mediante los web frameworks adecuados del lado-cliente (esto reduce la carga de procesamiento del servidor y la cantidad de datos que se necesitan enviar).

El servidor no se limita a enviar información de las bases de datos, y podría además devolver el resultado de herramientas de software o datos de servicios de comunicación. El contenido puede incluso ser dirigido por el tipo de dispositivo cliente que lo está recibiendo.

Debido a que la información está en una base de datos, puede también ser compartida y actualizada con otros sistemas de negocio (por ejemplo, cuando se venden los productos online o en una tienda, la tienda debería actualizar su base de datos de inventario.

> **Nota:** Tu imaginación no tiene que trabajar duro para ver el beneficio de la codificación de lado-servidor para el almacenaje y distribución de información:
>
> 1. Vete a [Amazon](https://www.amazon.com) o a cualquier otro sitio de comercio electrónico "e-commerce".
> 2. Busca por un número de palabras clave y nota como la estructura de la página no cambia, incluso aunque cambien los resultados.
> 3. Abre dos o tres productos diferentes. Fíjate de nuevo como tienen una estructura y diseño común, pero el contenido para los diferentes productos ha sido extraido de la base de datos.
>
> Para un término de búsqueda común (digamos "pez") puedes ver literalmente millones de valores retornados. Usar una base de datos permite que éstos sean almacenados y compartidos de forma eficiente, y permite que la presentación de la información esté controlada en un solo sitio.

### Experiencia de usuario personalizada

Los servidores pueden almacenar y usar la información acerca de los clientes para proporcionar una experiencia de usuario conveniente y dirigida. Por ejemplo, muchos usuarios almacenan tarjetas de crédito de forma que los detalles no tienen que ser introducidos de nuevo. Sitios como Google Maps usan la localización de tu casa y la actual para proporcionar una información sobre la ruta a seguir y resaltar los negocios locales en los resultados de búsqueda.

Un análisis profundo de los hábitos del usuario se puede usar para anticipar sus intereses y personalizar las respuestas y notificaciones futuras, proporcionando, por ejemplo, una lista de las localizaciones visitadas o populares que querrías buscar en un mapa.

> **Nota:** Vete a [Google Maps](https://maps.google.com/) como usuario anónimo, selecciona el botón Direcciones, e introduce los puntos de partida y destino de un viaje. Ahora inicia sesión en el sistema con tu cuenta de Google, si tienes una (en el panel de abajo aparece información acerca de este proceso donde seleccionas direcciones). El sitio web te permitirá ahora seleccionar las localizaciones de casa y trabajo como puntos de partida y destino (o almacenar estos detalles si no lo has hecho así).

### Acceso controlado al contenido

La programación de lado-servidor permite a los sitios restringir el acceso a usuarios autorizados y servir sólo la información que se le permite ver al usuario.

Ejemplos del mundo real incluyen:

- Redes sociales como Facebook permiten a los usuarios controlar totalmente sus propios datos pero permitiendo sólo a sus amigos ver o comentar sobre ellos. El usuario determina quien puede ver sus datos, y por extensión, los datos de quienes aparecen en sus notificaciones — autorización es una parte central de la experiencia de usuario!
- El sitio en el que te encuentras ahora controla el acceso al contenido: los artículos son visibles a todos, pero sólo los usuarios que se han identificado pueden editar el contenido. Para comprobar ésto, pincha en el botón Edit en la parte superior de esta página — si te has identificado iniciando sesión se te mostrará la vista de edición; si no has iniciado sesión serás enviado a una página de registro.

> **Nota:** Considera otros ejemplos reales donde el acceso al contenido está controlado. Por ejemplo, ¿qué puedes ver si vas al sitio online de tu banco? Inicia sesión con tu cuenta — ¿qué información adicional puedes ver y modificar? ¿Qué información puedes ver y sólo el banco puede cambiar?

### Almacenar información de sesión/estado

La programación de lado-servidor permite a los desarrolladores hacer uso de las sesiones — es básicamente un mecanismo que permite al servidor almacenar información sobre el usuario actual del sitio u enviar diferentes respuestas basadas en esa información. Esto permite, por ejemplo, que un sitio sepa que un usuario ha iniciado sesión previamente y presente enlaces a sus correos, o a su historial de órdenes, o quizá guardar el estado de un simple juego de forma que el usuario pueda volver al sitio de nuevo y retomar el juego donde lo dejó.

> **Nota:** Visita el sitio de un periódico que tenga un modelo de subscripción y abre un puñado de pestañas (ej, [The Age](http://www.theage.com.au/)). Continua visitando el sitio durante unos pocos días/horas. En algún momento serás finalmente redirigido a las páginas que explican cómo suscribirte y se te impedirá el acceso a los artículos. Esta información es un ejemplo de información de sesión almacenada en cookies.

### Notificaciones y comunicación

Los servidores pueden enviar notificaciones de tipo general o específicas de usuario a través del propio sitio web o vía correo electrónico, SMS, mensajería instanténea, conversaciones de video u otros servicios de comunicación.

Unos pocos ejemplos incluyen:

- Facebook y Twitter envían mensajes de correoy SMS para notificarte de nuevas comunicaciones.
- Amazon envía con regularidad emails que sugieren productos similares a aquellos comprados o vistos anteriormente y en los que podrías estar interesado.
- Un servidor web podría enviar mensajes de aviso a los administradores del sistema alertandoles de memoria baja en el servidor o de actividades de usuario sospechosas.

> **Nota:** El tipo de notificación más común es una "confirmación de registro". Elige uno cualquiera de los grandes sitios en que estés interesado (Google, Amazon, Instagram, etc.) y crea una cuenta nueva usando tu dirección de correo. En breve recibirás un email de confirmación de registro, o solicitando un acuse de recibo para activar la cuenta.

### Análisis de datos

Un sitio web puede recolectar un montón de datos acerca de los usuarios: qué es lo que buscan, qué compran, qué recomiendan, cuánto tiempo permanecen en cada página. La programación de lado-servidor puede utilizarse para refinar las respuestas basándose en el análisis de estos datos.

Por ejemplo, Amazon y Google anuncian ambos productos basados en búsquedas previas (y adquisiciones).

> **Nota:** Si eres usuario de Facebook vete a tu muro y hecha un ojo a la ristra de entradas. Fíjate como algunas de las entradas no están en orden numérico - en particular las entradas con más "me-gusta" están con frecuencia en lugares más altos de la lista que las entradas más recientes. Echa un ojo también a qué clase de anuncios te están mostrando — podrías ver anuncios de cosas que has mirado en otros sitios. El algoritmo de Facebook para resaltar contenido y anuncios puede ser un poco misterioso, pero está claro que lo que hace depende de lo que te gusta y de tus hábitos de visualización!

## Sumario

Felicidades, has alcanzado el final de primer artículo sobre programación de lado-servidor.

Ahora ya has aprendido que el código de lado-servidor se ejecuta en un servidor web y que su papel principal es controlar _qué_ información se envía al usuario (mientras que el código de lado-cliente gestiona principalmente la estructura y presentación de esos datos al usuario).

También deberías comprender que es útil porque nos permite crear sitios web que distribuyen _de forma eficiente_ información seleccionada dirigida a usuarios individuales y tener una buena idea de algunas de las cosas que podrías ser capaz de hacer cuando seas un programador de lado-servidor.

Finalmente, deberías comprender que el código de lado-servidor se puede escribir en un gran número de lenguajes de programación y que deberías usar un web framework para hacer más fácil el proceso completo.

En un artículo futuro te ayudaremos a escoger el mejor web framework para tu primer sitio; Aunque a continuación te llevaremos a través de las principales interacciones cliente-servidor en un poco más de detalle.

{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}
