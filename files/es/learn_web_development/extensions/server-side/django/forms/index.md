---
title: "Tutorial de Django Parte 9: Trabajar con formularios"
short-title: "9: Formularios"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: f3f56081b4d400cdfa28d80a881b6be325774e5e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

En este tutorial te mostraremos cómo trabajar con formularios HTML en Django y, en particular, la forma más fácil de escribir formularios para crear, actualizar y borrar instancias de modelos. Como parte de esta demostración, extenderemos el sitio web [LocalLibrary](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) para que los bibliotecarios puedan renovar libros, y crear, actualizar y eliminar autores utilizando nuestros propios formularios (en lugar de usar la aplicación de administración).

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Completar todos los temas de los tutoriales anteriores, incluyendo
        <a href="/es/docs/Learn_web_development/Extensions/Server-side/Django/Authentication">Tutorial de Django Parte 8: Autenticación y permisos de Usuario</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Comprender cómo escribir formularios para obtener información de los usuarios y actualizar la base de datos.
        Comprender cómo las vistas de edición genéricas basadas en clases pueden simplificar enormemente la creación de formularios para trabajar con un solo modelo.
      </td>
    </tr>
  </tbody>
</table>

## Visión general

Un [formulario HTML](/es/docs/Learn_web_development/Extensions/Forms) es un grupo de uno o más campos/widgets en una página web, que se pueden usar para recolectar información de los usuarios y enviarla a un servidor. Los formularios son un mecanismo flexible para recolectar datos de entrada, porque existen widgets adecuados para introducir muchos tipos diferentes de datos, incluyendo cajas de texto, casillas de verificación, botones de opción, selectores de fecha, etc. Los formularios también son una forma relativamente segura de compartir datos con el servidor, ya que permiten enviar datos en solicitudes `POST` con protección contra la falsificación de solicitudes entre sitios.

Si bien todavía no hemos creado ningún formulario en este tutorial, ya nos hemos encontrado con ellos en el sitio de administración de Django; por ejemplo, la captura de pantalla de abajo muestra un formulario para editar uno de nuestros modelos [Book](/es/docs/Learn_web_development/Extensions/Server-side/Django/Models), compuesto por varias listas de selección y editores de texto.

![Sitio de administración - Agregar libro](admin_book_add.png)

¡Trabajar con formularios puede ser complicado! Los desarrolladores deben escribir el HTML del formulario, validar y depurar adecuadamente los datos ingresados en el servidor (y posiblemente también en el navegador), volver a mostrar el formulario con mensajes de error para informar a los usuarios de cualquier campo no válido, gestionar los datos una vez que se hayan enviado correctamente y, finalmente, responder al usuario de alguna manera para indicar el éxito. _Django Forms_ elimina gran parte del trabajo de todos estos pasos, al proporcionar un framework que te permite definir formularios y sus campos de forma programática, y luego usar esos objetos tanto para generar el código HTML del formulario como para gestionar gran parte de la validación y la interacción del usuario.

En este tutorial te mostraremos algunas de las formas en las que puedes crear y trabajar con formularios y, en particular, cómo las vistas de edición genéricas pueden reducir significativamente la cantidad de trabajo que necesitas hacer para crear formularios que manipulen tus modelos. En el camino, extenderemos nuestra aplicación _LocalLibrary_ agregando un formulario que permita a los bibliotecarios renovar libros de la biblioteca, y crearemos páginas para crear, editar y eliminar libros y autores (reproduciendo una versión básica del formulario mostrado arriba para editar libros).

## Formularios HTML

Primero, un breve resumen de los [formularios HTML](/es/docs/Learn_web_development/Extensions/Forms). Considera un formulario HTML simple, con un único campo de texto para ingresar el nombre de algún "equipo", y su etiqueta asociada:

![Ejemplo simple de un campo de nombre en un formulario HTML](form_example_name_field.png)

El formulario se define en HTML como una colección de elementos dentro de las etiquetas `<form>…</form>`, que contiene al menos un elemento `input` de `type="submit"`.

```html
<form action="/team_name_url/" method="post">
  <label for="team_name">Ingresa el nombre: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Nombre predeterminado para el equipo." />
  <input type="submit" value="Aceptar" />
</form>
```

Si bien aquí solo tenemos un campo de texto para ingresar el nombre del equipo, un formulario _puede_ tener cualquier número de otros elementos de entrada y sus etiquetas asociadas. El atributo `type` del campo define qué tipo de widget se mostrará. El `name` y el `id` del campo se usan para identificarlo en JavaScript/CSS/HTML, mientras que `value` define el valor inicial del campo cuando se muestra por primera vez. La etiqueta correspondiente del equipo se especifica usando la etiqueta `label` (mira "Ingresa el nombre" arriba), con un campo `for` que contiene el valor `id` del `input` asociado.

El `input` de envío se mostrará como un botón de forma predeterminada.
Este puede presionarse para cargar los datos de todos los demás elementos de entrada del formulario al servidor (en este caso, solo el campo `team_name`).
Los atributos del formulario definen el `method` de HTTP usado para enviar los datos y el destino de los datos en el servidor (`action`):

- `action`: El recurso/URL al que se enviarán los datos para su procesamiento cuando se envíe el formulario. Si esto no se establece (o se deja como una cadena vacía), entonces el formulario se enviará de vuelta a la URL de la página actual.
- `method`: El método HTTP usado para enviar los datos: _post_ o _get_.
  - El método `POST` siempre debe usarse si los datos van a producir un cambio en la base de datos del servidor, porque puede hacerse más resistente a los ataques de falsificación de solicitudes entre sitios.
  - El método `GET` solo debe usarse para formularios que no cambian los datos del usuario (por ejemplo, un formulario de búsqueda). Se recomienda para cuando quieras poder marcar como favorita o compartir la URL.

