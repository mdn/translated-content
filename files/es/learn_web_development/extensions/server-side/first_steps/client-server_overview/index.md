---
title: Descripción general de cliente-servidor
slug: Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Ahora que conoces el propósito y los beneficios potenciales de la programación del lado del servidor, vamos a examinar en detalle qué ocurre cuando un servidor recibe una "solicitud dinámica" de un navegador. Dado que la mayoría del código del lado del servidor de los sitios web gestiona las solicitudes y respuestas de formas similares, esto te ayudará a entender lo que necesitas hacer al escribir la mayor parte de tu propio código.

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
        Comprender las interacciones cliente-servidor en un sitio web
        dinámico, y en particular qué operaciones debe realizar el código
        del lado del servidor.
      </td>
    </tr>
  </tbody>
</table>

No hay código real en el debate porque ¡todavía no hemos elegido un framework web para escribir nuestro código! Sin embargo, este debate sigue siendo muy relevante, porque el comportamiento descrito debe estar implementado por tu código del lado del servidor, independientemente del lenguaje de programación o framework web que elijas.

## Servidores web y HTTP (una introducción)

Los navegadores web se comunican con [servidores web](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) usando el **P**rotocolo de **T**ransferencia de **H**iper**T**exto ([HTTP](/es/docs/Web/HTTP)). Cuando haces clic en un enlace de una página web, envías un formulario o realizas una búsqueda, el navegador envía una _solicitud HTTP_ al servidor.

Esta solicitud incluye:

- Una URL que identifica el servidor de destino y el recurso (por ejemplo, un archivo HTML, un dato en particular del servidor, o una herramienta a ejecutar).
- Un método que define la acción requerida (por ejemplo, obtener un archivo, o guardar o actualizar algunos datos). Los diferentes métodos/verbos y sus acciones asociadas se listan a continuación:
  - `GET`: Obtiene un recurso específico (por ejemplo, un archivo HTML con información sobre un producto, o una lista de productos).
  - `POST`: Crea un nuevo recurso (por ejemplo, añade un nuevo artículo a una wiki, añade un nuevo contacto a una base de datos).
  - `HEAD`: Obtiene la información de metadatos sobre un recurso específico sin obtener el cuerpo, como haría `GET`. Podrías usar, por ejemplo, una solicitud `HEAD` para averiguar la última vez que un recurso fue actualizado, y usar solo la solicitud `GET` (más "costosa") para descargarlo si ha cambiado.
  - `PUT`: Actualiza un recurso existente (o crea uno nuevo si no existe).
  - `DELETE`: Elimina el recurso especificado.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Estos verbos son para tareas menos comunes/avanzadas, así que no los trataremos aquí.

- Se puede codificar información adicional junto con la solicitud (por ejemplo, datos de un formulario HTML). La información puede codificarse como:
  - Parámetros de URL: las solicitudes `GET` codifican los datos en la URL enviada al servidor añadiendo pares nombre/valor al final de esta — por ejemplo, `http://example.com?name=Fred&age=11`. Siempre hay un signo de interrogación (`?`) que separa el resto de la URL de los parámetros de URL, un signo igual (`=`) que separa cada nombre de su valor asociado, y un ampersand (`&`) que separa cada par. Los parámetros de URL son inherentemente "inseguros", ya que los usuarios pueden modificarlos y volver a enviarlos. Como consecuencia, los parámetros de URL/solicitudes `GET` no se usan para solicitudes que actualizan datos en el servidor.
  - Datos `POST`. Las solicitudes `POST` añaden nuevos recursos, cuyos datos se codifican dentro del cuerpo de la solicitud.
  - Cookies del lado del cliente. Las cookies contienen datos de sesión sobre el cliente, incluyendo claves que el servidor puede usar para determinar su estado de inicio de sesión y sus permisos/accesos a los recursos.

