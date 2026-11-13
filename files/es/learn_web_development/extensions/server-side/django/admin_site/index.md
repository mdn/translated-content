---
title: "Tutorial Django Parte 4: Sitio de Administración de Django"
short-title: "4: Sitio de administración de Django"
slug: Learn_web_development/Extensions/Server-side/Django/Admin_site
l10n:
  sourceCommit: 815f1a18f44059500b337719295c6eda14b6228e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}

Ahora que hemos creado los modelos para el sitio web de [LocalLibrary](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), usaremos el sitio de administración de Django para agregar algunos datos "reales" de libros. Primero te mostraremos cómo registrar los modelos en el sitio de administración, luego te mostraremos cómo iniciar sesión y crear algunos datos. Al final del artículo mostraremos algunas formas en las que puedes mejorar aún más la presentación del sitio de administración.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Completar primero: <a href="/es/docs/Learn_web_development/Extensions/Server-side/Django/Models"
          >Tutorial de Django Parte 3: Usando modelos</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Comprender los beneficios y limitaciones del sitio de administración de Django, y usarlo para crear algunos registros para nuestros modelos.
      </td>
    </tr>
  </tbody>
</table>

## Resumen

La _aplicación_ de administración de Django puede usar tus modelos para construir automáticamente un área del sitio que puedes usar para crear, ver, actualizar y eliminar registros. Esto puede ahorrarte mucho tiempo durante el desarrollo, facilitando bastante probar tus modelos y hacerte una idea de si tienes los datos _correctos_. La aplicación de administración también puede ser útil para gestionar datos en producción, dependiendo del tipo de sitio web. El proyecto Django la recomienda solo para gestión interna de datos (es decir, para uso exclusivo de administradores o personas dentro de tu organización), ya que el enfoque centrado en el modelo no es necesariamente la mejor interfaz posible para todos los usuarios, y expone muchos detalles innecesarios sobre los modelos.

