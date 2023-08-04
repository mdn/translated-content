---
title: Sending form data
slug: Learn/Forms/Sending_and_retrieving_form_data
---

{{LearnSidebar}} {{PreviousMenuNext("Aprende / HTML / Formularios / The_native_form_widgets", "Aprender / html / Formularios / Form_validation", "Aprender / html / Forms")}}

En este artículo se analiza lo que sucede cuando un usuario envía un formulario - ¿A dónde van los datos y cómo los manejamos cuando llegan allí? - También tenemos en cuenta algunos de los problemas de seguridad asociados con el envío de los datos del formulario.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Conocimientos básicos de informática, una
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML"
          >comprensión de HTML</a
        >
        , y conocimientos básicos de
        <a href="/es/docs/Web/HTTP/Basics_of_HTTP">HTTP</a> y
        <a href="/es/docs/Learn/Server-side/First_steps"
          >programación del lado del servidor</a
        >
        .
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Para entender lo que sucede cuando se envía los datos del formulario,
        incluyendo la obtención de una idea básica de cómo se procesan los datos
        en el servidor
      </td>
    </tr>
  </tbody>
</table>

## ¿A dónde van los datos?

Aquí vamos a discutir lo que ocurre con los datos cuando se envía un formulario.

### Sobre la arquitectura cliente / servidor

