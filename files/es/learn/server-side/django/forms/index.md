---
title: "Tutorial de Django Parte 9: Trabajo con formularios"
slug: Learn/Server-side/Django/Forms
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/authentication", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}

En este tutorial te mostraremos cómo trabajar con Formularios HTML en Django, y en particular, la forma más fácil de escribir formularios para crear, actualizar y borrar instancias de modelo. Como parte de esta demostración extenderemos el sitio web [LocalLibrary](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website) de manera que los bibliotecarios puedan renovar libros, y crear, actualizar y borrar autores utilizando nuestros propios formularios (en vez de utilizar la aplicación de administración).

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Completar todos los temas de tutoriales anteriores, incluyendo
        <a
          href="/es/docs/Learn/Server-side/Django/authentication_and_sessions"
          >Tutorial Django Parte 8: Autenticación y permisos de usuarios</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectivo:</th>
      <td>
        Comprender como escribir formularios para obtener informacion de los
        usuarios y actualizar la base de datos. Comprender cómo las vistas de
        edición basadas en clase genérica pueden simplificar enormemente la
        creación de formularios trabajando con un solo modelo.
      </td>
    </tr>
  </tbody>
</table>

## Visión General

Un [Formulario HTML](/es/docs/Web/Guide/HTML/Forms) es un conjunto de uno o más campos/widgets en una página web, que pueden ser usados para recolectar información de los usuarios para el envío a un servidor. Los formularios son un mecanismo flexible para recolectar datos de entrada porque son widgets adecuados para ingresar diferentes tipos de datos, incluyendo campos de texto, checkboxes, radio buttons, selector de fechas, etc. Los formularios son también una forma relativamente segura de compartir datos con el servidor, ya que permiten enviar información en peticiones `POST` con protección de falsificación de solicitud entre sitios.

Si bien nosotros aún no hemos creado ningún formulario en este tutorial todavia, ya lo hemos encontrado en el sitio de administración de Django; por ejemplo, la captura de pantalla de abajo muestra un formulario para editar uno de nuestros modelos de [Libro](/es/docs/Learn/Server-side/Django/Models), compuesto de un número de listas de selección y editores de texto.

![Admin Site - Book Add](admin_book_add.png)

Trabajar con formularios puede ser complicado! Los desarrolladores deben de escribir código HTML para el formulario, validar y adecuadamente limpiar los datos ingresados en el servidor (y posiblemente también en el browser o navegador), volver a publicar el formulario con mensajes de error para informar a los usuarios de cualquier campo invalido, manejar los datos cuando hayan sido enviados exitosamente y finalmente, responder al usuario de alguna manera, para indicar el éxito de la operación. Django Forms elimina mucho del trabajo de todos estos pasos, al proporcionar un marco de trabajo que le permite definir formularios y sus campos a travéz de programación y luego, utilizar estos objetos para generar el código HTML del formulario y manejar gran parte de la validación y la interacción del usuario.

En este tutorial vamos a mostrarle algunas de las formas de crear y trabajar con formularios y en particular, cómo las vistas genéricas de edición de formularios pueden significativamente reducir la cantidad del trabajo necesario para crear formularios para manejar sus modelos. En el camino iremos extendiendo nuestra aplicación _LocalLibrary_ por agregar un formulario para permitir a los bibliotecarios renovar libros de la biblioteca y crearemos páginas para crear, editar o eliminar libros y autores (reproduciendo una versión básica del formulario mostrado arriba para editar libros).

## Formularios HTML

Primero, una breve revisión de [Formularios HTML](/es/docs/Learn/HTML/Forms). Considere un simple formulario HTML, con un solo campo de texto para entrar el nombre de algun "equipo" y su etiqueta asociada:

![Simple name field example in HTML form](form_example_name_field.png)

El formulario es definido en HTML como una colección de elementos dentro de las etiquetas `<form>...</form>`, conteniendo por lo menos un elemento de entrada - `input` de tipo enviar - `type="submit"`.

```html
<form action="/team_name_url/" method="post">
  <label for="team_name">Enter name: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Default name for team." />
  <input type="submit" value="OK" />
</form>
```

Si bien acá solo tenemos un campo de texto para ingresar el nombre del equipo, un formulario puede tener cualquier número de otros elementos de entrada y sus etiquetas asociadas. El tipo del atributo del campo - `type` define que clase de widget será mostrado. El nombre - `name` y el identificador - `id` del campo son usados para identificar el campo en JavaScript/CSS/HTML, mientrras que el valor - `value` define el valor inicial para el campo cuando este se muestra por primera vez. La etiqueta del equipo correspondiente es especificada utilizando la etiqueta - `label` (consulte "Enter name" arriba), con un campo `for` que contiene el valor de identificación `id` de la entrada asociada `input`.

La entrada de envío - `submit` se mostrará como un botón (de forma predeterminada) que el usuario puede presionar para cargar los datos en todos los demás elementos de entrada en el formulario al servidor (en este caso, solo el nombre del equipo - `team_name`). Los atributos del formulario definen el metodo - `method` de HTTP usado para enviar los datos y el destino de los datos al servidor (`action`):

