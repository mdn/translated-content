---
title: "Tutorial de Django parte 2: Crear un sitio web esqueleto"
short-title: "2: Sitio web esqueleto"
slug: Learn_web_development/Extensions/Server-side/Django/skeleton_website
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}

Este segundo artículo de nuestro [Tutorial de Django](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) muestra cómo crear un proyecto de sitio web "esqueleto" como base, que luego podrás completar con configuraciones específicas del sitio, rutas, modelos, vistas y plantillas.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        <a href="/es/docs/Learn_web_development/Extensions/Server-side/Django/development_environment">Configura un entorno de desarrollo de Django</a>.
        Repasa el <a href="/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website">Tutorial de Django</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Poder usar las herramientas de Django para iniciar tus propios proyectos de sitios web.
      </td>
    </tr>
  </tbody>
</table>

## Visión general

Este artículo muestra cómo crear un sitio web "esqueleto", que luego podrás completar con configuraciones específicas del sitio, rutas, modelos, vistas y plantillas (hablaremos de esto en artículos posteriores).

Para empezar:

1. Usa la herramienta `django-admin` para generar una carpeta de proyecto, las plantillas de archivo básicas y **manage.py**, que sirve como script de gestión de tu proyecto.
2. Usa **manage.py** para crear una o más _aplicaciones_.

   > [!NOTE]
   > Un sitio web puede constar de una o más secciones. Por ejemplo, sitio principal, blog, wiki, área de descargas, etc. Django te anima a desarrollar estos componentes como _aplicaciones_ separadas, que luego podrían reutilizarse en diferentes proyectos si se desea.

3. Registra las nuevas aplicaciones para incluirlas en el proyecto.
4. Conecta el asignador de **url/ruta** para cada aplicación.

En el caso del [sitio web Local Library](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), las carpetas del sitio web y del proyecto se llaman _locallibrary_, e incluyen una aplicación llamada _catalog_.
La estructura de carpetas de nivel superior será entonces la siguiente:

```bash
locallibrary/         # Carpeta del sitio web
    manage.py         # Script para ejecutar las herramientas de Django para este proyecto (creado con django-admin)
    locallibrary/     # Carpeta del sitio web/proyecto (creada con django-admin)
    catalog/          # Carpeta de la aplicación (creada con manage.py)
```

Las siguientes secciones explican los pasos del proceso en detalle y muestran cómo puedes probar tus cambios.
Al final de este artículo, hablaremos de otras configuraciones a nivel de sitio que también podrías hacer en esta etapa.

## Creación del proyecto

Para crear el proyecto:

