---
title: Plantillas en Firefox 3
slug: Mozilla/Firefox/Releases/3/Templates
l10n:
  sourceCommit: 2aaa075dd310f0de930bab617bb6fe1033970da3
---

{{FirefoxSidebar}}

Las plantillas se han mejorado enormemente en Firefox 3. La mejora más importante permite el uso de [procesador de consultas personalizado](/es/How_to_implement_a_custom_XUL_query_processor_component) para manejar otro tipo de fuentes de datos además de RDF. Esto es posible gracias a la nueva sintaxis de consultas. También se incluyen soporte para SQL ([mozStorage](/es/docs/Storage)) y fuentes de datos XML. Ya [está disponible](https://wiki.mozilla.org/XUL:Template_Features_in_1.9) una descripción completa de las nuevas características para plantillas. ([Error 285631 en Firefox](https://bugzil.la/285631))

### Otras mejoras

- Se han añadido condiciones relacionales para que los resultados encontrados cumplan la norma con una mayor exactitud. Esto permite, por ejemplo, que se encuentren resultados que empiecen o terminen con determinados hilos, o que son antes o después otros valores.
- Se ha incluido una bandera, `dont-recurse`, para evitar que se repitan resultados generados tan solo a un nivel.
- Se han añadido APIs al editor de plantillas para recuperar un objeto de resultado que representa un dato externo.
- Se ha mejorado el servicio tipo XUL [sorts](/es/XUL/Template_Guide/Sorting_Results) clasificando mejor tanto el árbol de contenido como el de sin contenido. También permite clasificar contenidos de plantillas no editables. ([Error 335122 en Firefox](https://bugzil.la/335122))

### Véase también

- [Firefox 3 para desarrolladores](/es/docs/Mozilla/Firefox/Releases/3)