Los servidores web esperan los mensajes de solicitud de los clientes, los procesan cuando llegan, y responden al navegador web con un mensaje de respuesta HTTP. La respuesta contiene un [código de estado de respuesta HTTP](/es/docs/Web/HTTP/Reference/Status) que indica si la solicitud tuvo éxito o no (por ejemplo, {{HTTPStatus("200", "200 OK")}} en caso de éxito, {{HTTPStatus("404", "404 Not Found")}} si el recurso no se puede encontrar, {{HTTPStatus("403", "403 Forbidden")}} si el usuario no está autorizado a ver el recurso, etc.). El cuerpo de la respuesta a una solicitud `GET` exitosa contiene el recurso solicitado.

Cuando se devuelve una página HTML, el navegador web la renderiza. Como parte del procesamiento, el navegador puede descubrir enlaces a otros recursos (por ejemplo, una página HTML normalmente hace referencia a archivos JavaScript y CSS), y enviará solicitudes HTTP separadas para descargar esos archivos.

Tanto los sitios web estáticos como los dinámicos (que se tratan en las siguientes secciones) usan exactamente el mismo protocolo/patrones de comunicación.

### Ejemplo de solicitud/respuesta GET

Puedes hacer una simple solicitud `GET` haciendo clic en un enlace o buscando en un sitio (como la página principal de un motor de búsqueda). Por ejemplo, la solicitud HTTP que se envía cuando realizas una búsqueda en MDN del término "descripción general de cliente-servidor" se parecerá mucho al texto que se muestra a continuación (no será idéntica porque partes del mensaje dependen de tu navegador/configuración).

