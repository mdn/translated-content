---
title: "Tutorial de Django Parte 8: Autenticación y permisos de Usuario"
slug: Learn/Server-side/Django/Authentication
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}

En este tutorial mostraremos cómo permitir a los usuarios iniciar sesión en tu sitio con sus propias cuentas, y cómo controlar lo que pueden hacer basándose en si han iniciado sesión o no y sus _permisos_. Como parte de esta demostración extenderemos el sitio web de la [BibliotecaLocal](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website), añadiendo páginas de inicio y cierre de sesión, y páginas específicas de usuarios y personal de la biblioteca para ver libros que han sido prestados.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        Completa todos los temas del tutorial anterior, incluyendo:
        <a href="/es/docs/Learn/Server-side/Django/Sessions"
          >Django Tutorial Part 7: Sessions framework</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Comprender como configurar y usar la autenticación de usuario y los
        permisos.
      </td>
    </tr>
  </tbody>
</table>

## Introducción

Django proporciona un sistema de autenticación y autorización ("permisos"), construido sobre el framework de sesión discutido en el [tutorial anterior](/es/docs/Learn/Server-side/Django/Sessions), que le permite verificar credenciales de usuario y definir que acciones puede realizar cada usuario. El framework incluye modelos para `Users` y `Groups` (una forma genérica de aplicar permisos a más de un usuario a la vez), permisos/indicadores (permissions/flags) que designan si un usuario puede realizar una tarea, formularios y vistas para iniciar sesión en los usuarios, y view tools para restringir el contenido.

> **Nota:** Según Django el sistema de autenticación pretende ser muy genérico, y, por lo tanto, no proporciona algunas características proporcinadas en otros sistemas de autenticación web. Las soluciones para algunos problemas están disponibles como paquetes de terceros. Por ejemplo, regulación de intentos de inicio de sesión y autenticación frente a terceros (por ej. OAuth).

En este tutorial mostraremos cómo habilitar la autenticación de usuarios en el sitio web [BibliotecaLocal](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website), crear tus propias páginas de login y logout, añadir permisos a tus modelos, y controlar el acceso a las páginas. Usaremos la autenticación/permisos para desplegar listas de libros que han sido solicitados tanto por los usuarios como por los bibliotecarios.

El sistema de autenticación es muy flexible, y puedes crear tus URLs, formularios, vistas y plantillas desde el inicio si quieres, simplemente llamando a la API provista para loguear al usuario. Sin embargo, en este artículo vamos a usar las vistas y formularios de autenticación "en stock" de Django para nuestras páginas de login y logout. De todos modos necesitaremos crear algunas plantillas, pero eso es bastante fácil.

Te mostraremos también cómo crear permisos, y revisar el estado de login y permisos tanto en vistas como en plantillas.

## Habilitanto la autenticación

La autenticación fue habilitada automáticamente cuando [creamos el sitio web esqueleto](/es/docs/Learn/Server-side/Django/skeleton_website) (en el tutorial 2), así que no necesitas hacer nada más en este punto.

> **Nota:** Toda la configuración necesaria fue hecha por nosotros cuando creamos la aplicación usando el comando `django-admin startproject`. Las tablas de base de datos para los usuarios y permisos de modelo fueron creados la primera vez que ejecutamos `python manage.py migrate`.

La configuración se establece en las secciones `INSTALLED_APPS` y `MIDDLEWARE` del archivo del proyecto (**locallibrary/locallibrary/settings.py**), como se muestra abajo:

```python
INSTALLED_APPS = [
    ...
    'django.contrib.auth',  #Core authentication framework and its default models.
    'django.contrib.contenttypes',  #Django content type system (allows permissions to be associated with models).
    ....

MIDDLEWARE = [
    ...
    'django.contrib.sessions.middleware.SessionMiddleware',  #Manages sessions across requests
    ...
    'django.contrib.auth.middleware.AuthenticationMiddleware',  #Associates users with requests using sessions.
    ....
```

## Creando usuarios y grupos

Ya creaste tu primer usuario cuando revisamos el [sitio de administración de Django](/es/docs/Learn/Server-side/Django/Admin_site) en el tutorial 4 (fue un superusuario, creado con el comando `python manage.py createsuperuser`). Nuestro superusuario ya está autenticado y tiene todos los permisos, así que necesitaremos crear un usuario de prueba que represente un usuario normal del sitio. Estaremos usando el sitio de administración para crear los grupos y logins de nuestro sitio web _BibliotecaLocal_, ya que es una de las formas más rápidas de hacerlo.

