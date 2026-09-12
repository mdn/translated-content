---
title: "Tutorial Django Parte 3: Uso de modelos"
short-title: "3: Modelos"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

Este artículo muestra cómo definir modelos para el sitio web de LocalLibrary. En él se explica qué es un modelo, cómo se declara y cuáles son algunos de los principales tipos de campo. También muestra brevemente algunas de las principales formas en que se puede acceder a los datos del modelo.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        <a href="/es/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website">Tutorial de Django parte 2: Crear un sitio web esqueleto</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Ser capaz de diseñar y crear tus propios modelos, eligiendo los campos de forma adecuada.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Visión general

Las aplicaciones web de Django acceden y administran los datos a través de objetos de Python a los que se hace referencia como modelos. Los modelos definen la _estructura_ de los datos almacenados, incluidos los _tipos_ de campo y, posiblemente, también su tamaño máximo, valores predeterminados, opciones de lista de selección, texto de ayuda para la documentación, texto de etiqueta para formularios, etc. La definición del modelo es independiente de la base de datos subyacente: puedes elegir una entre varias como parte de la configuración de tu proyecto. Una vez que hayas elegido qué base de datos quieres usar, no necesitas hablar con ella directamente en absoluto: simplemente escribes la estructura de tu modelo y el resto del código, y Django se encarga de todo el trabajo sucio de comunicarse con la base de datos por ti.

Este tutorial muestra cómo definir y acceder a los modelos para el ejemplo del sitio web [LocalLibrary](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website).

## Diseñando los modelos de LocalLibrary

Antes de lanzarte a programar los modelos, vale la pena dedicar unos minutos a pensar qué datos necesitamos almacenar y cuáles son las relaciones entre los diferentes objetos.

Sabemos que necesitamos almacenar información sobre libros (título, resumen, autor, idioma escrito, categoría, ISBN) y que podríamos tener varias copias disponibles (con un id único a nivel global, estado de disponibilidad, etc.). Es posible que necesitemos almacenar más información sobre el autor que solo su nombre, y puede haber varios autores con nombres iguales o similares. Queremos poder ordenar la información según el título del libro, el autor, el idioma escrito y la categoría.

Al diseñar tus modelos, tiene sentido tener modelos separados para cada "objeto" (un grupo de información relacionada). En este caso, los objetos evidentes son libros, instancias de libro y autores.

También puedes querer usar modelos para representar opciones de listas de selección (por ejemplo, como una lista desplegable de opciones), en lugar de codificar las opciones directamente en el sitio web; esto se recomienda cuando no se conocen de antemano todas las opciones posibles o estas pueden cambiar. Los candidatos evidentes para modelos, en este caso, incluyen el género del libro (por ejemplo, ciencia ficción, poesía francesa, etc.) y el idioma (inglés, francés, japonés).

Una vez que hemos decidido nuestros modelos y campos, tenemos que pensar en las relaciones. Django te permite definir relaciones de uno a uno (`OneToOneField`), de uno a muchos (`ForeignKey`) y de muchos a muchos (`ManyToManyField`).

Con esto en mente, el siguiente diagrama de asociación UML muestra los modelos que definiremos en este caso (como recuadros).

![UML del modelo de LocalLibrary con la multiplicidad de Author corregida dentro de la clase Book](local_library_model_uml.svg)

Hemos creado modelos para el libro (los detalles genéricos del libro), la instancia de libro (el estado de las copias físicas específicas del libro disponibles en el sistema) y el autor. También hemos decidido tener un modelo para el género, de manera que los valores se puedan crear/seleccionar a través de la interfaz de administración. Hemos decidido no tener un modelo para `BookInstance:status`; hemos codificado directamente los valores (`LOAN_STATUS`) porque no esperamos que cambien. Dentro de cada uno de los recuadros, puedes ver el nombre del modelo, los nombres y tipos de los campos, y también los métodos y sus tipos de retorno.

