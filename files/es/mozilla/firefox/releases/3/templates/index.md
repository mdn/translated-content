---
title: Plantillas en Firefox 3
slug: Mozilla/Firefox/Releases/3/Templates
translation_of: Mozilla/Firefox/Releases/3/Templates
original_slug: Plantillas_en_Firefox_3
---
{{FirefoxSidebar}}

Las plantillas se han mejorado enormemente en Firefox 3. La mejora más importante permite el uso de [procesador de consultas personalizado](/es/Cómo_implementar_un_componente_procesador_de_consultas_XUL) para manejar otro tipo de fuentes de datos además de RDF. Esto es posible gracias a la nueva sintaxis de consultas. También se incluyen soporte para SQL ([mozStorage](/es/docs/Storage)) y fuentes de datos XML. Ya {{ interwiki('wikimo', 'XUL:Template_Features_in_1.9', 'está disponible') }} una descripción completa de las nuevas características para plantillas. ({{ Bug(285631) }})

### Otras mejoras

- Se han añadido condiciones relacionales para que los resultados encontrados cumplan la norma con una mayor exactitud. Esto permite, por ejemplo, que se encuentren resultados que empiecen o terminen con determinados hilos, o que son antes o después otros valores.
- Se ha incluido una bandera, `dont-recurse`, para evitar que se repitan resultados generados tan solo a un nivel.
- Se han añadido APIs al editor de plantillas para recuperar un objeto de resultado que representa un dato externo.
- Se ha mejorado el servicio tipo XUL [sorts](/es/XUL/Guía_de_plantillas/Ordenar_resultados) clasificando mejor tanto el árbol de contenido como el de sin contenido. También permite clasificar contenidos de plantillas no editables. ({{ Bug(335122) }})

### Véase también

- [Firefox 3 para desarrolladores](/es/docs/Mozilla/Firefox/Releases/3)
