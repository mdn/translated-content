---
title: Descripción de las tecnologías JavaScript
slug: Web/JavaScript/JavaScript_technologies_overview
---

{{JsSidebar("Introductory")}}

## Introducción

Mientras que HTML define la estructura y el contenido de una página web y el CSS define el formato y la apariencia, JavaScript agrega interactividad a una página web y crea aplicaciones web enriquecidas.

Sin embargo, el término paraguas "JavaScript", tal como se entiende en un contexto de navegador web, contiene varios elementos muy diferentes. Uno de ellos es el lenguaje principal (ECMAScript), otro es la colección de las APIs Web, incluyendo el DOM (Document Object Model).

## JavaScript, el núcleo del lenguaje (ECMAScript)

EL núcleo del lenguaje JavaScript está estandarizado por el Comité ECMA TC39 como un lenguaje llamado [ECMAScript](/es/docs/JavaScript/Language_Resources). La última versión de la especificación es [ECMAScript 6.0](http://www.ecma-international.org/ecma-262/6.0/).

Éste núcleo del lenguaje es también usado en ambientes No-Navegadores, por ejemplo en [node.js](http://nodejs.org/).

### Qué considera ECMAScript scope?

Entre otras cosas, ECMAScript define:

- Sintaxis (reglas de análisis, palabras clave, flujos de control, inicialización literal de objetos...).
- Mecanismos de control de errores (throw, try/catch, habilidad para crear tipos de Errores definidos por el usuario).
- Tipos (boolean, number, string, function, object...).
- Los objetos globales. En un navegador, estos objetos globales son los objetos de la ventana, pero ECMAScript solo define APIs no especificas para navegadores, ej. `parseInt`, `parseFloat`, `decodeURI`, `encodeURI`...
- Mecanismo de herencia basada en prototipos.
- Objetos y funciones incorporadas (`JSON`, `Math`, `Array.prototype` methods, Object introspection methods...)
- Modo estricto.

### Navegadores soportados

A partir de Octubre del 2016, la gran mayoria de los navegadores soportan [ECMAScript 5.1](/es/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) y [ECMAScript 2015 aka ES6](/es/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla), pero versiones antiguas (aún en uso) implementan ECMAScript 5 solamente.

### Futuro

La 6ta edición principal de ECMAScript fue oficialmente aprobada y publicada como un estándar el 17 de Junio del 2015 por la ECMA General Assembly. Desde entonces las ediciones de ECMAScript son publicadas anualmente.

### Internacionalización de la API

La [ECMAScript Internationalization API Specification](http://ecma-international.org/ecma-402/1.0/) es una adición para la especificación del lenguaje ECMAScript, también estandarizada por Ecma TC39. La internacionalización de la API provee intercalación --collation-- (comparación de string), formateo de números, y fomateo de fechas/tiempo para aplicaciones JavaScript, permitiendo que las aplicaciones elijan el idioma y adapten la funcionalidad a sus necesidades. El estandar inicial fue aprobado en Diciembre del 2012; el estado de la implementación en navegadores es rastreado en la documentación de la [`Intl` object](/es/docs/JavaScript/Reference/Global_Objects/Intl). Las especificaciones de la internacionalización son actualmente ratificadas cada año y los navegadores constantemente mejoran su implementación.

## DOM APIs

### WebIDL

Las especificaciones de la [WebIDL](http://www.w3.org/TR/WebIDL/) proporcionan el vínculo de las tecnologías DOM y ECMAScript.

### El núcleo del DOM

El Document Object Model (DOM) es una **convención multiplataforma e independiente** del lenguaje para representar e interactuar con objetos en documentos HTML, XHTML y XML. Los objetos en el **árbol DOM** se pueden abordar y manipular mediante el uso de métodos en los objetos de otras tecnologías. El {{Glossary("W3C")}} estandariza el Modelo de Objetos del Documento Central, que define interfaces independientes del lenguaje que abstraen documentos HTML y XML como objetos, y también define mecanismos para manipular esta abstracción. Entre las cosas definidas por el DOM, podemos encontrar:

- La estructura del documento, un modelo de árbol, y la arquitectura de eventos DOM en el nucleo del DOM: `Node`, `Element`, `DocumentFragment`, `Document`, `DOMImplementation`, `Event`, `EventTarget`, …
- Una definición menos rigurosa de la arquitectura de eventos DOM, así como eventos específicos en eventos DOM.
- Otras cosas como DOM Traversal y el DOM Range.

Desde el punto de vista ECMAScript, los objetos definidos en la especificación DOM se denominan "objetos host".

### HTML DOM

HTML, el lenguaje de marcado de la Web, se especifica en términos del DOM. Por encima de los conceptos abstractos definidos en DOM Core, HTML también define el significado de los elementos. El DOM HTML incluye cosas como el `className` propiedad en elementos HTML o API como {{domxref ("document.body")}}.

La especificación HTML también define restricciones en los documentos; por ejemplo, requiere que todos los elementos secundarios de un elemento `ul` que representa una lista desordenada, sean elementos `li`, ya que representan elementos de la lista. En general, también prohíbe el uso de elementos y atributos que no están definidos en un estándar.

¿Busca [`Document` object](/es/docs/DOM/document), [`Window` object](/es/docs/DOM/window), y los otros elementos DOM? ? Lee la documentación [DOM documentation](/es/docs/Web/API/Document_Object_Model).

## Otras API notables

- Las funciones `setTimeout` `ysetInterval` se especificaron por primera vez en la interfaz de [`Window`](http://www.whatwg.org/html/#window) en HTML Standard.
- [XMLHttpRequest](https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) hace posible enviar solicitudes HTTP asincrónicas.
- EL [Modelo de Objetos CSS](http://dev.w3.org/csswg/cssom/) esume las reglas CSS como objetos.
- [WebWorkers](http://www.whatwg.org/specs/web-workers/current-work/) permite el cálculo paralelo.
- [WebSockets](http://www.whatwg.org/C/#network) permite la comunicación bidireccional de bajo nivel.
- [Canvas 2D Context](http://www.whatwg.org/html/#2dcontext) es una API de dibujo para {{htmlelement("canvas")}}.

### Soporte del navegador

Como todos los desarrolladores web han experimentado, [el DOM es un desastre](http://ejohn.org/blog/the-dom-is-a-mess/). La uniformidad del soporte del navegador varía mucho de una característica a otra, principalmente porque muchas características DOM importantes tienen especificaciones muy poco claras (si las hay), y diferentes navegadores web agregan características incompatibles para casos de uso superpuestos (como el modelo de evento de Internet Explorer). A partir de junio de 2011, el W3C y particularmente el WHATWG están definiendo características antiguas en detalle para mejorar la interoperabilidad, y los navegadores a su vez pueden mejorar sus implementaciones basadas en estas especificaciones.

Un enfoque común, aunque quizás no el más confiable, para la compatibilidad entre navegadores es usar bibliotecas de JavaScript, que resumen las funciones DOM y mantienen sus API funcionando igual en diferentes navegadores. Algunos de los frameworks más utilizados son [jQuery](http://jquery.com/), [prototype](http://www.prototypejs.org/), y [YUI](http://developer.yahoo.com/yui/).
