---
title: Frameworks web del lado del servidor
short-title: Frameworks del lado del servidor
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

El artículo anterior te mostró cómo es la comunicación entre los clientes y los servidores web, la naturaleza de las solicitudes y respuestas HTTP, y lo que necesita hacer una aplicación web del lado del servidor para responder a las solicitudes de un navegador web. Con este conocimiento adquirido, es hora de explorar cómo los frameworks web pueden simplificar estas tareas, y darte una idea de cómo elegirías un framework para tu primera aplicación web del lado del servidor.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Comprensión básica de cómo el código del lado del servidor
        gestiona y responde a las solicitudes HTTP (consulta <a
          href="/es/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >Visión general cliente-servidor</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender cómo los frameworks web pueden simplificar el
        desarrollo/mantenimiento del código del lado del servidor y hacer
        que el lector piense en la elección de un framework para su propio
        desarrollo.
      </td>
    </tr>
  </tbody>
</table>

Las siguientes secciones ilustran algunos puntos usando fragmentos de código tomados de frameworks web reales. No te preocupes si no **todo** tiene sentido ahora mismo; iremos trabajando el código contigo en nuestros módulos específicos de cada framework.

## Visión general

Los frameworks web del lado del servidor (también conocidos como "frameworks de aplicaciones web") son frameworks de software que facilitan escribir, mantener y escalar aplicaciones web. Proporcionan herramientas y bibliotecas que simplifican tareas comunes del desarrollo web, incluyendo el enrutado de URLs hacia los manejadores adecuados, la interacción con bases de datos, el soporte de sesiones y autorización de usuarios, el formateo de la salida (por ejemplo, HTML, JSON, XML), y la mejora de la seguridad frente a ataques web.

La siguiente sección da más detalles sobre cómo los frameworks web pueden facilitar el desarrollo de aplicaciones web. A continuación, explicaremos algunos de los criterios que puedes usar para elegir un framework web, y luego enumeraremos algunas de tus opciones.

## ¿Qué puede hacer un framework web por ti?

Los frameworks web proporcionan herramientas y bibliotecas para simplificar operaciones comunes del desarrollo web. No _tienes_ que usar un framework web del lado del servidor, pero se recomienda encarecidamente: te hará la vida mucho más fácil.

Esta sección analiza parte de la funcionalidad que suelen ofrecer los frameworks web (¡no todos los frameworks proporcionan necesariamente todas estas características!).

### Trabajar directamente con solicitudes y respuestas HTTP

Como vimos en el artículo anterior, los servidores web y los navegadores se comunican mediante el protocolo HTTP: los servidores esperan solicitudes HTTP del navegador y luego devuelven información en respuestas HTTP. Los frameworks web te permiten escribir una sintaxis simplificada que generará el código del lado del servidor necesario para trabajar con estas solicitudes y respuestas. Esto significa que tendrás una tarea más sencilla, al interactuar con código más fácil y de nivel más alto en lugar de con primitivas de red de nivel más bajo.

El ejemplo de abajo muestra cómo funciona esto en el framework web Django (Python). Cada función de «vista» (un manejador de solicitudes) recibe un objeto `HttpRequest` que contiene la información de la solicitud, y debe devolver un objeto `HttpResponse` con la salida formateada (en este caso, una cadena de texto).

```python
# Función de vista de Django
from django.http import HttpResponse

def index(request):
    # Obtiene un HttpRequest (request)
    # realiza operaciones usando información de la solicitud.
    # Devuelve HttpResponse
    return HttpResponse('Cadena de salida a devolver')
```

### Enrutar solicitudes al manejador adecuado

La mayoría de los sitios ofrecen varios recursos diferentes, accesibles a través de distintas URLs. Gestionar todo esto en una sola función sería difícil de mantener, así que los frameworks web proporcionan mecanismos sencillos para asignar patrones de URL a funciones manejadoras específicas. Este enfoque también tiene beneficios en cuanto al mantenimiento, porque puedes cambiar la URL que se usa para ofrecer una característica en particular sin tener que cambiar el código subyacente.

Diferentes frameworks usan mecanismos distintos para esta asignación. Por ejemplo, el framework web Flask (Python) añade rutas a las funciones de vista mediante un decorador.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Mientras que Django espera que los desarrolladores definan una lista de asignaciones de URL entre un patrón de URL y una función de vista.

```python
urlpatterns = [
    url(r'^$', views.index),
    # ejemplo: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Facilitar el acceso a los datos de la solicitud

Los datos pueden codificarse en una solicitud HTTP de varias formas. Una solicitud HTTP `GET` para obtener archivos o datos del servidor puede codificar los datos necesarios en parámetros de URL o dentro de la propia estructura de la URL. Una solicitud HTTP `POST` para actualizar un recurso en el servidor, en cambio, incluirá la información de actualización como "datos POST" dentro del cuerpo de la solicitud. La solicitud HTTP también puede incluir información sobre la sesión o el usuario actual en una cookie del lado del cliente.

Los frameworks web proporcionan mecanismos adecuados para el lenguaje de programación con el fin de acceder a esta información. Por ejemplo, el objeto `HttpRequest` que Django pasa a cada función de vista contiene métodos y propiedades para acceder a la URL de destino, el tipo de solicitud (por ejemplo, un HTTP `GET`), los parámetros `GET` o `POST`, los datos de cookies y de sesión, etc. Django también puede pasar información codificada en la estructura de la URL definiendo "patrones de captura" en el asignador de URLs (consulta el último fragmento de código de la sección anterior).

### Abstraer y simplificar el acceso a bases de datos

Los sitios web usan bases de datos para almacenar información, tanto para compartirla con los usuarios como sobre los propios usuarios. Los frameworks web suelen ofrecer una capa de base de datos que abstrae las operaciones de lectura, escritura, consulta y borrado. Esta capa de abstracción se conoce como Mapeador Objeto-Relacional (ORM, por sus siglas en inglés).

Usar un ORM tiene dos beneficios:

- Puedes reemplazar la base de datos subyacente sin necesidad de cambiar el código que la usa. Esto permite a los desarrolladores optimizar según las características de las distintas bases de datos en función de su uso.
- La validación básica de los datos puede implementarse dentro del framework. Esto hace que sea más fácil y seguro comprobar que los datos se almacenan en el tipo de campo correcto de la base de datos, que tienen el formato adecuado (por ejemplo, una dirección de correo electrónico), y que no son maliciosos de ninguna forma (los atacantes pueden usar ciertos patrones de código para hacer cosas dañinas, como eliminar registros de la base de datos).

Por ejemplo, el framework web Django proporciona un ORM y se refiere al objeto usado para definir la estructura de un registro como el _modelo_. El modelo especifica los _tipos_ de campo que se van a almacenar, lo que puede proporcionar validación a nivel de campo sobre qué información se puede guardar (por ejemplo, un campo de correo electrónico solo permitiría direcciones de correo válidas). Las definiciones de los campos también pueden especificar su tamaño máximo, valores predeterminados, opciones de lista de selección, texto de ayuda para la documentación, texto de etiqueta para formularios, etc. El modelo no indica ninguna información sobre la base de datos subyacente, ya que eso es un ajuste de configuración que puede cambiarse por separado de nuestro código.

El primer fragmento de código de abajo muestra un modelo de Django muy simple para un objeto `Team`. Este almacena el nombre y el nivel del equipo como campos de caracteres, y especifica un número máximo de caracteres que se almacenarán en cada registro. `team_level` es un campo de selección, así que también proporcionamos una asignación entre las opciones que se mostrarán y los datos que se almacenarán, junto con un valor predeterminado.

```python
#best/models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        # Aquí se añadirían los demás equipos
    )
    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
