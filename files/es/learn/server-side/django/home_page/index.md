---
title: "Tutorial de Django Parte 5: Creación de tu página de inicio"
slug: Learn/Server-side/Django/Home_page
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}

Estamos listos ahora para añadir el código para mostrar nuestra primera página entera — una página de inicio del sitio web de la [BibliotecaLocal](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website) que muestra cuántos registros tenemos de cada tipo de modelo y proporciona una barra lateral con enlaces de navegación a nuestras otras páginas. Por el camino ganaremos experiencia práctica en escritura básica de mapeos de URL y vistas, obtención de resgistros de la base de datos y uso de plantillas.

<table>
  <tbody>
    <tr>
      <th scope="row">Pre-requisitos:</th>
      <td>
        Lee la
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Server-side/Django/Introducci%C3%B3n"
          >Introducción a Django</a
        >. Completa los tópicos previos del tutorial (incluyendo
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Server-side/Django/Admin_site"
          >Tutorial de Django Parte 4: Sitio de administración de Django</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Entender cómo crear mapas url y vistas simples (sin información
          codificada en la URL), y cómo obtener información desde los modelos y
          crear plantillas.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Visión General

Ahora que hemos definindo nuestros modelos y hemos creado los primeros registros en la librería para trabajar, es hora de escribir código para presentar información a los usuarios. Lo primero que necesitamos es determinar que información queremos mostrar en nuestras páginas, y definir una URL apropiada hacia estos recursos. Vamos a necesitar crear el mapeador de URLs, las vistas y plantillas para mostrar estas páginas.

El siguiente diagrama es un recordatorio del principal flujo de datos y cosas necesarias para ser implementadas cuando se maneja una respuesta/petición en HTTP.
Los principales elementos que necesitamos crear son:

- Mapeadores URL para reenviar las URLs admitidas (y cualquier información codificada en las URLs) a las funciones de vista apropiadas.
- Funciones de vista para obtener los datos solicitados desde los modelos, crear una página HTML que muestre los datos, y devolverlo al usuario para que lo vea en el navegador.
- Plantillas usadas por las vistas para renderizar los datos.

![](basic-django.png)

Como verás en la siguiente sección, vamos a tener 5 páginas para mostrar, que es mucho que documentar en un artículo. Por lo tanto, en la mayor parte de este artículo nos concentraremos en mostrar como implementar solo la página de inicio (nos moverermos a otras páginas en un artículo subsecuente). Esto debe darte un buen entendimiento de extremo a extremo sobre como los mapeadores URL, vistas y modelos funcionan en la práctica.

## Definiendo el recurso URL

Como esta versión de _LocalLibrary_ es escencialmente solo de lectura para usuarios finales, debemos proveer una página de llegada para el sitio (una página de inicio), y páginas que _desplieguen_ listas y vistas detalladas para libros y autores.

Las URL que vamos a necesitar para nuestras páginas son:

- `catalog/` — La página home/index.
- `catalog/books/` — La lista de todos los libros.
- `catalog/authors/` — La lista de todos los autores.
- `catalog/book/<id>` — La vista detallada para el libro específico con un campo de clave primaria de `<id>` (el valor por defecto). Así por ejemplo, `/catalog/book/3`, para el tercer libro añadido.
- `catalog/author/<id>` — La vista detallada para el autor específico con un campo de clave primaria llamada `<id>`. Así por ejemplo, `/catalog/author/11`, para el 11vo autor añadido.

La tres primeras URLs son usadas para listar el índice, los libros y autores. Esto no codifica ninguna información adicional, y mientras los resultados retornados dependerán del contenido en la base de datos, las consultas que se ejecutan para obtener la información siempre serán las mismas.

En contraste las 2 URLs finales son usadas para mostrar información detallada sobre un libro o autor específico — estas codifican la identidad de los ítemes a mostrar en la URL (mostrado arriba como `<id>`). El mapeador URL puede extraer la información codificada y pasársela a la vista, donde se detarminará que información extraer de la base de datos. Al codificar la información en nuestra URL solo necesitamos un mapeador de URL, una vista, y un plantilla para manejar cada libro (o autor).

> **Nota:** Django te permite construir tus URLs de cualquier forma que quieras — puedes codificar información en el cuerpo de la URL como se muestra arriba o usando la obtención de parámetros `GET` de la URL(e.j. `/book/?id=6`). Culquier enfoque que uses, las URLs deben mantenerse limpias, lógicas y legibles ([observa el consejo del W3C aquí](https://www.w3.org/Provider/Style/URI)).
>
> La documentación Django tiende a recomendar la codificación de información en el cuerpo de la URL, una práctica que ellos creen que promueve mejores diseños de URL.

Como discutimos en la introducción, el resto de este articulo describe como construimos la página index.

## Creando la página index

La primera página que crearemos será la página index (`catalog/`). Esto desplegará un pequeño HTML estático, junto con algunos "contadores" calculados de diferentes registros en la base de datos. Para hacer este trabajo tendremos que crear un mapeador URL, una vista y una plantilla.

> **Nota:** Vale la pena prestar un poco de atención extra en esta sección. La mayoría del contenido es común para todas las páginas.

### Mapeador URL

Hemos creado un archivo básico **/catalog/urls.py** para nuestra aplicación catálogo cuando creamos el [esqueleto del sitio Web](/es/docs/Learn/Server-side/Django/skeleton_website). Las URLs de la aplicación catálogo fueron incluidas dentro del proyecto con un mapeador a `catalog/`, entonces las URLs que llegan a este mapeador deben empezar con `catalog/` (el mapeador funciona sobre todos los string en la URL después de la barra diagonal).

Abra **urls.py** y pegue la línea en negrita que aparece a continuación.

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Esta función `path()` define una cadena vacía (`''`), y una función vista que será llamada si el patrón es detectado (`views.index` — una función llamada `index()` en **views.py**). Hablaremos un poco más sobre los patrones URL más adelante en este tutorial, pero para este caso todo lo que necesitas saber es que en un patron de `''` coincidirá con una cadena vacía.

> **Nota:** Nota que en **/locallibrary/locallibrary/urls.py**
>
> ```py
> urlpatterns += [
>   path('catalog/', include('catalog.urls')),
> ]
> ```
>
> Siempre cuando Django se encuentra con `include()` ([`django.conf.urls.include()`](https://docs.djangoproject.com/en/1.11/ref/urls/#django.conf.urls.include)), corta cualquier parte de la URL que coincida hasta este punto y envía el resto de la cadena para incluir la configuración URL para el siguiente procesamiento.
>
> La URL coincidente es en realidad `catalog/` + \<cadena vacía> ( `/catalog/` es asumida ya que include() fue el método usado). Nuestra primera función vista será llamada si recibimos una consulta HTTP con una URL de `/catalog/`.

La función `path()` también especifica un parámetro `name`, que identifica de manera única _este_ mapeador de URL particular. Puedes usar este nombre para "revertir" el mapeador — para crear dinámicamente una URL que apunta al el recurso que el mapeador esta diseñado para manejar. Por ejemplo, con esto hecho ahora podemos enlazar nuestra página inicio creando el siguiente enlace en nuestra plantilla:

```django
<a href="{% url 'index' %}">Home</a>.
```

> **Nota:** Por su puesto podemos codificar a fuerza bruta el link anterior (e.j. `<a href="/catalog/">Home</a>`), pero entonces si cambiamos el patrón para nuestra página de inicio (e.j. a `/catalog/index`) la plantilla no podrá seguir enlazando correctamente. Usar un mapeador de url es mucho más flexible y robusto!

### Vista (basada-en-funciones)

Una vista es una función que procesa una consulta HTTP, trae datos desde la base de datos cuando los necesita, genera una página HTML renderizando estos datos unando una plantilla HTML, y luego retorna el HTML en una respuesta HTTP para ser mostrada al usuario. La vista del índice sigue este modelo — extrae información sobre cuantos `Book`, `BookInstance`, `BookInstance` disponibles y registros `Author` tenemos en la base de datos, y los pasa a una plantilla para mostrarlos.

Abre **catalog/views.py**, y nota que el archivo ya importa el atajo de la función [render()](https://docs.djangoproject.com/en/1.10/topics/http/shortcuts/#django.shortcuts.render) que genera archivos HTML usando una plantilla y datos.

```python
from django.shortcuts import render

# Create your views here.
```

Copia el siguiente código al final del archivo. La primera linea importa las clases de los modelos que usaremos para acceder a los datos en todas nuestras vistas.

```python
from .models import Book, Author, BookInstance, Genre

def index(request):
    """
    Función vista para la página inicio del sitio.
    """
    # Genera contadores de algunos de los objetos principales
    num_books=Book.objects.all().count()
    num_instances=BookInstance.objects.all().count()
    # Libros disponibles (status = 'a')
    num_instances_available=BookInstance.objects.filter(status__exact='a').count()
    num_authors=Author.objects.count()  # El 'all()' esta implícito por defecto.

    # Renderiza la plantilla HTML index.html con los datos en la variable contexto
    return render(
        request,
        'index.html',
        context={'num_books':num_books,'num_instances':num_instances,'num_instances_available':num_instances_available,'num_authors':num_authors},
    )
```

La primera parte de la función vista extrae contadores de registros usando el atributo `objects.all()` en las clases del modelo. Tambien obtiene una lista de los objetos `BookInstance` que tienen un valor del campo status de 'a' (Disponible). Puedes encontrar un poco más sobre cómo acceder desde modelos en nuestro tutorial previo ([Django Tutorial Part 3: Usando modelos > Buscando registros](/es/docs/Learn/Server-side/Django/Models#Searching_for_records)).

Al final de la función invocamos a la función `render()` para crear y retornar una página HTML como una respuesta (esta función atajo envuelve una serie, simplicando este caso de uso muy común). Esta recibe como parametros el objeto `request original` (una `ConsultaHttp`), una plantilla HTML con marcadores para los datos, y una variable de `contexto` (un diccionario Python que contiene los datos que serán insertados en esos marcadores).

Hablaremos más sobre la plantilla y la variable de contexto en la siguiente sección; vamos a crear nuestra plantilla para así de hecho mostrarle algo al usuario!

### Plantilla

Una plantilla es un archivo de texto que determina la estructura o diseño de un archivo (como una página HTML), con marcadores usados para representar el contenido real. Django automaticamente buscará plantillas en un directorio llamado '**templates**' de su aplicación. Así por ejemplo, en la vista índice que acabamos de agregar, la función `render()` esperará poder encontrar el archivo **/locallibrary/catalog/templates/_index.html_**, y entregará un error si el archivo no puede ser encontrado. Puede ver esto si guarda los cambios anteriores y vuelve a su navegador — accediendo a `127.0.0.1:8000` ahora le entregará un mensaje de error bastante intuitivo "TemplateDoesNotExist at /catalog/", más otros detalles.

> **Nota:** Django buscará en una serie de lugares por plantillas, basandose en su archivo de configuraciones de proyectos (buscar en su aplicación instalada es una configuración por defecto!). Puede encontrar más sobre como Django encuentra plantillas y qué formatos de plantillas soporta [Templates](https://docs.djangoproject.com/en/1.10/topics/templates/) (Django docs).

#### Plantillas extendidas

La plantilla índice va a necesitar marcado HTML estándar para la cabecera y el cuerpo, junto con secciones para navegar (a otras páginas en el sitio que todavía no hemos creado) y para mostrar algún texto introductorio y nuestros datos de libro. La mayoría de este texto (el HTML y la estructura de navegación) será el mismo para cada página en nuestro sitio. En lugar de obligar a los desarrolladores a duplicar este texto en cada página, el lenguaje de plantillas de Django le permite declarar una plantilla base y luego extenderla, reemplazando solo las porciones que son distintos para cada página específica.

Por ejemplo, un plantilla base **base_generic.html** podría verse como el texto de abajo. Como puedes ver, este contiene algo de HTML "común" y secciones para el título, barra lateral, y contendio marcados usando las etiquetas de plantillas llamadas `block` y `endblock` (mostradas en negrita). Los bloques pueden estar vacíos, o tener contenido que será usado "por defecto" para páginas derivadas.

> **Nota:** Las etiquetas de plantilla son como funciones que puede usar en una plantilla para recorrer listas, realizar operaciones condicionales basadas en el valor de una variable, etc. Además de las etiquetas de plantilla, la sintaxis de plantilla te permite referenciar variables de plantilla (que son pasadas en la plantilla desde la vista) y usar _filtros de plantilla_, que reformatean las variables (por ejemplo, establecer una cadena en minúsculas).

```django
<!DOCTYPE html>
<html lang="en">
<head>
  {% block title %}<title>Local Library</title>{% endblock %}
</head>

<body>
  {% block sidebar %}<!-- insert default navigation text for every page -->{% endblock %}
  {% block content %}<!-- default content text (typically empty) -->{% endblock %}
</body>
</html>
```

Cuando queremos definir una plantilla para una vista en particular, primero especificamos la plantila base (con la etiqueta de plantilla `extends` — vea el código siguiente). Si ahí hay alguna seccón que queremos reemplazar en la plantilla declaramos esto, usando secciones `block`/`endblock` idénticas a las usadas en la plantilla base.

Por ejemplo, el fragmento de código que sigue muestra como usar la etiqueta de plantilla `extends`, y sobrescribe el bloque `content`. El HTML final producido tendrá todo el HTML y la estructura defininda en la plantilla base (incluyendo el contenido por defecto que ha definido dentro del bloque `title`), pero con tu nuevo bloque `content` insertado en lugar del que venía por defecto.

```django
{% extends "base_generic.html" %}

{% block content %}
<h1>Local Library Home</h1>
<p>Welcome to <em>LocalLibrary</em>, a very basic Django website developed as a tutorial example on the Mozilla Developer Network.</p>
{% endblock %}
```

#### La plantilla base de LocalLibrary

La plantilla base que pensamos usar para el siito web _LocalLibrary_ se muestra abajo. Como puedes ver, contiene algo de HTML y bloques definidos para `title`, `sidebar` y `content`. Tenemos un título por defecto (que podríamos querer cambiar) y una barra lateral por defecto con enlaces a listas de todos los libros y autores (que probablemente no querramos cambiar, pero hemos dejado abierta la posibilidad de hacerlo si es necesario, poniéndolo en un bloque).

> **Nota:** También introducimos dos etiquetas de plantilla adicionales: `url` y `load static`. Se discute sobre ellas en secciones posteriores.

Crea un nuevo archivo — **/locallibrary/catalog/templates/_base_generic.html_** — y pon en él el siguiente contenido:

```django
<!DOCTYPE html>
<html lang="en">
<head>

  {% block title %}<title>Local Library</title>{% endblock %}
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <!-- Add additional CSS in static file -->
  {% load static %}
  <link rel="stylesheet" href="{% static 'css/styles.css' %}">
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
      <div class="col-sm-10 ">
      {% block content %}{% endblock %}
      </div>
    </div>

  </div>
</body>
</html>
```

La plantilla usa (e incluye) JavaScript y CSS desde [Bootstrap](http://getbootstrap.com/) para mejorar el diseño y la presentación de la página HTML. Usar Bootstrap u otro framework web del lado del cliente es una manera rápida de crear una página atractiva que puede escalarse bien en diferentes tamaños de navegador, y también nos permite concentrarnos en la presentación de la página sin tener que entrar en ninguno de los detalles — ¡queremos enfocarnos nada más en el código del lado del servidor aquí!

La plantilla base también hace referencia a un archivo css local (**styles.css**) que brinda algo más de estilo. Crea **/locallibrary/catalog/static/css/styles.css** y pon en él el siguiente contenido:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### La plantilla index

Crea el archivo HTML **/locallibrary/catalog/templates/_index.html_** y pon en él el contenido que se muestra abajo. Como puedes ver, extendemos nuestra plantilla base en la primera línea, y luego reemplazamos el bloque `content` por defecto con uno nuevo para esta plantilla.

```django
{% extends "base_generic.html" %}

{% block content %}
<h1>Local Library Home</h1>

  <p>Welcome to <em>LocalLibrary</em>, a very basic Django website developed as a tutorial example on the Mozilla Developer Network.</p>

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

En la sección _Dynamic content_ hemos declarado marcadores de posición (_variables de plantilla_) para la información que quisimos incluir desde la vista. Las variables se marcan usando la sintaxis de "doble corchete" o "llaves" (ver lo que está en negrita arriba).

> **Nota:** Puedes reconocer fácilmente si estás trabajando con variables de plantilla o con etiquetas de plantilla (funciones) porque las variables tienen llaves dobles (`\{{ num_books }}`) mientras que las etiquetas están encerradas entre llaves simples con signos de porcentaje (`{% extends "base_generic.html" %}`).

Lo importante de todo esto es que estas variables se nombran con las claves que enviamos dentro del diccionario `context` en la función `render()` de nuestra vista (mira abajo); estas variables serán reemplazadas por sus valores asociados cuando la plantilla sea renderizada.

```python
return render(
    request,
    'index.html',
     context={'num_books':num_books,'num_instances':num_instances,'num_instances_available':num_instances_available,'num_authors':num_authors},
)
```

#### Referenciando archivos estáticos en las plantillas

Es probable que uses recursos estáticos en tu proyecto, incluyendo JavaScript, CSS e imágenes. Debido a que la ubicación de estos archivos podría ser desconocida (o podría cambiar), Django te permite especificar la ubicación de los mismos dentro de tus plantillas de forma relativa al parámetro global `STATIC_URL` (el sitio web esqueleto por defecto establece el valor de `STATIC_URL` a '`/static/`', pero puedes elegir alojar los archivos en una red de distribución de contenidos o en cualquier otro lugar).

Dentro de la plantilla, primero llamas a la etiqueta de plantilla `load` especificando "static" para añadir esta biblioteca de plantilla (como se muestra abajo). Luego de que static se carga, puedes usar la etiqueta de plantilla `static` especificando la URL relativa del archivo de interés.

```django
 <!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}">
```

Si quisieras podrías añadir una imagen a la página de forma similar. Por ejemplo:

```django
{% load static %}
<img src="{% static 'catalog/images/local_library_model_uml.png' %}" alt="My image" style="width:555px;height:540px;"/>
```

> **Nota:** Los cambios de arriba especifican dónde se localizan los archivos, pero Django no los sirve por defecto. Si bien habilitamos este servicio para el servidor web de desarrollo en el mapeador URL global (**/locallibrary/locallibrary/urls.py**) cuando [creamos el esqueleto del sitio web](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiq2o-V3PXbAhVM0FMKHcNzAkcQFggnMAA&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fes%2Fdocs%2FLearn%2FServer-side%2FDjango%2Fskeleton_website&usg=AOvVaw2VIIkwGelK5OnECR-4u4sU), aún necesitarás configurar este servicio para producción. Hablaramos de esto más tarde.

Para mayor información sobre el trabajo con archivos estáticos revisa [Managing static files](https://docs.djangoproject.com/en/1.10/howto/static-files/) (Django docs).

#### Enlazando con URLs

En la plantilla base de arriba se introdujo la etiqueta de plantilla `url`.

```python
<li><a href="{% url 'index' %}">Home</a></li>
```

Esta etiqueta toma el nombre de una función `path()` llamada en tu archivo **urls.py,** y valores para cualquier argumento que la vista asociada recibirá desde tal función, y devuelve una URL que puedes usar para enlazar con el recurso.

#### Configurando adonde buscar las plantillas

Para que Django encuentre los archivos de plantillas es necesario editar el archivo settings.py agregando el directorio donde creamos nuestras plantillas en el objeto TEMPLATES, como indica la linea en negrita a continuación:

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates'),
        ],
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

## ¿Cómo se ve?

En este punto deberíamos haber creado todo lo necesario para desplegar la página index. Corre el servidor (`python3 manage.py runserver`) y dirige tu navegador a `http://127.0.0.1:8000/`. Si todo se configuró correctamente, tu sitio debería verse similar a la siguiente captura de pantalla.

![Index page for LocalLibrary website](index_page_ok.png)

> **Nota:** Aún no podrás usar los enlaces **All books** y **All authors** porque las URLs, vistas y plantillas para dichas páginas no se han definido (al momento solo hemos insertado marcadores de posición para esos enlaces en la plantilla `base_generic.html`).

## Rétate a tí mismo

Aquí hay un par de tareas para probar tu familiaridad con consultas a modelos, vistas y plantillas.

1. Declara un nuevo bloque _title_ en la plantilla _index_ y cambia el título de la página para coincidir con esta página en particular.
2. Modifica la vista para generar un conteo de géneros y otro de libros que contengan una palabra en particular (no sensible a mayúsculas y minúsculas) y luego añade estos campos a la plantilla.

## Resumen

Hemos creado la página de inicio para nuestro sitio — una página HTML que despliega algunos conteos de registros de la base de datos y contiene enlaces a otras de nuestras páginas que aún nos faltan por crear. Sobre la marcha hemos adquirido mucha información fundamental sobre mapeadores URL, vistas, consultas a la base de datos usando nuestros modelos, cómo enviar información a una plantilla desde nuestra vista, y cómo crear y extender plantillas.

En nuestro siguiente artículo nos basaremos en nuestro conocimiento para crear las otras cuatro páginas.

## Mira también

- [Escribiendo tu primera aplicación Django, parte 3: Vistas y Plantillas](https://docs.djangoproject.com/en/1.10/intro/tutorial03/) (Django docs)
- [Despachador URL](https://docs.djangoproject.com/en/1.10/topics/http/urls/) (Django docs)
- [Funciones de vista](https://docs.djangoproject.com/en/1.10/topics/http/views/) (DJango docs)
- [Plantillas](https://docs.djangoproject.com/en/1.10/topics/templates/) (Django docs)
- [Administrando archivos estáticos](https://docs.djangoproject.com/en/1.10/howto/static-files/) (Django docs)
- [Funciones atajo de Django](https://docs.djangoproject.com/en/1.10/topics/http/shortcuts/#django.shortcuts.render) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}