> [!NOTE]
> El formato de los mensajes HTTP está definido en un "estándar web" ([RFC9110](https://httpwg.org/specs/rfc9110.html#messages)). No necesitas conocer este nivel de detalle, ¡pero al menos ahora sabes de dónde viene todo esto!

#### La solicitud

Cada línea de la solicitud contiene información sobre ella. La primera parte se llama el **encabezado**, y contiene información útil sobre la solicitud, de la misma manera que un [encabezado HTML](/es/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata) contiene información útil sobre un documento HTML (pero no el contenido en sí, que está en el cuerpo):

```http
GET /en-US/search?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/
Accept-Encoding: gzip, deflate, sdch, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true
```

La primera y segunda líneas contienen la mayor parte de la información que mencionamos antes:

- El tipo de solicitud (`GET`).
- La URL del recurso de destino (`/en-US/search`).
- Los parámetros de URL (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- El sitio web de destino/host (developer.mozilla.org).
- El final de la primera línea también incluye una cadena corta que identifica la versión específica del protocolo (`HTTP/1.1`).

La última línea contiene información sobre las cookies del lado del cliente — puedes ver que en este caso la cookie incluye un id para gestionar sesiones (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …`).

Las líneas restantes contienen información sobre el navegador usado y el tipo de respuestas que puede manejar.
Por ejemplo, aquí puedes ver que:

- Mi navegador (`User-Agent`) es Mozilla Firefox (`Mozilla/5.0`).
- Puede aceptar información comprimida con gzip (`Accept-Encoding: gzip`).
- Puede aceptar los idiomas especificados (`Accept-Language: en-US,en;q=0.8,es;q=0.6`).
- La línea `Referer` indica la dirección de la página web que contenía el enlace a este recurso (es decir, el origen de la solicitud, `https://developer.mozilla.org/en-US/`).

Las solicitudes HTTP también pueden tener un cuerpo, pero en este caso está vacío.

#### La respuesta

La primera parte de la respuesta a esta solicitud se muestra a continuación. El encabezado contiene información como la siguiente:

- La primera línea incluye el código de respuesta `200 OK`, que nos indica que la solicitud tuvo éxito.
- Podemos ver que la respuesta tiene formato `text/html` (`Content-Type`).
- También podemos ver que usa el conjunto de caracteres UTF-8 (`Content-Type: text/html; charset=utf-8`).
- El encabezado también nos indica su tamaño (`Content-Length: 41823`).

Al final del mensaje vemos el contenido del **cuerpo** — que contiene el HTML real devuelto por la solicitud.

```http
HTTP/1.1 200 OK
Server: Apache
X-Backend-Server: developer1.webapp.scl3.mozilla.com
Vary: Accept, Cookie, Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:11:31 GMT
Keep-Alive: timeout=5, max=999
Connection: Keep-Alive
X-Frame-Options: DENY
Allow: GET
X-Cache-Info: caching
Content-Length: 41823

<!doctype html>
<html lang="en-US" dir="ltr" class="redesign no-js" data-ffo-opensanslight=false data-ffo-opensans=false >
<head prefix="og: http://ogp.me/ns#">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <script>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);</script>
  …
```

El resto del encabezado de la respuesta incluye información sobre la respuesta (por ejemplo, cuándo se generó), el servidor, y cómo espera que el navegador maneje la página (por ejemplo, la línea `X-Frame-Options: DENY` le indica al navegador que no permita que esta página se incruste en un {{htmlelement("iframe")}} en otro sitio).

### Ejemplo de solicitud/respuesta POST

Se hace una solicitud HTTP `POST` cuando envías un formulario con información que se debe guardar en el servidor.

#### La solicitud

El texto a continuación muestra la solicitud HTTP hecha cuando un usuario envía los datos de un nuevo perfil en este sitio. El formato de la solicitud es casi el mismo que el del ejemplo de solicitud `GET` mostrado previamente, aunque la primera línea identifica esta solicitud como un `POST`.

```http
POST /en-US/profiles/hamishwillee/edit HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Content-Length: 432
Pragma: no-cache
Cache-Control: no-cache
Origin: https://developer.mozilla.org
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/profiles/hamishwillee/edit
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; _gat=1; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _ga=GA1.2.1688886003.1471911953; ffo=true

csrfmiddlewaretoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT&user-username=hamishwillee&user-fullname=Hamish+Willee&user-title=&user-organization=&user-location=Australia&user-locale=en-US&user-timezone=Australia%2FMelbourne&user-irc_nickname=&user-interests=&user-expertise=&user-twitter_url=&user-stackoverflow_url=&user-linkedin_url=&user-mozillians_url=&user-facebook_url=
```

La principal diferencia es que la URL no tiene parámetros. Como puedes ver, la información del formulario se codifica en el cuerpo de la solicitud (por ejemplo, el nuevo nombre completo del usuario se establece usando: `&user-fullname=Hamish+Willee`).

#### La respuesta

La respuesta a la solicitud se muestra a continuación. El código de estado `302 Found` le indica al navegador que el POST tuvo éxito, y que debe emitir una segunda solicitud HTTP para cargar la página especificada en el campo `Location`. La información es por lo demás similar a la de la respuesta a una solicitud `GET`.

```http
HTTP/1.1 302 FOUND
Server: Apache
X-Backend-Server: developer3.webapp.scl3.mozilla.com
Vary: Cookie
Vary: Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:38:13 GMT
Location: https://developer.mozilla.org/en-US/profiles/hamishwillee
Keep-Alive: timeout=5, max=1000
Connection: Keep-Alive
X-Frame-Options: DENY
X-Cache-Info: not cacheable; request wasn't a GET or HEAD
Content-Length: 0
```

> [!NOTE]
> Las solicitudes y respuestas HTTP mostradas en estos ejemplos se capturaron usando la aplicación [Fiddler](https://www.telerik.com/download/fiddler), pero puedes obtener información similar usando analizadores web (por ejemplo, [WebSniffer](https://websniffer.com/)) o analizadores de paquetes como [Wireshark](https://www.wireshark.org/). Puedes probarlo tú mismo. Usa cualquiera de las herramientas enlazadas y luego navega por un sitio y edita la información de un perfil para ver las diferentes solicitudes y respuestas. La mayoría de los navegadores modernos también tienen herramientas que monitorizan las solicitudes de red (por ejemplo, la herramienta [Monitor de red](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) de Firefox).

## Sitios estáticos

Un _sitio estático_ es aquel que devuelve el mismo contenido codificado de forma fija desde el servidor cada vez que se solicita un recurso en particular. Así, por ejemplo, si tienes una página sobre un producto en `/static/my-product1.html`, esta misma página se devolverá a todos los usuarios. Si añades otro producto similar a tu sitio, necesitarás añadir otra página (por ejemplo, `my-product2.html`) y así sucesivamente. Esto puede empezar a ser realmente ineficiente — ¿qué sucede cuando llegas a miles de páginas de productos? Repetirías mucho código en cada página (la plantilla básica de la página, la estructura, etc.), y si quisieras cambiar algo de la estructura de la página — como añadir una nueva sección de "productos relacionados", por ejemplo — tendrías que cambiar cada página individualmente.

> [!NOTE]
> Los sitios estáticos son excelentes cuando tienes un número reducido de páginas y quieres enviar el mismo contenido a todos los usuarios. Sin embargo, pueden tener un costo de mantenimiento significativo a medida que el número de páginas se hace más grande.

Recapitulemos cómo funciona esto, mirando de nuevo el diagrama de arquitectura de sitio estático que vimos en el artículo anterior.

![Un diagrama simplificado de un servidor web estático.](basic_static_app_server.png)

Cuando un usuario quiere navegar a una página, el navegador envía una solicitud HTTP `GET` especificando la URL de su página HTML. El servidor recupera el documento solicitado de su sistema de archivos y devuelve una respuesta HTTP que contiene el documento y un [código de estado de respuesta HTTP](/es/docs/Web/HTTP/Reference/Status) `200 OK` (que indica éxito). El servidor podría devolver un código de estado diferente, por ejemplo `404 Not Found` si el archivo no está presente en el servidor, o `301 Moved Permanently` si el archivo existe pero ha sido redirigido a otra ubicación.

El servidor de un sitio estático solo necesitará procesar solicitudes GET, porque el servidor no almacena ningún dato modificable. Tampoco cambia sus respuestas basándose en los datos de la solicitud HTTP (por ejemplo, parámetros de URL o cookies).

Aun así, entender cómo funcionan los sitios estáticos es útil al aprender programación del lado del servidor, porque los sitios dinámicos manejan las solicitudes de archivos estáticos (CSS, JavaScript, imágenes estáticas, etc.) exactamente de la misma manera.

## Sitios dinámicos

Un _sitio dinámico_ es aquel que puede generar y devolver contenido según la URL y los datos específicos de la solicitud (en lugar de devolver siempre el mismo archivo codificado de forma fija para una URL en particular). Usando el ejemplo de un sitio de productos, el servidor almacenaría los "datos" del producto en una base de datos en lugar de en archivos HTML individuales. Al recibir una solicitud HTTP `GET` para un producto, el servidor determina el ID del producto, obtiene los datos de la base de datos, y luego construye la página HTML de la respuesta insertando los datos en una plantilla HTML. Esto tiene grandes ventajas sobre un sitio estático:

Usar una base de datos permite almacenar la información del producto de forma eficiente, fácilmente ampliable, modificable y buscable.

Usar plantillas HTML hace que sea muy fácil cambiar la estructura HTML, porque esto solo debe hacerse en un lugar, en una única plantilla, y no en potencialmente miles de páginas estáticas.

### Anatomía de una solicitud dinámica

Esta sección ofrece una descripción general paso a paso del ciclo de solicitud y respuesta HTTP "dinámica", construyendo sobre lo que vimos en el artículo anterior con mucho más detalle. Para "mantener las cosas reales", usaremos el contexto del sitio web de un mánager de un equipo deportivo, donde un entrenador puede elegir el nombre y el tamaño de su equipo en un formulario HTML y obtener a cambio una "mejor alineación" sugerida para su próximo partido.

El siguiente diagrama muestra los elementos principales del sitio web del "entrenador de equipo", junto con etiquetas numeradas para la secuencia de operaciones cuando el entrenador accede a su lista de "mejor equipo". Las partes del sitio que lo hacen dinámico son la _aplicación web_ (así es como nos referiremos al código del lado del servidor que procesa las solicitudes HTTP y devuelve respuestas HTTP), la _base de datos_, que contiene información sobre jugadores, equipos, entrenadores y sus relaciones, y las _plantillas HTML_.

![Este es un diagrama de un servidor web simple con números de paso para cada etapa de la interacción cliente-servidor.](web_application_with_html_and_steps.png)

Después de que el entrenador envía el formulario con el nombre del equipo y el número de jugadores, la secuencia de operaciones es:

1. El navegador web crea una solicitud HTTP `GET` al servidor usando la URL base para el recurso (`/best`) y codificando el equipo y el número de jugadores como parámetros de URL (por ejemplo, `/best?team=my_team_name&show=11`) o como parte del patrón de URL (por ejemplo, `/best/my_team_name/11/`). Se usa una solicitud `GET` porque la solicitud solo obtiene datos (no los modifica).
2. El _servidor web_ detecta que la solicitud es "dinámica" y la reenvía a la _aplicación web_ para su procesamiento (el servidor web determina cómo manejar diferentes URL según las reglas de coincidencia de patrones definidas en su configuración).
3. La _aplicación web_ identifica que la _intención_ de la solicitud es obtener la "lista del mejor equipo" según la URL (`/best/`) y averigua el nombre del equipo y el número de jugadores requeridos a partir de la URL. La _aplicación web_ luego obtiene la información requerida de la base de datos (usando parámetros "internos" adicionales para definir qué jugadores son los "mejores", y posiblemente también obteniendo la identidad del entrenador que inició sesión a partir de una cookie del lado del cliente).
4. La _aplicación web_ crea dinámicamente una página HTML colocando los datos (de la _base de datos_) en marcadores de posición dentro de una plantilla HTML.
5. La _aplicación web_ devuelve el HTML generado al navegador web (a través del _servidor web_), junto con un código de estado HTTP de 200 ("éxito"). Si algo impide que se devuelva el HTML, entonces la _aplicación web_ devolverá otro código — por ejemplo, "404" para indicar que el equipo no existe.
6. El navegador web entonces empezará a procesar el HTML devuelto, enviando solicitudes separadas para obtener cualquier otro archivo CSS o JavaScript al que haga referencia (ver paso 7).
7. El servidor web carga archivos estáticos desde el sistema de archivos y los devuelve al navegador directamente (de nuevo, el manejo correcto de los archivos se basa en las reglas de configuración y la coincidencia de patrones de URL).

Una operación para actualizar un registro en la base de datos se manejaría de forma similar, excepto que, como con cualquier actualización de base de datos, la solicitud HTTP del navegador debería codificarse como una solicitud `POST`.

### Realizar otro trabajo

El trabajo de una _aplicación web_ es recibir solicitudes HTTP y devolver respuestas HTTP. Aunque interactuar con una base de datos para obtener o actualizar información son tareas muy comunes, el código puede hacer otras cosas al mismo tiempo, o no interactuar con una base de datos en absoluto.

Un buen ejemplo de una tarea adicional que podría realizar una _aplicación web_ sería enviar un correo electrónico a los usuarios para confirmar su registro en el sitio. El sitio también podría realizar registro de eventos (logging) u otras operaciones.

### Devolver algo distinto de HTML

El código del lado del servidor de un sitio web no tiene que devolver fragmentos/archivos HTML en la respuesta. En su lugar, puede crear y devolver dinámicamente otros tipos de archivos (texto, PDF, CSV, etc.) o incluso datos (JSON, XML, etc.).

Esto es especialmente relevante para los sitios web que funcionan obteniendo contenido del servidor mediante JavaScript y actualizando la página dinámicamente, en lugar de cargar siempre una nueva página cuando se debe mostrar contenido nuevo. Consulta [Hacer solicitudes de red con JavaScript](/es/docs/Learn_web_development/Core/Scripting/Network_requests) para más información sobre la motivación de este enfoque, y cómo se ve este modelo desde el punto de vista del cliente.

## Los frameworks web simplifican la programación web del lado del servidor

Los frameworks web del lado del servidor facilitan mucho la escritura de código para manejar las operaciones descritas anteriormente.

Una de las operaciones más importantes que realizan es proporcionar mecanismos simples para asignar URL de diferentes recursos/páginas a funciones controladoras específicas. Esto facilita mantener separado el código asociado con cada tipo de recurso. También tiene beneficios en términos de mantenimiento, porque puedes cambiar la URL usada para ofrecer una característica en particular en un solo lugar, sin tener que cambiar la función controladora.

Por ejemplo, considera el siguiente código de Django (Python) que asigna dos patrones de URL a dos funciones de vista. El primer patrón asegura que una solicitud HTTP con una URL de recurso `/best` se pase a una función llamada `index()` en el módulo `views`. Una solicitud que tenga el patrón `/best/junior` se pasará en cambio a la función de vista `junior()`.

```python
# archivo: best/urls.py
#

from django.conf.urls import url

from . import views

urlpatterns = [
    # ejemplo: /best/
    url(r'^$', views.index),
    # ejemplo: /best/junior/
    url(r'^junior/$', views.junior),
]
```

> [!NOTE]
> Los primeros parámetros en las funciones `url()` pueden parecer un poco extraños (por ejemplo, `r'^junior/$'`) porque usan una técnica de coincidencia de patrones llamada "expresiones regulares" (RegEx, o RE). No necesitas saber cómo funcionan las expresiones regulares en este punto, más allá de que nos permiten hacer coincidir patrones en la URL (en lugar de los valores codificados de forma fija de arriba) y usarlos como parámetros en nuestras funciones de vista. Como ejemplo, una RegEx realmente simple podría decir "coincide con una sola letra mayúscula, seguida de entre 4 y 7 letras minúsculas".

El framework web también facilita que una función de vista obtenga información de la base de datos. La estructura de nuestros datos está definida en modelos, que son clases de Python que definen los campos que se almacenarán en la base de datos subyacente. Si tenemos un modelo llamado _Team_ con un campo "_team_type_", entonces podemos usar una sintaxis de consulta simple para obtener todos los equipos que tienen un tipo en particular.

El siguiente ejemplo obtiene una lista de todos los equipos que tienen el `team_type` exacto (distingue mayúsculas de minúsculas) de "junior" — nota el formato: el nombre del campo (`team_type`) seguido de un doble guion bajo, y luego el tipo de coincidencia a usar (en este caso, `exact`). Hay muchos otros tipos de coincidencia y podemos encadenarlos. También podemos controlar el orden y el número de resultados devueltos.

```python
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Después de que la función `junior()` obtiene la lista de equipos junior, llama a la función `render()`, pasando el `HttpRequest` original, una plantilla HTML, y un objeto "contexto" que define la información que se incluirá en la plantilla. La función `render()` es una función de conveniencia que genera HTML usando un contexto y una plantilla HTML, y lo devuelve en un objeto `HttpResponse`.

Obviamente, los frameworks web pueden ayudarte con muchas otras tareas. Analizamos muchos más beneficios y algunas opciones populares de frameworks web en el próximo artículo.

## Resumen

En este punto deberías tener una buena descripción general de las operaciones que debe realizar el código del lado del servidor, y conocer algunas de las formas en que un framework web del lado del servidor puede facilitarlo.

En un módulo siguiente te ayudaremos a elegir el mejor framework web para tu primer sitio.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
