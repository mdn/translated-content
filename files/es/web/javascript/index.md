---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 04158640487c17d515de8078c9307a2f906377d0
---

**JavaScript** (**JS**) es un lenguaje de programación ligero, interpretado (o compilado {{Glossary("Just_In_Time_Compilation", "justo-a-tiempo")}}) con {{Glossary("First-class Function", "funciones de primera clase")}}. Si bien es más conocido como el lenguaje de scripting para páginas web, [muchos entornos fuera del navegador](https://es.wikipedia.org/wiki/JavaScript) también lo usan, tal como {{Glossary("Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) y [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript es un lenguaje [basado en prototipos](/es/docs/Glossary/Prototype-based_programming), con [recolección de basura](/es/docs/Glossary/Garbage_collection), [dinámico](/es/docs/Glossary/Dynamic_typing), que soporta múltiples paradigmas como imperativo, funcional y orientado a objetos.

Las capacidades dinámicas de JavaScript incluyen construcción de objetos en tiempo de ejecución, listas de parámetros variables, variables de función, creación dinámica de scripts (mediante [`eval`](/es/docs/Web/JavaScript/Reference/Global_Objects/eval)), introspección de objetos (mediante [`for...in`](/es/docs/Web/JavaScript/Reference/Statements/for...in) y [utilidades de `Object`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)), y recuperación de código fuente (las funciones de JavaScript almacenan su texto fuente y pueden recuperarse mediante [`toString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)).

Esta sección está dedicada al lenguaje JavaScript en sí, y no a las partes que son específicas de las páginas web u otros entornos host. Para información acerca de {{Glossary("API","APIs")}} específicas para páginas Web, consulta [APIs Web](/es/docs/Web/API) y {{Glossary("DOM")}}.

Los estándares para JavaScript son la [Especificación del Lenguaje ECMAScript](https://tc39.es/ecma262/) (ECMA-262) y la [especificación de la API de Internacionalización de ECMAScript](https://tc39.es/ecma402/) (ECMA-402). Tan pronto como un navegador implementa una funcionalidad, intentamos documentarla. Esto significa que en casos donde algunas [propuestas para nuevas funciones de ECMAScript](https://github.com/tc39/proposals) ya han sido implementadas en navegadores, la documentación y ejemplos en los artículos de MDN pueden usar algunas de esas nuevas funciones. La mayoría de las veces, esto ocurre entre las [etapas](https://tc39.es/process-document/) 3 y 4, y generalmente antes de que la especificación sea publicada oficialmente.

No confundas JavaScript con el [lenguaje de programación Java](<https://es.wikipedia.org/wiki/Java_(lenguaje_de_programación)>) — **JavaScript _no es_ "Java Interpretado"**. Ambos "Java" y "JavaScript" son marcas o marcas registradas de Oracle en los Estados Unidos y otros países. Sin embargo, los dos lenguajes de programación tienen sintaxis, semántica y usos muy diferentes.

La documentación de JavaScript sobre las características principales del lenguaje ([ECMAScript](/es/docs/Web/JavaScript/Reference/JavaScript_technologies_overview) puro, en su mayor parte) incluye lo siguiente:

- La [Guía de JavaScript](/es/docs/Web/JavaScript/Guide)
- La [Referencia de JavaScript](/es/docs/Web/JavaScript/Reference)

Para más información sobre las especificaciones de JavaScript y tecnologías relacionadas, consulta [Descripción general de las tecnologías JavaScript](/es/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Tutoriales para principiantes

Nuestros [módulos principales de aprendizaje de desarrollo web](/es/docs/Learn_web_development/Core) contienen tutoriales modernos y actualizados que cubren los fundamentos de JavaScript.

- [Tu primer sitio web: Agregar interactividad](/es/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
  - : Este artículo proporciona un breve recorrido sobre qué es JavaScript y cómo usarlo, dirigido a personas completamente nuevas en el desarrollo web.
- [Scripting dinámico con JavaScript](/es/docs/Learn_web_development/Core/Scripting)
  - : Este módulo se enfoca en los elementos esenciales del lenguaje JavaScript principal, más algunos temas clave circundantes — aprender estos temas te dará una base sólida desde la cual trabajar.
- [Frameworks y librerías de JavaScript](/es/docs/Learn_web_development/Core/Frameworks_libraries)
  - : Los frameworks de JavaScript son una parte esencial del desarrollo web front-end moderno, proporcionando a los desarrolladores herramientas probadas y comprobadas para construir aplicaciones web escalables e interactivas. Muchas empresas modernas usan frameworks como parte estándar de sus herramientas, por lo que muchos trabajos de desarrollo front-end ahora requieren experiencia con frameworks. Este conjunto de artículos proporciona un punto de partida cómodo para ayudarte a comenzar a aprender frameworks.

## Guías de JavaScript

### Guías fundamentales del lenguaje

- [Guía de JavaScript](/es/docs/Web/JavaScript/Guide)
  - : Una guía mucho más detallada del lenguaje JavaScript, dirigida a aquellos con experiencia previa en programación, ya sea en JavaScript u otro lenguaje.

### Intermedio

- [Objetos avanzados de JavaScript](/es/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : La naturaleza orientada a objetos de JavaScript es importante de comprender si deseas ir más allá con tu conocimiento del lenguaje y escribir código más eficiente, por lo tanto hemos proporcionado este módulo para ayudarte.
- [JavaScript asíncrono](/es/docs/Learn_web_development/Extensions/Async_JS)
  - : En este módulo, echamos un vistazo al JavaScript {{Glossary("asynchronous", "asíncrono")}}, por qué es importante y cómo puede usarse para manejar eficazmente operaciones potencialmente bloqueantes, tales como obtener recursos de un servidor.
- [APIs web del lado del cliente](/es/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Explora qué son las APIs y cómo usar algunas de las APIs más comunes que encontrarás a menudo en tu trabajo de desarrollo.
- [Descripción general del lenguaje JavaScript](/es/docs/Web/JavaScript/Guide/Language_overview)
  - : Una descripción general de la sintaxis y semántica básica de JavaScript para aquellos que vienen de otros lenguajes de programación para ponerse al día.
- [Estructuras de datos de JavaScript](/es/docs/Web/JavaScript/Guide/Data_structures)
  - : Descripción general de las estructuras de datos disponibles en JavaScript.
- [Comparaciones de igualdad y similitud](/es/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript proporciona tres diferentes operaciones de comparación de valores: igualdad estricta usando `===`, igualdad abstracta usando `==` y el método {{jsxref("Object.is()")}}.
- [Enumerabilidad y propiedad de propiedades](/es/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
  - : Cómo los diferentes métodos que visitan un grupo de propiedades de objetos una por una manejan la enumerabilidad y propiedad de las propiedades.
- [Closures](/es/docs/Web/JavaScript/Guide/Closures)
  - : Un closure es la combinación de una función y el entorno léxico dentro del cual se declaró esa función.

### Avanzado

- [Herencia y la cadena de prototipos](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : Explicación de la herencia basada en prototipos ampliamente incomprendida y subestimada.
- [Gestión de la memoria](/es/docs/Web/JavaScript/Guide/Memory_management)
  - : Ciclo de vida de la memoria y recolección de basura en JavaScript.

## Referencia

Consulta la documentación completa de la [referencia de JavaScript](/es/docs/Web/JavaScript/Reference).

- [Objetos estándar](/es/docs/Web/JavaScript/Reference/Global_Objects)
  - : Conoce los objetos estándar integrados: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} y otros.
- [Expresiones y operadores](/es/docs/Web/JavaScript/Reference/Operators)
  - : Aprende más sobre el comportamiento de los operadores de JavaScript {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, la [precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence) y más.
- [Sentencias y declaraciones](/es/docs/Web/JavaScript/Reference/Statements)
  - : Aprende cómo funcionan {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} y más sentencias y palabras clave de JavaScript.
- [Funciones](/es/docs/Web/JavaScript/Reference/Functions)
  - : Aprende cómo trabajar con las funciones de JavaScript para desarrollar tus aplicaciones.
- [Clases](/es/docs/Web/JavaScript/Reference/Classes)
  - : Las clases de JavaScript son la forma más apropiada de hacer programación orientada a objetos.
