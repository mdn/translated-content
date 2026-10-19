---
title: "Tutorial de Django Parte 6: Listas genéricas y vistas de detalle"
short-title: "6: Listas genéricas y vistas de detalle"
slug: Learn_web_development/Extensions/Server-side/Django/Generic_views
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}

Este tutorial amplía nuestro sitio web [LocalLibrary](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), añadiendo páginas de lista y detalle para libros y autores. Aquí aprenderemos sobre las vistas genéricas basadas en clases, y mostraremos cómo estas pueden reducir la cantidad de código que tienes que escribir para casos de uso comunes. También profundizaremos en el manejo de URL, mostrando cómo realizar un emparejamiento de patrones básico.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Completa todos los temas anteriores del tutorial, incluyendo
        <a href="/es/docs/Learn_web_development/Extensions/Server-side/Django/Home_page">Tutorial de Django Parte 5: Creación de nuestra página de inicio</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender dónde y cómo usar las vistas genéricas basadas en clases, y cómo extraer patrones de las URL y pasar la información a las vistas.
      </td>
    </tr>
  </tbody>
</table>

## Visión general

En este tutorial vamos a completar la primera versión del sitio web [LocalLibrary](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) añadiendo páginas de lista y detalle para libros y autores (o para ser más precisos, ¡te mostraremos cómo implementar las páginas de libros, y te dejaremos crear las páginas de autores tú mismo!).

El proceso es similar al de la creación de la página de índice, que mostramos en el tutorial anterior. Aún necesitaremos crear mapeos de URL, vistas y plantillas. La principal diferencia es que para las páginas de detalle tendremos el reto adicional de extraer información de patrones en la URL y pasarla a la vista. Para estas páginas vamos a mostrar un tipo de vista completamente distinto: vistas genéricas de lista y detalle basadas en clases. Estas pueden reducir de forma significativa la cantidad de código de vista necesario, haciéndolas más fáciles de escribir y mantener.

La parte final del tutorial mostrará cómo paginar tus datos cuando uses vistas de lista genéricas basadas en clases.

## Página de lista de libros

La página de lista de libros mostrará una lista con todos los registros de libros disponibles en la página, a la que se accede mediante la URL: `catalog/books/`. La página mostrará un título y un autor para cada registro, siendo el título un hiperenlace a la página de detalle del libro asociado. La página tendrá la misma estructura y navegación que todas las demás páginas del sitio, por lo que podemos extender la plantilla base (**base_generic.html**) que creamos en el tutorial anterior.

### Mapeo URL

Abre **/catalog/urls.py** y copia la línea que establece la ruta para `'books/'`, como se muestra abajo.
Al igual que para la página de índice, esta función `path()` define un patrón que se compara con la URL (**'books/'**), una función de vista que se llamará si la URL coincide (`views.BookListView.as_view()`), y un nombre para este mapeo en particular.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Como se comentó en el tutorial anterior, la URL ya debe haber coincidido con `/catalog`, así que la vista se llamará en realidad para la URL: `/catalog/books/`.

La función de vista tiene un formato diferente al anterior — eso es porque esta vista se implementará en realidad como una clase. Vamos a heredar de una función de vista genérica ya existente que hace la mayor parte de lo que queremos que haga nuestra función de vista, en lugar de escribir la nuestra desde cero.

En las vistas basadas en clases de Django accedemos a una función de vista apropiada llamando al método de clase `as_view()`. Este se encarga de crear una instancia de la clase, y de asegurarse de que se llame a los métodos manejadores correctos para las solicitudes HTTP entrantes.

### Vista (basada en clases)

Podríamos escribir con bastante facilidad la vista de lista de libros como una función normal (igual que nuestra vista de índice anterior), que consultara la base de datos para obtener todos los libros y luego llamara a `render()` para pasar la lista a una plantilla específica. Sin embargo, en su lugar vamos a usar una vista de lista genérica basada en clases (`ListView`) — una clase que hereda de una vista ya existente. Como la vista genérica ya implementa la mayor parte de la funcionalidad que necesitamos y sigue las buenas prácticas de Django, podremos crear una vista de lista más robusta con menos código, menos repetición y, en definitiva, menos mantenimiento.

Abre **catalog/views.py** y copia el siguiente código al final del archivo:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

