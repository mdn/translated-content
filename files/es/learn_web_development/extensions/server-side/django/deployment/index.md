---
title: "Tutorial de Django Parte 11: Desplegando Django a producción"
short-title: "11: Despliegue"
slug: Learn_web_development/Extensions/Server-side/Django/Deployment
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}

Ya has creado y probado un sitio web de ejemplo usando Django, así que ahora es momento de instalarlo en un servidor web para que cualquiera pueda acceder a él a través de Internet.
Esta página describe cómo alojar un proyecto Django y qué necesitas preparar en tu sitio para un despliegue en producción.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Completa todos los temas anteriores del tutorial, incluyendo <a href="/es/docs/Learn_web_development/Extensions/Server-side/Django/Testing">Tutorial de Django Parte 10: Probando una aplicación web Django</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprender dónde y cómo puedes desplegar una aplicación Django en producción.</td>
    </tr>
  </tbody>
</table>

## Visión general

Una vez que tu sitio esté terminado (o lo suficientemente terminado como para empezar las pruebas públicas), vas a necesitar alojarlo en algún lugar más público y accesible que tu ordenador personal de desarrollo.

Hasta ahora has estado trabajando en un entorno de desarrollo, usando el servidor web de desarrollo de Django para compartir tu sitio con el navegador/red local, y ejecutando tu sitio web con configuraciones de desarrollo (inseguras) que exponen la depuración y otra información privada. Antes de poder alojar un sitio web externamente, primero tendrás que:

- Hacer algunos cambios en la configuración de tu proyecto.
- Elegir un entorno para alojar la aplicación Django.
- Elegir un entorno para alojar cualquier archivo estático.
- Configurar una infraestructura de nivel de producción para servir tu sitio web.