> **Nota:** Puedes también crear usuarios mediante programación, como se muestra abajo. Tendrías que hacerlo, por ejemplo, si estuvieras desarrollando una interfaz para permitir a los usuarios crear sus propios logins (no deberías dar a los usuarios acceso al sito de administración).
>
> ```python
> from django.contrib.auth.models import User
>
> # Create user and save to the database
>
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Update fields and then save again
>
> user.first_name = 'John'
> user.last_name = 'Citizen'
> user.save()
> ```

A continuación, primero crearemos un grupo y luego un usuario. Aunque no tengamos ningún permiso aún para otorgar a los miembros de nuestra biblioteca, si lo necesitamos para más adelante, será mucho más fácil otorgarlo una vez al grupo que individualmente a cada miembro.

Inicia el servidor de desarrollo y navega hasta el sitio de administracion en tu navegador web local (`http://127.0.0.1:8000/admin/`). Ingresa al sitio usando las credenciales de la cuenta de tu superusuario. El nivel superior del sitio de administracion "Admin site" muestra todos tus modelos, ordenados por la aplicacion por defecto de Django "django application". Desde la seccion de **Autenticación y Autorización** puedes dar click en los enlaces de **Usuarios** "Users" y **Grupos** "Groups" para ver todos sus registros existentes.

![Admin site - add groups or users](admin_authentication_add.png)

Primero vamos a crear un nuevo grupo para los miembros de nuestra biblioteca.

1. Da click en el boton **Add** "Añadir" (Enseguida de Group) para crear un nuevo grupo ; ingresa el **Nombre** "Name" para el grupo de "Library Members".![Admin site - add group](admin_authentication_add_group.png)
2. No necesitamos de ningun permiso para el grupo , entonces solo presiona Save (Seras redirigido a una lista de los grupos disponibles).

Ahora vamos a crear un usuario:

1. Navega de vuelta a la pagina de inicio "home" del sitio de administracion "Admin site".
2. Da click en el boton **Add** "Añadir" que queda enseguida de Users "Usuarios" para abrir el cuadro de dialogo de Usuario **Add** "Añadir usuario".![Admin site - add user pt1](admin_authentication_add_user_prt1.png)
3. Ingresa un **Nombre de Usuario** "Username", **Contraseña** "Password" y **Confirmacion de Contraseña** "Password confirmation" apropiado para tu usuario de prueba.
4. Presiona **Save** "Guardar" para crear el usuario.

   El sitio de administrador creara el nuevo usuario e inmediatamente te llevara a la pantalla de _Change user_ "Cambios del usuario" donde puedes cambiar tu **nombre de usuario** "Username" y agregar informacion para los campos opcionales del modelo de Usuario "User". Estos campos incluyen el primer nombre "first name", el apellido "last name", la direcion de correo electronico "email adress", los estados de los usuarios y sus permisos "users status and permissions" (solo el indicador **Active** "Activo" deberia ser activado). Mas abajo puedes especificar los grupos y permisos del usuario, y ver datos importantes relacionados a el usuario (ej: la fecha en que se agrego y la fecha del ultimo inicio de sesion)

5. ![Admin site - add user pt2](admin_authentication_add_user_prt2.png)
6. En la seccion _Groups_ "Grupos", selecciona el grupo **Library Member** de la lista de grupos disponibles, y entonces presiona la **la flecha apuntando a la derecha** entre las dos cajas para moverlo dentro de la caja de _Chosen groups_ "Grupos seleccionados".![Admin site - add user to group](admin_authentication_user_add_group.png)
7. Aqui no necesitamos hacer nada adicional, entonces de nuevo solo seleciona **SAVE** "Guardar", para ir a la lista de usuarios.

¡Esta hecho! Ahora tienes la cuenta de un miembro normal de la libreria, el cual estara disponible para ser usado en tus pruebas (una vez que hayamos implementado las paginas para permitirles iniciar sesion).

> **Nota:** Deberias intentar crear otro usuario miembro de _library._ Al igual que un grupo para los bibliotecarios _"Librarians",_ ¡y agregar usuarios a este tambien!

## Configurando nuestras vistas de autenticación

Django provee todo lo necesario para crear las páginas de autenticación para manejar inicio y cierre de sesión y gestión de contraseñas "fuera de la caja". Esto incluye un mapeador de URL, vistas "views" y formularios "forms", pero no incluye las plantillas "templates", ¡Tenemos que crear las nuestras!

En esta sección, mostramos cómo integrar el sistema por defecto en el sitio web de _BibliotecaLocal_ y crear plantillas "templates". Las incluiremos en las URLs principales del proyecto.

