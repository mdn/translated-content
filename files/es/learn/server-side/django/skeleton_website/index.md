---
title: "Tutorial Django Parte 2: Creación del esqueleto del sitio web"
slug: Learn/Server-side/Django/skeleton_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}

Este segundo artículo de nuestro [Tutorial Django](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website) muestra cómo puedes crear un proyecto de "esqueleto" de sitio web como base, que puedes continuar luego llenado de configuraciones específicas del sitio, urls, modelos, vistas y plantillas.

<table>
  <tbody>
    <tr>
      <th scope="row">Pre-requisitos:</th>
      <td>
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Server-side/Django/development_environment"
          >Poner en marcha un entorno de desarrollo Django</a
        >. Repasar el
        <a
          href="/es/docs/Learn/Server-side/Django/Tutorial_local_library_website"
          >Tutorial Django</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Ser capaz de usar las herramientas de Django para empezar tus propios
          proyectos de sitios web nuevos.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Visión general

Este artículo muestra como puedes crear un sitio web "esqueleto", que puedes luego llenar con configuraciones específicas del sitio, urls, modelos, vistas y plantillas (trataremos ésto en artículos posteriores).

El proceso es sencillo:

1. Usar la herramienta `django-admin` para crear la carpeta del proyecto, los ficheros de plantillas básicos y el script de gestión del proyecto (**manage.py**).
2. Usar **manage.py** para crear una o más _aplicaciones_.

   > **Nota:** Un sitio web puede consistir de una o más secciones, ej. sitio principal, blog, wiki, area de descargas, etc. Django te recomienda encarecidamente que desarrolles estos componentes como _aplicaciones_ separadas que podrían ser reutilizadas, si se desea, en otros proyectos.

3. Registrar las nuevas aplicaciones para incluirlas en el proyecto.
4. Conectar el mapeador url de cada aplicación.

Para el [sitio web de la BibliotecaLocal](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website) la carpeta del sitio y la carpeta de su proyecto se llamarán _locallibrary_, y tendremos sólo una aplicación llamada _catalog_. El nivel más alto de la estructura de carpetas quedará por tanto como sigue:

```bash
locallibrary/         # Carpeta del sitio web
    manage.py         # Script para ejecutar las herramientas de Django para este proyecto (creadas usando django-admin)
    locallibrary/     # Carpeta del Sitio web/Proyecto (creada usando django-admin)
    catalog/          # Carpeta de la Aplicación (creada usando manage.py)
```

Las siguientes secciones abordan los pasos del proceso en detalle, y muestran cómo puedes comprobar los cambios. Al final de cada artículo trataremos alguna de los otros ajustes aplicables al sitio entero que deberías también efectuar en esta etapa.

## Creación del proyecto

En primer lugar abre una ventana de comandos/terminal, navega hasta donde quieres almacenar tus apps Django (hazlo en algún lugar que sea fácil de encontrar, como dentro de la carpeta de tus _documentos_), y crea una carpeta para tu nuevo sitio web (en este caso : _locallibrary_). Entra en el directorio a continuación usando el comando cd:

```bash
mkdir locallibrary
cd locallibrary
```

Crear el nuevo proyecto usando el comando `django-admin startproject` como se muestra, y navega luego dentro de la carpeta.

```bash
django-admin startproject locallibrary .
cd locallibrary
```

La herramienta `django-admin` crea una estructura de carpetas/ficheros como se muestra abajo:

```bash
locallibrary/
    manage.py
    locallibrary/
        settings.py
        urls.py
        wsgi.py
```

La subcarpeta del proyecto _locallibrary_ es el punto de entrada al sitio web:

- **settings.py** contiene todos los ajustes del sitio. Es donde registramos todas las aplicaciones que creamos, la localización de nuestros ficheros estáticos, los detalles de configuración de la base de datos, etc.
- **urls.py** define los mapeos url-vistas. A pesar de que éste podría contener _todo_ el código del mapeo url, es más común delegar algo del mapeo a las propias aplicaciones, como verás más tarde.
- **wsgi.py** se usa para ayudar a la aplicación Django a comunicarse con el servidor web. Puedes tratarlo como código base que puedes utilizar de plantilla.

