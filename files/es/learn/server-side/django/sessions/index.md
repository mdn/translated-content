---
title: "Tutorial de Django Parte 7: Framework de sesiones"
slug: Learn/Server-side/Django/Sessions
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/authentication", "Learn/Server-side/Django")}}

Este tutorial extiende nuestro sitio web de la [BibliotecaLocal](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website), añadiendo un contador de visitas a tu página de inicio basado en sesiones. Es un ejemplo relativamente simple, pero muestra cómo puedes usar el framework de sesión para proporcionar persistencia a usuarios anónimos en tus propios sitios.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        Completar todos los tópicos anteriores del tutorial, incluyendo
        <a href="/es/docs/Learn/Server-side/Django/Generic_views"
          >Django Tutorial Part 6: Generic list and detail views</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Entender como emplear las sesiones.</td>
    </tr>
  </tbody>
</table>

## Resumen

El sitio web de la [BibliotecaLocal](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website) que creamos en los tutoriales previos permite a los usuarios explorar los libros y autores en el catálogo. Mientras que el contenido se genera dinámicamente desde la base de datos, todos los usuarios básicamente tendrán acceso a las mismas páginas y tipos de información cuando usan el sitio.

En una biblioteca "real" podrías querer dar a cada usuario individual una experiencia personalizada, basada en su uso previo del sitio, preferencias, etc. Por ejemplo, podrías ocultar los mensajes de advertencia que el usuario ya ha aceptado previamente la próxima vez que visite el sitio, o guardar y respetar sus preferencias (ej. el número de resultados de búsqueda que quiere desplegar en cada página).

El framework de sesiones te permite implementar este tipo de comportamiento, pudiendo guardar y recuperar información arbitraria en base a cada visitante particular del sitio.

## ¿Qué son las sesiones?

Toda comunicación entre los navegadores web y los servidores se da a través del protocolo HTTP, que es _sin estado_. El hecho de que el protocolo sea sin estado significa que los mensajes entre el cliente y el servidor son completamente independientes entre sí — no existe una noción de "secuencia" o comportamiento basado en mensajes previos. Como resultado, si quieres tener un sitio que guarde registro de la relación que tiene lugar con un cliente, necesitas implementarlo tú mismo.

Las sesiones son el mecanismo que usa Django (y la mayor parte de Internet) para guardar registro del "estado" entre el sitio y un navegador en particular. Las sesiones te permiten almacenar información arbitraria por navegador, y tener esta información disponible para el sitio cuando el navegador se conecta. Cada pieza individual de información asociada con una sesión se conoce como "clave", que se usa tanto para guardar como para recuperar la información.

Django usa una cookie que contiene un _id de sesión_ específica para identificar cada navegador y su sesión asociada con el sitio. La información real de la sesión se guarda por defecto en la base de datos del sitio (esto es más seguro que guardar la información en una cookie, donde es más vulnerable para los usuarios maliciosos). Puedes configurar Django para guardar la información de sesión en otros lugares (caché, archivos, cookies "seguras"), pero la opción por defecto es una buena opción y relativamente segura.

## Habilitando las sesiones

Las sesiones fueron automáticamente habilitadas cuando [creamos el sitio web esqueleto](/es/docs/Learn/Server-side/Django/skeleton_website) (en el tutorial 2).

La configuración está establecida en las secciones `INSTALLED_APPS` y `MIDDLEWARE` del archivo del proyecto (**locallibrary/locallibrary/settings.py**), como se muestra abajo:

```python
INSTALLED_APPS = [
    ...
    'django.contrib.sessions',
    ....

MIDDLEWARE = [
    ...
    'django.contrib.sessions.middleware.SessionMiddleware',
    ....
```

## Usando las sesiones

Puedes usar el atributo `session` en la vista desde el parámetro `request` (una `HttpRequest` que se envía como el primer argumento a la vista). Este atributo de sesión representa la conección específica con el usuario actual (o para ser más preciso, la conección con el _navegador_ actual, como se identifica mediante la id de sesión en la cookie del navegador para este sitio).

El atributo `session` es un objeto tipo diccionario que puedes leer y escribir tantas veces como quieras en tu vista, modificándolo como desees. Puedes realizar todas las operaciones normales de diccionario, incluyendo eliminar toda la información, probar si una clave está presente, iterar a través de la información, etc. Sin embargo, la mayor parte del tiempo solo usarás la API estándar de "diccionario" para recuperar y establecer valores.

Los fragmentos de código de abajo te muestran cómo puedes recuperar, establecer o eliminar información con la clave "`my_car`", asociada con la sesión actual (del navegador).

> **Nota:** Una de las cosas grandiosas de Django es que no necesitas pensar sobre los mecanismos que relacionan la sesión con tu solicitud actual en tu vista. Si fuéramos a usar los fragmentos de abajo en nuestra vista, sabríamos que la información sobre `my_car` está asociada solo con el navegador que envió la solicitud.

