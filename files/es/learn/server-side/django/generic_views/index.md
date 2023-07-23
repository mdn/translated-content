---
title: "Tutorial de Django Parte 6: Listas genéricas y vistas de detalle"
slug: Learn/Server-side/Django/Generic_views
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}

Este tutorial extiende nuestro sitio web de la [BibliotecaLocal](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website), añadiendo páginas de listas y detalles de libros y autores. Aquí aprenderemos sobre vistas genéricas basadas en clases, y mostraremos cómo éstas pueden reducir la cantidad de código que tienes que escribir para casos de uso común. También entraremos en el manejo de URL en gran detalle, mostrando cómo realizar un emparejamiento de patrones básico.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        <p>
          Completa todos los tópicos anteriores del tutorial, incluyendo
          <a
            href="https://developer.mozilla.org/es/docs/Learn/Server-side/Django/Home_page"
            >Tutorial de Django Parte 5: Creación de tu página de inicio</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Entender dónde y cómo usar las vistas genéricas basadas en clases, y
          cómo extraer patrones desde las URLs y enviar la información a las
          vistas.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Visión General

En este tutorial vamos a completar la primera versión del sitio web [BibliotecaLocal](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website) añadiendo páginas de lista y detalle para libros y autores (o para ser más precisos, te mostraremos cómo implementar las páginas de libros, ¡y te dejaremos crear las páginas de autores por tí mismo!)

El proceso es similar al de creación de la página índice, que mostramos en el tutorial anterior. Aquí también necesitaremos crear mapeos URL, vistas y plantillas. La principal diferencia es que para las páginas de detalle tendremos el reto adicional de extraer información desde patrones en las URLs y pasarla a la vista. Para estas páginas vamos a mostrar un tipo de vista completamente diferente: vistas genéricas de lista y detalle basadas en clases. Estas pueden reducir significativamente la cantidad de código requerido para las vistas, haciéndolas más fáciles de escribir y mantener.

La parte final del tutorial mostrará cómo paginar tu información al usar vistas de lista genéricas basadas en clases.

## Página de lista de libros

La página de lista de libros desplegará una lista con todos los registros de libros disponibles en la página, a la cual se accede usando la URL: `catalog/books/`. La página desplegará un título y un autor para cada registro, siendo el título un hipervículo a la página de detalle de libro relacionada. La página tendrá la misma estructura y navegación que todas las demás páginas en el sitio, y por tanto podemos extender la plantilla base (**base_generic.html**) que creamos en el tutorial anterior.

### Mapeo URL

Abre **/catalog/urls.py** y copia allí la línea que se muestra abajo en negrita. De manera muy similar al mapeo de nuestro índice, esta función `path()` define un patrón que se comparará con la URL (**'books/'**), una función de vista a la que se llamará si la URL coincide (`views.BookListView.as_view()`) y un nombre para esta asignación concreta.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Como se discutió en el tutorial anterior, la URL debió previamente haber coincidido con `/catalog`, de modo que la vista será llamada en realidad para la URL: `/catalog/books/`.

La función de vista tiene un formato diferente al anterior — eso es porque esta vista será en realidad implementada como una clase. Heredaremos desde una función de vista genérica existente que ya hace la mayoría de lo que queremos que esta función de vista haga, en lugar de escribir la nuestra propia desde el inicio.

Para las vistas basadas en clases de Django, accedemos a una función de vista apropiada llamando al método de clase `as_view()`. Esto hace todo el trabajo de crear una instancia de la clase, y asegurarse de que los métodos controladores correctos sean llamados para las solicitudes HTTP entrantes.

### Vista (basada en clases)

Podríamos fácilmente escribir la vista de lista de libros como una función regular (tal como nuestra vista de índice anterior), la cual consultaría a la base de datos por todos los libros, y luego llamar a `render()` para pasar dicha lista a una plantilla específica. Sin embargo, en lugar de eso usaremos una vista de lista genérica basada en clases (ListView) — una clase que hereda desde una vista existente. Debido a que la vista genérica ya implementa la mayoría de la funcionalidad que necesitamos, y sigue la práctica adecuada de Django, seremos capaces de crear una vista de lista más robusta con menos código, menos repetición, y por último menos mantenimiento.

Abre **catalog/views.py**, y copia el siguiente código al final del archivo:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

