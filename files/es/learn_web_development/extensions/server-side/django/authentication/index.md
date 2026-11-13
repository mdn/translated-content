---
title: "Tutorial de Django Parte 8: Autenticación y permisos de usuario"
short-title: "8: Autenticación y permisos"
slug: Learn_web_development/Extensions/Server-side/Django/Authentication
l10n:
  sourceCommit: f3f56081b4d400cdfa28d80a881b6be325774e5e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}

En este tutorial te mostraremos cómo permitir que los usuarios inicien sesión en tu sitio con sus propias cuentas, y cómo controlar lo que pueden hacer y ver según si han iniciado sesión o no y sus _permisos_. Como parte de esta demostración, extenderemos el sitio web [LocalLibrary](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), agregando páginas de inicio y cierre de sesión, y páginas específicas para usuarios y personal, para ver los libros que se han pedido prestados.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Completa todos los temas anteriores del tutorial, incluyendo <a href="/es/docs/Learn_web_development/Extensions/Server-side/Django/Sessions">Django Tutorial Parte 7: Framework de sesiones</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Comprender cómo configurar y usar la autenticación de usuario y los permisos.
      </td>
    </tr>
  </tbody>
</table>

## Descripción general

Django ofrece un sistema de autenticación y autorización ("permisos"), construido sobre el framework de sesiones que vimos en el [tutorial anterior](/es/docs/Learn_web_development/Extensions/Server-side/Django/Sessions), que te permite verificar las credenciales de un usuario y definir qué acciones puede realizar cada uno. El framework incluye modelos integrados para `Users` y `Groups` (una forma genérica de aplicar permisos a más de un usuario a la vez), permisos/indicadores que determinan si un usuario puede realizar una tarea, formularios y vistas para iniciar sesión, y herramientas de vista para restringir el contenido.

> [!NOTE]
> Según Django, el sistema de autenticación busca ser muy genérico, por lo que no incluye algunas funciones que sí ofrecen otros sistemas de autenticación web. Las soluciones a algunos problemas comunes están disponibles como paquetes de terceros. Por ejemplo, la {{glossary("throttle", "regulación")}} de los intentos de inicio de sesión y la autenticación frente a terceros (por ejemplo, OAuth).

En este tutorial te mostraremos cómo habilitar la autenticación de usuarios en el sitio web [LocalLibrary](/es/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), crear tus propias páginas de inicio y cierre de sesión, agregar permisos a tus modelos, y controlar el acceso a las páginas. Usaremos la autenticación/permisos para mostrar listas de libros que han sido prestados, tanto para usuarios como para bibliotecarios.

El sistema de autenticación es muy flexible, y puedes construir tus URLs, formularios, vistas y plantillas desde cero si quieres, simplemente llamando a la API proporcionada para iniciar sesión con el usuario. Sin embargo, en este artículo vamos a usar las vistas y formularios de autenticación "estándar" de Django para nuestras páginas de inicio y cierre de sesión. Aun así necesitaremos crear algunas plantillas, pero eso es bastante fácil.

También te mostraremos cómo crear permisos, y cómo comprobar el estado de inicio de sesión y los permisos, tanto en vistas como en plantillas.

## Habilitar la autenticación

