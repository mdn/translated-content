---
title: "Django Tutorial Parte 7: Framework de sesiones"
short-title: "7: Framework de sesiones"
slug: Learn_web_development/Extensions/Server-side/Django/Sessions
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django")}}

Este tutorial amplía nuestro sitio web [LocalLibrary](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), añadiendo un contador de visitas basado en sesiones a la página de inicio.
Este es un ejemplo relativamente simple, pero muestra cómo puedes usar el framework de sesiones para ofrecer comportamiento persistente a usuarios anónimos en tus propios sitios.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Completa todos los temas anteriores del tutorial, incluyendo <a href="/es/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views">Django Tutorial Parte 6: Vistas genéricas de listado y detalle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Comprender cómo se usan las sesiones.</td>
    </tr>
  </tbody>
</table>

## Descripción general

El sitio web [LocalLibrary](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) que creamos en los tutoriales anteriores permite a los usuarios explorar libros y autores en el catálogo. Aunque el contenido se genera dinámicamente desde la base de datos, en esencia todos los usuarios tienen acceso a las mismas páginas y tipos de información cuando usan el sitio.

En una biblioteca "real" podrías querer ofrecer a cada usuario una experiencia personalizada, basada en su uso previo del sitio, sus preferencias, etc.
Por ejemplo, podrías ocultar mensajes de advertencia que el usuario ya reconoció la próxima vez que visite el sitio, o guardar y respetar sus preferencias (como la cantidad de resultados de búsqueda que quiere que se muestren en cada página).

El framework de sesiones te permite implementar este tipo de comportamiento, dejándote guardar y recuperar datos arbitrarios por cada visitante del sitio.

## ¿Qué son las sesiones?

Toda la comunicación entre navegadores web y servidores ocurre mediante {{Glossary("HTTP")}}, el cual es _sin estado_. El hecho de que el protocolo no tenga estado significa que los mensajes entre el cliente y el servidor son completamente independientes entre sí, no existe una noción de "secuencia" ni un comportamiento basado en mensajes anteriores. Por eso, si quieres tener un sitio que mantenga un seguimiento de la relación en curso con un cliente, tienes que implementarlo tú mismo.

Las sesiones son el mecanismo que usa Django (y la mayor parte de internet) para llevar un seguimiento del "estado" entre el sitio y un navegador en particular. Las sesiones te permiten guardar datos arbitrarios por navegador, y tener estos datos disponibles para el sitio cada vez que el navegador se conecta. Los elementos de datos individuales asociados con la sesión se referencian mediante una "clave", que se usa tanto para guardar como para recuperar los datos.

Django usa una cookie que contiene un _id de sesión_ especial para identificar cada navegador y su sesión asociada con el sitio. Los _datos_ reales de la sesión se guardan de forma predeterminada en la base de datos del sitio (esto es más seguro que guardar los datos en una cookie, donde son más vulnerables a usuarios malintencionados). Puedes configurar Django para guardar los datos de sesión en otros lugares (caché, archivos, cookies "seguras"), pero la ubicación predeterminada es una opción buena y relativamente segura.

## Habilitar sesiones

