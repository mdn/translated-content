---
title: "Tutorial Django Parte 4: Sitio de Administración de Django"
slug: Learn/Server-side/Django/Admin_site
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}

Ahora que hemos creado modelos para el sitio web de la [BibliotecaLocal](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website), usaremos el sitio de administración de Django para añadir algunos datos de libros "reales". Primero mostraremos cómo registrar los modelos en el sitio de administración y luego te mostraremos cómo iniciar sesión y crear algunos datos. Al final del artículo mostraremos algunas formas en las que puedes mejorar más adelante la presentación del sitio de Administración.

<table>
  <tbody>
    <tr>
      <th scope="row">Pre-requisitos:</th>
      <td>
        Primero completa:
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Server-side/Django/Models"
          >Tutorial Django Parte 3: Uso de modelos</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Entender los beneficios y las limitaciones del sitio de administración
          de Django, y usarlo para crear algunos registros para nuestros
          modelos.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Introducción

La _aplicación_ de administración de Django puede usar tus modelos para construir automáticamente un área dentro del sitio que puedes usar para crear, consultar, actualizar y borrar registros. Esto puede ahorrarte mucho tiempo de desarrollo, haciendo muy fácil probar tus modelos y darte una idea de si tus datos son correctos. La aplicación de administración también puede ser útil para manejar datos en producción, dependiendo del estilo del sitio web. Desde el proyecto Django solo se recomienda para gestión de datos internos (por ejemplo, solo para uso de administradores o personas internas de tu organización), ya que como enfoque centrado en el modelo no es necesariamente la mejor interfaz posible para todos los usuarios, exponiendo una gran cantidad de detalles innecesarios de los modelos.

