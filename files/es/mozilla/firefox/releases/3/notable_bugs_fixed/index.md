---
title: Bugs importantes solucionados en Firefox 3
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
tags:
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
original_slug: Bugs_importantes_solucionados_en_Firefox_3
---

{{FirefoxSidebar}}

Este artículo es una lista de correcciones importantes de errores en Firefox 3 que no resultan obvios en la documentación.

- Si ocurre un error mientras se analiza un overlay, el overlay no se aplica. Los errores del análisis se registran en la consola de errores. ({{ Bug(335755) }})
- Error corregido en el que los elementos '`<menupopup>`' pueden colocarse dentro de un contenedor cuando se adjuntan en un elemento menú o de tipo menú. ({{ Bug(345896) }})
- La propiedad '`dlgType`' de botones funciona correctamente. ({{ Bug(308591) }})
- El argumento '`canBubble`' de [event.initEvent](/es/DOM/event.initEvent) funciona correctamente de manera que los eventos pueden ser llamados sin que se hagan recurrentes. ({{ Bug(330190) }})
- El evento '`DOMAttrModified`' maneja correctamente atributos con nombres con espacio. ({{ Bug(362391) }})
- Las instrucciones de procesamiento XML, tal como '`<?xml-stylesheet ?>`', se han agregado al DOM de documentos XUL. Lo que significa que no está garantizado que [document.firstChild](/es/DOM/document.firstChild) sea el elemento raíz, en su lugar utiliza [document.documentElement](/es/DOM/document.documentElement). Por otro lado las instrucciones de procesamiento '`<?xml-stylesheet ?>`' y '`<?xul-overlay ?>`' ya no tienen efecto fuera del prólogo del documento. ({{ Bug(319654) }})
- Las funciones '`getElementsByAttributeNS()`' se han añadido a los elementos y documentos XUL. ({{ Bug(239976) }})
- Los escuchadores de eventos se mantienen cuando se mueve o se quita un elemento de un documento XUL. ({{ Bug(286619) }})
- Los eventos de mutación se disparan para documentos no mostrados. ({{ Bug(201236) }})
- Corregidos varios problemas con elementos de dibujo en orden equivocado. ({{ Bug(317375) }})
- Se ha corregido [`getElementsByTagName()`](/es/DOM/element.getElementsByTagName) para que funcione correctamente en sub-árboles que tienen elementos con prefijos en los nombres de las etiquetas. ({{ Bug(206053) }}).
- Los eventos '`DOMNodeInserted`' y '`DOMNodeRemoved`' se aplican correctamente a los nodos apropiados ({{ Bug(367164) }}).
- La expresión '`\d`', uno de los caracteres especiales usados en expresiones regulares, ha sido corregida para que concuerde sólo con dígitos del alfabeto latino (equivalente a `[0-9]`). ({{ Bug(378738) }})
- La categoría 'image-sniffing-services' permite que un descodificador de imágenes implementado como una extensión, descodifique correctamente imágenes enviadas con un tipo MIME incorrecto. ({{ Bug(391667) }})

### Ver también

- [Firefox 3 para desarrolladores](/es/Firefox_3_para_desarrolladores)
