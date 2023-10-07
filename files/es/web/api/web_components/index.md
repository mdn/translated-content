---
title: Web Components
slug: Web/API/Web_components
---

{{DefaultAPISidebar("Web Components")}}

Los Componentes Web son un paquete de diferentes tecnologías que te permiten crear elementos personalizados reutilizables — con su funcionalidad encapsulada apartada del resto del código — y utilizarlos en las aplicaciones web.

## Conceptos y uso

Como desarrolladores, sabemos que reutilizar código tanto como sea posible es una buena idea. Esto tradicionalmente no es sencillo para estructuras de marcado personalizadas — piense en el complejo HTML (y sus estilos y scripts asociados) que en ocasiones se han tenido que escribir para renderizar controles de interfaz (UI) personalizados, y ahora usarlos múltiples veces puede crear un caos en la página si no se es cuidadoso.

Los Componentes Web apuntan a resolver dichos problemas — consiste en tres tecnologías principalmente, las que se pueden usar juntas para crear elementos personalizables versátiles que encapsulan la funcionalidad y pueda ser reutilizada donde sea sin miedo a colisiones de código.

- **Custom elements** (elementos personalizados): Un conjunto de APIs de JavaScript que permiten definir elementos personalizados y su comportamiento, que entonces puede ser utilizado como se deseé en la interfaz del usuario.
- **Shadow DOM**: Un conjunto de APIs de JavaScript para fijar un árbol DOM "sombra" encapsulado a un elemento — que es renderizado por separado del documento DOM principal — y controlando funcionalidad asociada. De esta forma, se pueden mantener características de un elemento en privado, así puede tener el estilo y los scripts sin miedo de colisiones con otras partes del documento.
- **HTML templates** (plantillas HTML): Los elementos {{HTMLElement("template")}} y {{HTMLElement("slot")}} permiten escribir plantillas de marcado que no son desplegadas en la página renderizada. Éstas pueden ser reutilizadas en múltiples ocasiones como base de la estructura de un elemento personalizado.

La aproximación básica para implementar un componente web, generalmente es la siguiente:

1. Crear una clase o función en la cual especificar la funcionalidad del componente web. Si se usa una clase, usar la sintaxis de ES2015 (ver [Clases](/es/docs/Web/JavaScript/Reference/Classes) para más información).
2. Registrar el nuevo elemento personalizado utilizando el método {{domxref("CustomElementRegistry.define()")}}, pasándole el nombre del elemento a ser definido, la clase o función en la cuál su funcionalidad esta especificada, y opcionalmente, de que elemento hereda.
3. Si se requiere, adjuntar un shadow DOM al elemento personalizado usando el método {{domxref("Element.attachShadow()")}}. Añadir elementos hijos, oyentes de eventos, etc., al shadow DOM utilizando métodos normales del DOM.
4. Si se requiere, definir una plantilla HTML utilizando {{htmlelement("template")}} y {{htmlelement("slot")}}. Nuevamente usar métodos regulares del DOM para clonar la plantilla y acoplarla al shadow DOM.
5. Utilizar los componentes personalizados en la página web cuando se desee, como se utilizaría cualquier otro elemento HTML.

## Tutoriales

- [Utilizando elementos personalizados (Using custom elements)](/es/docs/Web/Web_Components/Using_custom_elements)
  - : Guía que muestra como usar las características de los elementos personalizados para crear componentes web sencillos, así como revisar las llamadas del ciclo de vida y algunas características más avanzadas.
- [Utilizando el shadow DOM](/es/docs/Web/Web_Components/Using_shadow_DOM)
  - : Guía que trata los fundamentos del shadow DOM, mostrando como adjuntar un shadow DOM a un elemento, añadir el árbol del shadow DOM, añadirle estilos y más.
- [Usando templates y slots](/es/docs/Web/Web_Components/Using_templates_and_slots)
  - : Guía que muestra como definir una estructura HTML reutilizable utilizando elementos {{htmlelement("template")}} y {{htmlelement("slot")}} elements, y entonces usar esa estructura debto del componente web.

## Referencia

### Elementos personalizados

- {{domxref("CustomElementRegistry")}}
  - : Contiene funcionalidad relacionada a los elementos personalizados, más notablemente el método {{domxref("CustomElementRegistry.define()")}} utilizado para registrar nuevos elementos personalizados para que se puedan usar en el documento
- {{domxref("Window.customElements")}}
  - : Retorna una referencia al objeto `CustomElementRegistry`.
