---
title: Solución de errores KumaScript
slug: MDN/Tools/KumaScript/Troubleshooting
tags:
  - Errors
  - Errores
  - Guide
  - Guía
  - KumaScript
  - MDN Meta
  - Tools
  - Herramientas
---

{{MDNSidebar}}

Este artículo detalla los cuatro tipos de errores de KumaScript y algunos pasos que puedes seguir para corregirlos.

## DocumentParsingError

Los errores `DocumentParsingError` aparecen cuando KumaScript tiene problemas para entender algo en el documento mismo. La causa más común es un error de sintaxis en una [macro](/es/docs/MDN/Writing_guidelines/Page_structures/Macros).

Comprueba:

- El uso de llaves sin intención de llamar a una macro.
  - : Si necesitas escribir una \\{ en un documento sin llamar a una macro, la puedes escapar con una \ de la siguiente manera: `\\{`
- El uso de un carácter especial en un parámetro de macro.
  - : Si necesitas usar una " o una \ dentro de un parámetro de macro, se pueden escapar con una \ como esta: `\\` o `\"`
- Faltan comas entre parámetros de macro.
  - : Los parámetros de macro deben estar delimitados por una coma (,) pero no al final de la lista de parámetros; por ejemplo `\{\{compat("html.elements.link", 2)}}`.
- Etiquetas HTML que aparecen dentro de una llamada de macro
  - : Si aplicas estilo a una macro, a menudo se romperá porque, por ejemplo, puede haber aparecido una etiqueta `</code>` dentro del código de la macro en el código fuente. Verifica la vista fuente para ver qué hay allí y elimina cualquier estilo innecesario.

## TemplateLoadingError

Los errores `TemplateLoadingError` aparecen cuando KumaScript tiene problemas para encontrar qué [macro](/es/docs/MDN/Writing_guidelines/Page_structures/Macros) incluir en una página.

Comprueba:

- Errores ortográficos de nombres de macros o macros renombradas.
  - : Puedes consultar la lista de macros activas en el [repositorio de Yari](https://github.com/mdn/yari/tree/main/kumascript/macros).

## TemplateExecutionError

Los errores `TemplateExecutionError` aparecen cuando KumaScript encuentra un error en la macro. Si el error persiste, [informa un problema](https://github.com/mdn/yari/issues), incluyendo la URL de la página y el texto del error.

## Error y Unknown

Esta es la categoría en la que terminan los errores si no son uno de los otros tipos de error.
