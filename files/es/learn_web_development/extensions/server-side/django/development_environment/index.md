---
title: Configuración de un entorno de desarrollo Django
short-title: Configuración del entorno de desarrollo
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Ahora que sabes para qué se utiliza Django, te enseñaremos cómo configurar y probar un entorno de desarrollo Django en Windows, Linux (Ubuntu) y macOS — sea cual sea el sistema operativo habitual que estés utilizando, este artículo te dará lo que necesitas para poder empezar a desarrollar aplicaciones Django.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos del uso de una terminal/línea de comandos y de cómo instalar paquetes de software en el sistema operativo de tu computadora de desarrollo.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Tener funcionando en tu computadora un entorno de desarrollo para Django (6.1.*).
      </td>
    </tr>
  </tbody>
</table>

## Visión general del entorno de desarrollo Django

Django hace muy fácil configurar tu propia computadora para que puedas empezar a desarrollar aplicaciones web. Esta sección explica qué obtienes con el entorno de desarrollo y ofrece una visión general de algunas de tus opciones de configuración. El resto del artículo explica el método _recomendado_ para instalar el entorno de desarrollo de Django en Ubuntu, macOS y Windows, y cómo puedes probarlo.

### ¿Qué es el entorno de desarrollo Django?

El entorno de desarrollo es una instalación de Django en tu computadora local que puedes usar para desarrollar y probar aplicaciones Django antes de desplegarlas en un entorno de producción.

Las principales herramientas que el propio Django proporciona son un conjunto de scripts de Python para crear y trabajar con proyectos Django, junto con un simple _servidor web de desarrollo_ que puedes usar para probar localmente (es decir, en tu computadora, no en un servidor web externo) aplicaciones web Django en el navegador de tu computadora.

Hay otras herramientas periféricas, que a menudo forman parte del entorno de desarrollo, que no cubriremos aquí. Estas incluyen cosas como un [editor de código](/es/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors), linters para el formateo automático, etc. Asumimos que ya tienes instalado un editor de código.

### ¿Cuáles son las opciones de configuración de Django?

Django es extremadamente flexible en cuanto a cómo y dónde puede instalarse y configurarse. Django puede:

- Instalarse en diferentes sistemas operativos.
- Instalarse desde el código fuente, desde el Python Package Index (PyPi) y, en muchos casos, desde la aplicación de gestión de paquetes de la computadora anfitriona.
- Configurarse para usar una de entre varias bases de datos, que también pueden necesitar instalarse y configurarse por separado.
- Ejecutarse en el entorno Python principal del sistema o dentro de entornos virtuales de Python independientes.

Cada una de estas opciones requiere una configuración ligeramente distinta. Las siguientes subsecciones explican algunas de tus opciones. En el resto del artículo te mostraremos cómo configurar Django en un pequeño número de sistemas operativos, y esa configuración se dará por supuesta durante el resto del módulo.

