---
title: Frameworks Web de lado servidor
slug: Learn/Server-side/First_steps/Web_frameworks
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}

El artículo anterior te mostró que pinta tiene la comunicación entre los clientes web y los servidores, la naturaleza de las peticiones y respuestas HTTP, y lo que necesita hacer una aplicación web de lado servidor para responder a las peticiones de un explorador web. Con este conocimiento en nuestra mochila, es hora de explorar cómo los frameworks web pueden simplificar estas tareas, y darte una idea de cómo escogerías un framework para tu primera aplicación web de lado servidor.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        <p>
          Conocimientos de computación básicos. Comprensión de alto nivel de
          cómo gestiona y responde a las peticiones HTTP el código de lado
          servidor (ver
          <a
            href="https://developer.mozilla.org/es/docs/Learn/Server-side/Primeros_pasos/Vision_General_Cliente_Servidor"
            >Visión general Cliente-Servidor</a
          >).
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Entender cómo los frameworks web pueden simplificar el
          desarrollo/mantenimiento de código de lado servidor y conseguir que
          los lectores piensen sobre la elección del framework para su propio
          desarrollo.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Las siguientes secciones ilustran algunos puntos usando fragmentos de código tomados de frameworks web reales. No te preocupes si no todo tiene sentido ahora; te pondremos a trabajar sobre el código en nuestros módulos de framework específicos.

## Visión general

Los frameworks de lado servidor (es decir, "los frameworks de aplicaciones web") son frameworks software que hacen más fácil escribir, mantener y escalar aplicaciones web. Proporcionan herramientas y bibliotecas que simplifican tareas comunes de desarrollo web, incluyendo enrutado de URLs a los manejadores apropiados, interactuación con bases de datos, soporte de sesiones y autorizaciones de usuario, formateado de la salida (ej, HTML, JSON, XML), y mejora de la seguridad contra los ataques web.

La sección siguiente proporciona un poco más detalle sobre cómo los frameworks web pueden facilitar el desarrollo de aplicaciones web. Explicaremos a continuación algunos de los criterios que puedes usar para elegir un framework web, y luego hacer una lista de algunas de tus opciones.

## ¿Qué puede hacer por tí un framework web?

Los frameworks web proporcionan herramientas y bibliotecas para simplificar operaciones comunes de desarrollo web. No _tienes_ que usar un framework web de lado servidor, pero se recomienda encarecidamente — te hará la vida mucho más fácil.

Esta sección debate algo de la funcionalidad que proporcionan con frecuencia los frameworks web (!no todo framework proporcionará necesariamente todas estas caracteríticas!)

### Trabajar directamente con peticiones y respuestas HTTP

Como vimos en el último artículo, los servidores web y los exploradores se comunican vía el protocolo HTTP — los servidores esperan las peticiones HTTP del explorador y devuelven información en respuestas HTTP. Los frameworks web te permiten escribir sintaxis simplificada que generará el código de lado servidor para trabajar con estas peticiones y respuestas. Esto significa que tendrás un trabajo más fácil, interacción más fácil, código de más alto nivel en vez de primitivas de red de bajo nivel.

El ejemplo de más abajo muestra cómo funciona ésto en el framework web Django (Python). Cada función de visualización "view" (un manejador de peticiones) recibe un objeto `HttpRequest` que contiene información de petición, y se le pide devolver un objeto `HttpResponse` con la salida formateada (en este caso una cadena de texto).