El diagrama también muestra las relaciones entre los modelos, incluidas sus _multiplicidades_. Las multiplicidades son los números del diagrama que indican la cantidad (máxima y mínima) de cada modelo que puede estar presente en la relación. Por ejemplo, la línea que conecta los recuadros muestra que Book y Genre están relacionados. Los números cercanos al modelo Genre muestran que un libro debe tener uno o más Genres (tantos como quieras), mientras que los números en el otro extremo de la línea, junto al modelo Book, muestran que un Genre puede tener cero o muchos libros asociados.

> [!NOTE]
> La siguiente sección ofrece un manual básico que explica cómo se definen y utilizan los modelos. Mientras la lees, piensa en cómo construiremos cada uno de los modelos del diagrama anterior.

## Introducción a los modelos

Esta sección ofrece una breve descripción de cómo se define un modelo y algunos de los campos y argumentos de campo más importantes.

### Definición del modelo

Los modelos normalmente se definen en el archivo **models.py** de una aplicación. Se implementan como subclases de `django.db.models.Model` y pueden incluir campos, métodos y metadatos. El siguiente fragmento de código muestra un modelo "típico", llamado `MyModelName`:

```python
from django.db import models
from django.urls import reverse

class MyModelName(models.Model):
    """Una clase típica que define un modelo, derivada de la clase Model."""

    # Campos
    my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
    # …

    # Metadatos
    class Meta:
        ordering = ['-my_field_name']

    # Métodos
    def get_absolute_url(self):
        """Devuelve la URL para acceder a una instancia particular de MyModelName."""
        return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """Cadena para representar el objeto MyModelName (en el sitio de Admin, etc.)."""
        return self.my_field_name
```

En las siguientes secciones exploraremos en detalle cada una de las características internas de un modelo:

#### Campos

Un modelo puede tener un número arbitrario de campos, de cualquier tipo; cada uno representa una columna de datos que queremos almacenar en una de nuestras tablas de la base de datos. Cada registro de la base de datos (fila) consistirá en uno de cada valor de campo. Veamos el ejemplo de abajo:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Nuestro ejemplo de arriba tiene un único campo llamado `my_field_name`, de tipo `models.CharField` — lo que significa que este campo contendrá cadenas de caracteres alfanuméricos. Los tipos de campo se asignan usando clases específicas, que determinan el tipo de registro que se usa para almacenar el dato en la base de datos, junto con los criterios de validación que se usarán cuando se reciban valores de un formulario HTML (es decir, qué constituye un valor válido). Los tipos de campo también pueden tomar argumentos que especifiquen aún más cómo se almacena el campo o cómo se puede usar. En este caso, le damos a nuestro campo dos argumentos:

- `max_length=20` — Establece que la longitud máxima de un valor de este campo es de 20 caracteres.
- `help_text='Enter field documentation'` — texto de ayuda que puede mostrarse en un formulario para ayudar a los usuarios a entender cómo se usa el campo.

El nombre del campo se usa para referirse a él en consultas y plantillas.
Los campos también tienen una etiqueta, que se especifica mediante el argumento `verbose_name` (con un valor predeterminado de `None`).
Si no se establece `verbose_name`, la etiqueta se crea a partir del nombre del campo reemplazando los guiones bajos por un espacio y poniendo en mayúscula la primera letra (por ejemplo, el campo `my_field_name` tendría una etiqueta predeterminada de _My field name_ cuando se use en formularios).

El orden en que se declaran los campos afectará su orden predeterminado si un modelo se renderiza en un formulario (por ejemplo, en el sitio de administración), aunque esto se puede anular.

##### Argumentos comunes de los campos

