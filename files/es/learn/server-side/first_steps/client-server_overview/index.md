---
title: Visión General Cliente-Servidor
slug: Learn/Server-side/First_steps/Client-Server_overview
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

Ahora que conoces el propósito y los beneficios potenciales de la programación de lado-servidor vamos a examinar en detalle lo que ocurre cuando un servidor recibe una "petición dinámica" desde un explorador web. Ya que el código de lado servidor de la mayoría de los sitios web gestiona peticiones y respuestas de formas similares, este artículo te ayudará a entender lo que necesitas hacer para escribir la mayor parte de tu propio código.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        Conocimientos básicos de computación. Noción básica de lo que es un
        servidor.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Comprender lo que son las interacciones cliente-servidor en un sitio web
        dinámico, y en particular que operaciones necesita realizar el código de
        lado servidor.
      </td>
    </tr>
  </tbody>
</table>

No hay código real en el debate porque ¡todavía no hemos seleccionado el framework web que usaremos para escribir nuestro código! Sin embargo este debate sí que es muy relevante incluso ahora, porque el comportamiento descrito debería ser implementado por tu código de lado servidor independientemente de qué lenguaje de programación o framework web hayas seleccionado.

## Servidores Web y HTTP (iniciación)

Los exploradores web se comunican con los [servidores web](/es/docs/Learn/Common_questions/What_is_a_web_server) usando el Protocolo de Transferencia de HyperTexto (**H**yper**T**ext**T**ransfer **P**rotocol [HTTP](/es/docs/Web/HTTP)). Cuando pinchas en un enlace sobre una página web, envías un formulario o ejecutas una búsqueda, el explorador envía una petición (_Request)_ HTTP al servidor.

Esta petición incluye:

- Una URL que identifica el servidor de destino y un recurso (ej. un fichero HTML, un punto de datos particular en el servidor, o una herramienta a ejecutar).
- Un método que define la acción requerida (por ejemplo, obtener un fichero o salvar o actualizar algunos datos). Los diferentes métodos/verbos y sus acciones asociadas se listan debajo:

  - `GET`: Obtener un recurso específico (ej. un fichero HTML que contiene información acerca de un producto o una lista de productos).
  - `POST`: Crear un nuevo recurso (ej. añadir un nuevo artículo a una wiki, añadir un nuevo contacto a una base de datos).
  - `HEAD`: Obtener la información de los metadatos sobre un recurso específico sin obtener el cuerpo entero tal como haría `GET`. Podrías, por ejemplo, usar una petición `HEAD` para encontrar la última vez que un recurso fue actualizado, y a continuación usar la petición `GET` (más "cara") para descargar el recurso sólo si éste ha cambiado.
  - `PUT`: Actualizar un recurso existente (o crear uno nuevo si no existe).
  - `DELETE`: Borrar el recurso específico.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Estos verbos son para tareas menos comunes/avanzadas, por lo que no los trataremos aquí.

- Se puede codificar información adicional con la petición (por ejemplo, datos de un formulario HTML). La información puede ser codificada como:

  - Parámetros URL: Las peticiones `GET` codifican los datos en la URL enviada al servidor añadiendo al final pares nombre/valor — por ejemplo, `http://mysite.com?name=Fred&age=11`. Siempre encontrarás un signo de interrogación(`?`) separando los parámetros URL del resto de la misma, un signo igual (`=`) separando cada nombre de su valor asociado y un ampersand (`&`) separando cada par. Los parámetros URL son inherentemente "inseguros" ya que pueden ser modificados por los usuarios y ser enviados de nuevo. Como consecuencia los parámetros URL/peticiones `GET` no se usan para peticiones de actualización de datos en el servidor.
  - Datos `POST`. Las peticiones `POST` añaden nuevos recursos, cuyos datos están codificados dentro del cuerpo de la petición.
  - Cookies de lado cliente. Los Cookies contienen datos de sesión acerca del cliente, incluyendo las claves que el servidor puede usar para determinar su estado de incio de sesión y los permisos/accesos a los recursos.

Los servidores web esperan los mensajes de petición de los clientes, los procesan cuando llegan y responden al explorador web con un mensaje de respuesta HTTP. La respuesta contiene un [código de estado de respuesta HTTP](/es/docs/Web/HTTP/Status) que indica si la petición ha tenido éxito o no (ej. "`200 OK`" para indicar éxito, "`404 Not Found`" si el resurso no ha podido ser encontrado, "`403 Forbidden`" si el usuario no está autorizado a acceder al recurso, etc). El cuerpo de la respuesta de éxito a una petición `GET` contendría el recurso solicitado.