La autenticación se habilitó automáticamente cuando [creamos el sitio web esqueleto](/es/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (en el tutorial 2), así que no necesitas hacer nada más en este punto.

> [!NOTE]
> Toda la configuración necesaria se hizo por nosotros cuando creamos la aplicación con el comando `django-admin startproject`. Las tablas de la base de datos para los usuarios y los permisos de los modelos se crearon la primera vez que ejecutamos `python manage.py migrate`.

La configuración se establece en las secciones `INSTALLED_APPS` y `MIDDLEWARE` del archivo del proyecto (**django-locallibrary-tutorial/locallibrary/settings.py**), como se muestra a continuación:

```python
INSTALLED_APPS = [
    # …
    'django.contrib.auth',  # Framework de autenticación principal y sus modelos predeterminados.
    'django.contrib.contenttypes',  # Sistema de tipos de contenido de Django (permite asociar permisos a los modelos).
    # …

MIDDLEWARE = [
    # …
    'django.contrib.sessions.middleware.SessionMiddleware',  # Administra las sesiones entre solicitudes
    # …
    'django.contrib.auth.middleware.AuthenticationMiddleware',  # Asocia usuarios con las solicitudes usando sesiones.
    # …
```

## Creación de usuarios y grupos

Ya creaste tu primer usuario cuando vimos el [sitio de administración de Django](/es/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) en el tutorial 4 (era un superusuario, creado con el comando `python manage.py createsuperuser`).
Nuestro superusuario ya está autenticado y tiene todos los permisos, así que necesitaremos crear un usuario de prueba que represente a un usuario normal del sitio. Usaremos el sitio de administración para crear los grupos y los inicios de sesión de nuestro sitio web _locallibrary_, ya que es una de las formas más rápidas de hacerlo.

> [!NOTE]
> También puedes crear usuarios mediante programación, como se muestra abajo.
> Tendrías que hacerlo, por ejemplo, si estuvieras desarrollando una interfaz para permitir que los usuarios "comunes" creen sus propios inicios de sesión (no deberías dar a la mayoría de los usuarios acceso al sitio de administración).
>
> ```python
> from django.contrib.auth.models import User
>
> # Crear el usuario y guardarlo en la base de datos
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Actualizar los campos y volver a guardar
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Ten en cuenta, sin embargo, que es muy recomendable configurar un _modelo de usuario personalizado_ al comenzar un proyecto, ya que podrás personalizarlo fácilmente en el futuro si surge la necesidad.
> Si usas un modelo de usuario personalizado, el código para crear ese mismo usuario se vería así:
>
> ```python
> # Obtener el modelo de usuario actual desde la configuración
> from django.contrib.auth import get_user_model
> User = get_user_model()
>
> # Crear el usuario a partir del modelo y guardarlo en la base de datos
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Actualizar los campos y volver a guardar
> user.first_name = 'Tyrone'
> user.last_name = 'Citizen'
> user.save()
> ```
>
> Para más información, consulta [Using a custom user model when starting a project](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (documentación de Django).

A continuación, primero crearemos un grupo y luego un usuario. Aunque todavía no tenemos ningún permiso que agregar para los miembros de nuestra biblioteca, si lo necesitamos más adelante, será mucho más fácil agregarlo una vez al grupo que individualmente a cada miembro.

Inicia el servidor de desarrollo y navega hasta el sitio de administración en tu navegador web local (`http://127.0.0.1:8000/admin/`). Inicia sesión en el sitio usando las credenciales de tu cuenta de superusuario. El nivel superior del sitio de administración muestra todos tus modelos, ordenados por aplicación de Django. Desde la sección **Authentication and Authorization**, puedes hacer clic en los enlaces **Users** o **Groups** para ver sus registros existentes.

![Sitio de administración: agregar grupos o usuarios](admin_authentication_add.png)

Primero vamos a crear un nuevo grupo para los miembros de nuestra biblioteca.

1. Haz clic en el botón **Add** (junto a Group) para crear un nuevo _Group_; ingresa el **Name** "Library Members" para el grupo.
   ![Sitio de administración: agregar grupo](admin_authentication_add_group.png)
2. No necesitamos ningún permiso para el grupo, así que solo presiona **SAVE** (se te llevará a una lista de grupos).

Ahora vamos a crear un usuario:

1. Regresa a la página de inicio del sitio de administración.
2. Haz clic en el botón **Add** junto a _Users_ para abrir el cuadro de diálogo _Add user_.
   ![Sitio de administración: agregar usuario pt1](admin_authentication_add_user_prt1.png)
3. Ingresa un **Username** y **Password**/**Password confirmation** apropiados para tu usuario de prueba.
4. Presiona **SAVE** para crear el usuario.

   El sitio de administración creará el nuevo usuario y de inmediato te llevará a una pantalla _Change user_ donde puedes cambiar tu **username** y agregar información para los campos opcionales del modelo User. Estos campos incluyen el nombre, el apellido, la dirección de correo electrónico, y el estado y los permisos del usuario (solo debería estar activado el indicador **Active**). Más abajo puedes especificar los grupos y permisos del usuario, y ver fechas importantes relacionadas con el usuario (por ejemplo, su fecha de ingreso y la de su último inicio de sesión).
   ![Sitio de administración: agregar usuario pt2](admin_authentication_add_user_prt2.png)

5. En la sección _Groups_, selecciona el grupo **Library Member** de la lista de _Available groups_, y luego presiona la **flecha hacia la derecha** entre las dos cajas para moverlo a la caja _Chosen groups_.
   ![Sitio de administración: agregar usuario al grupo](admin_authentication_user_add_group.png)
6. Aquí no necesitamos hacer nada más, así que vuelve a seleccionar **SAVE**, para ir a la lista de usuarios.

¡Eso es todo! Ahora tienes una cuenta de "miembro normal de la biblioteca" que podrás usar para tus pruebas (una vez que hayamos implementado las páginas que les permitan iniciar sesión).

> [!NOTE]
> Deberías intentar crear otro usuario miembro de la biblioteca. Además, crea un grupo para bibliotecarios, ¡y agrega también un usuario a ese grupo!

## Configuración de las vistas de autenticación

Django proporciona casi todo lo que necesitas para crear páginas de autenticación que gestionen el inicio de sesión, el cierre de sesión y la administración de contraseñas "de fábrica". Esto incluye un mapeador de URLs, vistas y formularios, pero no incluye las plantillas: ¡tenemos que crear las nuestras!

En esta sección mostramos cómo integrar el sistema por defecto en el sitio web _LocalLibrary_ y crear las plantillas.

> [!NOTE]
> Django no incluye una vista de autenticación integrada para el registro inicial de usuarios ("signup").
> Puedes crear una tú mismo si la necesitas, pero para este tutorial asumiremos que solo los bibliotecarios pueden registrar usuarios, y que lo harán usando la interfaz de administración de Django.

> [!NOTE]
> No tienes que usar nada de este código, pero es probable que quieras hacerlo porque facilita mucho las cosas.
> Casi con seguridad necesitarás cambiar el código de manejo de formularios si cambias tu modelo de usuario, pero aun así podrás seguir usando las funciones de vista estándar.

> [!NOTE]
> En este caso, podríamos razonablemente poner las páginas de autenticación, incluyendo las URLs y las plantillas, dentro de nuestra aplicación catalog.
> Sin embargo, si tuviéramos varias aplicaciones, sería mejor separar este comportamiento de inicio de sesión compartido y tenerlo disponible en todo el sitio, ¡así que eso es lo que mostramos aquí!

### URLs del proyecto

Agrega lo siguiente al final del archivo urls.py del proyecto (**django-locallibrary-tutorial/locallibrary/urls.py**):

```python
# Agrega las URLs de autenticación del sitio de Django (para inicio de sesión, cierre de sesión, administración de contraseñas)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navega a la URL `http://127.0.0.1:8000/accounts/` (¡fíjate en la barra inclinada final!).
Django mostrará un error indicando que no pudo encontrar una asignación para esta URL, y listará todas las URLs que intentó.
A partir de esto puedes ver las URLs que funcionarán una vez que hayamos creado las plantillas.

> [!NOTE]
> Al agregar la ruta `accounts/` como se muestra arriba, se agregan las siguientes URLs, junto con los nombres (indicados entre corchetes) que se pueden usar para revertir las asignaciones de URL. No tienes que implementar nada más: la asignación de URL anterior asigna automáticamente las URLs mencionadas abajo.
>
> ```python
> accounts/ login/ [name='login']
> accounts/ logout/ [name='logout']
> accounts/ password_change/ [name='password_change']
> accounts/ password_change/done/ [name='password_change_done']
> accounts/ password_reset/ [name='password_reset']
> accounts/ password_reset/done/ [name='password_reset_done']
> accounts/ reset/<uidb64>/<token>/ [name='password_reset_confirm']
> accounts/ reset/done/ [name='password_reset_complete']
> ```

Ahora intenta navegar a la URL de inicio de sesión (`http://127.0.0.1:8000/accounts/login/`). Esto fallará de nuevo, pero con un error que te indica que falta la plantilla requerida (**registration/login.html**) en la ruta de búsqueda de plantillas.
Verás las siguientes líneas en la sección amarilla de la parte superior:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

El siguiente paso es crear un directorio para las plantillas llamado "registration" y luego agregar el archivo **login.html**.

### Directorio de plantillas

Las URLs (e implícitamente, las vistas) que acabamos de agregar esperan encontrar sus plantillas asociadas en un directorio **/registration/** en algún lugar de la ruta de búsqueda de plantillas.

Para este sitio, pondremos nuestras páginas HTML en el directorio **templates/registration/**. Este directorio debería estar en el directorio raíz de tu proyecto, es decir, el mismo directorio donde están las carpetas **catalog** y **locallibrary**. Por favor, crea estas carpetas ahora.

> [!NOTE]
> Tu estructura de carpetas debería verse ahora como la siguiente:
>
> ```plain
> django-locallibrary-tutorial/   # Carpeta de nivel superior del proyecto Django
>   catalog/
>   locallibrary/
>   templates/
>     registration/
> ```

Para hacer visible el directorio **templates** al cargador de plantillas, necesitamos agregarlo a la ruta de búsqueda de plantillas.
Abre la configuración del proyecto (**/django-locallibrary-tutorial/locallibrary/settings.py**).