```

El modelo de Django proporciona una API de consulta simple para buscar en la base de datos. Esta puede comparar varios campos a la vez usando distintos criterios (por ejemplo, exacto, sin distinguir mayúsculas y minúsculas, mayor que, etc.), y puede admitir sentencias complejas (por ejemplo, puedes especificar una búsqueda de equipos U11 cuyo nombre empiece por "Fr" o termine en "al").

El segundo fragmento de código muestra una función de vista (manejador de recursos) para mostrar todos nuestros equipos U09. En este caso, especificamos que queremos filtrar todos los registros donde el campo `team_level` tenga exactamente el texto 'U09' (fíjate abajo en cómo este criterio se pasa a la función `filter()` como un argumento con el nombre del campo y el tipo de coincidencia separados por guiones bajos dobles: **team_level\_\_exact**).

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

Los frameworks web suelen ofrecer sistemas de plantillas. Estos te permiten especificar la estructura de un documento de salida, usando marcadores de posición para los datos que se añadirán cuando se genere la página. Las plantillas se suelen usar para crear HTML, pero también pueden crear otros tipos de documentos.

Los frameworks web suelen ofrecer un mecanismo que facilita generar otros formatos a partir de los datos almacenados, incluyendo {{glossary("JSON")}} y {{glossary("XML")}}.

Por ejemplo, el sistema de plantillas de Django te permite especificar variables usando una sintaxis de "llaves dobles" (por ejemplo, `\{{ variable_name }}`), que se sustituirán por los valores pasados desde la función de vista cuando se renderice la página. El sistema de plantillas también admite expresiones (con la sintaxis: `{% expression %}`), que permiten a las plantillas realizar operaciones simples, como iterar sobre los valores de una lista pasada a la plantilla.

> [!NOTE]
> Muchos otros sistemas de plantillas usan una sintaxis similar, por ejemplo: Jinja2 (Python), Handlebars (JavaScript), Moustache (JavaScript), etc.

El fragmento de código de abajo muestra cómo funciona esto. Continuando con el ejemplo del "equipo más joven" de la sección anterior, la vista pasa a la plantilla HTML una variable de tipo lista llamada `youngest_teams`. Dentro del esqueleto HTML tenemos una expresión que primero comprueba si existe la variable `youngest_teams`, y luego la recorre con un bucle `for`. En cada iteración, la plantilla muestra el valor `team_name` del equipo en un elemento de lista.

```django
#best/templates/best/index.html