Cuando se devuelve una página HTML es renderizada por el explorador web. Como parte del procesamiento el explorador puede descubrir enlaces a otros recursos (ej. una página HTML normalmente referencia las páginas JavaScript y CSS), y enviará peticiones HTTP separadas para descargar estos ficheros.

Los sitios web tanto estáticos como dinámicos (abordados en las secciones siguientes) usan exactamente los mismos protocolos/patrones de comunicación.

### Ejemplo de petición/respuesta GET

Puedes realizar una petición `GET` simplemente pinchando sobre un enlace o buscando en un sitio (como la página inicial de un motor de búsquedas). Por ejemplo, la petición HTTP que se envía cuando realizas una búsqueda en MDN del término "visión general cliente servidor" se parecerá mucho al texto que se muestra más abajo (no será idéntica porque algunas partes del mensaje dependen de tu explorador/configuración).

> **Nota:** El formato de los mensajes HTTP está definido en el "estándard web" ([RFC7230](http://www.rfc-editor.org/rfc/rfc7230.txt)). No necesitas conocer este nivel de detalle, pero al menos ¡ahora sabes de donde viene todo esto!

#### La petición

Cada linea de la petición contiene información sobre ella. La primera parte se llama **cabecera** o **header**, y contiene información útil sobre la petición, de la misma manera que un [HTML head](/es/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) contiene información útil sobre un documento (pero no el contenido mismo, que está en el cuerpo):

```
GET https://developer.mozilla.org/en-US/search?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/
Accept-Encoding: gzip, deflate, sdch, br
Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true
```

La primera y segunda líneas contienen la mayoría de la información de la que hemos hablado arriba:

- El tipo de petición (`GET`).
- La URL del recurso de destino (`/en-US/search`).
- Los parámetros URL (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- El destino/host del sitio web (developer.mozilla.org).
- El final de la primera linea también incluye una cadena corta que identifica la versión del protocolo utilizado (`HTTP/1.1`).

La última linea contiene información sobre los cookies del lado cliente — puedes ver que en este caso el cookie incluye un id para gestionar las sesiones (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; ...`).

Las líneas restantes contienen información sobre el explorador web usado y la clase de respuestas que puede manejar. Por ejemplo, puedes ver aquí que:

- Mi explorador (`User-Agent`) es Mozilla Firefox (`Mozilla/5.0`).
- Puede aceptar información comprimida gzip (`Accept-Encoding: gzip`).
- Puede aceptar el conjunto de caracteres especificado (`Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7`) y los idiomas (`Accept-Language: de,en;q=0.7,en-us;q=0.3`).
- La linea `Referer` indica la dirección de la página web que contenía el enlace a este recurso (es decir, el origen de la petición, `https://developer.mozilla.org/en-US/`).

Las peticiones HTTP también pueden tener un cuerpo, pero está vacío en este caso.

#### La respuesta

La primera parte de la respuesta a esta petición se muestra abajo. La cabecera o header contiene información como la siguiente:

- La primera linea incluye el código de respuesta `200 OK`, que nos dice que la petición ha tenido éxito.
- Podemos ver que la respuesta está formateada (`Content-Type`) en modo `text/html`.
- Podemos ver que usa también el conjunto de caracteres UTF-8 (`Content-Type: text/html; charset=utf-8`).
- La cabecera también nos dice lo grande que es (`Content-Length: 41823`).

Al final del mensaje vemos el contenido del **cuerpo** (**body**) — que contiene el HTML real devuelto por la respuesta.

```
HTTP/1.1 200 OK
Server: Apache
X-Backend-Server: developer1.webapp.scl3.mozilla.com
Vary: Accept,Cookie, Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:11:31 GMT
Keep-Alive: timeout=5, max=999
Connection: Keep-Alive
X-Frame-Options: DENY
Allow: GET
X-Cache-Info: caching
Content-Length: 41823
```

```html
<!doctype html>
<html
  lang="en-US"
  dir="ltr"
  class="redesign no-js"
  data-ffo-opensanslight="false"
  data-ffo-opensans="false">
  <head prefix="og: http://ogp.me/ns#">
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <script>
      (function (d) {
        d.className = d.className.replace(/\bno-js/, "");
      })(document.documentElement);
    </script>
    ...
  </head>
</html>
```

El resto de la cabecera de la respuesta incluye información sobre la respuesta (ej. cuándo se generó), el servidor, y cómo espera el explorador manejar la página (ej. la linea `X-Frame-Options: DENY` le dice que al explorador que no está permitido incrustar esta página en un {{htmlelement("iframe")}} en otro sitio).

### Ejemplo de petición/respuesta POST

Un HTTP `POST` se realiza cuando se envía un formulario que contiene información para ser guardada en el servidor.

#### La petición

El texto de abajo muestra la petición HTTP realizada cuando un usuario envía al sitio los detalles de un nuevo perfil. El formato de la petición es casi el mismo que en la petición `GET` del ejemplo mostrado previamente, aunque la primera linea identifica esta petición como `POST`.

```
POST https://developer.mozilla.org/en-US/profiles/hamishwillee/edit HTTP/1.1
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

La principal diferencia es que la URL no tiene parámetros. Como puedes ver, la información del formulario se codifica en el cuerpo de la petición (por ejemplo, el nombre completo del nuevo usuario se establece usando: `&user-fullname=Hamish+Willee`).

#### La respuesta

La respuesta a la petición se muestra abajo. El código de estado "`302 Found`" le dice al explorador que el POST ha tenido éxito, y que debe realizar una segunda petición HTTP para cargar la página especificada en el campo `Location`. La información es de lo contrario similar a la respuesta a una petición `GET`.

```
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

> **Nota:** Las repuestas y las peticiones HTTP mostradas en estos ejemplos fueron capturadas usando la aplicación [Fiddler](https://www.telerik.com/download/fiddler), pero puedes obtener información similar usando sniffers web (ej. <http://web-sniffer.net/>) o usando extensiones del explorador como [HttpFox](https://addons.mozilla.org/en-US/firefox/addon/httpfox/). Puedes probarlo por tí mismo. Usa una de las herramientas enlazadas, y a continuación navega a través de un sitio y edita información del perfil para ver las diferentes peticiones y respuestas. La mayoría de los exploradores modernos también tienen herramientas que monitorizan las peticiciones de red (Por ejemplo, la herramienta [Network Monitor](/es/docs/Tools/Network_Monitor) en Firefox).

## Sitios estáticos

Un _sitio estático_ es aquél que devuelve desde el servidor el mismo contenido establecido de forma fija en el código cada vez que se solicita una página en particular. De manera que si por ejemplo tienes una página sobre un producto en `/static/myproduct1.html` , a todos los usuarios se les devolverá la misma página. Si añades otro producto similar a tu sitio necesitarás añadir otra página (ej. `myproduct2.html`) etc... Esto puede llegar a ser realmente muy poco eficiente — ¿qué sucede cuando alcanzas miles de páginas de productos? Repetirías un montón de código a lo largo de cada página (la plantilla básica de la página, la estructura, etc), y si quisieras cambiar cualquier cosa de la estructura de la página — como añadir una nueva sección de "productos relacionados" por ejemplo — tendrías que cambiar cada página individualmente.

> **Nota:** Los sitios estáticos son excelentes cuando tienes un pequeño número de páginas y quieres enviar el mismo contenido a todos los usuarios. Sin embargo pueden tener un coste de mantenimiento significante a medida que es número de páginas se hace grande.

Recapitulemos cómo funciona ésto, mirando otra vez el diagrama de la arquitectura de un sitio estático que vimos en el anterior artículo.

![A simplified diagram of a static web server.](basic_static_app_server.png)

Cuando un usuario quiere navegar a una página, el explorador envía una petición HTTP `GET` especificando la URL de su página HTML. El servidor recupera el documento solicitado de su sistema de ficheros y devuelve una respuesta HTTP conteniendo el documento y un [código de estado de respuesta HTTP](/es/docs/Web/HTTP/Status) "`200 OK`" (indicando éxito). El servidor podría devolver un código de estado diferente, por ejemplo "`404 Not Found`" si el fichero no está presente en el servidor, o "`301 Moved Permanently`" si el fichero existe pero ha sido redirigido a una localización diferente.

El servidor de un sitio estático sólo tendrá que procesar peticiones GET, ya que el servidor no almacena ningún dato modificable. Tampoco cambia sus respuestas basádonse en los datos de la petición HTTP (ej. parámetros URL o cookies).

Entendiendo cómo funcionan los sitios estáticos es útil sin embargo cuando se aprende programación de lado servidor, porque los sitios dinámicos gestionan las peticiones de ficheros estáticos (CSS, JavaScript, imágenes estáticas, etc.) exactamente de la misma forma.

## Sitios dinámicos

Un _sitio dinámico_ es aquél que puede generar y devolver contenido basándose en la URL y los datos específicos de la petición (en vez de devolver siempre para una URL en particular el mismo fichero especificado en el código de forma fija). Usando el ejemplo de un sitio de productos, el servidor almacenaría "datos" del producto en una base de datos en vez de ficheros HTML individuales. Cuando se reciba una petición HTTP `GET` para un producto, el servidor determina el ID del mismo, extrae los datos de la base y construye la página HTML de la respuesta insertando los datos dentro de la plantilla HTML. Esto tiene una ventaja primordial sobre un sitio estático:

Usar una base de datos permite que la información del producto se almacene de forma eficiente y que se pueda ampliar, modificar y buscar fácilmente.

Usar plantillas HTML hace que sea muy fácil cambiar la estructura HTML, porque sólo se necesita hacer en un sólo lugar, en una única plantilla y no a lo largo de miles de páginas estáticas.

### Anatomía de una petición dinámica

Esta sección proporciona una visión general paso a paso de un ciclo de petición y respuesta HTTP "dinámicas", construyendo con más detalle lo que vimos en el último artículo. Para "hacer cosas reales" usaremos el contexto del sitio web de un manager de equipos deportivos donde un entrenador puede seleccionar el nombre y tamaño de su equipo en un formulario HTML y obtener de vuelta una sugerencia de "mejor alineación" para el próximo partido.

El diagrama de abajo muestra los elementos principales del sitio web del "entrenador del equipo", junto con etiquetas numeradas de la secuencia de operaciones cuando el entrenador accede a su lista de "mejor equipo". Las partes del sitio que lo hacen dinámico son las _Aplicaciones Web_ (que es como llamaremos al código del lado servidor que procesa las peticiones HTTP y devuelve respuestas HTTP), la _Base de Datos_, que contiene la información sobre los jugadores, equipos, entrenadores y sus relaciones, y las _Plantillas HTML_.

![This is a diagram of a simple web server with step numbers for each of step of the client-server interaction.](web_application_with_html_and_steps.png)

Después de que el entrenador envíe el formulario con el nombre del equipo y el número de jugadores, la secuencia de operaciones es la siguiente:

1. El explorador web crea una petición HTTP `GET` al servidor usando la URL base del recurso (`/best`) y codifica el equipo y número de jugadores como parámetros URL (ej. `/best?team=my_team_name&show=11)` o formando parte de un patrón URL (ej. `/best/my_team_name/11/`). Se usa una petición `GET` porque la petición sólo recoge datos (no modifica ninguno).
2. El S*ervidor Web* detecta que la petición es "dinámica" y la reenvía a la _Aplicación_ para que la procese (el servidor web determina como manejar diferentes URLs basándose en reglas de emparejamiento de patrones definidas en su configuración).
3. La _Aplicación Web_ identifica que la intención de la petición es obtener la "lista del mejor equipo" basándose en la URL (`/best/`) y encuentra el nombre del equipo y el número de jugadores requeridos a partir de la URL. La _Aplicación Web_ obtiene entonces la información solicitada de la base de datos (usando parámetros "internos" adicionales que definen qué jugadores son los "mejores", y posiblemente también obteniendo la identidad del entrenador que ha iniciado sesión a partir de un cookie del lado cliente).
4. La _Aplicación Web_ crea dinámicamente una página HTML por medio de colocar los datos (de la _base_) en marcadores de posición dentro de la plantilla HTML.
5. La _Aplicación Web_ devuelve el HTML generado al explorador web (via el _Servidor Web_), junto con un código de estado HTTP de 200 ("éxito"). Si algo impide que se pueda devolver el HTML entonces la _Aplicación Web_ devolverá otro código — por ejemplo "404" para indicar que el equipo no existe.
6. El Explorador Web comenzará a continuación a procesar el HTML devuelto, enviando peticiones separadas para obtener cualquier otro fichero CSS o JavaScript que sea referenciado (ver paso 7).
7. El Servidor Web carga ficheros estáticos del sistema de ficheros y los devuelve al explorador directamente (de nuevo, la gestión correcta de los ficheros está basada en las reglas de configuración y de emparejamiento de patrones URL).

La operación de actualizar un registro de la base de datos se gestionaría de forma similar, excepto que, como para cualquier actualización de la base de datos, la petición HTTP desde el explorador debería ser codificada como petición `POST`.

### Realización de otros trabajos

La misión de una _Aplicación Web_ es recibir peticiones HTTP y devolver respuestas HTTP. Mientras que interactuar con la base datos para obtener o actualizar información son tareas muy comunes, el código puede hacer otras cosas al mismo tiempo, o no interactuar con una base de datos en absoluto.

Un buen ejemplo de una tarea adicional que una _Aplicación Web_ podría realizar sería el envío de un correo electrónico a los usuarios para confirmar su registro en el sitio. El sito podría también realizar logging u otras operaciones.

### Devolución de alguna otra cosa distinta a HTML

El código lado servidor de un sitio web no tiene que devolver fragmentos/ficheros HTML en la respuesta. Puede en vez de eso crear dinámicamente y devolver otros tipos de ficheros (texto, PDF, CSV, etc.) o incluso datos (jSON, XML, etc.).

La idea de devolver datos a un explorador web de forma que pueda actualizar su propio contenido dinámicamente ({{glossary("AJAX")}}) ha estado dando vueltas durante bastante tiempo. Más recientemente han llegado a ser muy populares las "apps de una sola página", donde el sitio web entero está escrito con un solo fichero HTML que es actualizado dinámicamente cuando se necesita. Los sitios web creados usando este estilo de aplicación transfieren una gran parte del coste computacional desde el servidor al explorador web, y pueden dar como resultado sitios web que se comportan mucho más como aplicaciones nativas (con una respuesta rápida "highly responsive", etc.).

## Los frameworks Web simplifican la programación de lado servidor

Los frameworks de lado servidor hacen mucho más fácil escribir código para gestionar las operaciones descritas más arriba.

Una de las operaciones más importantes que realizan es proporcionar mecanismos simples para mapear las URLs de diferentes recursos/páginas a funciones para su gestión específicas. Esto hace más fácil mantener separado el código asociado con cada recurso. Esto tiene también beneficios en términos de mantenimiento, ya que puedes cambiar la URL usada para entregar una característica particular en un sitio, sin tener que cambiar la función de gestión.

Por ejemplo, considera el siguiente código Django (Python) que mapea dos patrones URL a dos funciones de visualización. El primer patrón asegura que una petición HTTP con una URL de `/best` sea pasada a la función llamada `index()` en el módulo `views`. En cambio, una petición que tiene el patrón "`/best/junior`", se pasará a la función de visualización `junior()`.

```python
# file: best/urls.py
#

from django.conf.urls import url

from . import views

urlpatterns = [
    # example: /best/
    url(r'^$', views.index),
    # example: /best/junior/
    url(r'^junior/$', views.junior),
]
```

> **Nota:** El primer parámetro en las funciones `url()` puede parecer un poco extraño (ej. `r'^junior/$'`) porque usan una técnica de emparejamiento de patrones llamada "expresiones regulares" ("regular expressions", RegEx, o RE). No necesitas saber cómo funcionan las expresiones regulares en este momento, tan sólo que nos permiten emparejar patrones en el URL (en vez de los valores insertados en el código de forma fija que veíamos más arriba) y los usan como parámetros en nuestras funciones de visualización. Como ejemplo, una RegEx simple podría decir "empareja una simple letra mayúscula, seguida de entre 4 y 7 letras minúsculas."

El framework web también hace fácil a una función de visualización extraer información de la base de datos. La estructura de nuestros datos está definida en modelos, que son las clases Python que definen los campos que serán almacenados en la base de datos subyacente. Si tenemos un modelo llamado _Team_ con un campo de "_team_type_" podemos usar un query de sintaxis simple para recuperar todos los equipos que son de un tipo particular.

Los ejemplos de abajo recuperan una lista de todos los equipos que tienen el `team_type` de "junior" exacto (teniendo en cuenta la capitalización, mayúsculas o minúsculas) — nota de formato: el nombre del campo (`team_type`) seguido de un guión bajo doble, y a continuación el tipo de emparejamiento a usar (en este caso `exact`). Hay muchos otros tipos de emparejamiento y podemos encadenarlos fácilmente. Podemos controlar el orden y número de resultados que se devuelven.

```python
#best/views.py

from django.shortcuts import render

from .models import Team


def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Después de que la función `junior()` obtenga la lista de equipos junior, llama a la función `render()`, pasándole el `HttpRequest` original, una plantilla HTML, y un objeto "contexto" que define la información a ser incluida en la plantilla. La función `render()` es una función de conveniencia que genera HTML usando un contexto y una plantilla HTML, y devuelve un objeto `HttpResponse`.

Obviamente los frameworks web pueden ayudarte con un monton de otras tareas. Debatiremos sobre un montón más de beneficios y opciones de frameworks web en el próximo artículo.

## Sumario

En este punto deberías tener una buena visión general de las operaciones que el código de lado servidor tiene que realizar, y conocer algunas de las formas en que un framework web de lado servidor las puede hacer más fáciles.

En el módulo siguiente te ayudaremos a elegir el mejor Framework Web para tu primer sitio.

{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
