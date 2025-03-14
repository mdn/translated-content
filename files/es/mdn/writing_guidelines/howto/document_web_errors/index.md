---
title: Cómo documentar errores web
slug: MDN/Writing_guidelines/Howto/Document_web_errors
l10n:
  sourceCommit: aa66311219951396e7305df61eb31831360d2c79
---

{{MDNSidebar}}

La [Referencia de errores de JavaScript](/es/docs/Web/JavaScript/Reference/Errors) en MDN Web Docs es un proyecto para ayudar a los desarrolladores web con los errores que ocurren en la [Consola de desarrollador](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html). Para este proyecto, necesitamos escribir más documentación de errores en MDN Web Docs para que podamos agregar más enlaces a las herramientas donde se lanzan los mensajes. Este artículo explica cómo documentar los errores web.

Los errores de JavaScript contienen un enlace de "Más información" que lo lleva a la referencia de errores de JavaScript que contiene consejos adicionales para solucionar problemas. Para poder documentar los errores de la web, necesitará saber o poder sumergirse algo en [JavaScript](/es/docs/Web/JavaScript).

## Paso 1 – Determina el error a documentar

- Mensajes de error de Firefox/Gecko: <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Mensajes de error de Edge/Chakra: <https://github.com/Microsoft/ChakraCore/blob/master/lib/Parser/rterrors.h>
- Mensajes de error de Chrome/v8: <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## Paso 2: Verifica la documentación del error existente

- Vea la [referencia de errores de JavaScript](/es/docs/Web/JavaScript/Reference/Errors) existentes y vea cómo se documentan los errores.
- Según el tipo de error sobre el que desee escribir, puede echar un vistazo más de cerca a estas páginas.
- Es posible que desee copiar el contenido de una página existente para iniciar su nueva página.

## Paso 3: Crea la nueva página del error

- Todas las páginas de error se encuentran bajo esta estructura: [/docs/Web/JavaScript/Reference/Errors](/es/docs/Web/JavaScript/Reference/Errors)
- Para crear una nueva página, consulta las instrucciones en nuestra guía [cómo crear una página](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Paso 4: Documenta el error

- Utilice una estructura copiada de uno de los documentos de error existentes o comience desde cero. ¡Tu elección!
- Deberías tener al menos:

  - Un cuadro de sintaxis que contiene el mensaje tal como se lanza en diferentes navegadores.
  - El tipo de error.
  - Un texto que explica por qué ocurrió este error y cuáles son sus consecuencias. Ir más allá del mensaje lanzado.
  - Ejemplos que muestran el error (¡puede haber más de uno!) y un ejemplo que muestra cómo corregir el código.
  - Enlaces a otro material de referencia en MDN Web Docs.

## Paso 5: Conseguir que se revise el contenido

Una vez que haya creado la página del error, envíela como una solicitud de incorporación de cambios (Pull request en Inglés). Se asignará automáticamente a un miembro de nuestro equipo de revisión para que revise su página.
