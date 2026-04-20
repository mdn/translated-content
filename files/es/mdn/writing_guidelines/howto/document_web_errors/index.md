---
title: Cómo documentar errores web
short-title: Documentar errores
slug: MDN/Writing_guidelines/Howto/Document_web_errors
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

La [referencia de errores de JavaScript](/es/docs/Web/JavaScript/Reference/Errors) en MDN Web Docs es un proyecto para ayudar a las desarrolladoras web con los errores que ocurren en la [Consola de desarrolladora](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html). Para este proyecto, necesitamos escribir más documentación de errores en MDN Web Docs para que podamos agregar más enlaces a las herramientas donde se lanzan los mensajes. Este artículo explica cómo documentar los errores web.

Los errores de JavaScript contienen un enlace "Más información" que lo lleva a la referencia de errores de JavaScript que contiene consejos adicionales para solucionar problemas. Para poder documentar los errores web, necesitará saber o poder sumergirse en algo de [JavaScript](/es/docs/Web/JavaScript).

## Paso 1: Determinar el error a documentar

- Mensajes de error de Firefox/Gecko: <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Mensajes de error de Chrome/v8: <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## Paso 2: Verificar la documentación del error existente

- Mire la [referencia de errores de JavaScript](/es/docs/Web/JavaScript/Reference/Errors) existente y vea cómo se documentan los errores.
- Según el tipo de error sobre el que desee escribir, puede mirar más de cerca estas páginas.
- Es posible que desee copiar el contenido de una página existente para comenzar su nueva página.

## Paso 3: Crear la nueva página del error

- Todas las páginas de error viven en este árbol: [/docs/Web/JavaScript/Reference/Errors](/es/docs/Web/JavaScript/Reference/Errors)
- Para crear una nueva página, consulte las instrucciones en nuestra guía [cómo crear una página](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Paso 4: Documentar el error

- Use una estructura copiada de uno de los documentos de error existentes o comience desde cero. ¡Su elección!
- Debe tener al menos:
  - Un cuadro de sintaxis que contiene el mensaje tal como se lanza en diferentes navegadores.
  - El tipo de error.
  - Un texto que explica por qué ocurrió este error y cuáles son sus consecuencias. Vaya más allá del mensaje lanzado.
  - Ejemplos que muestran el error (¡puede haber más de uno!) y un ejemplo que muestra cómo corregir el código.
  - Punteros a otro material de referencia en MDN Web Docs.

## Paso 5: Obtener revisión del contenido

Después de haber creado la página del error, envíela como una solicitud de extracción. Se asignará automáticamente un miembro de nuestro equipo de revisión para revisar su página.