Las sesiones se habilitaron automáticamente cuando [creamos el sitio web esqueleto](/es/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (en el tutorial 2).

La configuración se establece en las secciones `INSTALLED_APPS` y `MIDDLEWARE` del archivo del proyecto (**django-locallibrary-tutorial/locallibrary/settings.py**), como se muestra a continuación:

```python
INSTALLED_APPS = [
    # …
    'django.contrib.sessions',
    # …

MIDDLEWARE = [
    # …
    'django.contrib.sessions.middleware.SessionMiddleware',
    # …
```

## Usar sesiones

Puedes acceder al atributo `session` dentro de una vista a través del parámetro `request` (un `HttpRequest` que se pasa como primer argumento a la vista).
Este atributo de sesión representa la conexión específica con el usuario actual (o, para ser más precisos, la conexión con el _navegador_ actual, identificado mediante el id de sesión en la cookie del navegador para este sitio).

El atributo `session` es un objeto similar a un diccionario que puedes leer y escribir tantas veces como quieras dentro de tu vista, modificándolo como desees. Puedes realizar todas las operaciones normales de un diccionario, incluyendo borrar todos los datos, comprobar si una clave está presente, recorrer los datos, etc. Sin embargo, la mayoría de las veces solo usarás la API estándar de "diccionario" para obtener y establecer valores.

Los siguientes fragmentos de código muestran cómo puedes obtener, establecer y eliminar algunos datos con la clave `my_car`, asociada a la sesión (navegador) actual.

> [!NOTE]
> Una de las grandes ventajas de Django es que no necesitas pensar en los mecanismos que vinculan la sesión con tu solicitud actual dentro de la vista. Si usáramos los fragmentos de abajo en nuestra vista, sabríamos que la información sobre `my_car` está asociada únicamente con el navegador que envió la solicitud actual.

```python
# Obtén un valor de sesión por su clave (por ejemplo, 'my_car'), lo que genera un KeyError si la clave no está presente
my_car = request.session['my_car']

# Obtén un valor de sesión, estableciendo un valor predeterminado si no está presente ('mini')
my_car = request.session.get('my_car', 'mini')

# Establece un valor de sesión
request.session['my_car'] = 'mini'

# Elimina un valor de sesión
del request.session['my_car']
```

La API también ofrece otros métodos que se usan principalmente para gestionar la cookie de sesión asociada. Por ejemplo, hay métodos para comprobar que las cookies son compatibles en el navegador del cliente, para establecer y comprobar las fechas de expiración de las cookies, y para eliminar sesiones expiradas del almacén de datos. Puedes conocer la API completa en [How to use sessions](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (documentación de Django).

## Guardar datos de sesión

De forma predeterminada, Django solo guarda en la base de datos de sesión y envía la cookie de sesión al cliente cuando la sesión se ha _modificado_ (asignado) o _eliminado_. Si estás actualizando algún dato usando su clave de sesión como se mostró en la sección anterior, ¡no tienes que preocuparte por esto! Por ejemplo:

```python
# Esto se detecta como una actualización de la sesión, así que los datos de la sesión se guardan.
request.session['my_car'] = 'mini'
```

Si estás actualizando información _dentro_ de los datos de sesión, Django no reconocerá que hiciste un cambio en la sesión y no guardará los datos (por ejemplo, si cambiaras los datos de `wheels` dentro de tu dato `my_car`, como se muestra abajo). En este caso, necesitarás marcar explícitamente la sesión como modificada.

```python
# El objeto de sesión no se modificó directamente, solo los datos dentro de la sesión. ¡Los cambios de la sesión no se guardan!
request.session['my_car']['wheels'] = 'alloy'

# Marca la sesión como modificada para forzar que se guarden las actualizaciones de datos/cookie.
request.session.modified = True
```

> [!NOTE]
> Puedes cambiar este comportamiento para que el sitio actualice la base de datos/envíe la cookie en cada solicitud, agregando `SESSION_SAVE_EVERY_REQUEST = True` en la configuración de tu proyecto (**django-locallibrary-tutorial/locallibrary/settings.py**).

## Ejemplo simple: obtener el conteo de visitas

Como ejemplo simple del mundo real, actualizaremos nuestra biblioteca para indicarle al usuario actual cuántas veces ha visitado la página de inicio de _LocalLibrary_.

Abre **/django-locallibrary-tutorial/catalog/views.py**, y agrega las líneas que contienen `num_visits` en `index()` (como se muestra a continuación).

```python
def index(request):
    # …

    num_authors = Author.objects.count()  # El 'all()' está implícito de forma predeterminada.

    # Cantidad de visitas a esta vista, contadas en la variable de sesión.
    num_visits = request.session.get('num_visits', 0)
    num_visits += 1
    request.session['num_visits'] = num_visits

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
        'num_visits': num_visits,
    }

    # Renderiza la plantilla HTML index.html con los datos en la variable de contexto.
    return render(request, 'index.html', context=context)
```

Aquí primero obtenemos el valor de la clave de sesión `'num_visits'`, estableciendo el valor en 0 si no se ha establecido previamente. Cada vez que se recibe una solicitud, incrementamos el valor y lo guardamos de nuevo en la sesión (para la próxima vez que el usuario visite la página). Luego, la variable `num_visits` se pasa a la plantilla en nuestra variable de contexto.

> [!NOTE]
> Aquí también podríamos comprobar si el navegador admite cookies (consulta [How to use sessions](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) para ver ejemplos), o diseñar nuestra interfaz de modo que no importe si las cookies son compatibles o no.

Agrega la línea que se muestra al final del siguiente bloque a tu plantilla HTML principal (**/django-locallibrary-tutorial/catalog/templates/index.html**), al final de la sección "Contenido dinámico", para mostrar la variable de contexto `num_visits`.

```django
<h2>Contenido dinámico</h2>

<p>La biblioteca tiene los siguientes conteos de registros:</p>
<ul>
  <li><strong>Libros:</strong> \{{ num_books }}</li>
  <li><strong>Copias:</strong> \{{ num_instances }}</li>
  <li><strong>Copias disponibles:</strong> \{{ num_instances_available }}</li>
  <li><strong>Autores:</strong> \{{ num_authors }}</li>
</ul>

<p>
  Has visitado esta página \{{ num_visits }} vece\{{ num_visits|pluralize }}.
</p>
```

Ten en cuenta que usamos la etiqueta de plantilla integrada de Django [pluralize](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#pluralize) para agregar una "s" cuando la página se ha visitado varias vece**s**.

Guarda tus cambios y reinicia el servidor de pruebas. Cada vez que recargues la página, el número debería actualizarse.

## Resumen

Ahora sabes lo fácil que es usar sesiones para mejorar tu interacción con usuarios _anónimos_.

En nuestros próximos artículos explicaremos el framework de autenticación y autorización (permisos), y te mostraremos cómo dar soporte a las cuentas de usuario.

## Véase también

- [How to use sessions](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (documentación de Django)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django")}}
