---
title: "Tutorial de Django Parte 5: Creación de tu página de inicio"
short-title: "5: Página de inicio"
slug: Learn_web_development/Extensions/Server-side/Django/Home_page
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}

Ya estamos listos para añadir el código que muestra nuestra primera página completa — una página de inicio para el sitio web de [LocalLibrary](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website). La página de inicio mostrará el número de registros que tenemos de cada tipo de modelo y proporcionará una barra lateral con enlaces de navegación al resto de nuestras páginas. Por el camino ganaremos experiencia práctica escribiendo mapas de URL y vistas básicas, obteniendo registros de la base de datos y usando plantillas.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Lee la
        <a href="/es/docs/Learn_web_development/Extensions/Server-side/Django/Introduction"
          >Introducción a Django</a
        >. Completa los temas previos del tutorial (incluyendo
        <a href="/es/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site"
          >Tutorial Django Parte 4: Sitio de Administración de Django</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender a crear mapas de URL y vistas simples (donde no se codifica ningún dato en la URL), obtener datos de los modelos y crear plantillas.
      </td>
    </tr>
  </tbody>
</table>

## Visión general

Después de definir nuestros modelos y crear algunos registros iniciales de la librería para trabajar con ellos, es hora de escribir el código que presenta esa información a los usuarios. Lo primero que necesitamos hacer es determinar qué información queremos mostrar en nuestras páginas, y definir las URL que usaremos para devolver esos recursos. Luego crearemos un mapeador de URL, vistas y plantillas para mostrar las páginas.

El siguiente diagrama describe el flujo de datos principal, y los componentes necesarios al manejar solicitudes y respuestas HTTP. Como ya implementamos el modelo, los principales componentes que crearemos son:

- Mapeadores de URL para reenviar las URL admitidas (y cualquier información codificada en las URL) a las funciones de vista apropiadas.
- Funciones de vista para obtener los datos solicitados desde los modelos, crear páginas HTML que muestren los datos, y devolver las páginas al usuario para que las vea en el navegador.
- Plantillas para usar al renderizar los datos en las vistas.

![Diagrama del flujo de datos principal: los componentes URL, Modelo, Vista y Plantilla necesarios al manejar solicitudes y respuestas HTTP en una aplicación Django. Una solicitud HTTP llega a un servidor Django y se reenvía al archivo "urls.py" del componente URL. La solicitud se reenvía a la vista apropiada. La vista puede leer y escribir datos desde el archivo "models.py" de los Modelos, que contiene el código relacionado con los modelos. La vista también accede al componente de plantilla HTML. La vista devuelve la respuesta al usuario.](basic-django.png)

Como verás en la siguiente sección, tenemos 5 páginas para mostrar, lo cual es demasiada información para documentar en un solo artículo. Por lo tanto, este artículo se centrará en cómo implementar la página de inicio, y cubriremos las demás páginas en un artículo posterior. Esto debería darte un buen entendimiento de principio a fin de cómo funcionan en la práctica los mapeadores de URL, las vistas y los modelos.

## Definiendo las URL de los recursos

Como esta versión de [LocalLibrary](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) es, esencialmente, de solo lectura para los usuarios finales, solo necesitamos proporcionar una página de llegada para el sitio (una página de inicio), y páginas que _muestren_ vistas de lista y de detalle para libros y autores.

Las URL que necesitaremos para nuestras páginas son:

- `catalog/` — La página de inicio (índice).
- `catalog/books/` — Una lista de todos los libros.
- `catalog/authors/` — Una lista de todos los autores.
- `catalog/book/<id>` — La vista de detalle de un libro en particular, con un campo de clave primaria de `<id>` (el valor predeterminado). Por ejemplo, la URL del tercer libro añadido a la lista será `/catalog/book/3`.
- `catalog/author/<id>` — La vista de detalle del autor específico con un campo de clave primaria de `<id>`. Por ejemplo, la URL del undécimo autor añadido a la lista será `/catalog/author/11`.

Las primeras tres URL devolverán la página índice, la lista de libros y la lista de autores. Estas URL no codifican ninguna información adicional, y las consultas que obtienen datos de la base de datos siempre serán las mismas. Sin embargo, los resultados que devuelven las consultas dependerán del contenido de la base de datos.

En cambio, las dos últimas URL mostrarán información detallada sobre un libro o autor específico. Estas URL codifican la identidad del elemento a mostrar (representado arriba por `<id>`). El mapeador de URL extraerá la información codificada y se la pasará a la vista, y la vista determinará dinámicamente qué información obtener de la base de datos. Al codificar la información en la URL, usaremos un único conjunto de mapeo de URL, vista y plantilla para manejar todos los libros (o autores).

> [!NOTE]
> Con Django puedes construir tus URL como necesites — puedes codificar información en el cuerpo de la URL como se muestra arriba, o incluir parámetros `GET` en la URL, por ejemplo `/book/?id=6`. Sea cual sea el enfoque que uses, las URL deben mantenerse limpias, lógicas y legibles, como [recomienda el W3C](https://www.w3.org/Provider/Style/URI).
> La documentación de Django recomienda codificar la información en el cuerpo de la URL para lograr un mejor diseño de URL.

Como se mencionó en el resumen, el resto de este artículo describe cómo construir la página índice.

## Creando la página índice

La primera página que crearemos es la página índice (`catalog/`). La página índice incluirá algo de HTML estático, junto con "conteos" generados de diferentes registros en la base de datos. Para que esto funcione crearemos un mapeo de URL, una vista y una plantilla.

> [!NOTE]
> Vale la pena prestar un poco de atención extra en esta sección. La mayor parte de la información también se aplica a las demás páginas que crearemos.

### Mapeo de URL

Cuando creamos el [sitio web esqueleto](/es/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), actualizamos el archivo **locallibrary/urls.py** para asegurarnos de que, siempre que se reciba una URL que empiece con `catalog/`, el módulo _URLConf_ `catalog.urls` procese la subcadena restante.

El siguiente fragmento de código de **locallibrary/urls.py** incluye el módulo `catalog.urls`:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Siempre que Django encuentra la función de importación [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include), divide la cadena de la URL en el carácter final designado y envía la subcadena restante al módulo _URLConf_ incluido para que continúe procesándola.

También creamos un archivo marcador de posición para el módulo _URLConf_, llamado **/catalog/urls.py**.
Añade las siguientes líneas a ese archivo:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

La función `path()` define lo siguiente:

- Un patrón de URL, que es una cadena vacía: `''`. Analizaremos los patrones de URL en detalle cuando trabajemos en las demás vistas.
- Una función de vista que se llamará si se detecta el patrón de URL: `views.index`, que es la función llamada `index()` en el archivo **views.py**.

La función `path()` también especifica un parámetro `name`, que es un identificador único para _este_ mapeo de URL en particular. Puedes usar el nombre para "revertir" el mapeador, es decir, para crear dinámicamente una URL que apunte al recurso que el mapeador está diseñado para manejar.
Por ejemplo, podemos usar el parámetro name para enlazar a nuestra página de inicio desde cualquier otra página añadiendo el siguiente enlace en una plantilla:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Podríamos codificar el enlace de forma fija, como en `<a href="/catalog/">Home</a>`, pero si cambiamos el patrón de nuestra página de inicio, por ejemplo, a `/catalog/index`, las plantillas ya no enlazarían correctamente. Usar un mapeo de URL invertido es más robusto.

### Vista (basada en funciones)

Una vista es una función que procesa una solicitud HTTP, obtiene los datos necesarios de la base de datos, renderiza los datos en una página HTML usando una plantilla HTML, y luego devuelve el HTML generado en una respuesta HTTP para mostrar la página al usuario. La vista índice sigue este modelo — obtiene información sobre el número de registros de `Book`, `BookInstance`, `BookInstance` disponibles y `Author` que tenemos en la base de datos, y pasa esa información a una plantilla para mostrarla.

Abre **catalog/views.py** y observa que el archivo ya importa la función de atajo [render()](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) para generar un archivo HTML usando una plantilla y datos:

```python
from django.shortcuts import render

# Create your views here.
```

Pega las siguientes líneas al final del archivo:

```python
from .models import Book, Author, BookInstance, Genre

def index(request):
    """View function for home page of site."""

    # Generate counts of some of the main objects
    num_books = Book.objects.all().count()
    num_instances = BookInstance.objects.all().count()

    # Available books (status = 'a')
    num_instances_available = BookInstance.objects.filter(status__exact='a').count()

    # The 'all()' is implied by default.
    num_authors = Author.objects.count()

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
    }

    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)
```

La primera línea importa las clases de modelo que usaremos para acceder a los datos en todas nuestras vistas.

La primera parte de la función de vista obtiene el número de registros usando el atributo `objects.all()` en las clases de modelo. También obtiene una lista de objetos `BookInstance` que tienen el valor 'a' (Disponible) en el campo status. Puedes encontrar más información sobre cómo acceder a los datos de los modelos en nuestro tutorial anterior [Tutorial de Django Parte 3: Uso de modelos > Búsqueda de registros](/es/docs/Learn_web_development/Extensions/Server-side/Django/Models#búsqueda_de_registros).

Al final de la función de vista llamamos a la función `render()` para crear una página HTML y devolverla como respuesta. Esta función de atajo envuelve varias otras funciones para simplificar un caso de uso muy común. La función `render()` acepta los siguientes parámetros:

- el objeto `request` original, que es un `HttpRequest`.
- una plantilla HTML con marcadores de posición para los datos.
- una variable `context`, que es un diccionario de Python que contiene los datos a insertar en los marcadores de posición.

Hablaremos más sobre las plantillas y la variable `context` en la siguiente sección. ¡Vamos a crear nuestra plantilla para poder mostrarle algo al usuario!

### Plantilla

Una plantilla es un archivo de texto que define la estructura o el diseño de un archivo (como una página HTML), y usa marcadores de posición para representar el contenido real.

Una aplicación de Django creada con **startapp** (como el esqueleto de este ejemplo) buscará plantillas en un subdirectorio llamado "**templates**" de tus aplicaciones. Por ejemplo, en la vista índice que acabamos de añadir, la función `render()` esperará encontrar el archivo **_index.html_** en **/django-locallibrary-tutorial/catalog/templates/** y generará un error si el archivo no está presente.

Puedes comprobarlo guardando los cambios anteriores y accediendo a `127.0.0.1:8000` en tu navegador: mostrará un mensaje de error bastante intuitivo, "TemplateDoesNotExist at /catalog/", y otros detalles.

> [!NOTE]
> Según el archivo de configuración de tu proyecto, Django buscará plantillas en varios lugares, buscando en tus aplicaciones instaladas por defecto. Puedes encontrar más información sobre cómo Django encuentra las plantillas y qué formatos de plantilla admite en [la sección Templates de la documentación de Django](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Extendiendo plantillas

La plantilla índice necesitará el marcado HTML estándar para la cabecera y el cuerpo, junto con secciones de navegación que enlacen a las demás páginas del sitio (que todavía no hemos creado), y secciones que muestren un texto introductorio y los datos de los libros.

Gran parte de la estructura HTML y de navegación será la misma en todas las páginas de nuestro sitio. En lugar de duplicar el código repetitivo en cada página, puedes usar el lenguaje de plantillas de Django para declarar una plantilla base, y luego extenderla para reemplazar solo las partes que son distintas en cada página específica.

El siguiente fragmento de código es un ejemplo de plantilla base a partir de un archivo **base_generic.html**.
Crearemos la plantilla para LocalLibrary en breve.
El ejemplo de abajo incluye HTML común con secciones para un título, una barra lateral y el contenido principal, marcadas con las etiquetas de plantilla `block` y `endblock`.
Puedes dejar los bloques vacíos, o incluir contenido predeterminado para usar al renderizar páginas derivadas de la plantilla.

> [!NOTE]
> Las _etiquetas_ de plantilla son funciones que puedes usar en una plantilla para recorrer listas, realizar operaciones condicionales según el valor de una variable, etc. Además de las etiquetas de plantilla, la sintaxis de plantillas te permite hacer referencia a variables que se pasan a la plantilla desde la vista, y usar _filtros de plantilla_ para dar formato a las variables (por ejemplo, para convertir una cadena a minúsculas).

```django
<!doctype html>
<html lang="en">
  <head>
    {% block title %}
      <title>Local Library</title>
    {% endblock %}
  </head>
  <body>
    {% block sidebar %}
      <!-- insert default navigation text for every page -->
    {% endblock %}
    {% block content %}
      <!-- default content text (typically empty) -->
    {% endblock %}
  </body>
</html>
```

Al definir una plantilla para una vista en particular, primero especificamos la plantilla base usando la etiqueta de plantilla `extends` — mira el ejemplo de código de abajo. Luego declaramos qué secciones de la plantilla queremos reemplazar (si hay alguna), usando secciones `block`/`endblock` como en la plantilla base.

Por ejemplo, el siguiente fragmento de código muestra cómo usar la etiqueta de plantilla `extends` y sobrescribir el bloque `content`. El HTML generado incluirá el código y la estructura definidos en la plantilla base, incluyendo el contenido predeterminado que definiste en el bloque `title`, pero con el nuevo bloque `content` en lugar del predeterminado.

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Local Library Home</h1>
  <p>
    Welcome to LocalLibrary, a website developed by
    <em>Mozilla Developer Network</em>!
  </p>
{% endblock %}
```

#### La plantilla base de LocalLibrary

Usaremos el siguiente fragmento de código como plantilla base para el sitio web _LocalLibrary_. Como puedes ver, contiene algo de código HTML y define bloques para `title`, `sidebar` y `content`. Tenemos un título predeterminado y una barra lateral predeterminada con enlaces a listas de todos los libros y autores, ambos encerrados en bloques para poder cambiarlos fácilmente en el futuro.

> [!NOTE]
> También introducimos dos etiquetas de plantilla adicionales: `url` y `load static`. Estas etiquetas se explicarán en las siguientes secciones.

Crea un nuevo archivo **base_generic.html** en **/django-locallibrary-tutorial/catalog/templates/** y pega el siguiente código en el archivo:

```django
<!doctype html>
<html lang="en">
  <head>
    {% block title %}
      <title>Local Library</title>
    {% endblock %}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous">
    <!-- Add additional CSS in static file -->
    {% load static %}
    <link rel="stylesheet" href="{% static 'css/styles.css' %}" />
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
          {% block sidebar %}
            <ul class="sidebar-nav">
              <li><a href="{% url 'index' %}">Home</a></li>
              <li><a href="">All books</a></li>
              <li><a href="">All authors</a></li>
            </ul>
          {% endblock %}
        </div>
        <div class="col-sm-10 ">{% block content %}{% endblock %}</div>
      </div>
    </div>
  </body>
</html>
```

La plantilla incluye CSS de [Bootstrap](https://getbootstrap.com/) para mejorar el diseño y la presentación de la página HTML. Usar Bootstrap (u otro framework web del lado del cliente) es una forma rápida de crear una página atractiva que se muestre bien en distintos tamaños de pantalla.

La plantilla base también hace referencia a un archivo CSS local (**styles.css**) que proporciona estilos adicionales. Crea un archivo **styles.css** en **/django-locallibrary-tutorial/catalog/static/css/** y pega el siguiente código en el archivo:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### La plantilla índice

Crea un nuevo archivo HTML **index.html** en **/django-locallibrary-tutorial/catalog/templates/** y pega el siguiente código en el archivo.
Este código extiende nuestra plantilla base en la primera línea, y luego reemplaza el bloque `content` predeterminado de la plantilla.

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Local Library Home</h1>
  <p>
    Welcome to LocalLibrary, a website developed by
    <em>Mozilla Developer Network</em>!
  </p>
  <h2>Dynamic content</h2>
  <p>The library has the following record counts:</p>
  <ul>
    <li><strong>Books:</strong> \{{ num_books }}</li>
    <li><strong>Copies:</strong> \{{ num_instances }}</li>
    <li><strong>Copies available:</strong> \{{ num_instances_available }}</li>
    <li><strong>Authors:</strong> \{{ num_authors }}</li>
  </ul>
{% endblock %}
```

En la sección _Dynamic content_ declaramos marcadores de posición (_variables de plantilla_) para la información de la vista que queremos incluir.
Las variables se encierran entre llaves dobles.

> [!NOTE]
> Puedes reconocer fácilmente las variables de plantilla y las etiquetas de plantilla (funciones) — las variables se encierran entre llaves dobles (`\{{ num_books }}`), y las etiquetas se encierran entre llaves simples con signos de porcentaje (`{% extends "base_generic.html" %}`).

Lo importante que hay que notar aquí es que las variables se nombran con las _claves_ que pasamos en el diccionario `context` en la función `render()` de nuestra vista (mira el ejemplo de abajo).
Las variables se reemplazarán por sus _valores_ asociados cuando se renderice la plantilla.

```python
context = {
    'num_books': num_books,
    'num_instances': num_instances,
    'num_instances_available': num_instances_available,
    'num_authors': num_authors,
}

return render(request, 'index.html', context=context)
```

#### Referenciando archivos estáticos en las plantillas

Es probable que tu proyecto use recursos estáticos, incluyendo JavaScript, CSS e imágenes. Como la ubicación de estos archivos podría no conocerse (o podría cambiar), Django te permite especificar la ubicación en tus plantillas de forma relativa al parámetro de configuración global `STATIC_URL`. El sitio web esqueleto predeterminado establece el valor de `STATIC_URL` en `"/static/"`, pero podrías elegir alojar estos archivos en una red de distribución de contenidos o en otro lugar.

Dentro de la plantilla, primero llamas a la etiqueta de plantilla `load` especificando "static" para añadir la biblioteca de plantillas, como se muestra en el ejemplo de código de abajo. Luego puedes usar la etiqueta de plantilla `static` y especificar la URL relativa del archivo que necesitas.

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Puedes añadir una imagen a la página de forma similar, por ejemplo:

```django
{% load static %}
<img
  src="{% static 'images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

> [!NOTE]
> Los ejemplos de arriba especifican dónde se ubican los archivos, pero Django no los sirve por defecto. Configuramos el servidor web de desarrollo para servir archivos modificando el mapeador de URL global (**/django-locallibrary-tutorial/locallibrary/urls.py**) cuando [creamos el esqueleto del sitio web](/es/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), pero todavía necesitamos habilitar el servicio de archivos en producción. Veremos esto más adelante.

Para más información sobre cómo trabajar con archivos estáticos consulta [Managing static files](https://docs.djangoproject.com/en/5.0/howto/static-files/) en la documentación de Django.

#### Enlazando a URL

La plantilla base de arriba introdujo la etiqueta de plantilla `url`.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Esta etiqueta toma el nombre de una función `path()` llamada en tu **urls.py**, y los valores de cualquier argumento que la vista asociada reciba desde esa función, y devuelve una URL que puedes usar para enlazar al recurso.

#### Configurando dónde buscar las plantillas

El lugar donde Django busca las plantillas se especifica en el objeto `TEMPLATES` del archivo **settings.py**.
El archivo **settings.py** predeterminado (tal como se creó para este tutorial) se ve algo así:

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

El valor `'APP_DIRS': True` es el más importante, ya que le indica a Django que busque plantillas en un subdirectorio de cada aplicación del proyecto, llamado "templates" (esto facilita agrupar las plantillas con su aplicación asociada para reutilizarlas fácilmente).

También podemos especificar ubicaciones concretas para que Django busque directorios usando `'DIRS': []` (aunque todavía no lo necesitamos).

> [!NOTE]
> Puedes encontrar más información sobre cómo Django encuentra las plantillas y qué formatos de plantilla admite en [la sección Templates de la documentación de Django](https://docs.djangoproject.com/en/5.0/topics/templates/).

## ¿Cómo se ve?

En este punto ya hemos creado todos los recursos necesarios para mostrar la página índice. Ejecuta el servidor (`python3 manage.py runserver`) y abre `http://127.0.0.1:8000/` en tu navegador. Si todo está configurado correctamente, tu sitio debería verse como en la siguiente captura de pantalla.

![Página índice del sitio web LocalLibrary](index_page_ok.png)

> [!NOTE]
> Los enlaces **All books** y **All authors** todavía no funcionarán porque las rutas, vistas y plantillas para esas páginas aún no están definidas. Solo insertamos marcadores de posición para esos enlaces en la plantilla `base_generic.html`.

## Ponte a prueba

Aquí tienes un par de tareas para poner a prueba tu familiaridad con las consultas a modelos, las vistas y las plantillas.

1. La [plantilla base](#la_plantilla_base_de_locallibrary) de LocalLibrary incluye un bloque `title`. Sobrescribe este bloque en la [plantilla índice](#la_plantilla_índice) y crea un nuevo título para la página.

   > [!NOTE]
   > La sección [Extendiendo plantillas](#extendiendo_plantillas) explica cómo crear bloques y extender un bloque en otra plantilla.

2. Modifica la [vista](#vista_basada_en_funciones) para generar conteos de _géneros_ y _libros_ que contengan una palabra en particular (sin distinguir mayúsculas de minúsculas), y pasa los resultados al `context`. Puedes lograr esto de forma similar a como creamos y usamos `num_books` y `num_instances_available`. Luego actualiza la [plantilla índice](#la_plantilla_índice) para incluir estas variables.

## Resumen

Acabamos de crear la página de inicio de nuestro sitio — una página HTML que muestra varios registros de la base de datos y enlaces a otras páginas todavía por crear. Por el camino aprendimos información fundamental sobre mapeadores de URL, vistas, consultas a la base de datos con modelos, cómo pasar información a una plantilla desde una vista, y cómo crear y extender plantillas.

En el siguiente artículo construiremos sobre este conocimiento para crear las cuatro páginas restantes de nuestro sitio web.

## Véase también

- [Writing your first Django app, part 3: Views and Templates](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (documentación de Django)
- [URL dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (documentación de Django)
- [View functions](https://docs.djangoproject.com/en/5.0/topics/http/views/) (documentación de Django)
- [Templates](https://docs.djangoproject.com/en/5.0/topics/templates/) (documentación de Django)
- [Managing static files](https://docs.djangoproject.com/en/5.0/howto/static-files/) (documentación de Django)
- [Django shortcut functions](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (documentación de Django)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}