El rol del servidor es, en primer lugar, renderizar el estado inicial del formulario, ya sea con campos en blanco o rellenados previamente con valores iniciales. Después de que el usuario presiona el botón de envío, el servidor recibirá los datos del formulario con los valores del navegador web y deberá validar la información. Si el formulario contiene datos no válidos, el servidor debería mostrar el formulario de nuevo, esta vez con los datos ingresados por el usuario en los campos "válidos" y mensajes que describan el problema en los campos no válidos. Una vez que el servidor recibe una solicitud con todos los datos del formulario válidos, puede realizar la acción apropiada (como guardar los datos, devolver el resultado de una búsqueda, subir un archivo, etc.) y luego notificar al usuario.

Como puedes imaginar, crear el HTML, validar los datos devueltos, volver a mostrar los datos ingresados con los reportes de error si fuera necesario, y realizar la operación deseada sobre los datos válidos puede requerir bastante esfuerzo para "hacerlo bien". Django hace esto mucho más fácil al quitar parte del trabajo pesado y el código repetitivo.

## Proceso de manejo de formularios de Django

El manejo de formularios de Django utiliza las mismas técnicas que aprendimos en tutoriales anteriores (para mostrar información sobre nuestros modelos): la vista recibe una solicitud, realiza las acciones necesarias, incluyendo la lectura de datos de los modelos, y luego genera y devuelve una página HTML (a partir de una plantilla, a la que le pasamos un _contexto_ que contiene los datos a mostrar). Lo que complica un poco más las cosas es que el servidor también necesita poder procesar los datos proporcionados por el usuario y volver a mostrar la página si hay algún error.

A continuación se muestra un diagrama de flujo de cómo Django maneja las solicitudes de formulario, empezando con una solicitud de una página que contiene un formulario (mostrada en verde).

![Proceso actualizado de manejo de formularios.](form_handling_-_standard.png)

Basándonos en el diagrama de arriba, las principales tareas que realiza el manejo de formularios de Django son:

1. Mostrar el formulario predeterminado la primera vez que el usuario lo solicita.
   - El formulario puede contener campos en blanco si estás creando un registro nuevo, o puede estar rellenado previamente con valores iniciales (por ejemplo, si estás modificando un registro, o si tienes valores iniciales predeterminados útiles).
   - En este punto, se dice que el formulario está _sin vincular_ (unbound), porque no está asociado con ningún dato ingresado por el usuario (aunque pueda tener valores iniciales).

2. Recibir datos de una solicitud de envío y vincularlos al formulario.
   - Vincular los datos al formulario significa que los datos ingresados por el usuario y cualquier error están disponibles cuando necesitamos volver a mostrar el formulario.

3. Limpiar y validar los datos.
   - La limpieza de los datos realiza una sanitización de los campos de entrada, como quitar caracteres no válidos que podrían usarse para enviar contenido malicioso al servidor, y los convierte en tipos de Python consistentes.
   - La validación comprueba que los valores sean apropiados para el campo (por ejemplo, que estén en el rango de fechas correcto, que no sean demasiado cortos ni demasiado largos, etc.)

4. Si algún dato no es válido, volver a mostrar el formulario, esta vez con los valores rellenados por el usuario y los mensajes de error para los campos con problemas.
5. Si todos los datos son válidos, realizar las acciones requeridas (como guardar los datos, enviar un correo electrónico, devolver el resultado de una búsqueda, subir un archivo, etc.).
6. Una vez completadas todas las acciones, redirigir al usuario a otra página.

Django proporciona una serie de herramientas y enfoques para ayudarte con las tareas detalladas arriba. La más fundamental es la clase `Form`, que simplifica tanto la generación del HTML del formulario como la limpieza/validación de los datos. En la siguiente sección describimos cómo funcionan los formularios usando el ejemplo práctico de una página que permite a los bibliotecarios renovar libros.

> [!NOTE]
> Comprender cómo se usa `Form` te ayudará cuando analicemos las clases del framework de formularios de más "alto nivel" de Django.

## Formulario de renovación de libros usando un Form y una vista de función

A continuación, vamos a añadir una página que permita a los bibliotecarios renovar los libros prestados. Para hacer esto, crearemos un formulario que permita a los usuarios introducir un valor de fecha. Rellenaremos el campo con un valor inicial de 3 semanas desde la fecha actual (el período de préstamo normal), y añadiremos alguna validación para asegurar que el bibliotecario no pueda introducir una fecha pasada o una fecha demasiado lejana en el futuro. Cuando se haya introducido una fecha válida, la escribiremos en el campo `BookInstance.due_back` del registro actual.

El ejemplo utilizará una vista basada en función y una clase `Form`. Las siguientes secciones explican cómo funcionan los formularios y los cambios que necesitas hacer en nuestro proyecto _LocalLibrary_ en curso.

### Form

La clase `Form` es el corazón del sistema de manejo de formularios de Django. Especifica los campos del formulario, su diseño, los widgets de visualización, las etiquetas, los valores iniciales, los valores válidos y (una vez validados) los mensajes de error asociados a los campos no válidos. La clase también proporciona métodos para renderizarse en plantillas usando formatos predefinidos (tablas, listas, etc.) o para obtener el valor de cualquier elemento (lo que permite un renderizado manual de grano fino).

#### Declarando un Form

La sintaxis de declaración de un `Form` es muy similar a la de declarar un `Model`, y comparte los mismos tipos de campo (y algunos parámetros similares). Esto tiene sentido, porque en ambos casos necesitamos asegurarnos de que cada campo maneje el tipo correcto de datos, esté restringido a datos válidos y tenga una descripción para su visualización/documentación.