Los siguientes argumentos comunes se pueden usar al declarar muchos (o la mayoría) de los diferentes tipos de campo:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Proporciona una etiqueta de texto para formularios HTML (por ejemplo, en el sitio de administración), tal como se describió anteriormente.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Un nombre legible para humanos que se usa en las etiquetas del campo. Si no se especifica, Django inferirá el nombre detallado predeterminado a partir del nombre del campo.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): El valor predeterminado para el campo. Puede ser un valor o un objeto invocable (_callable_), en cuyo caso el objeto se llamará cada vez que se cree un nuevo registro.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Si es `True`, Django almacenará los valores en blanco como `NULL` en la base de datos para los campos donde esto sea apropiado (un `CharField` almacenará, en cambio, una cadena vacía). El valor predeterminado es `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Si es `True`, se permite que el campo quede en blanco en tus formularios. El valor predeterminado es `False`, lo que significa que la validación de formularios de Django te obligará a introducir un valor. Esto se suele usar junto con `null=True`, porque si vas a permitir valores en blanco, también querrás que la base de datos pueda representarlos de forma adecuada.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Un grupo de opciones para este campo. Si se proporciona, el widget de formulario correspondiente por defecto será una casilla de selección con estas opciones en lugar del campo de texto estándar.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Si es `True`, garantiza que el valor del campo sea único en toda la base de datos.
  Esto se puede usar para evitar la duplicación de campos que no pueden tener los mismos valores.
  El valor predeterminado es `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Si es `True`, establece el campo actual como la clave primaria del modelo (una clave primaria es una columna especial de la base de datos designada para identificar de forma única todos los registros de la tabla).
  Si no se especifica ningún campo como clave primaria, Django agregará automáticamente un campo para este propósito.
  El tipo de los campos de clave primaria creados automáticamente se puede especificar para cada aplicación en [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) o de forma global en el ajuste [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD).

  > [!NOTE]
  > Las aplicaciones creadas con **manage.py** establecen el tipo de la clave primaria como [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Puedes ver esto en el archivo **catalog/apps.py** de la biblioteca local:
  >
  > ```python
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Hay muchas otras opciones: puedes consultar la [lista completa de opciones de campo aquí](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Tipos comunes de campo

La siguiente lista describe algunos de los tipos de campo más utilizados.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) se usa para definir cadenas de longitud fija, de tamaño corto a mediano. Debes especificar el `max_length` de los datos que se van a almacenar.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) se usa para cadenas de longitud arbitraria y grande. Puedes especificar un `max_length` para el campo, pero solo se usa cuando el campo se muestra en formularios (no se aplica a nivel de base de datos).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) es un campo para almacenar valores enteros (números completos) y para validar los valores introducidos como enteros en los formularios.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) y [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) se usan para almacenar/representar fechas e información de fecha/hora (como objetos `datetime.date` y `datetime.datetime` de Python, respectivamente). Estos campos pueden además declarar los parámetros (mutuamente excluyentes) `auto_now=True` (para establecer el campo con la fecha actual cada vez que se guarda el modelo), `auto_now_add` (para establecer la fecha solo cuando el modelo se crea por primera vez) y `default` (para establecer una fecha predeterminada que el usuario puede sobrescribir).
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) se usa para almacenar y validar direcciones de correo electrónico.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) e [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) se usan para subir archivos e imágenes, respectivamente (`ImageField` agrega una validación adicional de que el archivo subido sea una imagen). Estos tienen parámetros para definir cómo y dónde se almacenan los archivos subidos.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) es un tipo especial de `IntegerField` que se incrementa automáticamente. Una clave primaria de este tipo se agrega automáticamente a tu modelo si no especificas explícitamente una.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) se usa para especificar una relación de uno a muchos con otro modelo de la base de datos (por ejemplo, un coche tiene un solo fabricante, pero un fabricante puede fabricar muchos coches). El lado "uno" de la relación es el modelo que contiene la "clave" (los modelos que contienen una "clave externa" que hace referencia a esa "clave" están en el lado "muchos" de dicha relación).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) se usa para especificar una relación de muchos a muchos (por ejemplo, un libro puede tener varios géneros, y cada género puede contener varios libros). En nuestra aplicación de biblioteca las usaremos de forma muy similar a `ForeignKeys`, pero se pueden usar de maneras más complicadas para describir las relaciones entre grupos. Estos tienen el parámetro `on_delete` para definir qué ocurre cuando se elimina el registro asociado (por ejemplo, un valor de `models.SET_NULL` establecería el valor en `NULL`).

Hay muchos otros tipos de campo, incluidos campos para diferentes tipos de números (enteros grandes, enteros pequeños, de punto flotante), booleanos, URL, slugs, id únicos y otra información relacionada con el tiempo (duración, hora, etc.). Puedes consultar la [lista completa aquí](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadatos

Puedes declarar metadatos a nivel de modelo para tu Model declarando `class Meta`, como se muestra.

```python
class Meta:
    ordering = ['-my_field_name']
```

Una de las características más útiles de estos metadatos es controlar el _orden predeterminado_ de los registros que se devuelven al consultar el tipo de modelo. Esto se hace especificando el orden de coincidencia en una lista de nombres de campo en el atributo `ordering`, como se muestra arriba. El orden dependerá del tipo de campo (los campos de caracteres se ordenan alfabéticamente, mientras que los campos de fecha se ordenan cronológicamente). Como se muestra arriba, puedes anteponer el símbolo menos (-) al nombre del campo para invertir el orden de clasificación.

Así, por ejemplo, si eligiéramos ordenar los libros de esta forma por defecto:

```python
ordering = ['title', '-publish_date']
```

los libros se ordenarían alfabéticamente por título, de la A a la Z, y luego por fecha de publicación dentro de cada título, de más reciente a más antiguo.

Otro atributo común es `verbose_name`, un nombre descriptivo para la clase en forma singular y plural:

```python
verbose_name = 'BetterName'
```

Los metadatos de la clase se pueden usar para crear y aplicar nuevos "permisos de acceso" para el modelo (los permisos predeterminados se aplican automáticamente), permitir la ordenación basada en otro campo, definir [restricciones](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) sobre los posibles valores de los datos que se pueden almacenar, o declarar que la clase es "abstracta" (una clase base para la que no puedes crear registros y que, en cambio, se usará para derivar otros modelos).

Muchas de las otras opciones de metadatos controlan qué base de datos debe usarse para el modelo y cómo se almacenan los datos (estas solo son realmente útiles si necesitas asignar un modelo a una base de datos ya existente).

La lista completa de opciones de metadatos está disponible aquí: [Opciones de metadatos del modelo](https://docs.djangoproject.com/en/5.0/ref/models/options/) (documentación de Django).

#### Métodos

Un modelo también puede tener métodos.

**Como mínimo, en cada modelo deberías definir el método estándar de clase de Python `__str__()` para devolver una cadena legible por humanos para cada objeto.** Esta cadena se usa para representar registros individuales en el sitio de administración (y en cualquier otro lugar donde necesites referirte a una instancia del modelo). A menudo, esto devolverá un campo de título o nombre del modelo.

```python
def __str__(self):
    return self.my_field_name
```

Otro método común para incluir en los modelos de Django es `get_absolute_url()`, que devuelve una URL para mostrar registros individuales del modelo en el sitio web (si defines este método, Django agregará automáticamente un botón "Ver en el sitio" en las pantallas de edición de registros del modelo en el sitio de administración). A continuación se muestra un patrón típico para `get_absolute_url()`.

```python
def get_absolute_url(self):
    """Devuelve la URL para acceder a una instancia particular del modelo."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Suponiendo que vas a usar URL como `/my-application/my-model-name/2` para mostrar registros individuales de tu modelo (donde "2" es el `id` de un registro en particular), necesitarás crear un mapeador de URL para pasar la respuesta y el id a una "vista de detalle del modelo" (que hará el trabajo necesario para mostrar el registro). La función `reverse()` de arriba es capaz de "invertir" tu mapeador de URL (en el caso anterior, llamado _'model-detail-view'_) para crear una URL con el formato correcto.
>
> ¡Por supuesto, para que esto funcione todavía tienes que escribir el mapeo de URL, la vista y la plantilla!

También puedes definir cualquier otro método que quieras y llamarlo desde tu código o tus plantillas (siempre que no reciban ningún parámetro).

### Gestión de modelos

Una vez que hayas definido tus clases de modelo, puedes usarlas para crear, actualizar o eliminar registros, y para ejecutar consultas que obtengan todos los registros o subconjuntos particulares de registros. Te mostraremos cómo hacerlo en el tutorial cuando definamos nuestras vistas, pero aquí tienes un breve resumen.

#### Creación y modificación de registros

Para crear un registro, puedes definir una instancia del modelo y luego llamar a `save()`.

```python
# Crea un nuevo registro usando el constructor del modelo.
record = MyModelName(my_field_name="Instancia #1")

# Guarda el objeto en la base de datos.
record.save()
```

> [!NOTE]
> Si no has declarado ningún campo como `primary_key`, al nuevo registro se le asignará uno automáticamente, con el nombre de campo `id`. Podrías consultar este campo después de guardar el registro anterior, y tendría un valor de 1.

Puedes acceder a los campos de este nuevo registro usando la sintaxis de punto, y cambiar los valores. Tienes que llamar a `save()` para almacenar los valores modificados en la base de datos.

```python
# Accede a los valores de los campos del modelo usando atributos de Python.
print(record.id) # debería devolver 1 para el primer registro.
print(record.my_field_name) # debería imprimir 'Instancia #1'

# Cambia el registro modificando los campos y luego llamando a save().
record.my_field_name = "Nuevo nombre de instancia"
record.save()
```

#### Búsqueda de registros

Puedes buscar registros que coincidan con ciertos criterios usando el atributo `objects` del modelo (proporcionado por la clase base).

> [!NOTE]
> Explicar cómo buscar registros usando nombres de modelo y de campo "abstractos" puede resultar un poco confuso. En la explicación siguiente nos referiremos a un modelo `Book` con los campos `title` y `genre`, donde genre es también un modelo con un único campo `name`.

Podemos obtener todos los registros de un modelo como un `QuerySet`, usando `objects.all()`. El `QuerySet` es un objeto iterable, lo que significa que contiene varios objetos por los que podemos iterar/recorrer en un bucle.

```python
all_books = Book.objects.all()
```

El método `filter()` de Django nos permite filtrar el `QuerySet` devuelto para que coincida un campo de **texto** o **numérico** especificado con determinados criterios. Por ejemplo, para filtrar los libros que contengan "wild" en el título y luego contarlos, podríamos hacer lo siguiente:

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Los campos que se deben coincidir y el tipo de coincidencia se definen en el nombre del parámetro de filtro, usando el formato: `field_name__match_type` (observa el _doble guion bajo_ entre `title` y `contains` arriba). Arriba estamos filtrando `title` con una coincidencia sensible a mayúsculas y minúsculas. Hay muchos otros tipos de coincidencia que puedes hacer: `icontains` (sin distinguir mayúsculas y minúsculas), `iexact` (coincidencia exacta sin distinguir mayúsculas y minúsculas), `exact` (coincidencia exacta sensible a mayúsculas y minúsculas) e `in`, `gt` (mayor que), `startswith`, etc. La [lista completa está aquí](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

En algunos casos, necesitarás filtrar por un campo que define una relación de uno a muchos con otro modelo (por ejemplo, una `ForeignKey`). En este caso, puedes "indexar" a campos dentro del modelo relacionado con guiones bajos dobles adicionales.
Así, por ejemplo, para filtrar libros con un patrón de género específico, tendrás que indexar hasta `name` a través del campo `genre`, como se muestra a continuación:

```python
# Coincidirá con: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Puedes usar guiones bajos (`__`) para recorrer tantos niveles de relaciones (`ForeignKey`/`ManyToManyField`) como quieras.
> Por ejemplo, un `Book` que tuviera diferentes tipos, definidos mediante una relación adicional "cover", podría tener un nombre de parámetro: `type__cover__name__exact='hard'`.

Hay mucho más que puedes hacer con las consultas, incluidas las búsquedas inversas desde modelos relacionados, el encadenamiento de filtros, la devolución de un conjunto más pequeño de valores, etc. Para más información, consulta [Realizar consultas](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (documentación de Django).

## Definiendo los modelos de LocalLibrary

En esta sección comenzaremos a definir los modelos para la biblioteca. Abre `models.py` (en /django-locallibrary-tutorial/catalog/). El código repetitivo (_boilerplate_) al principio de la página importa el módulo _models_, que contiene la clase base de modelo `models.Model`, de la que heredarán nuestros modelos.

```python
from django.db import models

# Crea tus modelos aquí.
```

### Modelo 'Genre'

Copia el código del modelo `Genre` que se muestra a continuación y pégalo al final de tu archivo `models.py`. Este modelo se usa para almacenar información sobre la categoría del libro, por ejemplo, si es de ficción o no, romance o historia militar, etc.
Como se mencionó anteriormente, hemos creado el género como un modelo en lugar de como texto libre o una lista de selección, para que los valores posibles se puedan gestionar a través de la base de datos en lugar de codificarlos directamente.

```python
from django.urls import reverse # Se usa en get_absolute_url() para obtener la URL del ID especificado

from django.db.models import UniqueConstraint # Restringe los campos a valores únicos
from django.db.models.functions import Lower # Devuelve el valor del campo en minúsculas

class Genre(models.Model):
    """Modelo que representa un género literario."""
    name = models.CharField(
        max_length=200,
        unique=True,
        help_text="Ingresa un género literario (p. ej. Ciencia Ficción, Poesía Francesa, etc.)"
    )

    def __str__(self):
        """Cadena que representa al objeto Modelo."""
        return self.name

    def get_absolute_url(self):
        """Devuelve la URL para acceder a una instancia particular de género."""
        return reverse('genre-detail', args=[str(self.id)])

    class Meta:
        constraints = [
            UniqueConstraint(
                Lower('name'),
                name='genre_name_case_insensitive_unique',
                violation_error_message = "El género ya existe (coincidencia sin distinguir mayúsculas y minúsculas)"
            ),
        ]
```

El modelo tiene un único campo `CharField` (`name`), que se usa para describir el género (está limitado a 200 caracteres y tiene algo de `help_text`).
Hemos configurado este campo como único (`unique=True`) porque solo debe haber un registro para cada género.

Después del campo, declaramos un método `__str__()`, que devuelve el nombre del género definido por un registro en particular. No se ha definido ningún nombre detallado (_verbose name_), por lo que la etiqueta del campo será `Name` cuando se use en formularios.
A continuación, declaramos el método `get_absolute_url()`, que devuelve una URL que se puede usar para acceder a un registro de detalle de este modelo (para que esto funcione, tendremos que definir un mapeo de URL que tenga el nombre `genre-detail`, y definir una vista y una plantilla asociadas).

Configurar `unique=True` en el campo anterior evita que se creen géneros con el nombre _exactamente_ igual, pero no variaciones como "fantasy", "Fantasy" o incluso "FaNtAsY".
La última parte de la definición del modelo usa una opción de [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints) en los [metadatos](#metadatos) del modelo para especificar que el valor en minúsculas del campo `name` debe ser único en la base de datos, y mostrar la cadena `violation_error_message` si no lo es.
Aquí no necesitamos hacer nada más, pero puedes definir varias restricciones sobre un campo o varios campos.
Para más información, consulta la [referencia de Constraints](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), incluyendo [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (y [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Modelo 'Book'

Copia el modelo `Book` que aparece abajo y vuelve a pegarlo al final de tu archivo. El modelo `Book` representa toda la información sobre un libro disponible en un sentido general, pero no una "instancia" o "copia" física particular disponible para préstamo.

El modelo usa un `CharField` para representar el `title` y el `isbn` del libro.
En el caso de `isbn`, observa cómo el primer parámetro sin nombre establece explícitamente la etiqueta como "ISBN" (de lo contrario, sería "Isbn" por defecto). También establecemos el parámetro `unique` como `true` para garantizar que todos los libros tengan un ISBN único (el parámetro unique hace que el valor del campo sea único a nivel global en una tabla).
A diferencia de `isbn` (y del nombre del género), `title` no se establece como único, porque es posible que diferentes libros tengan el mismo nombre.
El modelo usa `TextField` para `summary`, porque este texto puede necesitar ser bastante largo.

```python
class Book(models.Model):
    """Modelo que representa un libro (pero no una copia específica de un libro)."""
    title = models.CharField(max_length=200)
    author = models.ForeignKey('Author', on_delete=models.RESTRICT, null=True)
    # Se usa clave externa porque un libro solo puede tener un autor, pero los autores pueden tener varios libros.
    # Author como cadena en lugar de objeto porque todavía no se ha declarado en el archivo.

    summary = models.TextField(
        max_length=1000, help_text="Ingresa una breve descripción del libro")
    isbn = models.CharField('ISBN', max_length=13,
                            unique=True,
                            help_text='13 caracteres <a href="https://www.isbn-international.org/content/what-isbn'
                                      '">número ISBN</a>')

    # Se usa ManyToManyField porque un género puede contener muchos libros. Los libros pueden abarcar muchos géneros.
    # La clase Genre ya se ha definido, así que podemos especificar el objeto arriba.
    genre = models.ManyToManyField(
        Genre, help_text="Selecciona un género para este libro")

    def __str__(self):
        """Cadena que representa al objeto Modelo."""
        return self.title

    def get_absolute_url(self):
        """Devuelve la URL para acceder a un registro de detalle de este libro."""
        return reverse('book-detail', args=[str(self.id)])
```

El género es un `ManyToManyField`, de modo que un libro puede tener varios géneros y un género puede tener muchos libros. El autor se declara como `ForeignKey`, de modo que cada libro solo tendrá un autor, pero un autor puede tener muchos libros (¡en la práctica un libro podría tener varios autores, pero no en esta implementación!)

En ambos tipos de campo, la clase del modelo relacionado se declara como el primer parámetro sin nombre, usando la clase del modelo o una cadena que contiene el nombre del modelo relacionado. ¡Debes usar el nombre del modelo como cadena si la clase asociada aún no se ha definido en este archivo antes de que se haga referencia a ella! Los otros parámetros de interés en el campo `author` son `null=True`, que permite que la base de datos almacene un valor `Null` si no se selecciona ningún autor, y `on_delete=models.RESTRICT`, que evitará que se elimine el autor asociado del libro si algún libro hace referencia a él.

> [!WARNING]
> Por defecto, `on_delete=models.CASCADE`, lo que significa que si se eliminara el autor, ¡este libro también se eliminaría! Aquí usamos `RESTRICT`, pero también podríamos usar `PROTECT` para evitar que se elimine el autor mientras algún libro lo use, o `SET_NULL` para establecer el autor del libro en `Null` si se elimina el registro.

El modelo también define `__str__()`, usando el campo `title` del libro para representar un registro `Book`. El último método, `get_absolute_url()`, devuelve una URL que se puede usar para acceder a un registro de detalle de este modelo (tendremos que definir un mapeo de URL que tenga el nombre `book-detail`, y definir una vista y una plantilla asociadas).

### Modelo 'BookInstance'

A continuación, copia el modelo `BookInstance` (que se muestra abajo) debajo de los otros modelos. `BookInstance` representa una copia específica de un libro que alguien podría pedir prestado, e incluye información sobre si la copia está disponible o en qué fecha se espera que sea devuelta, detalles de "impresión" o versión, y un id único para el libro en la biblioteca.

Algunos de los campos y métodos ya te resultarán familiares. El modelo usa:

- `ForeignKey` para identificar el `Book` asociado (cada libro puede tener muchas copias, pero una copia solo puede tener un `Book`). La clave especifica `on_delete=models.RESTRICT` para garantizar que `Book` no se pueda eliminar mientras una `BookInstance` haga referencia a él.
- `CharField` para representar la impresión (edición específica) del libro.

```python
import uuid # Necesario para las instancias únicas de libro

class BookInstance(models.Model):

    """Modelo que representa una copia específica de un libro (es decir, que se puede tomar prestada de la biblioteca)."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,
                          help_text="ID único para este libro en particular en toda la biblioteca")
    book = models.ForeignKey('Book', on_delete=models.RESTRICT, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('m', 'Mantenimiento'),
        ('o', 'Prestado'),
        ('a', 'Disponible'),
        ('r', 'Reservado'),
    )

    status = models.CharField(
        max_length=1,
        choices=LOAN_STATUS,
        blank=True,
        default='m',
        help_text='Disponibilidad del libro',
    )

    class Meta:
        ordering = ['due_back']

    def __str__(self):
        """Cadena que representa al objeto Modelo."""
        return f'{self.id} ({self.book.title})'
