---
title: JavaScript asíncrono
slug: Learn_web_development/Extensions/Async_JS
original_slug: Learn/JavaScript/Asynchronous
---

{{LearnSidebar}}

En este módulo echamos un vistazo a {{Glossary("JavaScript")}} {{Glossary("asíncrono")}}, por qué es importante y cómo se puede utilizar para manejar eficazmente las posibles operaciones de bloqueo, como recuperar recursos desde un servidor

## Prerrequisitos

JavaScript asíncrono es un tema bastante avanzado, y se recomienda trabajar con los primeros pasos de JavaScript y los módulos de [bloques de construcción de JavaScript](/es/docs/Learn_web_development/Core/Scripting) antes de intentarlo.

Si no está familiarizado con el concepto de programación asincrónica, definitivamente debe comenzar con el artículo [Conceptos generales de programación asincrónica](/es/docs/Learn_web_development/Extensions/Async_JS/Introducing) en este módulo. Si es así, probablemente pueda pasar al [módulo Introducción a JavaScript asíncrono](/es/docs/Learn_web_development/Extensions/Async_JS/Introducing).

> [!NOTE]
> Si está trabajando en una computadora / tableta / otro dispositivo donde no tiene la capacidad de crear sus propios archivos, puede probar (la mayoría de) los ejemplos de código en un programa de codificación en línea como [JSBin](https://jsbin.com/) o [Glitch](https://glitch.com)

## Guias

- [Conceptos generales de programación asincrónica](/es/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - : En este artículo revisaremos una serie de conceptos importantes relacionados con la programación asincrónica y cómo se ve esto en los navegadores web y JavaScript. Debe comprender estos conceptos antes de trabajar en los otros artículos del módulo.
- [Introduciendo JavaScript asincrónico](/es/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - : En este artículo recapitulamos brevemente los problemas asociados con JavaScript síncrono, y echamos un primer vistazo a algunas de las diferentes técnicas de JavaScript asíncrono que encontrarás, mostrando cómo pueden ayudarnos a resolver tales problemas.
- [JavaScript asíncrono cooperativo: tiempos de espera e intervalos](/es/docs/Learn_web_development/Extensions/Async_JS)
  - : Aquí observamos los métodos tradicionales que JavaScript tiene disponibles para ejecutar código de forma asíncrona después de que haya transcurrido un período de tiempo establecido, o en un intervalo regular (por ejemplo, un número establecido de veces por segundo), hablemos sobre para qué son útiles y observe su Problemas inherentes.
- [Manejo de operaciones asincrónas con Promises](/es/docs/Learn/JavaScript/Asynchronous/Promises)
  - : Las promesas son una característica relativamente nueva de JavaScript que le permite diferir más acciones hasta que la acción anterior se haya completado o responder en caso de tener una falla o error durante su ejecución. Esto es realmente útil para configurar una secuencia de operaciones para que funcione correctamente. Este artículo te muestra cómo funcionan las promesas, dónde las verá en uso en una WebAPI y cómo escribir las tuyas de la manera adecuada.
- [Hacer la programación asincróna más fácil con async y await](/es/docs/Learn/JavaScript/Asynchronous/Promises)
  - : Las promesas pueden ser algo complejas de configurar y comprender, por lo que los navegadores modernos han implementado funciones `async` y el operador de `await`. El primero permite que las funciones estándar se comporten implícitamente de forma asíncrona con las promesas, mientras que el segundo puede usarse dentro de las funciones `async` para esperar las promesas antes de que la función continúe. Esto hace que las promesas de encadenamiento sean más simples y fáciles de leer.
- [Elegir el enfoque correcto](/es/docs/Learn_web_development/Extensions/Async_JS)
  - : Para finalizar este módulo, consideraremos las diferentes técnicas y características de codificación que hemos discutido a lo largo de todo, y veremos cuáles deberias usar cuando, con recomendaciones y recordatorios de dificultades comunes, sea lo más apropiado.

## Véase tambien

- [Programación asincrónica](https://eloquentjavascript.net/11_async.html) del fantástico libro en línea [Eloquent JavaScript](https://eloquentjavascript.net/) de Marijn Haverbeke.
