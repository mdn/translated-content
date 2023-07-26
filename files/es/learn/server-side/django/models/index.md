---
title: "Tutorial Django Parte 3: Uso de modelos"
slug: Learn/Server-side/Django/Models
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}

Este artículo muestra cómo definir modelos para el sitio web de la [BibliotecaLocal](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website). En él se explica lo que es un modelo, cómo se declara, y cuáles son algunos de los principales tipos de campos de un modelo. También veremos, brevemente, cuáles son algunas de las maneras en que puede accederse a los datos del modelo.

<table>
  <tbody>
    <tr>
      <th scope="row">Pre-requisitos:</th>
      <td>
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Server-side/Django/skeleton_website"
          >Tutorial Django Parte 2: Creación del esqueleto del sitio web</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Ser capaz de diseñar y crear tus propios modelos, eligiendo de forma
          apropiada los campos.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Visión general

Las aplicaciones web de Django acceden y administran los datos a través de objetos de Python a los que se hace referencia como modelos. Los modelos definen la _estructura_ de los datos almacenados, incluidos los _tipos_ de campo y los atributos de cada campo, como su tamaño máximo, valores predeterminados, lista de selección de opciones, texto de ayuda para la documentación, texto de etiqueta para formularios, etc. La definición del modelo es independiente de la base de datos subyacente. puede elegir una de entre varias como parte de la configuración de su proyecto. Una vez que haya elegido la base de datos que desea usar, no necesita hablar directamente con ella. Simplemente escriba la estructura de su modelo y algo de código, y Django se encargará de todo el trabajo sucio, al comunicarse con la base de datos por usted.

Este tutorial muestra cómo definir y acceder a los modelos para el ejemplo del [sitio web LocalLibrary](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website).

## Diseñando los modelos de LocalLibrary

Antes de dar el salto y comenzar a codificar los modelos, vale la pena tomarse unos minutos para pensar qué datos necesitamos almacenar y cuáles serán las relaciones entre los diferentes objetos.

Sabemos que tenemos que almacenar información sobre libros (título, resumen, autor, idioma escrito, categoría, ISBN) y que podríamos tener varias copias disponibles (con id único global, estado de disponibilidad, etc.). Es posible que necesitemos almacenar más información sobre el autor que solo su nombre, y puede haber varios autores con el mismo nombre o nombres similares. Queremos poder ordenar la información según el título del libro, el autor, el idioma escrito y la categoría.

Al diseñar sus modelos, tiene sentido tener modelos separados para cada "objeto" (grupo de información relacionada). En este caso, los objetos obvios son libros, instancias de libros y autores.

También es posible que desee utilizar modelos para representar las opciones de la lista de selección (por ejemplo, como una lista desplegable de opciones), en lugar de codificar las opciones en el sitio web en sí; esto se recomienda cuando no se conocen de antemano todas las opciones posibles o éstas están sujetas a cambios. Los candidatos obvios para las modelos, en este caso, incluyen el género del libro (por ejemplo, ciencia ficción, poesía francesa, etc.) y el idioma (inglés, francés, japonés).

Una vez que hayamos decidido cuáles serán nuestros modelos y sus campos, debemos pensar en la relación que existe entre ellos. Django le permite definir relaciones de uno a uno (OneToOneField), de uno a muchos (ForeignKey) y de muchos a muchos (ManyToManyField).

Con esto en mente, el diagrama de asociación UML a continuación muestra los modelos que definiremos en este caso (como recuadros). Como se mencionó anteriormente, hemos creado modelos para el libro (los detalles genéricos del libro), instancia del libro (estado de copias físicas específicas del libro disponible en el sistema) y autor. También hemos decidido tener un modelo para el género, para que los valores se puedan crear/seleccionar a través de la interfaz admin. Hemos decidido no tener un modelo para el BookInstance:status, en su lugar, hemos especificado directamente, en el código, los valores (LOAN_STATUS) porque no esperamos que cambien. Dentro de cada uno de los cuadros, puede ver el nombre del modelo, los nombres y tipos de campo, y también los métodos y sus tipos de devolución.