- [Llamadas del ciclo de vida (Life cycle callbacks)](/es/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks)

  - : Llamadas de funciones especiales declaradas dentro de la clase de definición de los componentes personalizados, los que afectan su comportamiento:

    - `connectedCallback`: Invocado cuando el componente personalizado se conecta por primera vez al DOM del documento.
    - `disconnectedCallback`: Invocado cuando el componente personalizado se deconecta del DOM del documento.
    - `adoptedCallback`: Invocado cuando el componente personalizado se mueve a un nuevo documento.
    - `attributeChangedCallback`: Invocado cuando uno de los atributos del componente personalizado es añadido, removido o modificado.

<!---->

- Extensiones para crear elementos incorporados personalizados

  - : &#x20;

    - El atributo global HTML [`is`](/es/docs/Web/HTML/Global_attributes#is): Permite especificar que un elemento estandar HTML debe comportarse como un elemento incorporado personalizado registrado.
    - La opción "is" del método {{domxref("Document.createElement()")}}: Permite crear una instancia de un elemento HTML estandar que se comporta como un determinado elemento incorporado personalizado registrado.

- Pseudo-clases CSS

  - : Pseudo-clases relacionadas específicamente a elementos personalizados:

    - {{cssxref(":defined")}}: Coincide con cualquier elemento declarado, incluyendo elementos incorporados y elementos personalizados definidos con `CustomElementRegistry.define()`).
    - {{cssxref(":host")}}: Selecciona el _shadow host_ del [shadow DOM](/es/docs/Web/Web_Components/Using_shadow_DOM) conteniendo el CSS que es usado.
    - {{cssxref(":host()")}}: Selecciona el _shadow host_ del [shadow DOM](/es/docs/Web/Web_Components/Using_shadow_DOM) conteniendo el CSS que es usado (para que se pueda seleccionar un elemento personalizado desde dentro de su _shadow DOM_) — pero solo si el selector determinado como el parámetro de la función coincide con el _shadow host_.
    - {{cssxref(":host-context()")}}: Selecciona el _shadow host_ del [shadow DOM](/es/docs/Web/Web_Components/Using_shadow_DOM) conteniendo el CSS que es usado (para que se pueda seleccionar un elemento personalizado desde dentro de su _shadow DOM_) — pero solo si el selector determinado como el parámetro de la función coincide con el shadow host de los ancestros del sitio desde el cual esta ubicado en la jerarquía del DOM.

