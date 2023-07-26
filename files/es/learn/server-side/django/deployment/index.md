---
title: "Tutorial de Django Parte 11: Desplegando Django a producción"
slug: Learn/Server-side/Django/Deployment
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

Ahora que has creado (y probado) un fantastico sitio web para la [Biblioteca Local](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website), querrás instalarlo en un servidor web público de manera que pueda ser accedido por el personal y los miembros de la biblioteca a través de Internet. Este artículo proporciona una visión general de cómo buscar un host para desplegar tu sitio web y de lo que necesitas hacer para conseguir que tu sitio esté listo en producción.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Completar todos los tutoriales de los temas previos, incluyendo
        <a href="/es/docs/Learn/Server-side/Django/Testing"
          >Django Tutorial Part 10: Testing a Django web application</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender ¿cómo? y ¿dónde? puedes puedes desplegar una app de Django en
        producción.
      </td>
    </tr>
  </tbody>
</table>

## Introducción

Una vez que tu sitio este terminado (o lo suficientemente terminado como para iniciar una prueba pública) vas a necesitar alojarla en un lugar más público y accesible que tu computadora personal.

Hasta ahora has estado trabajando en un entorno de desarrollo, usando _Django development web server_ para compartir tu sitio con el navegador/red local, y corriendo tu sitio web con configuraciones (inseguras) de desarrollo que exponen la depuración y otra informacion privada. Antes de que puedas alojar tu sitio web externamente, lo primero que tendrás que hacer es:

- Introducir algunos cambios en las configuraciones del proyecto.
- Elegir un entorno para alojar la aplicacion Django.
- Elegir un entorno para alojar cualquier archivo estático.
- Configurar una infraestructura a nivel producción para servir tu sitio web.

