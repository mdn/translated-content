---
title: Asegurando su sitio
slug: Web/Security/Practical_implementation_guides
original_slug: Web/Security/Securing_your_site
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/es/docs/Web/Security")}}

Hay una serie de cosas que puede hacer para ayudar a proteger su sitio. Este artículo ofrece una variedad de sugerencias, así como enlaces a otros artículos que brindan información más útil.

> [!NOTE]
> Este artículo es un trabajo en progreso, y ni está completo ni seguir sus sugerencias garantiza que su sitio sea completamente seguro.

## Seguridad de la información del usuario

- [Cómo desactivar el autocompletado de formularios](/es/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
  - : Los campos de formulario admiten el autocompletado en Gecko; es decir, sus valores pueden recordarse y recuperarse automáticamente la próxima vez que el usuario visite su sitio. Para ciertos tipos de datos, es posible que desee desactivar esta función.
- [Privacidad y el selector :visited](/es/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Este artículo analiza los cambios realizados en el método `getComputedStyle()` que elimina la capacidad de los sitios maliciosos de averiguar el historial de navegación del usuario.
- [Hash de contraseñas usando un algoritmo seguro](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) (OWASP)
  - : El almacenamiento de contraseñas en texto sin formato puede hacer que los atacantes conozcan y filtren la contraseña exacta de los usuarios de su sitio, lo que podría poner a los usuarios en riesgo. Pueden surgir los mismos problemas si utiliza un algoritmo antiguo o inseguro para el hashing (como md5). Debe usar un algoritmo hash específico de contraseña (como Argon2, PBKDF2, scrypt o bcrypt) en lugar de algoritmos de resumen de mensajes (como md5 y sha). Este artículo muestra las mejores prácticas para usar al almacenar contraseñas.

## Seguridad del contenido

- [Configurar correctamente los tipos MIME del servidor](/es/docs/Learn/Server-side/Configuring_server_MIME_types)
  - : Hay varias formas en que los tipos MIME incorrectos pueden causar posibles problemas de seguridad en su sitio. Este artículo explica algunos de ellos y muestra cómo configurar su servidor para servir archivos con los tipos MIME correctos.
- [Seguridad de transporte estricta HTTP](/es/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : La cabecera [HTTP](/es/docs/Web/HTTP) `Strict-Transport-Security:` permite que un sitio web especifique que solo se puede acceder a él mediante HTTPS.
- [Control de acceso HTTP](/es/docs/Web/HTTP/CORS)
  - : El estándar Cross-Origin Resource Sharing proporciona una forma de especificar qué contenido se puede cargar desde otros dominios. Puede usar esto para evitar que su sitio se use incorrectamente; además, puede usarlo para establecer recursos que otros sitios pueden usar expresamente.
- [Política de seguridad de contenido](/es/docs/Web/HTTP/CSP)
  - : Una capa adicional de seguridad que ayuda a detectar y mitigar ciertos tipos de ataques, incluidos {{Glossary("Cross-site_scripting", "Secuencias de comandos entre sitios")}} (Cross Site Scripting (XSS), en inglés) y ataques de inyección de datos. Estos ataques se utilizan para todo, desde el robo de datos hasta la desfiguración del sitio o la distribución de malware. El código es ejecutado por las víctimas y permite a los atacantes eludir los controles de acceso y hacerse pasar por los usuarios.
- [La cabecera de respuesta X-Frame-Options](/es/docs/Web/HTTP/Headers/X-Frame-Options)
  - : La cabecera de respuesta [HTTP](/es/docs/Web/HTTP) `X-Frame-Options:` se puede usar para indicar si se debe permitir que un navegador represente una página en un {{ HTMLElement("frame") }}. Los sitios pueden usar esto para evitar ataques de [clickjacking](/es/docs/Glossary/Clickjacking), al asegurarse de que su contenido no se incruste en otros sitios.
- Control de acceso mediante la configuración de un sitio web
  - : Es la mejor manera de asegurar su sitio. Puede ignorar direcciones IP específicas, restringir el acceso a ciertas áreas del sitio web, proteger diferentes archivos, proteger contra enlaces directos de imágenes y mucho más. Por ejemplo, el archivo .htaccess se usa para sitios web alojados en [servidores HTTP Apache](https://httpd.apache.org/).

## Véase también

- [Proyecto de seguridad de aplicaciones web abiertas (OWASP, por sus siglas en inglés)](https://owasp.org/)
- [Hoja de referencia de seguridad web de Mozilla](https://infosec.mozilla.org/guidelines/web_security.html#web-security-cheat-sheet)
- [Script entre sitios en OWASP](https://owasp.org/www-community/attacks/xss/)