La web se basa en una arquitectura cliente / servidor muy básica que se puede resumir de la siguiente manera: un cliente (normalmente un navegador Web) envía una petición a un servidor (la mayoría de las veces un servidor web como [Apache](http://httpd.apache.org/) , [Nginx](http://nginx.com/) , [IIS](http://www.iis.net/) , [Tomcat](http://tomcat.apache.org/) , etc.), utilizando el [protocolo HTTP](/es/docs/HTTP) . El servidor responde a la solicitud utilizando el mismo protocolo.

![Un esquema básico de la arquitectura cliente Web / servidor](/files/4291/client-server.png)

En el lado del cliente, un formulario HTML no es más que una manera fácil de usar conveniente para configurar una petición HTTP para enviar datos a un servidor. Esto permite al usuario para proporcionar información a ser entregada en la petición HTTP.

> **Nota:** Para tener una mejor idea de cómo funcionan las arquitecturas cliente-servidor, lea nuestra [programación de páginas web del lado del servidor, módulo: primeros pasos](/es/docs/Learn/Server-side/First_steps). En el lado del cliente: Debes definir como envías los datos.

El elemento {{HTMLElement ( "form")}} define cómo se enviarán los datos. Todos sus atributos están diseñados para que pueda configurar la solicitud que se enviará cuando un usuario pulsa un botón de envío. Los dos atributos más importantes son [`acción`](/es/docs/Web/HTML/Element/forma#acción) y [`método`](/es/docs/Web/HTML/Element/forma#método).

#### El atributo [`acción`](/es/docs/Web/HTML/Element/forma#acción)

Este atributo define el lugar donde los datos se envian. Su valor debe ser una dirección URL válida. Si no se proporciona este atributo, los datos serán enviados a la dirección URL de la página que contiene el formulario.

En este ejemplo, los datos se envían a una dirección URL absoluta - `http://foo.com`:

```html
<form action="http://foo.com"></form>
```

Aquí, nosotros usamos una URL relativa - los datos se envían a una dirección URL diferente en el servidor:

```html
<form action="/somewhere_else"></form>
```

Cuando se especifica sin atributos, como abajo, el {{HTMLElement ( "form")}} los datos se envían a la misma página en que la "forma" está presente :

```html
<form></form>
```

Muchas páginas más antiguas utilizan la siguiente notación para indicar que los datos deben ser enviados a la misma página que contiene el formulario; Esto fue necesario porque hasta HTML5, el atributo [`acción`](/es/docs/Web/HTML/Element/form#acción) fue requerido . Esto ya no es necesario.

```html
<form action="#"></form>
```

> **Nota:** Es posible especificar una dirección URL que utiliza el protocolo HTTPS (HTTP seguro). Al hacer esto, los datos se cifran junto con el resto de la solicitud, incluso si el propio formulario está alojado en una página insegura se accede a través de HTTPS. Por otro lado, si el formulario está alojado en una página segura, pero se especifica una dirección URL HTTP insegura con el atributo [`acción`](/es/docs/Web/HTML/Element/form#acción) , todos los navegadores mostrarán una advertencia de seguridad para el usuario cada vez que intenten enviar datos, ya que estos no se pueden cifrar.

#### El atributo [`método`](/es/docs/Web/HTML/Element/form#método)

Este atributo define cómo se envían los datos. El [protocolo HTTP](/es/docs/HTTP) proporciona varias formas de realizar una solicitud; Los datos del formulario HTML se pueden transmitir a través de un número de diferentes queridos, los más comunes de los cuales son el método `GET` y el método `POST`.

Para entender la diferencia entre estos dos métodos, vamos a dar un paso atrás y examinar cómo funciona HTTP. Cada vez que desee llegar a un recurso en la Web, el navegador envía una petición a una URL. Una petición HTTP consta de dos partes: un encabezado que contiene un conjunto de metadatos mundial sobre las capacidades del navegador, y un cuerpo que puede contener la información necesaria paraque el servidor pueda procesar la petición específica.

##### El método GET

El método `GET` es utilizado por el navegador para pedir al servidor que se envíe de vuelta un recurso dado: "Hey servidor, quiero conseguir este recurso." En este caso, el navegador envía un cuerpo vacío. Debido a que el cuerpo está vacío, si un formulario se envía utilizando este método, los datos enviados al servidor se anexan a la URL.

Considere la siguiente forma:

```html
<form action="http://foo.com" method="get">
  <div>
    <label for="decir"> ¿Qué saludo quiere decir? </label>
    <input name="decir" id="decir" value="Hola" />
  </div>
  <div>
    <label for="para"> ¿A quién se lo quiere decir? </label>
    <input name="para" value="mamá" />
  </div>
  <div>
    <button>enviar mis saludos</button>
  </div>
</form>
```

Dado que el método `GET` ha conseguido el recurso, verá en la URL lo siguiente en la barra de direcciones del navegador `www.foo.com/?say=Hi&to=Mom` cuando se envía el formulario.

![](url-parameters.png)

Los datos se añaden a la URL como una serie de pares de nombre / valor. Después que la dirección web URL ha terminado, se incluye un signo de interrogación ( `?`) seguido de los pares de nombre / valor, cada uno separado por un signo ( `&`). En este caso estamos pasando dos piezas de datos en el servidor:

- `say`, Que tiene un valor de `Hi`
- `to`, Que tiene un valor de `Mom`

La solicitud HTTP se ve así:

```
GET /? = Decir Hola & a = mamá HTTP / 1.1
Anfitrión: foo.com
```

> **Nota:** Puede encontrar este ejemplo en GitHub - ver [llegar-method.html](https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/get-method.html) ( [verlo en directo también](https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html) ).

##### El método POST

El `POST` método es un poco diferente. Es el método que el navegador utiliza para comunicarse con el servidor cuando se pide una respuesta que tenga en cuenta los datos proporcionados en el cuerpo de la petición HTTP: "Hey servidor, echa un vistazo a estos datos y envíame de vuelta un resultado apropiado." Si un formulario se envía utilizando este método, los datos se anexan al cuerpo de la petición HTTP.

Veamos un ejemplo - se trata de algo similar a como se vió en el método `GET` del apartado anterior, pero con el [`método`](/es/docs/Web/HTML/Element/form#método) atributo establecido `post`.

```html
<form action="http://foo.com" method="post">
  <div>
    <label for="dice"> Lo saludo qué quiere decir? </label>
    <input name="decir" id="decir" value="Hola" />
  </div>
  <div>
    <label for="para"> ¿Quién usted quiere decir que a? </label>
    <input name="a" value="mamá" />
  </div>
  <div>
    <button>enviar mis saludos</button>
  </div>
</form>
```

Cuando el formulario se envía mediante el método `POST`, no se obtienen los datos adjuntos en la dirección URL, y la solicitud HTTP se parece a esto y los datos son incluidos en el cuerpo de la petición en su lugar:

```
POST / HTTP/1.1
Anfitrión: foo.com
Content-Type: application / x-www-form-urlencoded
Content-Length: 13

decir = Hi & a = mamá
```

La cabecera `Content-Length` indica el tamaño del cuerpo, y la cabecera `Content-Type` indica el tipo de recurso que se envía al servidor. Discutiremos estas cabeceras más adelante.

> **Nota:** Puede encontrar este ejemplo en GitHub - ver [post-method.html](https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/post-method.html) ( [verlo en directo también](https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html) ).

#### Visualización de peticiones HTTP

Las peticiones HTTP nunca se muestran al usuario (si quieres verlos, es necesario utilizar herramientas como el [Monitor de red Firefox](/es/docs/Tools/Network_Monitor) o las [herramientas de desarrollo de Chrome](https://developers.google.com/chrome-developer-tools/) ). A modo de ejemplo, los datos del formulario se muestran a continuación en la pestaña de Chrome red:

![](network-monitor.png)

Lo único que se muestra al usuario es la dirección URL llamada. Como mencionamos anteriormente, con una petición `GET` del usuario,se verán los datos en su barra de direcciones, pero con una petición `POST` no será de esta manera. Esto puede ser muy importante por dos razones:

1. Si necesita enviar una contraseña (o cualquier otra pieza sensible de los datos), nunca utilice el método `GET` o se arriesga a mostrar en la barra de direcciones, lo que sería muy inseguro.
2. Si necesita enviar una gran cantidad de datos, el método `POSt` es preferible debido a que algunos navegadores limitan los tamaños de las direcciones URL. Además, muchos servidores limitan la longitud de las URL que aceptan.

### En el lado Servidor: la recuperación de los datos

Sea cual sea el método HTTP que elija, el servidor recibe una cadena que será analizada con el fin de obtener los datos como una lista de pares clave / valor. La forma de acceder a esta lista depende de la plataforma de desarrollo que use y de las estructuras específicas que pueda estar usando con él. La tecnología se utiliza también determina cómo se manejan claves duplicadas; A menudo,se da prioridad al valor recibido más recientemente para una clave dada .

#### Ejemplo: PHP Raw

[PHP](https://php.net/) ofrece algunos objetos globales para acceder a los datos. Suponiendo que usted ha utilizado el método `POST`, el siguiente ejemplo sólo toma los datos y lo muestra al usuario. Por supuesto, lo que se hace con los datos depende de usted. Es posible visualizarlos, almacenarlos en una base de datos, enviarlos por correo electrónico, o procesarlos de alguna otra manera.

```php
<?php
  // La variable global $ _POST que permite acceder a los datos enviados con el método POST por su nombre
  // Para acceder a los datos enviados con el método GET, puede usar $ _GET
  $ = Decir htmlspecialchars ($ _POST [ 'decir']);
  $ A = htmlspecialchars ($ _POST [ 'a']);

  echo $ digamos, '', $ a;
?>
```

Este ejemplo muestra una página con los datos que enviamos. Esto se puede ver en acción en nuestro archivo ejemplo [php-example.html](https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/php-example.html) - que contiene un ejemplo similar en forma como el que hemos visto antes, con un `method` con parámetro `post` y un `action` con parámetro `php-example.php` Cuando se envía, envía los datos del formulario al script [php-ejemplo.php](https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/php-example.php) , que contiene el código de PHP que se ha visto en el bloque anterior. Cuando se ejecuta este código, la salida en el navegador es `Hi Mom`.

![](php-result.png)

> **Nota:** Este ejemplo no funcionará cuando se carga en un navegador localmente - los navegadores no pueden interpretar código PHP, por lo que cuando se envía el formulario en el navegador sólo se puede ofrecer la descarga del archivo PHP para usted. Para conseguir que funcione, es necesario ejecutar el ejemplo a través de un servidor PHP de algún tipo. Buenas opciones para probar PHP locales son [MAMP](https://www.mamp.info/en/downloads/) (Mac y Windows) y [AMPPS](http://ampps.com/download) (Mac, Windows, Linux).

#### Ejemplo: Python

Este ejemplo muestra como se puede utilizar Python para hacer la misma cosa - mostrar los datos presentados en una página web. Se utiliza el [framework Flask](http://flask.pocoo.org/) para la prestación de las plantillas, el manejo de la presentación de datos de formulario, etc (ver [python-example.py](https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/python-example.py) ).

```python
from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
    return render_template('form.html')

@app.route('/hello', methods=['GET', 'POST'])
def hello():
    return render_template('greeting.html', say=request.form['say'], to=request.form['to'])

if __name__ == "__main__":
    app.run()
```

Las dos plantillas de referencia en el código anterior son los siguientes:

- [form.html](https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/templates/form.html) : La misma forma que hemos visto anteriormente en la [El método POST](#el_método_post) sección, pero con el `action` conjunto a `\{{ url_for('hello') }}`. (Esta es una [Jinja2](https://jinja.pocoo.org/docs/2.9/) plantilla, que es básicamente HTML, pero puede contener llamadas al código Python que ejecuta el servidor web que figura entre corchetes. `url_for('hello')` Básicamente está diciendo "redirigir a `/hello` cuando se envía el formulario").
- [greeting.html](https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/templates/greeting.html) :Esta plantilla solo contiene una línea que representa los dos bits de datos que se le pasan cuando se procesa. Esto se hace a través de la función `hello()` que se ha visto anteriormente, y que se ejecuta cuando la URL`/hello` es accedida.

> **Nota:** Una vez más, este código no funcionará si sólo intenta cargarlo en un navegador directamente. Python funciona un poco diferente a PHP - Para ejecutar este código local que necesita para [instalar Python / PIP](/es/docs/Learn/Server-side/Django/development_environment#Installing_Python_3) , a continuación, instalar el frasco utilizando `pip3 install flask`. En este punto, usted debe ser capaz de ejecutar el ejemplo utilizando `python3 python-example.py`, a continuación, deberá navegar a `localhost:5000` en su barra de direcciones.

#### Otros lenguajes y frameworks

Hay muchas otras tecnologías del lado del servidor que puede utilizar para el manejo de formularios, incluyendo [Perl](/es/docs/), [Java](/es/docs/), [.Net](http://www.microsoft.com/net), [Ruby](/es/docs/) , etc. Sólo tiene que elegir el que más le guste. Dicho esto, vale la pena señalar que es muy raro de usar estas tecnologías directamente porque esto puede ser complicado. Es más común el uso de uno de los muchos marcos de trabajo para un manejo más fácil del código, tales como:

- [Symfony](http://symfony.com/) para PHP
- [Django](/es/docs/Learn/Server-side/Django) para Python (un poco más pesado que el [frasco](http://flask.pocoo.org/) , pero con más herramientas y opciones).
- [Express](/es/docs/Learn/Server-side/Express_Nodejs) de Node.js
- [Ruby on Rails](http://rubyonrails.org/) Ruby
- [Grails](http://grails.org/) para Java
- etc.

Vale la pena señalar que incluso el uso de estos marcos, trabajar con formularios no es necesariamente _fácil_ . Pero es mucho más fácil que tratar de escribir toda la funcionalidad a partir de cero, además, le ahorrará mucho tiempo.

> **Nota:** Está más allá del alcance de este artículo para enseñarle cualquier lenguaje del lado del servidor o marcos de trabajo. Los enlaces de arriba le dará un poco de ayuda,en caso de que desee aprender.

## Un caso especial: el envío de archivos

El envío de archivos con formularios HTML es un caso especial. Los archivos son datos binarios - o considerados como tal - mientras que todos los demás datos son datos de texto. Debido a que HTTP es un protocolo de texto, existen requisitos especiales para el manejo de datos binarios.

### El [`enctype`](/es/docs/Web/HTML/Element/form#enctype) atributo

Este atributo le permite especificar el valor de la cabecera `Content-Type` HTTP incluido en la solicitud que se genera cuando se envía el formulario. Esta cabecera es muy importante porque le dice al servidor qué tipo de datos se está enviando. Por defecto, su valor es `application/x-www-form-urlencoded`. En términos humanos, esto significa: "Estos son datos de formulario que han sido codificados dentro de los parámetros de la URL."

Si desea enviar archivos, es necesario tomar tres pasos adicionales:

- Ajuste el [`método`](/es/docs/Web/HTML/Element/form#método) atributo `POST` porque el contenido del archivo no se puede poner dentro de los parámetros de URL.
- Establecer el valor de [`enctype`](/es/docs/Web/HTML/Element/form#enctype) que `multipart/form-data` debido a que los datos se dividen en múltiples partes, una para cada archivo más uno para los datos de texto incluidos en el cuerpo del formulario (si también se introduce el texto en la formulario).
- Incluir uno o más widgets [selector de archivos](/es/docs/Learn/HTML/Forms/The_native_form_widgets#File_picker) para permitir a los usuarios seleccionar el archivo (s) que será subido.

Por ejemplo:

```html
<form method="post" enctype="multipart / form-data">
  <div>
    <label for="archivo"> Elija un archivo </label>
    <input type="file" id="file" name="myFile" />
  </div>
  <div>
    <button>Enviar el archivo</button>
  </div>
</form>
```

> **Nota:** Algunos navegadores son compatibles con la [`múltiple`](/es/docs/Web/HTML/Element/input#múltiple) atributo en el elemento {{HTMLElement ( "input")}}, lo que permite elegir más de un archivo para subir con un único elemento `<input>` . Cómo el servidor gestiona los archivos realmente depende de la tecnología utilizada en el servidor. Como se mencionó anteriormente, el uso de un marco le hará la vida mucho más fácil.

> **Advertencia:** Muchos servidores están configurados con un límite de tamaño para los archivos y las peticiones HTTP con el fin de prevenir el abuso. Es importante comprobar este límite con el administrador del servidor antes de enviar un archivo.

## Precauciones de seguridad comunes

Cada vez que envíe datos a un servidor, debe tener en cuenta la seguridad de sus formularios HTML que son con mucho, los vectores de ataque más comunes (en lugares donde ocurren los ataques contra servidores). Los problemas nunca vienen de los formulariosHTML mismos - sino que proceden de cómo el servidor maneja los datos.

Dependiendo de lo que estés haciendo, hay algunos problemas de seguridad muy conocidos con los que te enfrentarás:

### XSS y CSRF

Cross-Site Scripting (XSS) y Cross-Site Request Falsification (CSRF) son tipos comunes de ataques que se producen cuando se muestran los datos enviados por un usuario y que son devueltos a otro usuario para otro uso.

XSS permite a los atacantes inyectar secuencias de comandos del lado del cliente en páginas Web visitadas por otros usuarios. Una vulnerabilidad de secuencias de comandos entre sitios, puede ser utilizada por los atacantes para eludir los controles de acceso, como la [política del mismo origen](/es/docs/JavaScript/Same_origin_policy_for_JavaScript) . El efecto de estos ataques pueden ir desde una pequeña molestia a un riesgo de seguridad.

Los ataques CSRF son similares a los ataques XSS porque comienzan de la misma manera - mediante la inyección de comandos de cliente en páginas Web - pero su objetivo es diferente. Los atacantes CSRF tratan de escalar privilegios de un usuario de mayores privilegios (por ejemplo, un administrador de sitio) para realizar una acción que no deberían ser capaces de hacer (por ejemplo, el envío de datos a un usuario no fiable).

Los ataques XSS explotan la confianza depositada a un usuario de un sitio web, mientras que los ataques CSRF abusan de la confianza que un sitio web ofrece para sus usuarios.

Para evitar estos ataques, siempre se deben comprobar los datos que un usuario envía a su servidor y (si es necesario mostrarlos) trate de no mostrar el contenido HTML provisto por el usuario. En su lugar, se deben procesar los datos proporcionados por el usuario para no mostrarlos al pie de la letra. Casi todos los marcos de trabajo (**frameworks**) en el mercado hoy implementan un filtro mínimo que eliminan el código HTML {{HTMLElement ( "script")}}, {{HTMLElement ( "iframe")}} y {{HTMLElement ( "objeto")}} si fuesen enviados por cualquier usuario. Esto ayuda a mitigar el riesgo, pero no necesariamente lo erradica.

### Inyección SQL

La inyección de SQL es un tipo de ataque que intenta realizar acciones en una base de datos utilizada por el sitio web de destino. Esto normalmente implica el envío de una petición SQL con la esperanza de que el servidor la ejecutará (por lo general cuando el servidor de aplicaciones intenta almacenar los datos enviados por un usuario). Esto es en realidad [uno de los principales vectores de ataque contra los sitios web](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project).

Las consecuencias pueden ser terribles, que van desde la pérdida de datos o hasta que los ataques tomen el control de la infraestructura de todo el sitio web mediante el uso de una escalada de privilegios. Esta es una amenaza muy seria y nunca debe almacenar los datos enviados por un usuario sin realizar alguna sanitización (por ejemplo, mediante el uso [`mysql_real_escape_string()`](http://www.php.net/manual/en/function.mysql-real-escape-string.php)de una infraestructura de PHP / MySQL).

### Inyección de cabecera HTTP y la inyección de correo electrónico

Este tipo de ataques pueden ocurrir cuando su aplicación se basa cabeceras HTTP o mensajes de correo electrónico basado en la entrada de datos por un usuario en un formulario. Estos no dañan directamente su servidor o afectan a sus usuarios, pero son una puerta abierta a problemas más profundos tales como el secuestro de sesión o ataques de phishing.

Estos ataques son en su mayoría en silencio, y pueden volver a su servidor en un [zombi](<http://en.wikipedia.org/wiki/Zombie_(computer_science)>) .

### Sea paranoico: Nunca confíe en sus usuarios

Entonces, ¿cómo se lucha contra estas amenazas? Este es un tema mucho más allá de esta guía, pero hay algunas reglas a tener en cuenta. La regla más importante es: nunca vuelva a confiar en sus usuarios, incluyáse a sí mismo; incluso un usuario de confianza podría haber sido secuestrado.

Todos los datos que vienen a su servidor deben comprobarse y ser desinfectados. Siempre. Sin excepción.

- Escapar caracteres potencialmente peligrosos. Los caracteres específicos con los que debe tener cuidado variarán dependiendo del contexto en el que se utilizan los datos y la plataforma de servidores que emplean, pero todos los lenguajes del lado del servidor tienen funciones de este.
- Limite la cantidad de entrada de datos para permitir sólo lo necesario.
- Sandbox subido archivos (almacenarlos en un servidor diferente y permitir el acceso al archivo sólo a través de un subdominio diferente o incluso mejor a través de un nombre de dominio totalmente diferente).

Debería evitar muchos o la mayoría de estos problemas, si sigue estas tres reglas, pero siempre es una buena idea obtener una revisión de seguridad realizada por una tercera parte competente. No asuma que usted ha visto todos los posibles problemas.

> **Nota:** La [seguridad del sitio web](/es/docs/Learn/Server-side/First_steps/Website_security) el artículo de nuestro [lado del servidor](/es/docs/Learn/Server-side) tema de aprendizaje analiza las amenazas anteriores y las posibles soluciones con más detalle.

## Conclusión

Como se puede ver, el envío de los datos del formulario es fácil, pero asegurar una aplicación puede ser complicado. Sólo recuerde que un desarrollador de aplicaciones para usuario no es el que debe definir el modelo de seguridad de los datos. Sí, como veremos, es posible [realizar la validación de los datos del lado del cliente](/es/docs/HTML/Forms/Data_form_validation) , pero el servidor no puede confiar en esta validación porque no tiene manera de saber realmente lo que sucede en el lado del cliente.

## Ver también

Si desea obtener más información sobre la seguridad de una aplicación web, se puede excavar en estos recursos:

- [programación web del lado del servidor primeros pasos](/es/docs/Learn/Server-side/First_steps)
- [El Proyecto Open Web Application Security (OWASP)](https://www.owasp.org/index.php/Main_Page)
- [el blog de Chris Shiflett sobre Seguridad en PHP](http://shiflett.org/)

{{PreviousMenuNext ( "Aprende / html / Formularios / The_native_form_widgets", "Saber / html / Formularios / Form_validation", "Aprender / html / Forms")}}