```python
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Enrutado de peticiones al manejador adecuado

La mayoría de sitios proporcionan un gran número de recursos diferentes, accesibles a través de distintas URLs. La gestión de todo esto en una sola función sería difiicil de mantener, de manera que los frameworks web proporcionan mecanismos simples para mapear patrones URL a funciones de gestión específicas. Esta aproximación tiene también beneficios en términos de mantenimiento, porque puedes cambiar el URL que se usa para entregar una característica en particular sin tener que cambiar el código subyacente.

Diferentes frameworks usan diferentes mencanismos para el mapeo. Por ejemplo, el framework web Flask (Python) añade rutas a las funciones de visualización usando un "decorador".

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Por el contrario Django espera que los desarrolladores definan una lista de mapeos URL entre un patrón URL y una función de visualización.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/myteamname/5/
    url(r'^(?P<team_name>\w.+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Fácil acceso a los datos en la petición

Los datos pueden codificarse en una petición HTTP de muchas maneras. Una petición `GET` para recuperar ficheros o datos de un servidor puede codificar los datos que se necesitan en parámetros URL o dentro de una estructura URL. Una petición `POST` para actualizar un recurso en el servidor puede en cambio incluir la información de actualización como "datos POST" dentro del cuerpo de la petición. La petición HTTP puede también incluir información sobre la sesión o usuario actual en un cookie de lado cliente.

Los frameworks web proporcionan mecanismos apropiados del lenguaje de programación para acceder a esta información. Por ejemplo, el objeto `HttpRequest` que pasa Django a toda función de visualización contiene métodos y propiedades para acceder a la URL de destino, el tipo de petición (ej. HTTP `GET`), parámetros `GET` o `POST`, cookie y datos de session, etc. Django puede también pasar información codificada en la estructura de la URL definiendo "patrones de captura" en el mapeador URL (mira el último fragmento de código de la sección de arriba).

### Abstraer y simplificar el acceso a bases de datos

Los sitios web utilizan bases de datos para almacenar información tanto para ser compartida con los usuarios como sobre los propios usuarios. Los frameworks web proporcionan frecuentemente una capa de base de datos que abstrae las operaciones de lectura, escritura, consulta y borrado de la base. Nos referimos a esta capa de abstracción como Mapeador de Objetos Relacionados (Object-Relational Mapper, ORM).

Usar un ORM tiene dos beneficios:

- Puedes reemplazar la base de datos subyacente sin tener necesariamente que cambiar el código que la usa: Esto permite a los desarrolladores optimizar las características de las diferentes bases de datos en función de su uso.
- la validación básica de datos puede implementarse dentro del framework. Esto hace más fácil y seguro comprobar que los datos se almacenan en el campo correcto de la base, que tienen el formato adecuado (ej. una dirección de correo electrónico), y que no son maliciosos de ninguna manera (los craqueadores utilizan ciertos patrones de código para hacer cosas malas como borrar registros de las bases de datos).

Por ejemplo, el framework web de Django proporciona un ORM, y utiliza la referencia del objeto usado para definir la estructura de un registro similar al _modelo_. El modelo especifica los _tipos_ de campos que se almacenarán, lo que puede proporcionar una validación a nivel de campo sobre qué información se puede guardar (ej. un campo de email sólo permitiría direcciones válidas de correo electrónico). Las definiciones de campos pueden también especificar su tamaño máximo, etiquetas de texto para los formularios, etc. El modelo no establece ninguna información sobre la base de datos subyacente ya que ese es un ajuste de configuración que se puede cambiar de forma separada de nuestro código.

El primer fragmento de código más abajo muestra un modelo de Django muy simple para un objeto `Team`. Éste almacena el nombre y nivel del equipo como campos de caracteres y especifica el número máximo de éstos que pueden almacenarse en cada registro. El `team_level` es un campo de selección, de manera que proporcionamos un mapeo entre las opciones a mostrar en pantalla y los datos a almacenar, junto con un valor por defecto.

```python
#best/models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        ...  #list our other teams
    )
    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
```

El modelo de Django proporciona una API de consulta simple para buscar en la base de datos. Ésta puede comprobar coincidencias contra un gran número de campos al mismo tiempo usando diferentes criterios (ej. exacto, insensible a las mayúsculas, mayor que, etc.), y puede soportar sentencias complejas (por ejemplo, puedes especificar una búsqueda de equipos U11 que tengan un nombre de equipo que empiece por "Fr" or finalice con "al").

El segundo fragmento de código muestra una función de visualización (manejador de recurso) para mostrar en pantalla todos nuestros equipos U09. En este caso especificamos que queremos filtrar todos los registros donde el campo `team_level` tenga exactamente el texto 'U09' (fíjate debajo cómo este criterio se pasa como argumento a la función `filter()` con el nombre de campo y tipo de coincidencia separados por guiones bajos dobles: **`team_level__exact`**).

```python
#best/views.py

from django.shortcuts import render
from .models import Team