Toda la configuración necesaria para incluir la aplicación de administración en tu sitio web se hizo automáticamente cuando [creaste el proyecto esqueleto](/es/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (para información sobre las dependencias reales necesarias, consulta la [documentación de Django aquí](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/)). Como resultado, todo lo que **debes** hacer para agregar tus modelos a la aplicación de administración es _registrarlos_. Al final de este artículo daremos una breve demostración de cómo puedes configurar aún más el área de administración para mostrar mejor los datos de nuestro modelo.

Después de registrar los modelos te mostraremos cómo crear un nuevo "superusuario", iniciar sesión en el sitio, y crear algunos libros, autores, instancias de libro y géneros. Estos serán útiles para probar las vistas y plantillas que empezaremos a crear en el siguiente tutorial.

## Registro de modelos

Primero, abre **admin.py** en la aplicación catalog (**/django-locallibrary-tutorial/catalog/admin.py**). Actualmente se ve así, nota que ya importa `django.contrib.admin`:

```python
from django.contrib import admin

# Register your models here.
```

Registra los modelos copiando el siguiente texto al final del archivo. Este código importa los modelos y luego llama a `admin.site.register` para registrar cada uno de ellos.

```python
from .models import Author, Genre, Book, BookInstance, Language

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
admin.site.register(Language)
```

> [!NOTE]
> ¡Las líneas anteriores asumen que aceptaste el desafío de crear un modelo para representar el idioma natural de un libro ([consulta el artículo del tutorial de modelos](/es/docs/Learn_web_development/Extensions/Server-side/Django/Models))!

Esta es la forma más sencilla de registrar un modelo, o modelos, en el sitio. El sitio de administración es altamente personalizable, y hablaremos más sobre las otras formas de registrar tus modelos más adelante.

## Creación de un superusuario

Para poder iniciar sesión en el sitio de administración, necesitamos una cuenta de usuario con el estado _Staff_ habilitado. Para ver y crear registros también necesitamos que este usuario tenga permisos para gestionar todos nuestros objetos. Puedes crear una cuenta de "superusuario" que tenga acceso completo al sitio y todos los permisos necesarios usando **manage.py**.

Ejecuta el siguiente comando, en el mismo directorio que **manage.py**, para crear el superusuario. Se te pedirá que ingreses un nombre de usuario, una dirección de correo electrónico, y una contraseña _segura_.

```bash
python3 manage.py createsuperuser
```

Una vez que este comando termine, se habrá agregado un nuevo superusuario a la base de datos. Ahora reinicia el servidor de desarrollo para poder probar el inicio de sesión:

```bash
python3 manage.py runserver
```

## Inicio de sesión y uso del sitio

Para iniciar sesión en el sitio, abre la URL _/admin_ (por ejemplo, `http://127.0.0.1:8000/admin`) e ingresa las credenciales de tu nuevo superusuario y contraseña (serás redirigido a la página de _inicio de sesión_, y luego de vuelta a la URL _/admin_ después de ingresar tus datos).

Esta parte del sitio muestra todos nuestros modelos, agrupados por aplicación instalada. Puedes hacer clic en el nombre de un modelo para ir a una pantalla que lista todos sus registros asociados, y también puedes hacer clic en esos registros para editarlos. También puedes hacer clic directamente en el enlace **Agregar** junto a cada modelo para empezar a crear un registro de ese tipo.

![Sitio de administración - Página de inicio](admin_home.png)

Haz clic en el enlace **Agregar** a la derecha de _Libros_ para crear un nuevo libro (esto mostrará un diálogo similar al de abajo). Observa cómo los títulos de cada campo, el tipo de widget usado, y el texto de ayuda (si lo hay) coinciden con los valores que especificaste en el modelo.

Ingresa valores para los campos. Puedes crear nuevos autores o géneros presionando el botón **+** junto a los respectivos campos (o seleccionar valores existentes de las listas si ya los has creado). Cuando termines puedes presionar **GUARDAR**, **Guardar y agregar otro**, o **Guardar y continuar editando** para guardar el registro.

![Sitio de administración - Agregar libro](admin_book_add.png)

> [!NOTE]
> En este punto nos gustaría que dediques algo de tiempo a agregar algunos libros, autores, idiomas y géneros (por ejemplo, Fantasía) a tu aplicación. Asegúrate de que cada autor y género incluya un par de libros diferentes (esto hará que tus vistas de lista y detalle sean más interesantes cuando las implementemos más adelante en la serie de artículos).

Cuando hayas terminado de agregar libros, haz clic en el enlace **Inicio** en la parte superior para volver a la página principal de administración. Luego haz clic en el enlace **Libros** para mostrar la lista actual de libros (o en uno de los otros enlaces para ver otras listas de modelos). Ahora que has agregado algunos libros, la lista podría verse similar a la captura de pantalla de abajo. Se muestra el título de cada libro; este es el valor devuelto por el método `__str__()` del modelo Book que especificamos en el artículo anterior.

![Sitio de administración - Lista de objetos de libro](admin_book_list.png)

Desde esta lista puedes eliminar libros seleccionando la casilla junto al libro que no quieres, seleccionando la acción _eliminar…_ de la lista desplegable _Acción_, y luego presionando el botón **Ir**. También puedes agregar nuevos libros presionando el botón **AGREGAR LIBRO**.

Puedes editar un libro seleccionando su nombre en el enlace. La página de edición de un libro, mostrada abajo, es casi idéntica a la página de "Agregar". Las principales diferencias son el título de la página (_Cambiar libro_) y la adición de los botones **Eliminar**, **HISTORIAL** y **VER EN EL SITIO** (este último botón aparece porque definimos el método `get_absolute_url()` en nuestro modelo).

> [!NOTE]
> Al hacer clic en el botón **VER EN EL SITIO** se genera una excepción `NoReverseMatch` porque el método `get_absolute_url()` intenta hacer `reverse()` de un mapeo de URL con nombre ('book-detail') que aún no ha sido definido.
> Definiremos un mapeo de URL y su vista asociada en [Tutorial de Django Parte 6: Vistas genéricas de lista y detalle](/es/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views).

![Sitio de administración - Editar libro](admin_book_modify.png)

Ahora navega de vuelta a la página **Inicio** (usando el enlace _Inicio_ en el camino de migas de pan) y luego observa las listas de **Autor** y **Género**; ya deberías tener bastantes creados desde que agregaste los nuevos libros, pero siéntete libre de agregar más.

Lo que no tendrás son _Instancias de Libro_, ya que estas no se crean desde Libros (aunque puedes crear un `Book` desde un `BookInstance`, esa es la naturaleza del campo `ForeignKey`). Navega de vuelta a la página _Inicio_ y presiona el botón **Agregar** asociado para mostrar la pantalla _Agregar instancia de libro_ de abajo. Observa el Id grande y único a nivel global, que puede usarse para identificar por separado una sola copia de un libro en la biblioteca.

![Sitio de administración - Agregar instancia de libro](admin_bookinstance_add.png)

Crea varios de estos registros para cada uno de tus libros. Establece el estado como _Disponible_ para al menos algunos registros y _Prestado_ para otros. Si el estado **no** es _Disponible_, entonces también establece una fecha futura de _Devolución_.

¡Eso es todo! Ahora has aprendido cómo configurar y usar el sitio de administración. También has creado registros para `Book`, `BookInstance`, `Genre`, `Language` y `Author` que podremos usar una vez que creemos nuestras propias vistas y plantillas

## Configuración avanzada

Django hace un buen trabajo creando un sitio de administración básico usando la información de los modelos registrados:

- Cada modelo tiene una lista de registros individuales, identificados por la cadena creada con el método `__str__()` del modelo, y enlazados a vistas de detalle/formularios para editar. Por defecto, esta vista tiene un menú de acciones en la parte superior que puedes usar para realizar operaciones de eliminación masiva sobre los registros.
- Los formularios de registro de detalle del modelo para editar y agregar registros contienen todos los campos del modelo, dispuestos verticalmente en su orden de declaración.

Puedes personalizar aún más la interfaz para hacerla incluso más fácil de usar. Algunas de las cosas que puedes hacer son:

- Vistas de lista:
  - Agregar campos/información adicional mostrada para cada registro.
  - Agregar filtros para seleccionar qué registros se listan, basados en la fecha u otro valor de selección (por ejemplo, el estado de préstamo de un libro).
  - Agregar opciones adicionales al menú de acciones en las vistas de lista y elegir dónde se muestra este menú en el formulario.

- Vistas de detalle
  - Elegir qué campos mostrar (o excluir), junto con su orden, agrupación, si son editables, el widget usado, orientación, etc.
  - Agregar campos relacionados a un registro para permitir la edición en línea (por ejemplo, agregar la posibilidad de agregar y editar registros de libros mientras creas su registro de autor).

En esta sección veremos algunos cambios que mejorarán la interfaz de nuestra _LocalLibrary_, incluyendo agregar más información a las listas de los modelos `Book` y `Author`, y mejorar el diseño de sus vistas de edición. No cambiaremos la presentación de los modelos `Language` y `Genre` porque cada uno tiene solo un campo, ¡así que no hay un beneficio real en hacerlo!

Puedes encontrar una referencia completa de todas las opciones de personalización del sitio de administración en [El sitio de administración de Django](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (documentación de Django).

### Registrar una clase ModelAdmin

Para cambiar cómo se muestra un modelo en la interfaz de administración, defines una clase [ModelAdmin](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#modeladmin-objects) (que describe el diseño) y la registras con el modelo.

Empecemos con el modelo `Author`. Abre **admin.py** en la aplicación catalog (**/django-locallibrary-tutorial/catalog/admin.py**). Comenta el registro original (agrega un # al inicio) del modelo `Author`:

```python
# admin.site.register(Author)
```

Ahora agrega una nueva clase `AuthorAdmin` y su registro como se muestra abajo.

```python
# Define la clase de administración
class AuthorAdmin(admin.ModelAdmin):
    pass

# Registra la clase de administración con el modelo asociado
admin.site.register(Author, AuthorAdmin)
```

Ahora agregaremos clases `ModelAdmin` para `Book` y `BookInstance`. Nuevamente necesitamos comentar los registros originales:

```python
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

Ahora, para crear y registrar los nuevos modelos; para efectos de esta demostración, en su lugar usaremos el decorador `@register` para registrar los modelos (esto hace exactamente lo mismo que la sintaxis `admin.site.register()`):

```python
# Registra las clases de administración para Book usando el decorador
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    pass

# Registra las clases de administración para BookInstance usando el decorador
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    pass
```

Actualmente todas nuestras clases de administración están vacías (mira el `pass`) así que el comportamiento de administración no cambiará. Ahora podemos extenderlas para definir el comportamiento de administración específico de cada modelo.

### Configurar vistas de lista

Actualmente, _LocalLibrary_ lista todos los autores usando el nombre de objeto generado por el método `__str__()` del modelo. Esto está bien cuando solo tienes unos pocos autores, pero una vez que tengas muchos podrías terminar con duplicados. Para diferenciarlos, o simplemente porque quieres mostrar información más interesante sobre cada autor, puedes usar [list_display](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) para agregar campos adicionales a la vista.

Reemplaza tu clase `AuthorAdmin` con el código de abajo. Los nombres de los campos a mostrar en la lista se declaran en una _tupla_ en el orden requerido, como se muestra (estos son los mismos nombres especificados en tu modelo original).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Ahora navega a la lista de autores en tu sitio web. Los campos anteriores ahora deberían mostrarse, así:

![Sitio de administración - Lista mejorada de autores](admin_improved_author_list.png)

Para nuestro modelo `Book`, además mostraremos el `author` y el `genre`. El `author` es una relación de campo `ForeignKey` (uno a muchos), y por lo tanto se representará con el valor `__str__()` del registro asociado. Reemplaza la clase `BookAdmin` con la versión de abajo.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Lamentablemente no podemos especificar directamente el campo `genre` en `list_display` porque es un `ManyToManyField` (Django evita esto porque implicaría un "costo" alto de acceso a la base de datos). En su lugar, definiremos una función `display_genre` para obtener la información como una cadena (esta es la función que llamamos arriba; la definiremos abajo).

> [!NOTE]
> Obtener el `genre` puede no ser una buena idea aquí, debido al "costo" de la operación de base de datos. Te lo mostramos porque llamar funciones en tus modelos puede ser muy útil por otras razones, por ejemplo, para agregar un enlace de _Eliminar_ junto a cada elemento de la lista.

Agrega el siguiente código a tu modelo `Book` (**models.py**). Esto crea una cadena a partir de los primeros tres valores del campo `genre` (si existen) y crea una `short_description` que puede usarse en el sitio de administración para este método.

```python
def display_genre(self):
    """Crea una cadena para el Genre. Esto es necesario para mostrar el genre en Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Género'
```

Después de guardar el modelo y la administración actualizada, abre tu sitio web y ve a la página de lista de _Books_; deberías ver una lista de libros como la de abajo:

![Sitio de administración - Lista mejorada de libros](admin_improved_book_list.png)

El modelo `Genre` (y el modelo `Language`, si definiste uno) tienen ambos un solo campo, por lo que no tiene sentido crear un modelo adicional para ellos para mostrar campos adicionales.

> [!NOTE]
> Vale la pena actualizar la lista del modelo `BookInstance` para mostrar al menos el estado y la fecha de devolución esperada. ¡Hemos agregado eso como un desafío al final de este artículo!

### Agregar filtros de lista

Una vez que tengas muchos elementos en una lista, puede ser útil poder filtrar cuáles elementos se muestran.
Esto se hace listando los campos en el atributo `list_filter`.
Reemplaza tu clase `BookInstanceAdmin` actual con el fragmento de código de abajo.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

La vista de lista ahora incluirá un cuadro de filtro a la derecha. Observa cómo puedes elegir fechas y estado para filtrar los valores:

![Sitio de administración - Filtros de lista de BookInstance](admin_improved_bookinstance_list_filters.png)

### Organizar el diseño de la vista de detalle

Por defecto, las vistas de detalle disponen todos los campos verticalmente, en su orden de declaración en el modelo. Puedes cambiar el orden de declaración, qué campos se muestran (o excluyen), si se usan secciones para organizar la información, si los campos se muestran horizontal o verticalmente, e incluso qué widgets de edición se usan en los formularios de administración.

> [!NOTE]
> Los modelos de _LocalLibrary_ son relativamente simples, así que no hay una gran necesidad de cambiar el diseño; de todas formas haremos algunos cambios, solo para mostrarte cómo.

#### Controlar qué campos se muestran y cómo se organizan

Actualiza tu clase `AuthorAdmin` para agregar la línea `fields`, como se muestra abajo:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

El atributo `fields` lista solo los campos que se mostrarán en el formulario, en orden. Los campos se muestran verticalmente por defecto, pero se mostrarán horizontalmente si además los agrupas en una tupla (como se muestra en los campos de "date" arriba).

En tu sitio web ve a la vista de detalle del autor; ahora debería verse como se muestra abajo:

![Sitio de administración - Detalle mejorado de autor](admin_improved_author_detail.png)

> [!NOTE]
> También puedes usar el atributo `exclude` para declarar una lista de atributos que se excluirán del formulario (se mostrarán todos los demás atributos del modelo).

#### Dividir la vista de detalle en secciones

Puedes agregar "secciones" para agrupar información relacionada del modelo dentro del formulario de detalle, usando el atributo [fieldsets](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets).

En el modelo `BookInstance` tenemos información relacionada con qué es el libro (es decir, `name`, `imprint`, y `id`) y cuándo estará disponible (`status`, `due_back`). Podemos agregar esto a nuestra clase `BookInstanceAdmin` como se muestra abajo, usando la propiedad `fieldsets`.

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book', 'imprint', 'id')
        }),
        ('Disponibilidad', {
            'fields': ('status', 'due_back')
        }),
    )
```

Cada sección tiene su propio título (o `None`, si no quieres un título) y una tupla asociada de campos en un diccionario; el formato es complicado de describir, pero bastante fácil de entender si observas el fragmento de código justo arriba.

Ahora navega a una vista de instancia de libro en tu sitio web; el formulario debería aparecer como se muestra abajo:

![Sitio de administración - Detalle mejorado de BookInstance con secciones](admin_improved_bookinstance_detail_sections.png)

### Edición en línea de registros asociados

A veces tiene sentido poder agregar registros asociados al mismo tiempo. Por ejemplo, puede tener sentido tener tanto la información del libro como la información sobre las copias específicas que tienes en la misma página de detalle.

Puedes hacer esto declarando [inlines](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines), del tipo [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) (diseño horizontal) o [StackedInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.StackedInline) (diseño vertical, igual que el diseño de modelo por defecto). Puedes agregar la información de `BookInstance` en línea a nuestro detalle de `Book` especificando `inlines` en tu `BookAdmin`:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Ahora navega a una vista de un `Book` en tu sitio web; en la parte inferior ahora deberías ver las instancias de libro relacionadas con este libro (inmediatamente debajo de los campos de género del libro):

![Sitio de administración - Libro con inlines](admin_improved_book_detail_inlines.png)

En este caso, todo lo que hemos hecho es declarar nuestra clase inline tabular, que simplemente agrega todos los campos del modelo _incluido en línea_. Puedes especificar todo tipo de información adicional para el diseño, incluyendo los campos a mostrar, su orden, si son de solo lectura o no, etc. (consulta [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) para más información).

> [!NOTE]
> ¡Hay algunos límites molestos en esta funcionalidad! En la captura de pantalla de arriba tenemos tres instancias de libro existentes, seguidas de tres marcadores de posición para nuevas instancias de libro (¡que se ven muy similares!). Sería mejor no tener instancias de libro adicionales por defecto y simplemente agregarlas con el enlace **Add another Book instance**, o poder simplemente listar las `BookInstance` como enlaces no editables desde aquí. La primera opción se puede hacer estableciendo el atributo `extra` en `0` en el modelo `BooksInstanceInline`, pruébalo tú mismo

## Ponte a prueba

Hemos aprendido mucho en esta sección, así que ahora es momento de que intentes algunas cosas.

1. Para la vista de lista de `BookInstance`, agrega código para mostrar el book, status, due back date, e id (en lugar del texto por defecto `__str__()`).
2. Agrega un listado en línea de elementos `Book` a la vista de detalle de `Author` usando el mismo enfoque que usamos para `Book`/`BookInstance`.

## Conclusión

¡Eso es todo! Ahora has aprendido cómo configurar el sitio de administración tanto en su forma más simple como mejorada, cómo crear un superusuario, y cómo navegar el sitio de administración y ver, eliminar, y actualizar registros. En el camino has creado un montón de Books, BookInstances, Genres, y Authors que podremos listar y mostrar una vez que creemos nuestras propias vistas y plantillas.

## Referencias adicionales

- [Escribiendo tu primera aplicación de Django, parte 2: Introducción al administrador de Django](https://docs.djangoproject.com/en/5.0/intro/tutorial02/#introducing-the-django-admin) (documentación de Django)
- [El sitio de administración de Django](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (documentación de Django)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}
