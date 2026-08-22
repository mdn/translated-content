---
title: Introducción al lado del servidor
short-title: Introducción
slug: Learn_web_development/Extensions/Server-side/First_steps/Introduction
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}

¡Bienvenido al curso para principiantes de programación del lado del servidor de MDN! En este primer artículo, veremos la programación del lado del servidor desde un punto de vista general, respondiendo preguntas como "¿qué es?", "¿en qué se diferencia de la programación del lado del cliente?" y "¿por qué es tan útil?". Después de leer este artículo, comprenderás el poder adicional que la programación del lado del servidor le brinda a los sitios web.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Comprensión básica de qué es un servidor web.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Familiarizarte con qué es la programación del lado del servidor, qué puedes
        hacer con ella y en qué se diferencia de la programación del lado del cliente.
      </td>
    </tr>
  </tbody>
</table>

La mayoría de los sitios web de gran escala usan código del lado del servidor para mostrar dinámicamente diferentes datos cuando se necesita, generalmente extraídos de una base de datos almacenada en un servidor y enviados al cliente para mostrarse mediante algún código (por ejemplo, HTML y JavaScript).

Quizás el beneficio más importante del código del lado del servidor es que te permite adaptar el contenido del sitio web para usuarios individuales. Los sitios dinámicos pueden destacar contenido que sea más relevante según las preferencias y hábitos del usuario. También pueden facilitar el uso del sitio al almacenar preferencias e información personal — por ejemplo reutilizando los datos de una tarjeta de crédito guardados para agilizar pagos posteriores.

Incluso puede permitir la interacción con los usuarios del sitio, enviando notificaciones y actualizaciones por correo electrónico o mediante otros canales. Todas estas capacidades permiten una interacción mucho más profunda con los usuarios.

En el mundo moderno del desarrollo web, se recomienda encarecidamente aprender sobre el desarrollo del lado del servidor.

## ¿Qué es la programación de sitios web del lado del servidor?

Los navegadores web se comunican con [servidores web](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) usando el **P**rotocolo de **T**ransferencia de **H**iper**T**exto ({{glossary("HTTP")}}). Cuando haces clic en un enlace de una página web, envías un formulario o realizas una búsqueda, se envía una **solicitud HTTP** desde tu navegador al servidor de destino.