<!doctype html>
<html lang="en">
  <body>
    {% if youngest_teams %}
      <ul>
        {% for team in youngest_teams %}
          <li>\{{ team.team_name }}</li>
        {% endfor %}
      </ul>
    {% else %}
      <p>No hay equipos disponibles.</p>
    {% endif %}
  </body>
</html>
```

## Cómo elegir un framework web

Existen numerosos frameworks web para casi cualquier lenguaje de programación que quieras usar (en la siguiente sección enumeramos algunos de los frameworks más populares). Con tantas opciones, puede resultar difícil determinar qué framework ofrece el mejor punto de partida para tu nueva aplicación web.

Algunos de los factores que pueden influir en tu decisión son:

- **Esfuerzo de aprendizaje:** El esfuerzo necesario para aprender un framework web depende de lo familiarizado que estés con el lenguaje de programación subyacente, la consistencia de su API, la calidad de su documentación, y el tamaño y la actividad de su comunidad. Si partes de cero experiencia en programación, considera Django (es uno de los más fáciles de aprender según los criterios anteriores). Si formas parte de un equipo de desarrollo que ya tiene experiencia significativa con un framework web o lenguaje de programación en particular, entonces tiene sentido quedarse con ese.
- **Productividad:** La productividad mide qué tan rápido puedes crear nuevas funciones una vez que estás familiarizado con el framework, e incluye tanto el esfuerzo de escribir como de mantener el código (ya que no puedes escribir funciones nuevas mientras las antiguas están rotas). Muchos de los factores que afectan a la productividad son similares a los del "esfuerzo de aprendizaje" —por ejemplo, documentación, comunidad, experiencia en programación, etc.—; otros factores incluyen:
  - _Propósito u origen del framework_: Algunos frameworks web se crearon inicialmente para resolver ciertos tipos de problemas, y siguen siendo _mejores_ para crear aplicaciones web con restricciones similares. Por ejemplo, Django se creó para dar soporte al desarrollo de un sitio web de periódico, así que es bueno para blogs y otros sitios que implican publicar contenido. En cambio, Flask es un framework mucho más ligero y es excelente para crear aplicaciones web que se ejecutan en dispositivos embebidos.
  - _Con opinión frente a sin opinión_: Un framework "con opinión" (_opinionated_) es aquel en el que existen formas "óptimas" recomendadas de resolver un problema en particular. Este tipo de frameworks tienden a ser más productivos cuando intentas resolver problemas comunes, porque te orientan en la dirección correcta, aunque a veces son menos flexibles.
  - _Con "baterías incluidas" frente a hazlo tú mismo_: Algunos frameworks web incluyen por defecto herramientas y bibliotecas que abordan todos los problemas que sus desarrolladores pudieron imaginar, mientras que los frameworks más ligeros esperan que los desarrolladores web elijan las soluciones a sus problemas entre bibliotecas independientes (Django es un ejemplo del primer caso, mientras que Flask es un ejemplo de framework muy ligero). Los frameworks que lo incluyen todo suelen ser más fáciles para empezar, porque ya tienes todo lo que necesitas, y es probable que esté bien integrado y bien documentado. Sin embargo, si un framework más pequeño tiene todo lo que necesitas (o necesitarás), puede ejecutarse en entornos más limitados y tendrá un subconjunto de conceptos más reducido y fácil de aprender.
  - _Si el framework fomenta o no buenas prácticas de desarrollo_: Por ejemplo, un framework que fomenta una arquitectura [Modelo-Vista-Controlador](/es/docs/Glossary/MVC) para separar el código en funciones lógicas dará como resultado un código más mantenible que uno que no impone expectativas a los desarrolladores. Del mismo modo, el diseño del framework puede tener un gran impacto en lo fácil que resulte probar y reutilizar el código.

- **Rendimiento del framework o del lenguaje de programación:** Por lo general, la "velocidad" no es el factor más importante en la elección, porque incluso entornos de ejecución relativamente lentos como Python resultan "más que suficientes" para sitios de tamaño medio ejecutándose en hardware moderado. Los beneficios de velocidad percibidos de otro lenguaje, como C++ o JavaScript, bien pueden verse contrarrestados por los costes de aprendizaje y mantenimiento.
- **Soporte de caché:** A medida que tu sitio web tenga más éxito, es posible que descubras que ya no puede hacer frente al número de solicitudes que recibe a medida que los usuarios acceden a él. En ese momento puedes considerar añadir soporte de caché. La caché es una optimización en la que almacenas toda o parte de una respuesta web para que no tenga que recalcularse en solicitudes posteriores. Devolver una respuesta en caché es mucho más rápido que calcularla desde cero. La caché puede implementarse en tu código o en el servidor (consulta [proxy inverso](https://en.wikipedia.org/wiki/Reverse_proxy)). Los frameworks web ofrecen distintos niveles de soporte para definir qué contenido puede almacenarse en caché.
- **Escalabilidad:** Cuando tu sitio web tenga un éxito enorme, agotarás los beneficios de la caché e incluso alcanzarás los límites del _escalado vertical_ (ejecutar tu aplicación web en hardware más potente). En ese momento, es posible que necesites _escalar horizontalmente_ (repartir la carga distribuyendo tu sitio entre varios servidores web y bases de datos) o escalar "geográficamente", porque algunos de tus clientes están muy lejos de tu servidor. El framework web que elijas puede marcar una gran diferencia en lo fácil que resulte escalar tu sitio.
- **Seguridad web:** Algunos frameworks web ofrecen mejor soporte para gestionar ataques web comunes. Django, por ejemplo, sanea toda la entrada del usuario proveniente de las plantillas HTML para que no se pueda ejecutar JavaScript introducido por el usuario. Otros frameworks ofrecen una protección similar, pero no siempre está habilitada por defecto.

Hay muchos otros factores posibles, incluyendo la licencia, si el framework está bajo desarrollo activo o no, etc.

Si eres un principiante absoluto en programación, probablemente elegirás tu framework basándote en la "facilidad de aprendizaje". Además de la "facilidad de uso" del lenguaje en sí, una documentación y tutoriales de alta calidad y una comunidad activa que ayude a los nuevos usuarios son tus recursos más valiosos. Hemos elegido [Django](https://www.djangoproject.com/) (Python) y [Express](https://expressjs.com/) (Node/JavaScript) para escribir nuestros ejemplos más adelante en el curso, principalmente porque son fáciles de aprender y cuentan con buen soporte.

> [!NOTE]
> Vamos a visitar los sitios principales de [Django](https://www.djangoproject.com/) (Python) y [Express](https://expressjs.com/) (Node/JavaScript) y a revisar su documentación y su comunidad.
>
> 1. Navega a los sitios principales (enlazados arriba).
>    - Haz clic en los enlaces del menú de documentación (con nombres como "Documentation, Guide, API Reference, Getting Started", etc.).
>    - ¿Puedes ver temas que muestren cómo configurar el enrutado de URLs, las plantillas y las bases de datos/modelos?
>    - ¿Son claros los documentos?
> 2. Navega a las listas de correo de cada sitio (accesibles desde los enlaces de comunidad).
>    - ¿Cuántas preguntas se han publicado en los últimos días?
>    - ¿Cuántas tienen respuesta?
>    - ¿Tienen una comunidad activa?

## ¿Algunos buenos frameworks web?

Pasemos ahora a analizar algunos frameworks web del lado del servidor concretos.

Los frameworks del lado del servidor de abajo representan _algunos_ de los más populares disponibles en el momento de escribir esto. Todos ellos tienen todo lo necesario para ser productivo: son de código abierto, están bajo desarrollo activo, tienen comunidades entusiastas que crean documentación y ayudan a los usuarios en foros de debate, y se usan en un gran número de sitios web de alto perfil. Hay muchos otros excelentes frameworks del lado del servidor que puedes descubrir con una simple búsqueda en internet.

> [!NOTE]
> ¡Las descripciones provienen (parcialmente) de los sitios web de cada framework!

### Django (Python)

[Django](https://www.djangoproject.com/) es un framework web de Python de alto nivel que fomenta el desarrollo rápido y un diseño limpio y pragmático. Creado por desarrolladores experimentados, se encarga de gran parte de las complicaciones del desarrollo web, para que puedas centrarte en escribir tu aplicación sin necesidad de reinventar la rueda. Es gratuito y de código abierto.

Django sigue la filosofía de "baterías incluidas" y ofrece casi todo lo que la mayoría de los desarrolladores podrían necesitar "de fábrica". Como todo está incluido, todo funciona en conjunto, sigue principios de diseño consistentes y cuenta con documentación extensa y actualizada. También es rápido, seguro y muy escalable. Al estar basado en Python, el código de Django es fácil de leer y mantener.

Entre los sitios populares que usan Django (según la página de inicio de Django) se incluyen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest y Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) es un microframework para Python.

Aunque es minimalista, Flask puede crear sitios web serios desde el primer momento. Incluye un servidor de desarrollo y un depurador, y ofrece soporte para plantillas [Jinja2](https://github.com/pallets/jinja), cookies seguras, [pruebas unitarias](https://en.wikipedia.org/wiki/Unit_testing), y distribución de solicitudes [RESTful](https://restapitutorial.com/). Tiene buena documentación y una comunidad activa.

Flask se ha vuelto extremadamente popular, sobre todo entre los desarrolladores que necesitan ofrecer servicios web en sistemas pequeños y con recursos limitados (por ejemplo, ejecutar un servidor web en una [Raspberry Pi](https://www.raspberrypi.org/), [controladores de drones](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/), etc.).

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) es un framework web rápido, sin opiniones impuestas, flexible y minimalista para [Node.js](https://nodejs.org/en/) (Node es un entorno sin navegador para ejecutar JavaScript). Proporciona un conjunto robusto de características para aplicaciones web y móviles, y ofrece útiles métodos de utilidad HTTP y [middleware](/es/docs/Glossary/Middleware).

Express es extremadamente popular, en parte porque facilita la migración de programadores web de JavaScript del lado del cliente hacia el desarrollo del lado del servidor, y en parte porque es eficiente en el uso de recursos (el entorno de Node subyacente usa multitarea ligera dentro de un mismo hilo, en lugar de generar procesos independientes para cada nueva solicitud web).

Como Express es un framework web minimalista, no incorpora todos los componentes que podrías querer usar (por ejemplo, el acceso a bases de datos y el soporte de usuarios y sesiones se proporcionan mediante bibliotecas independientes). Hay muchos componentes independientes excelentes, ¡pero a veces puede ser difícil determinar cuál es el mejor para un propósito en particular!

Muchos frameworks populares del lado del servidor y full stack (que incluyen tanto frameworks del lado del servidor como del lado del cliente) se basan en Express, entre ellos [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean) y [Sails](https://sailsjs.com/).

Muchas empresas de alto perfil usan Express, entre ellas Uber, Accenture, IBM, etc.

### Deno (JavaScript)

[Deno](https://deno.com/) es un entorno de ejecución y framework de [JavaScript](/es/docs/Web/JavaScript)/TypeScript simple, moderno y seguro, construido sobre Chrome V8 y [Rust](https://rust-lang.org/).

Deno funciona con [Tokio](https://tokio.rs/), un entorno de ejecución asíncrono basado en Rust que le permite servir páginas web más rápido. También cuenta con soporte interno para [WebAssembly](/es/docs/WebAssembly), lo que permite compilar código binario para usarlo en el lado del cliente. Deno busca cubrir algunas de las carencias de [Node.js](/es/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework) ofreciendo un mecanismo que mantiene una mejor seguridad de forma natural.

Entre las características de Deno se incluyen:

- Seguridad por defecto. [Los módulos de Deno restringen los permisos](https://docs.deno.com/runtime/fundamentals/security/) de acceso a **archivos**, **red** o **entorno**, a menos que se permitan explícitamente.
- Soporte de TypeScript **desde el primer momento**.
- Mecanismo `await` de primera clase.
- Herramienta de pruebas y formateador de código integrados (`deno fmt`).
- Compatibilidad con navegadores (JavaScript): los programas de Deno escritos completamente en JavaScript, sin usar el espacio de nombres `Deno` (o con una prueba de característica para detectarlo), deberían funcionar directamente en cualquier navegador moderno.
- Empaquetado de scripts en un único archivo JavaScript.

Deno ofrece una forma sencilla pero potente de usar JavaScript tanto para la programación del lado del cliente como del lado del servidor.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (normalmente conocido como "Ruby on Rails") es un framework web escrito para el lenguaje de programación Ruby.

Rails sigue una filosofía de diseño muy similar a la de Django. Al igual que Django, proporciona mecanismos estándar para enrutar URLs, acceder a datos de una base de datos, generar HTML a partir de plantillas y formatear datos como {{glossary("JSON")}} o {{glossary("XML")}}. De igual manera, fomenta el uso de patrones de diseño como DRY ("don't repeat yourself", no te repitas: escribe el código una sola vez siempre que sea posible), MVC (modelo-vista-controlador) y otros varios.

Por supuesto, hay muchas diferencias debidas a decisiones de diseño específicas y a la naturaleza de los lenguajes.

Rails se ha usado en sitios de alto perfil, entre ellos: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/) y [Square](https://squareup.com/us/en).

### Laravel (PHP)

[Laravel](https://laravel.com/) es un framework de aplicaciones web con una sintaxis expresiva y elegante. Laravel intenta eliminar el sufrimiento del desarrollo facilitando las tareas comunes usadas en la mayoría de los proyectos web, tales como:

- [Motor de enrutado simple y rápido](https://laravel.com/docs/routing).
- [Potente contenedor de inyección de dependencias](https://laravel.com/docs/container).
- Múltiples backends para el almacenamiento de [sesiones](https://laravel.com/docs/session) y [caché](https://laravel.com/docs/cache).
- [ORM de base de datos](https://laravel.com/docs/eloquent) expresivo e intuitivo.
- [Migraciones de esquema](https://laravel.com/docs/migrations) independientes de la base de datos.
- [Procesamiento robusto de tareas en segundo plano](https://laravel.com/docs/queues).
- [Difusión de eventos en tiempo real](https://laravel.com/docs/broadcasting).

Laravel es accesible, pero a la vez potente, y ofrece las herramientas necesarias para aplicaciones grandes y robustas.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) es un framework web de código abierto desarrollado por Microsoft para crear aplicaciones y servicios web modernos. Con ASP.NET puedes crear rápidamente sitios web basados en HTML, CSS y JavaScript, escalarlos para que los usen millones de usuarios y añadir fácilmente capacidades más complejas, como APIs web, formularios sobre datos o comunicaciones en tiempo real.

Uno de los rasgos distintivos de ASP.NET es que está construido sobre el [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR), lo que permite a los programadores escribir código ASP.NET usando cualquier lenguaje .NET compatible (C#, Visual Basic, etc.). Como muchos productos de Microsoft, se beneficia de herramientas excelentes (a menudo gratuitas), una comunidad de desarrolladores activa y documentación bien escrita.

ASP.NET lo usan Microsoft, Xbox.com, Stack Overflow y muchos otros.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) es un framework web de nueva generación para el lenguaje de programación Perl.

En los primeros días de la web, muchas personas aprendieron Perl gracias a una excelente biblioteca de Perl llamada [CGI](https://metacpan.org/pod/CGI). Era lo bastante simple como para empezar sin saber mucho sobre el lenguaje, y lo bastante potente como para seguir avanzando. Mojolicious lleva esta idea a la práctica usando tecnologías de vanguardia.

Algunas de las características que ofrece Mojolicious son:

- Un framework web en tiempo real, para hacer crecer fácilmente prototipos de un solo archivo hasta convertirlos en aplicaciones web MVC bien estructuradas.
- Rutas RESTful, complementos, comandos, plantillas al estilo Perl, negociación de contenido, gestión de sesiones, validación de formularios, framework de pruebas, servidor de archivos estáticos, detección de CGI/[PSGI](https://plackperl.org/), y soporte de Unicode de primera clase.
- Una implementación completa de cliente/servidor HTTP y WebSocket, con soporte de IPv6, TLS, SNI, IDNA, proxy HTTP/SOCKS5, socket de dominio UNIX, Comet (long polling), keep-alive, agrupación de conexiones, tiempo de espera, cookies, multipart y compresión gzip.
- Analizadores y generadores de JSON y HTML/XML con soporte de selectores CSS.
- Una API muy limpia, portable y orientada a objetos, escrita en Perl puro y sin magia oculta.
- Código reciente basado en años de experiencia, gratuito y de código abierto.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) es uno de los varios proyectos que ofrece [Spring](https://spring.io/). Es un buen punto de partida para hacer desarrollo web del lado del servidor usando [Java](https://www.java.com/).

Aunque desde luego no es el único framework basado en [Java](https://www.java.com/), es fácil de usar para crear aplicaciones independientes y de calidad de producción basadas en Spring que puedes simplemente "ejecutar". Ofrece una visión con opiniones definidas de la plataforma Spring y las bibliotecas de terceros, pero permite empezar con un mínimo de complicaciones y configuración.

Puede usarse para problemas pequeños, pero su punto fuerte es construir aplicaciones a mayor escala que sigan un enfoque en la nube. Normalmente, varias aplicaciones se ejecutan en paralelo comunicándose entre sí, unas encargándose de la interacción con el usuario y otras del trabajo de backend (por ejemplo, acceder a bases de datos u otros servicios). Los balanceadores de carga ayudan a garantizar la redundancia y la fiabilidad, o permiten gestionar de forma geolocalizada las solicitudes de los usuarios para garantizar la capacidad de respuesta.

## Resumen

Este artículo ha mostrado que los frameworks web pueden facilitar el desarrollo y el mantenimiento del código del lado del servidor. También ha ofrecido una visión general de alto nivel de algunos frameworks populares, y ha analizado los criterios para elegir un framework de aplicaciones web. Ahora deberías tener al menos una idea de cómo elegir un framework web para tu propio desarrollo del lado del servidor. Si no es así, no te preocupes: más adelante en el curso te daremos tutoriales detallados sobre Django y Express para que tengas algo de experiencia trabajando realmente con un framework web.

Para el próximo artículo de este módulo cambiaremos ligeramente de dirección y hablaremos sobre la seguridad web.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}