- `action`: El recurso URL - resource/URL donde los datos serán enviados para su procesamiento cuando se envíe el formulario. Si esto no se establece (o se deja como una cadena vacía), entonces el formulario será enviado de regreso al URL de la página actual.
- `method`: El método utilizado por HTTP para enviar los datos: _post_ o _get_.

  - El método `POST` siempre debe usarse si los datos enviados van a resultar en un cambio en la base de datos del servidor porque esto puede ser mas resistente a un ataque de solicitud de falsificación entre sitios (cross-site forgery request attacks).
  - El método `GET` unicamente debe usarse para cuando los formularios no cambian datos de usuario (por ejemplo, un formulario de búsqueda). También, este es recomendado para cuando desee guardar, marcar o compartir el URL.

El rol del servidor es primero procesar el estado inicial del formulario ya sea conteniendo campos en blanco o completados previamente con valores inciales. Después de que el usuario presiona el botón de Enviar, el servidor recibirá los datos del formulario con valores del navegador web y deberá validar la información. Si el formulario contiene datos inválidos, el servidor deberá desplegar el formulario de nuevo, esta vez con datos ingresados por el usuario en campos "válidos" y mensajes para describir el problema en los campos con valor inválidos. Una vez el servidor recibe una petición con todos los datos de formulario válidos, este puede realizar una acción apropiada (por ejemplo, guardando los datos, regresando el resultado de una búsqueda, cargando un archivo, etc.) y luego notificar al usuario.

Como puede imaginar, crear el código HTML, validar los datos retornados, redesplegar los datos ingresados con errores reportados si fuera necesario y realizar las operaciones deseadas sobre los datos válidos puede todo tomar bastante esfuerzo para "hacerlo bien". Django hace esto mucho más fácil por quitar parte del trabajo pesado y código repetitivo!

## Proceso del manejo de formularios de Django

El manejo de formularios de Django utiliza las mismas técnicas que aprendimos en tutoriales anteriores (para mostrar información sobre nuestros modelos): la vista recibe una solicitud, realiza cualquier acción requerida incluyendo leer datos de los modelos, luego generar y devolver una página HTML (de una platilla, en la que pasamos un _contexto_ conteniendo los datos a ser desplegados). Lo que hace las cosas más complicadas es que el servidor también necesita poder procesar los datos proporcionados por el usuario y volver a mostrar la página si hay algún error.

A continuación se muestra un diagram de flujo del proceso de cómo Django maneja las solicitudes de formulario, comenzando con una solicitud de una página que contiene un formulario (mostrado en verde).

![Updated form handling process doc.](form_handling_-_standard.png)

Basado en el diagrama de anterior, las principales pasos que hace el proceso del manejo de formularios de Django son:

1. Mostrar el formulario predeterminado la primera vez que es solicitado por el usuario.

   - El formulario puede contener campos en blanco (por ejemplo, si está creando un registro nuevo), o puede estar rellenado previamente con valores iniciales (por ejemplo, si está modificando un registro o si tiene valores iniciales predeterminados útiles).
   - El formulario se conoce como no vinculado en este punto porque no esta asociado con ningún dato ingresado por el usuario (aunque pueda tener valores iniciales).

2. Recibir datos de una solicitud de envío y vincularlo al formulario.

   - La vinculacion de datos al formulario significa que los datos ingresados por el usuario y cualquier error están disponibles cuando necesitamos volver a desplegar el formulario.

3. Limpiar y validar los datos. Clean and validate the data.

   - La limpieza de los datos realiza una sanitización de la entrada (por ejemplo, remover caracteres no válidos que podrían ser usados para enviar contenido malicioso al servidor) y convertirlos en tipos consistente de Python.
   - La validación verifica que los valores sean apropiados para el campo (por ejemplo, que esten en el rango correcto de fechas, no sean demasiado cortos ni demasiado largos, etc.)

4. Si algún dato es no válido, volver a mostrar el formulario, esta vez con cualquier valor rellenado por el usuario y los mensajes de error para los campos con problemas.
5. Si todos los datos son válidos, realizar las acciones requeridas (por ejemplo, guardar los datos, enviar un correo electrónico, devolver el resultado de una búsqueda, cargar un archivo, etc)
6. Una vez todas las acciones se hayan completado, redirijir al usuario a otra página

Django provee una serie de herramientas y enfoques para ayudarlo con las tareas detalladas anteriormente. La más fundamental es la clase `Form`, la cuál simplifica la generación de formularios HTML y la limpieza y validación de datos. En la siguiente sección describimos cómo funcionan los formularios usando el ejemplo práctico de una página para permitir a los bibliotecarios renovar libros.

> **Nota:** Comprender como se usa la clase `Form` lo ayudará cuando analicemos las clases de marco de formulario de más "alto nivel" de Django.

## Renew-book form usando un Form y la funcion view

A continuación, vamos a añadir una página que permita a los bibilotecarios renovar los libros prestados. Para hacer esto crearemos un formulario que permita a los usuarios introducir una fecha. Rellenaremos el campo con un valor inicial de 3 semanas desde la fecha actual (el periodo de préstamo normal), y añadiremos alguna validación para asegurar que el bibilotecario no pueda introducir una fecha pasada o una demasiado lejana en el futuro. Cuando se haya introducido una fecha válida, la escribiremos sobre el campo `BookInstance.due_back` del registro actual.

El ejemplo utilizará una vista basada en funciones y una clase `Form`. Las próximas secciones explican como los formularios funcionan, y los cambios que necesitas realizar para continuar adelante con nuestro proyecto _LocalLibrary_.

### Clase Form

