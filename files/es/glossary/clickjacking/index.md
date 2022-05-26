---
title: Clickjacking
slug: Glossary/Clickjacking
---
Clickjacking es un ataque basado en la interfaz que engaña a los usuarios de un sitio web para que sin saberlo hagan clic en enlaces maliciosos. En clickjacking, los atacantes incrustan sus enlaces maliciosos en botones o páginas legítimas en un sitio web. En un {{glossary("Site")}} infectado, cada vez que un usuario hace clic en un enlace legítimo, el atacante obtiene información confidencial de ese usuario, lo que finalmente compromete la privacidad del usuario en Internet.

El clickjacking puede ser evitado implementando una [Política de Seguridad de Contenido (frame-ancestors)](/es/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) e implementando [atributos de Set-Cookie](/es/docs/Web/HTTP/Headers/Set-Cookie#attributes).

## Aprende más

- [Seguridad web: protección contra clickjacking](/es/docs/Web/Security#clickjacking_protection)
- [Clickjacking](https://es.wikipedia.org/wiki/Clickjacking) en Wikipedia
- [Clickjacking](https://owasp.org/www-community/attacks/Clickjacking) en OWASP