> **Nota:** No tienes que usar nada de este código, pero es probable que quieras hacerlo porque hace las cosas mucho más fáciles. Seguramente necesitará cambiar el código de manejo de formularios si cambia su modelo de usuario (¡un tema avanzado!) pero aun asi, todavía podrá usar las funciones de vista de stock.

> **Nota:** En este caso podríamos razonablemente poner las páginas de autenticación, incluyendo las direcciones URL y plantillas, dentro de nuestra aplicación de catálogo. Sin embargo, si tuviéramos varias aplicaciones, sería mejor separar este comportamiento de inicio de sesión compartido y tenerlo disponible en todo el sitio, ¡así que eso es lo que hemos mostrado aquí!

### URL's del proyecto

Añade el siguiente codigo al final del archivo url.py del proyecto (**locallibrary/locallibrary/urls.py**) :

```python
#Add Django site authentication urls (for login, logout, password management)
urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navega hasta la URL `http://127.0.0.1:8000/accounts/` (¡Nota la barra inclinada hacia adelante!) y Django mostrara un error, diciendo que no puede encontrar esta URL, y listando todas las URL's que ha intentado. Aqui puedes ver las URL's que funcionaran, por ejemplo:

> **Nota:** Usando el metodo anterior, añade las siguientes URL's con sus respectivos nombres entre corchetes, los cuales pueden ser usados para revertir "reverse" el mapeado de las URL's. No necesitas implementar nada mas, el anterior mapeado de URL's asigna automaticamente las mencionadas URL's.
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

Ahora intenta navegar a la URL de inicio de sesion "login"(`http://127.0.0.1:8000/accounts/login/`). Esto fallara de nuevo, pero ahora con un error diciendote que no encuentra la plantilla "template" requerida (**registration/login.html**) por el buscador de directorios de plantillas . Veras el las siguientes lineas en la seccion amarilla en la parte superior:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

El siguiente paso es crear un directorio de registro en la busqueda de directorios y entonces agregar el archivo **login.html.**

### Directorio de plantilla "template"

Las URL's (y vistas "views" implicitas) que recien hemos añadido esperan encontrar sus plantillas "templates" asociadas en un directorio "**/registration/"** en algún lugar de la ruta de búsqueda de plantillas

Para este sitio pondremos nuestra pagina HTML en el directorio **"templates/registration/".** Este directorio debera estar en el directorio raiz de tu proyecto, es decir, el mismo directorio de las carpetas donde estan **catalog** y **locallibrary**. Por favor ahora crea las carpetas "templates" y dentro de esta "registration".

> **Nota:** Your folder structure should now look like the below:
>
> ```
> locallibrary (django project folder)
>   |\_catalog
>   |\_locallibrary
>   |\_templates **(new)**
>     |\_registration
> ```

Para hacer estos directorios visibles al cargador de plantillas (es decir introducir este directorio en el buscador de directorios de plantillas) abre el archivo de configuracion del proyecto setting.py (**/locallibrary/locallibrary/settings.py)**

A continuación, importa el módulo `os` (añade la siguiente línea al principio del archivo).

```python
import os # necesario para el siguiente código
```

Actualiza la seccion de TEMPLATES con la linea 'DIRS' como se muestra a continuacion.

```python
    # …
    TEMPLATES = [
      {
       # …
       'DIRS': [os.path.join(BASE_DIR, 'templates')],
       'APP_DIRS': True,
       # …
```

### Plantilla inicio de sesión "login"

> **Advertencia:** Las plantillas de autenticacion provista en este articulo son versiones muy basicas y ligeramete modificadas de las plantillas de inicio de sesion de demostracion de Django. ¡Necesitas personalizarlos para tus propios usos!