¡Eso es todo! La vista genérica consultará la base de datos para obtener todos los registros del modelo especificado (`Book`) y luego renderizará una plantilla ubicada en **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** (que crearemos a continuación). Dentro de la plantilla puedes acceder a la lista de libros con la variable de plantilla llamada `object_list` O `book_list` (es decir, genéricamente, `<nombre_del_modelo>_list`).

> [!NOTE]
> Esta ruta un tanto extraña para la ubicación de la plantilla no es un error — las vistas genéricas buscan plantillas en `/nombre_de_la_aplicación/nombre_del_modelo_list.html` (`catalog/book_list.html` en este caso) dentro del directorio `/nombre_de_la_aplicación/templates/` de la aplicación (`/catalog/templates/`).

Puedes añadir atributos para cambiar el comportamiento por defecto anterior. Por ejemplo, puedes especificar otro archivo de plantilla si necesitas tener varias vistas que usen el mismo modelo, o quizá quieras usar un nombre de variable de plantilla distinto si `book_list` no resulta intuitivo para tu caso de uso concreto de la plantilla. Posiblemente la variación más útil sea cambiar/filtrar el subconjunto de resultados que se devuelve — así, en lugar de listar todos los libros, podrías listar los 5 libros más leídos por otros usuarios.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # tu propio nombre para la lista como variable de plantilla
    queryset = Book.objects.filter(title__icontains='war')[:5] # Obtiene 5 libros cuyo título contiene "war"
    template_name = 'books/my_arbitrary_template_name_list.html'  # Especifica tu propio nombre/ubicación de plantilla
```

#### Sobrescribiendo métodos en vistas basadas en clases

Aunque no lo necesitamos aquí, también puedes sobrescribir algunos de los métodos de la clase.

Por ejemplo, podemos sobrescribir el método `get_queryset()` para cambiar la lista de registros devueltos. Esto es más flexible que simplemente establecer el atributo `queryset` como hicimos en el fragmento de código anterior (aunque en este caso no hay un beneficio real):

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Obtiene 5 libros cuyo título contiene "war"
```

También podríamos sobrescribir `get_context_data()` para pasar variables de contexto adicionales a la plantilla (por ejemplo, la lista de libros se pasa por defecto). El siguiente fragmento muestra cómo añadir una variable llamada `some_data` al contexto (estaría entonces disponible como variable de plantilla).

```python
class BookListView(generic.ListView):
    model = Book

    def get_context_data(self, **kwargs):
        # Llama primero a la implementación base para obtener el contexto
        context = super(BookListView, self).get_context_data(**kwargs)
        # Crea los datos que necesites y añádelos al contexto
        context['some_data'] = 'This is just some data'
        return context
```

Al hacer esto, es importante seguir el patrón usado arriba:

- Primero, obtén el contexto existente de nuestra superclase.
- Luego, añade tu nueva información de contexto.
- Después, devuelve el nuevo contexto (actualizado).