Los datos del formulario se guardan en el archivo `forms.py` de una aplicación, dentro del directorio de la aplicación. Crea y abre el archivo **django-locallibrary-tutorial/catalog/forms.py**. Para crear un `Form`, importamos la librería `forms`, derivamos de la clase `Form` y declaramos los campos del formulario. A continuación se muestra una clase de formulario muy básica para nuestro formulario de renovación de libros de la biblioteca — agrega esto a tu nuevo archivo:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Introduce una fecha entre hoy y dentro de 4 semanas (3 por defecto).")
```

#### Campos del Form

En este caso, tenemos un único [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) para introducir la fecha de renovación, que se mostrará en HTML con un valor en blanco, la etiqueta predeterminada "_Fecha de renovación:_" y algo de texto de ayuda: "_Introduce una fecha entre hoy y dentro de 4 semanas (3 por defecto)._" Como no se especifica ninguno de los otros argumentos opcionales, el campo aceptará fechas usando los [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats): AAAA-MM-DD (2024-11-06), MM/DD/AAAA (02/26/2024), MM/DD/AA (10/25/24), y se renderizará usando el [widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget) predeterminado: [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput).

Hay muchos otros tipos de campos de formulario, que en su mayoría reconocerás por su similitud con las clases de campo de modelo equivalentes:

- [`BooleanField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#booleanfield)
- [`CharField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#charfield)
- [`ChoiceField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#choicefield)
- [`TypedChoiceField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#typedchoicefield)
- [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield)
- [`DateTimeField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datetimefield)
- [`DecimalField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#decimalfield)
- [`DurationField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#durationfield)
- [`EmailField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#emailfield)
- [`FileField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#filefield)
- [`FilePathField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#filepathfield)
- [`FloatField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#floatfield)
- [`ImageField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#imagefield)
- [`IntegerField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#integerfield)
- [`GenericIPAddressField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#genericipaddressfield)
- [`MultipleChoiceField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#multiplechoicefield)
- [`TypedMultipleChoiceField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#typedmultiplechoicefield)
- [`NullBooleanField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#nullbooleanfield)
- [`RegexField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#regexfield)
- [`SlugField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#slugfield)
- [`TimeField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#timefield)
- [`URLField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#urlfield)
- [`UUIDField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#uuidfield)
- [`ComboField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#combofield)
- [`MultiValueField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#multivaluefield)
- [`SplitDateTimeField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#splitdatetimefield)
- [`ModelMultipleChoiceField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#modelmultiplechoicefield)
- [`ModelChoiceField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#modelchoicefield)

Los argumentos comunes a la mayoría de los campos se enumeran a continuación (estos tienen valores predeterminados razonables):

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Si es `True`, el campo no puede dejarse en blanco ni recibir un valor `None`. Los campos son obligatorios por defecto, así que establecerías `required=False` para permitir valores en blanco en el formulario.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): La etiqueta que se usará al renderizar el campo en HTML. Si no se especifica una [label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label), Django creará una a partir del nombre del campo poniendo en mayúscula la primera letra y reemplazando los guiones bajos por espacios (por ejemplo, _Renewal date_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Por defecto, se muestran dos puntos después de la etiqueta (por ejemplo, Renewal date&ZeroWidthSpace;**:**). Este argumento te permite especificar un sufijo diferente que contenga otros caracteres.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): El valor inicial del campo cuando se muestra el formulario.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): El widget de visualización a usar.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (como se ve en el ejemplo anterior): Texto adicional que puede mostrarse en los formularios para explicar cómo usar el campo.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Una lista de mensajes de error para el campo. Puedes sobrescribirlos con tus propios mensajes si es necesario.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Una lista de funciones que se invocarán sobre el campo cuando se valide.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Habilita la localización de los datos de entrada del formulario (consulta el enlace para más información).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): El campo se muestra, pero su valor no se puede editar si esto es `True`. El valor predeterminado es `False`.

#### Validación

Django proporciona numerosos lugares donde puedes validar tus datos. La forma más fácil de validar un solo campo es sobrescribir el método `clean_<nombre_del_campo>()` para el campo que quieras comprobar. Así, por ejemplo, podemos validar que los valores introducidos en `renewal_date` estén entre hoy y dentro de 4 semanas implementando `clean_renewal_date()` como se muestra abajo.

Actualiza tu archivo forms.py para que quede así:

```python
import datetime

from django import forms

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Introduce una fecha entre hoy y dentro de 4 semanas (3 por defecto).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        # Comprueba que la fecha no esté en el pasado.
        if data < datetime.date.today():
            raise ValidationError(_('Fecha no válida: la fecha de renovación está en el pasado'))

        # Comprueba que la fecha esté dentro del rango permitido (+4 semanas desde hoy).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Fecha no válida: la fecha de renovación es más de 4 semanas en el futuro'))

        # Recuerda devolver siempre los datos limpios.
        return data
```

Hay dos cosas importantes que notar. La primera es que obtenemos nuestros datos usando `self.cleaned_data['renewal_date']` y que devolvemos estos datos, los hayamos cambiado o no, al final de la función.
Este paso hace que los datos queden "limpios" y saneados de entradas potencialmente inseguras usando los validadores predeterminados, y convertidos al tipo estándar correcto para los datos (en este caso, un objeto `datetime.datetime` de Python).

El segundo punto es que si un valor está fuera de nuestro rango elevamos un `ValidationError`, especificando el texto de error que queremos mostrar en el formulario si se introduce un valor no válido.
El ejemplo anterior también envuelve este texto en una de las [funciones de traducción](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/) de Django, `gettext_lazy()` (importada como `_()`), lo cual es una buena práctica si quieres traducir tu sitio más adelante.

> [!NOTE]
> Existen muchos otros métodos y ejemplos para validar formularios en [Form and field validation](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django docs). Por ejemplo, en los casos en los que tienes varios campos que dependen unos de otros, puedes sobrescribir la función [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) y elevar de nuevo un `ValidationError`.

¡Eso es todo lo que necesitamos para el formulario de este ejemplo!

### Configuración de la URL

Antes de crear nuestra vista, agreguemos una configuración de URL para la página de _renovar libros_. Copia la siguiente configuración en la parte inferior de **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

La configuración de URL redirigirá las URL con el formato **/catalog/book/_\<bookinstance_id>_/renew/** a la función llamada `renew_book_librarian()` en **views.py**, y enviará el id de `BookInstance` como el parámetro llamado `pk`. El patrón solo coincide si `pk` tiene el formato correcto de un `uuid`.

> [!NOTE]
> Podemos nombrar nuestros datos de URL capturados como queramos, porque tenemos control total sobre la función de vista (no estamos usando una clase de vista de detalle genérica que espere parámetros con un nombre determinado). Sin embargo, `pk`, abreviatura de "primary key" (clave primaria), es una convención razonable de usar.

### Vista

Como se discutió en el [proceso de manejo de formularios de Django](#proceso_de_manejo_de_formularios_de_django) arriba, la vista debe renderizar el formulario predeterminado cuando se llama por primera vez, y luego volver a renderizarlo con mensajes de error si los datos no son válidos, o procesar los datos y redirigir a una nueva página si los datos son válidos. Para realizar estas diferentes acciones, la vista debe poder saber si se está llamando por primera vez para renderizar el formulario predeterminado, o una vez posterior para validar los datos.

Para los formularios que usan una solicitud `POST` para enviar información al servidor, el patrón más común es que la vista compruebe si el tipo de solicitud es `POST` (`if request.method == 'POST':`) para identificar las solicitudes de validación del formulario, y `GET` (usando una condición `else`) para identificar la solicitud inicial de creación del formulario. Si quieres enviar tus datos usando una solicitud `GET`, entonces un enfoque típico para identificar si esta es la primera invocación de la vista o una posterior es leer los datos del formulario (por ejemplo, leer un valor oculto en el formulario).

El proceso de renovación de un libro escribirá en nuestra base de datos, así que, por convención, usamos el enfoque de la solicitud `POST`.
El siguiente fragmento de código muestra el patrón (muy estándar) para este tipo de vista de función.

```python
import datetime

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from catalog.forms import RenewBookForm

def renew_book_librarian(request, pk):
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # Si esta es una solicitud POST, procesa los datos del Form
    if request.method == 'POST':

        # Crea una instancia de formulario y complétala con los datos de la solicitud (vinculación):
        form = RenewBookForm(request.POST)

        # Comprueba si el formulario es válido:
        if form.is_valid():
            # procesa los datos en form.cleaned_data según sea necesario (aquí solo los escribimos en el campo due_back del modelo)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # redirige a una nueva URL:
            return HttpResponseRedirect(reverse('all-borrowed'))

    # Si esta es una solicitud GET (o cualquier otro método), crea el formulario predeterminado.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

Primero, importamos nuestro formulario (`RenewBookForm`) y otros objetos/métodos útiles usados en el cuerpo de la función de vista:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Devuelve un objeto especificado de un modelo en función de su valor de clave primaria, y eleva una excepción `Http404` (no encontrado) si el registro no existe.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Crea una redirección a una URL especificada (código de estado HTTP 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Genera una URL a partir de un nombre de configuración de URL y un conjunto de argumentos. Es el equivalente en Python a la etiqueta `url` que hemos estado usando en nuestras plantillas.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Una librería de Python para manipular fechas y horas.

En la vista, primero usamos el argumento `pk` en `get_object_or_404()` para obtener el `BookInstance` actual (si este no existe, la vista terminará inmediatamente y la página mostrará un error de "no encontrado").
Si esta _no_ es una solicitud `POST` (gestionada por la cláusula `else`), entonces creamos el formulario predeterminado pasando un valor `initial` para el campo `renewal_date`, 3 semanas desde la fecha actual.

```python
book_instance = get_object_or_404(BookInstance, pk=pk)

# Si esta es una solicitud GET (o cualquier otro método), crea el formulario predeterminado
else:
    proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
    form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

context = {
    'form': form,
    'book_instance': book_instance,
}

return render(request, 'catalog/book_renew_librarian.html', context)
```

Después de crear el formulario, llamamos a `render()` para crear la página HTML, especificando la plantilla y un contexto que contiene nuestro formulario. En este caso, el contexto también contiene nuestro `BookInstance`, que usaremos en la plantilla para dar información sobre el libro que estamos renovando.

Sin embargo, si esta es una solicitud `POST`, entonces creamos nuestro objeto `form` y lo poblamos con los datos de la solicitud. Este proceso se llama "vinculación" (binding) y nos permite validar el formulario.

Luego comprobamos si el formulario es válido, lo cual ejecuta todo el código de validación en todos los campos, incluyendo tanto el código genérico para comprobar que nuestro campo de fecha sea realmente una fecha válida, como la función específica de nuestro formulario `clean_renewal_date()`, que comprueba que la fecha esté en el rango correcto.

```python
book_instance = get_object_or_404(BookInstance, pk=pk)

# Si esta es una solicitud POST, procesa los datos del Form
if request.method == 'POST':

    # Crea una instancia de formulario y complétala con los datos de la solicitud (vinculación):
    form = RenewBookForm(request.POST)

    # Comprueba si el formulario es válido:
    if form.is_valid():
        # procesa los datos en form.cleaned_data según sea necesario (aquí solo los escribimos en el campo due_back del modelo)
        book_instance.due_back = form.cleaned_data['renewal_date']
        book_instance.save()

        # redirige a una nueva URL:
        return HttpResponseRedirect(reverse('all-borrowed'))

context = {
    'form': form,
    'book_instance': book_instance,
}

return render(request, 'catalog/book_renew_librarian.html', context)
```

Si el formulario no es válido, volvemos a llamar a `render()`, pero esta vez el valor del formulario pasado en el contexto incluirá los mensajes de error.

Si el formulario es válido, entonces podemos empezar a usar los datos, accediendo a ellos a través del atributo `form.cleaned_data` (por ejemplo, `data = form.cleaned_data['renewal_date']`). Aquí, simplemente guardamos los datos en el valor `due_back` del objeto `BookInstance` asociado.

> [!WARNING]
> Aunque también puedes acceder a los datos del formulario directamente a través de la solicitud (por ejemplo, `request.POST['renewal_date']` o `request.GET['renewal_date']` si usas una solicitud GET), esto NO es recomendable. Los datos limpios (cleaned data) están saneados, validados y convertidos a tipos compatibles con Python.

El paso final en la parte de manejo de formularios de la vista es redirigir a otra página, normalmente una página de "éxito". En este caso, usamos `HttpResponseRedirect` y `reverse()` para redirigir a la vista llamada `'all-borrowed'` (esto se creó como el "desafío" en [Tutorial de Django Parte 8: Autenticación y permisos de Usuario](/es/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#ponte_a_prueba)). Si no creaste esa página, considera redirigir a la página de inicio en la URL `/`.

Eso es todo lo necesario para el manejo del formulario en sí, pero todavía tenemos que restringir el acceso a la vista solo a los bibliotecarios que hayan iniciado sesión y tengan permiso para renovar libros. Usamos `@login_required` para exigir que el usuario haya iniciado sesión, y el decorador de función `@permission_required` con nuestro permiso existente `can_mark_returned` para permitir el acceso (los decoradores se procesan en orden). Ten en cuenta que probablemente deberíamos haber creado un nuevo permiso en `BookInstance` (`can_renew`), pero reutilizaremos el existente para mantener el ejemplo simple.

La vista final queda entonces como se muestra abajo. Copia esto en la parte inferior de **django-locallibrary-tutorial/catalog/views.py**.

```python
import datetime

from django.contrib.auth.decorators import login_required, permission_required
from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from catalog.forms import RenewBookForm

@login_required
@permission_required('catalog.can_mark_returned', raise_exception=True)
def renew_book_librarian(request, pk):
    """Función de vista para renovar un BookInstance específico por parte de un bibliotecario."""
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # Si esta es una solicitud POST, procesa los datos del Form
    if request.method == 'POST':

        # Crea una instancia de formulario y complétala con los datos de la solicitud (vinculación):
        form = RenewBookForm(request.POST)

        # Comprueba si el formulario es válido:
        if form.is_valid():
            # procesa los datos en form.cleaned_data según sea necesario (aquí solo los escribimos en el campo due_back del modelo)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # redirige a una nueva URL:
            return HttpResponseRedirect(reverse('all-borrowed'))

    # Si esta es una solicitud GET (o cualquier otro método), crea el formulario predeterminado.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

### La plantilla

Crea la plantilla referenciada en la vista (**/catalog/templates/catalog/book_renew_librarian.html**) y copia en ella el código de abajo:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Renovar: \{{ book_instance.book.title }}</h1>
  <p>Prestatario: \{{ book_instance.borrower }}</p>
  <p {% if book_instance.is_overdue %} class="text-danger"{% endif %} >Fecha de vencimiento: \{{ book_instance.due_back }}</p>

  <form action="" method="post">
    {% csrf_token %}
    <table>
    \{{ form.as_table }}
    </table>
    <input type="submit" value="Enviar">
  </form>
{% endblock %}
```

La mayor parte de esto te resultará completamente familiar de tutoriales anteriores.

Extendemos la plantilla base y luego redefinimos el bloque de contenido. Podemos referenciar `\{{ book_instance }}` (y sus variables) porque se pasó al objeto de contexto en la función `render()`, y los usamos para mostrar el título del libro, el prestatario y la fecha de vencimiento original.

El código del formulario es relativamente simple. Primero, declaramos las etiquetas `form`, especificando dónde debe enviarse el formulario (`action`) y el `method` para enviar los datos (en este caso, un `POST`) — si recuerdas el resumen de [Formularios HTML](#formularios_html) al principio de la página, un `action` vacío como el mostrado significa que los datos del formulario se enviarán de vuelta a la URL actual de la página (que es lo que queremos). Dentro de las etiquetas, definimos el `input` de tipo `submit`, que un usuario puede presionar para enviar los datos. El `{% csrf_token %}` agregado justo dentro de las etiquetas del formulario es parte de la protección de Django contra falsificación entre sitios.

> [!NOTE]
> Agrega `{% csrf_token %}` a cada plantilla de Django que crees que use `POST` para enviar datos. Esto reducirá la posibilidad de que usuarios malintencionados secuestren los formularios.

Todo lo que queda es la variable de plantilla `\{{ form }}`, que pasamos a la plantilla en el diccionario de contexto.
Como quizás esperabas, cuando se usa tal como se muestra, esta proporciona el renderizado predeterminado de todos los campos del formulario, incluyendo sus etiquetas, widgets y texto de ayuda — el renderizado es el que se muestra abajo:

```html
<tr>
  <th><label for="id_renewal_date">Fecha de renovación:</label></th>
  <td>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2023-11-08"
      required />
    <br />
    <span class="helptext">
      Introduce una fecha entre hoy y dentro de 4 semanas (3 por defecto).
    </span>
  </td>
</tr>
```

> [!NOTE]
> Quizás no sea obvio porque solo tenemos un campo, pero, por defecto, cada campo se define en su propia fila de tabla. Este mismo renderizado se obtiene si haces referencia a la variable de plantilla `\{{ form.as_table }}`.

Si introdujeras una fecha no válida, además obtendrías una lista de los errores renderizados en la página (mira `error-list` abajo).

```html
<tr>
  <th><label for="id_renewal_date">Fecha de renovación:</label></th>
  <td>
    <ul class="error-list">
      <li>Fecha no válida: la fecha de renovación está en el pasado</li>
    </ul>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2023-11-08"
      required />
    <br />
    <span class="helptext">
      Introduce una fecha entre hoy y dentro de 4 semanas (3 por defecto).
    </span>
  </td>
</tr>
```

#### Otras formas de usar la variable de plantilla del formulario

Usando `\{{ form.as_table }}` como se muestra arriba, cada campo se renderiza como una fila de tabla. También puedes renderizar cada campo como un elemento de lista (usando `\{{ form.as_ul }}`) o como un párrafo (usando `\{{ form.as_p }}`).

También es posible tener control completo sobre el renderizado de cada parte del formulario, indexando sus propiedades mediante notación de puntos. Así, por ejemplo, podemos acceder a varios elementos por separado de nuestro campo `renewal_date`:

- `\{{ form.renewal_date }}:` El campo completo.
- `\{{ form.renewal_date.errors }}`: La lista de errores.
- `\{{ form.renewal_date.id_for_label }}`: El id de la etiqueta.
- `\{{ form.renewal_date.help_text }}`: El texto de ayuda del campo.

Para más ejemplos de cómo renderizar formularios manualmente en plantillas y recorrer dinámicamente los campos de una plantilla, consulta [Working with forms > Rendering fields manually](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django docs).

### Probando la página

Si aceptaste el "desafío" en [Tutorial de Django Parte 8: Autenticación y permisos de Usuario](/es/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#ponte_a_prueba), tendrás una vista que muestra todos los libros prestados en la biblioteca, visible solo para el personal de la biblioteca.
La vista podría verse algo así:

```django
{% extends "base_generic.html" %}

{% block content %}
    <h1>Todos los libros prestados</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">\{{ bookinst.book.title }}</a> (\{{ bookinst.due_back }}) {% if user.is_staff %}- \{{ bookinst.borrower }}{% endif %}
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>No hay libros prestados.</p>
    {% endif %}
{% endblock %}
```

Podemos agregar un enlace a la página de renovación de libros al lado de cada elemento, añadiendo el siguiente código de plantilla al texto del elemento de la lista de arriba.
Ten en cuenta que este código de plantilla solo puede ejecutarse dentro del bucle `{% for %}`, porque ahí es donde se define el valor `bookinst`.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renovar</a>{% endif %}
```

> [!NOTE]
> Recuerda que tu inicio de sesión de prueba deberá tener el permiso `catalog.can_mark_returned` para ver el nuevo enlace "Renovar" agregado arriba y para acceder a la página enlazada (quizás uses tu cuenta de superusuario).

Alternativamente, puedes construir manualmente una URL de prueba como esta — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (puedes obtener un `bookinstance_id` válido navegando a una página de detalle de libro en tu biblioteca y copiando el campo `id`).

### ¿Cómo se ve?

Si tienes éxito, el formulario predeterminado se verá así:

![Formulario predeterminado que muestra los detalles del libro, la fecha de vencimiento, la fecha de renovación y un botón de envío que aparece en caso de que el enlace funcione correctamente](forms_example_renew_default.png)

El formulario con un valor no válido introducido se verá así:

![El mismo formulario de arriba con un mensaje de error: fecha no válida - la renovación está en el pasado](forms_example_renew_invalid.png)

La lista de todos los libros con enlaces de renovación se verá así:

![Muestra la lista de todos los libros renovados junto con sus detalles. Los que están vencidos aparecen en rojo.](forms_example_renew_allbooks.png)

## ModelForms

Crear una clase `Form` usando el enfoque descrito arriba es muy flexible, y te permite crear el tipo de página de formulario que quieras y asociarla con cualquier modelo o modelos.

Sin embargo, si solo necesitas un formulario para mapear los campos de un _único_ modelo, entonces tu modelo ya definirá la mayor parte de la información que necesitas en tu formulario: campos, etiquetas, texto de ayuda, etc. En lugar de recrear las definiciones del modelo en tu formulario, es más fácil usar la clase auxiliar [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) para crear el formulario a partir de tu modelo. Este `ModelForm` puede usarse entonces en tus vistas exactamente de la misma manera que un `Form` ordinario.

A continuación se muestra un `ModelForm` básico que contiene el mismo campo que nuestro `RenewBookForm` original. Todo lo que necesitas hacer para crear el formulario es agregar `class Meta` con el `model` asociado (`BookInstance`) y una lista de los `fields` del modelo a incluir en el formulario.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> También puedes incluir todos los campos en el formulario usando `fields = '__all__'`, o puedes usar `exclude` (en lugar de `fields`) para especificar los campos del modelo que _no_ se incluirán.
>
> Ninguno de los dos enfoques es recomendable, porque los nuevos campos que se agreguen al modelo se incluirán automáticamente en el formulario (sin que el desarrollador necesariamente considere las posibles implicaciones de seguridad).

> [!NOTE]
> Esto podría no parecer mucho más simple que usar directamente un `Form` (y no lo es en este caso, porque solo tenemos un campo). Sin embargo, si tienes muchos campos, puede reducir considerablemente la cantidad de código necesario.

El resto de la información proviene de las definiciones de campo del modelo (por ejemplo, etiquetas, widgets, texto de ayuda, mensajes de error). Si estos no son del todo correctos, podemos sobrescribirlos en nuestra `class Meta`, especificando un diccionario que contenga el campo a cambiar y su nuevo valor. Por ejemplo, en este formulario podríamos querer una etiqueta de "_Fecha de renovación_" para nuestro campo (en lugar del valor predeterminado basado en el nombre del campo: _Due Back_), y también queremos que nuestro texto de ayuda sea específico para este caso de uso.
El `Meta` de abajo te muestra cómo sobrescribir estos campos, y de forma similar puedes configurar `widgets` y `error_messages` si los valores predeterminados no son suficientes.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('Nueva fecha de renovación')}
    help_texts = {'due_back': _('Introduce una fecha entre hoy y dentro de 4 semanas (3 por defecto).')}
```

Para agregar validación, puedes usar el mismo enfoque que para un `Form` normal — defines una función llamada `clean_<nombre_del_campo>()` y elevas excepciones `ValidationError` para los valores no válidos.
La única diferencia respecto a nuestro formulario original es que el campo del modelo se llama `due_back` y no `renewal_date`.
Este cambio es necesario porque el campo correspondiente en `BookInstance` se llama `due_back`.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    def clean_due_back(self):
       data = self.cleaned_data['due_back']

       # Comprueba que la fecha no esté en el pasado.
       if data < datetime.date.today():
           raise ValidationError(_('Fecha no válida: la fecha de renovación está en el pasado'))

       # Comprueba que la fecha esté dentro del rango permitido (+4 semanas desde hoy).
       if data > datetime.date.today() + datetime.timedelta(weeks=4):
           raise ValidationError(_('Fecha no válida: la fecha de renovación es más de 4 semanas en el futuro'))

       # Recuerda devolver siempre los datos limpios.
       return data

    class Meta:
        model = BookInstance
        fields = ['due_back']
        labels = {'due_back': _('Fecha de renovación')}
        help_texts = {'due_back': _('Introduce una fecha entre hoy y dentro de 4 semanas (3 por defecto).')}
```

La clase `RenewBookModelForm` de arriba ahora es funcionalmente equivalente a nuestro `RenewBookForm` original. Podrías importarla y usarla en cualquier lugar donde uses actualmente `RenewBookForm`, siempre que también actualices el nombre de la variable de formulario correspondiente de `renewal_date` a `due_back`, como en la segunda declaración del formulario: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Vistas de edición genéricas

El algoritmo de manejo de formularios que usamos en el ejemplo de vista de función de arriba representa un patrón extremadamente común en las vistas de edición de formularios. Django abstrae gran parte de este "código repetitivo" por ti, creando [vistas de edición genéricas](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) para crear, editar y eliminar vistas basadas en modelos. Estas no solo gestionan el comportamiento de "vista", sino que también crean automáticamente la clase de formulario (un `ModelForm`) para ti a partir del modelo.

> [!NOTE]
> Además de las vistas de edición descritas aquí, también existe una clase [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview), que se ubica en algún punto entre nuestra vista de función y las otras vistas genéricas en términos de "flexibilidad" frente a "esfuerzo de codificación". Al usar `FormView`, todavía necesitas crear tu `Form`, pero no tienes que implementar todo el patrón estándar de manejo de formularios. En su lugar, solo tienes que proporcionar una implementación de la función que se llamará una vez que se sepa que el envío es válido.

En esta sección, vamos a usar vistas de edición genéricas para crear páginas que agreguen funcionalidad para crear, editar y eliminar registros de `Author` de nuestra biblioteca — proporcionando de manera efectiva una reimplementación básica de partes del sitio de administración (esto podría ser útil si necesitas ofrecer funcionalidad de administración de una manera más flexible de lo que puede proporcionar el sitio de administración).

### Vistas

Abre el archivo de vistas (**django-locallibrary-tutorial/catalog/views.py**) y agrega el siguiente bloque de código al final:

```python
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Author

class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'

class AuthorUpdate(PermissionRequiredMixin, UpdateView):
    model = Author
    # No recomendado (posible problema de seguridad si se agregan más campos)
    fields = '__all__'
    permission_required = 'catalog.change_author'

class AuthorDelete(PermissionRequiredMixin, DeleteView):
    model = Author
    success_url = reverse_lazy('authors')
    permission_required = 'catalog.delete_author'

    def form_valid(self, form):
        try:
            self.object.delete()
            return HttpResponseRedirect(self.success_url)
        except Exception as e:
            return HttpResponseRedirect(
                reverse("author-delete", kwargs={"pk": self.object.pk})
            )
```

Como puedes ver, para crear, actualizar o eliminar las vistas necesitas derivar de `CreateView`, `UpdateView` y `DeleteView` (respectivamente), y luego definir el modelo asociado.
También restringimos el uso de estas vistas solo a los usuarios que hayan iniciado sesión y tengan los permisos `add_author`, `change_author` y `delete_author`, respectivamente.

Para los casos de "crear" y "actualizar" también debes especificar los campos a mostrar en el formulario (usando la misma sintaxis que para `ModelForm`). En este caso, mostramos cómo listarlos individualmente y la sintaxis para listar "todos" los campos. También puedes especificar valores iniciales para cada uno de los campos usando un diccionario de pares _nombre_campo_/_valor_ (aquí establecemos arbitrariamente la fecha de fallecimiento con fines de demostración — quizás quieras eliminar eso). Por defecto, estas vistas redirigirán, en caso de éxito, a una página que muestra el elemento del modelo recién creado/editado, que en nuestro caso será la vista de detalle del autor que creamos en un tutorial anterior. Puedes especificar una ubicación de redirección alternativa declarando explícitamente el parámetro `success_url`.

La clase `AuthorDelete` no necesita mostrar ninguno de los campos, así que no es necesario especificarlos.
También configuramos un `success_url` (como se muestra arriba), porque no hay una URL predeterminada obvia a la que Django pueda navegar tras eliminar con éxito el `Author`. Arriba usamos la función [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy) para redirigir a nuestra lista de autores después de que se elimine un autor — `reverse_lazy()` es una versión de ejecución diferida de `reverse()`, usada aquí porque estamos proporcionando una URL a un atributo de una vista basada en clases.

Si la eliminación de autores siempre tuviera éxito, eso sería todo.
Desafortunadamente, eliminar un `Author` provocará una excepción si el autor tiene un libro asociado, porque nuestro [modelo `Book`](/es/docs/Learn_web_development/Extensions/Server-side/Django/Models) especifica `on_delete=models.RESTRICT` para el campo `ForeignKey` del autor.
Para manejar este caso, la vista sobrescribe el método [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid), de modo que si la eliminación del `Author` tiene éxito redirige a `success_url`, pero si no, simplemente redirige de vuelta al mismo formulario.
Más abajo actualizaremos la plantilla para dejar claro que no puedes eliminar una instancia de `Author` que se use en algún `Book`.

### Configuraciones de URL

Abre tu archivo de configuración de URL (**django-locallibrary-tutorial/catalog/urls.py**) y agrega la siguiente configuración al final del archivo:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

¡No hay nada particularmente nuevo aquí! Puedes ver que las vistas son clases y, por lo tanto, deben llamarse a través de `.as_view()`, y deberías poder reconocer los patrones de URL en cada caso. Debemos usar `pk` como el nombre de nuestro valor de clave primaria capturado, ya que este es el nombre de parámetro esperado por las clases de vista.

### Plantillas

Las vistas "create" y "update" usan la misma plantilla por defecto, que se nombrará según tu modelo: `nombre_del_modelo_form.html` (puedes cambiar el sufijo a algo distinto de **\_form** usando el campo `template_name_suffix` en tu vista, por ejemplo, `template_name_suffix = '_other_suffix'`)

Crea el archivo de plantilla `django-locallibrary-tutorial/catalog/templates/catalog/author_form.html` y copia el texto de abajo.

```django
{% extends "base_generic.html" %}

{% block content %}
<form action="" method="post">
  {% csrf_token %}
  <table>
    \{{ form.as_table }}
  </table>
  <input type="submit" value="Enviar" />
</form>
{% endblock %}
```

Esto es similar a nuestros formularios anteriores y renderiza los campos usando una tabla. Fíjate también en cómo, de nuevo, declaramos `{% csrf_token %}` para asegurarnos de que nuestros formularios sean resistentes a los ataques CSRF.

La vista "delete" espera encontrar una plantilla con el formato `[nombre_del_modelo]_confirm_delete.html` (de nuevo, puedes cambiar el sufijo usando `template_name_suffix` en tu vista).
Crea el archivo de plantilla `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` y copia el texto de abajo.

```django
{% extends "base_generic.html" %}

{% block content %}

<h1>Eliminar autor: \{{ author }}</h1>

{% if author.book_set.all %}

<p>No puedes eliminar a este autor hasta que se hayan eliminado todos sus libros:</p>
<ul>
  {% for book in author.book_set.all %}
    <li><a href="{% url 'book-detail' book.pk %}">\{{book}}</a> (\{{book.bookinstance_set.all.count}})</li>
  {% endfor %}
</ul>

{% else %}
<p>¿Estás seguro de que deseas eliminar al autor?</p>

<form action="" method="POST">
  {% csrf_token %}
  <input type="submit" action="" value="Sí, eliminar.">
</form>
{% endif %}

{% endblock %}
```

La plantilla debería resultarte familiar.
Primero comprueba si el autor se usa en algún libro, y de ser así muestra la lista de libros que deben eliminarse antes de poder eliminar el registro del autor.
Si no, muestra un formulario que le pide al usuario que confirme que quiere eliminar el registro del autor.

El paso final es enlazar las páginas en la barra lateral.
Primero, agregaremos un enlace para crear el autor en la _plantilla base_, de modo que sea visible en todas las páginas para los usuarios que hayan iniciado sesión y sean considerados "personal" y que tengan permiso para crear autores (`catalog.add_author`).
Abre **/django-locallibrary-tutorial/catalog/templates/base_generic.html** y agrega las líneas que permiten a los usuarios con el permiso crear el autor (en el mismo bloque que el enlace que muestra los libros "Todos los prestados").
Recuerda referenciar la URL usando su nombre `'author-create'` como se muestra abajo.

```django
{% if user.is_staff %}
<hr>
<ul class="sidebar-nav">
<li>Personal</li>
   <li><a href="{% url 'all-borrowed' %}">Todos los prestados</a></li>
{% if perms.catalog.add_author %}
   <li><a href="{% url 'author-create' %}">Crear autor</a></li>
{% endif %}
</ul>
{% endif %}
```

Agregaremos los enlaces para actualizar y eliminar autores a la página de detalle del autor.
Abre **catalog/templates/catalog/author_detail.html** y agrega el siguiente código:

```django
{% block sidebar %}
  \{{ block.super }}

  {% if perms.catalog.change_author or perms.catalog.delete_author %}
  <hr>
  <ul class="sidebar-nav">
    {% if perms.catalog.change_author %}
      <li><a href="{% url 'author-update' author.id %}">Actualizar autor</a></li>
    {% endif %}
    {% if not author.book_set.all and perms.catalog.delete_author %}
      <li><a href="{% url 'author-delete' author.id %}">Eliminar autor</a></li>
    {% endif %}
    </ul>
  {% endif %}

{% endblock %}
```

Este bloque sobrescribe el bloque `sidebar` de la plantilla base y luego incorpora el contenido original usando `\{{ block.super }}`.
Después agrega enlaces para actualizar o eliminar al autor, pero solo cuando el usuario tiene los permisos correctos y el registro del autor no está asociado a ningún libro.

¡Las páginas ya están listas para probarse!

### Probando la página

Primero, inicia sesión en el sitio con una cuenta que tenga permisos para agregar, cambiar y eliminar autores.

Navega a cualquier página y selecciona "Crear autor" en la barra lateral (con URL `http://127.0.0.1:8000/catalog/author/create/`).
La página debería verse como la captura de pantalla de abajo.

![Ejemplo de formulario: crear autor](forms_example_create_author.png)

Introduce valores para los campos y luego presiona **Enviar** para guardar el registro del autor.
Ahora deberías ir a parar a una vista de detalle de tu nuevo autor, con una URL de algo como `http://127.0.0.1:8000/catalog/author/10`.

![Ejemplo de formulario: detalle del autor mostrando los enlaces Actualizar y Eliminar](forms_example_detail_author_update.png)

Puedes probar la edición del registro seleccionando el enlace "Actualizar autor" (con una URL similar a `http://127.0.0.1:8000/catalog/author/10/update/`) — no mostramos una captura de pantalla porque se ve exactamente igual que la página de "crear".

Por último, podemos eliminar la página seleccionando "Eliminar autor" en la barra lateral de la página de detalle.
Django debería mostrar la página de eliminación que se muestra abajo si el registro del autor no se usa en ningún libro.
Presiona "**Sí, eliminar.**" para eliminar el registro y ser llevado a la lista de todos los autores.

![Formulario con la opción de eliminar al autor](forms_example_delete_author.png)

## Desafíate a ti mismo

Crea algunos formularios para crear, editar y eliminar registros de `Book`. Puedes usar exactamente la misma estructura que para `Authors` (para la eliminación, recuerda que no puedes eliminar un `Book` hasta que se hayan eliminado todas sus instancias de `BookInstance` asociadas), y debes usar los permisos correctos.
Si tu plantilla **book_form.html** es simplemente una copia renombrada de la plantilla **author_form.html**, la nueva página de "crear libro" se verá como la captura de pantalla de abajo:

![Captura de pantalla que muestra varios campos del formulario como título, autor, resumen, ISBN, género e idioma](forms_example_create_book.png)

## Resumen

¡Crear y manejar formularios puede ser un proceso complicado! Django lo hace mucho más fácil al proporcionar mecanismos programáticos para declarar, renderizar y validar formularios. Además, Django proporciona vistas genéricas de edición de formularios que pueden hacer _casi todo_ el trabajo para definir páginas que crean, editan y eliminan registros asociados con una sola instancia de modelo.

Hay mucho más que se puede hacer con los formularios (mira nuestra lista de [Ver también](#ver_también) abajo), pero ahora deberías entender cómo agregar formularios básicos y código de manejo de formularios a tus propios sitios web.

## Ver también

- [Working with forms](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django docs)
- [Writing your first Django app, part 4 > Writing a simple form](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django docs)
- [The Forms API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django docs)
- [Form fields](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django docs)
- [Form and field validation](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django docs)
- [Form handling with class-based views](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django docs)
- [Creating forms from models](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django docs)
- [Generic editing views](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django docs)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