Crea un nuevo archivo HTML llamado /**locallibrary/templates/registration/login.html**. suministrado en el siguiente contenido :

```django
{% extends "base_generic.html" %}

{% block content %}

  {% if form.errors %}
    <p>Your username and password didn't match. Please try again.</p>
  {% endif %}

  {% if next %}
    {% if user.is_authenticated %}
      <p>Your account doesn't have access to this page. To proceed,
      please login with an account that has access.</p>
    {% else %}
      <p>Please login to see this page.</p>
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

  {# Assumes you setup the password_reset view in your URLconf #}
  <p><a href="{% url 'password_reset' %}">Lost password?</a></p>

{% endblock %}
```

Estas plantillas comparten algunas similitudes con algunas que hemos visto antes — extiende nuestra plantilla base y sobreescribe el bloque `content`. El resto del código es un código de manejo de formularios bastante estándar, que trataremos en un tutorial posterior. Todo lo que necesitas saber por ahora es que esto mostrará un formulario en el que puedes introducir tu usuario y contraseña, y que si introduces valores inválidos se te pedirá que ingreses los valores correctos cuando la página refresque.

Navega de vuelta a la página de inicio sesión (`http://127.0.0.1:8000/accounts/login/`) una vez que hayas guardado tu plantilla, y deberías ver algo como esto:

![Library login page v1](library_login.png)

Si intentas iniciar sesión tendrá éxito y serás redirigido a otra página (por defecto será `http://127.0.0.1:8000/accounts/profile/`). El problema aquí es que, por defecto, Django espera que después de iniciar sesión seas llevado a una página de perfil (que podrá ser el caso o no). Como no has definido esta página todavía, ¡obtendrás otro error!

Abre la configuración del proyecto (**/locallibrary/locallibrary/settings.py**) y añade al final el texto de abajo. Ahora cuando inicies sesión deberías ser redirigido a la página de inicio por defecto.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Plantilla cierre de sesión "logout"

Si navegas a la url de cierre de sesión (`http://127.0.0.1:8000/accounts/logout/`) verás un extraño comportamiento — tu usuario cerrará la sesión, pero serás llevado a la página de cierre de sesión del **Administrador**. Eso no es lo que quieres, aunque sólo sea porque el enlace de inicio de sesión de esa página te lleva a la pantalla del inicio de sesión del Administrador (y eso sólo está disponible a los usuarios que tienen el permiso `is_staff`).

Crea y abre el fichero /**locallibrary/templates/registration/logged_out.html**. Copia en él el siguiente texto:

```django
{% extends "base_generic.html" %}

{% block content %}
<p>Logged out!</p>

<a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Esta plantilla es muy simple. Tan sólo muestra un mensaje informándote que has cerrado sesión, y provee un enlace que puedes pulsar para volver a la página de inicio de sesión. Si vas a la url de cierre de sesión otra vez, deberías ver esta página:

![Library logout page v1](library_logout.png)

### Plantillas de reinicio de contraseña "Password reset"

El sistema de reinicio de contraseña usa el correo electrónico para enviar al usuario un enlace de reinicio. Necesitas crear formularios para obtener la dirección de correo electrónico del usuario, enviar el correo, permitirle introducir una nueva contraseña y tenerla en cuenta cuando todo el proceso se haya completado.

Las siguientes plantillas pueden usarse como un punto de partida.

#### Formulario de reinicio de contraseña

Este es el formulario para obtener la dirección del correo electrónico del usuario (para enviar el correo de reinicio de contraseña). Crea **/locallibrary/templates/registration/password_reset_form.html**, y establece el siguiente contenido:

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
  {% csrf_token %}
  {% if form.email.errors %}
    \{{ form.email.errors }}
  {% endif %}
      <p>\{{ form.email }}</p>
    <input type="submit" class="btn btn-default btn-lg" value="Reset password">
  </form>
{% endblock %}
```

#### Reinicio de contraseña hecho

Este formulario es mostrado después de que tu dirección de correo electrónico haya sido recogida. Crea **/locallibrary/templates/registration/password_reset_done.html**, y establece el siguiente contenido:

```django
{% extends "base_generic.html" %}
{% block content %}
<p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Correo electrónico de reinicio de contraseña

Esta plantilla suministra el texto HTML del correo electrónico, y contiene el enlace de reseteo que enviaremos a los usuarios. Crea **/locallibrary/templates/registration/password_reset_email.html**, y establece el siguiente contenido:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol}}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Confirmación de reinicio de contraseña

Esta página es donde introduces una nueva contraseña después de pinchar el enlace en el correo electrónico de reinicio de contraseña. Crea **/locallibrary/templates/registration/password_reset_confirm.html**, y establece el siguiente contenido:

```django
{% extends "base_generic.html" %}

{% block content %}

    {% if validlink %}
        <p>Please enter (and confirm) your new password.</p>
        <form action="" method="post">
            <div style="display:none">
                <input type="hidden" value="\{{ csrf_token }}" name="csrfmiddlewaretoken">
            </div>
            <table>
                <tr>
                    <td>\{{ form.new_password1.errors }}
                        <label for="id_new_password1">New password:</label></td>
                    <td>\{{ form.new_password1 }}</td>
                </tr>
                <tr>
                    <td>\{{ form.new_password2.errors }}
                        <label for="id_new_password2">Confirm password:</label></td>
                    <td>\{{ form.new_password2 }}</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="Change my password" /></td>
                </tr>
            </table>
        </form>
    {% else %}
        <h1>Password reset failed</h1>
        <p>The password reset link was invalid, possibly because it has already been used. Please request a new password reset.</p>
    {% endif %}

{% endblock %}
```