El script **manage.py** se usa para crear aplicaciones, trabajar con bases de datos y empezar el desarrollo del servidor web.

## Creación de la aplicación catalog

A continuación, ejecuta el siguiente comando para crear la aplicación _catalog_ que vivirá dentro de nuestro proyecto locallibrary (éste debe ejecutarse en la misma carpeta que el **manage.py** de tu proyecto):

```bash
python3 manage.py startapp catalog
```

> **Nota:** el comando de arriba es para Linux/Mac OS X. En Windows el comando debería ser: `py -3 manage.py startapp catalog`Si estás trabajando en Windows, reemplaza `python3` por `py -3` a lo largo de este módulo o simplemente python: `python manage.py startapp catalog`.

La herramienta crea una nueva carpeta y la rellena con ficheros para las diferentes partes de la aplicación (mostradas en negrilla abajo). La mayoría de los ficheros se nombran de acuerdo a su propósito, para que sea má útil (ej. las vistas se deberán guardar en **views.py**, los Modelos en **models.py**, las pruebas en **tests.py**, la configuración del sitio de administración en **admin.py**, el registro de aplicaciones en **apps.py**) y contienen algo de código base mínimo para trabajar con los objetos asociados.

El directorio actualizado del proyecto debería tener ahora el aspecto siguiente:

```bash
locallibrary/
    manage.py
    locallibrary/
    catalog/
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        migrations/
```

Además ahora tenemos:

- Una carpeta _migrations_ que se utiliza para guardar las "migraciones"— ficheros que te permiten actualizar tus bases de datos a medida que modificas tus modelos.
- **\_\_init\_\_.py** — Un fichero vacío creado aquí para que Django/Python reconozca la carpeta como un [Paquete Python](https://docs.python.org/3/tutorial/modules.html#packages) y te permita usar sus objetos dentro de otras partes del proyecto.

> **Nota:** ¿Te has dado cuenta qué es lo que falta en la lista de ficheros de arriba? Si bien hay un lugar para que coloques tus vistas y modelos, no hay nada para que pongas los mapeos url, las plantillas y los ficheros estáticos. Te mostraremos cómo crearlos más adelante (éstos no se necesitan en todos los sitios web pero se necesitan en este ejemplo).

## Registro de la aplicación catalog

Ahora que se ha creado la aplicación tenemos que registrarla en el proyecto de manera que sea incluida cuando cualquiera de las herramientas se ejecute (por ejemplo, para añadir modelos a la base de datos). Las aplicaciones se registran añadiéndolas a la lista de `INSTALLED_APPS` en los ajustes del proyecto.

Abre el fichero de ajustes del proyecto **locallibrary/locallibrary/settings.py** y encuentra la definición de la lista `INSTALLED_APPS`. Añade a continuación una nueva linea al final de la lista, como se muestra en negrilla abajo.

```bash
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'catalog.apps.CatalogConfig',
]
```

La nueva linea especifica el objeto de configuración de la aplicación (`CatalogConfig`) que se generó para tí en **/locallibrary/catalog/apps.py** cuando creaste la aplicación.

> **Nota:** Te habrás fijado que hay ya un montón de otras `INSTALLED_APPS` (y `MIDDLEWARE`, más abajo en el fichero de ajustes). Éstas habilitan en soporte para el [Sitio de admistración Django](/es/docs/Learn/Server-side/Django/Admin_site) y como consecuencia el motón de la funcionalidad que usa (incluyendo sesiones, autenticación, etc).

## Especificación de la base de datos

Éste es también el punto donde normalmente especificarías la base de datos a utilizar en el proyecto — tiene sentido usar la misma base datos para desarrollo y producción donde sea posible, para evitar diferencias menores en el comportamiento. Puedes encontrar información sobre las diferentes opciones de bases de datos en [Databases](https://docs.djangoproject.com/en/2.0/ref/settings/#databases) (Django docs).

Nosotros usaremos la base de datos SQLite para este ejemplo, porque no esperamos que se requiera un montón de accesos concurrentes en una base de datos de demostración, y también ¡porque no requiere trabajo adicional para ponerla en marcha! Puedes ver cómo está configurada en **settings.py** (más información también se incluye abajo):

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
```

Debido a que usamos SQLite, no necesitamos hacer ningún ajuste adicional aquí. ¡Sigamos!

## Otros ajustes del proyecto

El fichero **settings.py** se usa para configurar muchos otros ajustes, pero en este punto probablemente sólo querrás cambiar la [TIME_ZONE](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-TIME_ZONE) — ésta debería ser igual a una cadena de la [Lista de base de datos tz de time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (la columna TZ column de la tabla contiene los valores que quieres). Cambia tu `TIME_ZONE` al valor de entre estas cadenas que sea apropiado para tu zona de tiempo, por ejemplo:

```python
TIME_ZONE = 'Europe/Madrid'
```

Hay otros dos otros ajustes que no cambiarás ahora, pero de los que deberías ser consciente:

- `SECRET_KEY`. Ésta es una clave secreta que se usa como parte de la estrategia de seguridad del sitio web de Django. Si no vas a proteger este código durante el desarrollo, necesitarás usar un código diferente (quizás leyendo de una variable de entorno o un fichero) cuando lo pongas en producción.
- `DEBUG`. Ésto habilita que los registros (logs) de depuración se muestren en caso de error, en vez de las respuestas con los códigos de estado HTTP. Éste debería ajustarse a `false` en producción, ya que la información de depuración es útil a los atacantes.

## Conectar el mapeador URL

El sitio web se crea con un fichero mapeador de URLs (**urls.py**) en la carpeta del proyecto. Aunque puedes usar este fichero para gestionar todos tus mapeos URL, es más usual deferir los mapeos a su aplicación asociada.

Abre **locallibrary/locallibrary/urls.py** y fíjate en el texto educativo que explica algunas formas de usar el mapeador URL.

```python
"""locallibrary URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

Los mapeos URL se gestionan a través de la variable `urlpatterns`, que es una _lista_ Python de funciones `path()`. Cada función `path()` o asocia un patrón URL a una _vista específica_, que se presentará cuando el patrón se empareja o con otra lista de código de comprobación de patrones URL (en este segundo caso, los patrones se convierten en la "URL base" de patrones definidos en el módulo destino). La lista `urlpatterns` define inicialmente una función que mapea todos los URLs con el patrón _admin/_ al módulo `admin.site.urls` , que contiene las definiciones de mapeos URL propios de la aplicación de Administración.

> **Nota:** La ruta en `path()` es una cadena que define un patrón URL para emparejar. Esta cadena podría incluir una variable nombrada (entre paréntesis angulares), ej. `'catalog/<id>/'`. Este patrón emparejará con una URL como **/catalog/**_any_chars_**/** y pasará a la vista _any_chars_ como cadena asociada al parámetro de nombre `id`). Trataremos de los métodos de caminos y rutas de patrones más adelante en los últimos temas.

Añade las lineas de abajo al final del fichero para añadir un nuevo elemento a la lista `urlpatterns`. Este nuevo elemento incluye un `path()` que redirige las peticiones con el patrón `catalog/` al módulo `catalog.urls` (el fichero con el URL relativo **/catalog/urls.py**).

```python
# Use include() to add paths from the catalog application
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

Ahora redirijamos la URL raíz de nuestro sitio (ej. `127.0.0.1:8000`) al URL `127.0.0.1:8000/catalog/`; esta es la única app que usaremos en este proyecto, así que es lo que deberíamos hacer. Para hacer esto, usaremos una función especial (`RedirectView`), que toma como su primer argumento la nueva URL relativa a redirigir a (`/catalog/`) cuando el patrón URL especificado en la función `path()` se empareja (la URL raíz, en este caso).

Añade las siguientes líneas, otra vez al final del fichero:

```python
#Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='/catalog/', permanent=True)),
]
```

Deja el primer parámetro de la función path vacío, para implicar '/'. Si escribes el primer parámetro como '/' Django te dará la siguiente advertencia cuando arranque el servidor de desarrollo:

_La comprobación del sistema encontró algunos problemas:_

```
WARNINGS:
?: (urls.W002) Tu patrón URL '/' tiene una ruta que empieza con una '/'.
Quita esta barra invertida ya que es inncesaria.
Si este patrón figura como destino en un include(), asegúrate que el patrón include() tiene un '/' final.
```

Django no sirve ficheros estáticos como CSS, JavaScript e imágenes por defecto, pero puede ser útil para el servidor web de desarrollo hacerlo así mientras creas tu sitio. Como adición final a este mapeador URL, puedes habilitar el servicio de ficheros estáticos durante el desarrollo añadiendo las líneas siguientes.

Añade ahora el siguiente bloque final al final del fichero:

```python
# Use static() to add url mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> **Nota:** Hay numerosas formas de extender la lista `urlpatterns` (arriba hemos añadido simplemente un nuevo elemento a la lista usando el operador `+=` para separar claramente el código antiguo y el nuevo). En vez de ello podríamos haber simplemente incluido este nuevo patrón de mapeo en la definición de la lista original:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('/', RedirectView.as_view(url='/catalog/', permanent=True)),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```
>
> Además, hemos incluido la linea import (`from django.urls import include`) con el código que la usa (de manera que sea fácil ver qué hemos añadido), pero es común incluir todas tus líneas import al principio del fichero Python.

Como paso final, crea un fichero dentro de tu carpeta catalog llamado **urls.py**, y añade el siguiente texto para definir la `urlpatterns` importada (vacía). Éste es donde añadimos nuestros patrones a medida que construimos la aplicación.

```python
from django.conf.urls import url

from . import views


urlpatterns = [

]
```

## Prueba del framework del sitio web

En este punto tenemos un proyecto de esqueleto completo. El sitio web _no hace_ realmente nada todavía, pero merece la pena ejecutarlo para estar seguros de que ninguno de nuestros cambios no han roto nada.

Antes de hacerlo, deberíamos primero ejecutar una _migración de la base de datos_. Ésto actualiza nuestra base de datos para incluir todos los modelos de nuestras aplicaciones instaladas (y eliminar algunas advertencias de construcción).

### Ejecución de migraciones de la base de datos

Django usa un Object-Relational-Mapper (ORM) para mapear las definiciones de Modelos en el código Django con la estructura de datos utilizada por la base de datos subyacente. A medida que cambiamos nuestras definiciones de modelos, Django sigue la pista a los cambios y puede crear scripts de migración de la base de datos (en **/locallibrary/catalog/migrations/**) para migrar automáticamente la estructura de datos subyacente en el base de datos para igualarse al modelo.

Cuando creamos el sitio web de Django añadimos automáticamente unos cuantos modelos para que ser usados por la sección de administración del sitio (al que echaremos un vistazo más tarde). Ejecuta los siguientes comandos para definir tablas para esos modelos de la base (asegúrate que estás en el directorio que contiene **manage.py**):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> **Advertencia:** Necesitarás ejecutar los comandos de arriba cada vez que cambien tus modelos de una manera que afecte a la estructura de datos y necesite ser guardada (incluyendo tanto la adicción como la eliminación de modelos enteros o campos individuales).

El comando `makemigrations` _crea_ (pero no aplica) las migraciones para todas las aplicaciones instaladas en tu proyecto (también puedes especificar el nombre de una aplicación para ejecutar una migración para un sólo proyecto). Ésto te da la opoortunidad de comprobar el código para estas migraciones antes de que se apliquen — cuando seas un experto en Django ¡podrás elegir modificarlos ligeramente!

El comando `migrate` aplica realmente las migraciones a tu base de datos (Django lleva la cuenta de cuáles han sido añadidas a la base de datos actual).

> **Nota:** Mira en [Migrations](https://docs.djangoproject.com/en/2.0/topics/migrations/) (Django docs) para obtener información adicional sobre los comandos de migración menos usados.

### Arrancando el sitio web

Durante el desarrollo puedes probar el sitio web usando para servirlo el _servidor de desarrollo web_, y visualizádolo en tu explorador web local.

> **Nota:** el servidor web de desarrollo no es robusto y sin suficientes prestaciones para su uso en producción, pero es una manera muy fácil de tener levantado y funcionando tu sitio web Django durante el desarrollo para hacerle una prueba rápida y conveniente. Por defecto servirá el sitio a tu computadora local (`http://127.0.0.1:8000/)`, pero puedes también especificar que se sirva a otras computdoras en tu red. Para más información ver [django-admin y manage.py: runserver](https://docs.djangoproject.com/en/2.0/ref/django-admin/#runserver) (Django docs).

Ejecuta el _servidor web de desarrollo_ llamando al comando `runserver` (en el mismo directorio donde está **manage.py**):

```bash
python3 manage.py runserver

 Performing system checks...

 System check identified no issues (0 silenced).
 September 22, 2016 - 16:11:26
 Django version 1.10, using settings 'locallibrary.settings'
 Starting development server at http://127.0.0.1:8000/
 Quit the server with CTRL-BREAK.
```

Una vez que el servidor está funcionando puedes ver el sitio navegando a `http://127.0.0.1:8000/` en tu explorador local. Deberías ver una página de error del sitio que tiene el siguiente aspecto:

![Django Debug page for Django 2.0](django_404_debug_page.png)

¡No te preocupes! Esta página de error es lo esperado porque no tenemos ninguna página/url definidas en el módulo `catalogs.urls` (que es al que nos redirigimos cuando obtenemos la URL a la raíz del sitio).

> **Nota:** La página superior demuestra una gran característica de Django— El registro de depuración automático. Cada vez que una página no pueda ser encontrada, o el código provoque un error cualquiera, se mostrará una pantalla de error con información útil. En este caso vemos que la URL que hemos suministrado no empareja con ninguno de nuestros patrones de URL (como los listados). El resgistro de depuración puede desconectarse durante la producción (cuando colocamos el sitio en vivo en la Web), en cuyo caso se servirá una página menos informativa pero más amigable.

¡En este punto ya sabemos que Django está funcionando!

> **Nota:** Deberías volver a ejecutar las migraciones y volver a probar el sitio cada vez que hagas cambios significativos. ¡No lleva tanto tiempo!

## Desafíate a tí mismo

El directorio **catalog/** contiene ficheros para las vistas, modelos y otras partes de la aplicación. Abre estos ficheros e inspecciona el código base.

Como has visto arriba, se ha añadido ya un mapeo de URLs para el sitio de administración en el fichero del proyecto **urls.py**. Navega al área de adminsitración en tu explorador y mira qué sucede (puedes inferir el URL correcto de los mapeos de arriba).

## Sumario

ahora ya has creado un proyecto de esqueleto completo de sitio web, con el que puedes continuar rellenando con urls, modelos, vistas y plantillas.

Ahora que el esqueleto del [sitio web de la BibliotecaLocal](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website) está completo y funcionando, es hora de empezar a escribir el código que hace que este sitio haga lo que se supone que debe hacer.

## Ver también

- [Escribiendo tu primera aplicación Django - parte 1](https://docs.djangoproject.com/en/2.0/intro/tutorial01/) (Django docs)
- [Aplicaciones](https://docs.djangoproject.com/en/2.0/ref/applications/#configuring-applications) (Django Docs). Contiene información sobre cómo configurar aplicaciones.

{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}