Toda la configuración requerida para incluir la aplicación admin en tu sitio Web fue hecha automaticamente cuando [creaste el esqueleto del proyecto](/es/docs/Learn/Server-side/Django/skeleton_website) (para información sobre dependencias reales necesarias, vea los [documentos de Django aquí](https://docs.djangoproject.com/en/1.10/ref/contrib/admin/)). Como resultado, todo lo que **debes** hacer para agregar tus modelos a la aplicación admin es _registrarlos._ Al final de este artículo entregaremos una breve demostración sobre como puedes configurar aún más el área de administración para mejorar la visualización de nuestros modelos de datos.

Después de registrar los modelos te mostraremos como crear un nuevo "administrador", iniciar sesión en el sitio, y crear algunos libros, autores, instancias de libros, y géneros. Esto será útil para probar las vistas y plantillas que empezaremos a crear en el siguiente tutorial.

## Registrando los modelos

Primero, abre **admin.py** en la aplicación catálogo (**/locallibrary/catalog/admin.py**). Actualmente se ve como esto — notar que ya importa `django.contrib.admin`:

```python
from django.contrib import admin

# Register your models here.
```

Registra los modelos copiando el texto siguiente al final del archivo. Este simple código esta importando los modelos y después llama a `admin.site.register` para registrar a cada uno de ellos.

```python
from .models import Author, Genre, Book, BookInstance

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
```

> **Nota:** Si tu aceptaste el desafío de crear un modelo que represente el Lenguaje natural de un libro ([ver el artículo tutorial de modelos](/es/docs/Learn/Server-side/Django/Models)), importalo y registralo también!

Esta es la forma más simple de registrar un modelo, o modelos, con el sitio. El sitio de administración es altamente personalizable, y hablaremos más sobre otras formas de registrar tus modelos más abajo.

## Creando un administrador

Para iniciar sesión en el sitio de administración, necesitamos una cuenta de usuario con estado de _Personal_ habilitado. Para ver y crear registros tambien necesitamos que este usuario tenga permisos para administrar todos nuestros objetos. Puedes crear una cuenta "administrador" que tenga acceso total al sitio y a todos los permisios necesarios usando **manage.py**.

Usa el siguiente comando, en el mismo directorio de **manage.py**, para crear al administrador. Deberás ingresar un nombre de usuario, dirección email, y una contraseña _fuerte_.

```bash
python3 manage.py createsuperuser
```

Una vez el comando termine un nuevo administrador será agregado a la base de datos. Ahora reinicia el servidor de desarrollo para que podamos probrar el inicio de sesión:

```bash
python3 manage.py runserver
```

## Iniciar sesión y usar el sitio

Para iniciar sesión en el sitio, ve a la URL _/admin_ (e.j. `http://127.0.0.1:8000/admin`) e ingresa tus credenciales de id usuario y contraseña de administrador (serás redirigido a la página _login_, y entonces volverás a la URL de _/admin_ después de haber ingresado tus datos).

Esta parte del sitio muestra todos tus modelos, agrupados por aplicación instalada. Puedes hacer click en un nombre de modelo para ir a una pantalla que lista todos los registros asociados, y además puedes hacer click sobre esos registros para editarlos. También puedes hacer click directamente sobre el vínculo **Añadir** a continuación de cada modelo para comenzar a crear un registro de ese tipo.

![Admin Site - Home page](admin_home.png)

Haz click sobre el vínculo **Añadir** a la derecha de _Books_ para crear un nuevo libro, esto mostrará un diálogo parecido al de abajo). Nota como los títulos de cada campo, el tipo de widget usado, y el `help_text` (si existe) corresponde con el valor que especificaste en el modelo.

Ingresa valores para los campos. Puede crear nuevos autores o géneros presionandoel botón **+** a continuación del campo respectivo ( o seleccionar un valor existente de las listas si ya las tenías creadas). Cuando termines puedes presionar **Grabar**, **Grabar y añadir otro**, o **Grabar y continuar editando** para guardar el registro.

![Admin Site - Book Add](admin_book_add.png)

> **Nota:** En este punto nos gustaría que pasaras algún tiempo añadiendo unos pocos libros, autores, y géneros (ej. Fantasía) a tu aplicación. Asegúrate de que cada autor y género incluye un par de libros diferentes (esto hará tus vistas de lista y detalle más interesantes cuando las implementemos más tarde en la serie de artículos).

Cuando hayas terminado de añadir libros, haz click en el enlace **Home** en el separador de arriba para regresar a la página principal de administración. Luego haz click en el enlace **Books** para desplegar la lista actual de libros (o en alguno de los otros enlaces para ver las listas de otros modelos). Ahora que haz añadido unos cuantos libros, la lista debería lucir similar a la captura de pantalla de abajo. Se muestra el título de cada libro; que es el valor devuelto por el método `__str__()` del modelo Book que especificamos en el artículo anterior.

![Admin Site - List of book objects](admin_book_list.png)

Desde esta lista puedes eliminar libros marcando la casilla de verificación junto al libro que no deseas y seleccionando la acción _delete..._ en la lista de selección _Action_, y luego presionando el botón **Go**. Puedes también añadir nuevos libros presionando el botón **ADD BOOK**.

Puedes editar un libro haciendo click en su nombre en la lista. La página de edición para un libro, como se muestra abajo, es casi idéntica a la página "Add". Las principales diferencias son el título de la página (_Change book_) y la adición de los botones **Delete**, **HISTORY** y **VIEW ON SITE** (este último aparece porque definimos el método `get_absolute_url()` en nuestro modelo).

![Admin Site - Book Edit](admin_book_modify.png)

Ahora regresa a la página **Home** (usando el enlace _Home_ de la barra superior) y observa las listas **Author** y **Genre** — ya deberías tener algunos registros creados de cuando añadiste los nuevos libros, pero puedes crear algunos más.

Lo que no vas a tener es _BookInstances_, porque estas no se crean de los libros (si bien puedes crear un `Book` desde una `BookInstance` — esta es la naturaleza de los campos `ForeignKey`). Regresa a la página _Home_ y presiona el botón **Add** relacionado para desplegar la pantalla _Add book instance_, como se muestra abajo. Nota el largo y globalmente único Id, que puede ser usado para identificar inequívocamente una única copia de un libro dentro de la biblioteca.

![Admin Site - BookInstance Add](admin_bookinstance_add.png)

Crea algunos de estos registros para cada uno de tus libros. Establece el status en _Available_ para al menos algunos registros y en _On loan_ para otros. Si el status es **diferente** de _Available_, especifica también una fecha de _Due back_ (devolución).

¡Eso es todo! Has aprendido a configurar y usar el sitio de administración. También has creado registros para `Book`, `BookInstance`, `Genre` y `Author` que podremos usar una vez que creemos nuestras propias views (vistas) y templates (plantillas).

## Configuración avanzada

Django hace un gran trabajo al crear un sitio de administración básico usando la información de los modelos registrados:

- Cada modelo tiene una lista de registros individuales, identificados por la cadena creada por el método `__str__()` del modelo, y enlazados a vistas/formularios de detalle para edición. Por defecto, esta vista de lista tiene un menú de acción en la parte superior que puedes usar para realizar operaciones de eliminación masiva de los registros.
- Los formularios de detalle de registro del modelo para edición y adición de registros contienen todos los campos del modelo, organizados verticalmente en su orden de declaración.

Posteriormente puedes personalizar la interfaz para hacerla incluso más fácil de usar. Algunas de las cosas que puedes hacer son:

- Vistas de lista:

  - Añadir campos e información adicional desplegada para cada registro.
  - Añadir filtros para seleccionar qué registros se listan, basados en fechas u otros tipos de valores (ej. estado de préstamo del libro).
  - Añadir opciones adicionales al menú _Action_ en las vistas de lista y elegir en qué lugar del formulario se despliega este menú.

- Vistas de detalle:

  - Elegir qué campos desplegar (o excluir), junto con su orden, agrupamiento, si son editables, el tipo de control a usarse, orientación, etc.
  - Añadir campos relacionados a un registro para permitir la edición en cadena (ej. proveer la capacidad de añadir y editar registros de libros mientras estás creando su registro de autor).

En esta sección observaremos unos cuantos cambios que mejorarán la interfaz de nuestra _LocalLibrary_, incluyendo la adición de más información a las listas de los modelos `Book` y `Author`, y mejorando el diseño de sus vistas de edición. No cambiaremos la presentación de los modelos `Language` y `Genre` debido a que solo tienen un campo cada uno, ¡por lo que no hay ningún beneficio real de hacerlo!

Puedes encontrar una referencia completa de todas las opciones de personalización del sitio de administración en [The Django Admin site](https://docs.djangoproject.com/en/1.10/ref/contrib/admin/) (Django Docs).

### Registrar una clase ModelAdmin

Para cambiar la forma en la que un modelo se despliega en la interfaz de administración debes definir una clase [ModelAdmin](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#modeladmin-objects) (que describe el diseño) y registrarla con el modelo.

Comencemos con el modelo Author. Abre **admin.py** en la aplicación catalog (**/locallibrary/catalog/admin.py**). Comenta tu registro original para el modelo `Author` (colocando el prefijo # en la línea):

```js
# admin.site.register(Author)
```

Ahora añade una nueva clase `AuthorAdmin` y regístrala como se muestra abajo.

```python
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

Ahora añadiremos clases `ModelAdmin` para `Book`, y `BookInstance`. De nuevo, debemos comentar nuestros registros originales:

```python
#admin.site.register(Book)
#admin.site.register(BookInstance)
```

Ahora, para crear y registar los nuevos modelos usaremos, para propósitos de esta demostración, la expresión `@register` para registrar los modelos (hace exactamente lo mismo que `admin.site.register()`):

```python
# Register the Admin classes for Book using the decorator

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    pass

# Register the Admin classes for BookInstance using the decorator

@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    pass
```

Al momento todas nuestras clases de administración estás vacías (observa "pass"), así que el comportamiento de administración ¡no cambiará! Ahora podemos extenderlas para definir nuestro comportamiento de administración específico para cada modelo.

### Configurar las vistas de lista

La _LocalLibrary_ actualmente lista todos los autores usando el nombre generado por el método `__str__()` del modelo. Esto funciona bien cuando solo tienes unos pocos autores, pero una vez que tienes muchos puedes terminar teniendo duplicados. Para diferenciarlos, o simplemente para mostrar información más interesante sobre cada autor, puedes usar [list_display](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) para añadir otros campos a la vista.

Reemplaza tu clase `AuthorAdmin` con el código de abajo. Los nombres de campos a ser desplegados en la lista están declarados en una tupla en el orden requerido, como se muestra (estos son los mismos nombres especificados en tu modelo original).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Recarga el sitio y navega hacia la lista de autores. Ahora deberían desplegarse los campos de arriba, así:

![Admin Site - Improved Author List](admin_improved_author_list.png)

Para nuestro modelo `Book` desplegaremos adicionalmente el `author` y `genre`. El `author` es un campo de relación tipo `ForeignKey` (uno a uno), y por tanto estará representado por el valor `__str__()` del registro asociado. Reemplaza la clase BookAdmin con la versión de abajo.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Desafortunadamente, no podemos especificar directamente el campo `genre` en `list_display` porque es un campo `ManyToManyField` (Django previene esto porque habría un alto "costo" de acceso a base de datos si lo hiciera). En lugar de eso, definiremos una función `display_genre` para obtener la información como una cadena (esta es la función que hemos llamado arriba; la definiremos más abajo).

> **Nota:** Obtener el `genre` podría no ser una buena idea aquí, debido al "costo" de la operación en la base de datos. Te mostramos cómo hacerlo porque llamar funciones desde tus modelos puede ser muy útil por otras razones — por ejemplo para añadir un enlace _**Delete**_ junto a cada ítem en la lista.

Añade el siguiente código en tu modelo `Book` (**models.py**). Esto crea una cadena con los tres primeros valores del campo `genre` (si existen) y crea una `short_description` (descripción corta) que puede ser usada en el sitio de administración por este método.

```python
def display_genre(self):
    """
    Creates a string for the Genre. This is required to display genre in Admin.
    """
    return ', '.join([ genre.name for genre in self.genre.all()[:3] ])
display_genre.short_description = 'Genre'
```

Después de guardar el modelo y actualizar admin, recarga el sitio y ve a la página de lista de _Books_ (libros), deberías ver una lista de libros como la de abajo:

![Admin Site - Improved Book List](admin_improved_book_list.png)

El modelo `Genre` (y el modelo `Language`, si lo definiste) tiene un solo campo, por lo que no tiene sentido crear un modelo adicional para el mismo para desplegar campos adicionales.

> **Nota:** Vale la pena actualizar el modelo `BookInstance` para mostrar al menos el estado y fecha de devolución esperada. ¡Lo hemos añadido como un reto al final de este artículo!

### Añadir filtros de lista

Una vez que tienes muchos ítems en una lista, puede ser útil filtrar los ítems que se despliegan. Esto se hace listando campos en el atributo `list_filter`. Reemplaza tu clase `BookInstanceAdmin` actual con el fragmento de código de abajo.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

La vista de lista incluirá ahora un cuadro de filtrado a la derecha. Nota como puedes elegir fechas y estados para filtrar los valores:

![Admin Site - BookInstance List Filters](admin_improved_bookinstance_list_filters.png)

### Organizar el diseño de vista detallada

Por defecto, las vistas detalladas organizan todos los campos verticalmente, en su órden de declaración en el modelo. Puedes cambiar el orden de declaración, qué campos se despliegan (o excluyen), si se usa secciones para organizar la información, si los campos se despliegan en horizontal o vertical, e incluso qué controles de edición se usan en los formularios de administración.

> **Nota:** Los modelos de la **LocalLibrary** son relativamente simples, por lo que no tenemos una gran necesidad de cambiar el diseño; sin embargo haremos algunos cambios solo para mostrarte cómo.

#### Controlando qué campos son desplegados y ordenados

Actualiza tu clase `AuthorAdmin` para añadir la línea `fields`, como se muestra abajo (en negrita):

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

El atributo `fields` lista solo los campos que se van a desplegar en el formulario, en orden. Los campos se despliegan en vertical por defecto, pero se desplegarán en horizontal si los agrupas en una tupla (como se muestra en los campos "date" arriba).

Reinicia tu aplicación y ve a la vista de detalle de autor — ahora debería aparecer como se muestra abajo:

![Admin Site - Improved Author Detail](admin_improved_author_detail.png)

> **Nota:** Puedes también usar el atributo `exclude` para declarar una lista de atributos que se excluirán del formulario (todos los demás atributos en el modelo se desplegarán).

#### Seccionando la vista de detalle

Puedes añadir "secciones" para agrupar información relacionada del modelo dentro del formulario de detalle, usando el atributo [fieldsets.](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets)

En el modelo BookInstance tenemos información relacionada a cuál es el libro (ej. `name`, `imprint` e `id`) y a cuándo estará disponible (`status`, `due_back`). Podemos configurarlas en diferentes secciones añadiendo el texto en negrita a nuestra clase `BookInstanceAdmin`.

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book', 'imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back')
        }),
    )
```

Cada sección tiene su propio título (o `None`, si no quieres un título) y una tupla de campos asociada en un diccionario — el formato es complicado de describir pero bastante fácil de entender si observas el fragmento de código que se encuentra justo arriba.

Reinicia y navega a una vista de instancia de libro (book instance); el formulario debería aparecer como se muestra abajo:

![Admin Site - Improved BookInstance Detail with sections](admin_improved_bookinstance_detail_sections.png)

### Edición en cadena de registros asociados

A veces puede tener sentido el añadir registros asociados al mismo tiempo. Por ejemplo, puede tener sentido el tener información tanto de un libro como de las copias específicas que has adquirido del mismo, en la misma página de detalle.

Puedes hacerlo declarando [inlines](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines), de tipo [TabularInline](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.TabularInline) (diseño horizontal) o [StackedInline](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.StackedInline) (diseño vertical, tal como el diseño de modelo por defecto). Puedes añadir la información de `BookInstance` dentro de nuestro detalle de `Book` añadiendo las líneas de abajo en negrita cerca de tu `BookAdmin`:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
    inlines = [BooksInstanceInline]
```

Prueba recargando tu aplicación y observando la vista para un libro — ahora deberías ver al final las instancias relacionadas a este libro (inmediatamente debajo de los campos de género del libro):

![Admin Site - Book with Inlines](admin_improved_book_detail_inlines.png)

En este caso, todo lo que hemos hecho es declarar nuestra clase encadenada tabular, que simplemente añade todos los campos del modelo _encadenado_. Puedes especificar toda clase de información adicional para el diseño incluyendo los campos a mostrar, su órden, si son solo de lectura o no, etc. (ve [TabularInline](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.TabularInline) para más información).

> **Nota:** ¡hay algunas lamentables limitaciones a esta funcionalidad! En la captura de pantalla de arriba tenemos tres instancias del libro existentes, seguidas de tres lugares para nuevas instancias del libro (¡que se ven muy similares!). Sería mejor NO tener instancias extras por defecto del libro y simplemente añadirlas mediante el enlace **Add another Book instance**, o poder simplemente listar las `BookInstances` como enlaces no legibles desde aquí. La primera opción puede hacerse estableciendo el atributo `extra` a 0 en el modelo `BookInstanceInline`, inténtalo tú mismo.

## Rétate a tí mismo

Hemos aprendido mucho en esta sección, así que es hora de que intentes algunas cosas.

1. Para la vista de lista de `BookInstance`, añade código para desplegar el libro, estado, fecha de devolución e id (en lugar del texto por defecto de `__str__()`).
2. Añade una lista encadenada de ítems `Book` (libros) a la vista detallada de `Author` usando el mismo método que usamos para `Book`/`BookInstance`.

## Resumen

¡Eso es todo! Ahora has aprendido cómo configurar el sito de administración tanto en su forma más simple como la mejorada, cómo crear un super usuario, y cómo navegar en el sitio de administración y ver, borrar y actualizar registros. Durante el proceso has creado un grupo de libros, instancias de libros, géneros y autores que seremos capaces de listar y desplegar una vez que creemos nuestras propias vistas y plantillas.

## Siguientes lecturas

- [Escribiendo tu primera aplicación Django, parte 2: Introducción a Django Admin](https://docs.djangoproject.com/en/1.10/intro/tutorial02/#introducing-the-django-admin) (Django docs)
- [El sitio de administración de Django](https://docs.djangoproject.com/en/1.10/ref/contrib/admin/) (Django Docs)

{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}