Luego importa el módulo `os` (agrega la siguiente línea cerca de la parte superior del archivo si aún no está presente).

```python
import os # necesario para el siguiente código
```

Actualiza la línea `'DIRS'` de la sección `TEMPLATES` como se muestra:

```python
    # …
    TEMPLATES = [
      {
       # …
       'DIRS': [os.path.join(BASE_DIR, 'templates')],
       'APP_DIRS': True,
       # …
```

### Plantilla de inicio de sesión

> [!WARNING]
> Las plantillas de autenticación que se ofrecen en este artículo son una versión muy básica, ligeramente modificada, de las plantillas de inicio de sesión de demostración de Django. ¡Es posible que necesites personalizarlas para tu propio uso!

Crea un nuevo archivo HTML llamado **/django-locallibrary-tutorial/templates/registration/login.html** y dale el siguiente contenido:

```django
{% extends "base_generic.html" %}

{% block content %}

  {% if form.errors %}
    <p>Tu nombre de usuario y contraseña no coinciden. Inténtalo de nuevo.</p>
  {% endif %}

  {% if next %}
    {% if user.is_authenticated %}
      <p>Tu cuenta no tiene acceso a esta página. Para continuar,
      inicia sesión con una cuenta que tenga acceso.</p>
    {% else %}
      <p>Por favor, inicia sesión para ver esta página.</p>
    {% endif %}
  {% endif %}

  <form method="post" action="{% url 'login' %}">
    {% csrf_token %}
    <table>
      <tr>
        <td>\{{ form.username.label_tag }}</td>
        <td>\{{ form.username }}</td>
      </tr>
      <tr>
        <td>\{{ form.password.label_tag }}</td>
        <td>\{{ form.password }}</td>
      </tr>
    </table>
    <input type="submit" value="login">
    <input type="hidden" name="next" value="\{{ next }}">
  </form>

  {# Asume que configuraste la vista password_reset en tu URLConf #}
  <p><a href="{% url 'password_reset' %}">¿Olvidaste tu contraseña?</a></p>

{% endblock %}
```

