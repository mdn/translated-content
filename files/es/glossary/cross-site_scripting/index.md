---
title: Cross-site scripting
slug: Glossary/Cross-site_scripting
---

{{GlossarySidebar}}

Cross-site scripting (XSS) es una vulnerabilidad de seguridad que permite a un atacante inyectar en un sitio web código malicioso del lado del cliente. Este código es ejecutado por las víctimas y permite a los atacante eludir los controles de acceso y hacerse pasar por usuarios. Según el Open Web Application Security Project, XSS fue la [séptima vulnerabilidad más común de las aplicaciones web](https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf) en 2017.

Estos ataques tienen éxito si la aplicación web no emplea suficiente validación o codificación. El navegador del usuario no puede detectar que el script malicioso no es confiable, por lo que da acceso a cookies, tokens de sesión u otra información sensible específica del sitio, o permite que el escript reescriba contenido {{glossary("HTML")}}.

Los ataques XSS suelen producirse cuando 1) los datos entran en una aplicación web a través de una fuente no confiable (en la mayoría de los casos, una solicitud web) o 2) el contenido dinámico se envía a un usuario web sin ser validado como contenido malicioso.

El contenido malicioso a menudo incluye {{glossary("JavaScript")}}, pero a veces HTML, Flash o cualquier otro código que el navegador pueda ejecutar. La variedad de ataques basados en XSS es casi ilimitado. pero comúnmente incluyen la transmisión de datos privados como cookies u otra información de sesión al atacante, la redirección de la víctima a una página web controlada por el atacante o la realización de otras operaciones maliciosas en el equipo del usuario bajo la apariencia de un sitio vulnerable.

Los ataques XSS se pueden clasificar en tres categorías: almacenados (también llamados persistentes), reflejados (también llamados no persistentes) o basados en DOM.

- **XSS Almacenados**
  - : El script inyectado se almacena permanentemente en los servidores de destino. La víctima recupera entonces este script malicioso del servidor cuando el navegador envía una solicitud de datos.
- **XSS Reflejados**
  - : Cuando se engaña a un usuario para que haga clic en un enlace malicioso, envía un formulario especialmente diseñado o navegue a un sitio malicioso, el código inyectado viaja al sitio web vulnerable. El servidor web refleja el script inyectado en el navegador del usuario, por ejemplo, en un mensaje de error, un resultado de búsqueda o cualquier otra respuesta que incluya datos enviados al servidor como parte de la solicitud. El navegador ejecuta el código porque asume que la respuesta proviene de un servidor "de confianza" con el que el usuario ya ha interactuado.
- **XSS basados en DOM**
  - : El payload se ejecuta como resultado de la modificación del entorno DOM (en el navegador de la víctima) utlizado por el script original del lado del cliente. Es decir, la página en sí no cambia, pero el código del lado del cliente contenido en la página se ejecuta de forma inesperada debido a las modificaciones maliciosas del entorno DOM.

## Saber más

### Conocimientos generales

- [Cross-site scripting](https://es.wikipedia.org/wiki/Cross-site_scripting) on Wikipedia
- [Cross-site scripting on OWASP](https://owasp.org/www-community/attacks/xss/)
- [Another article about Cross-site scripting](http://www.acunetix.com/blog/web-security-zone/articles/dom-xss-explained/)
- [XSS Attack – Exploit & Protection](https://secure.wphackedhelp.com/blog/wordpress-xss-attack/)
