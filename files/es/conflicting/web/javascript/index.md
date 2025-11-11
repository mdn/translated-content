---
title: Acerca de JavaScript
slug: conflicting/Web/JavaScript
original_slug: Web/JavaScript/About_JavaScript
---

{{JsSidebar}}

## ¿Qué es JavaScript?

**JavaScript**® (a menudo abreviado como **JS**) es un lenguaje ligero, interpretado y orientado a objetos con [funciones de primera clase](https://en.wikipedia.org/wiki/First-class_function), y mejor conocido como el lenguaje de programación para las páginas Web, pero [también se utiliza en muchos entornos que no son de navegador](https://es.wikipedia.org/wiki/JavaScript#Otras_características). Es un lenguaje de scripts que es dinámico, multiparadigma, [basado en prototipos](https://es.wikipedia.org/wiki/Programación_basada_en_prototipos) y admite estilos de programación orientados a objetos, imperativos y funcionales.

JavaScript se ejecuta en el lado del cliente de la web, y se puede utilizar para estilizar/programar cómo se comportan las páginas web cuando ocurre un evento. JavaScript es un potente lenguaje de scripts y fácil de aprender, ampliamente utilizado para controlar el comportamiento de las páginas web.

Contrariamente a la creencia popular, **JavaScript _no_ es "Java interpretado"**. En pocas palabras, JavaScript es un lenguaje de scripts dinámico que admite {{JSxRef("../Guide/Details_of_the_Object_Model", "construcción de objetos basada en prototipos", "#Lenguajes_basados_en_clases_vs._basados_en_prototipos")}}. Intencionalmente, la sintaxis básica es similar a Java y C++ para reducir la cantidad de conceptos nuevos necesarios para aprender el lenguaje. Construcciones del lenguaje, como las declaraciones `if`, los bucles `for` y `while`, y `switch` y los bloques `try...catch` funcionan igual que en esos lenguajes (o casi).

JavaScript puede funcionar como un {{JSxRef("../Introduction_to_Object-Oriented_JavaScript", "lenguaje orientado a objetos")}} y [procedimental](https://es.wikipedia.org/wiki/Programación_por_procedimientos). Los objetos se crean mediante programación en JavaScript, adjuntando métodos y propiedades a objetos que de otro modo **en tiempo de ejecución** estarían vacíos, a diferencia de las definiciones de clases sintácticas comunes en lenguajes compilados como C++ y Java. Una vez que se ha construido un objeto, se puede utilizar como plano (o prototipo) para crear objetos similares.

Las capacidades dinámicas de JavaScript incluyen la construcción de objetos en tiempo de ejecución, listas de parámetros variables, variables de función, creación dinámica de scripts (a través de {{JSxRef("Objetos_globales/eval", "eval")}}, introspección de objetos (a través de `for...in`) y recuperación de código fuente (los programas JavaScript pueden descompilar los cuerpos de las funciones en su texto fuente).

Para una explicación más profunda de la programación de JavaScript, sigue los enlaces [recursos de JavaScript](#recursos_de_javascript) a continuación.

## ¿Qué implementaciones de JavaScript están disponibles?

El proyecto Mozilla proporciona dos implementaciones de JavaScript. El primer JavaScript **fue creado** por Brendan Eich en Netscape, y a partir de entonces se ha actualizado para cumplir con ECMA-262 Edición 5 y versiones posteriores. Este motor, cuyo nombre en código es [SpiderMonkey](/es/docs/Mozilla/Projects/SpiderMonkey), está implementado en C/C++. El motor [Rhino](/es/docs/Rhino), creado principalmente por Norris Boyd (también en Netscape) es una implementación de JavaScript escrita en Java. Al igual que SpiderMonkey, Rhino también es compatible con ECMA-262 Edition 5.

Con el transcurso del tiempo, y tras varias importantes optimizaciones del entorno de ejecución como TraceMonkey (Firefox 3.5), JägerMonkey (Firefox 4) e IonMonkey se agregaron al motor de JavaScript SpiderMonkey. El trabajo siempre está en curso para mejorar el rendimiento de ejecución de JavaScript.

Más allá de las implementaciones anteriores, existen otros motores JavaScript populares como:—

- [V8](https://code.google.com/p/v8/) de Google , que se utiliza en el navegador Google Chrome y las versiones recientes del navegador Opera. Este también es el motor que utiliza [Node.js](https://nodejs.org).
- [JavaScriptCore](https://www.webkit.org/projects/javascript/index.html) (SquirrelFish/Nitro) utilizado en algunos navegadores WebKit como Apple Safari.
- [Carakan](https://my.opera.com/ODIN/blog/carakan-faq) en versiones antiguas de Opera.
- [Motor Chakra](http://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29) utilizado en Internet Explorer (aunque el lenguaje que implementa formalmente se llama "JScript" para evitar problemas de marcas registradas).

Cada uno de los motores de JavaScript de Mozilla expone una API pública que los desarrolladores de aplicaciones pueden utilizar para integrar JavaScript en su software. Hasta ahora, el entorno de alojamiento más común para JavaScript son los navegadores web. Los navegadores web suelen utilizar la API pública para crear **objetos del anfitrión** responsables de reflejar el [DOM](https://www.w3.org/DOM/) en JavaScript.

Otra aplicación común para JavaScript es como lenguaje de programación de lado del servidor (Web). Un servidor web JavaScript expondría objetos del anfitrión que representan una solicitud HTTP y objetos de respuesta, que luego podría manipular un programa JavaScript para generar páginas web dinámicamente. [Node.js](https://nodejs.org) es un ejemplo popular de esto.

## Recursos de JavaScript

- [SpiderMonkey](/es/docs/Mozilla/Projects/SpiderMonkey)

  - : Información específica sobre la implementación de JavaScript de Mozilla en el motor C/C++ (también conocido como SpiderMonkey), incluye cómo integrarlo en aplicaciones.

- [Rhino](/es/docs/Rhino)
  - : Información específica para la implementación de JavaScript escrita en Java (también conocido como Rhino).
- {{JSxRef("../Language_Resources", "Recursos del lenguaje")}}
  - : Punteros a estándares JavaScript publicados.
- {{JSxRef("../A_re-introduction_to_JavaScript", "Una reintroducción a JavaScript")}}
  - : {{JSxRef("../Guide", "Guía de JavaScript")}} y {{JSxRef("../Referencia", "Referencia de JavaScript")}}.

**JavaScript®** es una marca comercial o una marca comercial registrada de Oracle en EE. UU. y otros países.