1. Abre un shell de comandos (o una ventana de terminal), y asegúrate de estar en tu [entorno virtual](/es/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#uso_de_un_entorno_virtual).
2. Navega hasta la carpeta donde quieres crear tu aplicación de biblioteca local (más adelante la moveremos a la carpeta "django_local_library" que [creaste como un repositorio local de GitHub](/es/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) al configurar el entorno de desarrollo).
3. Crea el nuevo proyecto usando el comando `django-admin startproject` como se muestra, y luego navega a la carpeta del proyecto:

   ```bash
   django-admin startproject locallibrary
   cd locallibrary
   ```

   La herramienta `django-admin` crea una estructura de carpetas/archivos como la siguiente:

   ```bash
   locallibrary/
       manage.py
       locallibrary/
           __init__.py
           settings.py
           urls.py
           wsgi.py
           asgi.py
   ```

La subcarpeta del proyecto _locallibrary_ es el punto de entrada del sitio web:

- **\_\_init\_\_.py** es un archivo vacío que le indica a Python que trate este directorio como un paquete de Python.
- **settings.py** contiene toda la configuración del sitio web, incluido el registro de cualquier aplicación que creemos, la ubicación de nuestros archivos estáticos, los detalles de configuración de la base de datos, etc.
- **urls.py** define las asignaciones de URL a vista del sitio. Aunque podría contener _todo_ el código de asignación de URL, es más común delegar algunas de las asignaciones a aplicaciones concretas, como verás más adelante.
- **wsgi.py** se usa para ayudar a que tu aplicación Django se comunique con el servidor web. Puedes tratarlo como código repetitivo (boilerplate).
- **asgi.py** es un estándar para que las aplicaciones y servidores web asíncronos de Python se comuniquen entre sí. Asynchronous Server Gateway Interface (ASGI) es el sucesor asíncrono de Web Server Gateway Interface (WSGI). ASGI proporciona un estándar tanto para aplicaciones Python asíncronas como síncronas, mientras que WSGI solo proporcionaba un estándar para aplicaciones síncronas. ASGI es compatible con versiones anteriores de WSGI y admite múltiples servidores y frameworks de aplicaciones.

El script **manage.py** se usa para crear aplicaciones, trabajar con bases de datos e iniciar el servidor web de desarrollo.

## Creación de la aplicación catalog

A continuación, ejecuta el siguiente comando para crear la aplicación _catalog_ que vivirá dentro de nuestro proyecto _locallibrary_. Asegúrate de ejecutar este comando desde la misma carpeta donde está el **manage.py** de tu proyecto:

```bash
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog
```

> [!NOTE]
> El resto del tutorial usa la sintaxis de Linux/macOS.
> Si estás trabajando en Windows, allí donde veas un comando que empieza con `python3` deberías usar `py` (o `py -3`) en su lugar.

La herramienta crea una nueva carpeta y la rellena con archivos para las distintas partes de la aplicación (mostrado en el siguiente ejemplo).
La mayoría de los archivos llevan el nombre según su propósito (por ejemplo, las vistas deben guardarse en **views.py**, los modelos en **models.py**, las pruebas en **tests.py**, la configuración del sitio de administración en **admin.py**, el registro de la aplicación en **apps.py**) y contienen algo de código repetitivo mínimo para trabajar con los objetos asociados.

El directorio del proyecto actualizado debería verse ahora así:

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

Además, ahora tenemos:

- Una carpeta _migrations_, usada para almacenar "migraciones" — archivos que te permiten actualizar automáticamente tu base de datos a medida que modificas tus modelos.
- **\_\_init\_\_.py** — un archivo vacío creado aquí para que Django/Python reconozca la carpeta como un [paquete de Python](https://docs.python.org/3/tutorial/modules.html#packages) y te permita usar sus objetos dentro de otras partes del proyecto.

> [!NOTE]
> ¿Has notado qué falta en la lista de archivos de arriba? Aunque hay un lugar para tus vistas y modelos, no hay ningún sitio para poner tus asignaciones de URL, plantillas y archivos estáticos. Te mostraremos cómo crearlos más adelante (no se necesitan en todos los sitios web, pero sí en este ejemplo).

## Registro de la aplicación catalog

Ahora que la aplicación ha sido creada, tenemos que registrarla en el proyecto para que se incluya cuando se ejecute cualquier herramienta (como agregar modelos a la base de datos, por ejemplo). Las aplicaciones se registran añadiéndolas a la lista `INSTALLED_APPS` en la configuración del proyecto.

Abre el archivo de configuración del proyecto, **django-locallibrary-tutorial/locallibrary/settings.py**, y busca la definición de la lista `INSTALLED_APPS`. Luego añade una nueva línea al final de la lista, como se muestra a continuación:

```bash
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Añade nuestra nueva aplicación
    'catalog.apps.CatalogConfig', # Este objeto fue creado para nosotros en /catalog/apps.py
]
```

La nueva línea especifica el objeto de configuración de la aplicación (`CatalogConfig`) que se generó para ti en **/django-locallibrary-tutorial/catalog/apps.py** cuando creaste la aplicación.

> [!NOTE]
> Notarás que ya hay muchas otras `INSTALLED_APPS` (y `MIDDLEWARE`, más abajo en el archivo de configuración). Estas habilitan el soporte para el [sitio de administración de Django](/es/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) y la funcionalidad que usa (incluyendo sesiones, autenticación, etc.).

## Especificar la base de datos

Este es también el punto en el que normalmente especificarías la base de datos que se usará para el proyecto. Tiene sentido usar la misma base de datos para desarrollo y producción siempre que sea posible, para evitar pequeñas diferencias de comportamiento. Puedes conocer las distintas opciones en [Databases](https://docs.djangoproject.com/en/5.0/ref/settings/#databases) (documentación de Django).

Usaremos la base de datos SQLite por defecto para la mayor parte de este ejemplo, porque no esperamos necesitar mucho acceso concurrente en una base de datos de demostración, ¡y no requiere trabajo adicional para configurarla! Puedes ver cómo está configurada esta base de datos en **settings.py**:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Más adelante, en [Desplegar Django a producción](/es/docs/Learn_web_development/Extensions/Server-side/Django/Deployment), también te mostraremos cómo configurar una base de datos Postgres, que podría ser más adecuada para sitios más grandes.

## Otras configuraciones del proyecto

El archivo **settings.py** también se usa para configurar otras opciones, pero en este punto probablemente solo quieras cambiar [TIME_ZONE](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-TIME_ZONE) — debe corresponder a una cadena de la [lista estándar de zonas horarias de la base de datos tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (la columna TZ de la tabla contiene los valores que necesitas). Cambia el valor de `TIME_ZONE` por una de estas cadenas apropiada para tu zona horaria, por ejemplo:

```python
TIME_ZONE = 'Europe/London'
```

Hay otras dos configuraciones que no vas a cambiar ahora, pero que deberías conocer:

- `SECRET_KEY`. Es una clave secreta que se usa como parte de la estrategia de seguridad del sitio web de Django. Si no proteges este código en desarrollo, necesitarás usar un código distinto (quizás leído desde una variable de entorno o un archivo) al ponerlo en producción.
- `DEBUG`. Esto habilita que se muestren registros de depuración cuando ocurre un error, en lugar de códigos de estado HTTP. Esto debería establecerse en `False` en producción, ya que la información de depuración es útil para los atacantes, pero por ahora podemos dejarlo en `True`.

## Conexión del asignador de URL

El sitio web se crea con un archivo asignador de URL (**urls.py**) en la carpeta del proyecto. Aunque puedes usar este archivo para gestionar todas tus asignaciones de URL, es más habitual delegar las asignaciones a la aplicación correspondiente.

Abre **django-locallibrary-tutorial/locallibrary/urls.py** y observa el texto instructivo que explica algunas de las formas de usar el asignador de URL.

```python
"""
URL configuration for locallibrary project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLConf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

Las asignaciones de URL se gestionan mediante la variable `urlpatterns`, que es una _lista_ de Python de funciones `path()`. Cada función `path()` asocia un patrón de URL con una _vista específica_, que se mostrará cuando el patrón coincida, o con otra lista de código de comprobación de patrones de URL (en este segundo caso, el patrón se convierte en la "URL base" para los patrones definidos en el módulo de destino). La lista `urlpatterns` define inicialmente una única función que asigna todas las URL con el patrón _admin/_ al módulo `admin.site.urls`, que contiene las propias definiciones de asignación de URL de la aplicación de Administración.

> [!NOTE]
> La ruta en `path()` es una cadena que define un patrón de URL a comparar. Esta cadena puede incluir una variable con nombre (entre corchetes angulares), por ejemplo, `'catalog/<id>/'`. Este patrón coincidirá con una URL como **catalog/_any_chars_/** y pasará _`any_chars`_ a la vista como una cadena con el nombre de parámetro `id`. Hablaremos de los métodos de path y los patrones de ruta con más detalle en temas posteriores.

Para añadir un nuevo elemento a la lista `urlpatterns`, añade las siguientes líneas al final del archivo. Este nuevo elemento incluye un `path()` que reenvía las solicitudes con el patrón `catalog/` al módulo `catalog.urls` (el archivo con la URL relativa **catalog/urls.py**).

```python
# Usa include() para añadir rutas desde la aplicación catalog
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Ten en cuenta que hemos incluido la línea de importación (`from django.urls import include`) junto con el código que la usa (para que sea fácil ver qué hemos añadido), pero es común incluir todas tus líneas de importación al principio de un archivo Python.

Ahora vamos a redirigir la URL raíz de nuestro sitio (es decir, `127.0.0.1:8000`) a la URL `127.0.0.1:8000/catalog/`. Esta es la única aplicación que usaremos en este proyecto. Para hacer esto, usaremos una función de vista especial, `RedirectView`, que toma la nueva URL relativa a la que redirigir (`/catalog/`) como su primer argumento cuando se cumple el patrón de URL especificado en la función `path()` (la URL raíz, en este caso).

Añade las siguientes líneas al final del archivo:

```python
# Añade asignaciones de URL para redirigir la URL base a nuestra aplicación
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='catalog/', permanent=True)),
]
```

Deja el primer parámetro de la función path vacío para implicar '/'. Si escribes el primer parámetro como '/', Django te mostrará la siguiente advertencia cuando inicies el servidor de desarrollo:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django no sirve archivos estáticos como CSS, JavaScript e imágenes por defecto, pero puede ser útil que el servidor web de desarrollo lo haga mientras estás creando tu sitio. Como último añadido a este asignador de URL, puedes habilitar el servicio de archivos estáticos durante el desarrollo agregando las siguientes líneas.

Añade ahora el siguiente bloque final al final del archivo:

```python
# Usa static() para añadir la asignación de URL que sirve archivos estáticos solo durante el desarrollo
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> [!NOTE]
> Hay varias formas de extender la lista `urlpatterns` (anteriormente, simplemente añadimos un nuevo elemento usando el operador `+=` para separar claramente el código antiguo del nuevo). En su lugar, podríamos haber incluido este nuevo mapa de patrones directamente en la definición de la lista original:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='catalog/')),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```

Como paso final, crea un archivo dentro de tu carpeta _catalog_ llamado **urls.py**, y añade el siguiente texto para definir el `urlpatterns` importado (vacío). Aquí es donde añadiremos nuestros patrones a medida que construyamos la aplicación.

```python
from django.urls import path
from . import views

urlpatterns = [

]
```

## Prueba del framework del sitio web

En este punto tenemos un proyecto esqueleto completo. El sitio web todavía no _hace_ nada en realidad, pero merece la pena ejecutarlo para asegurarnos de que ninguno de nuestros cambios ha roto nada.

Antes de hacer eso, primero deberíamos ejecutar una _migración de base de datos_. Esto actualiza nuestra base de datos (para incluir cualquier modelo de nuestras aplicaciones instaladas) y elimina algunas advertencias de compilación.

### Ejecución de migraciones de base de datos

Django usa un Mapeador Objeto-Relacional (ORM) para asignar las definiciones de modelos en el código de Django a la estructura de datos usada por la base de datos subyacente. A medida que cambiamos nuestras definiciones de modelos, Django rastrea los cambios y puede crear scripts de migración de base de datos (en **/django-locallibrary-tutorial/catalog/migrations/**) para migrar automáticamente la estructura de datos subyacente en la base de datos y que coincida con el modelo.

Cuando creamos el sitio web, Django añadió automáticamente varios modelos para su uso por la sección de administración del sitio (que veremos más adelante). Ejecuta los siguientes comandos para definir tablas para esos modelos en la base de datos (asegúrate de estar en el directorio que contiene **manage.py**):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> [!WARNING]
> Necesitarás ejecutar estos comandos cada vez que tus modelos cambien de una forma que afecte a la estructura de los datos que se necesita almacenar (incluyendo tanto la adición como la eliminación de modelos completos y de campos individuales).

El comando `makemigrations` _crea_ (pero no aplica) las migraciones para todas las aplicaciones instaladas en tu proyecto. También puedes especificar el nombre de la aplicación para ejecutar una migración solo para una aplicación en concreto. Esto te da la oportunidad de revisar el código de estas migraciones antes de que se apliquen. ¡Si eres un experto en Django, puedes optar por ajustarlas ligeramente!

El comando `migrate` es el que aplica las migraciones a tu base de datos. Django rastrea cuáles se han añadido a la base de datos actual.

> [!NOTE]
> Deberías volver a ejecutar las migraciones y volver a probar el sitio siempre que hagas cambios significativos. ¡No lleva mucho tiempo!
>
> Consulta [Migrations](https://docs.djangoproject.com/en/5.0/topics/migrations/) (documentación de Django) para obtener información adicional sobre los comandos de migración menos usados.

### Ejecución del sitio web

Durante el desarrollo, puedes servir el sitio web primero usando el _servidor web de desarrollo_, y luego verlo en tu navegador web local.

> [!NOTE]
> El servidor web de desarrollo no es lo suficientemente robusto ni eficiente para uso en producción, pero es una forma muy sencilla de poner en marcha tu sitio web Django durante el desarrollo y hacerle una prueba rápida y cómoda. Por defecto servirá el sitio a tu computadora local (`http://127.0.0.1:8000/)`, pero también puedes especificar otras computadoras de tu red a las que servir. Para más información, consulta [django-admin and manage.py: runserver](https://docs.djangoproject.com/en/5.0/ref/django-admin/#runserver) (documentación de Django).

Ejecuta el _servidor web de desarrollo_ llamando al comando `runserver` (en el mismo directorio que **manage.py**):

```bash
python3 manage.py runserver
```

Una vez que el servidor esté en ejecución, puedes ver el sitio navegando a `http://127.0.0.1:8000/` en tu navegador web local. Deberías ver una página de error del sitio que se parece a esta:

![Página de depuración de Django (Django 4.2)](django_404_debug_page.png)

¡No te preocupes! Esta página de error es esperada porque no tenemos ninguna página/URL definida en el módulo `catalog.urls` (al que somos redirigidos cuando llegamos a la URL raíz del sitio).

En este punto, ¡sabemos que Django está funcionando!

> [!NOTE]
> La página de ejemplo demuestra una gran característica de Django — el registro automático de depuración. Cada vez que no se puede encontrar una página, Django muestra una pantalla de error con información útil o cualquier error generado por el código. En este caso, podemos ver que la URL que hemos proporcionado no coincide con ninguno de nuestros patrones de URL (tal como se listan). El registro de depuración se desactiva en producción (que es cuando ponemos el sitio en marcha en la Web), en cuyo caso se servirá una página menos informativa pero más amigable para el usuario.

## No olvides hacer una copia de seguridad en GitHub

Acabamos de hacer un trabajo importante, así que ahora es un buen momento para hacer una copia de seguridad del proyecto usando GitHub.

Primero mueve el _contenido_ de la carpeta de nivel superior **locallibrary** a la carpeta **django_local_library** que [creaste como un repositorio local de GitHub](/es/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) al configurar el entorno de desarrollo.
Esto incluirá **manage.py**, la subcarpeta **locallibrary**, la subcarpeta **catalog**, y cualquier otra cosa dentro de la carpeta de nivel superior.

Luego añade y confirma (commit) los cambios en la carpeta **django_local_library** y súbelos a GitHub.
Desde la raíz de esa carpeta, puedes usar un conjunto de comandos similar a los de la sección [Modificar y sincronizar cambios](/es/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) del tema _Entorno de desarrollo_:

```bash
# Obtén el código fuente actual de GitHub en la rama main
git checkout main
git pull origin main

# Crea una rama y añade/confirma el esqueleto de tu app recién creada
git checkout -b skeleton_website # Crea y activa una nueva rama "skeleton_website"
git add -A # Añade todos los archivos modificados al área de preparación
git commit -m "Create Skeleton framework for LocalLibrary" # Confirma los archivos modificados

# Sube la rama a GitHub
git push origin skeleton_website
```

Luego crea y fusiona un PR desde tu repositorio de GitHub.
Después de fusionarlo puedes volver a la rama `main` y descargar tus cambios desde GitHub:

```bash
git checkout main
git pull origin main
```

> [!NOTE]
> Si no eliminas la rama `skeleton_website`, siempre podrás volver a ella más adelante.

No necesariamente volveremos a mencionar esto en el futuro, pero puede que te resulte útil actualizar GitHub con tus cambios al final de cada sección de este tutorial.

## Ponte a prueba

El directorio **catalog/** contiene archivos para las vistas, modelos y otras partes de la aplicación. Abre estos archivos e inspecciona el código repetitivo (boilerplate).

Como viste anteriormente, ya se ha añadido una asignación de URL para el sitio de Administración en el **urls.py** del proyecto. Navega al área de administración en tu navegador y observa qué sucede (puedes deducir la URL correcta a partir de la asignación).

## Resumen

Ahora has creado un proyecto de sitio web esqueleto completo, que puedes continuar rellenando con URL, modelos, vistas y plantillas.

Ahora que el esqueleto del [sitio web Local Library](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) está completo y funcionando, es hora de empezar a escribir el código que hace que este sitio web haga lo que se supone que debe hacer.

## Véase también

- [Writing your first Django app - part 1](https://docs.djangoproject.com/en/5.0/intro/tutorial01/) (documentación de Django)
- [Applications](https://docs.djangoproject.com/en/5.0/ref/applications/#configuring-applications) (documentación de Django).
  Contiene información sobre cómo configurar aplicaciones.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}