```

Además, declaramos algunos tipos de campo nuevos:

- `UUIDField` se usa para el campo `id`, para establecerlo como la `primary_key` de este modelo.
  Este tipo de campo asigna un valor único a nivel global para cada instancia (uno para cada libro que puedas encontrar en la biblioteca).
- `DateField` se usa para la fecha `due_back` (fecha en la que se espera que el libro vuelva a estar disponible después de haber sido prestado o estar en mantenimiento). Este valor puede ser `blank` o `null` (necesario para cuando el libro está disponible). Los metadatos del modelo (`Class Meta`) usan este campo para ordenar los registros cuando se devuelven en una consulta.
- `status` es un `CharField` que define una lista de opciones/selección. Como puedes ver, definimos una tupla que contiene tuplas de pares clave-valor y la pasamos al argumento choices. El valor en un par clave/valor es un valor que se muestra y que un usuario puede seleccionar, mientras que las claves son los valores que realmente se guardan si se selecciona la opción. También hemos establecido un valor predeterminado de 'm' (mantenimiento), ya que los libros se crearán inicialmente como no disponibles antes de que se coloquen en los estantes.

El método `__str__()` representa el objeto `BookInstance` usando una combinación de su id único y el título del `Book` asociado.

> [!NOTE]
> Un poco de Python:
>
> - A partir de Python 3.6, puedes usar la sintaxis de interpolación de cadenas (también conocida como f-strings): `f'{self.id} ({self.book.title})'`.
> - En versiones anteriores de este tutorial usábamos una sintaxis de [cadena formateada](https://peps.python.org/pep-3101/), que también es una forma válida de dar formato a cadenas en Python (por ejemplo, `'{0} ({1})'.format(self.id,self.book.title)`).

### Modelo 'Author'

Copia el modelo `Author` (que se muestra abajo) debajo del código existente en **models.py**.

```python
class Author(models.Model):
    """Modelo que representa un autor."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Fallecimiento', null=True, blank=True)

    class Meta:
        ordering = ['last_name', 'first_name']

    def get_absolute_url(self):
        """Devuelve la URL para acceder a una instancia particular de un autor."""
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        """Cadena que representa al objeto Modelo."""
        return f'{self.last_name}, {self.first_name}'
```

Todos los campos/métodos ya deberían resultarte familiares. El modelo define un autor con nombre, apellido, y fechas de nacimiento y fallecimiento (ambas opcionales). Especifica que, por defecto, `__str__()` devuelve el nombre en el orden _apellido_, _nombre_. El método `get_absolute_url()` invierte el mapeo de URL `author-detail` para obtener la URL que muestra un autor individual.

## Vuelve a ejecutar las migraciones de la base de datos

Ya se han creado todos tus modelos. Ahora vuelve a ejecutar las migraciones de tu base de datos para agregarlos a tu base de datos.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Modelo 'Language' — desafío

Imagina que un benefactor local dona una serie de libros nuevos escritos en otro idioma (digamos, farsi). El desafío es averiguar cómo se representarían mejor estos libros en nuestro sitio web de biblioteca, y luego agregarlos a los modelos.

Algunas cosas a tener en cuenta:

- ¿Debería asociarse "language" (idioma) a un `Book`, a un `BookInstance`, o a algún otro objeto?
- ¿Deberían representarse los distintos idiomas mediante un modelo, un campo de texto libre o una lista de selección codificada directamente?

Después de decidirte, agrega el campo. Puedes ver qué decidimos [para nuestro proyecto en GitHub](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py).

No olvides que, después de un cambio en tu modelo, debes volver a ejecutar las migraciones de tu base de datos para agregar los cambios.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Resumen

En este artículo hemos aprendido cómo se definen los modelos, y luego hemos usado esta información para diseñar e implementar los modelos adecuados para el sitio web _LocalLibrary_.

En este punto, nos desviaremos brevemente de la creación del sitio y echaremos un vistazo al _sitio de Administración de Django_. Este sitio nos permitirá agregar algunos datos a la biblioteca, que luego podremos mostrar usando nuestras vistas y plantillas (aún por crear).

## Véase también

- [Escribiendo tu primera aplicación Django, parte 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (documentación de Django)
- [Realizar consultas](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (documentación de Django)
- [Referencia de la API de QuerySet](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (documentación de Django)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