```python
# Obtener un dato de la sesión por su clave (ej. 'my_car'), generando un KeyError si la clave no existe
my_car = request.session['my_car']

# Obtener un dato de la sesión, estableciendo un valor por defecto ('mini') si el dato requerido no existe
my_car = request.session.get('my_car', 'mini')

# Asignar un dato a la sesión
request.session['my_car'] = 'mini'

# Eliminar un dato de la sesión
del request.session['my_car']
```

La API ofrece también una cantidad de métodos adicionales que se usan mayoritariamente para administrar la cookie de sesión asociada. Por ejemplo, hay métodos para probar si el navegador cliente soporta cookies, establecer y revisar las fechas de expiración de las cookies, y para eliminar sesiones expiradas del almacén de datos. Puedes encontrar información sobre la API completa en [Cómo usar sesiones](https://docs.djangoproject.com/en/1.10/topics/http/sessions/) (Django docs).

## Guardando la información de la sesión

Por defecto, Django solo guarda información en la base de datos de sesión y envía la cookie de sesión al cliente cuando la sesión ha sido _modificada_ (asignada) o _eliminada_. Si estás actualizando algún dato usando su clave de sesión como se mostró en la sección previa, ¡no necesitas preocuparte por esto! Por ejemplo:

```python
# Esto es detectado como un cambio en la sesión, así que la información de la sesión es guardada.
request.session['my_car'] = 'mini'
```

Si estás actualizando algún dato _dentro_ de la información de sesión, Django no reconocerá que has hecho un cambio en la sesión y guardado la información (por ejemplo, si fueras a cambiar el dato "`wheels`" dentro de tu dato "`my_car`", como se muestra abajo). En este caso, necesitarás marcar explícitamente la sesión como que ha sido modificada.

```python
# Objeto de sesión no directamente modificada, solo información dentro de la sesión.
# ¡Cambios no guardados!
request.session['my_car']['wheels'] = 'alloy'

# Establecer la sesión como modificada para forzar a que se guarden los cambios.
request.session.modified = True
```

> **Nota:** Puedes cambiar el comportamiento para que el sitio actualice la base de datos y envíe la cookie en cada solicitud añádiendo `SESSION_SAVE_EVERY_REQUEST = True` a la configuración de tu proyecto (**locallibrary/locallibrary/settings.py**).

## Ejemplo simple — obteniendo conteos de visitas

Como un ejemplo simple del mundo real, actualizaremos nuestra biblioteca para decirle al usuario actual cuántas veces ha visitado la página principal de _BibliotecaLocal_.

Abre **/locallibrary/catalog/views.py**, y aplica los cambios que se muestran con negrita abajo.

```python
def index(request):
    ...

    num_authors=Author.objects.count()  # El 'all()' se obvia en este caso.

    # Numero de visitas a esta view, como está contado en la variable de sesión.
    num_visits = request.session.get('num_visits', 0)
    request.session['num_visits'] = num_visits + 1

    context = {
        'num_books':num_books,
        'num_instances':num_instances,
        'num_instances_available':num_instances_available,
        'num_authors':num_authors,
        'num_visits':num_visits,
    }

    # Carga la plantilla index.html con la información adicional en la variable context.
    return render(request, 'index.html', context=context)
```

Aquí primero obtenemos el valor de la clave de sesión `'num_visits'`, estableciendo el valor a 0 si no había sido establecido previamente. Cada vez que se recibe la solicitud, incrementamos el valor y lo guardamos de vuelta en la sesión (para la siguiente vez que el usuario visita la página). La variable `num_visits` se envía entonces a la plantilla en nuestra variable de contexto.

> **Nota:** Aquí podríamos incluso revisar si el navegador soporta cookies (mira [Cómo usar sesiones](https://docs.djangoproject.com/en/1.10/topics/http/sessions/) para ejemplos) o diseñar nuestra UI de modo que no importe si el navegador soporta cookies o no.

Añade la línea que se ve al final del siguiente bloque a tu plantilla HTML principal (**/locallibrary/catalog/templates/index.html**) al final de la sección "Dynamic content" para desplegar la variable de contexto:

```django
<h2>Dynamic content</h2>

<p>The library has the following record counts:</p>
<ul>
  <li><strong>Books:</strong> \{{ num_books }}</li>
  <li><strong>Copies:</strong> \{{ num_instances }}</li>
  <li><strong>Copies available:</strong> \{{ num_instances_available }}</li>
  <li><strong>Authors:</strong> \{{ num_authors }}</li>
</ul>

<p>You have visited this page \{{ num_visits }}{% if num_visits == 1 %} time{% else %} times{% endif %}.</p>
```

Guarda tus cambios y reinicia el servidor de pruebas. Cada vez que refresques la página, el número se debería actualizar.

## Resumen

Ahora sabes lo fácil que es usar sesiones para mejorar tu interacción con usuarios _anónimos_.

En nuestros siguientes artículos explicaremos el framework de autenticación y autorización (permisos), y te mostraremos cómo soportar cuentas de usuario.

## Mira también

- [Cómo usar sesiones](https://docs.djangoproject.com/en/1.10/topics/http/sessions/) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/Authentication", "Learn/Server-side/Django")}}