#### Reinicio de contraseña completado

Este es el último paso de la plantilla de reinicio de contraseña, que es mostrada para notificarte cuando el reinicio de contraseña ha tenido éxito. Crea **/locallibrary/templates/registration/password_reset_complete.html**, y establece el siguiente contenido:

```django
{% extends "base_generic.html" %}
{% block content %}

<h1>The password has been changed!</h1>
<p><a href="{% url 'login' %}">log in again?</a></p>

{% endblock %}
```

### Probando las nuevas páginas de autenticación

Ahora que has añadido la configuración URL y creado todas estas plantillas, ¡las páginas de autenticación ahora deberían funcionar!

Puedes probar las nuevas páginas de autenticación intentando iniciar sesión y entonces cerrar sesión con tu cuenta de super administrador usando estas URLs:

- `http://127.0.0.1:8000/accounts/login/`
- `http://127.0.0.1:8000/accounts/logout/`

Serás capaz de probar la funcionalidad de reinicio de contraseña desde el enlace de la página de inicio de sesión. **¡Ten cuidado con el hecho de que Django solamente enviará correos de reinicio a las direcciones (usuarios) que ya están almacenadas en la base de datos!**

> **Nota:** El sistema de reinicio de contraseña requiere que tu sitio web soporte envío de correo, que está más allá del ámbito de este artículo, por lo que esta parte **no funcionará todavía**. Para permitir el testeo, establece la siguiente línea al final de tu fichero settings.py. Esto registra en la consola cualquier envío de correo electrónico (y así puedes copiar el enlace de reinicio de contraseña desde dicha consola).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Para más información, ver [Sending email](https://docs.djangoproject.com/en/1.10/topics/email/) (Django docs).

## Probando contra usuarios autenticados

Esta sección mira a lo que podemos hacer para controlar selectivamente el contenido que el usuario ve basado en si ha iniciado sesión o no.

### Probando en plantillas

Puedes obtener información en las plantillas sobre el usuario que actualmente ha iniciado sesión con la variable de plantillas `\{{ user }}` (esto se añade por defecto al contexto de la plantilla cuando configuras el proyecto como hicimos en nuestro esqueleto).

Es típico que primero pruebes con la variable de plantilla `\{{ user.is_authenticated }}` para determinar si el usuario puede ver el contenido específico. Para demostrar esto, lo siguiente que haremos será actualizar nuestra barra lateral "sidebar" para mostrar un enlace de inicio de sesión "Login" si el usuario no ha iniciado sesión, y un cierre de sesión "Logout" en el caso de que sí la haya iniciado.

Abre la plantilla base (**/locallibrary/catalog/templates/base_generic.html**) y copia el siguiente texto en el bloque `sidebar`, justamente antes de la etiqueta de plantilla `endblock` .

```django
  <ul class="sidebar-nav">

    ...

   {% if user.is_authenticated %}
     <li>User: \{{ user.get_username }}</li>
     <li><a href="{% url 'logout'%}?next=\{{request.path}}">Logout</a></li>
   {% else %}
     <li><a href="{% url 'login'%}?next=\{{request.path}}">Login</a></li>
   {% endif %}
  </ul>
```

Como puedes ver, usamos las etiquetas de plantilla `if`-`else`-`endif` para condicionar el texto mostrado basado en si `\{{ user.is_authenticated }}` es cierto o no. Si el usuario está autenticado, sabemos que tenemos un usuario válido, por lo que llamamos a **\\{{ user.get_username }}** para mostrar su nombre.

Creamos los enlaces URLs del inicio y del cierre de sesión usando la etiqueta de plantilla `url` y los nombres de las respectivas configuraciones de las URL. Nótese también cómo hemos añadido `?next=\{{request.path}}` al final de las URLs. Lo que esto hace es añadir el párametro URL next que contiene la dirección (URL) de la página _actual_, al final de la URL enlazada. Después de que el usuario haya iniciado o cerrado sesión con éxito, las vistas usarán el valor de este "`next`" para redirigir al usuario de vuelta a la página donde pincharon primeramente el enlace de inicio/cierre de sesión.

> **Nota:** ¡Pruébalo! Si estás en la página de inicio y pinchas en la barra lateral "sidebar", después de que la operación se complete deberías acabar de vuelta en la misma página.

### Probando en vistas

Si estás usando vistas basadas en funciones, la forma más facil para restringir el acceso a tus funciones es aplicar el decorador `login_required` a tu función de vista, como se muestra más abajo. Si el usuario ha iniciado sesión entonces tu código de vista se ejecutará como normalmente lo hace. Si el usuario no ha iniciado sesión, se redirigirá a la URL de inicio de sesión definida en tu configuración de proyecto (`settings.LOGIN_URL`), pasando el directorio absoluto actual como el parámetro URL `next`. Si el usuario tiene éxito en el inicio de sesión entonces será devuelto a esta página, pero esta vez autenticado.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    ...
```

> **Nota:** ¡Tú puedes hacer el mismo tipo de cosas manualmente probando con `request.user.is_authenticated`, pero el decorador es mucho más conveniente!

De manera similar, la forma más fácil de restringir el acceso a los usuarios que han iniciado sesión en tus vistas basadas en clases es extender de `LoginRequiredMixin`. Necesitas declarar primeramente este `mixin` en la lista de super clases, antes de la clase de vista principal.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    ...
```

Esto tiene exactamente el mismo comportamiento de redirección que el decorador `login_required`. También puedes especificar una localización alternativa para redirigir al usuario si no están autenticados (`login_url`), y un nombre de parámetro URL en lugar de "`next`" para insertar el directorio absoluto actual (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Para detalles adicionales, echa un vistazo a [Django docs](https://docs.djangoproject.com/en/1.10/topics/auth/default/#limiting-access-to-logged-in-users).

## Ejemplo - listando los libros del usuario actual

Ahora que sabemos cómo restringir una página a un usuario concreto, vamos a crear una vista de los libros que el usuario tiene prestados actualmente.

Desafortunadamente, ¡todavía no tenemos una forma de pedir prestados los libros a los usuarios! Por eso, antes de que podamos crear la lista de libros vamos primeramente a extender el modelo `BookInstance` para dar soporte al concepto de pedir prestado y usar la aplicación del Administrador Djando para alquilar un número de libros a nuestro usuario de prueba.

### Modelos

Primero vamos a hacer posible para los usuarios tener una `BookInstance` en alquiler (ya tenemos un `status` y una fecha `due_back`, pero no tenemos todavía una asociación entre este modelo y un Usuario). Crearemos uno usando un campo `ForeignKey` (uno-a-muchos). También necesitaremos un mecanismo sencillo para probar si un libro alquilado está atrasado.

Abre **catalog/models.py**, e importa el modelo `User` de `django.contrib.auth.models` (añade esto justamente debajo de la anterior línea de importación, arriba del todo del fichero, para que el `User` esté disponible para el posterior código del que hace uso):

```python
from django.contrib.auth.models import User
```

Después añade el campo `borrower` al modelo `BookInstance`:

```python
borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
```

Ya que estamos aquí, vamos a añadir una propiedad que podamos llamar desde nuestras plantillas para decir si una instancia particular de un libro está atrasada. Mientras que podríamos calcular esto en la misma plantilla, usar una propiedad ([property](https://docs.python.org/3/library/functions.html#property)) como se muestra abajo será mucho más eficiente.

```python
from datetime import date

@property
def is_overdue(self):
    if self.due_back and date.today() > self.due_back:
        return True
    return False
```

> **Nota:** Primeramente verificamos si la fecha `due_back` está vacía antes de realizar una comparación. Un campo vacío `due_back` provocaría a Django arrojar un error en lugar de mostrar la página: los valores vacíos no son comparables. ¡Esto no es algo que queramos para la experiencia de nuestros usuarios!

Ahora que hemos actualizado nuestros modelos, necesitaremos hacer migraciones actuales en el proyecto y entonces aplicar esas migraciones:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Administrador

Ahora abre **catalog/admin.py**, y añade el campo `borrower` a la clase `BookInstanceAdmin` en ambas `list_display` y `fieldsets` como se muestra abajo. Esto hará el campo visible en la sección de Administrador, por lo que podemos asignar un `User` a una `BookInstance` cuando lo necesitemos.

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_display = ('book', 'status', 'borrower', 'due_back', 'id')
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book','imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back','borrower')
        }),
    )
```

### Alquilar unos pocos libros

Ahora que es posible alquilar libros a un usuario específico, ve y alquila un número de registros `BookInstance`. Establece su campo `borrowed` a tu usuario de prueba, establece el `status` "On loan" (en alquiler) y establece fechas de vencimiento tanto en el futuro como en el pasado.

> **Nota:** No escribiremos el proceso, porque ¡ya sabes cómo usar el sitio de Administrador!

### Vista en alquiler

Ahora añadiremos una vista para obtener la lista de todos los libros que han sido alquilados al usuario actual. Usaremos la misma vista de lista genérica basada en clases con la que estamos familiarizada, pero esta vez también importaremos y extenderemos de `LoginRequiredMixin`, por lo que solamente un usuario que ha iniciado sesión podrá llamar a esta vista. También elegiremos declarar una `template_name` en lugar de usar la de por defecto, porque quizás acabemos teniendo unas pocas listas diferentes de registros de BookInstance, con diferentes vistas y plantillas.

Añade lo siguiente a catalog/views.py:

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin,generic.ListView):
    """
    Generic class-based view listing books on loan to current user.
    """
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact='o').order_by('due_back')
```

Para restringir nuestra consulta a solamente los objetos BookInstance del usuario actual, vamos a reimplementar `get_queryset()` como se muestra abajo. Nótese que "o" es el código almacenado para "on loan" (en alquiler) y vamos a ordenar por la fecha `due_back` para que los elementos más antiguos se muestren primero.

### Configuración URL para libros alquilados

Ahora abre **/catalog/urls.py** y añade un `path()` apuntando a la vista anterior (puedes simplemente copiar el texto de abajo al final del fichero).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Plantilla para libros alquilados

Ahora todo lo que necesitamos hacer para esta página es añadir una plantilla. Primero, creamos el fichero plantilla **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** y establecemos el siguiente contenido en ella:

```django
{% extends "base_generic.html" %}

{% block content %}
    <h1>Borrowed books</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">\{{bookinst.book.title}}</a> (\{{ bookinst.due_back }})
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>There are no books borrowed.</p>
    {% endif %}
{% endblock %}
```

Esta plantilla es muy similar a esas que hemos creado previamente para los objetos `Book` y `Author`. La única "cosa" nueva aquí es que comprobamos el método que hemos añadido en el modelo `(bookinst.is_overdue`) y lo usamos para cambiar el color de los elementos atrasados.

Cuando el servidor de desarrollo esté en ejecución, deberías ser capaz de ver la lista de los usuarios que han iniciado sesión en tu navegador en `http://127.0.0.1:8000/catalog/mybooks/`. Prueba esto con tu usuario iniciado en la sesión y cerrado en la sesión (en el segundo caso, deberías ser redirigido a la página de inicio).

### Añadir la lista a la barra lateral

El último paso es añadir un enlace para esta nueva página en la barra lateral "sidebar". Pondremos esto en la misma sección donde mostramos otra información para el usuario que ha iniciado la sesión.

Abre la plantilla base (**/locallibrary/catalog/templates/base_generic.html**) y añade la línea en negrita a la barra lateral como se muestra.

```django
 <ul class="sidebar-nav">
   {% if user.is_authenticated %}
   <li>User: \{{ user.get_username }}</li>
   <li><a href="{% url 'my-borrowed' %}">My Borrowed</a></li>
   <li><a href="{% url 'logout'%}?next=\{{request.path}}">Logout</a></li>
   {% else %}
   <li><a href="{% url 'login'%}?next=\{{request.path}}">Login</a></li>
   {% endif %}
 </ul>
```

### ¿Cómo se ve?

Cuando cualquier usuario ha iniciado sesión, verán el enlace _My Borrowed_ (Mis Alquileres) en la barra lateral, y la lista de libros mostrados como se ve abajo (¡el primer libro no tiene fecha de vencimiento, que es un bug que esperamos arreglar en un tutorial posterior!).

![Library - borrowed books by user](library_borrowed_by_user.png)

## Permisos

Los permisos están asociados con los modelos, y definen las operaciones que pueden llevarse a cabo en un modelo instanciado por un usuario que tiene el permiso. Por defecto, Django automáticamente da los permisos _add_, _change_, and _delete_ (añadir, cambiar y eliminar) a todos los modelos, que permiten a los usuarios con los permisos realizar las acciones asociadas a través del sitio de Administrador. Tú puedes definir tus propios permisos a los modelos y concedérselos a usuarios específicos. También puedes cambiar los permisos asociados con diferentes instancias del mismo modelo.

Probar permisos en vistas y plantillas es muy similar a probar sobre el estado de autenticación (y, de hecho, probar un permiso también prueba una autenticación).

### Modelos

La definición de permisos está hecha en la sección del modelo "`class Meta`", usando el campo `permissions`. Puedes especificar tantos permisos como necesites en una tupla, cada permiso está definido a sí mismo en una tupla anidada que contiene el nombre del permiso y el valor mostrado del mismo. Por ejemplo, podríamos definir un permiso para permitir a un usuario marcar un libro que ya ha sido devuelto, como se muestra:

```python
class BookInstance(models.Model):
    ...
    class Meta:
        ...
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Podríamos asignar el permiso a un grupo bibliotecario "Librarian" en el sitio de Administración.

Abre **catalog/models.py**, y añade el permiso como se muestra arriba. Necesitarás volver a ejecutar tus migraciones (ejecutar `python3 manage.py makemigrations` y `python3 manage.py migrate`) para actualizar la base de datos de forma apropiada.

### Plantillas

Los permisos del usuario actual están almacenados en una variable de plantilla llamada `\{{ perms }}`. Puedes comprobar si el usuario actual tiene un permiso particular usando el nombre de variable específico con la "app" asociada en Django — ej. `\{{ perms.catalog.can_mark_returned }}` será `True` (cierto) si el usuario tiene el permiso, y `False` (falso) en otro caso. De forma típica probamos el permiso usando la etiqueta de plantilla `{% if %}` como se muestra:

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Vistas

Los permisos pueden ser probados en una vista de función usando el decorador `permission_required` o en una vista basada en clases usando el `PermissionRequiredMixin`. El patrón y el comportamiento son los mismos que para la autenticación de inicio de sesión, aunque desde luego podrías razonablemente tener que añadir múltiples permisos.

Decorador de vista de funciones:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    ...
```

"Mixin" de permisos requeridos para vistas basadas en clases:

```python
from django.contrib.auth.mixins import PermissionRequiredMixin

class MyView(PermissionRequiredMixin, View):
    permission_required = 'catalog.can_mark_returned'
    # Or multiple permissions
    permission_required = ('catalog.can_mark_returned', 'catalog.can_edit')
    # Note that 'catalog.can_edit' is just an example
    # the catalog application doesn't have such permission!
```

### Ejemplo

Nosotros no actualizaremos la _LocalLibrary_ aquí; ¡quizás en el siguiente tutorial!

## Desafíate a ti mismo

Anteriormente en este artículo te mostramos cómo crear una página para el usuario actual para listar los libros que había pedido prestado. El desafío ahora es crear una página similar que solamente sea visible para los bibliotecarios, que muestre todos los libros que hayan sido prestados, y que incluya el nombre de cada prestatario.

Deberías ser capaz de seguir el mismo patrón que el de la otra vista. La principal diferencia es que necesitarás restringir la vista a solamente los bibliotecarios. Podrías hacer esto basándote en si es un miembro de los empleados (decorador de función: `staff_member_required`, variable de plantilla: `user.is_staff`) pero nosotros te recomendamos que en su lugar uses el permiso `can_mark_returned` y `PermissionRequiredMixin`, como se describe en la sección anterior.

> **Advertencia:** Recuerda no usar tu súper usuario para pruebas basadas en permisos (la comprobación de permisos siempre devuelve cierto para súper usuarios, ¡incluso si un permiso no ha sido definido todavía!). En su lugar, crea un usuario bibliotecario, y añade entonces la capacidad requerida.

Cuando hayas terminado, tu página debería verse algo parecida a la captura de pantalla de abajo.

![All borrowed books, restricted to librarian](library_borrowed_all.png)

## Sumario

Excelente trabajo — has creado un sitio web para que los miembros de la biblioteca puedan iniciar sesión y ver su propio contenido, y los bibliotecarios (con el permiso correcto) puedan usarlo para ver todos los libros alquilados y sus prestatarios. En este momento estamos todavía simplemente viendo contenido, pero los mismos principios y técnicas son usados cuando empiezas a modificar y añadir datos.

En nuestro siguiente artículo observaremos cómo puedes usar los formularios de Django para recoger la entrada de datos del usuario, y entonces empezar a modificar algunos de nuestros datos almacenados.

## Ver también

- [Autenticación de Usuario en Django](https://docs.djangoproject.com/en/1.10/topics/auth/) (Django docs)
- [Usando el sistema por defecto de Autenticación de Django](https://docs.djangoproject.com/en/1.10/topics/auth/default//) (Django docs)
- [Introducción a clases basadas en vistas > Decoradores](https://docs.djangoproject.com/en/1.10/topics/class-based-views/intro/#decorating-class-based-views) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}