Este tutorial provee una guía de opciones para elegir un sitio de alojamiento, una breve descripción general de lo que necesitas hacer para preparar tu aplicación Django en producción, y un ejemplo práctico de cómo instalar el sitio web de LocalLibrary en el servicio de alojamiento en la nube de [Heroku](https://www.heroku.com/).

## ¿Qué es un entorno de producción?

El entorno de producción es el entorno proporcionado por el servidor en el que correrá su sitio web para uso externo. El entorno incluye:

- Equipos en los que el sitio web correrá.
- Sistema operativo (p.e. Linux, Windows).
- Lenguajes de programación y librerías sobre las que su sitio web está escrito.
- Servidor web empleado para servir páginas y otros contenidos (p.e. Nginx, Apache).
- Servidor de aplicaciones que transmite peticiones "dinámicas" entre su sitio web Django y el servidor web.
- Bases de datos que su sitio web necesita.

> **Nota:** Dependiendo de como esté configurado su entorno de producción, usted podría disponer también de un proxy inverso, balanceador de carga, etc.

El servidor podría estar ubicado en sus propias instalaciones y conectado a Internet a través de un enlace rápido, pero lo más común es utilizar un computador alojado "en la nube". Esto en realidad implica que su código es ejecutado en algún computador remoto (o posiblemente un computador "virtual") en el centro (o centros) de datos de su compañía de servicios de _hosting._ El servidor remoto normalmente ofrecerá un determinado nivel garantizado de recursos de computación (es decir, CPU, RAM, memoria de almacenamiento, etc) y de conectividad a Internet por un cierto precio.

A este tipo de hardware de computación/comunicaciones accesible de forma remota se le denomina _Infrastructure as a Service_ o _Infraestructura como Servicio (IaaS)_. Muchos proveedores de IaaS ofrecen la opción de preinstalar un sistema operativo en particular, sobre el cual se debe instalar el resto de componentes de su entorno de producción. Otros permiten seleccionar entornos plenamente configurados, con incluso configuraciones de Django y servidor web establecidas.

> **Nota:** Los entornos pre-construidos le permiten establecer su sitio web de manera muy sencilla, ya que reducen el trabajo de configuración, pero las opciones disponibles podrían limitarle al uso de un servidor (u otros componentes) poco conocido, o podrían estar basados en versiones antiguas del Sistema Operativo. A menudo es preferible que uno mismo instale sus propios componentes, de manera que disponga de los que desee, y en el momento que necesite subir el nivel de prestaciones de alguna parte del sistema, tener cierta idea de por dónde empezar

Otros proveedores de _hosting_ incluyen Django como parte de una _Plataform as a Service_ o _Plataforma como Servicio (PaaS)_. En este tipo de _hosting_ no necesita preocuparse de la mayor parte del entorno de producción (servidor web, servidor de aplicaciones, balanceadores de carga), dado que la plataforma host ya se ocupa de todo ello por usted (así como de casi todo lo necesario para escalar su aplicación). Esto hace el despliegue bastante sencillo, puesto que ya solo necesita concentrarse en su aplicación web y no en el resto de la infraestructura de servidor.

Algunos desarrolladores elegirán la mayor flexibilidad ofrecida por una IaaS frente a una PaaS, mientras que otros valorarán el reducido coste general de mantenimiento y la mayor facilidad de escalado de PaaS. Cuando se está empezando, la instalación del sitio web en un sistema PaaS es mucho más sencilla, así que eso es lo que haremos en este tutorial.

> **Nota:** Si eliges un proveedor de hosting adaptado a Python/Django, éste debería facilitar instrucciones de cómo instalar un sitio web Django usando diferentes configuraciones de servidor web, servidor de aplicaciones, proxy inverso, etc (esto es irrelevante si eliges una PaaS). Por ejemplo, existen muchas guías paso-a-paso para distintas configuraciones en la [Digital Ocean Django community docs](https://www.digitalocean.com/community/tutorials?q=django).

## Eligiendo un proveedor de hosting

Existen más de 100 proveedores de hosting de los que se sabe que, o bien dan soporte activo, o funcionan bien con Django (puedes encontrar una lista bastante extensa en [Djangofriendly hosts](http://djangofriendly.com/hosts/)). Estos proveedores proporcionan diferentes tipos de entornos (IaaS, PaaS), así como diferentes niveles de recursos de computación y comunicaciones a diferentes precios.

Algunos aspectos a considerar al elegir un host son:

- Una estimación de cómo de ocupado va a estar el sitio y el coste de los recursos de datos y computación requeridos para atender esa demanda.
- Nivel de soporte para el escalado tanto horizontal (añadir más máquinas) como vertical (subir de nivel con máquinas más potentes), y el coste que ello supone.
- Dónde están ubicados los centros de datos de los proveedores y, por consiguientte, a cuáles será probablemente más rápido el acceso.
- Los históricos de permanencia en actividad e inactividad del host.
- Herramientas proporcionadas para la gestión del sitio — si son fáciles de usar y si son seguras (Por ejemplo, SFTP frente a FTP).
- Frameworks incorporadas para poder monitorear tu servidor.
- Limitaciones conocidas. Algunos hosts bloquearán deliberadamente ciertos servicios (por ejemplo, email). Otros ofrecerán solo un cierto número de horas de "tiempo vivo" en determinados niveles de precios, u ofrecerán solo una pequeña cantidad de almacenamiento.
- Beneficios adicionales. Algunos proveedores pueden ofrecer de forma gratuita nombres de dominio y soporte para certificados SSL por los que, de otro modo, tendrías que pagar.
- Si el nivel "gratuito" del que dependes expira al cabo de un tiempo, o si el coste de migrar a un nivel más caro puede implicar que sea más conveniente usar algún otro servicio desde el primer momento.

La buena noticia cuando estás en los comienzos es que existen bastantes sitios que proporcionan entornos de computación de "evaluación", "desarrollo" o "de nivel aficionado" de forma gratuita. Se trata siempre de entornos bastantes limitados/restringidos en recursos, y debes estar precavido en que pueden expirar al cabo de un periodo de introducción. Son, no obstante, muy útiles para probar sitios con poco tráfico en un entorno real, y pueden proporcionar una migración sencilla contratando más recursos si el sitio alcanza más ocupación. Entre las opciones conocidas de esta categoría tenemos [Heroku](https://www.heroku.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/), etc.

Muchos proveedores disponen también de un nivel "básico" que proporciona niveles de capacidad de computación más útiles y con menos limitaciones. [Digital Ocean](https://www.digitalocean.com/) y [Python Anywhere](https://www.pythonanywhere.com/) son ejemplos de proveedores populares de hosting que ofrecen niveles básicos de computación relativamente baratos (en el rango de los 5 a los 10 $USD mensuales).

> **Nota:** Recuerda que el precio no es el único criterio de selección. Si tu sitio web tiene éxito, la escalabilidad puede convertirse en la consideración más importante.

## Preparando tu sitio web para hacerlo público

La [Django skeleton website](/es/docs/Learn/Server-side/Django/skeleton_website) creada usando las herramientas _django-admin_ y _manage.py_ están configuradas para hacer más sencillo el desarrollo. Muchos de los ajustes del proyecto Django (especificados en **settings.py**) deberían ser distintos en producción, por razones tanto de seguridad como de rendimiento.

> **Nota:** Es bastante común disponer de un archivo **settings.py** separado en producción, e importar los ajustes sensibles desde un archivo aparte o desde una variable de entorno. Este archivo debería, por tanto, estar protegido, aún cuando el resto del código fuente esté disponible en un repositorio público.

Los ajustes críticos que debes comprobar son:

- `DEBUG`. Debería establecerse como `False` en producción (`DEBUG = False`). Así se evita que se muestre la traza de depuración sensible/confidencial y la información variable.
- `SECRET_KEY`. Es un valor aleatorio grande utilizado para la protección CRSF etc. Es importante que la clave utilizada en producción no esté en el control fuente ni accesible desde fuera del servidor de producción. La documentación Django sugiere que debería ser cargada desde una variable de entorno o leída desde un archivo de sólo servicio (_serve-only file_).

```python
# Read SECRET_KEY from an environment variable
import os
SECRET_KEY = os.environ['SECRET_KEY']

#OR

#Read secret key from a file
with open('/etc/secret_key.txt') as f:
SECRET_KEY = f.read().strip()
```

Modifiquemos la aplicación _LocalLibrary_ de manera que leamos nuestras variables `SECRET_KEY` y `DEBUG` desde variables de entorno si han sido definidas o, en otro caso, usar los valores por defecto del archivo de configuración.

Abra **/locallibrary/settings.py**, deshabilite la configuración original de l `SECRET_KEY` y añada las nuevas líneas tal como se muestran abajo en **negrita**. Durante el desarrollo no se especificará ninguna variable de entorno para la clave, por lo que se usará el valor por defecto (no debería importar qué clave utilizas aquí, o si la clave tiene "fugas", dado que no la utilizarás en producción).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag')
```

A continuación, comenta el ajuste de `DEBUG` existente y añade la nueva línea que se muestra abajo.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = bool( os.environ.get('DJANGO_DEBUG', True) )
```

El valor de `DEBUG` será `True` por defecto, pero será `False` si el valor de la variable de entorno `DJANGO_DEBUG` se establece como una cadena vacía, es decir, `DJANGO_DEBUG=''`.

> **Nota:** Sería más intuitivo si pudiéramos simplemente marcar y desmarcar la variable de entorno `DJANGO_DEBUG` a `True` y `False` directamente, en lugar de usar "cualquier cadena" o "cadena vacía" (respectivamente). Por desgracia, los valores de las variables de entorno son almacenados como cadenas de Python (_Python strings_), y la única cadena que se evalúa como `False` es la cadena vacía (por ejemplo, `bool('')==False`).

[Deployment checklist](https://docs.djangoproject.com/en/1.10/howto/deployment/checklist/) (Django docs) proporciona una lista de comprobación completa de ajustes que podrías querer cambiar. Puedes también sacar una lista de algunos de ellos usando el siguiente comando de terminal:

```python
python3 manage.py check --deploy
```

## Ejemplo: Instalando LocalLibrary en Heroku

Esta sección aborda una demostración práctica de cómo instalar _LocalLibrary_ en [Heroku PaaS cloud](http://heroku.com).

### ¿Por qué Heroku?

Heroku es uno de los servicios PaaS basados en la nube más duraderos y conocidos. Originalmente únicamente daba soporte a aplicaciones Ruby, pero actualmente puede utilizarse para aplicaciones host de muchos entornos de programación, incluido Django!

Vamos a elegir Heroku por varias razones:

- Heroku tiene un nivel gratuito ([free tier](https://www.heroku.com/pricing)) que es _verdaderamente_ gratuito (aunque con algunas limitaciones).
- Como PaaS, Heroku se hace cargo de gran parte de la infraestructura web por nosotros. Esto hace mucho más sencillos los comienzos, al no tener que preocuparnos por servidores, balanceadores de carga, proxys inversos, o cualquier otro aspecto de la infraestructura web, de los que Heroku se ocupa por nosotros en un segundo plano.
- Aunque tenga algunas limitaciones, éstas no afectarán a nuestra aplicación particular. Por ejemplo:

  - Heroku sólo proporciona almacenamiento efímero, por lo que los archivos subidos por el usuario no pueden almacenarse de forma segura en el propio Heroku.
  - El nivel gratuito mantendrá dormida cualquier aplicación web inactiva que no haya tenido requerimientos dentro de un periodo de media hora. El sitio puede tardar varios segundos en responder cuando se le despierte.
  - El nivel gratuito limita el tiempo que el sitio puede estar en ejecución a cierta cantidad de horas al mes (sin contar el tiempo que el sitio permanece "dormido"). Esto está bien para un sitio de poco uso o de demostración, pero no es asumible si se necesita una disponibilidad del 100%.
  - Otras limitaciones se relacionan en [Limits](https://devcenter.heroku.com/articles/limits) (Heroku docs).

- Lo principal es que funciona, y si te termina gustando, escalar tus aplicaciones será muy sencillo.

Si bien Heroku es perfecto para alojar esta demostración, puede no serlo para tu sitio web real. Heroku facilita la instalación y el escalado, a costa de ser menos flexible, y potencialmente mucho más caro una vez que abandonas el nivel gratuito.

### ¿Cómo funciona Heroku?

Heroku ejecuta sitios web Django dentro de uno o más "[Dynos](https://devcenter.heroku.com/articles/dynos)", que son contenedores Unix virtualizados y aislados que proporcionan el entorno necesario para ejecutar una aplicación. Los dynos están completamente aislados y disponen de un sistema de archivos _efímero_ (sistema de archivos de vida corta que es limpiado/vaciado cada vez que el dyno se reinicia). Lo único que los dynos comparten por defecto son las variables de configuración ([configuration variables](https://devcenter.heroku.com/articles/config-vars)) de las aplicaciones. Heroku utiliza interrnamente un balanceador de carga para distribuir el tráfico web entre todas las dynos "web". Puesto que no se comparte nada entre ellas, Heroku puede escalar una app horizontalmente simplemente añadiendo más dynos (aunque, claro está, podrías necesitar escalar tu base de datos para aceptar conexiones adicionales).

Puesto que el sistema de archivos es efímero, no puedes instalar los servicios requeridos por tu aplicación directamente (por ejemplo, bases de datos, colas, sistemas de cacheado, almacenamiento, servicios de correo electrónico, etc). En su lugar, las aplicaciones web de Heroku usan servicios de respaldo proporcionados por Heroku o terceros como "add-ons" independientes. Una vez adjuntados a tu aplicación web, los dynos acceden a los servicios usando la información contenida en las variables de configuración de la aplicación.

Para ejecutar tu aplicación, Heroku necesita poder instalar el entorno y las dependencias adecuados, y entender cómo están enlazados. Para las apps Django, esta información se proporciona en una serie de archivos de texto:

- **runtime.txt**: el lenguaje de programación y la versión a utilizar.
- **requirements.txt**: dependiencias de los componentes de Python, incluyendo a Django.
- **Procfile**: Lista de procesos que han de ejecutarse para arrancar la aplicación web. Para Django, esto será normalmente el servidor de aplicaciones web Gunicorn (con un script .wsgi).
- **wsgi.py**: Configuración [WSGI](http://wsgi.readthedocs.io/en/latest/what.html) para invocar a nuestra aplicación Django en el entorno Heroku.

Los desarrolladores interactúan con Heroku usando una app/terminal cliente especial, algo muy parecido a un bash script de Unix. Esto permite subir código almacenado en un repositorio git, inspeccionar los procesos en ejecución, ver logs, establecer variables de configuración, y mucho más!.

Para conseguir nuestra aplicación para trabajar en Heroku, necesitaremos colocar nuestra aplicación web Django dentro de un repositorio git, añadir los archivos anteriores, integrar con una base de datos add-on, y hacer cambios para manejar correctamente los archivos estáticos.

Una vez hecho todo eso, podemos crear una cuenta Heroku, obtener el cliente Heroku, y usarlo para instalar nuestro sitio web.

> **Nota:** Las instrucciones indicadas abajo reflejan la forma de trabajar con Heroku en el momento de la redacción. Si Heroku cambia sus procesos de forma significativa, podrías preferir, en su lugar, revisar su documentación de instalación: [Getting Started on Heroku with Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction).

Con esto ya tienes una visión general de lo que necesitas para empezar (vea [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works) para tener una guía más exhaustiva).

### Creando un repositorio de aplicación en Github

Heroku está estrechamente integrado con el sistema de control de versiones de código fuente **git**, usándolo para subir/sincronizar cualquier cambio que hagas en los sistemas activos. Esto se hace añadiendo un nuevo repositorio "remoto" heroku denominado _heroku_ que apunta a un repositorio para tu fuente en la nube Heroku. Durante el desarrollo usas git para almacenar los cambios en tu repositorio "maestro". Cuando quieras desplegar tu sitio, sincronizas tus cambios con el repositorio Heroku.

> **Nota:** Si estás acostumbrado a seguir buenas prácticas de desarrollo de software, probablemente ya estás usando git o algún otro sistema SCM. Si ya dispones de un repositorio git, podrás saltarte este paso.

Existen muchas formas de trabajar con git, pero una de las más sencillas es crear en primer lugar una cuenta en [Github](https://github.com/), crear allí el repositorio, y a continuación sincronizarlo localmente:

1. Visita <https://github.com/> y crea una cuenta.
2. Una vez conectado, haz click en el enlace **+** de la barra de tareas superior y selecciona **New repository**.
3. Rellena todos los campos de este formulario. Aunque no son obligatorios, es muy recomendable que los rellenes todos.

   - Introduce el nombre del nuevo repositorio (por ejemplo, _django_local_library_), y una descripción (por ejemplo "Sitio web de la Biblioteca Local escrita en Django").
   - Selecciona **Python** en la lista de selección _Add .gitignore._
   - Selecciona tu licencia en la lista de selección _Add license_.
   - Marca **Initialize this repository with a README**.

4. Pulsa **Create repository**.
5. Haz click en el botón verde "**Clone or download**" en la página de tu nuevo repositorio.
6. Copia el valor de la URL del campo de texto situado dentro de la caja de diálogo que aparece (debería decir algo como: `https://github.com/<your_git_user_id>/django_local_library.git`).

Ahora que el repositorio ("repo") ha sido creado, querremos clonarlo en nuestra computadora local:

1. Instala _git_ para tu computadora local (puedes encontrar versiones para distintas plataformas [here](https://git-scm.com/downloads)).
2. Abre una ventana/terminal de comandos y clona tu repositorio usando la URL que copiaste anteriormente:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Esto creará el repositorio debajo del punto actual.

3. Navega dentro del nuevo repositorio.

   ```bash
   cd django_local_library.git
   ```

El paso final es copiar en él tu aplicación y a continuación añadir los archivos a tu repositorio usando git:

1. Copia tu aplicación Django en esta carpeta (todos los archivos que estén al mismo nivel que **manage.py** y por debajo, **no** su carpeta locallibrary contenedora).
2. Abre el archivo **.gitignore**, copia las siguientes líneas al final del mismo, y guárdalo (este archivo se utiliza para identificar los archivos que, por defecto, no deberían subirse a git).

   ```bash
   # Text backup files
   *.bak

   #Database
   *.sqlite3
   ```

3. Abre una ventana/terminal de comandos y utiliza el comando `add` para añadir todos los archivos a git.

   ```bash
   git add -A
   ```

4. Utiliza el comando status para comprobar que todos los archivos que vas a añadir son correctos (quieres incluir ficheros fuentes, no binarios, archivos temporales, etc). Debería tener un aspecto similar a la lista siguiente.

   ```bash
   > git status
   On branch master
   Your branch is up-to-date with 'origin/master'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
           new file:   catalog/__init__.py
           ...
           new file:   catalog/migrations/0001_initial.py
           ...
           new file:   templates/registration/password_reset_form.html
   ```

5. Si estás conforme, consolida tus archivos en el repositorio local:

   ```bash
   git commit -m "First version of application moved into github"
   ```

6. A continuación, sincroniza tu repositorio local con el sitio web Github, usando lo siguiente:

   ```bash
   git push origin master
   ```

Una vez completada esta operación, deberías poder regresar a la página de Github donde creaste tu repositorio, refrescar la página, y comprobar que tu toda tu aplicación ha sido ya cargada. Puedes continuar actualizando tu repositorio según vayan cambiando los archivos, usando este ciclo add/commit/push.

> **Nota:** Este es un buen momento para hacer una copia de seguridad de tu proyecto "simple" — algunos de los cambios que vamos a ir haciendo en las siguientes secciones podrían ser útiles para el despliegue en cualquier plataforma (o para el desarrollo), pero otros no.
>
> La _mejor_ manera de hacer esto es usar _git_ para gestionar tus revisiones. Con _git_ puedes no solo volver a una versión anterior en particular, sino que puedes mantener ésta en una "rama" separada de tus cambios en producción, y seleccionar determinados cambios a trasladar entre las ramas de producción y desarrollo. [Learning Git](https://help.github.com/articles/good-resources-for-learning-git-and-github/) merece la pena el esfuerzo, pero queda fuera del alcance de este tema.
>
> La forma _más fácil_ de hacer ésto es simplemente copiar tus archivos en otra ubicación. Usa la manera que más se ajuste a tus conocimientos de git!

### Actualizar la app para Heroku

Esta sección explica los cambios que necesitaras hacer a nuestra aplicación _LocalLibrary_ para ponerla a funcionar en Heroku. Mientras que las instrucciones disponibles en [Getting Started on Heroku with Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) de Heroku asumen que también vas a utilizar el cliente Heroku para ejecutar el entorno de desarrollo local, los cambios que aquí se reflejan son compatibles con el servidor de desarrollo Django existente y las formas de funcionamiento que ya hemos aprendido.

#### Procfile

Crea el archivo `Procfile` (sin extensión) en la carpeta raíz de tu repositorio GitHub para declarar los tipos de procesos de la aplicación y los puntos de entrada. Copia en él el texto siguiente:

```
web: gunicorn locallibrary.wsgi --log-file -
```

La palabra "`web:`" le dice a Heroku que se trata de una web dyno y puede ser enviada a través del tráfico HTTP. El proceso a arrancar en este dyno es _gunicorn_, un servidor de aplicaciones web popular recomendado por Heroku. Arrancamos Gunicorn usando la información de configuración que se encuentra en el módulo `locallibrary.wsgi` (creado con nuestro esqueleto de aplicación: **/locallibrary/wsgi.py**).

#### Gunicorn

[Gunicorn](http://gunicorn.org/) es el servidor HTTP recomendado para usar con Django en Heroku (tal como se indicaba en el Procfile anterior). Es un servidor HTTP puro-Python para aplicaciones WSGI que puede ejecutar múltiples procesos Python concurrentes dentro de un único dyno (para obtener más información, véase [Deploying Python applications with Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn)).

Aunque no necesitaremos _Gunicorn_ para servir nuestra aplicación LocalLibrary durante el desarrollo, lo instalaremos de manera que sean parte de nuestros [requerimientos](#requirements) de Heroku para instalar en el servidor remoto.

Instala _Gunicorn_ localmente usando _pip_ en la línea de comandos (que instalamos en [setting up the development environment](/es/docs/Learn/Server-side/Django/development_environment)):

```bash
pip3 install gunicorn
```

#### Configuración de la Base de Datos

No podemos usar la base de datos por defecto SQLite en Heroku dado que está basada-en-fichero, y sería borrada del sistema de archivos _efímero_ cada que se reiniciara la aplicación (normalmente una vez al día, y cada vez que la aplicación o sus variables de configuración fueran modificadas).

El mecanismo de Herocu para gestionar esta situación es usar una [database add-on](https://elements.heroku.com/addons#data-stores) y configurar la aplicación web utilizando información de una [variable de configuración](https://devcenter.heroku.com/articles/config-vars) del entorno, establecida por la add-on. Existen numerosas opciones de bases de datos, pero nosotros utilizaremos el [nivel hobby tier](https://devcenter.heroku.com/articles/heroku-postgres-plans#plan-tiers) de la base de datos _Heroku postgres_ ya que es gratuita, soportada por Django, e incorporada en nuestra nuevas apps Heroku al usar el nivel gratuito plan dyno hobby.

La información de conexión a la base de datos es proporcionada a la web dyno usando una variable de configuración denominada `DATABASE_URL`. En lugar de codificar esta información en Django, Heroku recomienda que los desarrolladores utilicen el paquete [dj-database-url](https://warehouse.python.org/project/dj-database-url/) para extraer la variable de entorno `DATABASE_URL` y automáticamente convertirla al formato de configuración deseado por Django. Además para instalar el paquete _dj-database-url_ necesitaremos también instalar [psycopg2](http://initd.org/psycopg/), ya que Django lo necesita para interactuar con la base de datos Postgres.

##### dj-database-url (Configuración de base de datos de Django a partir de una variable de entorno)

Instala _dj-database-url_ a nivel local para que se convierta en parte de nuestros [requerimientos](#requirements) para instalar Heroku en el servidor remoto:

```bash
pip3 install dj-database-url
```

##### settings.py

Abre **/locallibrary/settings.py** y copia la siguiente configuración al final del archivo:

```python
# Heroku: Update database configuration from $DATABASE_URL.
import dj_database_url
db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)
```

> **Nota:**
>
> - Nosotros seguiremos utilizando SQLite durante el desarrollo porque la variable de entorno `DATABASE_URL` no será fijada en nuestra computadora de desarrollo.
> - El valor `conn_max_age=500` hace que la conexión sea persistente, lo que es más eficiente que recrear la conexión en cada ciclo de petición. No obstante, esto es opcional y puede ser eliminado si es necesario.

##### psycopg2 (soporte a la base de datos Python Postgres)

Django necesita _psycopg2_ para trabajar con las bases de datos Postgres y tú necesitarás añadir esto a los [requirements.txt](#requirements) para que Heroku lo instale en el servidor remoto (como se expone más adelante en la sección de requerimientos).

Django utilizará la base de datos SQLite en modo local por defecto, porque la variable de entorno `DATABASE_URL` no está establecida en nuestro entorno local. Si quieres cambiar a Postgres completamente y usar nuestra base de datos del nivel gratuito de Heroku tanto en desarrollo como en producción, puedes hacerlo. Por ejemplo, para instalar psycopg2 y sus dependencias localmente en un sistema basado en Linux, usarías los siguientes comandos bash/terminal:

```bash
sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib
pip3 install psycopg2
```

Puedes encontrar instrucciones de instalación para el resto de plataformas en [psycopg2 website](http://initd.org/psycopg/docs/install.html).

No obstante, esto no es necesario — no necesitas tener activa PostGreSQL en el equipo local, en tanto que se lo indicas a Heroku como requerimiento, en `requirements.txt` (ver a continuación).

#### Sirviendo ficheros estáticos en producción

Durante el desarrollo utilizábamos Django y el servidor web de desarrollo de Django para servir nuestros ficheros estáticos (CSS, JavaScript, etc). En un entorno de producción normalmente se sirven los ficheros estáticos desde una red de entrega de contenidos (CDN, Content Delivery Network) o desde el servidor web.

> **Nota:** Servir ficheros estáticos vía Django/aplicación web es ineficiente ya que las peticiones tienen que pasar por código adicional innecesario (Django), en vez de ser gestionados directamente por el servidor web o una CDN completamente independiente. Si bien esto no tiene relevancia en el uso local durante el desarrollo, el uso de este mecanismo en producción tiene un significativo impacto de rendimiento.

Para facilitar el alojamiento de archivos estáticos de forma separada de la aplicación web Django, Django proporciona la herramienta _collectstatic_ para recoger estos archivos para el despliegue (hay una variable de configuración que define de dónde se deben recopliar los archivos cuando se ejecuta _collectstatic_). Las plantillas Django hacen referencia a la localización de almacenamiento de los archivos estáticos en relación a una variable de configuración (`STATIC_URL`), por tanto, esto puede modificarse se los archivos estáticos son movidos a otro host/servidor.

Las variables de configuración más relevantes son:

- `STATIC_URL`: Es la localización URL base desde la cual se servirán los archivos estáticos, por ejemplo en una CDN. Se usa para variables de plantilla estáticas a las que se acceden en nuestra plantilla base (ver [Django Tutorial Part 5: Creating our home page](/es/docs/Learn/Server-side/Django/Home_page)).
- `STATIC_ROOT`: Es la ruta absoluta a un directorio en el que la herramienta "collectstatic" de Django reunirá todos los archivos estáticos referenciados en nuestras plantillas. Una vez recopilados, podrán ser cargados como un grupo a donde hayan de ser alojados.
- `STATICFILES_DIRS`: Relaciona directorios adicionales en los que la herramienta collestatic de Django debería buscar archivos estáticos.

##### settings.py

Abra **/locallibrary/settings.py** y copie la configuración siguiente al final del archivo. La variable `BASE_DIR` debería haber sido ya definida en tu fichero (la variable `STATIC_URL` puede haber sido ya definida dentro del archivo cuando fue creado. Puesto que no provocará ningún fallo, podrías borrar la referencias duplicadas).

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Nosotros haremos el servicio de ficheros utilizando una librería denominada [WhiteNoise](https://warehouse.python.org/project/whitenoise/), que instalaremos y configuraremos en la siguiente sección.

Para más información, vea [Django and Static Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku docs).

#### Whitenoise

Hay muchas formas de servir ficheros estáticos en producción (ya vimos los ajustes Django relevantes en las secciones previas). Heroku recomienda usar el proyecto [WhiteNoise](https://warehouse.python.org/project/whitenoise/) para servir objetos estáticos directamente desde Gunicorn en producción.

> **Nota:** Heroku llama automáticamente a _collectstatic_ y prepara tus ficheros estáticos para ser usados por WhiteNoise después de que se cargue tu aplicación. Revisa la documentación [WhiteNoise](https://warehouse.python.org/project/whitenoise/), en la que se explica cómo funciona y por qué la implementación es un método para servir estos ficheros relativamente eficiente.

Los pasos para instalar _WhiteNoise_ para usarlo dentro del proyecto son:

##### WhiteNoise

Instala WhiteNoise localmente usando el siguiente comando:

```bash
pip3 install whitenoise
```

##### settings.py

Para instalar _WhiteNoise_ en tu aplicación Django, abre **/locallibrary/settings.py**, busca la opción `MIDDLEWARE` y añade `WhiteNoiseMiddleware` cerca de la parte superior de la lista, justo debajo de `SecurityMiddleware`:

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

Opcionalmente, puedes reducir el tamaño de los ficheros estáticos al ser servidos (lo que lo hace más eficiente). Añade lo siguiente al final de **/locallibrary/settings.py**:

```python
# Simplified static file serving.
# https://warehouse.python.org/project/whitenoise/
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
```

#### Requerimientos

Los requerimientos Python de tu aplicación web deben ser almacenados en un archivo **requirements.txt** en la carpeta raíz de tu repositorio. Heroku los instalará cuando reconstruya tu entorno. Puedes crear este archivo utilizando _pip_ en la línea de comandos (ejecuta los siguiente en la raíz del repositorio):

```bash
pip3 freeze > requirements.txt
```

Después de instalar todas las dependencias anteriores, tu archivo **requirements.txt** debería tener _al menos_ estos objetos (aunque los números de versión pueden ser diferentes). Por favor, borra cualquier otra dependencia no listada abajo, a menos que la hayas añadido explícitamente para esta aplicación.

```
dj-database-url==0.4.1
Django==1.10.2
gunicorn==19.6.0
psycopg2==2.6.2
whitenoise==3.2.2
```

> **Nota:** Asegúrate de que existe una línea **psycopg2** como la que se ve arriba! Incluso aunque no lo hayas instalado localmente, deberías añadirla a **requirements.txt**.

#### Runtime

El archivo **runtime.txt**, si ha sido definido, le dice a Heroku que lenguaje de programación usar. Crea el archivo en el raíz del repositorio y añade el siguiente texto:

```
python-3.5.2
```

> **Nota:** Heroku sólo soporta un número pequeño de [Python runtimes](https://devcenter.heroku.com/articles/python-support#supported-python-runtimes). Tú puedes especificar valores de runtime de Python 3, pero en el momento de esta redacción la versión anterior será soportada como definida.

#### Guardar los cambios en Github y volver a probar

A continuacion, guardemos nuestros cambios en Github. En el terminal (dentro de nuestro respositorio), introduce los comandos siguientes:

```python
git add -A
git commit -m "Added files and changes required for deployment to heroku"
git push origin master
```

Antes de continuar, probemos de nuevo nuestro sitio localmente y asegurémonos de que no ha sido afectado por ninguno de los cambios anteriores. Pon en marcha el servidor web de desarrollo de la forma habitual y comprueba que el sitio aún funciona como esperas en tu navegador.

```bash
python3 manage.py runserver
```

Ya deberíamos estar preparados para empezar a desplegar LocalLibrary en Heroku.

### Hazte con una cuenta Heroku

Para empezar a usar Heroku necesitarás en primer lugar crear una cuenta:

- Ve a [www.heroku.com](https://www.heroku.com/) y haz click en el botón **SIGN UP FOR FREE**.
- Introduce tus datos y pulsa a continuación **CREATE FREE ACCOUNT**. Se te pedirá que compruebes que has recibido un email de registro.
- Haz click en el enlace de activación de la cuenta que aparece en el email de registro. Serás llevado de vuelta a tu cuenta en el navegador web.
- Introduce tu contraseña y haz click en **SET PASSWORD AND LOGIN**.
- Ya estarás contectado y serás llevado al tablón de Heroku (Heroku dashboard): <https://dashboard.heroku.com/apps>.

### Instala el cliente

Descarga e instala el cliente Heroku siguiendo estas [instructiones para Heroku](https://devcenter.heroku.com/articles/getting-started-with-python#set-up).

Una vez instalado el cliente, ya podrás ejecutar comandos. Por ejemplo, para mostrar ayuda en el cliente:

```bash
heroku help
```

### Crea y sube el sitio web

Para crear la app ejecutamos el comando "create" en el directorio raíz de nuestro repositorio. Esta operación crea un git remoto ("puntero hacia el repositorio remoto") denominado _heroku_ en nuestro entorno git local.

```bash
heroku create
```

> **Nota:** Puedes nombrar el remoto, si lo deseas, especificando un valor después de "create". Si no, obtendrás un nombre aleatorio. Este nombre es el que se utiliza en la URL por defecto.

Podemos a continuación "empujar" (push) nuestra aplicación hacia el respositorio Heroku como se muestra abajo. Este proceso subirá la aplicación, la empaquetará en un dyno, ejecutará collestatic, y arrancará el sitio.

```bash
git push heroku master
```

Si tenemos suerte, la app ya estará "corriendo" en el sitio, pero no estará funcionando correctamente ya que no hemos colocado las tablas que usa nuestra aplicación. Para hacer esto necesitamos utilizar el comando `heroku run` y arrancar un "[one off dyno](https://devcenter.heroku.com/articles/deploying-python#one-off-dynos)" para realizar una operación de migración. Introduce el siguiente comando en el terminal:

```bash
heroku run python manage.py migrate
```

Vamos a necesitar también poder añadir libros y autores, así que vamos a crear nuestro superusuario de administración, de nuevo utilizando un "one-off dyno":

```bash
heroku run python manage.py createsuperuser
```

Una vez llevado a cabo ésto, podremos ver el sitio. Debería funcionar, aunque no tendrá aún ningún libro. Para abrir el navegador hacia el nuevo sitio web, usa el comando:

```bash
heroku open
```

Crea algunos libros en el sitio de administración, y comprueba que el sitio se comporta tal y como esperas.

### Gestionando addons

Puedes revisar los add-ons de tu app usando el comando `heroku addons`. Se listarán todos los addons, su nivel de precio y estado.

```bash
>heroku addons

Add-on                                     Plan       Price  State
─────────────────────────────────────────  ─────────  ─────  ───────
heroku-postgresql (postgresql-flat-26536)  hobby-dev  free   created
 └─ as DATABASE
```

Aquí vemos que tenemos un único add-on, la base de datos postgres SQL. Es gratuito, y fue creado automáticamente cuando se creó la aplicación. Puedes abrir una página web en la que examinar con más detalle el add-on de la base de datos (o cualquier otro add-on) utilizando el siguiente comando:

```bash
heroku addons:open heroku-postgresql
```

Otros comandos te permiten crear, destruir, subir o bajar de versión de los addons (con una sintaxis similar a la de abrir). Para más información, consulta [Managing Add-ons](https://devcenter.heroku.com/articles/managing-add-ons) (Heroku docs).

### Estableciendo las variables de configuración

Puedes revisar las variables de configuración para el sitio con el comando `heroku config`. Abajo puedes comprobar que solo tenemos una variable, `DATABASE_URL`, usada para configurar nuestra base de datos.

```bash
>heroku config

=== locallibrary Config Vars
DATABASE_URL: postgres://uzfnbcyxidzgrl:j2jkUFDF6OGGqxkgg7Hk3ilbZI@ec2-54-243-201-144.compute-1.amazonaws.com:5432/dbftm4qgh3kda3
```

Si recuerdas de la sección [Preparando tu sitio web para hacerlo público](#Getting_your_website_ready_to_publish), tenemos que establecer variables de entorno para `DJANGO_SECRET_KEY` y `DJANGO_DEBUG`. Vamos a hacerlo ahora.

> **Nota:** La clave secreta tiene que ser verdaderamente secreta! Una forma de generar una nueva clave es crear un nuevo proyecto Django (`django-admin startproject nombredeproyecto`) y obtener la clave generada para tí de su archivo **settings.py**.

Establecemos el valor de la variable `DJANGO_SECRET_KEY` con el comando `config:set` (como se muestra abajo). Recuerda usar tu propia clave secreta!

```bash
>heroku config:set DJANGO_SECRET_KEY=eu09(ilk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh&=

Setting DJANGO_SECRET_KEY and restarting locallibrary... done, v7
DJANGO_SECRET_KEY: eu09(ilk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh
```

De forma similar, establecemos `DJANGO_DEBUG`:

```bash
>heroku config:set DJANGO_DEBUG=''

Setting DJANGO_DEBUG and restarting locallibrary... done, v8
```

Si visitas ahora el sitio recibirás un error "Bad request", porque es _obligatorio_ establecer [ALLOWED_HOSTS](https://docs.djangoproject.com/en/1.10/ref/settings/#allowed-hosts) si tienes establecido `DEBUG=False` (como medida de seguridad). Abre **/locallibrary/settings.py** y cambia el valor de `ALLOWED_HOSTS` para incluir la url base de tu app (por ejemplo, 'locallibrary1234.herokuapp.com') y la URL que usas normalmente en tu servidor de desarrollo local.

```python
ALLOWED_HOSTS = ['<your app URL without the https:// prefix>.herokuapp.com','127.0.0.1']
# For example:
# ALLOWED_HOSTS = ['fathomless-scrubland-30645.herokuapp.com','127.0.0.1']
```

A continuación guarda los cambios y consolídalos en tu repo Github y en Heroku.

```bash
git add -A
git commit -m 'Update ALLOWED_HOSTS with site and development server URL'
git push origin master
git push heroku master
```

> **Nota:** Una vez completada la actualización del sitio en Heroku, introduce una URL que no exista (por ejemplo, **/catalog/doesnotexist/**). Antes se habría mostrado una página de depuración detallada, pero ahora deberías simplemente ver una página de "Not Found".

### Depuración

El cliente Heroku proporciona algunas herramientas para la depuración:

```bash
heroku logs  # Show current logs
heroku logs --tail # Show current logs and keep updating with any new results
heroku config:set DEBUG_COLLECTSTATIC=1 # Add additional logging for collectstatic (this tool is run automatically during a build)
heroku ps   #Display dyno status
```

Si necesitas más información de la que te proporcionan estas herramientas, tendrás que investigar en [Django Logging](https://docs.djangoproject.com/en/1.10/topics/logging/).

## Resumen

Has llegado al final de este tutorial sobre la instalación de apps Django en producción, así como de la serie de tutoriales sobre el trabajo con Django. Esperamos que los hayas encontrado útiles. Puedes encontrar una versión completa del [código fuente en Github aquí](https://github.com/mdn/django-locallibrary-tutorial).

El siguiente paso sería leer nuestros últimos artículos, y finalmente completar la evaluación.

## Ver también

- [Deploying Django](https://docs.djangoproject.com/en/1.10/howto/deployment/) (Django docs)

  - [Deployment checklist](https://docs.djangoproject.com/en/1.10/howto/deployment/checklist/) (Django docs)
  - [Deploying static files](https://docs.djangoproject.com/en/1.10/howto/static-files/deployment/) (Django docs)
  - [How to deploy with WSGI](https://docs.djangoproject.com/en/1.10/howto/deployment/wsgi/) (Django docs)
  - [How to use Django with Apache and mod_wsgi](https://docs.djangoproject.com/en/1.10/howto/deployment/wsgi/modwsgi/) (Django docs)
  - [How to use Django with Gunicorn](https://docs.djangoproject.com/en/1.10/howto/deployment/wsgi/gunicorn/) (Django docs)

- Heroku

  - [Configuring Django apps for Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku docs)
  - [Getting Started on Heroku with Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku docs)
  - [Django and Static Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku docs)
  - [Concurrency and Database Connections in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku docs)
  - [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku docs)
  - [Dynos and the Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku docs)
  - [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars) (Heroku docs)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku docs)
  - [Deploying Python applications with Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku docs)
  - [Deploying Python and Django apps on Heroku](https://devcenter.heroku.com/articles/deploying-python) (Heroku docs)
  - [Other Heroku Django docs](https://devcenter.heroku.com/search?q=django)

- Digital Ocean

  - [How To Serve Django Applications with uWSGI and Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Other Digital Ocean Django community docs](https://www.digitalocean.com/community/tutorials?q=django)

{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