- Pseudo-elementos CSS

  - : Pseudo-elementos relacionados especificamente a elementos personalizados:

    - {{cssxref("::part")}}: Representa cualquier elemento dentro del [shadow tree](/es/docs/Web/Web_Components/Using_shadow_DOM) que contiene un atributo [`part`](/es/docs/Web/HTML/Global_attributes#part) que coincida.

### Shadow DOM

- {{domxref("ShadowRoot")}}
  - : Representa el nodo raíz de un subárbol de un _shadow DOM_.
- {{domxref("DocumentOrShadowRoot")}}
  - : Un mixin definiendo características que son disponibles a través de documentos y _shadow roots_.
- Extensiones a {{domxref("Element")}}

  - : Extensiones a la interfaz `Element` relacionada al _shadow DOM_:

    - El método {{domxref("Element.attachShadow()")}} conecta un árbol _shadow DOM_ al elemento especificado.
    - La propiedad {{domxref("Element.shadowRoot")}} retorna el _shadow root_ acoplado al elemento determinado, o `null` si no hay un _shadow root_ adjuntado.

- Adiciones relevantes a {{domxref("Node")}}

  - : Adiciones a la interfaz `Node` relevantes al _shadow DOM_:

    - El método {{domxref("Node.getRootNode()")}} retorna la raíz del objeto del contexto, que opcionalmente incluye el _shadow root_ si se encuentra disponible.
    - La propiedad {{domxref("Node.isConnected")}} retorna un boleano indicando si el Nodo esta o no conectado (directamente o indirectamente) al objeto del contexto, es decir, el objeto {{domxref("Document")}} en el caso del DOM normal, o al {{domxref("ShadowRoot")}} en el caso del shadow DOM.

- Extensiones a {{domxref("Event")}}

  - : Extensiones a la interfaz `Event` relacionada al shadow DOM:

    - {{domxref("Event.composed")}}: Retorna un {{jsxref("Boolean")}} que indica si el evento se va a propagar a través de los límites del _shadow DOM_ hacia el DOM normal (`true`), o no (`false`).
    - {{domxref("Event.composedPath")}}: Retorna la ruta del evento (objetos en los que oyentes serán invocados). Esto no incluye nodos en _shadow trees_ si el _shadow root_ fue creado con {{domxref("ShadowRoot.mode")}} cerrado.

### Plantillas HTML

- {{htmlelement("template")}}
  - : Contiene un fragmento de HTML que no es renderizado cuando se carga inicialmente un documento que lo contiene, pero puede ser desplegado en tiempo de ejecución usando JavaScript, principalmente usado como la base de la estructura de los elementos personalizados. La interfaz DOM asociada es {{domxref("HTMLTemplateElement")}}.
- {{htmlelement("slot")}}
  - : Un espacio termporal dentro de un componente web que se puede llenar con una plantilla de marcado propia, lo que permite crear árboles DOM separados y presentarlos juntos. La interfaz DOM asociada es {{domxref("HTMLSlotElement")}}.
- El atributo global HTML [`slot`](/es/docs/Web/HTML/Global_attributes/slot)
  - : Asigna un slot en un _shadow tree_ de un _shadow DOM_ shadow tree a un elemento.
- {{domxref("Slotable")}}
  - : Un mixin implementado tanto por los nodos {{domxref("Element")}} y {{domxref("Text")}}, definiendo características que les permiten convertirse en el contenido de un elemento {{htmlelement("slot")}}. El mixin define un atributo, {{domxref("Slotable.assignedSlot")}}, el cual retorna una referencia al nodo del slot donde esta insertado.

<!---->

- Extensiones a {{domxref("Element")}}

  - : Extensiones a la interfaz `Element` relacionadas a slots:

    - {{domxref("Element.slot")}}: Retorna el nombre del slot del _shadow DOM_ adjunto al elemento.

- Pseudo-elementos de CSS

  - : Pseudo-elementos especificamente relacionados a slots:

    - {{cssxref("::slotted")}}: Coincide cualquier contenido que es insertado dentro de un slot.

- El evento [`slotchange`](/es/docs/Web/Reference/Events/slotchange)
  - : Disparado en una instancia {{domxref("HTMLSlotElement")}} (elemento {{htmlelement("slot")}}) cuando el o los nodos contenidos es ese slot cambia.

## Ejemplos

Se están construyendo varios ejemplos en nuestro repositorio de GitHub [web-components-examples](https://github.com/mdn/web-components-examples). Se añadirán más con el tiempo.

## Especificaciones

{{Specifications}}

## Compatibilidad de los navegadores

[![Soporte de Componentes Web](https://pbs.twimg.com/media/EOW1l5dVAAADJuF?format=jpg&name=large)](https://twitter.com/polymer/status/1217578939456970754/photo/1)

(Imagen tomada de [webcomponents.org](https://www.webcomponents.org/))

Para revisar detalladamente el soporte para ciertas características (sobre todo en versiones anteriores o navegadores antiguos), se puede consultar las páginas de referencia listadas anteriormente

## Ver también

- [webcomponents.org](https://www.webcomponents.org/) — Sitio que presenta ejemplos, tutoriales y otra información site featuring web components examples, tutorials, and other information.
- [open-wc](https://open-wc.org/)— Sitio que incluye recomendaciones para el desarrollo, linting, testeo, demos, publicación y automatización de componentes web
- [webcomponents.dev](https://webcomponents.dev/features/)— Sitio que provee de una interfaz de desarrollo online para trabajar con componentes web, ya sea nativamente o con diferentes librerías
- [Hybrids](https://github.com/hybridsjs/hybrids) — Librería para componentes web de código abierto, que favorece objetos simples y funciones puras sobre la sintasis `class` y this. Provee de una sencilla y funcional API para crear elementos personalizados.
- [LitElement (Proyecto Polymer)](https://www.polymer-project.org/) — Marcos de trabajo para componentes web de Google — con un conjunto de polyfills, mejoras y ejemplos. Actualmente es la forma más sencilla de usar componentes web.
- [Snuggsi](https://github.com/devpunks/snuggsi#readme) — Componentes web facilmente en \~1kB _incluyedo polyfill_ — Todo lo que se necesita es un navegador y conocimientos básicos de HTML, CSS y clases de JavaScript para ser productivo.
- [Stencil](https://stenciljs.com/) — Conjunto de herramientas para construir componentes web de sistemas de diseño reusables y escalables.
- [Slim.js](https://github.com/slimjs/slim.js) — Librería para componenetes web de código abierto — una librería con alto rendimiento para la autoría rápida y fácil de componentes; extensible y acoplable y compatible con otros marcos de trabajo