> [!NOTE]
> Consulta [Vistas genéricas basadas en clases integradas](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (documentación de Django) para muchos más ejemplos de lo que puedes hacer.

### Creando la plantilla de vista de lista

Crea el archivo HTML **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** y copia el texto de abajo. Como se comentó antes, este es el archivo de plantilla por defecto esperado por la vista de lista genérica basada en clases (para un modelo llamado `Book` en una aplicación llamada `catalog`).

Las plantillas para las vistas genéricas son como cualquier otra plantilla (aunque, por supuesto, el contexto/información pasado a la plantilla puede variar).
Al igual que con nuestra plantilla _index_, extendemos nuestra plantilla base en la primera línea y luego reemplazamos el bloque llamado `content`.

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Lista de libros</h1>
  {% if book_list %}
    <ul>
      {% for book in book_list %}
      <li>
        <a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a>
        (\{{book.author}})
      </li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No hay libros en la biblioteca.</p>
  {% endif %}
{% endblock %}
```

La vista pasa el contexto (lista de libros) por defecto con los alias `object_list` y `book_list`; cualquiera de los dos funcionará.

#### Ejecución condicional

Usamos las etiquetas de plantilla [`if`](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), `else` y `endif` para comprobar si `book_list` se ha definido y no está vacía.
Si `book_list` está vacía, entonces la cláusula `else` muestra un texto explicando que no hay libros que listar.
Si `book_list` no está vacía, entonces recorremos la lista de libros.

```django
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>No hay libros en la biblioteca.</p>
{% endif %}
```

La condición anterior solo comprueba un caso, pero puedes comprobar condiciones adicionales usando la etiqueta de plantilla `elif` (por ejemplo, `{% elif var2 %}`).
Para más información sobre operadores condicionales consulta: [if](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), [ifequal/ifnotequal](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifequal-and-ifnotequal), e [ifchanged](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifchanged) en [Etiquetas y filtros de plantilla integrados](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (documentación de Django).

#### Bucles for

La plantilla usa las etiquetas de plantilla [for](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#for) y `endfor` para recorrer la lista de libros, como se muestra abajo.
Cada iteración rellena la variable de plantilla `book` con la información del elemento actual de la lista.

```django
{% for book in book_list %}
  <li><!-- code here get information from each book item --></li>
{% endfor %}
```

También podrías usar la etiqueta de plantilla `{% empty %}` para definir qué ocurre si la lista de libros está vacía (aunque nuestra plantilla opta por usar una condición en su lugar):

```django
<ul>
  {% for book in book_list %}
    <li><!-- code here get information from each book item --></li>
  {% empty %}
    <p>No hay libros en la biblioteca.</p>
  {% endfor %}
</ul>
```

Aunque no se usa aquí, dentro del bucle Django también creará otras variables que puedes usar para llevar un seguimiento de la iteración.
Por ejemplo, puedes comprobar la variable `forloop.last` para realizar un procesamiento condicional la última vez que se ejecuta el bucle.

#### Acceso a las variables

El código dentro del bucle crea un elemento de lista para cada libro que muestra tanto el título (como un enlace a la vista de detalle que aún no hemos creado) como el autor.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Accedemos a los _campos_ del registro de libro asociado usando la "notación de punto" (por ejemplo, `book.title` y `book.author`), donde el texto que sigue al elemento `book` es el nombre del campo (tal y como se definió en el modelo).

También podemos llamar a _funciones_ del modelo desde dentro de nuestra plantilla — en este caso llamamos a `Book.get_absolute_url()` para obtener una URL que podrías usar para mostrar el registro de detalle asociado. Esto funciona siempre que la función no tenga ningún argumento (¡no hay forma de pasar argumentos!).

> [!NOTE]
> Debemos tener un poco de cuidado con los "efectos secundarios" al llamar a funciones en las plantillas. Aquí solo obtenemos una URL para mostrarla, pero una función puede hacer prácticamente cualquier cosa — ¡no querríamos borrar nuestra base de datos (por ejemplo) solo por renderizar nuestra plantilla!

#### Actualizar la plantilla base

Abre la plantilla base (**/django-locallibrary-tutorial/catalog/templates/_base_generic.html_**) e inserta **{% url 'books' %}** en el enlace de URL para **All books**, como se muestra abajo. Esto habilitará el enlace en todas las páginas (ya podemos incorporarlo con éxito ahora que hemos creado el mapeo de URL "books").

```django
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### ¿Cómo se ve?

Todavía no podrás construir la lista de libros, porque aún nos falta una dependencia — el mapeo de URL para las páginas de detalle de libro, que se necesita para crear los hiperenlaces a los libros individuales. Mostraremos tanto la vista de lista como la de detalle después de la siguiente sección.

## Página de detalle de libro

La página de detalle de libro mostrará información sobre un libro específico, a la que se accede mediante la URL `catalog/book/<id>` (donde `<id>` es la clave primaria del libro). Además de los campos del modelo `Book` (autor, resumen, ISBN, idioma y género), también listaremos los detalles de las copias disponibles (`BookInstances`), incluyendo el estado, la fecha de devolución prevista, la editorial y el id. Esto permitirá a nuestros lectores no solo conocer el libro, sino también confirmar si está disponible o cuándo lo estará.

### Mapeo URL

Abre **/catalog/urls.py** y añade la ruta llamada '**book-detail**' que se muestra abajo.
Esta función `path()` define un patrón, la vista de detalle genérica basada en clases asociada, y un nombre.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Para la ruta _book-detail_, el patrón de URL usa una sintaxis especial para capturar el id específico del libro que queremos ver.
La sintaxis es muy sencilla: los corchetes angulares definen la parte de la URL que se va a capturar, encerrando el nombre de la variable que la vista puede usar para acceder a los datos capturados.
Por ejemplo, **\<algo>** capturará el patrón marcado y pasará el valor a la vista como una variable "algo". Opcionalmente puedes anteponer al nombre de la variable una [especificación de conversor](https://docs.djangoproject.com/en/5.0/topics/http/urls/#path-converters) que define el tipo de dato (int, str, slug, uuid, path).

En este caso usamos `'<int:pk>'` para capturar el id del libro, que debe ser una cadena con un formato especial, y pasarlo a la vista como un parámetro llamado `pk` (abreviatura de primary key). Este es el id que se usa para almacenar el libro de forma única en la base de datos, tal y como se define en el modelo Book.

> [!NOTE]
> Como se comentó antes, nuestra URL coincidente es en realidad `catalog/book/<dígitos>` (porque estamos en la aplicación **catalog**, se asume `/catalog/`).

> [!WARNING]
> La vista de detalle genérica basada en clases _espera_ que se le pase un parámetro llamado **pk**. Si estás escribiendo tu propia vista de función puedes usar el nombre de parámetro que quieras, o incluso pasar la información en un argumento sin nombre.

#### Introducción avanzada a path/expresiones regulares

> [!NOTE]
> ¡No necesitarás esta sección para completar el tutorial! La incluimos porque es probable que conocer esta opción te sea útil en tu futuro con Django.

La coincidencia de patrones proporcionada por `path()` es simple y útil para los casos (muy habituales) en los que solo quieres capturar _cualquier_ cadena o entero. Si necesitas un filtrado más refinado (por ejemplo, para filtrar solo cadenas que tengan un cierto número de caracteres) entonces puedes usar el método [re_path()](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.re_path).

Este método se usa igual que `path()`, salvo que te permite especificar un patrón usando una [expresión regular](https://docs.python.org/3/library/re.html). Por ejemplo, la ruta anterior podría haberse escrito como se muestra a continuación:

```python
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

Las _expresiones regulares_ son una herramienta de emparejamiento de patrones increíblemente potente. Son, francamente, bastante poco intuitivas y pueden resultar intimidantes para los principiantes. A continuación tienes un breve resumen.

Lo primero que hay que saber es que las expresiones regulares normalmente deberían declararse usando la sintaxis de literal de cadena sin procesar (es decir, se encierran así: **r'\<aquí va el texto de tu expresión regular>'**).

Las partes principales de la sintaxis que necesitarás conocer para declarar las coincidencias de patrones son:

<table class="standard-table no-markdown">
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
      <td>Coincide con el final del texto</td>
    </tr>
    <tr>
      <td>\d</td>
      <td>Coincide con un dígito (0, 1, 2, … 9)</td>
    </tr>
    <tr>
      <td>\w</td>
      <td>
        Coincide con un carácter de palabra, por ejemplo, cualquier carácter en
        mayúscula o minúscula del alfabeto, dígito o el carácter guion bajo (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Coincide con uno o más del carácter precedente. Por ejemplo, para
        coincidir con uno o más dígitos usarías <code>\d+</code>. Para
        coincidir con uno o más caracteres "a", podrías usar <code>a+</code>
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Coincide con cero o más del carácter precedente. Por ejemplo, para
        coincidir con nada o con una palabra podrías usar <code>\w*</code>
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Captura la parte del patrón dentro de los paréntesis. Cualquier valor
        capturado se pasará a la vista como parámetros sin nombre (si se
        capturan varios patrones, los parámetros asociados se suministrarán en
        el orden en que se declararon las capturas).
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Captura el patrón (indicado por ...) como una variable con nombre (en
        este caso "name"). Los valores capturados se pasan a la vista con el
        nombre especificado. ¡Por lo tanto, tu vista debe declarar un parámetro
        con el mismo nombre!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Coincide con un carácter del conjunto. Por ejemplo, [abc] coincidirá
        con 'a', 'b' o 'c'. [-\w] coincidirá con el carácter '-' o con
        cualquier carácter de palabra.
      </td>
    </tr>
  </tbody>
</table>

¡La mayoría de los demás caracteres se pueden tomar de forma literal!

Consideremos algunos ejemplos reales de patrones:

<table class="standard-table">
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
          Esta es la expresión regular usada en nuestro mapeador de URL.
          Coincide con una cadena que tiene <code>book/</code> al inicio de la
          línea (<strong>^book/</strong>), luego tiene uno o más dígitos
          (<code>\d+</code>), y luego termina (sin caracteres que no sean
          dígitos antes del marcador de fin de línea).
        </p>
        <p>
          También captura todos los dígitos <strong>(?P&#x3C;pk>\d+)</strong> y
          los pasa a la vista en un parámetro llamado 'pk'.
          <strong>¡Los valores capturados siempre se pasan como cadena!</strong>
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
        Esto coincide con las mismas URL que el caso anterior. La información
        capturada se enviaría a la vista como un argumento sin nombre.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Esto coincide con una cadena que tiene <code>book/</code> al inicio
          de la línea (<strong>^book/</strong>), luego tiene uno o más
          caracteres que son <em>o bien</em> un '-' o un carácter de palabra
          (<strong>[-\w]+</strong>), y luego termina. También captura este
          conjunto de caracteres y los pasa a la vista en un parámetro
          llamado 'stub'.
        </p>
        <p>
          Este es un patrón bastante habitual para un "stub". Los stubs son
          claves primarias basadas en palabras, amigables con las URL, para
          los datos. Podrías usar un stub si quisieras que la URL de tu libro
          fuera más informativa. Por ejemplo
          <code>/catalog/book/the-secret-garden</code> en lugar de
          <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Puedes capturar varios patrones en una misma coincidencia, y así codificar mucha información distinta en una URL.

> [!NOTE]
> Como reto, piensa en cómo podrías codificar una URL para listar todos los libros publicados en un año, mes y día concretos, y la expresión regular que podría usarse para hacer coincidir esa URL.

#### Pasar opciones adicionales en tus mapeos de URL

Una característica que no hemos usado aquí, pero que puede resultarte valiosa, es que puedes pasar un [diccionario que contiene opciones adicionales](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options) a la vista (usando el tercer argumento sin nombre de la función `path()`). Este enfoque puede ser útil si quieres usar la misma vista para varios recursos, y pasar datos para configurar su comportamiento en cada caso.

Por ejemplo, dada la ruta mostrada abajo, para una solicitud a `/my-url/halibut/` Django llamará a `views.my_view(request, fish='halibut', my_template_name='some_path')`.

```python
path('my-url/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

> [!NOTE]
> Tanto los patrones capturados con nombre como las opciones del diccionario se pasan a la vista como argumentos _con nombre_. Si usas el **mismo nombre** tanto para un patrón de captura como para una clave del diccionario, entonces se usará la opción del diccionario.

### Vista (basada en clases)

Abre **catalog/views.py**, y copia el siguiente código al final del archivo:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

¡Eso es todo! Ahora solo tienes que crear una plantilla llamada **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**, y la vista le pasará la información de la base de datos para el registro `Book` específico extraído por el mapeador de URL. Dentro de la plantilla puedes acceder a los detalles del libro con la variable de plantilla llamada `object` O `book` (es decir, genéricamente, `the_model_name`).

Si lo necesitas, puedes cambiar la plantilla usada y el nombre del objeto de contexto usado para referenciar al libro en la plantilla. También puedes sobrescribir métodos para, por ejemplo, añadir información adicional al contexto.

#### ¿Qué sucede si el registro no existe?

Si un registro solicitado no existe, la vista de detalle genérica basada en clases lanzará automáticamente una excepción `Http404` — en producción, esto mostrará automáticamente una página apropiada de "recurso no encontrado", que puedes personalizar si lo deseas.

Solo para darte una idea de cómo funciona esto, el siguiente fragmento de código muestra cómo implementarías la vista basada en clases como una función si **no** estuvieras usando la vista de detalle genérica basada en clases.

```python
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

La vista primero intenta obtener el registro de libro específico del modelo. Si esto falla, la vista debería lanzar una excepción `Http404` para indicar que el libro "no se ha encontrado". El último paso es entonces, como de costumbre, llamar a `render()` con el nombre de la plantilla y los datos del libro en el parámetro `context` (como un diccionario).

Otra forma de hacer esto, si no estuvieras usando una vista genérica, sería llamar a la función `get_object_or_404()`.
Este es un atajo para lanzar una excepción `Http404` si no se encuentra el registro.

```python
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Creando la plantilla de vista de detalle

Crea el archivo HTML **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** y dale el contenido de abajo. Como se comentó antes, este es el nombre de archivo de plantilla por defecto esperado por la vista de detalle genérica basada en clases (para un modelo llamado `Book` en una aplicación llamada `catalog`).

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Título: \{{ book.title }}</h1>

  <p><strong>Autor:</strong> <a href="">\{{ book.author }}</a></p>
  <!-- author detail link not yet defined -->
  <p><strong>Resumen:</strong> \{{ book.summary }}</p>
  <p><strong>ISBN:</strong> \{{ book.isbn }}</p>
  <p><strong>Idioma:</strong> \{{ book.language }}</p>
  <p><strong>Género:</strong> \{{ book.genre.all|join:", " }}</p>

  <div style="margin-left:20px;margin-top:20px">
    <h4>Copias</h4>

    {% for copy in book.bookinstance_set.all %}
      <hr />
      <p
        class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
        \{{ copy.get_status_display }}
      </p>
      {% if copy.status != 'a' %}
        <p><strong>Fecha prevista de devolución:</strong> \{{ copy.due_back }}</p>
      {% endif %}
      <p><strong>Editorial:</strong> \{{ copy.imprint }}</p>
      <p class="text-muted"><strong>Id:</strong> \{{ copy.id }}</p>
    {% endfor %}
  </div>
{% endblock %}
```

> [!NOTE]
> El enlace del autor en la plantilla de arriba tiene una URL vacía porque todavía no hemos creado una página de detalle de autor a la que enlazar.
> Una vez que exista la página de detalle, podemos obtener su URL con cualquiera de estos dos enfoques:
>
> - Usar la etiqueta de plantilla `url` para revertir la URL 'author-detail' (definida en el mapeador de URL), pasándole la instancia de autor del libro:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Llamar al método `get_absolute_url()` del modelo de autor (esto realiza la misma operación de reversión):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Aunque ambos métodos hacen efectivamente lo mismo, se prefiere `get_absolute_url()` porque ayuda a escribir código más consistente y mantenible (cualquier cambio solo debe hacerse en un lugar: el modelo de autor).

Aunque es un poco más larga, ya se ha descrito antes casi todo lo que hay en esta plantilla:

- Extendemos nuestra plantilla base y sobrescribimos el bloque "content".
- Usamos procesamiento condicional para determinar si se muestra o no un contenido específico.
- Usamos bucles `for` para recorrer listas de objetos.
- Accedemos a los campos del contexto usando la notación de punto (como hemos usado la vista genérica de detalle, el contexto se llama `book`; también podríamos usar `object`).

Lo primero interesante que no hemos visto antes es la función `book.bookinstance_set.all()`. Este método lo construye Django "automágicamente" para devolver el conjunto de registros `BookInstance` asociados con un `Book` en particular.

```django
{% for copy in book.bookinstance_set.all %}
  <!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

Este método es necesario porque declaras un campo `ForeignKey` (de uno a muchos) únicamente en el lado "muchos" de la relación (`BookInstance`). Como no haces nada para declarar la relación en el otro modelo ("uno"), este (`Book`) no tiene ningún campo para obtener el conjunto de registros asociados. Para superar este problema, Django construye una función de "búsqueda inversa" con un nombre apropiado que puedes usar. El nombre de la función se construye poniendo en minúsculas el nombre del modelo donde se declaró el `ForeignKey`, seguido de `_set` (es decir, la función creada en `Book` es `bookinstance_set()`).

> [!NOTE]
> Aquí usamos `all()` para obtener todos los registros (el valor por defecto). Aunque puedes usar el método `filter()` para obtener un subconjunto de registros en el código, no puedes hacerlo directamente en las plantillas porque no puedes especificar argumentos a las funciones.
>
> Ten también cuidado, porque si no defines un orden (en tu vista basada en clases o en tu modelo), también verás errores del servidor de desarrollo como este:
>
> ```plain
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
>   allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Eso sucede porque el [objeto paginador](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) espera ver un ORDER BY ejecutándose sobre tu base de datos subyacente. ¡Sin él, no puede estar seguro de que los registros devueltos estén realmente en el orden correcto!
>
> Este tutorial no ha cubierto la **paginación** (¡todavía!), pero como no puedes usar `sort_by()` y pasar un parámetro (lo mismo con `filter()` descrito arriba) tendrás que elegir entre tres opciones:
>
> 1. Añadir un `ordering` dentro de una declaración `class Meta` en tu modelo.
> 2. Añadir un atributo `queryset` en tu vista personalizada basada en clases, especificando un `order_by()`.
> 3. Añadir un método `get_queryset` a tu vista personalizada basada en clases y especificar también el `order_by()`.
>
> Si decides usar una `class Meta` para el modelo `Author` (probablemente no tan flexible como personalizar la vista basada en clases, pero suficientemente sencillo), terminarás con algo como esto:
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
>         return f'{self.last_name}, {self.first_name}'
>
>     class Meta:
>         ordering = ['last_name']
> ```
>
> Por supuesto, el campo no tiene que ser `last_name`: podría ser cualquier otro.
>
> Por último, pero no menos importante, deberías ordenar por un atributo/columna que realmente tenga un índice (único o no) en tu base de datos para evitar problemas de rendimiento. Por supuesto, esto no será necesario aquí (probablemente nos estemos adelantando con tan pocos libros y usuarios), pero es algo que conviene tener en cuenta para futuros proyectos.

Lo segundo interesante (y no evidente) en la plantilla es dónde mostramos el texto de estado de cada copia de libro ("disponible", "en mantenimiento", etc.).
Los lectores más atentos notarán que el método `BookInstance.get_status_display()` que usamos para obtener el texto de estado no aparece en ningún otro lugar del código.

```django
 <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
 \{{ copy.get_status_display }} </p>
```

Esta función se crea automáticamente porque `BookInstance.status` es un [campo de opciones (choices)](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices).
Django crea automáticamente un método `get_foo_display()` para cada campo de opciones `foo` de un modelo, que se puede usar para obtener el valor actual del campo.

## ¿Cómo se ve?

En este punto, deberíamos haber creado todo lo necesario para mostrar tanto la lista de libros como las páginas de detalle de libro. Ejecuta el servidor (`python3 manage.py runserver`) y abre tu navegador en `http://127.0.0.1:8000/`.

> [!WARNING]
> ¡No hagas clic todavía en ningún enlace de autor o de detalle de autor — los crearás en el reto!

Haz clic en el enlace **All books** para mostrar la lista de libros.

![Página de lista de libros](book_list_page_no_pagination.png)

Luego haz clic en el enlace de uno de tus libros. Si todo está configurado correctamente, deberías ver algo como la siguiente captura de pantalla.

![Página de detalle del libro](book_detail_page_no_pagination.png)

## Paginación

Si solo tienes unos pocos registros, nuestra página de lista de libros se verá bien. Sin embargo, a medida que llegues a las decenas o cientos de registros, la página tardará cada vez más en cargarse (y tendrá demasiado contenido para navegar con comodidad). La solución a este problema es añadir paginación a tus vistas de lista, reduciendo el número de elementos mostrados en cada página.

Django tiene un excelente soporte integrado para paginación. Y lo que es mejor, ¡esto está incorporado en las vistas de lista genéricas basadas en clases, así que no tienes que hacer gran cosa para habilitarlo!

### Vistas

Abre **catalog/views.py** y añade la línea `paginate_by` que se muestra abajo.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Con esta adición, en cuanto tengas más de 10 registros la vista empezará a paginar los datos que envía a la plantilla.
Se accede a las distintas páginas mediante parámetros GET — para acceder a la página 2 usarías la URL `/catalog/books/?page=2`.

### Plantillas

Ahora que los datos están paginados, necesitamos añadir soporte en la plantilla para recorrer el conjunto de resultados. Como podríamos querer paginar todas las vistas de lista, lo añadiremos a la plantilla base.

Abre **/django-locallibrary-tutorial/catalog/templates/_base_generic.html_** y busca el "bloque content" (como se muestra abajo).

```django
{% block content %}{% endblock %}
```

Copia el siguiente bloque de paginación justo después del `{% endblock %}`. El código primero comprueba si la paginación está habilitada en la página actual. Si es así, añade los enlaces _next_ y _previous_ que correspondan (y el número de página actual).

```django
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

`page_obj` es un objeto [Paginator](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) que existirá si se está usando paginación en la página actual. Te permite obtener toda la información sobre la página actual, las páginas anteriores, cuántas páginas hay, etc.

Usamos `\{{ request.path }}` para obtener la URL de la página actual, para crear los enlaces de paginación. Esto es útil porque es independiente del objeto que estamos paginando.

¡Eso es todo!

### ¿Cómo se ve?

La captura de pantalla de abajo muestra cómo se ve la paginación — si no has introducido más de 10 títulos en tu base de datos, puedes probarla más fácilmente reduciendo el número especificado en la línea `paginate_by` de tu archivo **catalog/views.py**. Para obtener el resultado de abajo lo cambiamos a `paginate_by = 2`.

Los enlaces de paginación se muestran en la parte inferior, mostrando los enlaces de siguiente/anterior según en qué página estés.

![Página de lista de libros - paginada](book_list_paginated.png)

## Ponte a prueba

El reto de este artículo es crear las vistas de lista y detalle de autor necesarias para completar el proyecto. Estas deberían estar disponibles en las siguientes URL:

- `catalog/authors/` — La lista de todos los autores.
- `catalog/author/<id>` — La vista de detalle para el autor específico con un campo de clave primaria llamado `<id>`

El código necesario para los mapeadores de URL y las vistas debería ser prácticamente idéntico a las vistas de lista y detalle de `Book` que creamos arriba. Las plantillas serán distintas, pero compartirán un comportamiento similar.

> [!NOTE]
>
> - Una vez que hayas creado el mapeador de URL para la página de lista de autores, también necesitarás actualizar el enlace **All authors** en la plantilla base.
>   Sigue el [mismo proceso](#actualizar_la_plantilla_base) que seguimos cuando actualizamos el enlace **All books**.
> - Una vez que hayas creado el mapeador de URL para la página de detalle de autor, también deberías actualizar la [plantilla de la vista de detalle de libro](#creando_la_plantilla_de_vista_de_detalle) (**/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**) para que el enlace de autor apunte a tu nueva página de detalle de autor (en lugar de ser una URL vacía).
>   La forma recomendada de hacerlo es llamar a `get_absolute_url()` en el modelo de autor, como se muestra abajo.
>
>   ```django
>   <p>
>     <strong>Author:</strong>
>     <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   </p>
>   ```

Cuando termines, tus páginas deberían verse parecido a las capturas de pantalla de abajo.

![Página de lista de autores](author_list_page_no_pagination.png)

![Página de detalle del autor](author_detail_page_no_pagination.png)

## Resumen

¡Felicidades, la funcionalidad básica de nuestra biblioteca ya está completa!

En este artículo hemos aprendido cómo usar las vistas genéricas basadas en clases de lista y detalle, y las hemos usado para crear páginas que muestran nuestros libros y autores. Por el camino hemos aprendido sobre el emparejamiento de patrones con expresiones regulares, y cómo puedes pasar datos de las URL a tus vistas. También hemos aprendido algunos trucos más para usar plantillas. Por último, hemos mostrado cómo paginar vistas de lista para que nuestras listas sean manejables incluso cuando tenemos muchos registros.

En nuestros próximos artículos, ampliaremos esta biblioteca para dar soporte a cuentas de usuario, y así mostrar la autenticación de usuarios, los permisos, las sesiones y los formularios.

## Véase también

- [Vistas genéricas basadas en clases integradas](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (documentación de Django)
- [Vistas genéricas de visualización](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-display/) (documentación de Django)
- [Introducción a las vistas basadas en clases](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/) (documentación de Django)
- [Etiquetas y filtros de plantilla integrados](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (documentación de Django)
- [Paginación](https://docs.djangoproject.com/en/5.0/topics/pagination/) (documentación de Django)
- [Realizar consultas > Objetos relacionados](https://docs.djangoproject.com/en/5.0/topics/db/queries/#related-objects) (documentación de Django)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}