> [!NOTE]
> Otras posibles opciones de instalación se cubren en la documentación oficial de Django. Enlazamos a los [documentos apropiados más abajo](#ver_también).

#### ¿Qué sistemas operativos son compatibles?

Las aplicaciones web Django pueden ejecutarse en casi cualquier máquina capaz de ejecutar el lenguaje de programación Python 3: Windows, macOS, Linux/Unix, Solaris, por nombrar solo unos pocos.
Casi cualquier computadora debería tener el rendimiento necesario para ejecutar Django durante el desarrollo.

En este artículo daremos instrucciones para Windows, macOS y Linux/Unix.

#### ¿Qué versión de Python debería usarse?

Puedes usar cualquier versión de Python compatible con la versión de Django que uses como destino.
Para Django 6.1 las versiones permitidas son Python 3.12 a 3.14 (ver [FAQ:Installation](https://docs.djangoproject.com/en/6.1/faq/install/#what-python-version-can-i-use-with-django)).

El proyecto Django _recomienda_ (y "soporta oficialmente") usar la versión más reciente disponible de la versión de Django compatible.

#### ¿Dónde podemos descargar Django?

Hay tres lugares desde donde descargar Django:

- El Python Package Repository (PyPi), usando la herramienta _pip_. Esta es la mejor forma de obtener la última versión estable de Django.
- Usar una versión del gestor de paquetes de tu computadora. Las distribuciones de Django empaquetadas con sistemas operativos ofrecen un mecanismo de instalación familiar. Ten en cuenta, sin embargo, que la versión empaquetada puede ser bastante antigua, y solo puede instalarse en el entorno Python del sistema (que puede no ser lo que quieras).
- Instalar desde el código fuente. Puedes obtener e instalar la versión más reciente de Django directamente desde el código fuente. Esto no se recomienda para principiantes, pero es necesario cuando estés listo para empezar a contribuir de vuelta al propio Django.

Este artículo muestra cómo instalar Django desde PyPi, para obtener la última versión estable.

#### ¿Qué base de datos?

Django soporta oficialmente las bases de datos PostgreSQL, MariaDB, MySQL, Oracle y SQLite, y existen bibliotecas de la comunidad que ofrecen distintos niveles de soporte para otras bases de datos SQL y NoSQL populares. Te recomendamos que elijas la misma base de datos tanto para producción como para desarrollo (aunque Django abstrae muchas de las diferencias entre bases de datos usando su Object-Relational Mapper (ORM), todavía existen [problemas potenciales](https://docs.djangoproject.com/en/6.1/ref/databases/) que es mejor evitar).

En este artículo (y en la mayor parte de este módulo) usaremos la base de datos _SQLite_, que almacena sus datos en un archivo. SQLite está pensada para usarse como base de datos ligera y no puede soportar un alto nivel de concurrencia. Sin embargo, es una excelente elección para aplicaciones que son principalmente de solo lectura.

> [!NOTE]
> Django está configurado para usar SQLite por defecto cuando inicias tu proyecto de sitio web con las herramientas estándar (_django-admin_). Es una gran elección cuando estás empezando, porque no requiere configuración adicional.

#### ¿Instalar en todo el sistema o en un entorno virtual de Python?

Cuando instalas Python 3 obtienes un único entorno global que es compartido por todo el código Python 3. Aunque puedes instalar los paquetes de Python que quieras en ese entorno, solo puedes tener instalada una versión concreta de cada paquete a la vez.

> [!NOTE]
> Las aplicaciones Python instaladas en el entorno global pueden entrar en conflicto entre sí (por ejemplo, si dependen de versiones diferentes del mismo paquete).

Si instalas Django en el entorno predeterminado/global, solo podrás usar una versión de Django en esa computadora. Esto puede ser un problema si quieres crear nuevos sitios web (usando la última versión de Django) mientras mantienes sitios web que dependen de versiones más antiguas.

Como resultado, los desarrolladores experimentados de Python/Django normalmente ejecutan las aplicaciones Python dentro de _entornos virtuales de Python_ independientes. Esto permite tener múltiples entornos Django diferentes en una misma computadora. ¡El propio equipo de desarrollo de Django recomienda que uses entornos virtuales de Python!

Este módulo asume que has instalado Django en un entorno virtual, y a continuación te mostraremos cómo hacerlo.

## Instalación de Python 3

Para poder usar Django necesitas tener Python 3 en tu sistema operativo.
También necesitarás la herramienta del [Python Package Index](https://pypi.org/) — _pip3_ — que se usa para gestionar (instalar, actualizar y eliminar) los paquetes/bibliotecas de Python que usan Django y tus otras aplicaciones de Python.

Esta sección explica brevemente cómo puedes comprobar qué versiones de Python están presentes, e instalar versiones nuevas cuando lo necesites, en Ubuntu Linux 26.04 (y 24.04), macOS y Windows 11.

> [!NOTE]
> Dependiendo de tu plataforma, también podrías instalar Python/pip desde el propio gestor de paquetes de tu sistema operativo o mediante otros mecanismos. Para la mayoría de las plataformas puedes descargar los archivos de instalación necesarios desde <https://www.python.org/downloads/> e instalarlos usando el método específico apropiado para tu plataforma.

### Ubuntu 26.04

Ubuntu Linux 26.04 LTS incluye Python 3.14 por defecto.
Puedes confirmarlo ejecutando el siguiente comando en la terminal bash:

```bash
python3 -V
# Salida: Python 3.14.4
```

Sin embargo, ni la herramienta del Python Package Index (_pip3_) ni el módulo _venv_ (que usarás más adelante para crear entornos virtuales) están disponibles por defecto.
Puedes instalar ambos en la terminal bash usando:

```bash
sudo apt install python3-pip python3-venv
```

> [!NOTE]
> Si en cambio usas **Ubuntu 24.04 LTS**, `python3 -V` mostrará Python 3.12.
> Esta versión está dentro del [rango compatible con Django 6.1](https://docs.djangoproject.com/en/6.1/faq/install/#what-python-version-can-i-use-with-django), así que no necesitas instalar una versión más reciente de Python para seguir el tutorial.
> Aun así, tendrás que ejecutar `sudo apt install python3-pip python3-venv`: pip y venv tampoco vienen instalados por defecto en 24.04.

### macOS

macOS no incluye Python 3 por defecto (Python 2 sí viene incluido en versiones más antiguas).
Puedes confirmarlo ejecutando el siguiente comando en la terminal:

```bash
python3 -V
```

Esto mostrará el número de versión de Python, lo que indica que Python 3 está instalado, o bien `python3: command not found`, lo que indica que no se encontró Python 3.

Puedes instalar fácilmente Python 3 (junto con la herramienta _pip3_) desde [python.org](https://www.python.org/):

1. Descarga el instalador necesario:
   1. Ve a <https://www.python.org/downloads/macos/>
   2. Descarga la versión estable más reciente [compatible](https://docs.djangoproject.com/en/6.1/faq/install/#what-python-version-can-i-use-with-django) con Django 6.1.
      (en el momento de escribir esto, es Python 3.14.7).

2. Localiza el archivo usando _Finder_ y haz doble clic en el archivo del paquete. Sigue las instrucciones de instalación.

Confirma que la instalación se realizó correctamente abriendo una nueva ventana de terminal, ejecutando `python3 -V` de nuevo y comprobando el número de versión de Python.

De forma similar, puedes comprobar que _pip3_ está instalado listando los paquetes disponibles:

```bash
pip3 list
```

### Windows 11

Windows no incluye Python por defecto, pero puedes instalarlo fácilmente (junto con la herramienta _pip3_) desde [python.org](https://www.python.org/):

1. Descarga el instalador necesario:
   1. Ve a <https://www.python.org/downloads/windows/>
   2. Descarga la versión estable más reciente [compatible](https://docs.djangoproject.com/en/6.1/faq/install/#what-python-version-can-i-use-with-django) con Django 6.1.
      (en el momento de escribir esto, es Python 3.14.7).

2. Instala Python haciendo doble clic en el archivo descargado y siguiendo las instrucciones de instalación.
3. Asegúrate de marcar la casilla llamada "Add Python to PATH".

Después puedes abrir una nueva línea de comandos y verificar que Python 3 se instaló introduciendo el siguiente texto:

```bash
py -3 -V
```

El instalador de Windows incorpora _pip3_ (el gestor de paquetes de Python) por defecto.
Puedes listar los paquetes instalados como se muestra a continuación:

```bash
py -3 -m pip list
```

> [!NOTE]
> El instalador debería configurar todo lo necesario para que el comando anterior funcione.
> Sin embargo, si obtienes un mensaje indicando que no se puede encontrar Python, es posible que hayas olvidado añadirlo a la ruta (path) de tu sistema.
> Puedes hacerlo ejecutando el instalador de nuevo, seleccionando "Modify" (Modificar) y marcando la casilla llamada "Add Python to environment variables" en la segunda página.

## Invocar Python 3 y pip3

Habrás notado que en las secciones anteriores usamos comandos diferentes para invocar Python 3 y pip en distintos sistemas operativos.

Si solo tienes instalado Python 3 (y no Python 2), normalmente puedes usar los comandos simples `python` y `pip` para ejecutar Python y pip en cualquier sistema operativo.
Si esto está permitido en tu sistema, obtendrás una cadena de versión "3" al ejecutar `-V` con los comandos simples, como se muestra a continuación:

```bash
python -V
pip -V
```

Si tienes instalado Python 2, entonces para usar la versión 3 deberías anteponer los comandos con `python3` y `pip3` en Linux/macOS, y con `py -3` y `py -3 -m pip` en Windows:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Las instrucciones a continuación muestran los comandos específicos de cada plataforma, ya que funcionan en más sistemas.

## Uso de Django dentro de un entorno virtual de Python

Crearemos nuestros entornos virtuales con [venv](https://docs.python.org/3/library/venv.html), la herramienta de entornos virtuales integrada en el propio Python (Python incluye _venv_ desde la versión 3.3, así que no hay que instalar nada más aparte de lo que configuraste en [Instalación de Python 3](#instalación_de_python_3)). Esto es también lo que [recomienda el propio proyecto Django](https://docs.djangoproject.com/en/6.1/intro/contributing/#getting-a-copy-of-django-s-development-version).

> [!NOTE]
> En Ubuntu debes haber instalado antes el paquete `python3-venv` para que esto funcione (consulta [Ubuntu 26.04](#ubuntu_26.04)). En macOS y Windows, _venv_ se incluye automáticamente al instalar Python desde python.org, así que no hay un paso de configuración aparte en esas plataformas.

### Creación de un entorno virtual

Navega hasta la carpeta donde quieras guardar tus proyectos de Django y luego crea un nuevo entorno virtual usando el módulo `venv`. El siguiente comando crea una carpeta llamada `my_django_environment` que contiene una copia independiente de Python y sus herramientas:

```bash
# Linux/macOS
python3 -m venv my_django_environment

# Windows
py -3 -m venv my_django_environment
```

El entorno todavía no está activo: tienes que activarlo de forma explícita, y tendrás que volver a hacerlo en cada nueva sesión de terminal:

```bash
# Linux/macOS
source my_django_environment/bin/activate

# Windows (Command Prompt)
my_django_environment\Scripts\activate.bat

# Windows (PowerShell)
my_django_environment\Scripts\Activate.ps1
```

> [!NOTE]
> Si PowerShell se niega a ejecutar `Activate.ps1` con un mensaje que indica que la ejecución de scripts está deshabilitada, primero tendrás que permitir la ejecución de scripts para la sesión actual:
>
> ```bash
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
> ```

Una vez que el entorno está activo, el inicio del prompt mostrará el nombre del entorno entre paréntesis, como en el siguiente ejemplo de Ubuntu (el efecto es el mismo en Windows/macOS):

```plain
(my_django_environment) ubuntu@ubuntu:~$
```

Ahora que estás dentro del entorno virtual puedes instalar Django y empezar a desarrollar.

> [!NOTE]
> A partir de ahora en este artículo (y de hecho en todo el módulo), asume que todos los comandos se ejecutan dentro de un entorno virtual de Python como el que configuramos arriba.

### Uso de un entorno virtual

Hay solo unas pocas cosas más que deberías saber sobre cómo trabajar con entornos virtuales:

- Para salir del entorno actual, ejecuta `deactivate`.
- Para volver a usar el entorno en una nueva sesión de terminal, ejecuta de nuevo su comando de activación (por ejemplo, `source my_django_environment/bin/activate`).
  Cada entorno es solo una carpeta, así que no hay un comando aparte para listar entornos o cambiar entre ellos.
- Para eliminar un entorno por completo, primero desactívalo con `deactivate` y luego borra su carpeta (p. ej., `rm -rf my_django_environment` en Linux/macOS, o elimina la carpeta en el Explorador de archivos en Windows).

## Instalación de Django

Una vez que hayas creado un entorno virtual y lo hayas activado, puedes usar _pip3_ para instalar Django.

```bash
# Linux/macOS
python3 -m pip install django~=6.1.0

# Windows
py -3 -m pip install django~=6.1.0
```

Puedes comprobar que Django está instalado ejecutando el siguiente comando (esto solo comprueba que Python puede encontrar el módulo Django):

```bash
# Linux/macOS
python3 -m django --version

# Windows
py -3 -m django --version
```

> [!NOTE]
> Si el comando anterior de Windows no muestra un módulo django presente, prueba:
>
> ```bash
> py -m django --version
> ```
>
> En Windows, los scripts de _Python 3_ se lanzan anteponiendo el comando con `py -3`, aunque esto puede variar según tu instalación concreta.
> Prueba a omitir el modificador `-3` si tienes problemas con los comandos.
> En Linux/macOS, el comando es `python3`.

> [!WARNING]
> El resto de este **módulo** usa el comando de _Linux_ para invocar Python 3 (`python3`). Si estás trabajando en _Windows_, reemplaza este prefijo por: `py -3`.

## Gestión del código fuente con Git y GitHub

Las herramientas de gestión y versionado del código fuente (SCM) te permiten almacenar y recuperar de forma fiable versiones de tu código fuente, probar cambios, y compartir código entre tus experimentos y el "código conocido como bueno" cuando lo necesites.

Existen muchas herramientas SCM distintas, entre ellas git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System), etc., y servicios de alojamiento SCM en la nube como Bitbucket, GitHub y GitLab.
Para este tutorial alojaremos nuestro código en [GitHub](https://github.com/), uno de los servicios de alojamiento de código fuente basados en la nube más populares, y usaremos la herramienta **git** para gestionar nuestro código fuente localmente y enviarlo a GitHub cuando sea necesario.

> [!NOTE]
> ¡Usar herramientas SCM es una buena práctica de desarrollo de software!
> Estas instrucciones ofrecen una introducción básica a git y GitHub.
> Para aprender más, consulta [Control de versiones](/es/docs/Learn_web_development/Core/Version_control) y [Git and GitHub learning resources](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) (documentación de GitHub).

### Conceptos clave

Git (y GitHub) usan repositorios ("repos") como el "contenedor" de nivel superior para almacenar código, donde cada repositorio normalmente contiene el código fuente de una sola aplicación o módulo.
Los repositorios pueden ser públicos, en cuyo caso el código es visible para todo el mundo en internet, o privados, en cuyo caso están restringidos a la organización o cuenta de usuario propietaria.

Todo el trabajo se realiza en una "rama" concreta del código de tu repositorio.
Cuando quieres respaldar algunos cambios en una rama, puedes crear una "confirmación" (commit), que almacena todos los cambios desde tu última confirmación en la rama actual.

El repositorio se crea con una rama predeterminada llamada "main". Puedes crear otras ramas a partir de esta usando git, las cuales inicialmente tienen todas las confirmaciones de la rama original.
Puedes evolucionar las ramas por separado añadiendo confirmaciones, y después usar una "solicitud de extracción" (Pull Request, PR) en GitHub para fusionar cambios de una rama a otra.
También puedes usar git para cambiar entre ramas en tu computadora local, por ejemplo, para probar cosas distintas.

Además de las ramas, es posible crear `tags` (etiquetas) en cualquier rama y recuperar esa rama más tarde en ese punto concreto.

### Crear una cuenta y un repositorio en GitHub

Primero crearemos una cuenta en GitHub (esto es gratis).
Luego crearemos y configuraremos un repositorio llamado "django_local_library" para almacenar el [sitio web de la biblioteca local](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) a medida que lo desarrollamos en el resto de este tutorial.

Los pasos son:

1. Visita <https://github.com/> y crea una cuenta.
2. Una vez que hayas iniciado sesión, haz clic en el enlace **+** en la barra de herramientas superior y selecciona **New repository**.
3. Completa todos los campos de este formulario.
   Aunque no son obligatorios, se recomiendan encarecidamente.
   - Introduce un nombre de repositorio: "django_local_library".
   - Introduce una nueva descripción de repositorio: "Local Library website written in Django".
   - Selecciona "Public" para el repositorio (la opción predeterminada).

     > [!WARNING]
     > Esto hará que _todo_ el código fuente sea visible.
     > Recuerda no almacenar credenciales u otro material sensible en tu repositorio a menos que sea privado.

   - Activa el interruptor **Add README** (**On**).
   - Elige **Python** en la lista de selección _Add .gitignore_.
   - Elige la licencia que prefieras en la lista de selección _Add license_.
     MDN usa "Creative Commons Zero v1.0 Universal" para este ejemplo.

4. Pulsa **Create repository**.

   El repositorio se creará, conteniendo solo los archivos `.gitignore`, `LICENSE` y `README.md`.

### Clonar el repositorio en tu computadora local

Ahora que el repositorio ("repo") se creó en GitHub, vamos a clonarlo (copiarlo) a nuestra computadora local:

1. En GitHub, haz clic en el botón verde **Code**.
   En la sección "Clone", selecciona la pestaña "HTTPS" y copia la URL.
   Si usaste el nombre de repositorio "django_local_library", la URL debería ser algo como: `https://github.com/<tu_id_de_usuario_git>/django_local_library.git`.

2. Instala _git_ en tu computadora local ([guía oficial de descarga de Git](https://git-scm.com/downloads/)).
3. Configura la autenticación para que git pueda enviar cambios a GitHub.
   La forma más sencilla es instalar la [CLI de GitHub](https://cli.github.com/) y luego ejecutar el siguiente comando.
   Cuando te lo pida, selecciona **GitHub.com**, **HTTPS**, **Yes** (para autenticar git con tus credenciales de GitHub) y **Login with a web browser**:

   ```bash
   gh auth login
   ```

   > [!NOTE]
   > GitHub no acepta la contraseña de tu cuenta para las operaciones de git.
   > Para otras opciones, incluidas las claves SSH, consulta [Caching your GitHub credentials in Git](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git) (documentación de GitHub).

4. Abre una línea de comandos/terminal y clona tu repositorio usando la URL que copiaste antes:

   ```bash
   git clone https://github.com/<tu_id_de_usuario_git>/django_local_library.git
   ```

   Esto creará el repositorio dentro del directorio actual.

5. Navega hasta la carpeta del repositorio.

   ```bash
   cd django_local_library
   ```

### Modificar y sincronizar cambios

Ahora vamos a modificar el archivo `.gitignore` en la computadora local, confirmar el cambio, y actualizar el repositorio en GitHub.
Este es un cambio útil de hacer, pero sobre todo lo hacemos para mostrarte cómo obtener cambios desde GitHub, hacer cambios localmente, y luego enviarlos a GitHub.

1. En la línea de comandos/terminal, primero hacemos "fetch" (obtenemos) y luego "pull" (obtenemos y fusionamos en la rama actual) la última versión del código fuente desde GitHub:

   > [!NOTE]
   > Este paso no es estrictamente necesario ya que acabamos de clonar el código fuente y sabemos que está actualizado.
   > Sin embargo, en general deberías actualizar tus fuentes desde GitHub antes de hacer cambios.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   El "origin" es un _remoto_, que representa la ubicación del repositorio donde está el código fuente, y "main" es la rama.
   Puedes verificar que origin es nuestro repositorio en GitHub usando el comando: `git remote -v`.

2. A continuación, creamos una nueva rama para guardar nuestros cambios:

   ```bash
   git checkout -b update_gitignore
   ```

   El comando `checkout` se usa para cambiar alguna rama a ser la rama actual con la que estás trabajando.
   El indicador `-b` indica que queremos crear una nueva rama llamada "update_gitignore" en lugar de seleccionar una rama existente con ese nombre.

3. Abre el archivo **.gitignore**, copia las siguientes líneas al final, y guarda:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Ten en cuenta que `.gitignore` se usa para indicar archivos que no deben respaldarse automáticamente con git, como archivos temporales y otros artefactos de compilación.

4. Usa el comando `add` para añadir todos los archivos modificados (que no estén ignorados por el archivo **.gitignore**) al "área de preparación" de la rama actual.

   ```bash
   git add -A
   ```

5. Usa el comando `status` para comprobar que todos los archivos que vas a confirmar (`commit`) son correctos (quieres incluir archivos fuente, no binarios, archivos temporales, etc.).
   Debería verse algo parecido al siguiente listado.

   ```bash
   git status
   ```

   ```plain
   On branch update_gitignore
   Changes to be committed:
     (use "git restore --staged <file>..." to unstage)

           modified:   .gitignore
   ```

6. Cuando estés satisfecho, confirma (`commit`) los archivos a tu repositorio local, usando el indicador `-m` para especificar un mensaje de confirmación conciso pero claro.
   Esto equivale a dar tu visto bueno a los cambios y convertirlos en parte oficial del repositorio local.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. En este punto, el repositorio remoto no se ha modificado.
   Podemos enviar (`push`) la rama `update_gitignore` al repositorio "origin" (GitHub) usando el siguiente comando:

   ```bash
   git push origin update_gitignore
   ```

8. Vuelve a la página de GitHub donde creaste tu repositorio y actualiza la página.

   Debería aparecer un banner con un botón para pulsar si quieres "Compare and pull request" la rama que acabas de subir.
   Selecciona el botón y luego sigue las instrucciones para crear y después fusionar una solicitud de extracción (pull request).

   ![Banner que pregunta al usuario si quiere comparar y fusionar actualizaciones recientes de la rama](github_compare_and_pull_banner.png)

   Después de la fusión, la rama "main" del repositorio en GitHub contendrá tus cambios en `.gitignore`.

9. Puedes seguir actualizando tu repositorio local a medida que cambien los archivos, usando este ciclo de agregar/confirmar/enviar (add/commit/push).

En el siguiente tema usaremos este repositorio para almacenar el código fuente de nuestro sitio web de la biblioteca local.

## Otras herramientas de Python

Los desarrolladores de Python experimentados pueden instalar herramientas adicionales, como linters (que ayudan a detectar errores comunes en el código).

Ten en cuenta que deberías usar un linter compatible con Django, como [pylint-django](https://pypi.org/project/pylint-django/), ya que algunos linters de Python comunes (como `pylint`) informan incorrectamente de errores en los archivos estándar generados por Django.

## Comprobación de tu instalación

La prueba anterior funciona, pero no es muy divertida. Una prueba más interesante es crear un proyecto esqueleto y ver que funciona. Para hacerlo, primero navega en tu línea de comandos/terminal hasta donde quieras almacenar tus aplicaciones Django. Crea una carpeta para tu sitio de prueba y navega hasta ella.

```bash
mkdir django_test
cd django_test
```

Después puedes crear un nuevo sitio esqueleto llamado "_mytestsite_" usando la herramienta **django-admin**, como se muestra a continuación. Después de crear el sitio puedes navegar a la carpeta donde encontrarás el script principal para gestionar proyectos, llamado **manage.py**.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Podemos ejecutar el _servidor web de desarrollo_ desde esta carpeta usando **manage.py** y el comando `runserver`, como se muestra a continuación.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Puedes ignorar las advertencias sobre "unapplied migration(s)" en este punto.

Una vez que el servidor esté en ejecución puedes ver el sitio navegando a la siguiente URL en tu navegador web local: `http://127.0.0.1:8000/`.
Deberías ver la página de bienvenida predeterminada de Django, que muestra un cohete y el mensaje "The install worked successfully! Congratulations!".

## Resumen

Ahora tienes un entorno de desarrollo Django funcionando en tu computadora.

En la sección de comprobación también viste brevemente cómo podemos crear un nuevo sitio web Django usando `django-admin startproject`, y ejecutarlo en tu navegador usando el servidor web de desarrollo (`python3 manage.py runserver`). En el siguiente artículo, ampliamos este proceso, construyendo una aplicación web simple pero completa.

## Ver también

- [Guía de instalación rápida](https://docs.djangoproject.com/en/6.1/intro/install/) (documentación de Django)
- [Cómo instalar Django — Guía completa](https://docs.djangoproject.com/en/6.1/topics/install/) (documentación de Django) — también cubre cómo eliminar Django
- [Cómo instalar Django en Windows](https://docs.djangoproject.com/en/6.1/howto/windows/) (documentación de Django)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
