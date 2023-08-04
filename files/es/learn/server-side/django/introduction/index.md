---
title: Introducción a Django
slug: Learn/Server-side/Django/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}

En este primer artículo de Django responderemos la pregunta ¿Qué es Django? y daremos una visión general de lo que hace que este framework sea tan especial. Vamos a delinear las características principales, incluidas algunas de las funcionalidades avanzadas que no tendremos tiempo de cubrir con detalle en este módulo. Tambien mostraremos algunos de los componentes principales de una aplicación de Django. (aunque en este momento no cuentes con un entorno de desarrollo en el cual probarlo).

<table>
  <tbody>
    <tr>
      <th scope="row">Pre requisitos:</th>
      <td>
        Conocimientos basicos en informatica. Una comprensión general de
        <a
          href="/es/docs/Learn/Server-side/First_steps"
          >programación del lado del servidor</a
        >, y en particular de los mecanimos de
        <a
          href="/es/docs/Learn/Server-side/First_steps/Client-Server_overview"
          >interacciones cliente-servidor en los sitios web</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivos:</th>
      <td>
        Familiarizarse con lo que es Django, que funcionalidad proporciona y los
        componentes principales de una aplicación Django.
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es Django?

Django es un framework web de alto nivel que permite el desarrollo rápido de sitios web seguros y mantenibles. Desarrollado por programadores experimentados, Django se encarga de gran parte de las complicaciones del desarrollo web, por lo que puedes concentrarte en escribir tu aplicación sin necesidad de reinventar la rueda. Es gratuito y de código abierto, tiene una comunidad próspera y activa, una gran documentación y muchas opciones de soporte gratuito y de pago.

Django te ayuda a escribir software que es:

