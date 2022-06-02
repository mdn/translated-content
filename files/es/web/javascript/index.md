---
title: JavaScript
slug: Web/JavaScript
tags:
 - Aprender
 - JavaScript
 - 'l10n:priority'
translation_of: Web/JavaScript
---
{{JsSidebar}}

**JavaScript** (**JS**) es un lenguaje de programación ligero, interpretado, o compilado [justo-a-tiempo](https://es.wikipedia.org/wiki/Compilaci%C3%B3n_en_tiempo_de_ejecuci%C3%B3n) (just-in-time) con {{Glossary("First-class Function", "funciones de primera clase")}}. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en [muchos entornos fuera del navegador](https://es.wikipedia.org/wiki/JavaScript), tal como {{Glossary("Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) y [Adobe Acrobat](https://www.adobe.com/devnet/acrobat/javascript.html) JavaScript es un lenguaje de {{Glossary ("Prototype-based programming", "programación basada en prototipos")}}, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional). Lee más en [acerca de JavaScript](/es/docs/Web/JavaScript/About_JavaScript).

Esta sección está dedicada al lenguaje JavaScript en sí, y no a las partes que son específicas de las páginas web u otros entornos host. Para información acerca de {{Glossary("API","APIs")}} específicas para páginas Web, consulta [APIs Web](/es/docs/Web/API ) y {{Glossary("DOM")}}.

El estándar para JavaScript es [ECMAScript](/es/docs/Web/JavaScript/Language_Resources) (ECMA-262) y [la especificación de la API para la Internacionalización de ECMAScript](https://tc39.es/ecma402/) (ECMA-402). La documentación en MDN está basada enteramente en las últimas versiones preliminares de ECMA-262 y ECMA-402. Y en algunos casos donde algunas [propuestas para nuevas funciones para ECMAScript](https://github.com/tc39/proposals) ya hayan sido implementadas en los navegadores, la documentación y algunos artículos de MDN pueden hacer uso de algunas de estas funciones.

No confundas JavaScript con el [lenguaje de programación Java](https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)). Ambos "Java" y "JavaScript" son marcas o marcas registradas de Oracle en los Estados Unidos y otros países, Sin embargo, los dos lenguajes de programación tienen sintaxis, semántica y usos muy diferentes.

> **Observación:** **Quieres transformarte en un desarrollador web front-end?**
>
> Hemos reunido un curso que incluye toda la información esencial que necesitas para trabajar hacia tu objetivo.
>
> [Empieza aquí](es/docs/Learn/Front-end_web_developer)
>

## Tutoriales

Aprende a programar en JavaScript con guías y tutoriales.

### Para completos principiantes

Dirígete a nuestro tema del [Area de Aprendizaje JavaScript](/es/docs/Learn/JavaScript) si quieres aprender JavaScript pero no tienes experiencia previa de JavaScript o programación. Los módulos completos disponibles allí son los siguientes:

- [Primeros pasos en JavaScript](/es/docs/Learn/JavaScript/First_steps)
  - : Responde algunas preguntas fundamentales tales como "¿qué es JavaScript?", "¿cómo se ve?", y "¿qué puede hacer?", junto con la discusión de características clave de JavaScript, como variables, cadenas, números y arreglos.
- [Bloques de construcción JavaScript](/es/docs/Learn/JavaScript/Building_blocks)
  - : Continúa nuestra cobertura de las características fundamentales clave de JavaScript, dirigiendo nuestra atención a los tipos de bloques de código que se encuentran comúnmente, tales como declaraciones condicionales, bucles, funciones y eventos.
- [Introducción a objetos JavaScript](/es/docs/Learn/JavaScript/Objects)
  - : Es importante comprender la naturaleza de la orientación a objetos en JavaScript si deseas ir más allá con tu conocimiento del lenguaje y la escritura de código más eficiente, por lo tanto, hemos proporcionado este módulo para ayudarte.
- [JavaScript asíncrono](/es/docs/Learn/JavaScript/Asynchronous)
  - : Analiza el JavaScript asíncrono, por qué es importante y cómo se puede usar para manejar eficazmente las potenciales operaciones de bloqueo, tales como recuperar recursos de un servidor.
- [API web del lado del cliente](/es/docs/Learn/JavaScript/Client-side_web_APIs)
  - : Explora qué son las APIs y cómo usar algunas de las APIs más comunes que encontrarás a menudo en tu trabajo de desarrollo.

### Guía de JavaScript

- [Guía de JavaScript](/es/docs/Web/JavaScript/Guide)
  - : Una guía mucho más detallada del lenguaje JavaScript, dirigida a aquellos con experiencia previa en programación, ya sea en JavaScript u otro lenguaje.

### Intermedio

- [Comprendiendo los frameworks JavaScript de lado del cliente](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : Los frameworks de JavaScript son una parte esencial del desarrollo web front-end moderno, ya que proporcionan a los desarrolladores herramientas probadas y comprobadas para crear aplicaciones web interactivas y escalables. Este módulo te brinda algunos conocimientos básicos sobre cómo funcionan los frameworks del lado del cliente y cómo encajan en tu conjunto de herramientas, antes de pasar a la serie de tutoriales que cubren algunos de los más populares en la actualidad.
- [Una reintroducción a JavaScript](/es/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : Una descripción general para aquellos que _piensan_ que saben JavaScript.
- [Estructuras de datos en JavaScript](/es/docs/Web/JavaScript/Data_structures)
  - : Descripción general de las estructuras de datos disponibles en JavaScript.
- [Comparaciones de igualdad y similaridad](/es/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript proporciona tres diferentes operadores de comparación de valores: igualdad estricta usando `===`, igualdad abstracta usando `==`, y el método {{jsxref("Global_Objects/Object/is", "Object.is()")}}.
- [Cierres (clousures)](/es/docs/Web/JavaScript/Closures)
  - : Un cierre es la combinación de una función y un entorno léxico dentro del cual se declaró esa función.

### Avanzado

- [Herencia y la cadena de prototipos](/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Explicación de la herencia basada en prototipos ampliamente incomprendida y subestimada.
- [Modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode)
  - : El modo estricto define que no puedes usar ninguna variable antes de iniciarla. Es una variable restringida de ECMAScript 5, para un rendimiento más rápido y una depuración más fácil.
- [Arreglos tipados en JavaScript](/es/docs/Web/JavaScript/Typed_arrays)
  - : Los arreglos tipados en JavaScript proveen un mecanismo para acceder a datos binarios sin formato.
- [Gestión de la Memoria](/es/docs/Web/JavaScript/Memory_Management)
  - : Ciclo de vida de la memoria y recolección de basura en JavaScript.
- [Modelo de Concurrencia y Bucle de Eventos](/es/docs/Web/JavaScript/EventLoop)
  - : JavaScript tiene un modelo de concurrencia basado en un "bucle de eventos".

## Referencia

Consulta la documentación completa de la [referencia de JavaScript](/es/docs/Web/JavaScript/Reference).

- [Objetos Estándar](/es/docs/Web/JavaScript/Reference/Global_Objects)
  - : Conoce los objectos estándar integrados {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, y otros.
- [Expresiones y operadores](/es/docs/Web/JavaScript/Reference/Operators)
  - : Aprende más sobre el comportamiento de los operadores de JavaScript {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, el [operador de precedencia](/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence ), y más.
- [Sentencias y declaraciones](/es/docs/Web/JavaScript/Reference/Statements)
  - : Aprende cómo funciona {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}}, y más declaraciones y palabras reservadas de JavaScript.
- [Funciones](/es/docs/Web/JavaScript/Reference/Functions)
  - : Aprende cómo trabajar con funciones de JavaScript para desarrollar tus aplicaciones.

## Herramientas &amp; recursos

Herramientas útiles para escribir y depurar tu código **JavaScript**.

- [Herramientas para Desarrolladores de Firefox](/es/docs/Tools)

- [Herramientas para Desarrolladores de Firefox](/es/docs/Tools)
  - : [Consola Web](/es/docs/Tools/Web_Console), [Generador de Perfiles de JavaScript](/es/docs/Tools/Profiler), [Depurador](/es/docs/Tools/Debugger), y más.
- [Consola de Javascript](/es/docs/Web/JavaScript/Shells)
  - : Una consola de JavaScript te permite probar rápidamente fragmentos de código JavaScript.
- [Aprende JavaScript](https://learnjavascript.online/)
  - : Un excelente recurso para aspirantes a desarrollador web — Aprende JavaScript en un entorno interactivo, con lecciones cortas y pruebas interactivas, guiado por una evaluación automatizada. Las primeras 40 lecciones son gratis, y el curso completo está disponible por un pequeño pago único.
- [TogetherJS](https://togetherjs.com/)
  - : Colaboración fácil. Al agregar TogetherJS a tu sitio web, ¡tus usuarios pueden ayudarse mutuamente en un sitio web en tiempo real!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Preguntas en Stack Overflow etiquetadas con "JavaScript".
- [JSFiddle](https://jsfiddle.net/)
  - : Edita JavaScript, CSS, HTML y obtén resultados en vivo. Usa recursos externos y colabora con tu equipo en línea.
- [Plunker](https://plnkr.co/)
  - : Plunker es una comunidad en línea para crear, colaborar y compartir sus ideas de desarrollo web. Edita sus archivos JavaScript, CSS, HTML y obtén resultados en vivo y estructuras de archivos.
- [JSBin](https://jsbin.com/)
  - : JSBin es una herramienta de depuración de desarrollo web colaborativo de código abierto.
- [Codepen](https://codepen.io/)
  - : Codepen es otra herramienta colaborativa de desarrollo web usada como un espacio para mostrar resultados en vivo.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz es otra herramienta de depuración/visualización en línea, que puede alojar e implementar aplicaciones full-stack usando React, Angular, etc.