Esta plantilla comparte algunas similitudes con las que hemos visto antes: extiende nuestra plantilla base y sobrescribe el bloque `content`. El resto del código es un manejo de formularios bastante estándar, que trataremos en un tutorial posterior. Todo lo que necesitas saber por ahora es que esto mostrará un formulario en el que puedes ingresar tu usuario y contraseña, y que si ingresas valores inválidos se te pedirá que ingreses los valores correctos cuando la página se actualice.

Navega de vuelta a la página de inicio de sesión (`http://127.0.0.1:8000/accounts/login/`) una vez que hayas guardado tu plantilla, y deberías ver algo como esto:

![Página de inicio de sesión de la biblioteca v1](library_login.png)

Si inicias sesión con credenciales válidas, serás redirigido a otra página (por defecto será `http://127.0.0.1:8000/accounts/profile/`). El problema es que, por defecto, Django espera que después de iniciar sesión quieras ser llevado a una página de perfil, lo cual puede ser el caso o no. Como todavía no has definido esta página, ¡obtendrás otro error!

Abre la configuración del proyecto (**/django-locallibrary-tutorial/locallibrary/settings.py**) y agrega el siguiente texto al final. Ahora, cuando inicies sesión, deberías ser redirigido a la página de inicio del sitio por defecto.

```python
# Redirige a la URL de inicio después del inicio de sesión (por defecto redirige a /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Plantilla de cierre de sesión

Si navegas a la URL de cierre de sesión (`http://127.0.0.1:8000/accounts/logout/`) obtendrás un error, porque Django 5 no permite cerrar sesión usando `GET`, solo `POST`.
En un momento agregaremos un formulario que puedas usar para cerrar sesión, pero primero crearemos la página a la que se lleva a los usuarios después de cerrar sesión.

Crea y abre **/django-locallibrary-tutorial/templates/registration/logged_out.html**. Copia en él el siguiente texto:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>¡Sesión cerrada!</p>
  <a href="{% url 'login'%}">Haz clic aquí para iniciar sesión de nuevo.</a>
{% endblock %}
```

Esta plantilla es muy simple. Solo muestra un mensaje informándote que cerraste sesión, y ofrece un enlace que puedes presionar para volver a la pantalla de inicio de sesión. La pantalla se ve así (después de cerrar sesión):

![Página de cierre de sesión de la biblioteca v1](library_logout.png)

### Plantillas de restablecimiento de contraseña

El sistema de restablecimiento de contraseña por defecto usa el correo electrónico para enviar al usuario un enlace de restablecimiento. Necesitas crear formularios para obtener la dirección de correo electrónico del usuario, enviar el correo, permitirle ingresar una nueva contraseña, y notificar cuándo se completó todo el proceso.

Las siguientes plantillas pueden usarse como punto de partida.

#### Formulario de restablecimiento de contraseña

Este es el formulario usado para obtener la dirección de correo electrónico del usuario (para enviar el correo de restablecimiento de contraseña). Crea **/django-locallibrary-tutorial/templates/registration/password_reset_form.html**, y dale el siguiente contenido:

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
  {% csrf_token %}
  {% if form.email.errors %}
    \{{ form.email.errors }}
  {% endif %}
      <p>\{{ form.email }}</p>
    <input type="submit" class="btn btn-default btn-lg" value="Restablecer contraseña">
  </form>
{% endblock %}
```

#### Restablecimiento de contraseña enviado

Este formulario se muestra después de haber recogido tu dirección de correo electrónico. Crea **/django-locallibrary-tutorial/templates/registration/password_reset_done.html**, y dale el siguiente contenido:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Te hemos enviado por correo electrónico las instrucciones para configurar tu contraseña. Si no han llegado en unos minutos, revisa tu carpeta de spam.</p>
{% endblock %}
```

#### Correo electrónico de restablecimiento de contraseña

Esta plantilla proporciona el texto del correo HTML que contiene el enlace de restablecimiento que enviaremos a los usuarios. Crea **/django-locallibrary-tutorial/templates/registration/password_reset_email.html**, y dale el siguiente contenido:

```django
Alguien solicitó restablecer la contraseña del correo \{{ email }}. Sigue el siguiente enlace:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Confirmación de restablecimiento de contraseña

Esta página es donde ingresas tu nueva contraseña después de hacer clic en el enlace del correo de restablecimiento de contraseña. Crea **/django-locallibrary-tutorial/templates/registration/password_reset_confirm.html**, y dale el siguiente contenido:

```django
{% extends "base_generic.html" %}

{% block content %}
    {% if validlink %}
        <p>Ingresa (y confirma) tu nueva contraseña.</p>
        <form action="" method="post">
        {% csrf_token %}
            <table>
                <tr>
                    <td>\{{ form.new_password1.errors }}
                        <label for="id_new_password1">Nueva contraseña:</label></td>
                    <td>\{{ form.new_password1 }}</td>
                </tr>
                <tr>
                    <td>\{{ form.new_password2.errors }}
                        <label for="id_new_password2">Confirmar contraseña:</label></td>
                    <td>\{{ form.new_password2 }}</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="Cambiar mi contraseña"></td>
                </tr>
            </table>
        </form>
    {% else %}
        <h1>Error al restablecer la contraseña</h1>
        <p>El enlace de restablecimiento de contraseña no era válido, posiblemente porque ya se usó. Solicita un nuevo restablecimiento de contraseña.</p>
    {% endif %}
{% endblock %}
```