- Completo
  - : Django sigue la filosofía "Baterías incluidas" y provee casi todo lo que los desarrolladores quisieran que tenga "de fábrica". Porque todo lo que necesitas es parte de un único "producto", todo funciona a la perfección, sigue principios de diseño consistentes y tiene una amplia y [actualizada documentación](https://docs.djangoproject.com/en/1.10/).
- Versátil

  - : Django puede ser (y ha sido) usado para construir casi cualquier tipo de sitio web — desde sistemas manejadores de contenidos y wikis, hasta redes sociales y sitios de noticias. Puede funcionar con cualquier framework en el lado del cliente, y puede devolver contenido en casi cualquier formato (incluyendo HTML, RSS feeds, JSON, XML, etc). ¡El sitio que estás leyendo actualmente está basado en Django!

    Internamente, mientras ofrece opciones para casi cualquier funcionalidad que desees (distintos motores de base de datos , motores de plantillas, etc.), también puede ser extendido para usar otros componentes si es necesario.

- Seguro

  - : Django ayuda a los desarrolladores evitar varios errores comunes de seguridad al proveer un framework que ha sido diseñado para "hacer lo correcto" para proteger el sitio web automáticamente. Por ejemplo, Django, proporciona una manera segura de administrar cuentas de usuario y contraseñas, evitando así errores comunes como colocar informaciones de sesión en cookies donde es vulnerable (en lugar de eso las cookies solo contienen una clave y los datos se almacenan en la base de datos) o se almacenan directamente las contraseñas en un hash de contraseñas.

    _Un hash de contraseña es un valor de longitud fija creado al enviar la contraseña a una [cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function). Django puede validar si la contraseña ingresada es correcta enviándola a través de una función hash y comparando la salida con el valor hash almacenado. Sin embargo debido a la naturaleza "unidireccional" de la función, incluso si un valor hash almacenado se ve comprometido es difícil para un atacante resolver la contraseña original._

    Django permite protección contra algunas vulnerabilidades de forma predeterminada, incluida la inyección SQL, scripts entre sitios, falsificación de solicitudes entre sitios y clickjacking (consulte [Seguridad de sitios web](/es/docs/Learn/Server-side/First_steps/Website_security) para obtener más detalles sobre dichos ataques).

- Escalable
  - : Django usa un componente basado en la arquitectura "[shared-nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)" (cada parte de la arquitectura es independiente de las otras, y por lo tanto puede ser reemplazado o cambiado si es necesario). Teniendo en cuenta una clara separación entre las diferentes partes significa que puede escalar para aumentar el tráfico al agregar hardware en cualquier nivel: servidores de cache, servidores de bases de datos o servidores de aplicación. Algunos de los sitios más concurridos han escalado a Django para satisfacer sus demandas (por ejemplo, Instagram y Disqus, por nombrar solo dos).
- Mantenible
  - : El código de Django está escrito usando principios y patrones de diseño para fomentar la creación de código mantenible y reutilizable. En particular, utiliza el principio No te repitas "Don't Repeat Yourself" (DRY) para que no exista una duplicación innecesaria, reduciendo la cantidad de código. Django también promueve la agrupación de la funcionalidad relacionada en "aplicaciones" reutilizables y en un nivel más bajo, agrupa código relacionado en módulos (siguiendo el patrón [Model View Controller (MVC)](/es/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture)).
- Portable
  - : Django está escrito en Python, el cual se ejecuta en muchas plataformas. Lo que significa que no está sujeto a ninguna plataforma en particular, y puede ejecutar sus aplicaciones en muchas distribuciones de Linux, Windows y Mac OS X. Además, Django cuenta con el respaldo de muchos proveedores de alojamiento web, y que a menudo proporcionan una infraestructura específica y documentación para el alojamiento de sitios de Django.

## ¿De dónde vino?

Django fue desarrollado inicialmente entre 2003 y 2005 por un equipo que era responsable de crear y mantener sitios web de periódicos. Después de crear varios sitios, el equipo empezó a tener en cuenta y reutilizar muchos códigos y patrones de diseño comunes. Este código común se convirtió en un framework web genérico, que fue de código abierto, conocido como proyecto "Django" en julio de 2005.

Django ha continuado creciendo y mejorando desde su primer hito, el lanzamiento de la versión (1.0) en septiembre de 2008, hasta el reciente lanzamiento de la versión 1.11 (2017). Cada lanzamiento ha añadido nuevas funcionalidades y solucionado errores, que van desde soporte de nuevos tipos de bases de datos, motores de plantillas, caching, hasta la adición de funciones genéricas y clases de visualización (que reducen la cantidad de código que los desarrolladores tiene que escribir para numerosas tareas de programación).

> **Nota:** Consulte las [notas de lanzamiento](https://docs.djangoproject.com/en/1.10/releases/) en el sitio web de Django para ver qué ha cambiado en las versiones recientes y cúanto trabajo se lleva a cabo para mejorar Django.

Django es ahora un próspero proyecto colaborativo de código abierto, con miles de usuarios y contribuidores. Mientras que todavía presenta algunas características que reflejan su origen, Django ha evolucionado en un framework versátil que es capaz de desarrollar cualquier tipo de sitio web.

## ¿Qué tan Popular es Django?

No hay una medida de popularidad definitiva y disponible de inmediato de "frameworks de lado servidor" (aunque sitios como [Hot Frameworks](http://hotframeworks.com/) intentan evaluar la popularidad usando mecanismos como contar el número de proyectos en Github y preguntas en StackOverflow de cada plataforma). Una pregunta mejor es si Django es lo "suficientemente popular" para evitar los problemas de las plataformas menos populares. ¿Continúa evolucionando? ¿Puedes conseguir la ayuda que necesitas? ¿Hay alguna posibilidad de que consigas un trabajo pagado si aprendes Django?

De acuerdo con el número de sitios que usan Django, el número de gente que contribuye al código base, y el número de gente que proporciona soporte tanto libre como pagado, podemos entonces decir que sí, !Django es un framework popular!

Los sitios de alto nivel que usan Django incluyen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest y Open Stack (fuente: [Página de inicio de Django](https://www.djangoproject.com/)).

## ¿Es Django dogmático?

Los frameworks web frecuentemente se refieren a sí mismos como "dogmáticos" ("_opinionated_") o "no dogmáticos" ("_unopinionated_").

Los frameworks dogmáticos son aquellos que opinan acerca de la "manera correcta" de gestionar cualquier tarea en particular. Ofrecen soporte para el desarrollo rápido en un _dominio en particular_ (resolver problemas de un tipo en particular) porque la manera correcta de hacer cualquier cosa está generalmente bien comprendida y bien documentada.

Sin embargo pueden ser menos flexibles para resolver problemas fuera de su dominio principal, y tienden a ofrecer menos opciones para elegir qué componentes y enfoques pueden usarse.

Los framewoks no dogmáticos, por contra, tienen muchas menos restricciones sobre el modo mejor de unir componentes para alcanzar un objetivo, o incluso qué componentes deberían usarse. Hacen más fácil para los desarrolladores usar las herramientas más adecuadas para completar una tarea en particular, si bien al coste de que necesitas encontrar esos componentes por tí mismo.

Django es "dogmático pero no del todo" y por tanto entrega "lo mejor de ambos mundos". Proporciona un conjunto de componentes para gestionar la mayoría de las tareas de desarrollo web y una (o dos) maneras preferidas de usarlos. Sin embargo, la arquitectura desacoplada de Django implica que puedes normalmente escoger y seleccionar de entre numerosas opciones diferentes o añadir soporte para otras completamente nuevas, si lo deseas.

## ¿Qué pinta tiene el código de Django?

En un sitio web tradicional basado en datos, una aplicación web espera peticiones HTTP del explorador web (o de otro cliente). Cuando se recibe una petición la aplicación elabora lo que se necesita basándose en la URL y posiblemente en la información incluida en los datos `POST` o `GET`. Dependiendo de qué se necesita quizás pueda entonces leer o escribir información desde una base de datos o realizar otras tareas requeridas para satisfacer la petición. La aplicación devolverá a continuación una respuesta al explorador web, con frecuencia creando dinámicamente una página HTML para que el explorador la presente insertando los datos recuperados en marcadores de posición dentro de una plantilla HTML.

Las aplicaciones web de Django normalmente agrupan el código que gestiona cada uno de estos pasos en ficheros separados:

![](basic-django.png)

- **URLs:** Aunque es posible procesar peticiones de cada URL individual vía una función individual, es mucho más sostenible escribir una función de visualización separada para cada recurso. Se usa un mapeador URL para redirigir las peticiones HTTP a la vista apropiada basándose en la URL de la petición. El mapeador URL se usa para redirigir las peticiones HTTP a la vista apropiada basándose en la URL de la petición. El mapeador URL puede también emparejar patrones de cadenas o dígitos específicos que aparecen en una URL y los pasan a la función de visualización como datos.
- **Vista (View):** Una vista es una función de gestión de peticiones que recibe peticiones HTTP y devuelve respuestas HTTP. Las vistas acceden a los datos que necesitan para satisfacer las peticiones por medio de _modelos_, y delegan el formateo de la respuesta a las _plantillas_ (_"templates"_).
- **Modelos (Models):** Los Modelos son objetos de Python que definen la estructura de los datos de una aplicación y proporcionan mecanismos para gestionar (añadir, modificar y borrar) y consultar registros en la base de datos.
- **Plantillas (Templates):** una plantilla (template) es un fichero de texto que define la estructura o diagrama de otro fichero (tal como una página HTML), con marcadores de posición que se utilizan para representar el contenido real. Una _vista_ puede crear dinámicamente una página usando una plantilla, rellenandola con datos de un _modelo_. Una plantilla se puede usar para definir la estructura de cualquier tipo de fichero; ¡no tiene porqué ser HTML!

> **Nota:** Django se refiere a este tipo de organización como arquitectura Modelo Vista Plantilla "Model View Template (MVT)". Tiene muchas similaridades con la arquitectura más familiar [Model View Controller](/es/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture).

Las secciones de más abajo te darán una idea de la pinta que tienen estas partes principales de una aplicación Django (entraremos en más detalles más adelante en el curso, una vez que hallamos configurado un entorno de desarrollo).

### Enviar la petición a la vista correcta (urls.py)

Un mapeador URL está normalmente almacenado en un fichero llamado **urls.py**. En el ejemplo más abajo el mapeador (`urlpatterns`) define una lista de mapeos entre _patrones_ URL específicos y sus correspondientes funciones de visualización. Si se recibe una Petición HTTP que tiene una URL que empareja un patrón específico (ej. `r'^$'`, más abajo) se realizará una llamada y se pasará la petición a la función de visualización asociada (ej. `views.index`).

```python
urlpatterns = [
    url(r'^$', views.index),
    url(r'^([0-9]+)/$', views.best),
]
```

> **Nota:** Un poco de Python:
>
> - El objeto `urlpatterns` es una lista de funciones `url()`. En Python, las listas se definen usando using corchetes. Los elementos se separan con comas y pueden tener una [coma colgante opcional](https://docs.python.org/2/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples). Por ejemplo: `[item1, item2, item3,]`.
> - La extraña sintaxis de los patrones se conoce como _"expresión regular"_. ¡Hablaremos sobre ellas en un artículo posterior!.
> - El segundo argumento de `url()` es otra función a la que se llamará cuando se encuentre un patrón que coincida. La notación `views.index` indica que la función se llama `index()` y se puede encontrar en un módulo llamado `views` (es decir, dentro del fichero llamado `views.py`).

### Manejar la petición (views.py)

Las vistas son el corazón de la aplicación web, recibiendo peticiones HTTP de los clientes web y devolviendo respuestas HTTP. Entre éstas, organizan los otros recursos del framework para acceder a las bases de datos, consolidar plantillas, etc.

El ejemplo más abajo muestra una mínima función de visualización `index()`, que podría ser llamada por nuestro mapeador de URL de la sección anterior. Al igual que todas las funciones de visualización, recibe un objeto `HttpRequest` como parámetro (`request`) y devuelve un objeto `HttpResponse`. En este caso no hacemos nada con la petición y nuestra respuesta simplemente devuelve una cadena insertada de forma fija en el código. Te mostraremos una petición que hace algo más interesante en la siguiente sección.

```python
## fichero: views.py (funciones de visualizacion de Django)
from django.http import HttpResponse

def index(request):
    # Obtener un HttpRequest - el parametro peticion
    # Realizar operaciones usando la infomracion de la peticion.
    # Devolver una HttpResponse
    return HttpResponse('!Hola desde Django!')
```

> **Nota:** Un poco de Python:
>
> - [Módulos Python](https://docs.python.org/3/tutorial/modules.html) son "bibliotecas" de funciones, almacenadas en ficheros separados, que podríamos querer usar en nuestro código. Aquí importamos sólo el objeto `HttpResponse` desde el módulo `django.http` de manera que podamos usarlo en nuestra vista: `from django.http import HttpResponse`. Hay también otras formas de importar algunos o todos los objetos de un módulo.
> - Las funciones se declaran usando la plabra clave `def` tal como se muestra arriba, con parámetros con nombre listados entre paréntesis después del nombre de la función; la línea entera termina con dos puntos. Fíjate como las líneas siguientes están todas ellas **indentadas**. La indentación es importante, ya que especifica que las líneas de código están dentro de ese bloque en particular (la indentación obligatoria es una característica clave de Python, y es una razón por la que el código de Python es tan fácil de leer.

Las vistas se almacenan normalmente en un fichero llamado **views.py**.

### Definir modelos de datos (models.py)

Las aplicaciones web Django manejan y consultan datos a través de objetos Python referidos como modelos. Los modelos definen la estructura de los datos almacenados, incluyendo los _tipos_ de campos y posiblemente también su tamaño máximo, los valores por defecto, la lista de selección de opciones, texto de ayuda para documentación, etiquetas de texto para formularios, etc. La definición del modelo es independiente de la base de datos subyacente — puedes elegir una entre varias como parte de la configuración de tu proyecto. Una vez que has seleccionado qué base de datos quieres usar, no necesitas en absoluto comunicarte con ella directamente — sólo hay que escribir la estructura de la base y otro código y Django se encarga por tí de todo el trabajo sucio de comunicarse con la base de datos.

El fragmento de código de más abajo muestra un modelo de Django muy simple para un objeto `Team`. La clase `Team` deriva de la clase de django `models.Model`. Define el nombre de un equipo y su nivel como campos de tipo carácter y especifica un número máximo de caracteres que pueden ser almacenados en cada registro. El `team_level` puede ser un valor de entre varios, de manera que lo definimos como un campo de opciones y proporcionamos un mapeo entre opciones para mostrar y datos para almacenar, junto con un valor por defecto.

```python
# filename: models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        ...  #list other team levels
    )
    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
```

> **Nota:** Un poco de Python:
>
> - Python soporta "programación orientada a objetos", un estilo de programación donde organizamos nuestro código en objetos, que incluyen datos relacionados y funciones para operar con los datos. Los objetos también pueden heredarse/extenderse/derivarse de otros objetos, permitiendo que se comparta un comportamiento común entre objetos relacionados. En Python usamos la palabra clave `class` para definir el "prototipo" de un objeto. Podemos crear múltiples _instancias_ específicas de ese tipo de objeto basado en el modelo especificado en la clase.
>
>   Así por ejemplo, aquí tenemos una clase `Team`, que deriva de la clase `Model`. Esto significa que es un modelo y que contendrá los métodos de un modelo, pero también podemos darle características especializadas propias. En nuestro modelo definimos los campos de nuestra base que necesitaremos para almacenar nuestros datos, dándoles nombres específicos. Django usa estas definiciones, incluídos los nombres de los campos para crear la base subyacente.

### Consultar datos (views.py)

El modelo de Django proporciona una API de consulta simple para buscar en la base de datos. Esta puede buscar concidencias contra varios campos al mismo tiempo usando diferentes criterios (ej. exacto, insensible a las mayúsculas, mayor que, etc.), y puede soportar sentencias complejas (por ejemplo, puedes especificar que se busque equipos U11 que tengan un nombre de equipo que empiece por "Fr" o termine con "al").

El fragmento de código de más abajo muestra una función de visualización (manejador de recursos) para presentar en pantalla todos nuestros equipos U09. La línea en negrilla muestra como podemos usar la API de consulta del modelo para filtrar todos los registros donde el campo `team_level` tenga exactamente el texto 'U09' (fíjate como este criterio se pasa como argumento a la función `filter()` con el nombre del campo y tipo de coincidencia separados por un doble guion bajo: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Esta función utiliza la función `render()` para crear la `HttpResponse` que se envía de vuelta al explorador. Esta función es un _atajo_; crea un fichero HTML mediante la combinación de una plantilla HTML específica y algunos datos para insertar en ella (proporcionados en la variable "`context`"). En la siguiente sección mostramos como la plantilla tiene los datos insertados en ella para crear el HTML.

### Renderización de los datos (plantillas HTML)

Los sistemas de plantillas permiten especificar la estructura de un documento de salida usando marcadores de posición para los datos que serán rellenados cuando se genere la página. Las plantillas se usan con frecuencia para crear HTML, también pueden crear otros tipos de documentos. Django soporta de fábrica tanto su sistema de plantillas nativo como otra biblioteca Python popular llamada **Jinja2** (y se puede hacer que soporte otros sistemas si hace falta).

El fragmento de código de más abajo muestra el aspecto que podría tener la plantilla HTML llamada por la función `render()` de la sección anterior. Esta plantilla ha sido escrita bajo la suposición de que cuando sea renderizada tendrá acceso a una variable tipo lista llamada `youngest_teams` (contenida en la variable `context` dentro de la función `render()` de más arriba). Dentro del esqueleto HTML tenemos una expresión que primero comprueba que existe la variable `youngest_teams`, y luego itera sobre ella en un bucle `for`. En cada iteración la plantilla presenta cada valor del campo `team_name` del equipo en un elemento {{htmlelement("li")}}.

```python
## filename: best/templates/best/index.html

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

## ¿Qué más puedes hacer?

Las secciones prededentes muestran las principales características que usarás en casi todas las aplicaciones web: mapeo de URLs, vistas, modelos y plantillas. Sólo unas pocas de las otras cosas que Django proporciona y que incluyen:

- **Formularios**: Los formularios HTML se usan para recolectar datos de los usuarios para su procesamiento en el servidor. Django simplifica la creación, validación y procesamiento de los formularios.
- **Autenticación y permisos de los usuarios**: Django incluye un sistema robusto de autenticación y permisos que ha sido construido con la seguridad en mente.
- **Cacheo**: La creación dinámica de contenido es mucho más intensiva computacionalmente (y lenta) que un servico de contenido estático. Django proporciona un cacheo flexible de forma que puedes almacenar todo o parte de una página renderizada para que no sea re-renderizada nada más que cuando sea necesario.
- **Sitio de Administracion**: el sitio de administración de Django está incluido por defecto cuando creas una app usando el esqueleto básico. Esto hace que sea trivialmente fácil proporcionar una página de adminsitración para que los administradores puedan crear, editar y visualizar cualquiera de los modelos de datos de su sitio.
- **Serialización de datos**: Django hace fácil el serializar y servir tus datos como XML o JSON. Esto puede ser útil cuando se está creando un servicio web (un sitio web que sólo sirve datos para ser consumidos por otras aplicaciones o sitios, y que no presenta en pantalla nada por sí mismo), o cuando se crea un sitio web en el que el código del lado cliente maneja toda la renderización de los datos.

## Sumario

¡Felicidades, has completado el primer paso en tu viaje por Django! Deberías ahora ser consciente de los principales beneficios de Django, algo de su historia y a groso modo la pinta que tienen cada una de las partes principales de una de sus apps. Deberías también haber aprendido unas pocas cosas acerca del lenguaje de programación Python, incluyendo la sintaxis para las listas, funciones y clases.

Has visto ya algo de código real de Django más arriba, pero a diferencia del código de lado cliente, necesitas configurar un entorno de desarrollo para hacerlo funcionar. Ese será nuestro siguiente paso.

{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}