Este tutorial ofrece algunas indicaciones sobre tus opciones para elegir un sitio de alojamiento, una breve descripción general de lo que necesitas hacer para preparar tu aplicación Django para producción, y un ejemplo práctico de cómo instalar el sitio web LocalLibrary en el servicio de alojamiento en la nube [Railway](https://railway.com/).

## ¿Qué es un entorno de producción?

El entorno de producción es el entorno proporcionado por el servidor en el que ejecutarás tu sitio web para su consumo externo. El entorno incluye:

- Hardware del ordenador en el que se ejecuta el sitio web.
- Sistema operativo (p. ej., Linux, Windows).
- El runtime del lenguaje de programación y las librerías del framework sobre las que está escrito tu sitio web.
- Servidor web utilizado para servir páginas y otro contenido (p. ej., Nginx, Apache).
- Servidor de aplicaciones que transmite solicitudes "dinámicas" entre tu sitio web Django y el servidor web.
- Bases de datos de las que depende tu sitio web.

> [!NOTE]
> Dependiendo de cómo esté configurado tu entorno de producción, también podrías disponer de un proxy inverso, un balanceador de carga, etc.

El servidor podría estar ubicado en tus propias instalaciones y conectado a Internet mediante un enlace rápido, pero es mucho más común usar un ordenador alojado "en la nube". Lo que esto realmente significa es que tu código se ejecuta en algún ordenador remoto (o posiblemente un ordenador "virtual") en el/los centro(s) de datos de tu proveedor de hosting. El servidor remoto normalmente ofrecerá un cierto nivel garantizado de recursos de computación (CPU, RAM, memoria de almacenamiento, etc.) y de conectividad a Internet por un precio determinado.

A este tipo de hardware de computación/redes accesible de forma remota se le denomina _Infraestructura como Servicio (IaaS)_. Muchos proveedores de IaaS ofrecen la opción de preinstalar un sistema operativo concreto, sobre el cual debes instalar el resto de componentes de tu entorno de producción. Otros proveedores te permiten seleccionar entornos más completos, que pueden incluir una configuración completa de Django y del servidor web.

> [!NOTE]
> Los entornos preconfigurados pueden hacer que configurar tu sitio web sea muy sencillo, porque reducen la configuración necesaria, pero las opciones disponibles pueden limitarte a un servidor (u otros componentes) poco conocido, y pueden estar basadas en una versión antigua del sistema operativo. A menudo es mejor instalar tú mismo los componentes, de modo que obtengas los que quieres, y cuando necesites actualizar partes del sistema, tengas alguna idea de por dónde empezar.

Otros proveedores de hosting dan soporte a Django como parte de una oferta de _Plataforma como Servicio_ (PaaS). En este tipo de hosting no necesitas preocuparte de la mayor parte de tu entorno de producción (servidor web, servidor de aplicaciones, balanceadores de carga), ya que la plataforma de hosting se encarga de todo ello por ti, junto con la mayor parte de lo que necesitas hacer para escalar tu aplicación.
Esto hace que el despliegue sea bastante sencillo, porque solo necesitas concentrarte en tu aplicación web y no en el resto de la infraestructura del servidor.

Algunos desarrolladores elegirán la mayor flexibilidad que ofrece IaaS frente a PaaS, mientras que otros apreciarán la menor carga de mantenimiento y la mayor facilidad de escalado de PaaS. Cuando estás empezando, configurar tu sitio web en un sistema PaaS es mucho más sencillo, así que eso es lo que haremos en este tutorial.

> [!NOTE]
> Si eliges un proveedor de hosting orientado a Python/Django, debería proporcionar instrucciones sobre cómo configurar un sitio web Django usando distintas configuraciones de servidor web, servidor de aplicaciones, proxy inverso, etc. (esto no será relevante si eliges una PaaS). Por ejemplo, hay muchas guías paso a paso para distintas configuraciones en la [documentación de la comunidad Django de DigitalOcean](https://www.digitalocean.com/community/tutorials?q=django).

## Eligiendo un proveedor de hosting

Existen muchos proveedores de hosting de los que se sabe que dan soporte activo o funcionan bien con Django, entre ellos: [Heroku](https://www.heroku.com/), [DigitalOcean](https://www.digitalocean.com/), [Railway](https://railway.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us), [Google Cloud](https://cloud.google.com/), [Hetzner](https://www.hetzner.com/) y [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), por nombrar solo algunos.
Estos proveedores ofrecen diferentes tipos de entornos (IaaS, PaaS), y distintos niveles de recursos de computación y red a distintos precios.

Algunas de las cosas a tener en cuenta al elegir un host:

- Qué tan concurrido es probable que esté tu sitio y el coste de los recursos de datos y de computación necesarios para satisfacer esa demanda.
- El nivel de soporte para escalar horizontalmente (añadiendo más máquinas) y verticalmente (pasando a máquinas más potentes), y el coste de hacerlo.
- Dónde tiene el proveedor sus centros de datos, y por tanto, desde dónde el acceso será probablemente más rápido.
- El historial de disponibilidad e indisponibilidad del proveedor.
- Las herramientas proporcionadas para gestionar el sitio: si son fáciles de usar y si son seguras (p. ej., SFTP frente a FTP).
- Frameworks integrados para monitorizar tu servidor.
- Limitaciones conocidas. Algunos proveedores bloquean deliberadamente ciertos servicios (p. ej., el correo electrónico). Otros ofrecen solo una determinada cantidad de horas de "tiempo activo" en algunos niveles de precio, o solo ofrecen una pequeña cantidad de almacenamiento.
- Beneficios adicionales. Algunos proveedores ofrecen nombres de dominio gratuitos y soporte para certificados TLS que de otro modo tendrías que pagar.
- Si el nivel "gratuito" del que dependes caduca con el tiempo, y si el coste de migrar a un nivel más caro implica que hubiera sido mejor usar otro servicio desde el principio.

La buena noticia cuando estás empezando es que existen bastantes sitios que ofrecen entornos de computación "gratuitos" pensados para evaluación y pruebas.
Suelen ser entornos bastante limitados/restringidos en recursos, y debes tener en cuenta que pueden caducar después de un periodo introductorio o tener otras restricciones.
Sin embargo, son ideales para probar sitios de poco tráfico en un entorno alojado, y pueden facilitar una migración sencilla a recursos de pago cuando tu sitio empiece a tener más actividad.
Entre las opciones populares en esta categoría están [Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/), entre otros.

La mayoría de los proveedores también ofrecen un nivel "básico" pensado para sitios de producción pequeños, que proporciona niveles de capacidad de computación más útiles y con menos limitaciones.
[Railway](https://railway.com/), [Heroku](https://www.heroku.com/) y [DigitalOcean](https://www.digitalocean.com/) son ejemplos de proveedores de hosting populares que tienen un nivel básico de computación relativamente económico (en el rango de 5 a 10 USD al mes).

> [!NOTE]
> Recuerda que el precio no es el único criterio de selección. Si tu sitio web tiene éxito, puede que la escalabilidad resulte ser la consideración más importante.

## Preparando tu sitio web para publicarlo

El [sitio web esqueleto de Django](/es/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), creado usando las herramientas _django-admin_ y _manage.py_, está configurado para facilitar el desarrollo. Muchas de las configuraciones del proyecto Django (especificadas en **settings.py**) deberían ser diferentes en producción, ya sea por razones de seguridad o de rendimiento.

> [!NOTE]
> Es habitual tener un archivo **settings.py** separado para producción, y/o importar condicionalmente configuraciones sensibles desde un archivo aparte o desde una variable de entorno. Ese archivo debería entonces estar protegido, incluso si el resto del código fuente está disponible en un repositorio público.

Las configuraciones críticas que debes revisar son:

- `DEBUG`. Debería establecerse como `False` en producción (`DEBUG = False`). Esto evita que se muestre la traza de depuración y la información de variables sensible/confidencial.
- `SECRET_KEY`. Es un valor aleatorio grande utilizado para la protección CSRF, etc. Es importante que la clave usada en producción no esté en el control de versiones ni sea accesible fuera del servidor de producción.

La documentación de Django sugiere que la información secreta se cargue preferiblemente desde una variable de entorno o se lea desde un archivo exclusivo del servidor.
Vamos a modificar la aplicación _LocalLibrary_ para que lea nuestras variables `SECRET_KEY` y `DEBUG` desde variables de entorno si están definidas, recurriendo a los valores definidos en un archivo **.env** en la raíz, y por último a los valores predeterminados del archivo de configuración.
Esto es muy flexible, ya que permite cualquier configuración compatible con el servidor de alojamiento.

Para leer valores de entorno desde un archivo usaremos [python-dotenv](https://pypi.org/project/python-dotenv/).
Esta es una librería para leer pares clave-valor de un archivo y usarlos como variables de entorno, pero solo si la variable de entorno correspondiente no está definida.

Instala la librería en tu entorno virtual como se muestra a continuación (y actualiza también tu archivo `requirements.txt`):

```bash
pip3 install python-dotenv
```

A continuación abre **/locallibrary/settings.py** e inserta el siguiente código después de que se defina `BASE_DIR`, pero antes de la advertencia de seguridad: `# ADVERTENCIA DE SEGURIDAD: ¡mantén en secreto la clave secreta utilizada en producción!`

```python
# Soporte para variables de entorno desde el archivo .env si está definido
import os
from dotenv import load_dotenv

env_path = os.path.join(BASE_DIR, ".env")
if os.path.exists(env_path):
    load_dotenv(env_path)
```

Esto carga el archivo `.env` desde la raíz de la aplicación web.
Las variables definidas como `KEY=VALUE` en el archivo se importan cuando la clave se usa en `os.environ.get('<KEY>'', '<VALOR_POR_DEFECTO>')`, si está definida.

> [!NOTE]
> ¡Cualquier valor que añadas a **.env** probablemente sea un _secreto_!
> No debes guardarlos en GitHub, y deberías añadir `.env` a tu archivo `.gitignore` para que no se añada por accidente.

A continuación, deshabilita la configuración original de `SECRET_KEY` y añade las nuevas líneas que se muestran abajo.
Durante el desarrollo no se especificará ninguna variable de entorno para la clave, por lo que se usará el valor predeterminado (no debería importar qué clave uses aquí, ni que esta clave se "filtre", porque no la usarás en producción).

```python
# ADVERTENCIA DE SEGURIDAD: ¡mantén en secreto la clave secreta utilizada en producción!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

A continuación, comenta la configuración existente de `DEBUG` y añade la nueva línea que se muestra abajo.

```python
# ADVERTENCIA DE SEGURIDAD: ¡no ejecutes con la depuración activada en producción!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

El valor de `DEBUG` será `True` por defecto, pero solo será `False` si el valor de la variable de entorno `DJANGO_DEBUG` se establece como `False`, o si se establece `DJANGO_DEBUG=False` en el archivo **.env**.
Ten en cuenta que las variables de entorno son cadenas de texto y no tipos de Python. Por eso necesitamos comparar cadenas. La única forma de establecer la variable `DEBUG` en `False` es fijarla realmente a la cadena `False`.

Puedes establecer la variable de entorno en "False" en Linux ejecutando el siguiente comando:

```bash
export DJANGO_DEBUG=False
```

En [Lista de verificación de despliegue](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (documentación de Django) encontrarás una lista completa de las configuraciones que podrías querer cambiar. También puedes listar algunas de ellas usando el siguiente comando de terminal:

```python
python3 manage.py check --deploy
```

### Gunicorn

[Gunicorn](https://gunicorn.org/) es un servidor HTTP puro en Python que se usa habitualmente para servir aplicaciones WSGI de Django.

Aunque no necesitamos _Gunicorn_ para servir nuestra aplicación LocalLibrary durante el desarrollo, lo instalaremos localmente para que forme parte de nuestros [requisitos](#requisitos) cuando se despliegue la aplicación.

Primero asegúrate de estar en el entorno virtual de Python que se creó cuando [configuraste el entorno de desarrollo](/es/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) (usa el comando `workon [nombre-del-entorno-virtual]`).
Luego instala _Gunicorn_ localmente en la línea de comandos usando _pip_:

```bash
pip3 install gunicorn
```

### Configuración de la base de datos

SQLite, la base de datos predeterminada de Django que has estado usando para el desarrollo, es una opción razonable para sitios web pequeños o medianos.
Lamentablemente, no se puede usar en algunos servicios de hosting populares, como Heroku, porque no proporcionan almacenamiento de datos persistente en el entorno de la aplicación (un requisito de SQLite).
Aunque esto podría no afectarnos en los despliegues de ejemplo, te mostraremos otro enfoque que funcionará en Railway, Heroku y algunos otros servicios.

El enfoque consiste en usar una base de datos que se ejecuta en su propio proceso en algún lugar de Internet, y a la que accede la aplicación de la librería Django usando una dirección pasada como variable de entorno.
En este caso usaremos una base de datos Postgres también alojada en Railway, pero podrías usar cualquier servicio de hosting de bases de datos que prefieras.

La información de conexión a la base de datos se suministrará a Django mediante una variable de entorno llamada `DATABASE_URL`.
En lugar de codificar esta información directamente en Django, usaremos el paquete [dj-database-url](https://pypi.org/project/dj-database-url/) para analizar la variable de entorno `DATABASE_URL` y convertirla automáticamente al formato de configuración que espera Django.
Además de instalar el paquete _dj-database-url_, también necesitaremos instalar [psycopg2](https://www.psycopg.org/), ya que Django lo necesita para interactuar con bases de datos Postgres.

#### dj-database-url

_dj-database-url_ se usa para extraer la configuración de la base de datos de Django a partir de una variable de entorno.

Instálalo localmente para que forme parte de nuestros [requisitos](#requisitos) a configurar en el servidor de despliegue:

```bash
pip3 install dj-database-url
```

#### settings.py

Abre **/locallibrary/settings.py** y copia la siguiente configuración al final del archivo:

```python
# Actualiza la configuración de la base de datos desde la variable de entorno $DATABASE_URL (si está definida)
import dj_database_url

if 'DATABASE_URL' in os.environ:
    DATABASES['default'] = dj_database_url.config(
        conn_max_age=500,
        conn_health_checks=True,
    )
```

Django usará ahora la configuración de base de datos de `DATABASE_URL` si la variable de entorno está definida; en caso contrario usará la base de datos SQLite predeterminada.
El valor `conn_max_age=500` hace que la conexión sea persistente, lo cual es mucho más eficiente que recrear la conexión en cada ciclo de solicitud (esto es opcional y se puede eliminar si es necesario).

#### psycopg2

<!-- Django 4.2 now supports Psycopg (3) : https://docs.djangoproject.com/en/5.0/releases/4.2/#psycopg-3-support
  But didn't work on Railway!
  Try again to update in next release.
-->

Django necesita _psycopg2_ para trabajar con bases de datos Postgres.
Instálalo localmente para que forme parte de nuestros [requisitos](#requisitos) para que Railway lo configure en el servidor remoto:

```bash
pip3 install psycopg2-binary
```

Ten en cuenta que Django usará la base de datos SQLite durante el desarrollo por defecto, a menos que se establezca `DATABASE_URL`.
Puedes cambiar completamente a Postgres y usar la misma base de datos alojada tanto para desarrollo como para producción estableciendo la misma variable de entorno en tu entorno de desarrollo (Railway facilita usar el mismo entorno para producción y desarrollo).
Alternativamente, también puedes instalar y usar una [base de datos Postgres autoalojada](https://www.psycopg.org/docs/install.html) en tu ordenador local.

### Sirviendo archivos estáticos en producción

Durante el desarrollo usamos Django y el servidor web de desarrollo de Django para servir tanto nuestro HTML dinámico como nuestros archivos estáticos (CSS, JavaScript, etc.).
Esto es ineficiente para los archivos estáticos, porque las solicitudes tienen que pasar por Django aunque Django no haga nada con ellas.
Aunque esto no importa durante el desarrollo, tendría un impacto significativo en el rendimiento si usáramos el mismo enfoque en producción.

En el entorno de producción normalmente separamos los archivos estáticos de la aplicación web Django, lo que facilita servirlos directamente desde el servidor web o desde una red de entrega de contenidos (CDN).

Las variables de configuración importantes son:

- `STATIC_URL`: es la ubicación URL base desde la que se servirán los archivos estáticos, por ejemplo en una CDN.
- `STATIC_ROOT`: es la ruta absoluta a un directorio donde la herramienta _collectstatic_ de Django reunirá todos los archivos estáticos referenciados en nuestras plantillas. Una vez recopilados, se pueden subir como grupo a donde vayan a alojarse los archivos.
- `STATICFILES_DIRS`: enumera directorios adicionales en los que la herramienta _collectstatic_ de Django debería buscar archivos estáticos.

Las plantillas de Django hacen referencia a las ubicaciones de los archivos estáticos en relación con una etiqueta `static` (puedes verlo en la plantilla base definida en [Tutorial de Django Parte 5: Creación de tu página de inicio](/es/docs/Learn_web_development/Extensions/Server-side/Django/Home_page#la_plantilla_base_de_locallibrary)), que a su vez se corresponde con la configuración `STATIC_URL`.
Por lo tanto, los archivos estáticos se pueden subir a cualquier host, y puedes actualizar tu aplicación para encontrarlos usando esta configuración.

La herramienta _collectstatic_ se usa para recopilar los archivos estáticos en la carpeta definida por la configuración de proyecto `STATIC_ROOT`.
Se invoca con el siguiente comando:

```bash
python3 manage.py collectstatic
```

Para este tutorial, _collectstatic_ se puede ejecutar antes de subir la aplicación, copiando todos los archivos estáticos de la aplicación a la ubicación especificada en `STATIC_ROOT`.
`Whitenoise` encuentra entonces los archivos en la ubicación definida por `STATIC_ROOT` (por defecto) y los sirve en la URL base definida por `STATIC_URL`.

#### settings.py

Abre **/locallibrary/settings.py** y copia la siguiente configuración al final del archivo.
La variable `BASE_DIR` ya debería estar definida en tu archivo (es posible que `STATIC_URL` ya estuviera definida en el archivo cuando se creó.
Aunque no causará ningún problema, puedes eliminar la referencia duplicada anterior).

```python
# Archivos estáticos (CSS, JavaScript, imágenes)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# La ruta absoluta al directorio donde collectstatic recopilará los archivos estáticos para el despliegue.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# La URL a usar cuando se haga referencia a archivos estáticos (desde donde se servirán)
STATIC_URL = '/static/'
```

En realidad, serviremos los archivos usando una librería llamada [WhiteNoise](https://pypi.org/project/whitenoise/), que instalaremos y configuraremos en la siguiente sección.

### Whitenoise

Hay muchas formas de servir archivos estáticos en producción (vimos las configuraciones de Django relevantes en las secciones anteriores).
El proyecto [WhiteNoise](https://pypi.org/project/whitenoise/) ofrece uno de los métodos más sencillos para servir recursos estáticos directamente desde Gunicorn en producción.

Consulta la documentación de [WhiteNoise](https://pypi.org/project/whitenoise/) para una explicación de cómo funciona y por qué esta implementación es un método relativamente eficiente para servir estos archivos.

Los pasos para configurar _WhiteNoise_ para usarlo con el proyecto se [indican aquí](https://whitenoise.readthedocs.io/en/stable/django.html) (y se reproducen a continuación):

#### Instalar whitenoise

Instala whitenoise localmente usando el siguiente comando:

```bash
pip3 install whitenoise
```

#### settings.py

Para instalar _WhiteNoise_ en tu aplicación Django, abre **/locallibrary/settings.py**, busca la configuración `MIDDLEWARE` y añade `WhiteNoiseMiddleware` cerca de la parte superior de la lista, justo debajo de `SecurityMiddleware`:

```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

Opcionalmente, puedes reducir el tamaño de los archivos estáticos cuando se sirven (esto es más eficiente).
Simplemente añade lo siguiente al final de **/locallibrary/settings.py**:

```python
# Servicio de archivos estáticos.
# https://whitenoise.readthedocs.io/en/stable/django.html#add-compression-and-caching-support
STORAGES = {
    # ...
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}
```

No necesitas hacer nada más para configurar _WhiteNoise_, porque por defecto usa la configuración de tu proyecto para `STATIC_ROOT` y `STATIC_URL`.

### Requisitos

Los requisitos de Python de tu aplicación web deben almacenarse en un archivo **requirements.txt** en la raíz de tu repositorio.
Muchos servicios de hosting instalarán automáticamente las dependencias de este archivo (en otros tendrás que hacerlo tú mismo). Puedes crear este archivo usando _pip_ en la línea de comandos (ejecuta lo siguiente en la raíz del repositorio):

```bash
pip3 freeze > requirements.txt
```

Después de instalar todas las dependencias anteriores, tu archivo **requirements.txt** debería tener listados _al menos_ estos elementos (aunque los números de versión pueden ser diferentes).
Elimina cualquier otra dependencia no listada abajo, a menos que la hayas añadido explícitamente para esta aplicación.

```plain
Django==5.0.2
dj-database-url==2.1.0
gunicorn==21.2.0
psycopg2-binary==2.9.9
wheel==0.38.1
whitenoise==6.6.0
python-dotenv==1.0.1
```

### Actualiza tu repositorio de la aplicación en GitHub

Muchos servicios de hosting te permiten importar y/o sincronizar proyectos desde un repositorio local o desde plataformas de control de versiones de código en la nube.
Esto puede facilitar mucho el despliegue y el desarrollo iterativo.

Ya deberías estar usando GitHub para almacenar el código fuente de la librería local (esto se configuró en [Gestión del código fuente con Git y GitHub](/es/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#gestión_del_código_fuente_con_git_y_github) como parte de la configuración de tu entorno de desarrollo).

Este es un buen momento para hacer una copia de seguridad de tu proyecto "original" — mientras que algunos de los cambios que vamos a hacer en las siguientes secciones podrían ser útiles para el despliegue en cualquier servicio de hosting (o para el desarrollo), otros podrían no serlo.
Suponiendo que ya has guardado todos los cambios hechos hasta ahora en la rama `main` de GitHub, puedes crear una nueva rama para respaldar tus cambios como se muestra:

```bash
# Obtener la última rama main
git checkout main
git pull origin main

# Crear la rama vanilla_deployment a partir de la rama actual (main)
git checkout -b vanilla_deployment

# Subir la nueva rama a GitHub
git push origin vanilla_deployment

# Volver a main
git checkout main

# Hacer cualquier cambio adicional en una nueva rama
git checkout -b my_changes_for_deployment # Crear una nueva rama
```

## Ejemplo: alojamiento en PythonAnywhere

Esta sección ofrece una demostración práctica de cómo alojar _LocalLibrary_ en [PythonAnywhere](https://www.pythonanywhere.com/).

### ¿Por qué PythonAnywhere?

Elegimos usar PythonAnywhere por varias razones:

- PythonAnywhere tiene un [plan gratuito para principiantes](https://www.pythonanywhere.com/pricing/) que es _realmente_ gratuito, aunque con algunas limitaciones.
  ¡El hecho de que sea asequible para todos los desarrolladores es muy importante para MDN!

  > [!NOTE]
  > Este tutorial se ha alojado en Heroku, Railway y ahora en PythonAnywhere, migrando cada vez que los planes gratuitos anteriores dejaban de estar disponibles.
  > Hemos elegido PythonAnywhere porque creemos que es probable que este plan siga siendo gratuito.
  > También hemos conservado el ejemplo de Railway, que no es gratuito, para comparar, y porque nos permite mostrar más fácilmente funciones como la integración con bases de datos Postgres alojadas en otro servicio.

- PythonAnywhere se encarga de la infraestructura para que tú no tengas que hacerlo.
  No tener que preocuparte por servidores, balanceadores de carga, proxies inversos, etc., hace que sea mucho más fácil empezar.
- Las habilidades y conceptos que aprenderás al usar PythonAnywhere son transferibles.
- Las limitaciones del servicio y del plan no nos afectan especialmente al usar PythonAnywhere para el tutorial.
  Por ejemplo:
  - El plan para principiantes permite una aplicación web en `<tu-nombre-de-usuario>.pythonanywhere.com`, acceso saliente a Internet restringido desde tus aplicaciones, CPU/ancho de banda bajos, sin soporte para notebooks de IPython/Jupyter, y sin base de datos Postgres gratuita.
    ¡Pero hay espacio suficiente para que funcione nuestro sitio básico!
  - No se admiten dominios personalizados (en el momento de escribir esto).
  - El entorno se apaga cuando no se usa, por lo que puede tardar en reiniciarse.
    Puedes mantenerlo en ejecución para siempre, pero deberás visitar el sitio cada tres meses y renovar la aplicación web.
  - Hay soporte gratuito para una base de datos MySQL independiente, pero no para Postgres.
    En esta demostración usaremos simplemente la base de datos SQLite predeterminada de Django.

PythonAnywhere es adecuado para alojar esta demostración, y se puede escalar a proyectos más grandes si es necesario.
Deberías dedicar tiempo a determinar si es [adecuado para tu propio sitio web](#eligiendo_un_proveedor_de_hosting).

### ¿Cómo funciona PythonAnywhere?

PythonAnywhere proporciona una interfaz completamente basada en la web para subir, editar y trabajar de otras formas con tu aplicación.

A través de la interfaz puedes lanzar una consola bash hacia un entorno Ubuntu Linux en el que puedes crear tu aplicación.
En esta demostración usaremos la consola para clonar nuestro repositorio de GitHub de la librería local, y crear un entorno Python en el que podamos ejecutar la aplicación web.

El plan gratuito no ofrece soporte independiente para Postgres.
Aunque podríamos usar algún otro servicio de hosting para nuestra base de datos, simplemente usaremos la base de datos SQLite predeterminada creada por Django en el entorno Ubuntu alojado (hay más que suficiente espacio para demostrar la funcionalidad de la librería).

Una vez que la aplicación está en ejecución, se puede configurar para producción estableciendo variables de entorno a través de la consola bash.

Eso es todo lo que necesitas saber para empezar.

### Consigue una cuenta de PythonAnywhere

Para empezar a usar PythonAnywhere primero necesitarás crear una cuenta:

- Ve a la página de [Plans and pricing](https://www.pythonanywhere.com/pricing/) de PythonAnywhere, y selecciona el botón **Create a Beginner account**.
- Crea una cuenta con tu nombre de usuario, correo electrónico y contraseña, acepta los términos y condiciones, y luego selecciona **Register**.
- Iniciarás sesión y serás redirigido al panel de PythonAnywhere: `https://www.pythonanywhere.com/user/<your_user_name>/`.

### Instala la librería desde GitHub

A continuación vamos a abrir un prompt de Bash, configurar un entorno virtual, y obtener el código fuente de la librería local desde GitHub.
También configuraremos la base de datos predeterminada y recopilaremos los archivos estáticos para que puedan ser servidos por PythonAnywhere.

1. Primero abre la pantalla de gestión de consolas seleccionando **Consoles** en la barra de aplicaciones superior.
2. Luego selecciona el enlace **Bash** para crear y lanzar una nueva consola:

   ![Imagen de la pantalla de gestión de consolas de PythonAnywhere](python_anywhere_start_bash_console.png)

   Ten en cuenta que cualquier consola que crees se guarda para que la reutilices más tarde, junto con todo su historial.
   La flecha verde de arriba muestra que esta cuenta tiene una consola que podríamos haber abierto en su lugar.

3. En la consola, introduce el siguiente comando para crear un entorno virtual de Python 3.10 llamado "env_local_library" para instalar las dependencias de la librería local.

   ```bash
   mkvirtualenv --python=python3.10 env_local_library
   ```

   Este es exactamente el mismo proceso que se explicó en [Puesta en marcha de un entorno de desarrollo Django](/es/docs/Learn_web_development/Extensions/Server-side/Django/development_environment).
   Podríamos haberle puesto cualquier otro nombre al entorno, y podemos desactivarlo y reactivarlo usando los siguientes comandos:

   ```bash
   deactivate
   workon env_local_library
   ```

4. A continuación, obtén el código fuente de la librería desde GitHub.
   PythonAnywhere espera que instales las aplicaciones en una carpeta con el nombre de la URL de tu sitio.

   > [!NOTE]
   > Como estamos usando la cuenta gratuita, solo puedes nombrar tu cuenta como `<tu_nombre_de_usuario_pythonanywhere>.pythonanywhere.com` (por ejemplo, si tu nombre de usuario es "Odtsetseg" tendrás que poner el código fuente de la librería local en una carpeta llamada `odtsetseg.pythonanywhere.com`).

   Introduce el siguiente comando para clonar el código fuente de tu librería en una carpeta con el nombre adecuado (tendrás que reemplazar los valores del nombre de usuario por el tuyo):

   ```bash
   git clone https://github.com/<github_username>/django-locallibrary-tutorial.git <your_pythonanywhere_username>.pythonanywhere.com

   # Navegar a la nueva carpeta
   cd <your_pythonanywhere_username>.pythonanywhere.com
   ```

5. Instala las dependencias de la librería usando el archivo `requirements.txt`:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Crea y configura una base de datos SQLite en el ordenador de hosting (tal como hicimos durante el desarrollo).

   ```bash
   python manage.py migrate
   ```

   > [!NOTE]
   > Para el ejemplo de Railway [configuraremos una base de datos Postgres](#aprovisiona_y_conecta_una_base_de_datos_postgres_sql), y nos conectaremos a ella estableciendo la variable de entorno `DATABASE_URL`.
   > Es importante que `migrate` se llame _después_ de configurar qué base de datos usar.

7. Recopila todos los archivos estáticos en una ubicación desde la que puedan ser [servidos en producción](#sirviendo_archivos_estáticos_en_producción):

   ```bash
   python manage.py collectstatic --no-input
   ```

8. Crea un superusuario para acceder al sitio (como se explicó en la sección [sitio de administración de Django](/es/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creación_de_un_superusuario)):

   ```bash
   python manage.py createsuperuser
   ```

   Anota los datos, ya que los necesitarás para probar tu sitio.

### Configura la aplicación web

Después de obtener el código fuente de la librería local e instalar las dependencias en un entorno virtual, necesitamos indicarle a PythonAnywhere cómo encontrarlas y usarlas como una aplicación web.

1. Navega a la sección _Web_ del sitio y selecciona el enlace **Add a new web app**:

   ![Sección "Web" de PythonAnywhere mostrando el botón para añadir una nueva aplicación](python_anywhere_web_add_new_app.png)

   Se abrirá entonces el asistente _Create new web app_, que te guiará por la configuración de las propiedades principales de la aplicación web.

2. Selecciona **Next** para saltarte la configuración del nombre de dominio de la aplicación web.
   La cuenta gratuita creará el dominio a partir de tu nombre de usuario: `<user_name>.pythonanywhere.com`.

   ![Aviso de PythonAnywhere para configurar el nombre de dominio de la nueva aplicación web](python_anywhere_web_add_new_app_prompt.png)

3. En la pantalla _Select a Python Web framework_ selecciona **Manual configuration**.

   ![Aviso de PythonAnywhere para seleccionar el framework web usado por la aplicación](python_anywhere_web_add_select_framework_manual.png)

   La configuración manual nos da control total sobre cómo se configura el entorno.
   Esto no importa demasiado ahora, pero sí importaría si estuviéramos alojando varios sitios, potencialmente con diferentes versiones de Python y/o Django.

4. En la pantalla _Select a Python version_ selecciona **3.10**

   ![Aviso de PythonAnywhere para seleccionar la versión de Python de la aplicación web](python_anywhere_web_add_select_python_version.png)

   De forma más general, deberías seleccionar la última versión de Python permitida por la versión de Django que estés usando.

5. En la pantalla _Manual configuration_ selecciona **Next** (la pantalla solo explica algunas de las opciones de configuración)

   ![Aviso de PythonAnywhere explicando las siguientes opciones de configuración](python_anywhere_web_add_manual_config.png)

   Se crea la aplicación web, y se muestra en la sección Web como se ve a continuación.
   La pantalla tiene un botón **Reload** que puedes usar para recargar la aplicación web después de hacer cualquier cambio adicional.
   Como se indica en la pantalla, tendrás que hacer clic en el botón **Run until 3 months from today** para mantener el sitio activo durante otros tres meses (y así sucesivamente).

   ![Aplicación web de PythonAnywhere configurada](python_anywhere_web_configuration.png)

6. Desplázate hacia abajo hasta la sección "Code" de la pestaña _Web_ y selecciona el enlace al archivo de configuración WSGI.
   Tendrá un nombre con la forma `/var/www/<user_name>_pythonanywhere_com_wsgi.py`.

   ![Archivo WSGI de PythonAnywhere en la pestaña Web, sección de código](python_anywhere_web_code_wsgi_select.png)

   Reemplaza el contenido del archivo con el siguiente texto (primero actualiza "hamishwillee" con tu propio nombre de usuario), y luego selecciona el botón **Save**.

   ```python
   import os
   import sys

   path = '/home/hamishwillee/hamishwillee.pythonanywhere.com'
   if path not in sys.path:
       sys.path.append(path)

   os.environ['DJANGO_SETTINGS_MODULE'] = 'locallibrary.settings'

   from django.core.wsgi import get_wsgi_application
   application = get_wsgi_application()
   ```

   Ten en cuenta que el papel del archivo WSGI es ayudar al servidor Gunicorn a encontrar la aplicación de la librería local.
   PythonAnywhere espera que este archivo esté en esta ubicación, por lo que no se puede usar el archivo WSGI que ya está en el proyecto.

7. Desplázate hacia abajo hasta la sección "Virtualenv" de la pestaña _Web_.
   Selecciona el enlace **Enter the path to a virtual env, if desired** e introduce la ruta del entorno virtual creado en la sección anterior.
   Si lo llamaste "env_local_library" como se sugirió, la ruta será: `/home/<user_name>/.virtualenvs/env_local_library`

   ![Sección Virtual env de la pestaña Web de PythonAnywhere](python_anywhere_web_virtualenv.png)

8. Desplázate hacia abajo hasta la sección "Static files" de la pestaña _Web_.

   ![Sección Static files de la pestaña Web de PythonAnywhere](python_anywhere_web_static_files.png)

   Selecciona el enlace **Enter URL** e introduce `\static_files\`.
   Esta es la `STATIC_URL` en la [configuración de la aplicación](#settings.py_2), y refleja la ubicación donde se copiaron los archivos cuando ejecutamos `collectstatic` en la sección anterior.

9. Cerca de la parte superior de la pestaña _Web_ selecciona el botón **Reload** para reiniciar el sitio.
   Luego selecciona el enlace de la URL del sitio para lanzar el sitio en vivo:

![Pantalla Web de PythonAnywhere con el enlace para lanzar el sitio resaltado](python_anywhere_web_open_site.png)

### Configura ALLOWED_HOSTS y CSRF_TRUSTED_ORIGINS

Cuando se abre el sitio, en este punto verás una pantalla de error de depuración como la que se muestra abajo.
Este es un error de seguridad de Django que se produce porque nuestro código fuente no se está ejecutando en un "host permitido".

![Una página de error detallada con un traceback completo de una cabecera HTTP_HOST no válida](python_anywhere_error_disallowed_host.png)

> [!NOTE]
> Este tipo de información de depuración es muy útil cuando estás configurando el proyecto, pero supone un riesgo de seguridad en un sitio desplegado.
> En la siguiente sección te mostraremos cómo desactivar este nivel de registro en el sitio en vivo usando [variables de entorno](#usando_variables_de_entorno_en_pythonanywhere).

Abre **/locallibrary/settings.py** en tu proyecto de GitHub y cambia la configuración [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) para incluir la URL de tu sitio de PythonAnywhere:

```python
## Por ejemplo, para una URL de sitio en 'hamishwillee.pythonanywhere.com'
## (reemplaza la cadena de abajo con la URL de tu propio sitio):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# Durante el desarrollo, puedes establecer en su lugar solo la URL base
# (podrías decidir cambiar el sitio unas cuantas veces).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Dado que la aplicación usa protección CSRF, también necesitarás establecer la clave [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins).
Abre **/locallibrary/settings.py** y añade una línea como la de abajo:

```python
## Por ejemplo, para una URL de sitio en 'web-production-3640.up.railway.app'
## (reemplaza la cadena de abajo con la URL de tu propio sitio):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# Durante el desarrollo/para este tutorial puedes establecer en su lugar solo la URL base
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Guarda esta configuración y confírmala (commit) en tu repositorio de GitHub.

Luego necesitarás actualizar la versión de tu proyecto en PythonAnywhere.
Suponiendo que estás usando tu prompt de Bash en la carpeta `<user_name>.pythonanywhere.com`, y que has subido los cambios a la rama principal, podrías importarlos en el prompt de Bash usando el comando:

```bash
git pull origin main
```

Usa el botón **Restart** en la pestaña `Web` para reiniciar la aplicación.
Si actualizas tu sitio alojado, ahora debería abrirse y mostrar la página de inicio del sitio.

Deberías poder iniciar sesión con la cuenta de superusuario que creaste anteriormente, y crear autores, géneros, libros, etc., tal como hiciste en tu ordenador local.

### Usando variables de entorno en PythonAnywhere

En la sección [Preparando tu sitio web para publicarlo](#preparando_tu_sitio_web_para_publicarlo) modificamos la aplicación para que se pueda configurar usando variables de entorno o variables en un archivo **.env** en producción.

Concretamente, configuramos la librería para que puedas establecer:

- `DJANGO_DEBUG=False` para reducir la traza de depuración mostrada al usuario cuando hay un error.
- `DJANGO_SECRET_KEY` con algún valor secreto en producción.
- `DATABASE_URL` si tu aplicación usa una base de datos alojada (no es el caso en este ejemplo).

La forma en que se establecen las variables de entorno depende del servicio de hosting.
Para PythonAnywhere necesitas leerlas desde un archivo de entorno. Ya lo tenemos configurado para eso, así que todo lo que necesitamos hacer es crear el archivo.

Los pasos son:

1. Abre un prompt de Bash de PythonAnywhere.
2. Navega hasta el directorio de tu aplicación (reemplazando `<user-name>` con tu propia cuenta):

   ```bash
   cd ~/<user-name>.pythonanywhere.com
   ```

3. Establece las variables de entorno escribiéndolas como pares clave-valor en el archivo `.env`.
   Por ejemplo, para establecer `DJANGO_DEBUG` en `False` en la consola Bash, introduce el siguiente comando:

   ```bash
   echo "DJANGO_DEBUG=False" >> .env
   ```

4. Reinicia la aplicación.

Puedes comprobar que la operación funcionó intentando abrir un registro que no existe (por ejemplo, crea un género y luego incrementa el número en la barra de URL para abrir un registro que aún no se ha creado).
Si la variable de entorno se ha cargado correctamente, obtendrás un mensaje "Not found" en lugar de una traza de depuración detallada.

## Ejemplo: alojamiento en Railway

Esta sección ofrece una demostración práctica de cómo instalar _LocalLibrary_ en [Railway](https://railway.com/).

### ¿Por qué Railway?

> [!WARNING]
> Railway ya no tiene un nivel inicial completamente gratuito.
> Hemos conservado estas instrucciones porque Railway tiene algunas funciones excelentes, y será una mejor opción para algunos usuarios.

Railway es una opción de hosting atractiva por varias razones:

- Railway se encarga de la mayor parte de la infraestructura para que tú no tengas que hacerlo.
  No tener que preocuparte por servidores, balanceadores de carga, proxies inversos, etc., hace que sea mucho más fácil empezar.
- Railway tiene un [enfoque en la experiencia del desarrollador para el desarrollo y el despliegue](https://docs.railway.com/platform/compare-to-heroku), lo que da lugar a una curva de aprendizaje más rápida y suave que muchas otras alternativas.
- Las habilidades y conceptos que aprenderás al usar Railway son transferibles.
  Aunque Railway tiene algunas funciones nuevas excelentes, otros servicios de hosting populares usan muchas de las mismas ideas y enfoques.
- La [documentación de Railway](https://docs.railway.com/) es clara y completa.
- El servicio parece ser muy fiable, y si terminas encantándote, el precio es predecible, y escalar tu aplicación es muy fácil.

Deberías dedicar tiempo a determinar si Railway es [adecuado para tu propio sitio web](#eligiendo_un_proveedor_de_hosting).

### ¿Cómo funciona Railway?

Cada aplicación web se ejecuta en su propio contenedor virtualizado, aislado e independiente.
Para ejecutar tu aplicación, Railway necesita poder configurar el entorno y las dependencias adecuados, y también entender cómo se lanza.
Para las aplicaciones Django, proporcionamos esta información en varios archivos de texto:

- **runtime.txt**: indica el lenguaje de programación y la versión a usar.
- **requirements.txt**: lista las dependencias de Python necesarias para tu sitio, incluyendo Django.
- **Procfile**: una lista de procesos que se ejecutarán para iniciar la aplicación web.
  Para Django, este será normalmente el servidor de aplicaciones web Gunicorn (con un script `.wsgi`).
- **wsgi.py**: configuración [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) para invocar nuestra aplicación Django en el entorno de Railway.

Una vez que la aplicación está en ejecución, puede configurarse a sí misma usando la información proporcionada en [variables de entorno](https://docs.railway.com/variables).
Por ejemplo, una aplicación que usa una base de datos puede obtener la dirección usando la variable `DATABASE_URL`.
El propio servicio de base de datos puede estar alojado por Railway o por algún otro proveedor.

Los desarrolladores interactúan con Railway a través del sitio de Railway, y usando una herramienta especial de [interfaz de línea de comandos (CLI)](https://docs.railway.com/cli).
La CLI te permite asociar un repositorio local de GitHub con un proyecto de Railway, subir el repositorio desde la rama local al sitio en vivo, inspeccionar los registros del proceso en ejecución, establecer y obtener variables de configuración, y mucho más.
Una de las funciones más útiles es que puedes usar la CLI para ejecutar tu proyecto local con las mismas variables de entorno que el proyecto en vivo.

Para conseguir que nuestra aplicación funcione en Railway, necesitaremos poner nuestra aplicación web Django en un repositorio git, añadir los archivos anteriores, integrarla con un complemento de base de datos, y hacer cambios para manejar correctamente los archivos estáticos.
Una vez hecho todo esto, podremos configurar una cuenta de Railway, obtener el cliente de Railway, e instalar nuestro sitio web.

Eso es todo lo que necesitas saber para empezar.

### Actualiza la aplicación para Railway

Esta sección explica los cambios que necesitarás hacer en nuestra aplicación _LocalLibrary_ para que funcione en Railway.
En realidad solo tenemos que crear un archivo `Procfile` y `runtime.txt`, porque casi todo lo demás ya está presente.

Ten en cuenta que estos cambios no te impedirán usar las pruebas locales y los flujos de trabajo que ya hemos aprendido.

#### Procfile

Un _Procfile_ es el "punto de entrada" de la aplicación web.
Enumera los comandos que Railway ejecutará para iniciar tu sitio.

Crea el archivo `Procfile` (sin extensión de archivo) en la raíz de tu repositorio de GitHub y copia/pega el siguiente texto:

```plain
web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi
```

El prefijo `web:` le indica a Railway que este es un proceso web y que se le puede enviar tráfico HTTP.
Luego llamamos al comando de migración de Django `python manage.py migrate` para configurar las tablas de la base de datos.
A continuación, llamamos al comando de Django `python manage.py collectstatic` para recopilar los archivos estáticos en la carpeta definida por la configuración de proyecto `STATIC_ROOT` (ver la sección [sirviendo archivos estáticos en producción](#sirviendo_archivos_estáticos_en_producción) más abajo).
Finalmente, iniciamos el proceso _gunicorn_, un servidor de aplicaciones web popular, pasándole la información de configuración en el módulo `locallibrary.wsgi` (creado con el esqueleto de nuestra aplicación: **/locallibrary/wsgi.py**).

Notarás que ya configuramos el proyecto para incluir _gunicorn_ y soportar el servicio de archivos estáticos.

También puedes usar el Procfile para iniciar procesos worker o para ejecutar otras tareas no interactivas antes de que se despliegue la versión.

#### Runtime

El archivo **runtime.txt**, si se define, le indica a Railway qué versión de Python usar.
Crea el archivo en la raíz del repositorio y añade el siguiente texto:

```plain
python-3.10.2
```

> [!NOTE]
> Los proveedores de hosting no necesariamente admiten todas las versiones menores del runtime de Python.
> Generalmente usarán la versión compatible más cercana al valor que especifiques.

#### Vuelve a probar y guarda los cambios en GitHub

Antes de continuar, prueba primero el sitio de nuevo localmente y asegúrate de que no se haya roto con ninguno de los cambios anteriores.
Ejecuta el servidor web de desarrollo como de costumbre y comprueba que el sitio sigue funcionando como esperas en tu navegador.

```bash
python3 manage.py runserver
```

A continuación, vamos a hacer `push` de los cambios a GitHub.
En la terminal (después de haber navegado a nuestro repositorio local), introduce los siguientes comandos:

```python
git checkout -b railway_changes
git add -A
git commit -m "Se añadieron archivos y cambios necesarios para el despliegue"
git push origin railway_changes
```

Luego crea y fusiona el PR en GitHub.

Ahora deberíamos estar listos para empezar a desplegar LocalLibrary en Railway.

### Consigue una cuenta de Railway

Para empezar a usar Railway primero necesitarás crear una cuenta:

- Ve a [railway.com](https://railway.com/) y haz clic en el enlace **Login** en la barra de herramientas superior.
- Selecciona GitHub en la ventana emergente para iniciar sesión usando tus credenciales de GitHub.
- Puede que después tengas que ir a tu correo electrónico y verificar tu cuenta.
- Entonces habrás iniciado sesión en el panel de Railway.com: <https://railway.com/dashboard>.

### Despliega en Railway desde GitHub

A continuación configuraremos Railway para desplegar nuestra librería desde GitHub.
Primero elige la opción **Dashboard** en el menú superior del sitio, y luego selecciona el botón **New Project**:

![Panel del sitio de Railway con el botón de nuevo proyecto](railway_new_project_button.png)

Railway mostrará una lista de opciones para el nuevo proyecto, incluyendo la opción de desplegar un proyecto a partir de una plantilla que se crea primero en tu cuenta de GitHub, y varias bases de datos.
Selecciona **Deploy from GitHub repo**.

![Pantalla del sitio de Railway - desplegar](railway_new_project_button_deploy_github_repo.png)

Se muestran todos los proyectos de los repositorios de GitHub que compartiste con Railway durante la configuración.
Selecciona tu repositorio de GitHub para la librería local: `<user-name>/django-locallibrary-tutorial`.

![Pantalla del sitio de Railway mostrando un diálogo para elegir un repositorio de GitHub existente o elegir uno nuevo](railway_new_project_button_deploy_github_selectrepo.png)

Confirma tu despliegue seleccionando **Deploy Now**.

![Pantalla de confirmación - seleccionar despliegue](railway_new_project_deploy_confirm.png)

Railway cargará y desplegará tu proyecto, mostrando el progreso en la pestaña de despliegues.
Cuando el despliegue se complete con éxito, verás una pantalla como la de abajo.

![Pantalla del sitio de Railway - despliegue](railway_project_deploy.png)

Puedes hacer clic en la URL del sitio (resaltada arriba) para abrir el sitio en un navegador (todavía no funcionará, porque la configuración no está completa).

### Configura ALLOWED_HOSTS y CSRF_TRUSTED_ORIGINS

Cuando se abre el sitio, en este punto verás una pantalla de error de depuración como la que se muestra abajo.
Este es un error de seguridad de Django que se produce porque nuestro código fuente no se está ejecutando en un "host permitido".

![Una página de error detallada con un traceback completo de una cabecera HTTP_HOST no válida](site_error_disallowed_host.png)

> [!NOTE]
> Este tipo de información de depuración es muy útil cuando estás configurando el proyecto, pero supone un riesgo de seguridad en un sitio desplegado.
> Te mostraremos cómo desactivarlo una vez que el sitio esté en funcionamiento.

Abre **/locallibrary/settings.py** en tu proyecto de GitHub y cambia la configuración [ALLOWED_HOSTS](https://docs.djangoproject.com/en/5.0/ref/settings/#allowed-hosts) para incluir la URL de tu sitio de Railway:

```python
## Por ejemplo, para una URL de sitio en 'web-production-3640.up.railway.app'
## (reemplaza la cadena de abajo con la URL de tu propio sitio):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# Durante el desarrollo, puedes establecer en su lugar solo la URL base
# (podrías decidir cambiar el sitio unas cuantas veces).
# ALLOWED_HOSTS = ['.railway.com','127.0.0.1']
```

Dado que la aplicación usa protección CSRF, también necesitarás establecer la clave [CSRF_TRUSTED_ORIGINS](https://docs.djangoproject.com/en/5.0/ref/settings/#csrf-trusted-origins).
Abre **/locallibrary/settings.py** y añade una línea como la de abajo:

```python
## Por ejemplo, para una URL de sitio en 'web-production-3640.up.railway.app'
## (reemplaza la cadena de abajo con la URL de tu propio sitio):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# Durante el desarrollo/para este tutorial puedes establecer en su lugar solo la URL base
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Luego guarda tu configuración y confírmala (commit) en tu repositorio de GitHub (Railway actualizará y volverá a desplegar automáticamente tu aplicación).

### Aprovisiona y conecta una base de datos Postgres SQL

A continuación necesitamos crear una base de datos Postgres y conectarla a la aplicación Django que acabamos de desplegar.
(Si abres el sitio ahora obtendrás un nuevo error porque no se puede acceder a la base de datos). Crearemos la base de datos como parte del proyecto de la aplicación, aunque puedes crear la base de datos en su propio proyecto separado.

En Railway, elige la opción **Dashboard** en el menú superior del sitio y luego selecciona tu proyecto de aplicación.
En esta etapa solo contiene un único servicio para tu aplicación (se puede seleccionar para establecer variables y otros detalles del servicio).
Se puede seleccionar el botón **Settings** para cambiar la configuración de todo el proyecto.
Selecciona el botón **New**, que se usa para añadir servicios al proyecto.

![Proyecto de Railway con el botón de nuevo servicio resaltado](railway_project_open_no_database.png)

Selecciona **Database** cuando se te pregunte por el tipo de servicio a añadir:

![Proyecto de Railway - seleccionar base de datos como nuevo servicio](railway_project_add_database.png)

Luego selecciona **Add PostgreSQL** para empezar a añadir la base de datos

![Proyecto de Railway - seleccionar Postgres como nuevo servicio](railway_project_add_database_select_type.png)

Railway aprovisionará entonces un servicio que contiene una base de datos vacía en el mismo proyecto.
Al finalizar, verás tanto el servicio de la aplicación como el de la base de datos en la vista del proyecto.

![Proyecto de Railway con el servicio de aplicación y el de base de datos Postgres](railway_project_two_services.png)

Selecciona el servicio web y luego la pestaña _Variables_.
Selecciona **New Variable** y luego, en el cuadro _Variable name_, selecciona **Add reference**.
Desplázate hacia abajo y selecciona `DATABASE_URL` (este es el nombre de la variable que configuramos para que locallibrary la lea como variable de entorno).

![Pantalla del sitio de Railway seleccionando DATABASE_URL](railway_postgresql_connect.png)

Luego selecciona **Add** para añadir la referencia de la variable y finalmente **Deploy** (esto aparecerá en una ventana emergente).
Ten en cuenta que también podrías haber abierto la base de datos Postgres, luego su pestaña de variables, y copiado la variable de ahí.

Si abres el proyecto ahora, debería mostrarse igual que lo hacía localmente.
Ten en cuenta, sin embargo, que todavía no hay forma de poblar la librería con datos, porque aún no hemos creado una cuenta de superusuario.
Lo haremos usando la herramienta [CLI](https://docs.railway.com/cli) en nuestro ordenador local.

### Instala el cliente

Descarga e instala el cliente de Railway para tu sistema operativo local siguiendo las [instrucciones aquí](https://docs.railway.com/cli).

Una vez instalado el cliente, podrás ejecutar comandos.
Algunas de las operaciones más importantes incluyen desplegar el directorio actual de tu ordenador a un proyecto de Railway asociado (sin tener que subirlo a GitHub), y ejecutar tu proyecto Django localmente usando la misma configuración que tienes en el servidor de producción.
Te mostramos esto en las siguientes secciones.

Puedes obtener una lista de todos los comandos posibles introduciendo lo siguiente en una terminal.

```bash
railway help
```

> [!NOTE]
> En la siguiente sección usamos `railway login` y `railway link` para vincular el proyecto actual a un directorio.
> Si el sistema cierra tu sesión, necesitarás volver a llamar a ambos comandos para volver a vincular el proyecto.

### Configura un superusuario

Para crear un superusuario, necesitamos llamar al comando `createsuperuser` de Django contra la base de datos de producción (esta es la misma operación que ejecutamos localmente en [Tutorial Django Parte 4: Sitio de Administración de Django > Creación de un superusuario](/es/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site#creación_de_un_superusuario)).
Railway no proporciona acceso directo por terminal al servidor, y no podemos añadir este comando al [Procfile](#procfile) porque es interactivo.

Lo que podemos hacer es llamar a este comando localmente en nuestro proyecto Django cuando está conectado a la base de datos de _producción_.
El cliente de Railway facilita esto proporcionando un mecanismo para ejecutar comandos localmente usando las mismas variables de entorno que el servidor de producción, incluyendo la cadena de conexión a la base de datos.

Primero abre una terminal o un símbolo del sistema en un clon git de tu proyecto locallibrary.
Luego inicia sesión en tu cuenta del navegador usando el comando `login` o `login --browserless` (sigue las indicaciones e instrucciones resultantes del cliente o del sitio web para completar el inicio de sesión):

```bash
railway login
```

Una vez que hayas iniciado sesión, vincula tu directorio actual de locallibrary al proyecto de Railway asociado usando el siguiente comando.
Ten en cuenta que necesitarás seleccionar/introducir un proyecto concreto cuando se te solicite:

```bash
railway link
```

Ahora que el directorio local y el proyecto están _vinculados_, puedes ejecutar el proyecto Django local con la configuración del entorno de producción.
Primero asegúrate de que tu [entorno de desarrollo Django](/es/docs/Learn_web_development/Extensions/Server-side/Django/development_environment) normal esté listo.
Luego llama al siguiente comando, introduciendo el nombre, el correo electrónico y la contraseña según se te solicite:

```bash
railway run python manage.py createsuperuser
```

Ahora deberías poder abrir el área de administración de tu sitio web (`https://[tu-url].railway.app/admin/`) y poblar la base de datos, tal como se muestra en [Tutorial de Django Parte 4: Sitio de administración de Django](/es/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site).

### Configura las variables de configuración

El último paso es hacer que el sitio sea seguro.
Concretamente, necesitamos desactivar el registro de depuración y establecer una clave secreta CSRF.
El trabajo para leer los valores necesarios desde variables de entorno se hizo en [preparando tu sitio web para publicarlo](#preparando_tu_sitio_web_para_publicarlo) (ver `DJANGO_DEBUG` y `DJANGO_SECRET_KEY`).

Abre la pantalla de información del proyecto y selecciona la pestaña _Variables_.
Esta ya debería tener la `DATABASE_URL`, como se muestra abajo.

![Railway - pantalla para añadir una nueva variable](railway_variable_new.png)

Hay muchas formas de generar una clave criptográficamente secreta.
Una forma sencilla es ejecutar el siguiente comando de Python en tu ordenador de desarrollo:

```bash
python -c "import secrets; print(secrets.token_urlsafe())"
```

Selecciona el botón **New Variable** e introduce la clave `DJANGO_SECRET_KEY` con tu valor secreto (luego selecciona **Add**).
Luego introduce la clave `DJANGO_DEBUG` con el valor `False`.
El conjunto final de variables debería tener este aspecto:

![Pantalla de Railway mostrando todas las variables del proyecto](railway_variables_all.png)

### Depuración

El cliente de Railway proporciona el comando logs para mostrar el final de los registros (hay un registro más completo disponible en el sitio para cada proyecto):

```bash
railway logs
```

Si necesitas más información de la que esto puede ofrecer, tendrás que empezar a investigar el [registro (logging) de Django](https://docs.djangoproject.com/en/5.0/topics/logging/).

## Resumen

Este es el final de este tutorial sobre la configuración de aplicaciones Django en producción, y también de la serie de tutoriales sobre cómo trabajar con Django. Esperamos que te hayan resultado útiles. Puedes consultar una versión completamente desarrollada del [código fuente en GitHub aquí](https://github.com/mdn/django-locallibrary-tutorial).

El siguiente paso es leer nuestros últimos artículos, y luego completar la tarea de evaluación.

## Véase también

- [Deploying Django](https://docs.djangoproject.com/en/5.0/howto/deployment/) (documentación de Django)
  - [Deployment checklist](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/) (documentación de Django)
  - [Deploying static files](https://docs.djangoproject.com/en/5.0/howto/static-files/deployment/) (documentación de Django)
  - [How to deploy with WSGI](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/) (documentación de Django)
  - [How to use Django with Apache and mod_wsgi](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/modwsgi/) (documentación de Django)
  - [How to use Django with Gunicorn](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) (documentación de Django)

- Documentación de Railway
  - [CLI](https://docs.railway.com/cli)

- DigitalOcean
  - [How To Serve Django Applications with uWSGI and Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Other DigitalOcean Django community docs](https://www.digitalocean.com/community/tutorials?q=django)

- Documentación de Heroku (conceptos de configuración similares)
  - [Configuring Django apps for Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (documentación de Heroku)
  - [Getting Started on Heroku with Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (documentación de Heroku)
  - [Django and Static Assets](https://devcenter.heroku.com/articles/django-assets) (documentación de Heroku)
  - [Concurrency and Database Connections in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (documentación de Heroku)
  - [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works) (documentación de Heroku)
  - [Dynos and the Dyno Manager](https://devcenter.heroku.com/articles/dynos) (documentación de Heroku)
  - [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars) (documentación de Heroku)
  - [Limits](https://devcenter.heroku.com/articles/limits) (documentación de Heroku)
  - [Deploying Python applications with Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (documentación de Heroku)
  - [Working with Django](https://devcenter.heroku.com/categories/working-with-django) (documentación de Heroku)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django/web_application_security", "Learn_web_development/Extensions/Server-side/Django")}}