#### Restablecimiento de contraseña completado

Esta es la última plantilla de restablecimiento de contraseña, que se muestra para notificarte cuando el restablecimiento de contraseña tuvo éxito. Crea **/django-locallibrary-tutorial/templates/registration/password_reset_complete.html**, y dale el siguiente contenido:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>¡La contraseña ha sido cambiada!</h1>
  <p><a href="{% url 'login' %}">¿iniciar sesión de nuevo?</a></p>
{% endblock %}
```

### Probando las nuevas páginas de autenticación

Ahora que agregaste la configuración de URLs y creaste todas estas plantillas, ¡las páginas de autenticación (aparte del cierre de sesión) ya deberían funcionar!

Puedes probar las nuevas páginas de autenticación intentando primero iniciar sesión en tu cuenta de superusuario usando la URL `http://127.0.0.1:8000/accounts/login/`.
Podrás probar la funcionalidad de restablecimiento de contraseña desde el enlace en la página de inicio de sesión. **¡Ten en cuenta que Django solo enviará correos de restablecimiento a direcciones (usuarios) que ya estén almacenadas en su base de datos!**

Ten en cuenta que todavía no podrás probar el cierre de sesión de la cuenta, porque las solicitudes de cierre de sesión deben enviarse como `POST` en lugar de `GET`.