El diagrama también muestra las relaciones entre los modelos, incluida su _cardinalidad_. La cardinalidad expresa la cantidad de instancias (máximo y mínimo) de cada modelo que pueden estar presentes en la relación. Por ejemplo, la línea de conexión entre los cuadros muestra que _Book_ y _Genre_ están relacionados. Los números cercanos al modelo _Book_ muestran que un libro debe tener uno o más _Genres_ (tantos como desee), mientras que los números al otro lado de la línea al lado de _Genre_ muestran que puede tener cero o más libros asociados.

![LocalLibrary Model UML](local_library_model_uml.svg)

> **Nota:** La siguiente sección proporciona un manual básico que explica cómo se definen y utilizan los modelos. Mientras lo lees, considera cómo construiremos cada uno de los modelos en el diagrama de arriba.

## Cartilla del Modelo

Esta sección provee una vista resumida de cómo se define un modelo y algunos de los campos más importantes y argumentos de campo.

### Definición de modelo

Los modelos están definidos, normalmente, en el archivo **models.py** de la aplicación. Son implementados como subclases de `django.db.models.Model`, y pueden incluir campos, métodos y metadata. El fragmento de código más abajo muestra un modelo "típico", llamado `MyModelName`:

```python
from django.db import models

class MyModelName(models.Model):
    """
    Una clase típica definiendo un modelo, derivado desde la clase Model.
    """

    # Campos
    my_field_name = models.CharField(max_length=20, help_text="Enter field documentation")
    ...

    # Metadata
    class Meta:
        ordering = ["-my_field_name"]

    # Métodos
    def get_absolute_url(self):
         """
         Devuelve la url para acceder a una instancia particular de MyModelName.
         """
         return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """
        Cadena para representar el objeto MyModelName (en el sitio de Admin, etc.)
        """
        return self.field_name
```

En las secciones de abajo exploraremos cada una de las características interiores de un modelo en detalle:

#### Campos

Un modelo puede tener un número arbitrario de campos, de cualquier tipo. Cada uno representa una columna de datos que queremos guardar en nuestras tablas de la base de datos. Cada registro de la base de datos (fila) consistirá en uno de cada posible valor del campo. Echemos un vistazo al ejemplo visto arriba:

```js
my_field_name = models.CharField(
  (max_length = 20),
  (help_text = "Enter field documentation"),
);
```

Nuestro ejemplo de arriba tiene un único campo llamado `my_field_name`, de tipo `models.CharField` — lo que significa que este campo contendrá una cadena de caracteres alfanuméricos. Los tipos de campo son asignados usando clases específicas, que determinan el tipo de registro que se usa para guardar el dato en la base, junto con un criterio de evaluación que se usará cuando se reciban los valores de un formulario HTML (es decir, qué constituye un valor válido). Los tipos de campo pueden también tomar argumentos que especifican además cómo se guarda o cómo se puede usar. En este caso le damos a nuestro campo dos argumentos:

- `max_length=20` — Establece que la longitud máxima del valor de este campo es 20 caracteres.
- `help_text="Enter field documentation"` — proporciona una etiqueta de texto para mostrar que ayuda a los usuarios a saber qué valor proporcionar cuando un usuario ha de introducirlo via un formulario HTML.

El nombre del campo se usa para referirnos a él en consultas (_queries_) y plantillas (_templates_). Los campos también tienen una etiqueta, que puede ser especificada como argumento (`verbose_name`) o inferida automáticamente, a partir del nombre de variable que identifica al campo, capitalizando la primera letra y reemplazando los guiones bajos por espacios (por ejemplo `my_field_name` tendría la etiqueta por defecto de _My field name_). El orden en que los campos son declarados afectará su orden por defecto si un modelo es renderizado en un formulario (ej. en el sitio de Administración), aunque este comportamiento se puede anular.

##### Argumentos comunes de los campos

Los siguientes argumentos son comunes a la mayoría de los tipos de campo y pueden usarse al declararlos:

- [help_text](https://docs.djangoproject.com/en/1.10/ref/models/fields/#help-text): Proporciona una etiqueta de texto para formularios HTML (ej. en el sitio de Administración), tal como se describe arriba.
- [verbose_name](https://docs.djangoproject.com/en/1.10/ref/models/fields/#verbose-name): Nombre de fácil lectura que se usa en etiquetas para el campo. Si no se especifica, Django inferirá el valor por defecto del verbose name a partir del nombre del campo.
- [default](https://docs.djangoproject.com/en/1.10/ref/models/fields/#default): Valor por defecto para el campo. Puede ser un valor o un _callable object_ (objeto que puede ser llamado como una función), en cuyo caso el objeto será llamado cada vez que se cree un nuevo registro.
- [null](https://docs.djangoproject.com/en/1.10/ref/models/fields/#null): Si es `True`, Django guardará valores en blanco o vacíos como `NULL` en la base de datos para campos donde sea apropiado (un `CharField` guardará una cadena vacía en su lugar). Por defecto es `False`.
- [blank](https://docs.djangoproject.com/en/1.10/ref/models/fields/#blank): Si es `True`, se permite que el campo quede en blanco en tus formularios. El valor por defecto es `False`, lo que significa que la validación de formularios de Django te forzará a introducir un valor. Con frecuencia se usa con `null=True`, porque si vas a permitir valores en blanco, también querrás que la base de datos sea capaz de representarlos de forma apropiada.
- [choices](https://docs.djangoproject.com/en/1.10/ref/models/fields/#choices): Un grupo de valores de selección para este campo. Si se proporciona, el widget correspondiente por defecto del formulario será una caja de selección con estos valores de selección en vez del campo de texto estándar.
- [primary_key](https://docs.djangoproject.com/en/1.10/ref/models/fields/#primary-key): Si es `True`, establece el campo actual como clave primaria para el modelo (Una clave primaria es una columna especial de la base de datos, diseñada para identificar de forma única todos los diferentes registros de una tabla). Si no se especifica ningún campo como clave primaria, Django añadirá automáticamente un campo para este propósito.

Hay muchas otras opciones — puedes ver la [lista completa de opciones aquí](https://docs.djangoproject.com/en/1.10/ref/models/fields/#field-options).

##### Tipos comunes de campos

La lista siguiente describe algunos de los tipos de campo más comunmente usados.

- [CharField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#django.db.models.CharField) se usa para definir cadenas de longitud corta a media. Debes especificar la `max_length` (longitud máxima) de los datos que se guardarán.
- [TextField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#django.db.models.TextField) se usa para cadenas de longitud grande o arbitraria. Puedes especificar una `max_length` para el campo, pero sólo se usa cuando el campo se muestra en formularios (no se fuerza al nivel de la base de datos).
- [IntegerField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#django.db.models.IntegerField) es un campo para almacenar valores de números enteros y para validar los valores introducidos como enteros en los formularios.
- [DateField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#datefield) y [DateTimeField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#datetimefield) se usan para guardar/representar fechas e información fecha/hora (como en los objetos Python `datetime.date` y `datetime.datetime`, respectivamente). Estos campos pueden adicionalmente declarar los parámetros (mutuamente excluyentes) `auto_now=True` (para establecer el campo a la fecha actual cada vez que se guarda el modelo), `auto_now_add` (para establecer sólo la fecha cuando se crea el modelo por primera vez), y `default` (para establecer una fecha por defecto que puede ser sobreescrita por el usuario).
- [EmailField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#emailfield) se usa para validar direcciones de correo electrónico.
- [FileField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#filefield) e [ImageField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#imagefield) se usan para subir ficheros e imágenes respectivamente (el `ImageField` añade simplemente una validación adicional de que el fichero subido es una imagen). Éstos tienen parámetros para definir cómo y donde se guardan los ficheros subidos.
- [AutoField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#autofield) es un tipo especial de `IntegerField` que se incrementa automáticamente. Cuando no especificas una clave primaria para tu modelo, se añade -automáticamente- una de éste tipo.
- [ForeignKey](https://docs.djangoproject.com/en/1.10/ref/models/fields/#foreignkey) se usa para especificar una relación uno a muchos con otro modelo de la base de datos (ej. un coche tiene un fabricante, pero un fabricante puede hacer muchos coches). El lado "uno" de la relación es el modelo que contiene la clave.
- [ManyToManyField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#manytomanyfield) se usa para especificar una relación muchos a muchos (ej. un libro puede tener varios géneros, y cada género puede contener varios libros). En nuestra aplicación de la biblioteca usaremos ésta de forma muy similar a `ForeignKeys`, pero pueden usarse de formas más complicadas para describir las relaciones entre grupos. Éstas tienen el parámetro `on_delete` para definir que ocurre cuando un registro asociado se borra (ej. un valor de `models.SET_NULL` establecería simplemente el valor a `NULL`).

Hay muchos otros tipos de campos, incluyendo campos para diferentes tipos de números (enteros grandes, enteros pequeños, en coma flotante), boleanos, URLs, slugs, identificadores únicos, y otra información relacionada con el tiempo (duración, hora, etc..). Puedes ver la [lista completa aquí](https://docs.djangoproject.com/en/1.10/ref/models/fields/#field-types).

#### Metadatos

Puedes declarar metadatos a nivel de modelo para tu Modelo declarando `class Meta`, tal como se muestra.

```python
class Meta:
    ordering = ["-my_field_name"]
    ...
```

Una de las características más útiles de estos metadatos es controlar el _orden por defecto_ de los registros que se devuelven cuando se consulta el tipo de modelo. Se hace especificando el orden de comprobación en una lista de nombres de campo en el atributo `ordering`, como se muestra arriba. La ordenación dependerá del tipo de campo (los campos de caracteres de ordenan alfabéticamente, mientras que los campos de fechas están clasificados por orden cronológico). Como se muestra arriba, se puede invertir el orden de clasificación añadiendo el símbolo (-) como prefijo del nombre del campo.

Así como ejemplo, si elegimos clasificar los libros de esta forma por defecto:

```python
ordering = ["title", "-pubdate"]
```

los libros serán clasificados alfabéticamente por título, de la A al a Z, y luego por fecha de publicación dentro de cada título, desde el más reciente al más antiguo.

Otro atributo común es `verbose_name`, un nombre descriptivo para la clase en forma singular y plural:

```python
verbose_name = "BetterName"
```

Otros atributos útiles te permiten crear y aplicar nuevos "permisos de acceso" para el modelo (los permisos por defecto se aplican automáticamente), te permiten la ordenación basado en otro campo, o declarar que la clase es "abstracta" (una clase base para la que no vas a crear registros, y que en cambio se derivará para crear otros modelos).

Muchas de las otras opciones de metadatos controlan qué base datos debe usarse para el modelo y cómo se guardan los datos (éstas son realmente útiles si necesitas mapear un modelo a una base datos existente).

La lista completa de opciones de metadatos está disponible aquí: [Opciones de metadatos de Modelos](https://docs.djangoproject.com/es/2.0/ref/models/options/) (Django docs).

#### Metodos

Un modelo puede tener también métodos

Minimamente, en cada modelo deberías definir el método estándar de las clases de Python `__str__()` para devolver una cadena de texto legible por humanos para cada objeto. Esta cadena se usa para representar registros individuales en el sitio de administración (y en cualquier otro lugar donde necesites referirte a una instancia del modelo). Con frecuencia éste devolverá un título o nombre de campo del modelo.

```python
def __str__(self):
    return self.field_name
```

Otro método común a incluir en los modelos de Django es `get_absolute_url()`, que devuelve un URL para presentar registros individuales del modelo en el sitio web (si defines este método, Django añadirá automáticamente un botón "Ver en el sitio" en la ventana de edición del registro del modelo en el sitio de Administración). Un patrón típico para `get_absolute_url()` se muestra abajo.

```python
def get_absolute_url(self):
    """
     Devuelve la url para acceder a una instancia particular del modelo.
    """
    return reverse('model-detail-view', args=[str(self.id)])
```

> **Nota:** Asumiendo que usarás URLs tipo `/myapplication/mymodelname/2` para presentar registros individuales para tu modelo (donde "2" es el `id` de un registro en particular), necesitarás crear un mapeador URL para pasar la respuesta e id a la "vista detallada del modelo (model detail view)" (que hará el trabajo requerido para presentar el registro). La función `reverse()` de arriba es capaz de "invertir" tu mapeador url (llamado _'model-detail-view'_ en el caso de arriba) para crear una URL del formato correcto.
>
> Por supuesto para hacer este trabajo ¡tienes aún que escribir el mapeo URL, la vista y la plantilla!

Puedes también definir todos los métodos que te apetezca y llamarlos desde tu código o plantillas (siempre y cuando no reciban ningún parámetro).

### Gestión de Modelos

Una vez que has definido tus clases de modelos puedes usarlas para crear, actualizar o borrar registros, y ejecutar consultas para obtener todos los registros o subconjuntos particulares de registros. Te mostraremos cómo hacer eso en el tutorial cuando definamos nuestras vistas, pero aquí va un breve resumen.

#### Creación y modificación de registros

Para crear un registro puedes definir una instancia del modelo y llamar a `save()`.

```python
# Creación de un nuevo registro usando el constructor del modelo.
a_record = MyModelName(my_field_name="Instancia #1")

# Guardar el objeto en la base de datos.
a_record.save()
```

> **Nota:** Si no has declarado ningún campo como `primary_key`, al nuevo registro se le proporcionará una automáticamente, con el nombre de campo `id`. Puedes consultar este campo después de guardar el registro anterior y debería tener un valor de 1.

Puedes acceder a los campos de este nuevo registro usando la sintaxis de puntos y cambiar los valores. Tienes que llamar a `save()` para almacenar los valores modificados en la base de datos.

```python
# Accesso a los valores de los campos del modelo usando atributos Python.
print(a_record.id) # Debería devolver 1 para el primer registro.
print(a_record.my_field_name) # Debería imprimir 'Instancia #1'

# Cambio de un registro modificando los campos llamando a save() a continuación.
a_record.my_field_name="Nuevo Nombre de Instancia"
a_record.save()
```

#### Búsqueda de registros

Puedes buscar registros que coincidan con un cierto criterio usando el atributo `objects` del modelo (proporcionado por la clase base).

> **Nota:** Explicar cómo buscar registros usando un modelo y nombres de campo "abstractos" puede resultar un poco confuso. En la exposición de abajo nos referiremos a un modelo `Book` con campos `title` y `genre`, donde genre (género) es también un modelo con un solo campo `name`.

Podemos obtener todos los registros de un modelo como `QuerySet`, usando `objects.all()`. El `QuerySet` es un objeto iterable, significando que contiene un número de objetos por los que podemos iterar/hacer bucle.

```python
all_books = Book.objects.all()
```

El método de Django `filter()` nos permite filtrar el `QuerySet` devuelto para que coincida un campo de **texto** o **numérico** con un criterio particular. Por ejemplo, para filtrar libros que contengan la palabra "wild" en el título y luego contarlos, podemos hacer lo siguiente:

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = Book.objects.filter(title__contains='wild').count()
```

Los campos a buscar y el tipo de coincidencia son definidos en el nombre del parámetro de filtro, usando el formato: `field_name__match_type` (ten en cuenta el _doble guión bajo_ entre `title` y `contains` anterior). En el ejemplo anterior estamos filtrando `title` por un valor sensible a mayúsculas y minúsculas. Puedes hacer otros muchos tipos de coincidencias: `icontains` (no sensible a mayúsculas ni minúsculas), `iexact` (coincidencia exacta no sensible a mayúsculas ni minúsculas), `exact` (coincidencia exacta sensible a mayúsculas y minúsculas) e `in`, `gt` (mayor que), `startswith`, etc. Puede ver la [lista completa aquí](https://docs.djangoproject.com/en/1.10/ref/models/querysets/#field-lookups).

En algunos casos, necesitarás filtrar por un campo que define una relación uno-a-muchos con otro modelo (por ejemplo, una `ForeignKey`). En estos casos puedes "referenciar" a campos dentro del modelo relacionado con un doble guión bajo adicional. Así, por ejemplo, para filtrar los libros de un género específico tienes que referenciar el `name` a través del campo `genre` como se muestra más abajo:

```python
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')  # Will match on: Fiction, Science fiction, non-fiction etc.
```

> **Nota:** Puedes usar guiones bajos (\_\_) para navegar por tantos niveles de relaciones (`ForeignKey`/`ManyToManyField`) como quieras. Por ejemplo, un Book que tuviera diferentes "types", definidos usando una relación adicional "cover", podría tener un nombre de parámetro: `type__cover__name__exact='hard'.`

Puedes hacer muchas más cosas con las consultas, incluyendo búsquedas hacia atrás de modelos relacionados, filtros encadenados, devolver un conjunto de valores más pequeño, etc. Para más información, puedes consultar [Elaborar consultas](https://docs.djangoproject.com/en/1.10/topics/db/queries/) (Django Docs).

## Definiendo los Modelos de LocalLybrary

En esta sección comenzaremos a definir los modelos para nuestra biblioteca. Abre _models.py (en /locallibrary/catalog/)_. El código de más arriba importa el módulo `models` que contiene la clase `models.Model`, que servirá de base para nuestros modelos:

```python
from django.db import models

# Create your models here.
```

### Modelo 'Genre'

Copia el código del modelo `Genre` que se muestra abajo y pégalo al final de tu archivo `models.py`. Este modelo nos servirá para almacenar información relativa a la categoría del libro (por ejemplo, si es ficción o no, si es un romancero o es un libro de historia, etc.) Como se dijo más arriba, preferimos modelar el género (Genre) como una entidad, en vez de utilizar un campo de texto o una lista de opciones, porque de esta manera es posible manejar los valores a través de nuestra base de datos, en vez de fijarlo en el código (_hard-coding_)

```python
class Genre(models.Model):
    """
    Modelo que representa un género literario (p. ej. ciencia ficción, poesía, etc.).
    """
    name = models.CharField(max_length=200, help_text="Ingrese el nombre del género (p. ej. Ciencia Ficción, Poesía Francesa etc.)")

    def __str__(self):
        """
        Cadena que representa a la instancia particular del modelo (p. ej. en el sitio de Administración)
        """
        return self.name
```

El modelo tiene un único campo (`name`), de tipo `CharField`, que usaremos para describir el género literario. Este campo tiene un tamaño máximo (`max_length`) de 200 caracteres y, además, posee un `help_text`. Al final de la clase, hemos declarado el método `__str__()`, que simplemente devuelve el nombre de un género definido por un registro en particular. Como no hemos definido un nombre explicativo (`verbose_name`) para nuestro campo, éste se establecerá en `Name` y se mostrará de esa manera en los formularios.

### Modelo 'Book'

Copia el código del modelo `Book` que aparece más abajo y pégalo al final de tu archivo. El modelo Libro representa la información que se tiene sobre un libro, en sentido general, pero no sobre un libro particular que se encuentre disponible en la biblioteca. Este modelo utiliza campos de tipo `CharField` para representar el título (`title)` y el `isbn` del libro (nota que el campo `isbn` especifica su etiqueta como "ISBN" utilizando el primer parámetro posicional, ya que la etiqueta por defecto hubiera sido "Isbn"). Además tenemos un campo para la sinopsis (`summary`), de tipo `TextField`, ya que este texto podría ser bastante largo.

```python
from django.urls import reverse #Used to generate URLs by reversing the URL patterns

class Book(models.Model):
    """
    Modelo que representa un libro (pero no un Ejemplar específico).
    """

    title = models.CharField(max_length=200)

    author = models.ForeignKey('Author', on_delete=models.SET_NULL, null=True)
    # ForeignKey, ya que un libro tiene un solo autor, pero el mismo autor puede haber escrito muchos libros.
    # 'Author' es un string, en vez de un objeto, porque la clase Author aún no ha sido declarada.

    summary = models.TextField(max_length=1000, help_text="Ingrese una breve descripción del libro")

    isbn = models.CharField('ISBN',max_length=13, help_text='13 Caracteres <a href="https://www.isbn-international.org/content/what-isbn">ISBN number</a>')

    genre = models.ManyToManyField(Genre, help_text="Seleccione un genero para este libro")
    # ManyToManyField, porque un género puede contener muchos libros y un libro puede cubrir varios géneros.
    # La clase Genre ya ha sido definida, entonces podemos especificar el objeto arriba.

    def __str__(self):
        """
        String que representa al objeto Book
        """
        return self.title


    def get_absolute_url(self):
        """
        Devuelve el URL a una instancia particular de Book
        """
        return reverse('book-detail', args=[str(self.id)])
```

El género es un campo de tipo `ManyToManyField`, de manera tal que un mismo libro podrá abarcar varios géneros y un mismo género podrá abarcar muchos libros. El autor es declarado como `ForeignKey`, de modo que cada libro podrá tener un sólo autor, pero un autor podrá tener muchos libros (en la vida real, un mismo libro puede tener varios autores, pero en nuestra implementación no).

En la declaración de ambos campos, el modelo relacionado se ingresa como primer parámetro posicional, usando el nombre la clase que lo implementa o, bien, el nombre del modelo como string, si éste no ha sido implementado en el archivo, antes de la declaración del campo. Otros parámetros interesantes que podemos observar, en el campo `author`, son `null=True`, que permite a la base de datos almacenar `null` si el autor no ha sido seleccionado, y `on_delete=models.SET_NULL`, que pondrá en `null` el campo si el registro del autor relacionado es eliminado de la base de datos.

El modelo también define `__str__()`, usando el campo `title` para representar un registro de la clase `Book`. El último método, `get_absoulte_url()` devuelve un URL que puede ser usado para acceder al detalle de un registro particular (para que esto funcione, debemos definir un mapeo de URL que tenga el nombre `book-detail` y una vista y una plantilla asociadas a él)

### Modelo 'BookInstance'

A continuación, copie el model `BookInstance` (mostrado a continuación) debajo de los otros modelos. `BookInstance` representa una copia específica de un libro que alguien pueda pedir prestado, en incluye información sobre si la copia esta disponible o sobre cual es la fecha que se espera sea devuelto, "imprenta" o detalles de versión, y un id único para el libro en la biblioteca.

Algunos de los campos y métodos ahora serán familiares. El modelo usa

- `ForeignKey` para identificar el Libro asociado (cada libro puede tener muchas copias, pero una copia solo puede tener un `Book`).
- `CharField` para representar la imprenta (publicación específica) del libro.

```python
import uuid # Requerida para las instancias de libros únicos

class BookInstance(models.Model):
    """
    Modelo que representa una copia específica de un libro (i.e. que puede ser prestado por la biblioteca).
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text="ID único para este libro particular en toda la biblioteca")
    book = models.ForeignKey('Book', on_delete=models.SET_NULL, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('m', 'Maintenance'),
        ('o', 'On loan'),
        ('a', 'Available'),
        ('r', 'Reserved'),
    )

    status = models.CharField(max_length=1, choices=LOAN_STATUS, blank=True, default='m', help_text='Disponibilidad del libro')

    class Meta:
        ordering = ["due_back"]


    def __str__(self):
        """
        String para representar el Objeto del Modelo
        """
        return '%s (%s)' % (self.id,self.book.title)
```

Adicionalmente hemos declarado algunos tipos nuevos de campos:

- `UUIDField` es usado para establecer el campo `id` como una `primary_key` para este modelo. Este tipo de campo asigna un único valor global para cada instancia ( uno para cada libro que puedes encontrar en la biblioteca).
- `DateField` es usado para la fecha `due_back` (en la que se espera que el libro este diponible despues de ser prestado o estar en mantenimiento). Este valor puede ser `blank` o `null` (necesario cuando el libro esta disponible). El patrón metadata (`Class Meta`) usa este campo para ordenar registros cuando se retornan en una consulta.
- `status` es un `CharField` que define una lista de elección/selección. Como puedes ver, hemos definido una tupla que contiene tuplas de pares clave-valor y los pasamos a los argumentos de choice. El valor en un par clave/valor es un valor desplegable que el usuario puede seleccionar, mientras las claves son valores que en realidad son guardados en la opción seleccionada. Tambien establecemos un valor por defecto de 'm' (maintenance) ya que los libros inicialmente se crearán como no disponibles antes de que esten almacenados en los estantes.

El patrón `__str__()` representa el objeto `BookInstance` usando una combinación de su id único y el título del `Book` asociado.

> **Nota:** Un poco de Python:
>
> El valor retornado por `__str__()` es una _cadena formateada_. Dentro de la cadena usamos `%s` para declarar "marcadores de posición". Después de la cadena ponemos `%` y después una tupla que contiene los valores que serán puestos en los marcadores de posición. Si solo tienes un marcador de posición entonces puedes omitir la tupla — e.j. `'Mi valor: %s' % variable.`
>
> Note que aunque este enfoque es perfectamente válido, sea conciente que ya no es preferido. Desde Python 3 debes usar en su lugar el método **format**, ej. `'{0} ({1})'.format(self.id,self.book.title)`. Puedes leer más sobre esto [aquí](https://www.python.org/dev/peps/pep-3101/). A partir de Python 3.6 también puedes usar la sintaxis de interpolación de cadena, e.j. `f'{self.id} ({self.book.title})'`.

### Modelo 'Author'

Copia el modelo `Author` (mostrado abajo) bajo el código existente en **models.py**.

Todos los campos/métodos ahora deben ser familiares. El modelo define a un autor que tiene un primer nombre, apellido, fecha de nacimiento, y (opcional) fecha de fallecimiento. Especifica que de forma predeterminada el `__str__()` retorna el nombre en el _orden apellido_, _primer nombre_. El método `get_absolute_url()` invierte el mapeo URL `author-detail` para obtener el URL para mostrar un autor individual.

```python
class Author(models.Model):
    """
    Modelo que representa un autor
    """
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        """
        Retorna la url para acceder a una instancia particular de un autor.
        """
        return reverse('author-detail', args=[str(self.id)])


    def __str__(self):
        """
        String para representar el Objeto Modelo
        """
        return '%s, %s' % (self.last_name, self.first_name)
```

## Reiniciar las migraciones a la base de datos

Todos tus modelos han sido creados. Para añadirlos a tu base de datos, vuelve a ejecutar las migraciones de tu base de datos.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Modelo 'Language' - desafío

Imagina que un benefactor local dona un número de libros nuevos escritos en otro lenguaje (digamos, Farsi). El desafío es averiguar como estos pueden ser bien representados en tu sitio Web, y luego agregarlos a los modelos.

Algunas cosas a considerar:

- ¿Debe asociarse un "lenguaje" a un `Book`, `BookInstance`, o algún otro objeto?
- ¿Deberian representarse los diferentes idiomas usando un modelo, un campo de texto libre o una lista de seleccion codificada?

Después que hayas decidido, agrega el campo. Puedes ver que decidimos nostros en Github [aquí](https://github.com/mdn/django-locallibrary-tutorial/blob/master/catalog/models.py).

No olvides que después de un cambio en tu modelo, debes volver a hacer las migraciones para que se apliquen los cambios en tu base de datos.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Resumen

En este artículo hemos aprendido como son definidos los modelos, y luego usar esta información para diseñar e implementar modelos apropiados para el sitio Web _LocalLibrary_.

En este punto nos desviaremos brevemente de la creación del sitio, y miraremos el _sitio de Administración de_ _Django_. Este sitio nos permitirá añadir algunos datos a la biblioteca, los cuales podemos mostrar usando nuestras (aún por crear) vistas y plantillas.

## Vea también

- [Escribiendo tu primera aplicación Django, parte 2](https://docs.djangoproject.com/en/1.10/intro/tutorial02/) (Django docs)
- [Realizando consultas](https://docs.djangoproject.com/en/1.10/topics/db/queries/) (Django Docs)
- [Referencia del API QuerySet](https://docs.djangoproject.com/en/1.10/ref/models/querysets/) (Django Docs)

{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}