¡Eso es todo! La vista genérica consultará a la base de datos para obtener todos los registros del modelo especificado (`Book`) y renderizará una plantilla ubicada en **/locallibrary/catalog/templates/catalog/book_list.html** (que crearemos más abajo). Dentro de la plantilla puedes acceder a la lista de libros mediante la variable de plantilla llamada `object_list` O `book_list` (esto es, genéricamente, "`nombre_del_modelo_list`").

> **Nota:** Esta ruta complicada para la ubicación de la plantilla no es un error de digitación — las vistas genéricas buscan plantillas en `/application_name/the_model_name_list.html` (`catalog/book_list.html` en este caso) dentro del directorio de la aplicación `/application_name/templates/` (`/catalog/templates/`).

Puedes añadir atributos para cambiar el comportamiento por defecto de arriba. Por ejemplo, puedes especificar otro archivo de plantilla si necesitas tener múltiples vistas que usen el mismo modelo, o puedes querer usar un nombre diferente de variable de plantilla si `book_list` no resulta intuitivo para tu caso particular de uso de plantilla. Posiblemente la variación más útil es cambiar/filtrar el conjunto de resultados que se devuelve, así, en lugar de listar todos los libros podrías listar los 5 libros más leídos por otros usuarios.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'my_book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location
```

#### Sobreescribiendo métodos en vistas basadas en clases

Si bien no necesitamos hacerlo aquí, puedes también sobreescribir algunos de los métodos de clase.

Por ejemplo, podemos sobreescribir el método `get_queryset()` para cambiar la lista de registros devueltos. Esto es más flexible que simplemente ajustar el atributo `queryset` como lo hicimos en el fragmento de código anterior (aunque en este caso no existe un beneficio real):

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
```

Podríamos también sobreescribir `get_context_data()` con el objeto de pasar variables de contexto adicionales a la plantilla (ej. la lista de libros se pasa por defecto). El fragmento de abajo muestra cómo añadir una variable llamada "some_data" al contexto (la misma estaría entonces disponible como una variable de plantilla).

```python
class BookListView(generic.ListView):
    model = Book

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(BookListView, self).get_context_data(**kwargs)
        # Get the blog from id and add it to the context
        context['some_data'] = 'This is just some data'
        return context
```

Cuando se hace esto es importante seguir este patrón:

- Primero obtener el contexto existente desde nuestra superclase.
- Luego añadir tu nueva información de contexto.
- Luego devolver el nuevo contexto (actualizado).