> [!NOTE]
> El sistema de restablecimiento de contraseña requiere que tu sitio web admita el envío de correo, lo cual está fuera del alcance de este artículo, así que esta parte **todavía no funcionará**. Para poder probarlo, agrega la siguiente línea al final de tu archivo settings.py. Esto registra en la consola cualquier correo enviado (para que puedas copiar el enlace de restablecimiento de contraseña desde la consola).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Para más información, consulta [Sending email](https://docs.djangoproject.com/en/5.0/topics/email/) (documentación de Django).

## Pruebas con usuarios autenticados

Esta sección analiza qué podemos hacer para controlar selectivamente el contenido que ve el usuario según si ha iniciado sesión o no.

### Pruebas en plantillas

Puedes obtener información sobre el usuario que actualmente inició sesión en las plantillas con la variable de plantilla `\{{ user }}` (esto se agrega al contexto de la plantilla por defecto cuando configuras el proyecto como lo hicimos en nuestro esqueleto).

Normalmente primero probarás con la variable de plantilla `\{{ user.is_authenticated }}` para determinar si el usuario puede ver cierto contenido. Para demostrarlo, a continuación actualizaremos nuestra barra lateral para mostrar un enlace de inicio de sesión ("Login") si el usuario cerró sesión, y un enlace de cierre de sesión ("Logout") si inició sesión.

Abre la plantilla base (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) y copia el siguiente texto en el bloque `sidebar`, justo antes de la etiqueta de plantilla `endblock`.

```django
  <ul class="sidebar-nav">
    …
   {% if user.is_authenticated %}
     <li>Usuario: \{{ user.get_username }}</li>
     <li>
       <form id="logout-form" method="post" action="{% url 'logout' %}">
         {% csrf_token %}
         <button type="submit" class="btn btn-link">Cerrar sesión</button>
       </form>
     </li>
   {% else %}
     <li><a href="{% url 'login' %}?next=\{{ request.path }}">Iniciar sesión</a></li>
   {% endif %}
    …
  </ul>
```

Como puedes ver, usamos las etiquetas de plantilla `if` / `else` / `endif` para mostrar texto condicionalmente según si `\{{ user.is_authenticated }}` es verdadero. Si el usuario está autenticado, sabemos que tenemos un usuario válido, así que llamamos a `\{{ user.get_username }}` para mostrar su nombre.

Creamos la URL del enlace de inicio de sesión usando la etiqueta de plantilla `url` y el nombre de la configuración de URL `login`. Fíjate también cómo agregamos `?next=\{{ request.path }}` al final de la URL. Lo que esto hace es agregar un parámetro de URL `next` que contiene la dirección (URL) de la página _actual_, al final de la URL enlazada. Después de que el usuario haya iniciado sesión con éxito, la vista usará este valor de `next` para redirigir al usuario de vuelta a la página donde hizo clic por primera vez en el enlace de inicio de sesión.

El código de la plantilla de cierre de sesión es distinto, porque desde Django 5, para cerrar sesión debes hacer `POST` a la URL `admin:logout`, usando un formulario con un botón.
Por defecto esto se renderizaría como un botón, pero puedes darle estilo para que se muestre como un enlace.
En este ejemplo estamos usando _Bootstrap_, así que hacemos que el botón se vea como un enlace aplicando `class="btn btn-link"`.
También necesitas agregar los siguientes estilos a **/django-locallibrary-tutorial/catalog/static/css/styles.css** para posicionar correctamente el enlace de cierre de sesión junto a los demás enlaces de la barra lateral:

```css
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```

Pruébalo haciendo clic en los enlaces de inicio y cierre de sesión de la barra lateral.
Deberías ser llevado a las páginas de cierre/inicio de sesión que definiste en el [Directorio de plantillas](#directorio_de_plantillas) de arriba.

### Pruebas en vistas

Si estás usando vistas basadas en funciones, la forma más fácil de restringir el acceso a tus funciones es aplicar el decorador `login_required` a tu función de vista, como se muestra abajo. Si el usuario inició sesión, tu código de vista se ejecutará con normalidad. Si el usuario no inició sesión, esto lo redirigirá a la URL de inicio de sesión definida en la configuración del proyecto (`settings.LOGIN_URL`), pasando la ruta absoluta actual como el parámetro de URL `next`. Si el usuario logra iniciar sesión, será devuelto a esta página, pero esta vez autenticado.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

> [!NOTE]
> Puedes hacer lo mismo manualmente probando `request.user.is_authenticated`, ¡pero el decorador es mucho más conveniente!

De manera similar, la forma más fácil de restringir el acceso a usuarios que iniciaron sesión en tus vistas basadas en clases es heredar de `LoginRequiredMixin`. Necesitas declarar este mixin primero en la lista de superclases, antes de la clase de vista principal.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Esto tiene exactamente el mismo comportamiento de redirección que el decorador `login_required`. También puedes especificar una ubicación alternativa a la que redirigir al usuario si no está autenticado (`login_url`), y un nombre de parámetro de URL distinto de `next` para insertar la ruta absoluta actual (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Para más detalles, consulta la [documentación de Django](https://docs.djangoproject.com/en/5.0/topics/auth/default/#limiting-access-to-logged-in-users).

## Ejemplo: listado de los libros del usuario actual

Ahora que sabemos cómo restringir una página a un usuario en particular, vamos a crear una vista de los libros que el usuario actual tiene prestados.

¡Desafortunadamente, todavía no tenemos ninguna forma de que los usuarios pidan libros prestados! Así que antes de crear la lista de libros, primero extenderemos el modelo `BookInstance` para dar soporte al concepto de préstamo, y usaremos la aplicación de administración de Django para prestar varios libros a nuestro usuario de prueba.

### Modelos

Primero, tendremos que hacer posible que los usuarios tengan una `BookInstance` en préstamo (ya tenemos un `status` y una fecha `due_back`, pero todavía no tenemos ninguna asociación entre este modelo y un usuario en particular). Crearemos una usando un campo `ForeignKey` (de uno a muchos). También necesitamos un mecanismo sencillo para comprobar si un libro prestado está atrasado.

Abre **catalog/models.py**, e importa `settings` desde `django.conf` (agrega esto justo debajo de la línea de importación anterior, en la parte superior del archivo, para que la configuración esté disponible para el código posterior que la use):

```python
from django.conf import settings
```

A continuación, agrega el campo `borrower` al modelo `BookInstance`, estableciendo el modelo de usuario para la clave como el valor de la configuración `AUTH_USER_MODEL`.
Como no hemos sobrescrito esta configuración con un [modelo de usuario personalizado](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/), esto corresponde al modelo `User` predeterminado de `django.contrib.auth.models`.

```python
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

> [!NOTE]
> Importar el modelo de esta manera reduce el trabajo necesario si más adelante descubres que necesitas un modelo de usuario personalizado.
> Este tutorial usa el modelo predeterminado, así que en su lugar podrías importar el modelo `User` directamente con las siguientes líneas:
>
> ```python
> from django.contrib.auth.models import User
> ```
>
> ```python
> borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
> ```

Ya que estamos aquí, vamos a agregar una propiedad que podamos llamar desde nuestras plantillas para saber si una instancia de libro en particular está atrasada.
Aunque podríamos calcular esto en la propia plantilla, usar una [propiedad](https://docs.python.org/3/library/functions.html#property) (`property`) como se muestra abajo será mucho más eficiente.

Agrega esto en algún lugar cerca de la parte superior del archivo:

```python
from datetime import date
```

Ahora agrega la siguiente definición de propiedad a la clase `BookInstance`:

> [!NOTE]
> El siguiente código usa la función `bool()` de Python, que evalúa un objeto o el objeto resultante de una expresión, y devuelve `True` a menos que el resultado sea "falsy" (falso en un contexto booleano), en cuyo caso devuelve `False`.
> En Python, un objeto es _falsy_ (se evalúa como `False`) si está vacío (como `[]`, `()`, `{}`), es `0`, `None`, o si es `False`.

```python
@property
def is_overdue(self):
    """Determina si el libro está atrasado según la fecha de vencimiento y la fecha actual."""
    return bool(self.due_back and date.today() > self.due_back)
```

> [!NOTE]
> Primero verificamos si `due_back` está vacío antes de hacer una comparación. Un campo `due_back` vacío haría que Django arroje un error en lugar de mostrar la página: los valores vacíos no se pueden comparar. ¡Esto no es algo que queramos que experimenten nuestros usuarios!

Ahora que actualizamos nuestros modelos, necesitaremos generar nuevas migraciones para el proyecto y luego aplicarlas:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Administración

Ahora abre **catalog/admin.py**, y agrega el campo `borrower` a la clase `BookInstanceAdmin`, tanto en `list_display` como en `fieldsets`, como se muestra abajo.
Esto hará que el campo sea visible en la sección de administración, permitiéndonos asignar un `User` a una `BookInstance` cuando sea necesario.

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_display = ('book', 'status', 'borrower', 'due_back', 'id')
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book', 'imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back', 'borrower')
        }),
    )
```

### Prestar algunos libros

Ahora que es posible prestar libros a un usuario específico, ve y presta varios registros `BookInstance`. Establece su campo `borrowed` a tu usuario de prueba, coloca el `status` en "On loan", y establece fechas de vencimiento tanto en el futuro como en el pasado.

> [!NOTE]
> No detallaremos el proceso paso a paso, ¡ya que sabes cómo usar el sitio de administración!

### Vista de libros prestados

Ahora agregaremos una vista para obtener la lista de todos los libros que se han prestado al usuario actual. Usaremos la misma vista de lista genérica basada en clases que ya conocemos, pero esta vez también importaremos y heredaremos de `LoginRequiredMixin`, para que solo un usuario que inició sesión pueda llamar a esta vista. También optaremos por declarar un `template_name`, en lugar de usar el predeterminado, porque podríamos terminar teniendo varias listas distintas de registros BookInstance, con diferentes vistas y plantillas.

Agrega lo siguiente a **catalog/views.py**:

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin,generic.ListView):
    """Vista genérica basada en clases que lista los libros prestados al usuario actual."""
    model = BookInstance
    template_name = 'catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return (
            BookInstance.objects.filter(borrower=self.request.user)
            .filter(status__exact='o')
            .order_by('due_back')
        )
```

Para restringir nuestra consulta solo a los objetos `BookInstance` del usuario actual, reimplementamos `get_queryset()` como se muestra arriba. Ten en cuenta que "o" es el código almacenado para "on loan" (en préstamo), y ordenamos por la fecha `due_back` para que los elementos más antiguos se muestren primero.

### Configuración de URL para libros prestados

Ahora abre **/catalog/urls.py** y agrega un `path()` que apunte a la vista anterior (puedes copiar el siguiente texto al final del archivo).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Plantilla para libros prestados

Ahora, todo lo que necesitamos hacer para esta página es agregar una plantilla. Primero, crea el archivo de plantilla **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** y dale el siguiente contenido:

```django
{% extends "base_generic.html" %}

{% block content %}
    <h1>Libros prestados</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">\{{ bookinst.book.title }}</a> (\{{ bookinst.due_back }})
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>No hay libros prestados.</p>
    {% endif %}
{% endblock %}
```

Esta plantilla es muy similar a las que creamos anteriormente para los objetos `Book` y `Author`.
Lo único "nuevo" aquí es que comprobamos el método que agregamos en el modelo (`bookinst.is_overdue`) y lo usamos para cambiar el color de los elementos atrasados.

Con el servidor de desarrollo en ejecución, ahora deberías poder ver la lista para un usuario que inició sesión en tu navegador en `http://127.0.0.1:8000/catalog/mybooks/`. Pruébalo con tu usuario con sesión iniciada y con sesión cerrada (en el segundo caso, deberías ser redirigido a la página de inicio de sesión).

### Agregar la lista a la barra lateral

El último paso es agregar un enlace a esta nueva página en la barra lateral. Lo pondremos en la misma sección donde mostramos otra información para el usuario que inició sesión.

Abre la plantilla base (**/django-locallibrary-tutorial/catalog/templates/base_generic.html**) y agrega la línea "My Borrowed" a la barra lateral, en la posición que se muestra abajo.

```django
 <ul class="sidebar-nav">
   {% if user.is_authenticated %}
   <li>Usuario: \{{ user.get_username }}</li>

   <li><a href="{% url 'my-borrowed' %}">Mis libros prestados</a></li>

   <li>
     <form id="logout-form" method="post" action="{% url 'admin:logout' %}">
       {% csrf_token %}
       <button type="submit" class="btn btn-link">Cerrar sesión</button>
     </form>
   </li>
   {% else %}
   <li><a href="{% url 'login' %}?next=\{{ request.path }}">Iniciar sesión</a></li>
   {% endif %}
 </ul>
```

### ¿Cómo se ve?

Cuando cualquier usuario inicia sesión, verá el enlace _My Borrowed_ (Mis libros prestados) en la barra lateral, y la lista de libros que se muestra abajo (¡el primer libro no tiene fecha de vencimiento, lo cual es un error que esperamos corregir en un tutorial posterior!).

![Biblioteca: libros prestados por usuario](library_borrowed_by_user.png)

## Permisos

Los permisos están asociados a los modelos y definen las operaciones que un usuario con el permiso puede realizar sobre una instancia del modelo. Por defecto, Django otorga automáticamente permisos de _add_, _change_ y _delete_ (agregar, cambiar y eliminar) a todos los modelos, lo que permite a los usuarios con esos permisos realizar las acciones asociadas a través del sitio de administración. Puedes definir tus propios permisos para los modelos y otorgárselos a usuarios específicos. También puedes cambiar los permisos asociados con diferentes instancias del mismo modelo.

Probar permisos en vistas y plantillas es entonces muy similar a probar el estado de autenticación (y, de hecho, probar un permiso también prueba la autenticación).

### Modelos

Los permisos se definen en la sección `class Meta` del modelo, usando el campo `permissions`.
Puedes especificar tantos permisos como necesites en una tupla, y cada permiso se define a su vez en una tupla anidada que contiene el nombre del permiso y su valor de visualización.
Por ejemplo, podríamos definir un permiso para permitir que un usuario marque que un libro ha sido devuelto, como se muestra:

```python
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Luego podríamos asignar el permiso a un grupo "Librarian" en el sitio de administración.

Abre **catalog/models.py**, y agrega el permiso como se muestra arriba. Necesitarás volver a ejecutar tus migraciones (llamando a `python3 manage.py makemigrations` y `python3 manage.py migrate`) para actualizar la base de datos correctamente.

### Plantillas

Los permisos del usuario actual se almacenan en una variable de plantilla llamada `\{{ perms }}`. Puedes comprobar si el usuario actual tiene un permiso en particular usando el nombre de variable específico dentro de la "app" de Django asociada; por ejemplo, `\{{ perms.catalog.can_mark_returned }}` será `True` si el usuario tiene este permiso, y `False` en caso contrario. Normalmente probamos el permiso usando la etiqueta de plantilla `{% if %}` como se muestra:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- Podemos marcar una BookInstance como devuelta. -->
    <!-- Quizás agregar código para enlazar a una vista de "devolución de libro" aquí. -->
{% endif %}
```

### Vistas

Los permisos se pueden probar en una vista de función usando el decorador `permission_required`, o en una vista basada en clases usando `PermissionRequiredMixin`. El patrón es el mismo que para la autenticación de inicio de sesión, aunque, por supuesto, es razonable que necesites agregar varios permisos.

Decorador para vistas de función:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Un mixin de permiso requerido para vistas basadas en clases.

```python
from django.contrib.auth.mixins import PermissionRequiredMixin

class MyView(PermissionRequiredMixin, View):
    permission_required = 'catalog.can_mark_returned'
    # O múltiples permisos
    permission_required = ('catalog.can_mark_returned', 'catalog.change_book')
    # Ten en cuenta que 'catalog.change_book' es un permiso
    # que se crea automáticamente para el modelo book, junto con add_book y delete_book
```

> [!NOTE]
> Existe una pequeña diferencia en el comportamiento por defecto de lo anterior. Por **defecto**, para un usuario que inició sesión pero incumple un permiso:
>
> - `@permission_required` redirige a la pantalla de inicio de sesión (código de estado HTTP 302).
> - `PermissionRequiredMixin` devuelve 403 (código de estado HTTP Forbidden).
>
> Normalmente querrás el comportamiento de `PermissionRequiredMixin`: devolver 403 si un usuario inició sesión pero no tiene el permiso correcto. Para hacer esto en una vista de función, usa `@login_required` y `@permission_required` con `raise_exception=True`, como se muestra:
>
> ```python
> from django.contrib.auth.decorators import login_required, permission_required
>
> @login_required
> @permission_required('catalog.can_mark_returned', raise_exception=True)
> def my_view(request):
>     # …
> ```

### Ejemplo

No actualizaremos _LocalLibrary_ aquí; ¡quizás en el próximo tutorial!

## Ponte a prueba

Anteriormente en este artículo te mostramos cómo crear una página para el usuario actual, que lista los libros que ha pedido prestados.
El desafío ahora es crear una página similar que solo sea visible para los bibliotecarios, que muestre _todos_ los libros que se han prestado, e incluya el nombre de cada prestatario.

Deberías poder seguir el mismo patrón que para la otra vista. La principal diferencia es que necesitarás restringir la vista solo a bibliotecarios. Podrías hacer esto según si el usuario es miembro del personal (decorador de función: `staff_member_required`, variable de plantilla: `user.is_staff`), pero te recomendamos que, en su lugar, uses el permiso `can_mark_returned` y `PermissionRequiredMixin`, como se describió en la sección anterior.

> [!WARNING]
> Recuerda no usar tu superusuario para pruebas basadas en permisos (las comprobaciones de permisos siempre devuelven verdadero para los superusuarios, ¡incluso si el permiso aún no se ha definido!). En su lugar, crea un usuario bibliotecario y agrégale la capacidad requerida.

Cuando termines, tu página debería verse algo así como la captura de pantalla de abajo.

![Todos los libros prestados, restringido a bibliotecarios](library_borrowed_all.png)

## Resumen

Excelente trabajo: ya creaste un sitio web donde los miembros de la biblioteca pueden iniciar sesión y ver su propio contenido, y donde los bibliotecarios (con el permiso correcto) pueden ver todos los libros prestados y sus prestatarios. Por ahora solo estamos viendo contenido, pero se usan los mismos principios y técnicas cuando quieras empezar a modificar y agregar datos.

En nuestro próximo artículo, veremos cómo puedes usar los formularios de Django para recoger la entrada de datos del usuario, y luego empezar a modificar algunos de nuestros datos almacenados.

## Véase también

- [User authentication in Django](https://docs.djangoproject.com/en/5.0/topics/auth/) (documentación de Django)
- [Using the (default) Django authentication system](https://docs.djangoproject.com/en/5.0/topics/auth/default/) (documentación de Django)
- [Introduction to class-based views > Decorating class-based views](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/#decorating-class-based-views) (documentación de Django)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django")}}