La solicitud incluye una URL que identifica el recurso afectado, un método que define la acción requerida (por ejemplo, obtener, eliminar o publicar el recurso), y puede incluir información adicional codificada en parámetros de URL (los pares campo-valor enviados mediante una [cadena de consulta](https://en.wikipedia.org/wiki/Query_string)), como datos POST (datos enviados mediante el [método HTTP POST](/es/docs/Web/HTTP/Reference/Methods/POST)), o en {{glossary("Cookie", "cookies")}} asociadas.

Los servidores web esperan mensajes de solicitud del cliente, los procesan cuando llegan, y responden al navegador web con un mensaje de **respuesta HTTP**. La respuesta contiene una línea de estado que indica si la solicitud tuvo éxito o no (por ejemplo, "HTTP/1.1 200 OK" para éxito).

El cuerpo de una respuesta exitosa a una solicitud contendría el recurso solicitado (por ejemplo, una nueva página HTML, o una imagen), que luego podría mostrarse en el navegador web.

### Sitios estáticos

El siguiente diagrama muestra una arquitectura básica de servidor web para un _sitio estático_ (un sitio estático es aquel que devuelve el mismo contenido codificado de forma fija desde el servidor cada vez que se solicita un recurso en particular). Cuando un usuario quiere navegar a una página, el navegador envía una solicitud HTTP "GET" especificando su URL.

El servidor recupera el documento solicitado de su sistema de archivos y devuelve una respuesta HTTP que contiene el documento y un [estado de éxito](/es/docs/Web/HTTP/Reference/Status#respuestas_satisfactorias) (generalmente 200 OK). Si el archivo no puede recuperarse por alguna razón, se devuelve un estado de error (consulta [respuestas de error del cliente](/es/docs/Web/HTTP/Reference/Statu#errores_de_cliente) y [respuestas de error del servidor](/es/docs/Web/HTTP/Reference/Status#errores_de_servidor)).

![Diagrama simplificado de un servidor web estático.](basic_static_app_server.png)

### Sitios dinámicos

Un sitio web dinámico es aquel en el que parte del contenido de la respuesta se genera _dinámicamente_, solo cuando se necesita. En un sitio web dinámico, las páginas HTML normalmente se crean insertando datos de una base de datos en marcadores de posición dentro de plantillas HTML (esta es una forma mucho más eficiente de almacenar grandes cantidades de contenido que usar sitios web estáticos).

Un sitio dinámico puede devolver diferentes datos para una URL según la información proporcionada por el usuario o las preferencias almacenadas, y puede realizar otras operaciones como parte de la devolución de una respuesta (por ejemplo, enviar notificaciones).

La mayor parte del código que da soporte a un sitio web dinámico debe ejecutarse en el servidor. Crear este código se conoce como "**programación del lado del servidor**" (o a veces "**programación del back-end**").

El siguiente diagrama muestra una arquitectura para un _sitio web dinámico_. Como en el diagrama anterior, los navegadores envían solicitudes HTTP al servidor, luego el servidor procesa las solicitudes y devuelve las respuestas HTTP correspondientes.

Las solicitudes de recursos _estáticos_ se manejan de la misma manera que en los sitios estáticos (los recursos estáticos son cualquier archivo que no cambia — típicamente: CSS, JavaScript, imágenes, archivos PDF ya creados, etc.).

![Diagrama simplificado de un servidor web que usa programación del lado del servidor para obtener información de una base de datos y construir HTML a partir de plantillas. Este es el mismo diagrama que aparece en la descripción general de cliente-servidor.](web_application_with_html_and_steps.png)

Las solicitudes de recursos dinámicos se reenvían en cambio (2) al código del lado del servidor (mostrado en el diagrama como una _aplicación web_). Para las "solicitudes dinámicas", el servidor interpreta la solicitud, lee la información necesaria de la base de datos (3), combina los datos obtenidos con plantillas HTML (4), y devuelve una respuesta que contiene el HTML generado (5, 6).

## ¿Son iguales la programación del lado del servidor y del lado del cliente?

Ahora centremos nuestra atención en el código involucrado en la programación del lado del servidor y del lado del cliente. En cada caso, el código es significativamente diferente:

- Tienen propósitos e intereses distintos.
- Generalmente no usan los mismos lenguajes de programación (la excepción es JavaScript, que puede usarse tanto en el lado del servidor como en el del cliente).
- Se ejecutan dentro de entornos de sistema operativo diferentes.

El código que se ejecuta en el navegador se conoce como **código del lado del cliente** y se ocupa principalmente de mejorar la apariencia y el comportamiento de una página web renderizada. Esto incluye seleccionar y aplicar estilos a los componentes de la interfaz de usuario, crear diseños, navegación, validación de formularios, etc. En cambio, la programación de sitios web del lado del servidor se ocupa principalmente de elegir _qué contenido_ se devuelve al navegador en respuesta a las solicitudes. El código del lado del servidor gestiona tareas como validar los datos y solicitudes enviados, usar bases de datos para almacenar y recuperar datos, y enviar los datos correctos al cliente según se requiera.

El código del lado del cliente se escribe usando [HTML](/es/docs/Learn_web_development/Core/Structuring_content), [CSS](/es/docs/Learn_web_development/Core/Styling_basics) y [JavaScript](/es/docs/Learn_web_development/Core/Scripting) — se ejecuta dentro de un navegador web y tiene poco o ningún acceso al sistema operativo subyacente (incluyendo un acceso limitado al sistema de archivos).

Los desarrolladores web no pueden controlar qué navegador usará cada usuario para ver un sitio web — los navegadores ofrecen niveles inconsistentes de compatibilidad con las características del código del lado del cliente, y parte del desafío de la programación del lado del cliente es manejar con elegancia las diferencias en el soporte de los navegadores.

El código del lado del servidor puede escribirse en cualquier cantidad de lenguajes de programación — ejemplos de lenguajes populares para el lado del servidor incluyen PHP, Python, Ruby, C# y JavaScript (NodeJS). El código del lado del servidor tiene acceso completo al sistema operativo del servidor, y el desarrollador puede elegir qué lenguaje de programación (y qué versión específica) desea usar.

Los desarrolladores normalmente escriben su código usando **frameworks web**. Los frameworks web son colecciones de funciones, objetos, reglas y otras construcciones de código diseñadas para resolver problemas comunes, acelerar el desarrollo y simplificar los diferentes tipos de tareas que se enfrentan en un dominio particular.

De nuevo, aunque tanto el código del lado del cliente como el del lado del servidor usan frameworks, los dominios son muy diferentes, y por lo tanto también lo son los frameworks. Los frameworks web del lado del cliente simplifican las tareas de diseño y presentación, mientras que los frameworks web del lado del servidor ofrecen mucha funcionalidad "común" de servidor web que de otro modo tendrías que implementar tú mismo (por ejemplo, soporte para sesiones, soporte para usuarios y autenticación, acceso sencillo a bases de datos, bibliotecas de plantillas, etc.).

> [!NOTE]
> Los frameworks del lado del cliente suelen usarse para acelerar el desarrollo del código del lado del cliente, pero también puedes optar por escribir todo el código a mano; de hecho, escribir tu código a mano puede ser más rápido y eficiente si solo necesitas una interfaz de usuario web pequeña y simple.
>
> En cambio, casi nunca considerarías escribir el componente del lado del servidor de una aplicación web sin un framework — implementar una característica vital como un servidor HTTP es realmente difícil de hacer desde cero, digamos en Python, pero los frameworks web de Python como Django ofrecen uno listo para usar, junto con otras herramientas muy útiles.

## ¿Qué puedes hacer en el lado del servidor?

La programación del lado del servidor es muy útil porque permite entregar información _eficientemente_ adaptada a usuarios individuales, y así crear una experiencia de usuario mucho mejor.

Empresas como Amazon usan la programación del lado del servidor para construir resultados de búsqueda de productos, hacer sugerencias de productos personalizadas según las preferencias y los hábitos de compra previos del cliente, simplificar las compras, etc.

Los bancos usan la programación del lado del servidor para almacenar información de cuentas y permitir que solo los usuarios autorizados vean y realicen transacciones. Otros servicios como Facebook, Twitter, Instagram y Wikipedia usan la programación del lado del servidor para destacar, compartir y controlar el acceso a contenido de interés.

A continuación se enumeran algunos de los usos y beneficios comunes de la programación del lado del servidor. ¡Notarás que hay cierta superposición!

### Almacenamiento y entrega eficiente de información

¿Te imaginas cuántos productos hay disponibles en Amazon, o cuántas publicaciones se han escrito en Facebook? Crear una página estática separada para cada producto o publicación sería completamente impráctico.

La programación del lado del servidor nos permite, en cambio, almacenar la información en una base de datos y construir y devolver dinámicamente HTML y otros tipos de archivos (por ejemplo, PDF, imágenes, etc.). También es posible devolver datos ({{glossary("JSON")}}, {{glossary("XML")}}, etc.) para que sean renderizados por los frameworks web del lado del cliente correspondientes (esto reduce la carga de procesamiento en el servidor y la cantidad de datos que deben enviarse).

El servidor no está limitado a enviar información de bases de datos, y podría en cambio devolver el resultado de herramientas de software, o datos de servicios de comunicación. El contenido incluso puede adaptarse según el tipo de dispositivo cliente que lo recibe.

Debido a que la información está en una base de datos, también puede compartirse y actualizarse más fácilmente con otros sistemas empresariales (por ejemplo, cuando se venden productos ya sea en línea o en una tienda física, la tienda podría actualizar su base de datos de inventario).

> [!NOTE]
> No hace falta esforzar mucho la imaginación para ver el beneficio del código del lado del servidor en el almacenamiento y la entrega eficiente de información:
>
> 1. Ve a [Amazon](https://www.amazon.com/) o algún otro sitio de comercio electrónico.
> 2. Busca varias palabras clave y observa cómo la estructura de la página no cambia, aunque los resultados sí.
> 3. Abre dos o tres productos diferentes. Observa de nuevo cómo tienen una estructura y un diseño en común, pero el contenido de los distintos productos se ha extraído de la base de datos.
>
> Para un término de búsqueda común (digamos "pescado"), puedes ver literalmente millones de resultados devueltos. Usar una base de datos permite almacenarlos y compartirlos de manera eficiente, y permite controlar la presentación de la información desde un solo lugar.

### Experiencia de usuario personalizada

Los servidores pueden almacenar y usar información sobre los clientes para ofrecer una experiencia de usuario conveniente y personalizada. Por ejemplo, muchos sitios almacenan tarjetas de crédito para que no sea necesario ingresar los datos de nuevo. Sitios como Google Maps pueden usar ubicaciones guardadas o actuales para brindar información de rutas, y el historial de búsquedas o viajes para destacar negocios locales en los resultados de búsqueda.

Un análisis más profundo de los hábitos del usuario puede usarse para anticipar sus intereses y personalizar aún más las respuestas y notificaciones, por ejemplo, brindando una lista de ubicaciones visitadas previamente o populares que podrías querer ver en un mapa.

> [!NOTE]
> [Google Maps](https://www.google.com/maps) guarda tu historial de búsquedas y visitas. Las ubicaciones visitadas o buscadas con frecuencia se destacan más que otras.
>
> Los resultados de búsqueda de Google se optimizan según las búsquedas anteriores.
>
> 1. Ve a [la búsqueda de Google](https://www.google.com/).
> 2. Busca "fútbol".
> 3. Ahora intenta escribir "favorito" en el cuadro de búsqueda y observa las predicciones de autocompletado.
>
> ¿Coincidencia? ¡Para nada!

### Acceso controlado al contenido

La programación del lado del servidor permite a los sitios restringir el acceso a usuarios autorizados y ofrecer solo la información que un usuario tiene permitido ver.

Ejemplos del mundo real incluyen los sitios de redes sociales, que permiten a los usuarios determinar quién puede ver el contenido que publican en el sitio, y de quién es el contenido que aparece en su feed.

> [!NOTE]
> Piensa en otros ejemplos reales donde se controla el acceso al contenido. Por ejemplo, ¿qué puedes ver si entras al sitio en línea de tu banco? Inicia sesión en tu cuenta, ¿qué información adicional puedes ver y modificar? ¿Qué información puedes ver que solo el banco puede cambiar?

### Almacenar información de sesión/estado

La programación del lado del servidor permite a los desarrolladores usar **sesiones** — básicamente, un mecanismo que permite a un servidor almacenar información asociada al usuario actual de un sitio y enviar respuestas diferentes según esa información.

Esto permite, por ejemplo, que un sitio sepa que un usuario ha iniciado sesión previamente y muestre enlaces a sus correos o a su historial de pedidos, o quizás guarde el estado de un juego sencillo para que el usuario pueda volver al sitio y continuar donde lo dejó.

> [!NOTE]
> Visita el sitio de un periódico que tenga un modelo de suscripción y abre varias pestañas (por ejemplo, [The Age](https://www.theage.com.au/)). Sigue visitando el sitio durante algunas horas o días. Con el tiempo, comenzarás a ser redirigido a páginas que explican cómo suscribirte, y no podrás acceder a los artículos. Esta información es un ejemplo de información de sesión almacenada en cookies.

### Notificaciones y comunicación

Los servidores pueden enviar notificaciones generales o específicas para un usuario a través del propio sitio web o mediante correo electrónico, SMS, mensajería instantánea, videollamadas u otros servicios de comunicación.

Algunos ejemplos incluyen:

- Facebook y Twitter envían correos electrónicos y mensajes SMS para notificarte de nuevas comunicaciones.
- Amazon envía regularmente correos electrónicos de productos que sugieren artículos similares a los que ya compraste o viste y que podrían interesarte.
- Un servidor web podría enviar mensajes de advertencia a los administradores del sitio alertándolos sobre poca memoria disponible en el servidor, o actividad sospechosa de algún usuario.

> [!NOTE]
> El tipo de notificación más común es una "confirmación de registro". Elige casi cualquier sitio grande que te interese (Google, Amazon, Instagram, etc.) y crea una cuenta nueva usando tu correo electrónico. En poco tiempo recibirás un correo confirmando tu registro, o pidiéndote que lo confirmes para activar tu cuenta.

### Análisis de datos

Un sitio web puede recopilar mucha información sobre los usuarios: qué buscan, qué compran, qué recomiendan, cuánto tiempo permanecen en cada página. La programación del lado del servidor puede usarse para refinar las respuestas según el análisis de estos datos.

Por ejemplo, Amazon y Google anuncian ambos productos según búsquedas (y compras) anteriores.

> [!NOTE]
> Si eres usuario de Facebook, ve a tu feed principal y observa el flujo de publicaciones. Nota cómo algunas publicaciones no siguen un orden cronológico — en particular, las publicaciones con más "me gusta" suelen aparecer más arriba en la lista que publicaciones más recientes.
>
> También fíjate en qué tipo de anuncios te muestran — podrías ver anuncios de cosas que viste en otros sitios. El algoritmo de Facebook para destacar contenido y publicidad puede ser un poco misterioso, pero está claro que depende de tus "me gusta" y hábitos de navegación.

## Resumen

Felicidades, has llegado al final del primer artículo sobre programación del lado del servidor.

Ahora sabes que el código del lado del servidor se ejecuta en un servidor web y que su función principal es controlar _qué_ información se envía al usuario (mientras que el código del lado del cliente se encarga principalmente de la estructura y la presentación de esos datos al usuario).

También deberías comprender que es útil porque nos permite crear sitios web que entregan información _eficientemente_ y adaptada a usuarios individuales, y tener una buena idea de algunas de las cosas que podrías hacer siendo programador del lado del servidor.

Por último, deberías comprender que el código del lado del servidor puede escribirse en varios lenguajes de programación, y que deberías usar un framework web para facilitar todo el proceso.

En un futuro artículo te ayudaremos a elegir el mejor framework web para tu primer sitio. Aquí te explicaremos con un poco más de detalle las principales interacciones cliente-servidor.

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}
