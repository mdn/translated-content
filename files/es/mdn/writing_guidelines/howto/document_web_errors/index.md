---
title: Cómo documentar errores web
short-title: Documentar errores
slug: MDN/Writing_guidelines/Howto/Document_web_errors
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

La [Referencia de errores de JavaScript](/es/docs/Web/JavaScript/Reference/Errors) en MDN Web Docs es un proyecto destinado a ayudar a los desarrolladores web con los errores que aparecen en la [Consola de desarrollador](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html). Para este proyecto, necesitamos ampliar la documentación de errores en MDN Web Docs, para poder agregar más enlaces a las herramientas donde se generan los mensajes. Este artículo explica cómo documentar los errores web.

Los errores de JavaScript incluyen un enlace de "Más información" que dirige a la referencia de errores de JavaScript, donde se ofrece asesoramiento adicional para solucionar problemas. Para poder documentar los errores web, necesitarás conocer o ser capaz de profundizar en algunos conceptos de [JavaScript](/es/docs/Web/JavaScript).

## Paso 1 – Determinar el error a documentar

- Mensajes de error de Firefox/Gecko: <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Mensajes de error de Chrome/v8: <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## Paso 2 – Verificar la documentación de errores existente

- Revisa la [referencia de errores de JavaScript](/es/docs/Web/JavaScript/Reference/Errors) actual para ver cómo se documentan.
- Dependiendo del tipo de error sobre el que quieras escribir, puedes analizar esas páginas detalladamente.
- Puedes copiar el contenido de una página existente para utilizarlo como base para tu nueva página.

## Paso 3 – Crear la nueva página de error

- Todas las páginas de error se encuentran bajo este directorio: [/docs/Web/JavaScript/Reference/Errors](/es/docs/Web/JavaScript/Reference/Errors)
- Para crear una nueva página, consulta las instrucciones en nuestra guía sobre [cómo crear una página](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Paso 4 – Documentar el error

- Puedes usar una estructura copiada de uno de los documentos de error existentes o empezar desde cero. ¡Tú eliges!
- El contenido debe incluir al menos:
  - Un cuadro de sintaxis que contenga el mensaje tal como se lanza en diferentes navegadores.
  - El tipo de error.
  - Un texto que explique por qué ocurrió este error y cuáles son sus consecuencias. Ve más allá del mensaje de error mostrado.
  - Ejemplos que demuestren el error (¡puede haber más de uno!) y un ejemplo que muestre cómo corregir el código.
  - Enlaces a otro material de referencia en MDN Web Docs.

## Paso 5 – Solicitar la revisión del contenido

Una vez que hayas creado la página de error, envíala mediante un _pull request_. Un miembro de nuestro equipo de revisión será asignado automáticamente para revisar tu página.
