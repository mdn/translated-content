---
title: Bugs importantes solucionados en Firefox 3
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
---

{{FirefoxSidebar}}

Este artículo es una lista de correcciones importantes de errores en Firefox 3 que no resultan obvios en la documentación.

- Si ocurre un error mientras se analiza un overlay, el overlay no se aplica. Los errores del análisis se registran en la consola de errores. ([Error 335755 en Firefox](https://bugzil.la/335755))
- Error corregido en el que los elementos '`<menupopup>`' pueden colocarse dentro de un contenedor cuando se adjuntan en un elemento menú o de tipo menú. ([Error 345896 en Firefox](https://bugzil.la/345896))
- La propiedad '`dlgType`' de botones funciona correctamente. ([Error 308591 en Firefox](https://bugzil.la/308591))
- El argumento '`canBubble`' de [event.initEvent](/es/DOM/event.initEvent) funciona correctamente de manera que los eventos pueden ser llamados sin que se hagan recurrentes. ([Error 330190 en Firefox](https://bugzil.la/330190))
- El evento '`DOMAttrModified`' maneja correctamente atributos con nombres con espacio. ([Error 362391 en Firefox](https://bugzil.la/362391))
- Las instrucciones de procesamiento XML, tal como '`<?xml-stylesheet ?>`', se han agregado al DOM de documentos XUL. Lo que significa que no está garantizado que [document.firstChild](/es/DOM/document.firstChild) sea el elemento raíz, en su lugar utiliza [document.documentElement](/es/DOM/document.documentElement). Por otro lado las instrucciones de procesamiento '`<?xml-stylesheet ?>`' y '`<?xul-overlay ?>`' ya no tienen efecto fuera del prólogo del documento. ([Error 319654 en Firefox](https://bugzil.la/319654))
- Las funciones '`getElementsByAttributeNS()`' se han añadido a los elementos y documentos XUL. ([Error 239976 en Firefox](https://bugzil.la/239976))
- Los escuchadores de eventos se mantienen cuando se mueve o se quita un elemento de un documento XUL. ([Error 286619 en Firefox](https://bugzil.la/286619))
- Los eventos de mutación se disparan para documentos no mostrados. ([Error 201236 en Firefox](https://bugzil.la/201236))
- Corregidos varios problemas con elementos de dibujo en orden equivocado. ([Error 317375 en Firefox](https://bugzil.la/317375))
- Se ha corregido [`getElementsByTagName()`](/es/DOM/element.getElementsByTagName) para que funcione correctamente en sub-árboles que tienen elementos con prefijos en los nombres de las etiquetas. ([Error 206053 en Firefox](https://bugzil.la/206053)).
- Los eventos '`DOMNodeInserted`' y '`DOMNodeRemoved`' se aplican correctamente a los nodos apropiados ([Error 367164 en Firefox](https://bugzil.la/367164)).
- La expresión '`\d`', uno de los caracteres especiales usados en expresiones regulares, ha sido corregida para que concuerde sólo con dígitos del alfabeto latino (equivalente a `[0-9]`). ([Error 378738 en Firefox](https://bugzil.la/378738))
- La categoría 'image-sniffing-services' permite que un descodificador de imágenes implementado como una extensión, descodifique correctamente imágenes enviadas con un tipo MIME incorrecto. ([Error 391667 en Firefox](https://bugzil.la/391667))

### Ver también

- [Firefox 3 para desarrolladores](/es/Firefox_3_para_desarrolladores)