def youngest(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, 'best/index.html', context)
```

### Renderización de datos

Los frameworks web proporcionan con frecuencia sistemas de plantillas. Éstas te permiten especificar la estructura de un documento de salida, usando marcadores de posición para los datos que serán añadidos cuando se genere la página. Las plantillas se usan con frecuencia para crear HTML, pero también pueden crear otros tipos de documentos.

Los frameworks web proporcionan con frecuencia un mecanismo para facilitar la generación de otros formatos a partir de los datos almacenados, incluyendo {{glossary("JSON")}} y {{glossary("XML")}}.

Por ejemplo, el sistema de plantillas de Django te permite especificar variables usando una sintaxis de "llaves dobles" (ej. `\{{ variable_name }}`), que serán reemplazadas por valores pasados desde la función de visualización cuando la página sea renderizada. El sistema de plantillas también proporciona soporte para expresiones (con la sintaxis: `{% expression %}`), que permite a las plantillas realizar operaciones simples como iterar sobre la lista de valores pasados a la misma.

> **Nota:** Muchos otros sistemas de plantillas usan una sintaxis similar, ej.: Jinja2 (Python), Handlebars (JavaScript), Moustache (JavaScript), etc.

El fragmento de código de abajo muestra como hacer este trabajo. Continuando el ejemplo del "equipo más joven" de la sección anterior, la "view" pasa a la plantilla HTML una variable tipo lista llamada `youngest_teams`. Dentro del esqueleto HTML tenemos una expresión que primero comprueba que la variable `youngest_teams` existe, y luego itera sobre ella en un bucle `for`. En cada iteración la plantilla presenta en pantalla el valor del `team_name` del equipo de uno de los elementos de la lista.

```django
<!-- best/templates/best/index.html -->

<!DOCTYPE html>
<html lang="en">
<body>

 {% if youngest_teams %}
    <ul>
    {% for team in youngest_teams %}
        <li>\{\{ team.team_name \}\}</li>
    {% endfor %}
    </ul>
{% else %}
    <p>No teams are available.</p>
{% endif %}