> **Nota:** Revisa [Built-in class-based generic views](https://docs.djangoproject.com/en/1.10/topics/class-based-views/generic-display/) (Django docs) para muchos más ejemplos de lo que puedes hacer.

### Creando la plantilla de Vista de Lista

Crea el archivo HTML **/locallibrary/catalog/templates/catalog/book_list.html** y copia allí el texto de abajo. Como se discutió antes, este es el archivo de plantilla por defecto esperado por la vista de lista genérica basada en clases (para un modelo llamado `Book` en una aplicación llamada `catalog`).

Las plantillas para las vistas genéricas son como cualquier otra plantilla (si bien el contexto/información enviada a la plantilla puede variar, por supuesto). Como con nuestra plantilla _índice_, extendemos nuestra plantilla base en la primera línea, y luego reemplazamos el bloque llamado `content`.

```django
{% extends "base_generic.html" %}

{% block content %}
    <h1>Book List</h1>

    {% if book_list %}
    <ul>

      {% for book in book_list %}
      <li>
        <a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
      </li>
      {% endfor %}

    </ul>
    {% else %}
      <p>There are no books in the library.</p>
    {% endif %}
{% endblock %}
```

La vista envía el contexto (lista de libros) por defecto como `object_list` y `book_list` (son áliases, cualquiera de ellos funcionará).

#### Ejecución condicional

Usamos las etiquetas de plantilla [`if`](https://docs.djangoproject.com/en/1.10/ref/templates/builtins/#if), `else` y `endif` para revisar si la `book_list` ha sido definida y no está vacía. Si `book_list` está vacía, entonces la cláusula `else` despliega un texto que explica que no existen libros a listar. Si `Book_list` no está vacía, entonces iteramos a través de la lista de libros.

```django
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

La condicional de arriba solo revisa un caso, pero puedes revisar condiciones adicionales usando la etiqueta de plantilla `elif` (ej. `{% elif var2 %}`). Para mayor información sobre operadores condicionales mira: [if](https://docs.djangoproject.com/en/1.10/ref/templates/builtins/#if), [ifequal/ifnotequal](https://docs.djangoproject.com/en/1.10/ref/templates/builtins/#ifequal-and-ifnotequal), y [ifchanged](https://docs.djangoproject.com/en/1.10/ref/templates/builtins/#ifchanged) en [Built-in template tags and filters](https://docs.djangoproject.com/en/1.10/ref/templates/builtins) (Django Docs).

#### Lazos For

La plantilla usa las etiquetas de plantilla [for](https://docs.djangoproject.com/en/1.10/ref/templates/builtins/#for) y `endfor` para iterar a través de la lista de libros, como se muestra abajo. Cada iteración asigna a la variable de plantilla `book` la información para el ítem actual de la lista.

```django
{% for book in book_list %}
  <li> <!-- code here get information from each book item --> </li>
{% endfor %}
```

Si bien no se usan aquí, Django creará otras variables dentro del lazo que puedes usar para monitorear la iteración. Por ejemplo, puedes revisar la variable `forloop.last` para realizar un procesamiento condicional la última vez que el lazo se ejecuta.

#### Accediendo a las variables

El código dentro del lazo crea un ítem de lista para cada libro, que muestra tanto el título (como un enlace hacia la vista de detalle que aún no creamos) como el autor.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Accedemos a los _campos_ del registro del libro asociado usando la "notación de punto" (ej. `book.title` y `book.author`), donde el texto que sigue a la palabra `book` es el nombre del campo (como se definió en el modelo).

También podemos invocar _funciones_ en el modelo desde dentro de nuestra plantilla — en este caso invocamos a `book.get_absolute_url()` para obtener una URL que se podría usar para desplegar la página de detalle relacionada. Esto funciona siempre y cuando la función no tenga ningún argumento (¡no hay forma de enviar argumentos!).

> **Nota:** Debemos tener cuidado de los "efectos secundarios" al invocar funciones en las plantillas. Aquí solo obtenemos una URL para desplegar, pero una función puede hacer casi cualquier cosa — ¡no quisieramos borrar nuestra base de datos (por ejemplo) solo por renderizar nuestra plantilla!

#### Actualizar la plantilla base

Abre la plantilla base (**/locallibrary/catalog/templates/_base_generic.html_**) e inserta **{% url 'books' %}** en el enlace URL para **All books**, como se muestra abajo. Esto habilitará el enlace en todas las páginas (podemos ubicar esto exitosamente en su lugar ahora que hemos creado el mapeo url "books").

```python
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### ¿Cómo se ve?

Aún no podrás ver la lista de libros, porque aún nos falta una dependencia — el mapeo URL para las páginas de detalle de libros, que se necesita para crear los hipervínculos a los libros individuales. Mostraremos tanto la lista de libros como las vistas de detalle después de la siguiente sección.

## Página de detalle de libros

La página de detalle de libro desplegará información sobre un libro específico, a la que se accede usando la URL `catalog/book/<id>` (donde `<id>` es la clave primaria para el libro). Además de los campos en el modelo `Book` (autor, resumen, ISBN, idioma, y género), listaremos también los detalles de las copias disponibles (`BookInstances`) incluyendo su estado, fecha de devolución esperada, edición e id. Esto permitirá a nuestros lectores no solo saber sobre el libro en sí, sino también confirmar si está disponible o cuándo lo estará.

### Mapeo URL

Abre **/catalos/urls.py** y añade el mapeador URL **'book-detail'** que se muestra abajo en negrita. Esta función `path()` define un patrón, una vista de detalle genérica basada en clases asociada, y un nombre.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Para la ruta _book-detail_ el patrón URL utiliza una sintaxis especial para capturar el id específico del libro que queremos ver.
La sintaxis es muy sencilla: los corchetes angulares definen la parte de la URL a capturar, encerrando el nombre de la variable que la vista puede utilizar para acceder a los datos capturados.
Por ejemplo, **\<algo>**, capturará el patrón marcado y pasará el valor a la vista como una variable "algo".
Opcionalmente puedes añadir al nombre de la variable una [etiqueta](https://docs.djangoproject.com/en/4.0/topics/http/urls/#path-converters) que defina el tipo de datos (int, str, slug, uuid, path).

En este caso utilizamos `'<int:pk>'` para capturar el id del libro, que debe ser una cadena con un formato especial y pasarlo a la vista como un parámetro llamado `pk` (abreviatura de primary key). Este es el id que se está utilizando para almacenar el libro de forma única en la base de datos, tal y como se define en el Modelo de Libros.

> **Nota:** Como ya se discutió antes, nuestra URL coincidente es en realidad `catalog/book/<digits>` (como estamos en la aplicación **catalog**, se asume `/catalog/`).

> **Advertencia:** La vista de detalle genérica basada en clases _espera_ que se le envíe un parámetro llamado pk. Si estás escribiendo tu propia vista de función, puedes usar el nombre de parámetro que quieras, o incluso enviar la información como un argumento sin nombre.

#### Introducción avanzada a path/expresiones regulares

> **Nota:** No necesitarás esta sección para completar el tutorial. La proporcionamos porque conocer esta opción es probable que sea útil en tu futuro centrado en Django.

La combinación de patrones proporcionada por `path()` es simple y útil para los casos (muy comunes) en los que sólo desea capturar _cualquier_ cadena o entero. Si necesita un filtrado más refinado (por ejemplo, filtrar sólo cadenas que tengan un cierto número de caracteres) puede utilizar el método [re_path()](https://docs.djangoproject.com/en/4.0/ref/urls/#django.urls.re_path).

Este método se utiliza igual que `path()`, salvo que permite especificar un patrón utilizando una [Expresión regular](https://docs.python.org/3/library/re.html). Por ejemplo, la ruta anterior podría haberse escrito como se muestra a continuación:

```python
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

_Las expresiones regulares_ son una herramienta increíblemente potente para la creación de patrones. Francamente, son poco intuitivas y pueden intimidar a los principiantes. A continuación encontrará un breve manual.

Lo primero que hay que saber es que las expresiones regulares deberían ser declaradas normalmente usando la sintaxis de literal de cadena sin procesar (esto es, están encerradas así: **r'\<tu expresión regular va aquí>'**).

Las partes principales de la sintaxis que necesitarás saber para declarar las coincidencias de patrones son:

<table>
  <thead>
    <tr>
      <th scope="col">Símbolo</th>
      <th scope="col">Significado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>^</td>
      <td>Coincide con el inicio del texto</td>
    </tr>
    <tr>
      <td>$</td>
      <td>Coincide con el fin del texto</td>
    </tr>
    <tr>
      <td>\d</td>
      <td>Coincide con un dígito (0, 1, 2, ... 9)</td>
    </tr>
    <tr>
      <td>\w</td>
      <td>
        <p>
          Concide con un caracter de palabra, ej. cualquier caracter del
          alfabeto en mayúscula o minúscula, dígito o guión bajo (_)
        </p>
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        <p>
          Concide con uno o más caracteres del precedente. Por ejemplo, para
          coincidir con uno o más dígitos usarías <code>\d+</code>. Para
          concidir con uno o más caracteres "a", podrías usar <code>a+</code>
        </p>
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        <p>
          Concide con cero o más caracteres del precedente. Por ejemplo, para
          coincidir con nada o una palabra podrías usar <code>\w*</code>
        </p>
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        <p>
          Captura la parte del patrón dentro de los paréntesis. Todos los
          valores capturados serán enviados a la vista como parámetros sin
          nombre (si se captura múltiples patrones, los parámetros asociados
          serán enviados en el órden en que fueron declaradas las capturas).
        </p>
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        <p>
          Captura el patrón (indicado por ...) como una variable con nombre (en
          este caso "name"). Los valores capturados se envían a la vista con el
          nombre especificado. Tu vista debe, por tanto, ¡declarar un argumento
          con el mismo nombre!
        </p>
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        <p>
          Concide con un caracter del conjunto. Por ejemplo, [abc] coincidirá
          con 'a' o 'b' o 'c'. [-\w] coincidrá con el caracter '-' o con
          cualquier letra.
        </p>
      </td>
    </tr>
  </tbody>
</table>

¡La mayoría de los caracteres restantes se pueden tomar literalmente!

Consideremos algunos ejemplos reales de patrones:

<table>
  <thead>
    <tr>
      <th scope="col">Patrón</th>
      <th scope="col">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>r'^book/(?P&#x3C;pk>\d+)$'</strong></td>
      <td>
        <p>
          Esta es la RE usada en nuestro mapeador url. Concide con una cadena
          que tiene <code>book/</code> al inicio de la línea
          (<strong>^book/</strong>), luego tiene uno o más dígitos
          (<code>\d+</code>), y luego termina (sin ningún caracter que no sea un
          dígito antes del marcador de fin de línea).
        </p>
        <p>
          También captura todos los dígitos <strong>(?P&#x3C;pk>\d+)</strong> y
          los envía a la vista como un parámetro llamado 'pk'.
          <strong
            >¡Los valores capturados siempre se envían como cadena!</strong
          >
        </p>
        <p>
          Por ejemplo, esto coincidiría con <code>book/1234</code>, y enviaría
          una variable <code>pk='1234'</code> a la vista.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(\d+)$'</strong></td>
      <td>
        <p>
          Esta expresión coincide con las mismas URLs que el caso anterior. La
          información capturada se enviaría a la vista como un argumento sin
          nombre.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Esta expresión coincide con una cadena que tiene <code>book/</code> al
          inicio de la línea (<strong>^book/</strong>), luego tiene uno o más
          caracteres que son <em>o bien</em> '-' o una letra
          (<strong>[-\w]+</strong>), y luego termina. También captura este
          conjunto de caracteres y los envía a la vista como un parámetro
          llamado 'stub'.
        </p>
        <p>
          Este es un patrón bastante típico para un "talón". Estos talones
          representan claves primarias en URLs amigables basadas en palabras
          para la información. Podrías usar un talón si quisieras que la URL de
          un libro sea más informativa. Por ejemplo,
          <code>/catalog/book/the-secret-garden</code> en lugar de
          <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Puedes capturar múltiples patrones en una sola comparación, y por tanto codificar bastantes datos diferentes en una URL.

> **Nota:** Como reto, considera cómo podrías codificar una url para listar todos los libros publicados en un año, mes y día en particular, y la RE que podría usarse para la comparación.

#### Enviado opciones adicionales en tus mapeos URL

Una característica que no hemos utilizado aquí, pero que puede resultarte valiosa, es que puedes pasar un [diccionario que contenga opciones adicionales](https://docs.djangoproject.com/en/4.0/topics/http/urls/#views-extra-options) a la vista (utilizando el tercer argumento sin nombre de la función `path()`). Este enfoque puede ser útil si quieres usar la misma vista para múltiples recursos, y pasar datos para configurar su comportamiento en cada caso.

Por ejemplo, en base al path mostrado a continuación, para una petición a `/myurl/halibut/` Django llamará a `views.my_view(request, fish='halibut', my_template_name='some_path')`.

```python
path('myurl/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

> **Nota:** Tanto las opciones extra como los patrones capturados con nombre se envían a la vista como argumentos _con nombre_. Si usas el **mismo nombre** tanto para un patrón capturado como para una opción extra, solo el valor del patrón capturado será enviado a la vista (el valor especificado para la opción extra será eliminado).

### Vista (basada en clases)

Abre **catalog/views.py** y copia el siguiente código al final del archivo:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

¡Eso es todo! Lo único que necesitas hacer ahora es crear una plantilla llamada **/locallibrary/catalog/templates/catalog/book_detail.html**, y la vista enviará la información en la base de datos para el registro del libro específico, extraído por el mapeador URL. Dentro de la plantilla puedes acceder a la lista de libros mediante la variable de plantilla llamada `object` o `book` (esto es, genéricamente, "_`el_nombre_del_modelo`_").

Si lo necesitas puedes cambiar la plantilla usada y el nombre del objeto de contexto usado para referenciar al libro en la plantilla. Puedes también sobreescribir métodos para, por ejemplo, añadir información adicional al contexto.

#### ¿Qué sucede si el registro no existe?

Si un registro solicitado no existe, la vista de detalle genérica basada en clases lanzará automáticamente por tí una excepción de tipo Http404 — en producción, esto desplegará automáticamente una página apropiada de "recurso no encontrado", que puedes personalizar si lo deseas.

Solo para darte una idea sobre cómo funciona esto, el fragmento de código de abajo demuestra cómo implementarías la vista basada en clases como una función, si **no** estuvieras usando la vista de detalle genérica basada en clases.

```python
def book_detail_view(request,pk):
    try:
        book_id=Book.objects.get(pk=pk)
    except Book.DoesNotExist:
        raise Http404("Book does not exist")

    #book_id=get_object_or_404(Book, pk=pk)

    return render(
        request,
        'catalog/book_detail.html',
        context={'book':book_id,}
    )
```

Primero, la vista intenta recuperar el registro del libro específico desde el modelo. Si esto falla, la vista debería lanzar una excepción de tipo `Http404` para indicar que el libro "no se encuentra". El último paso es, como de costumbre, llamar a `render()` con el nombre de la plantilla y la información del libro en el parámetro `context` (como un diccionario).

> **Nota:** `get_object_or_404()` (que se muestra comentado arriba), es un atajo conveniente para lanzar una excepción de tipo `Http404` si el registro no se encuentra.

### Creando la plantilla de Vista de Detalle

Crea el archivo HTML **/locallibrary/catalog/templates/catalog/book_detail.html** y ponle el contenido de abajo. Como se discutió antes, este es el nombre de archivo por defecto esperado por la vista de detalle genérica basada en clases (para un modelo llamado `Book` en una aplicación llamada `catalog`).

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Title: \{{ book.title }}</h1>

  <p><strong>Author:</strong> <a href="">\{{ book.author }}</a></p> <!-- author detail link not yet defined -->
  <p><strong>Summary:</strong> \{{ book.summary }}</p>
  <p><strong>ISBN:</strong> \{{ book.isbn }}</p>
  <p><strong>Language:</strong> \{{ book.language }}</p>
  <p><strong>Genre:</strong> {% for genre in book.genre.all %} \{{ genre }}{% if not forloop.last %}, {% endif %}{% endfor %}</p>

  <div style="margin-left:20px;margin-top:20px">
    <h4>Copies</h4>

    {% for copy in book.bookinstance_set.all %}
    <hr>
    <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">\{{ copy.get_status_display }}</p>
    {% if copy.status != 'a' %}<p><strong>Due to be returned:</strong> \{{copy.due_back}}</p>{% endif %}
    <p><strong>Imprint:</strong> \{{copy.imprint}}</p>
    <p class="text-muted"><strong>Id:</strong> \{{copy.id}}</p>
    {% endfor %}
  </div>
{% endblock %}
```

> **Nota:** El enlace `author` en la plantilla de arriba tiene una URL vacía porque no hemos creado aún una página de detalle de autor. Una vez que esta exista, deberías actualizar la URL así:
>
> ```django
>  <a href="{% url 'author-detail' book.author.pk %}"><strong>\{{ book.author }}</strong></a>
> ```

Aunque es un poco más larga, casi todo lo que existe en esta plantilla se ha descrito previamente:

- Extendemos nuestra plantilla base y sobreescribimos el bloque "content"
- Usamos procesamiento condicional para determinar si desplegar o no contenidos específicos
- Usamos lazos `for` para iterar a través de listas de objetos.
- Accedemos a los campos de contexto usando la notación de puntos (como hemos usado la vista de detalle genérica, el contexto se llama `book`; podríamos también usar "`object`")

Lo interesante que no hemos visto previamente es la función `book.bookinstance_set.all()`. Este método es "automágicamente" creado por Django para devolver el conjunto de registros de `BookInstance` asociado con un `Book` en particular.

```python
{% for copy in book.bookinstance_set.all %}
<!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

Este método es necesario porque has declarado un campo `ForeignKey` (uno-a-muchos) únicamente en la lado "uno" de la relación. Como no haces nada para declarar la relación en el otro modelo ("muchos"), este no tiene ningún campo para obtener el conjunto de registros asociados. Para superar este problema, Django construye una función apropiadamente llamada "búsqueda reversa" que puedes usar. El nombre de la función se construye convirtiendo a minúsculas el nombre del modelo donde la `ForeignKey` fue declarada, seguido por `_set` (así, la función creada en `Book` es `bookinstance_set()`).

> **Nota:** Aquí usamos `all()` para obtener todos los registros (la opción por defecto). A pesar de que puedes usar el método `filter()` para obtener un subconjunto de registros en el código, no puedes hacerlo directamente en las plantillas porque no puedes especificar argumentos para las funciones.
>
> Ten también cuidado de que si no defines un orden (en tu vista o modelo basado en clases), verás errores arrojados por el servidor de dearrollo como este:
>
> ```
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
> allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Eso sucede porque el [objeto paginador](https://docs.djangoproject.com/en/1.10/topics/pagination/#paginator-objects) espera ver una cláusula ORDER BY siendo ejecutada en tu base de datos subyacente. Sin ella, ¡no puede estar seguro de que los registros devueltos están en el orden correcto!
>
> Este tutorial no llegó a la **Paginación** (aún, pero pronto lo hará), pero como no puedes uar `sort_by()` y enviar un parámetro (el mismo con `filter()` descrito arriba) tendrás que escoger entre tres opciones:
>
> 1. Añadir un `ordering` dentro de una declaración `class Meta` en tu modelo.
> 2. Añadir un atributo `queryset` en tu vista basada en clases personalizada, especificando un `order_by()`.
> 3. Añadir un método `get_queryset` a tu vista basada en clases pesonalizada y también especificar el `order_by()`.
>
> Si te decides por la opción `class Meta` para el modelo Author (probablemente no tan flexible como personalizar la vista basada en clases, pero lo suficientemente fácil), terminarás con algo como esto:
>
> ```python
> class Author(models.Model):
>     first_name = models.CharField(max_length=100)
>     last_name = models.CharField(max_length=100)
>     date_of_birth = models.DateField(null=True, blank=True)
>     date_of_death = models.DateField('Died', null=True, blank=True)
>
>     def get_absolute_url(self):
>         return reverse('author-detail', args=[str(self.id)])
>
>     def __str__(self):
>         return '%s, %s' % (self.last_name, self.first_name)
>
>     class Meta:
>         ordering = ['last_name']
> ```
>
> Por supuesto, el campo no tiene que ser `last_name`: podría ser cualquier otro.
>
> Y por último, pero no menos importante, deberías ordenar por un atributo/columna que tenga un índice real (único o no) en tu base de datos para evitar problemas de rendimiento. Por supuesto, esto no será necesario aquí (y probablemente nos estemos adelantando mucho) para la pequeña cantidad de libros (¡y usuarios!), pero es algo a tener en cuenta para proyectos futuros.

## ¿Cómo se ve?

En este punto deberíamos haber creado todo lo necesario para desplegar tanto la lista de libros como las páginas de detalles de libros. Ejecuta el servidor (`python3 manage.py runserver`) y dirígete en tu navegador a `http://127.0.0.1:8000/`.

> **Advertencia:** No hagas click aún en ningún enlace de autor o de detalles de autores — ¡los crearás en el reto!

Haz click en el enlace **All books** para desplegar la lista de libros.

![Book List Page](book_list_page_no_pagination.png)

Luego haz click en un enlace a uno de tus libros. Si todo está correcto, deberías ver algo como la siguiente pantalla.

![Book Detail Page](book_detail_page_no_pagination.png)

## Paginación

Si apenas tienes unos pocos registros, nuestra página de lista de libros se verá bien. Sin embargo, cuando llegues a las decenas o centenas de registros la página tomará progresivamente más tiempo en cargar (y tendrá demasiado contenido para navegar adecuadamente). La solución a este problema es añadir paginación a tus vistas de lista, reduciendo el número de Ítems desplegados en cada página.

Django incluye un excelente soporte para paginación. Mejor aún, este está incluído en las vistas de lista genéricas basadas en clases, ¡así que no tienes que hacer mucho para habilitarlo!

### Vistas

Abre **catalog/views.py**, y añadie la línea `paginate_by` que se muestra abajo en negrita.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Con esta adición, apenas tengas más de 10 registros la vista comenzará a paginar la información que envía a la plantilla. A las diferentes páginas se accede usando parámetros GET — para acceder a la página 2 usarías la URL: `/catalog/books/?page=2`.

### Plantillas

Ahora que la información está paginada, necesitamos añadir soporte a la plantilla para desplazarse a través del conjunto de resultados. Como podríamos querer hacer lo mismo en todas las vistas de lista, lo haremos de una forma en la que puede ser añadida a la plantilla base.

Abre **/locallibrary/catalog/templates/_base_generic.html_** y copia el siguiente bloque `pagination` debajo de nuestro bloque `content` (resaltado abajo en negrita). El código primero revisa si la paginación está habilitada en la página actual. Si lo está, añade enlaces `next` y `previous` apropiados (y el número de la página actual).

```django
{% block content %}{% endblock %}

{% block pagination %}
  {% if is_paginated %}
      <div class="pagination">
          <span class="page-links">
              {% if page_obj.has_previous %}
                  <a href="\{{ request.path }}?page=\{{ page_obj.previous_page_number }}">previous</a>
              {% endif %}
              <span class="page-current">
                  Page \{{ page_obj.number }} of \{{ page_obj.paginator.num_pages }}.
              </span>
              {% if page_obj.has_next %}
                  <a href="\{{ request.path }}?page=\{{ page_obj.next_page_number }}">next</a>
              {% endif %}
          </span>
      </div>
  {% endif %}
{% endblock %}
```

`page_obj` es un objeto [Paginator](https://docs.djangoproject.com/en/1.10/topics/pagination/#paginator-objects) que existirá si se usa la paginación en la página actual. Te permite obtener toda la información sobre la página actual, páginas anteriores, cuántas páginas hay, etc.

Usamos `\{{ request.path }}` para obtener la URL de la página actual para crear a su vez los enlaces de paginación. Esto es útil, porque es independiente del objeto que estamos paginando.

¡Eso es todo!

### ¿Cómo se ve?

La captura de pantalla de abajo muestra cómo se ve la paginación — si no has ingresado más de 10 títulos en tu base de datos, puedes probarlo más fácilmente reduciendo el número especificado en la línea `paginate_by` en tu archivo **catalog/views.py**. Para obtener el resultado de abajo lo cambiamos a `paginate_by = 2`.

Los enlaces de paginación se muestran en la parte de abajo, con enlaces de next/previous desplegados dependiendo de en qué página estés

![Book List Page - paginated](book_list_paginated.png)

## Rétate a tí mismo

El reto en este artículo es crear las vistas de lista y detalle para autores, que se requieren para completar el proyecto. Estas deberían estar disponibles en las siguientes URLs:

- `catalog/authors/` — La lista de todos los autores.
- `catalog/author/<id>` — La vista de detalle para el autor específico con un valor en el campo de clave primaria de `<id>`

El código requerido para los mapeadores URL y las vistas debería ser virtualmente idéntico a las vistas de lista y detalle para `Book` que creamos arriba. Las plantillas serán diferentes, pero tendrán un comportamiento similar.

> **Nota:**
>
> - Una vez que has creado el mapeador URL para la página de lista de autores, necesitarás también actualizar el enlace **All authors** en la plantilla base. Sigue el [mismo proceso](#Update_the_base_template) que hicimos cuando actualizamos el enlace **All books**.
> - Una vez que has creado el mapeador URL para la página de detalle de autores, deberías también actualizar la [plantilla de vista de detalle de libros](#Creating_the_Detail_View_template) (**/locallibrary/catalog/templates/catalog/book_detail.html**) de modo que el enlace de autor apunte a tu nueva página de detalle de autor (en lugar de ser una URL vacía). La línea cambiará para añadir la etiqueta de plantilla que se muestra en negrita abajo.
>
> ```django
> <p><strong>Author:</strong> <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a></p>
> ```

Cuando termines, tus páginas deberían lucir similares a las capturas de pantalla de abajo.

![Author List Page](author_list_page_no_pagination.png)

![Author Detail Page](author_detail_page_no_pagination.png)

## Resumen

Felicitaciones, ¡la funcionalidad de nuestra biblioteca básica está ahora completa!

En este artículo hemos aprendido cómo usar las vistas genéricas basadas en clases de lista y detalle, y las hemos usado para crear páginas para ver nuestros libros y autores. Sobre la marcha hemos aprendido sobre coincidencia de patrones con expresiones regulares, y cómo puedes enviar información desde las URLs a tus vistas. Hemos también aprendido unos cuantos trucos más para usar plantillas. Por último hemos mostrado cómo paginar vistas de lista, de modo que nuestras listas sean manejables incluso si tenemos muchos registros.

En los siguientes artículos extenderemos esta biblioteca para añadir soporte para cuentas de usuario, y así demostrar la autenticación de usuarios, permisos, sesiones y formularios.

## Mira también

- [Vistas genéricas basadas en clases incluídas](https://docs.djangoproject.com/en/1.10/topics/class-based-views/generic-display/) (Django docs)
- [Vistas genéricas de despliegue](https://docs.djangoproject.com/en/1.10/ref/class-based-views/generic-display/) (Django docs)
- [Introducción a las vistas basadas en clases](https://docs.djangoproject.com/en/1.10/topics/class-based-views/intro/) (Django docs)
- [Etiquetas de plantilla y filtros incluídos](https://docs.djangoproject.com/en/1.10/ref/templates/builtins) (Django docs).
- [Paginación](https://docs.djangoproject.com/en/1.10/topics/pagination/) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}
