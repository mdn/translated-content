---
title: JavaScript
slug: Web/JavaScript
---

{{JsSidebar}}

**JavaScript** (**JS**) es un lenguaje de programación ligero, interpretado (o compilado {{Glossary("Just_In_Time_Compilation", "justo-a-tiempo")}}) con {{Glossary("First-class Function", "funciones de primera clase")}}. Si bien es más conocido como el lenguaje de scripting para páginas web, [muchos entornos fuera del navegador](https://en.wikipedia.org/wiki/JavaScript#Other_usage) también lo usan, tal como {{Glossary("Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) y [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript es un lenguaje [basado en prototipos](/es/docs/Glossary/Prototype-based_programming), con [recolección de basura](/es/docs/Glossary/Garbage_collection), [dinámico](/es/docs/Glossary/Dynamic_typing), que soporta múltiples paradigmas como imperativo, funcional y orientado a objetos.

## Capacidades clave

Las capacidades dinámicas de JavaScript incluyen:

- Construcción de objetos en tiempo de ejecución
- Listas de parámetros variables
- Variables de función
- Creación dinámica de scripts (mediante [`eval`](/es/docs/Web/JavaScript/Reference/Global_Objects/eval))
- Introspección de objetos (mediante [`for...in`](/es/docs/Web/JavaScript/Reference/Statements/for...in) y [utilidades de `Object`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods))
- Recuperación de código fuente (las funciones de JavaScript almacenan su texto fuente y pueden recuperarse mediante [`toString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Function/toString))

## Alcance y estándares

Esta sección está dedicada al lenguaje JavaScript en sí, y no a las partes que son específicas de las páginas web u otros entornos host. Para información acerca de {{Glossary("API","APIs")}} específicas para páginas Web, consulta [APIs Web](/es/docs/Web/API) y {{Glossary("DOM")}}.

Los estándares para JavaScript son:

- [Especificación del Lenguaje ECMAScript](https://tc39.es/ecma262/) (ECMA-262)
- [Especificación de la API de Internacionalización de ECMAScript](https://tc39.es/ecma402/) (ECMA-402)

Tan pronto como un navegador implementa una funcionalidad, MDN intenta documentarla. En casos donde [propuestas para nuevas funciones de ECMAScript](https://github.com/tc39/proposals) ya han sido implementadas en navegadores, la documentación puede usar algunas de esas nuevas funciones — típicamente entre las [etapas](https://tc39.es/process-document/) 3 y 4, generalmente antes de que la especificación sea publicada oficialmente.

## Distinción importante

No confundas JavaScript con el [lenguaje de programación Java](https://en.wikipedia.org/wiki/Java_\(programming_language\)) — **JavaScript _no es_ "Java Interpretado"**. Ambos "Java" y "JavaScript" son marcas o marcas registradas de Oracle en los Estados Unidos y otros países. Sin embargo, los dos lenguajes de programación tienen sintaxis, semántica y usos muy diferentes.

> [!CALLOUT]
> **¿Quieres transformarte en un desarrollador web front-end?**
>
> Hemos reunido un curso que incluye toda la información esencial que necesitas para trabajar hacia tu objetivo.
>
> [Empieza aquí](/es/docs/orphaned/Learn/Front-end_web_developer)

## Tutoriales

Aprende a programar en JavaScript con guías y tutoriales.

### Para completos principiantes

Dirígete a nuestro tema del [Area de Aprendizaje JavaScript](/es/docs/conflicting/Learn_web_development/Core/Scripting_41cf930b8cfd2b83c76f8086a5e24792) si quieres aprender JavaScript pero no tienes experiencia previa de JavaScript o programación. Los módulos completos disponibles allí son los siguientes:

- [Primeros pasos en JavaScript](/es/docs/conflicting/Learn_web_development/Core/Scripting)
  - : Responde algunas preguntas fundamentales tales como "¿qué es JavaScript?", "¿cómo se ve?", y "¿qué puede hacer?", junto con la discusión de características clave de JavaScript, como variables, cadenas, números y arreglos.
- [Bloques de construcción JavaScript](/es/docs/Learn_web_development/Core/Scripting)
  - : Continúa nuestra cobertura de las características fundamentales clave de JavaScript, dirigiendo nuestra atención a los tipos de bloques de código que se encuentran comúnmente, tales como declaraciones condicionales, bucles, funciones y eventos.
- [Introducción a objetos JavaScript](/es/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : Es importante comprender la naturaleza de la orientación a objetos en JavaScript si deseas ir más allá con tu conocimiento del lenguaje y la escritura de código más eficiente, por lo tanto, hemos proporcionado este módulo para ayudarte.
- [JavaScript asíncrono](/es/docs/Learn_web_development/Extensions/Async_JS)
  - : Analiza el JavaScript asíncrono, por qué es importante y cómo se puede usar para manejar eficazmente las potenciales operaciones de bloqueo, tales como recuperar recursos de un servidor.
- [API web del lado del cliente](/es/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Explora qué son las APIs y cómo usar algunas de las APIs más comunes que encontrarás a menudo en tu trabajo de desarrollo.

### Guía de JavaScript

- [Guía de JavaScript](/es/docs/Web/JavaScript/Guide)
  - : Una guía mucho más detallada del lenguaje JavaScript, dirigida a aquellos con experiencia previa en programación, ya sea en JavaScript u otro lenguaje.

### Intermedio

- [Comprendiendo los frameworks JavaScript de lado del cliente](/es/docs/Learn_web_development/Core/Frameworks_libraries)
  - : Los frameworks de JavaScript son una parte esencial del desarrollo web front-end moderno, ya que proporcionan a los desarrolladores herramientas probadas y comprobadas para crear aplicaciones web interactivas y escalables. Este módulo te brinda algunos conocimientos básicos sobre cómo funcionan los frameworks del lado del cliente y cómo encajan en tu conjunto de herramientas, antes de pasar a la serie de tutoriales que cubren algunos de los más populares en la actualidad.
- [Una reintroducción a JavaScript](/es/docs/Web/JavaScript/Guide/Language_overview)
  - : Una descripción general para aquellos que _piensan_ que saben JavaScript.
- [Estructuras de datos en JavaScript](/es/docs/Web/JavaScript/Guide/Data_structures)
  - : Descripción general de las estructuras de datos disponibles en JavaScript.
- [Comparaciones de igualdad y similaridad](/es/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript proporciona tres diferentes operadores de comparación de valores: igualdad estricta usando `===`, igualdad abstracta usando `==` y el método {{jsxref("Global_Objects/Object/is", "Object.is()")}}.
- [Cierres (clousures)](/es/docs/Web/JavaScript/Guide/Closures)
  - : Un cierre es la combinación de una función y un entorno léxico dentro del cual se declaró esa función.

### Avanzado

- [Herencia y la cadena de prototipos](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : Explicación de la herencia basada en prototipos ampliamente incomprendida y subestimada.
- [Modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode)
  - : El modo estricto define que no puedes usar ninguna variable antes de iniciarla. Es una variable restringida de ECMAScript 5, para un rendimiento más rápido y una depuración más fácil.
- [Arreglos tipados en JavaScript](/es/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Los arreglos tipados en JavaScript proveen un mecanismo para acceder a datos binarios sin formato.
- [Gestión de la Memoria](/es/docs/Web/JavaScript/Guide/Memory_management)
  - : Ciclo de vida de la memoria y recolección de basura en JavaScript.
- [Modelo de Concurrencia y Bucle de Eventos](/es/docs/Web/JavaScript/Reference/Execution_model)
  - : JavaScript tiene un modelo de concurrencia basado en un "bucle de eventos".

## Referencia

Consulta la documentación completa de la [referencia de JavaScript](/es/docs/Web/JavaScript/Reference).

- [Objetos Estándar](/es/docs/Web/JavaScript/Reference/Global_Objects)
  - : Conoce los objectos estándar integrados {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} y otros.
- [Expresiones y operadores](/es/docs/Web/JavaScript/Reference/Operators)
  - : Aprende más sobre el comportamiento de los operadores de JavaScript {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, el [operador de precedencia](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence) y más.
- [Sentencias y declaraciones](/es/docs/Web/JavaScript/Reference/Statements)
  - : Aprende cómo funciona {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} y más declaraciones y palabras reservadas de JavaScript.
- [Funciones](/es/docs/Web/JavaScript/Reference/Functions)
  - : Aprende cómo trabajar con funciones de JavaScript para desarrollar tus aplicaciones.

## Herramientas &amp; recursos

Herramientas útiles para escribir y depurar tu código **JavaScript**.

- [Herramientas para Desarrolladores de Firefox](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Consola Web](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [Generador de Perfiles de JavaScript](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Depurador](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) y más.
- [Consola de Javascript](/es/docs/conflicting/Web/JavaScript/JavaScript_technologies_overview_0191f05ec18a4ee4d771b548feb0701d)
  - : Una consola de JavaScript te permite probar rápidamente fragmentos de código JavaScript.
- [Aprende JavaScript](https://learnjavascript.online/)
  - : Un excelente recurso para aspirantes a desarrollador web — Aprende JavaScript en un entorno interactivo, con lecciones cortas y pruebas interactivas, guiado por una evaluación automatizada. Las primeras 40 lecciones son gratis y el curso completo está disponible por un pequeño pago único.
- [TogetherJS](https://togetherjs.com/)
  - : Colaboración fácil. Al agregar TogetherJS a tu sitio web, ¡tus usuarios pueden ayudarse mutuamente en un sitio web en tiempo real!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Preguntas en Stack Overflow etiquetadas con "JavaScript".
- [JSFiddle](https://jsfiddle.net/)
  - : Edita JavaScript, CSS, HTML y obtén resultados en vivo. Usa recursos externos y colabora con tu equipo en línea.
- [Plunker](https://plnkr.co/)
  - : Plunker es una comunidad en línea para crear, colaborar y compartir sus ideas de desarrollo web. Edita sus archivos JavaScript, CSS, HTML y obtén resultados en vivo y estructuras de archivos.
- [JSBin](https://jsbin.com/)
  - : JSBin es una herramienta de depuración de desarrollo web colaborativo de código abierto.
- [Codepen](https://codepen.io/)
  - : Codepen es otra herramienta colaborativa de desarrollo web usada como un espacio para mostrar resultados en vivo.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz es otra herramienta de depuración/visualización en línea, que puede alojar e implementar aplicaciones full-stack usando React, Angular, etc.
