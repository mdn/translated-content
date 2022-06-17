---
title: Tipos de ataques
slug: Web/Security/Types_of_attacks
---


Este artículo describe varios tipos de ataques de seguridad y técnicas para mitigarlos.

## Click-jacking

[Clickjacking](/es/docs/Glossary/Clickjacking) es la práctica de engañar a un usuario en hacer clic en un enlace, botón, etc. que no es lo que el usuario cree que es. Esto puede ser usado, por ejemplo, para robar credenciales de inicio de sesión o para obtener el permiso indeseado para instalar una pieza de malware. (Clickjacking se llama a veces "redes de la interfaz de usuario", aunque este es un uso equivocado del término "redress").

## Cross-site scripting (XSS)

Cross-site scripting (XSS) es una vulnerabilidad de seguridad que permite al atacante insertar código malicioso en un sitio web. Este código es ejecutado por las víctimas y permite a los atacantes superar los controles de acceso y suplantar usuarios. Según el Proyecto de Aplicaciones Web de Seguridad Abierta, XSS fue el [séptimo peligro más común](https://owasp.org/www-project-top-ten/2017/Top_10) en 2017.

Estos ataques tienen éxito si la aplicación web no emplea suficiente validación o codificación. El navegador del usuario no puede detectar que el script malicioso no es confiable, y por lo tanto le permite acceder a cualquier cookie, token de sesión, o a cualquier otra información sensible específica del sitio, o permite que el script malicioso reescriba el contenido {{glossary("HTML")}}.

Los ataques de XSS usualmente ocurren cuando 1) los datos entran a una aplicación web a través de una fuente de datos no confiable (generalmente una solicitud Web) o 2) el contenido dinámico se envía a un usuario Web sin ser validado para contenido malicioso.

El contenido malicioso a menudo incluye {{glossary("JavaScript")}}, pero a veces HTML, Flash, o cualquier otro código que el navegador pueda ejecutar. La variedad de ataques basados en XSS es casi ilimitada, pero normalmente incluyen transmitir datos privados como cookies o información de sesión a un atacante, redirigir a la víctima a una página controlada por el atacante, o realizar otras operaciones maliciosas sobre la máquina del usuario bajo la suplantación del sitio vulnerable.

Los ataques de XSS pueden clasificarse en tres categorías: almacenados (también llamados persistentes), reflejados (también llamados no persistentes), o DOM-based.

- Ataques de XSS almacenados
  - : El código malicioso es almacenado permanentemente en los servidores de destino. La víctima luego recupera este código malicioso desde el servidor cuando el navegador envía una solicitud de datos.
- Ataques de XSS reflejados
  - : Cuando un usuario es engañado para hacer clic en un enlace malicioso, enviando un formulario especialmente diseñado, o navegando a un sitio malicioso, el código malicioso viaja a la página vulnerable. El servidor refleja el código malicioso de vuelta al navegador del usuario, como en un mensaje de error, un resultado de búsqueda, o cualquier otra respuesta que incluye datos enviados al servidor como parte de la solicitud. El navegador ejecuta el código porque asume que la respuesta es de un "servidor de confianza" que el usuario ha interactuado con anteriormente.
- Ataque de XSS DOM-based
  - : El código malicioso es ejecutado como resultado de modificar el DOM del navegador del usuario (en el navegador del usuario) usado por la aplicación original. Es decir, la página misma no cambia, pero el código del cliente contenido en la página se ejecuta de forma inesperada debido a las modificaciones maliciosas en el entorno del DOM.

## Falsificación de solicitud entre sitios (CSRF)

CSRF (a veces también llamado XSRF) es una clase de ataque relacionada. El atacante hace que el navegador del usuario realice una solicitud al backend de la página web sin el consentimiento o conocimiento del usuario. Un atacante puede usar un payload XSS para lanzar un ataque CSRF.

Wikipedia menciona un buen ejemplo para CSRF. En esta situación, alguien incluye una imagen que no es realmente una imagen (por ejemplo en un chat o foro sin filtrar), sino que en realidad es una solicitud a su servidor de bancos para retirar dinero:

```html
<img src="https://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory">
```

Ahora, si ha iniciado sesión en su cuenta bancaria y sus cookies aún son válidas (y no hay otra validación), transferirá el dinero tan pronto cargue la página que contiene esta imagen. Para endpoints (enlaces) que requieren una solicitud POST, es posible programáticamente activar una solicitud de \<form> (quizás en un \<iframe> invisible) cuando se cargue la página:

```html
<form action="https://bank.example.com/withdraw" method="POST">
  <input type="hidden" name="account" value="bob">
  <input type="hidden" name="amount" value="1000000">
  <input type="hidden" name="for" value="mallory">
</form>
<script>window.addEventListener('DOMContentLoaded', (e) => { document.querySelector('form').submit(); }</script>
```

Hay algunas técnicas que deben usarse para evitar que esto ocurra:

- Los endpoints GET deben ser acciones idempotente que promulguen un cambio y no recuperen datos deberían requerir enviar una solicitud POST (u otro método HTTP). Los endpoints POST no deben intercambiarse de forma idempotente a través de solicitudes GET con parámetros en la cadena de consulta.
- Un token CSRF debería incluirse en los elementos \<form> mediante un campo oculto. Este token debería ser único por usuario y almacenado (por ejemplo, en una cookie) de forma que el servidor pueda buscar el valor esperado cuando la solicitud es enviada. Para todas las solicitudes que no son GET que tengan la posibilidad de realizar una acción, este campo debería ser comparado con el valor esperado. Si hay una diferencia, la solicitud debería abortarse.
- Este método de protección se basa en que un atacante no pueda predecir el token CSRF asignado al usuario. El token debería ser regenerado al iniciar sesión.
- Las cookies que se utilizan para acciones sensibles (como las cookies de sesión) deben tener una duración de tiempo corta con el atributo de SameSite establecido a Strict o Lax. (Consulte las cookies de SameSite arriba). En los navegadores compatibles, esto tendrá el efecto de garantizar que la cookie de sesión no se envíe junto con las solicitudes entre sitios y, por lo tanto, la solicitud no se autentca en el servidor de aplicaciones.
- Deben implementarse tanto los tokens CSRF como las cookies de SameSite. Esto garantiza que todos los navegadores estén protegidos y proporciona protección donde las cookies de SameSite no pueden ayudar (como ataques que se originan desde un subdominio separado).

Para más consejos de prevención, consulte la hoja de de prevención de OWASP CSRF.

## Man-in-the-middle (MitM)

Un tercero intercepta el tráfico entre un servidor web y un cliente (navegador), y se hace pasar por el servidor web para capturar datos (como credenciales de inicio de sesión o información de tarjetas de crédito). El tráfico es pasado, posiblemente con alteraciones. Las redes WiFi abiertas son un medio típico de ejecutar este ataque.

## Session hijacking (Secuestro de sesión)

El secuestro de sesión consiste en obtener acceso y hacer un mal uso de la sesión autenticada de un usuario. Esto puede suceder robando una cookie para una sesión existente, o engañando al usuario (o a su navegador) para que configure una cookie con una ID de sesión predeterminada.

Las vías de exfiltración se limitan por implementar una política de contenido estricto de seguridad (Content-Security-Policy).

### Session fixation (Fijación de sesión)

Un tercero puede determinar el identificador de sesión de un usuario (ej., leyendo o estableciéndolo), y por lo tanto interactuar con el servidor como ese usuario. Robar cookies es una forma de hacerlo.

Recuerde que un subdominio como application.example.com puede establecer una cookie para ser enviada con solicitudes a example.com o a otros subdominios estableciendo el atributo `Domain`:

```
Set-Cookie: CSRF=e8b667; Secure; Domain=example.com
```

Si una aplicación vulnerable está disponible en un subdominio, este mecanismo puede ser abusado en un ataque de fijación de sesión (fixation attack). Cuando el usuario visita una página en el dominio principal (u otro subdominio), la aplicación puede confiar en el valor existente enviado en la cookie del usuario. Esto podría permitir a un atacante eludir la protección CSRF o secuestrar una sesión después de que el usuario inicie sesión.
Alternativamente, si el dominio principal no utiliza [HTTP Strict-Transport-Security](/es/docs/Glossary/HSTS) con el conjunto `includeSubdomains` establecido, un usuario sujeto a un MitM activo (quizás conectado a una red WiFi abierta) podría servirle una respuesta con un encabezado Set-Cookie de un subdominio no existente. El resultado final sería muy similar, con el navegador almacenando la cookie ílicta y enviándola a todas las demás páginas bajo el dominio de ejemplo.com.

La fijación de sesión debería ser mitigada principalmente mediante la regeneración de valores de las cookies de sesión cuando el usuario se autentica (incluso si ya existe una cookie) y vinculando cualquier token CSRF al usuario.

### Session side-jacking

### Browser hijacking malware