La clase Form es el corazón del sistema de manejo de formularios de Django. Especifica los campos en el formulario, su diseño, widgets de visualización, etiquetas, valores iniciales, valores válidos y (una vez validados) los mensajes de error asociados con campos no válidos. La clase también proporciona métodos para renderizarse en plantillas usando formatos predefinidos (tablas, listas, etc.) o para obtener el valor de cualquier elemento (permitiendo el renderizado manual de grano fino).

#### Declarando un Form

La sintaxis de declaración para un formulario es muy similar a la de declarar un modelo, y comparte los mismos tipos de campo (y algunos parámetros similares). Esto tiene sentido porque en ambos casos debemos asegurarnos de que cada campo maneja los tipos correctos de datos, está restringido a datos válidos y tiene una descripción para la visualización / documentación.

Para crear un formulario (`Form`) es necesario importar la libreria `forms`, derivada de la clase `Form`, y tambien declarar los campos del formulario. A continuación se muestra una clase de formulario muy básica para nuestro formulario de renovación de libros de la biblioteca:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Campos del Form

En este caso, tenemos un único [`DateField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#datefield) para ingresar la fecha de renovación que se mostrará en HTML con un valor en blanco, la etiqueta predeterminada "Fecha de renovación:" y algún texto de uso útil: "Ingrese una fecha entre ahora y 4 semanas (valor predeterminado 3 semanas)." Como no se especifica ninguno de los otros argumentos opcionales, el campo aceptará fechas utilizando los input_formats: AAAA-MM-DD (2016-11-06), MM / DD / AAAA (26/02/2016), MM / DD / AA ( 25/10/16), y se representará con el widget predeterminado: DateInput.

Hay muchos otros tipos de campos de formulario, que reconocerá en gran medida por su similitud con las clases de campo de modelo equivalentes: [`BooleanField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#booleanfield), [`CharField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#charfield), [`ChoiceField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#choicefield), [`TypedChoiceField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#typedchoicefield), [`DateField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#datefield), [`DateTimeField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#datetimefield), [`DecimalField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#decimalfield), [`DurationField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#durationfield), [`EmailField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#emailfield), [`FileField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#filefield), [`FilePathField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#filepathfield), [`FloatField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#floatfield), [`ImageField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#imagefield), [`IntegerField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#integerfield), [`GenericIPAddressField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#genericipaddressfield), [`MultipleChoiceField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#multiplechoicefield), [`TypedMultipleChoiceField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#typedmultiplechoicefield), [`NullBooleanField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#nullbooleanfield), [`RegexField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#regexfield), [`SlugField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#slugfield), [`TimeField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#timefield), [`URLField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#urlfield), [`UUIDField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#uuidfield), [`ComboField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#combofield), [`MultiValueField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#multivaluefield), [`SplitDateTimeField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#splitdatetimefield), [`ModelMultipleChoiceField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#modelmultiplechoicefield), [`ModelChoiceField`](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#modelchoicefield).

Los argumentos que son comunes a la mayoría de los campos se enumeran a continuación (estos tienen valores predeterminados sensibles):

- [required](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#required): Si es `True`, el campo no se puede dejar en blanco o dar un valor `None`. Los Campos son obligatorios por defecto, tambien puedes establecer `required=False` para permitir valores en blanco en el formulario.
- [label](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#label): label es usado cuando renderizamos el campo en HTML. Si [label](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#label) no es especificado entonces Django crearía uno a partir del nombre del campo al poner en mayúscula la primera letra y reemplazar los guiones bajos por espacios (por ejemplo. _Renewal date_).
- [label_suffix](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#label-suffix): Por defecto, se muestran dos puntos después de la etiqueta (ejemplo. Renewal date:). Este argumento le permite especificar como sufijo diferente que contiene otros caracteres.
- [initial](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#initial): El valor inicial para el campo cuando es mostrado en el formulario.
- [widget](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#widget): El widget de visualización para usar.
- [help_text](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#help-text) (como se ve en el ejemplo anterior): texto adicional que se puede mostrar en formularios para explicar cómo usar el campo.
- [error_messages](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#error-messages): Una lista de mensajes de error para el campo. Puede reemplazarlos con sus propios mensajes si es necesario.
- [validators](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#validators): Una lista de funciones que se invocarán en el campo cuando se valide.
- [localize](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#localize): Permite la localización de la entrada de datos del formulario (consulte el enlace para obtener más información).
- [disabled](https://docs.djangoproject.com/en/1.10/ref/forms/fields/#disabled): El campo se muestra pero su valor no se puede editar si esto es `True`. Por defecto es `False`.

#### Validación

Django proporciona numerosos lugares donde puede validar sus datos. La forma más fácil de validar un solo campo es anular el método `clean_<fieldname>()` para el campo que desea verificar. Entonces, por ejemplo, podemos validar lo ingresado `renewal_date` los valores son entre ahora y 4 semanas mediante la implementación `clean_renewal_date()` como se muestra abajo.

```python
from django import forms

from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _
import datetime #for checking renewal date range.

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        #Check date is not in past.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        #Check date is in range librarian allowed to change (+4 weeks).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data
```

Hay dos cosas importantes a tener en cuenta. El primero es que obtenemos nuestros datos usando `self.cleaned_data['renewal_date']` y que devolvemos estos datos si los cambiamos o no al final de la función. Este paso nos permite "limpiar" y desinfectar los datos de entrada potencialmente insegura utilizando los validadores predeterminados, y convertirlos al tipo estándar correcto para los datos (en este caso, un objeto Python `datetime.datetime`).

El segundo punto es que si un valor cae fuera de nuestro rango, elevamos un `ValidationError`, especificando el texto de error que queremos mostrar en el formulario si se ingresa un valor no válido. El ejemplo anterior también envuelve este texto en uno de las [funciones de traduccion de Django](https://docs.djangoproject.com/en/1.10/topics/i18n/translation/) `ugettext_lazy()` (importado como `_()`), lo cual es una buena práctica si desea traducir su sitio más tarde.

> **Nota:** Existen muchos otros métodos y ejemplos para validar formularios en [Validacion de Formularios y campos](https://docs.djangoproject.com/en/1.10/ref/forms/validation/) (Django docs). Por ejemplo, en los casos en que tiene varios campos que dependen unos de otros, puede anular la función [Form.clean()](https://docs.djangoproject.com/en/1.10/ref/forms/api/#django.forms.Form.clean) function y colocar un `ValidationError`.

¡Eso es todo lo que necesitamos para el formulario en este ejemplo!

#### Copia el Formulario

Crea y abre el archivo **locallibrary/catalog/forms.py** y copie el listado completo del código del bloque anterior en él.

### Configuracion del URL

Antes de crear nuestra vista, agreguemos una configuración de URL para la página de renovar libros. Copie la siguiente configuración en la parte inferior de **locallibrary/catalog/urls.py**.

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

La configuración de URL redirigirá las URL con el formato **/catalog/book/_\<bookinstance id>_/renew/** a la función llamada `renew_book_librarian()` en **views.py**, y envia el id de `BookInstance` como parametro llamado `pk`.

> **Nota:** Podemos nombrar nuestros datos de URL capturados "pk" como queramos, porque tenemos un control completo sobre la función de vista (no estamos usando una clase de vista de detalles genérica que espere parámetros con un nombre determinado). sin embargo `pk`, abreviatura de "primary key", es una convención razonable de usar!

### View

Como se discutió en el [proceso de manejo de formularios de Django](#django_form_handling_process) arriba, la vista debe presentar el formulario predeterminado cuando se llama por primera vez y luego volver a representarlo con mensajes de error si los datos no son válidos, o procesar los datos y redirigirlos a una nueva página si los datos son válidos. Para realizar estas diferentes acciones, la vista debe poder saber si se está llamando por primera vez para presentar el formulario predeterminado, o una vez posterior para validar los datos.

Para formularios que usan una solicitud `POST` para enviar información al servidor, el patrón más común es que la vista pruebe con el tipo de solicitud `POST` (`if request.method == 'POST':`) para identificar las solicitudes de validación de formularios y `GET` (usando una condición `else` ) para identificar la solicitud de creación de formulario inicial. Si desea enviar sus datos utilizando una solicitud `GET` entonces, un enfoque típico para identificar si esta es la primera invocación de vista o posterior es leer los datos del formulario (por ejemplo, leer un valor oculto en el formulario).

El proceso de renovacion de un libro escribira cambios en nuestra base de datos , entonces por convencion usaremos una peticion de tipo `POST`. El siguiente fragmento de código muestra el patrón (muy estándar) para este tipo de vista de funciones.

```python
from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
import datetime

from .forms import RenewBookForm

def renew_book_librarian(request, pk):
    book_inst=get_object_or_404(BookInstance, pk = pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_inst.due_back = form.cleaned_data['renewal_date']
            book_inst.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed') )

    # If this is a GET (or any other method) create the default form.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date,})

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})
```

Primero importamos nuestro formulario (`RenewBookForm`) y una serie de otros objetos / métodos útiles utilizados en el cuerpo de la función de vista:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/1.10/topics/http/shortcuts/#get-object-or-404): Devuelve un objeto especificado de un modelo en función de su valor de clave principal y genera una excepción `Http404` (not found) si el registro no existe.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/1.10/ref/request-response/#django.http.HttpResponseRedirect): Esto crea una redirección a una URL especificada (HTTP status code 302).
- [`reverse()`](https://docs.djangoproject.com/en/1.10/ref/urlresolvers/#django.urls.reverse): Esto genera una URL a partir de un nombre de configuración de URL y un conjunto de argumentos. Es el equivalente en Python de la etiqueta `url` que hemos estado usando en nuestras plantillas.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Una libreria de Python para manejar las fechas y horas (dates and time).

En la vista, primero usamos el argumento `pk` argument en `get_object_or_404()` para obtener el actual `BookInstance` (si esto no existe, la vista se cerrará inmediatamente y la página mostrará un error "no encontrado"). Si no se trata de una solicitud POST (manejada por la cláusula else), creamos el formulario predeterminado que pasa un valor inicial (initial) para el campo renewal_date (como se muestra en negrita a continuación, esto es 3 semanas desde la fecha actual)..

```python
    book_inst=get_object_or_404(BookInstance, pk = pk)

    # If this is a GET (or any other method) create the default form
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date,})

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})
```

Después de crear el formulario, llamamos `render()` para crear la página HTML, especificando la plantilla y un contexto que contiene nuestro formulario. En este caso, el contexto también contiene nuestro `BookInstance`, que usaremos en la plantilla para proporcionar información sobre el libro que estamos renovando.

Sin embargo, si esto es una solicitud `POST`, entonces crearemos nuestro objeto `form` y llenarlo con datos de la solicitud. Este proceso se llama "enlace" (binding) y nos permite validar el formulario. Luego verificamos si el formulario es válido, que ejecuta todo el código de validación en todos los campos, incluido el código genérico para verificar que nuestro campo de fecha sea realmente una fecha válida y nuestra funcion del formulario `clean_renewal_date()` chequea la fecha que tenga un rango correcto.

```python
    book_inst=get_object_or_404(BookInstance, pk = pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_inst.due_back = form.cleaned_data['renewal_date']
            book_inst.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed') )

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})
```

Si el formulario no es válido llamamos `render()` de nuevo, pero esta vez el valor del formulario pasado en el contexto incluirá mensajes de error.

Si el formulario es válido, entonces podemos comenzar a usar los datos, accediendo a ellos a través del atributo `form.cleaned_data` (ejemplo `data = form.cleaned_data['renewal_date']`). Aquí solo guardamos los datos en el valor `due_back` asociado al objeto `BookInstance`.

> **Advertencia:** Si bien también puede acceder a los datos del formulario directamente a través de la solicitud (por ejemplo `request.POST['renewal_date']` o `request.GET['renewal_date']` (si se esta usando una solicitud GET) esto NO es recomendable. Los datos limpios se desinfectan, validan y convierten en tipos compatibles con Python.

El paso final en la parte de manejo de formularios de la vista es redirigir a otra página, generalmente una página de "éxito". En este caso usamos `HttpResponseRedirect` y `reverse()` para redirigir a la vista llamada `'all-borrowed'`(esto fue creado como el "desafío" en [Django Tutorial Part 8: User authentication and permissions](/es/docs/Learn/Server-side/Django/authentication_and_sessions#Challenge_yourself)).Si no creó esa página, considere redirigir a la página de inicio en la URL '/').

Eso es todo lo necesario para el manejo del formulario en sí, pero aún debemos restringir el acceso a la vista a los bibliotecarios. Probablemente deberíamos crear un nuevo permiso en `BookInstance` ("`can_renew`"),pero para simplificar las cosas aquí solo usamos la funcion decorator `@permission_required` con nuestro existente permiso `can_mark_returned`.

La vista final es, por lo tanto, como se muestra a continuación. Copie esto en la parte inferior de **locallibrary/catalog/views.py**.

```python
from django.contrib.auth.decorators import permission_required

from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.url import reverse
import datetime

from .forms import RenewBookForm

@permission_required('catalog.can_mark_returned')
def renew_book_librarian(request, pk):
    """
    View function for renewing a specific BookInstance by librarian
    """
    book_inst=get_object_or_404(BookInstance, pk = pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_inst.due_back = form.cleaned_data['renewal_date']
            book_inst.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed') )

    # If this is a GET (or any other method) create the default form.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date,})

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})
```

### La plantilla

Crea la plantilla html referenciada en la vista dentro del directorio (**/catalog/templates/catalog/book_renew_librarian.html**) y copia el codigo a continuacion dentro del archivo que creaste:

```django
{% extends "base_generic.html" %}
{% block content %}

    <h1>Renew: \{{bookinst.book.title}}</h1>
    <p>Borrower: \{{bookinst.borrower}}</p>
    <p{% if bookinst.is_overdue %} class="text-danger"{% endif %}>Due date: \{{bookinst.due_back}}</p>

    <form action="" method="post">
        {% csrf_token %}
        <table>
        \{{ form }}
        </table>
        <input type="submit" value="Submit" />
    </form>

{% endblock %}
```

La mayor parte de esto será completamente familiar de los tutoriales anteriores. Extendemos la plantilla base y luego redefinimos el bloque de contenido. Podemos hacer referencia `\{{bookinst}}` (y sus variables) porque se pasó al objeto de contexto en la funci'on `render()`,y los usamos para colocar el título del libro, el prestatario y la fecha de vencimiento original.

El código del formulario es relativamente simple. Primero declaramos las etiquetas del `form`,especificando dónde se debe enviar el formulario (`action`) y el `metodo` para enviar los datos (en este caso, una "POST HTTP"), si recuerda el [HTML Forms](#HTML_forms) resumen en la parte superior de la página, un espacio vacío `action` como se muestra, significa que los datos del formulario se volverán a publicar en la URL actual de la página (¡que es lo que queremos!). Dentro de las etiquetas definimos la enntrada (input) `submit`, que un usuario puede presionar para enviar los datos. Esto `{% csrf_token %}` es agregado justo dentro de las etiquetas de formulario es parte de la protección de falsificación entre sitios de Django.

> **Nota:** Agregue el {% csrf_token%} a cada plantilla de Django que cree que use POST para enviar datos. Esto reducirá la posibilidad de que usuarios malintencionados secuestran formularios.

Todo lo que queda es la variable de la plantilla `\{{form}}`, que pasamos a la plantilla en el diccionario de contexto. Quizás, como era de esperar, cuando se usa como se muestra, proporciona la representación predeterminada de todos los campos del formulario, incluidas sus etiquetas, widgets y texto de ayuda; la representación es la que se muestra a continuación:

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2016-11-08"
      required />
    <br />
    <span class="helptext">
      Enter date between now and 4 weeks (default 3 weeks).
    </span>
  </td>
</tr>
```

> **Nota:** Quizás no sea obvio porque solo tenemos un campo, pero de forma predeterminada cada campo se define en su propia fila de tabla (razón por la cual la variable está dentro de la etiqueta `table` arriba).Esta misma representación (rendering) se proporciona si hace referencia a la variable de plantilla `\{{ form.as_table }}`.

Si tuviera que ingresar una fecha no válida, también obtendría una lista de los errores que se muestran en la página (en negrita a continuación).

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
    <ul class="errorlist">
      <li>Invalid date - renewal in past</li>
    </ul>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2015-11-08"
      required />
    <br />
    <span class="helptext">
      Enter date between now and 4 weeks (default 3 weeks).
    </span>
  </td>
</tr>
```

#### Otras formas de usar variable de la plantilla de formulario

Usando `\{{form}}` como se muestra arriba, cada campo se representa como una fila de la tabla. También puede representar cada campo como un elemento de la lista (usando `\{{form.as_ul}}` ) o como un parrafo (usando `\{{form.as_p}}`).

Lo que es aún más genial es que puede tener un control completo sobre la representación de cada parte del formulario, indexando sus propiedades mediante la notación de puntos. Entonces, por ejemplo, podemos acceder a una serie de elementos separados de los campos de `renewal_date`-

- `\{{form.renewal_date}}:` The whole field.
- `\{{form.renewal_date.errors}}`: The list of errors.
- `\{{form.renewal_date.id_for_label}}`: The id of the label.
- `\{{form.renewal_date.help_text}}`: The field help text.
- etc!

Para obtener más ejemplos de cómo reproducir manualmente los formularios en plantillas y recorrer dinámicamente los campos de la plantilla, vea [Working with forms > Rendering fields manually](https://docs.djangoproject.com/en/1.10/topics/forms/#rendering-fields-manually) (Django docs).

### Probando la página

Si aceptó el "desafío" en [Django Tutorial Part 8: User authentication and permissions](/es/docs/Learn/Server-side/Django/authentication_and_sessions#Challenge_yourself) tendrá una lista de todos los libros prestados en la biblioteca, que solo es visible para el personal de la biblioteca. Podemos agregar un enlace a nuestra página de renovación al lado de cada artículo usando el código de plantilla a continuación.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>  {% endif %}
```

> **Nota:** Recuerde que su inicio de sesión de prueba deberá tener el permiso "`catalog.can_mark_returned`" para acceder a la página de renovar el libro (quizás use su cuenta de superusuario).

Alternativamente, puede construir manualmente una URL de prueba como esta — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (se puede obtener un ID de instancia de libro válido navegando a la página de detalles de un libro en su biblioteca y copiando el campo `id`).

### Como se ve?

Si tiene éxito, el formulario predeterminado se verá así:

![](forms_example_renew_default.png)

El formulario con un valor no válido ingresado se verá así:

![](forms_example_renew_invalid.png)

La lista de todos los libros con enlaces renovados se verá así:

![](forms_example_renew_allbooks.png)

## ModelForms

Crear una clase `Form` utilizando el enfoque descrito anteriormente es muy flexible, lo que le permite crear cualquier tipo de página de formulario que desee y asociarla con cualquier modelo o modelos.

Sin embargo, si solo necesita un formulario para asignar los campos de un solo modelo, entonces su modelo ya definirá la mayor parte de la información que necesita en su formulario: campos, etiquetas, texto de ayuda, etc. En lugar de recrear las definiciones de modelo en su formulario , es más fácil usar una clase auxiliar [ModelForm](https://docs.djangoproject.com/en/1.10/topics/forms/modelforms/) para crear el formulario a partir de su modelo. El `ModelForm` puede usarse dentro de sus vistas exactamente de la misma manera que un ordinario `Form`.

Un `ModelForm` que contiene el mismo campo que nuestro original `RenewBookForm`se muestra a continuación. Todo lo que necesita hacer para crear el formulario es agregar `class Meta` with the associated `model` (`BookInstance`) y una lista de los campos del modelo `fields` para incluir en el formulario (puede incluir todos los campos usando `fields = '__all__'`, o puedes usar `exclude` (en vez de `fields`) para especificar los campos que no se incluirán del modelo).

```python
from django.forms import ModelForm
from .models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back',]
```

> **Nota:** Esto podría no parece mucho más simple que simplemente usar un `Form` (y no es en este caso, porque solo tenemos un campo). Sin embargo, si tiene muchos campos, puede reducir la cantidad de código de manera bastante significativa.

El resto de la información proviene de las definiciones de campo del modelo (por ejemplo, etiquetas, widgets, texto de ayuda, mensajes de error). Si estos no son del todo correctos, entonces podemos anularlos en nuestro `class Meta`, especificando un diccionario que contiene el campo a cambiar y su nuevo valor. Por ejemplo, en este formulario podríamos querer una etiqueta para nuestro campo de "Fecha de renovación" (en lugar del valor predeterminado basado en el nombre del campo: Fecha de vencimiento), y también queremos que nuestro texto de ayuda sea específico para este caso de uso. El `Meta` a continuación le muestra cómo anular estos campos, y puede configurar de manera similar `widgets` y `error_messages` si los valores predeterminados no son suficientes.

```python
class Meta:
    model = BookInstance
    fields = ['due_back',]
    labels = { 'due_back': _('Renewal date'), }
    help_texts = { 'due_back': _('Enter a date between now and 4 weeks (default 3).'), }
```

Para agregar validación, puede usar el mismo enfoque que para un normal `Form` — define una función llamada `clean_field_name()` y coloca (raise) `ValidationError` excepciones para valores no válidos. La única diferencia con respecto a nuestro formulario original es que el campo modelo se llama `due_back` y no "`renewal_date`".

```python
from django.forms import ModelForm
from .models import BookInstance

class RenewBookModelForm(ModelForm):
    def clean_due_back(self):
       data = self.cleaned_data['due_back']

       #Check date is not in past.
       if data < datetime.date.today():
           raise ValidationError(_('Invalid date - renewal in past'))

       #Check date is in range librarian allowed to change (+4 weeks)
       if data > datetime.date.today() + datetime.timedelta(weeks=4):
           raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

       # Remember to always return the cleaned data.
       return data

    class Meta:
        model = BookInstance
        fields = ['due_back',]
        labels = { 'due_back': _('Renewal date'), }
        help_texts = { 'due_back': _('Enter a date between now and 4 weeks (default 3).'), }
```

La clase `RenewBookModelForm` a continuación es ahora funcionalmente equivalente a nuestro original `RenewBookForm`. Puede importarlo y usarlo donde quiera que lo use actualmente `RenewBookForm`.

## Vistas de edición genéricas

El algoritmo de manejo de formularios que utilizamos en nuestro ejemplo de vista de funciones anterior representa un patrón extremadamente común en las vistas de edición de formularios. Django extrae gran parte de esta "plantilla" para ti, para crear vistas de edición genéricas ( [generic editing views](https://docs.djangoproject.com/en/1.10/ref/class-based-views/generic-editing/) ) para crear, editar y eliminar vistas basadas en modelos. No solo manejan el comportamiento de "vista", sino que crean automáticamente la clase de formulario (un `ModelForm`) para tu modelo.

> **Nota:** Además de las vistas de edición descritas aquí, también hay una clase [FormView](https://docs.djangoproject.com/en/1.10/ref/class-based-views/generic-editing/#formview) , que se encuentra en algún lugar entre nuestra vista de función y las otras vistas genéricas en términos de "flexibilidad" frente a "esfuerzo de codificación". Usando `FormView` tu necesitas crear el `Form`, pero no tiene que implementar todo el patrón estándar de manejo de formularios. En su lugar, solo tiene que proporcionar una implementación de la función que se llamará una vez que se sepa que el envío es válido.

En esta sección, vamos a usar vistas de edición genéricas para crear páginas para agregar funcionalidad para crear, editar y eliminar registros de `Author` de nuestra libreria — Proporcionar efectivamente una reimplementación básica de partes del sitio de administración (esto podría ser útil si necesita ofrecer la funcionalidad de administrador de una manera más flexible que puede proporcionar el sitio de administrador).

### Views

Abre el archivo de vistas (**locallibrary/catalog/views.py**) y agregue el siguiente bloque de código al final:

```python
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Author

class AuthorCreate(CreateView):
    model = Author
    fields = '__all__'
    initial={'date_of_death':'05/01/2018',}

class AuthorUpdate(UpdateView):
    model = Author
    fields = ['first_name','last_name','date_of_birth','date_of_death']

class AuthorDelete(DeleteView):
    model = Author
    success_url = reverse_lazy('authors')
```

Como puede ver, para crear las vistas de las que necesita derivar `CreateView`, `UpdateView`, y `DeleteView` (respectivamente) y luego definir el modelo asociado.

Para los casos de "crear" y "actualizar", también debe especificar los campos para mostrar en el formulario (utilizando la misma sintaxis que para `ModelForm`). En este caso, mostramos la sintaxis para mostrar "todos" los campos y cómo puede enumerarlos individualmente. También puede especificar valores iniciales para cada uno de los campos utilizando un diccionario de pares nombre_campo / valor (aquí establecemos arbitrariamente la fecha de fallecimiento para fines de demostración; ¡es posible que desee eliminar eso!). Por defecto, estas vistas redirigirán en caso de éxito a una página que muestre el elemento del modelo recién creado / editado, que en nuestro caso será la vista detallada del autor que creamos en un tutorial anterior. Puede especificar una ubicación alternativa de redireccionamiento declarando explícitamente el parámetro `success_url` (como hecho en la clase `AuthorDelete` ).

La clase `AuthorDelete` no necesita mostrar ninguno de los campos, por lo que no es necesario especificarlos. Sin embargo, debe especificar el `success_url`, porque no hay un valor predeterminado obvio para que Django lo use. En este caso usamos la función [`reverse_lazy()`](https://docs.djangoproject.com/en/1.10/ref/urlresolvers/#reverse-lazy) para redirigir a nuestra lista de autores después de que un autor ha sido eliminado — `reverse_lazy()` is a lazily executed version of `reverse()`, se usa aquí porque estamos proporcionando una URL a un atributo de vista basado en clases.

### Templates - Plantillas

Las vistas "create" y "update" utilizan la misma plantilla de forma predeterminada, que se nombrará después de su model: _model_name_**\_form.html** (puedes cambiar el sufijo a algo diferente a **\_form** usando el campo `template_name_suffix` en tu vista, ejemplo: `template_name_suffix = '_other_suffix'`)

Crea la siguiente plantilla **locallibrary/catalog/templates/catalog/author_form.html** y copia el siguiente texto:

```django
{% extends "base_generic.html" %}

{% block content %}

<form action="" method="post">
    {% csrf_token %}
    <table>
    \{{ form.as_table }}
    </table>
    <input type="submit" value="Submit" />

</form>
{% endblock %}
```

Esto es similar a nuestros formularios anteriores y representa los campos usando una tabla. Tenga en cuenta también cómo declaramos nuevamente`{% csrf_token %}` para garantizar que nuestros formularios sean resistentes a los ataques CSRF.

La vista "delete" espera encontrar una plantilla con el formato _model_name_**\_confirm_delete.html** (de nuevo, puedes cambiar el sufijo usando `template_name_suffix` en tu vista). Crea la siguiente plantilla **locallibrary/catalog/templates/catalog/author_confirm_delete.html** y copia en el texto a continuación.

```django
{% extends "base_generic.html" %}

{% block content %}

<h1>Delete Author</h1>

<p>Are you sure you want to delete the author: \{{ author }}?</p>

<form action="" method="POST">
  {% csrf_token %}
  <input type="submit" action="" value="Yes, delete." />
</form>

{% endblock %}
```

### Configuración de URL

Abra el archivo de configuración de URL (**locallibrary/catalog/urls.py**) y agregue la siguiente configuración al final del archivo:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

¡No hay nada particularmente nuevo aquí! Puede ver que las vistas son clases y, por lo tanto, deben llamarse a través de `.as_view()`,y deberías poder reconocer los patrones de URL en cada caso. Debemos usar `pk` como el nombre de nuestro valor de clave principal (primary key) capturado, ya que este es el nombre del parámetro esperado por las clases de vista.

Las páginas de crear, actualiza y eliminar autor ahora estan listas para probar (no nos molestaremos en engancharlas en la barra lateral del sitio en este caso, aunque puede hacerlo si lo desea).

> **Nota:** ¡Los usuarios observadores habrán notado que no hicimos nada para evitar que usuarios no autorizados accedan a las páginas! Lo dejamos como un ejercicio para usted (pista: puede usar el `PermissionRequiredMixin` y cree un nuevo permiso o reutilice nuestro permiso `can_mark_returned` ).

### Probando la página

Primero inicie sesión en el sitio con una cuenta que tenga los permisos que haya decidido que se necesitan para acceder a las páginas de edición del autor.

Luego navegue a la página de creación del autor: `http://127.0.0.1:8000/catalog/author/create/`, que debería verse como la captura de pantalla a continuación.

![Form Example: Create Author](forms_example_create_author.png)

Ingrese los valores para los campos y luego presione **Submit** para guardar el registro del autor. Ahora debería ser llevado a una vista detallada para su nuevo autor, con una URL de algo como `http://127.0.0.1:8000/catalog/author/10`.

Puede probar la edición de registros agregando _/update/_ hasta el final de la vista detallada URL (e.g. `http://127.0.0.1:8000/catalog/author/10/update/`) — no mostramos una captura de pantalla, porque se parece a la página "create".

Por último, podemos eliminar el autor, agregando eliminar (delete) al final de la vista detallada del autor URL (ejemplo. `http://127.0.0.1:8000/catalog/author/10/delete/`). Django debería mostrar la página de eliminación que se muestra a continuación. pulse **Yes, delete.** para eliminar el registro y ser llevado a la lista de todos los autores.

![](forms_example_delete_author.png)

## Retarte a ti mismo

Crea algunos formularios para crear, editar y eliminar registros de `Book`.Puede usar exactamente la misma estructura de `Authors`. Si tu plantilla **book_form.html** es solo una versión renombrada de la copia de la plantilla **author_form.html**, entonces la nueva página "crear libro" se verá como la captura de pantalla a continuación:

![](forms_example_create_book.png)

## Resumen

¡Crear y manejar formularios puede ser un proceso complicado! Django lo hace mucho más fácil al proporcionar mecanismos programáticos para declarar, representar y validar formularios. Además, Django proporciona vistas genéricas de edición de formularios que pueden hacer casi todo el trabajo para definir páginas que pueden crear, editar y eliminar registros asociados con una sola instancia de modelo.

Hay mucho más que se puede hacer con los formularios (consulte nuestra lista Vea también a continuación), pero ahora debe comprender cómo agregar formularios básicos y código de manejo de formularios a sus propios sitios web.

## Ver también

- [Working with forms](https://docs.djangoproject.com/en/1.10/topics/forms/) (Django docs)
- [Writing your first Django app, part 4 > Writing a simple form](https://docs.djangoproject.com/en/1.10/intro/tutorial04/#write-a-simple-form) (Django docs)
- [The Forms API](https://docs.djangoproject.com/en/1.10/ref/forms/api/) (Django docs)
- [Form fields](https://docs.djangoproject.com/en/1.10/ref/forms/fields/) (Django docs)
- [Form and field validation](https://docs.djangoproject.com/en/1.10/ref/forms/validation/) (Django docs)
- [Form handling with class-based views](https://docs.djangoproject.com/en/1.10/topics/class-based-views/generic-editing/) (Django docs)
- [Creating forms from models](https://docs.djangoproject.com/en/1.10/topics/forms/modelforms/) (Django docs)
- [Generic editing views](https://docs.djangoproject.com/en/1.10/ref/class-based-views/generic-editing/) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/authentication", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}