</body>
</html>
```

## Como escoger un framework web

Existen muchos frameworks web para casi todos los lenguajes de programación que quieras usar (listamos unos pocos de los frameworks más populares en la sección siguiente). Con tantas opciones, llega a ser difícil deducir qué framework proporciona el mejor punto de partida para tu nueva aplicación web.

Algunos de los factores que pueden afectar tu decisión son:

- **Esfuerzo en el aprendizaje:** El esfuerzo en el aprendizaje de un framework web depende de lo familiarizado que estés con el lenguaje de programación subyacente, la consistencia de su API, la calidad de su documentación, y el tamaño y actividad de su comunidad. Si estás partiendo de una nula experiencia en programación, considera entonces Django (es uno de los más fáciles de aprender basándose en los criterios anteriores). Si formas parte de un equipo de desarrolladores que tienen ya una experiencia significante con un framework web o lenguaje de programación en particular tiene sentido entonces que sigas fiel a él.
- **Productividad:** Productividad es una medida de cuán rápido puedes crear nuevas características una vez que te familiarices con el framework, incluidos tanto el esfuerzo para escribir como para mantener el código (ya que puedes escribir nuevas características mientras se rompen las antiguas). Muchos de los factores que afectan a la productividad son similares a los de el "Esfuerzo para aprender" — ej. documentación, comunidad, experiencia en programación, etc. — otros factores incluyen:

  - _Propósito/Origen del framework_: Algunos frameworks web fueron creados inicialmente para resolver ciertos tipos de problemas, y se mantienen _mejor_ en la creación de apllicaciones web con problemática similar. Por ejemplo, Django fue creado para soportar el desarrollo de un sitio web de un periódico, por lo que es bueno para blogs y otros sitios que impliquen la publicación de cosas. Por contra, Flask es un framework de peso mucho más ligero y es fantástico en la creación de aplicaciones web que se ejecuten en dispositivos embebidos.
  - _Dogmático versus No Dogmático_: Un framework dogmático es aquél en el que hay recomendaciones sobre el "mejor" método de resolver un problema en particular. Los frameworks dogmáticos tienden a ser más productivos cuando estás tratando de resolver problemas comunes, porque te llevan en la dirección correcta, sin embargo son menos flexibles a veces.
  - _Con baterías incluidas versus Hazlo tu mismo_: Aalgunos frameworks web incluyen herramientas/bibliotecas que abordan por defecto todos los problemas que sus desarrolladores pueden pensar, mientras que los frameworks más ligeros esperan que los desarrolladores web escojan y elijan las soluciones a sus problemas en bibliotecas separadas (Django es un ejemplo del primero, mientras que Flask es un ejemplo de un framework mucho más ligero). Los frameworks que incluyen todo son con frecuencia más fáciles para empezar con ellos porque ya tienes todo lo que necesitas, y las probabilidades son altas de que esté bien integrado y bien documentado. Sin embargo si un framework más pequeño tiene todo lo que puedas necesitar funcionará en entornos mas constreñidos y tendrán un subconjunto de cosas más pequeñas y más fáciles de aprender.
  - _Si el framework potencia o no buenas prácticas de desarrollo_: Por ejemplo, un framework que promueve una arquitectura [Modelo-View-Controlador](/es/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture) para separar el código en funciones lógicas resultará más mantenible que uno que no tiene espectativas en los desarrolladores. Similarmente, el diseño del framework puede tener un gran impacto en cómo de fácil sea probar y reusar el código.

- **Desempeño del framework/lenguaje de programación:** Normalmente la "velocidad" no es el factor más grande en la selección porque, incluso, con tiempos de ejecución relativamente lentos como Python, son más que suficientemente buenos para sitios de tamaño medio ejecutándose en hardware moderado. Los beneficios percibidos en velocidad de otro lenguaje, ej. C++ o JavaScript, pueden verse compensados por los costes de aprendizaje y mantenimiento.
- **Soporte de Cache:** A medida que tu sitio web adquiere más éxito puedes encontrarte que no sea capaz de soportar el número de peticiones que recibe cuando acceden los usuarios. En este punto puedes considerar añadir soporte de cache. La cache es una optimización en la que almacenas todo o parte de una petición web de manera que no tiene que ser recalculada en subsiguientes peticiones. Devolver una respuesta cacheada es más rápido que calcular una la primera vez. El cacheo puede implementarse en tu código o en el servidor (ver [proxy inverso](https://en.wikipedia.org/wiki/Reverse_proxy)). Los frameworks web tienen diferentes niveles de soporte para definir qué contenido debe ser cacheado.
- **Escalabilidad:** Una vez que tu sitio tenga un éxito fabuloso agotarás los beneficios del cacheo e incluso alcanzarás los límites del _escalado vertical_ (ejecutar tu aplicación en un hardware más potente). En este punto podrás necesitar _escalar horizontalmente_ (compartir la carga distribuyendo tu sitio a lo largo de un número de servidores web o bases de datos) o escalar "geográficamente" porque algunos de tus clientes están localizados muy lejos de tu servidor. El framework web que elijas puede marcar una gran diferencia en cómo de fácil sea escalar tu sitio.
- **Seguridad web:** Algunos frameworks web proporcionan mejor soporte para manejar ataques web comunes. Django por ejemplo desinfecta todas las entradas de los usuarios de las plantillas HTML de manera que el posible código JavaScript introducido por el usuario no pueda ejecutarse. Otros frameworks proporcionan protección similar, pero no siempre está habilitada por defecto.

Hay muchos otros posibles factores, incluyendo licenciamiento, si el framework está bajo desarrollo activo o no, etc.

Si eres un completo principiante en la programación probablemente escogerás tu framework basándote en la "facilidad de aprendizaje". Además de la "facilidad de uso" del lenguaje mismo, la alta calidad de la documentación/tutoriales y una comunidad activa que ayuda a nuevos usuarios son tus recursos más valiosos. Nosotros hemos escogido [Django](https://www.djangoproject.com/) (Python) y [Express](http://expressjs.com/) (Node/JavaScript) para escribir nuestros ejemplos de más adelante en el curso, principalmente porque son fáciles de aprender y tienen un buen soporte.

> **Nota:** Vayamos a los sitios principales de [Django](https://www.djangoproject.com/) (Python) y [Express](http://expressjs.com/) (Node/JavaScript) y comprobemos su documentación y su comunidad.
>
> 1. Navega a los sitios principales (enlazados abajo)
>    - Pincha en los enlaces de los menus de Documentación (cosas que se llaman como "Documentación, Guía, Referencia API, Primeros Pasos".
>    - ¿Puedes ver temas que te muestran como configurar enrutado URL, plantillas y bases de datos/modelos?
>    - ¿Son los documentos suficientemente claros?
> 2. Navega a las listas de correo de cada sitio (accesible desde los enlaces de Comunidad).
>    - ¿Cuántas preguntas se han realizado en unos pocos días recientes?
>    - ¿Cuántas tienen respuestas?
>    - ¿Tienen una comunidad activa?

## ¿Unos pocos frameworks web buenos?

Avancemos ahora, y debatamos unos pocos frameworks web específicos de lado servidor.

Los frameworks de lado servidor de más abajo representan unos pocos de los más populares disponibles en el momento de escribir este artículo. Todos ellos tienen todo lo que necesitas para ser productivo — son de código abierto, están bajo desarrollo activo, tienen comunidades entusiastas creando documentación y ayudando a los usuarios en paneles de debate, y se usan en un gran número de sitios web de perfil alto. Hay muchos otros frameworks de lado servidor fantásticos que puedes descubrir usando una búsqueda básica en internet.

> **Nota:** ¡Las descripciones vienen (parcialmente) de los sitios web de los frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) es un Framework Web Python de alto nivel que promueve el desarrollo rápido y limpio y el diseño pragmático. Construido por desarrolladores experimentados, tiene en cuenta muchos de los problemas del desarrollo web, de manera que puedes focalizarte en escribir el código de tu app sin necesidad de reinventar la rueda. Es gratis y de código abierto.

Django sigue la filosofía de "Baterias incluidas" y proporciona casi todo lo que la mayoría de desarrolladores querría hacer "de fábrica". Como todo está incluido, todo funciona en conjunto, sigue principios de diseño consistentes y tiene una extensa documentación actualizada. Es también veloz, seguro y muy escalable. Al estar basado en Python, el código de Django es fácil de leer y de mantener.

Entre los sitios populares que usan Django (según su página web) se incluyen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](http://flask.pocoo.org/) es un microframework para Python.

A pesar de ser minimalista, Flask puede crear sitios web "de fábrica". Contiene un servidor de desarrollo y depurador, e incluye soporte para plantillas [Jinja2](https://github.com/pallets/jinja), cookies seguros, [prueba de unidades](https://en.wikipedia.org/wiki/Unit_testing), y distribución de peticiones [RESTful](http://www.restapitutorial.com/lessons/restfulresourcenaming.html). Tiene buena documentación y una comunidad activa.

Flask se ha vuelto extremadamente popular, particularmente entre desarrolladores que necesitan proporcionar servicios web en sistemas pequeños, y con recursos escasos (ej. ejecutar un servidor web en una [Raspberry Pi](https://www.raspberrypi.org/), [Controladores de Drones](http://blogtarkin.com/drone-definitions-learning-the-drone-lingo/), etc.)

### Express (Node.js/JavaScript)

[Express](http://expressjs.com/) es un framework web veloz, no dogmático, flexible y minimalista para [Node.js](https://nodejs.org/en/) (Node es un entorno sin explorador web para ejecutar JavaScript). Proporciona un conjunto de características robusto para aplicaciones web y móviles y entrega valiosos métodos de utilidades HTTP y [middleware](/es/docs/Glossary/Middleware).

Express es extremadamente popular, en parte porque facilita la migración de programadores web de JavaScript de lado cliente a desarrollo de lado servidor, y en parte porque es eficiente con los recursos (el entorno de node subyacente usa multitarea ligera dentro de un thread en vez de expandirse en procesos separados para cada nueva petición web).

Debido a que Express es un framework web minimalista no incorpora cada componente que querrías usar (por ejemplo, el acceso a bases de datos y el soporte de usuarios y sesiones se proporciona a través de bibliotecas independientes). Hay muchos componentes independientes excelentes, !pero algunas veces puede ser difícil deducir cuál es el mejor para un propósito en particular!

Muchos frameworks populares y completamente equipados (incluyendo ambos tipos de frameworks de lado servidor y de lado cliente) están basados en Express, como [Feathers](http://feathersjs.com/), [ItemsAPI](https://www.itemsapi.com/), [KeystoneJS](http://keystonejs.com/), [Kraken](http://krakenjs.com/), [LEAN-STACK](http://lean-stack.io/), [LoopBack](http://loopback.io/), [MEAN](http://mean.io/), and [Sails](http://sailsjs.org/).

Un montón de compañías de perfil alto usan Express, como: Uber, Accenture, IBM, etc. (a[quí](http://expressjs.com/en/resources/companies-using-express.html) tienes una lista).

### Ruby on Rails (Ruby)

[Rails](http://rubyonrails.org/) (normalmente referenciado como "Ruby on Rails") es un framework web escrito para el lenguaje de programación Ruby.

Rails sigue una filosofía de diseño muy similar a Django. Como Django proporciona mecanismos estándard para el enrutado de URLs, acceso a datos de bases, generación de plantillas y formateo de datos como {{glossary("JSON")}} o {{glossary("XML")}}. Promueve de forma similar el uso de patrones de diseño como DRY ("dont repeat yourself", no te repitas — escribir el código una única vez si es posible), MVC (model-view-controller) y numerosos otros.

Hay por supuesto muchas diferencias debido a decisiones específicas de diseño y la naturaleza de los lenguajes.

Rails se usa en sitios de perfil alto, como: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://shopify.com/), [Airbnb](https://airbnb.com/), [Twitch](https://twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://hulu.com/), [Zendesk](https://zendesk.com/), [Square](https://square.com/), [Highrise](https://highrisehq.com/).

### ASP.NET

[ASP.NET](http://www.asp.net/) es un framework web de código abierto desarrollado por Microsoft para construir aplicaciones y servicios modernos. Con ASP.NET puedes crear rápidamente sitios web basados en HTML, CSS, y JavaScript, escalarlos para ser usados por milllones de usuarios y añadir fácilmente capacidades complejas como APIs web, formularios sobre datos o comunicaciones en tiempo real.

Uno de los diferenciadores de ASP.NET es que está construido sobre el [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR), permitiendo a los programadores escribir código ASP.NET usando cualquier lenguaje .NET soportado (C#, Visual Basic, etc.). Como muchos productos Microsoft se beneficia de herramientas excelentes (frecuentemente gratuitas), y una comunidad de desarrolladores activa, y documentación bien escrita.

ASP.NET se usa por Microsoft, Xbox.com, Stack Overflow, y muchos otros.

### Mojolicious (Perl)

[Mojolicious](http://mojolicious.org/) es un framework web de nueva generación para el lenguaje de programación Perl.

Hace tiempo en los primeros días de la Web, mucha gente aprendió Perl gracias a una magnífica biblioteca llamada [CGI](https://metacpan.org/module/CGI). Era lo suficientemente simple para empezar sin saber mucho sobre el lenguaje y lo suficientemente potente para mantenerte en marcha. Mojolicious implementa esta idea usando el último grito de las tecnologías.

Algunas de las caracteríticas que proporciona Mojolicious son: **Framework Web en tiempo real**, para crecer fácilmente desde prototipos de un solo fichero hasta aplicaciones web MVC bien estructuradas; rutas RESTful, plugins, comandos, plantillas especificas de Perl, negociación de contenidos, gestión de sesiones, validación de formatos, framework de pruebas, servidor de ficheros estáticos, detección de CGI/[PSGI](http://plackperl.org), soporte Unicode de primera clase; Implementación cliente/servidor completamente equipada de HTTP y WebSocket con IPv6, TLS, SNI, IDNA, HTTP/SOCKS5 proxy, UNIX domain socket, Comet (long polling), keep-alive, connection pooling, timeout, cookie, y soporte de compresión multipart y gzip; parseadores JSON y HTML/XML y generadores con soporte de selector CSS; Muy limpio, portable y API orientada a objetos y Perl puro sin magia oculta; Código fresco basado en años de experiencia, gratis y de código abierto.

## Sumario

Este artículo ha mostrado que los frameworks web pueden hacer fácil el desarrollo y mantenimiento del código de lado servidor. También ha proporcionado una visión general de alto nivel de unos pocos frameworks más populares y debatido los criterios para elegir el framework para una aplicación web. Deberías tener en este momento una idea de cómo elegir un framework web para tu propio desarrollo de lado servidor. Si no, no te preocupes — más tarde a lo largo del curso te daremos tutoriales detallados de Django y Express para darte algo de experiencia de funcionamiento real con un framework web.

Para el próximo artículo de este módulo cambiaremos de dirección ligeramente y consideraremos la seguridad web.

{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}
