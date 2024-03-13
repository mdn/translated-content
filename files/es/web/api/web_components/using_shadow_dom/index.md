---
title: Usando shadow DOM
slug: Web/API/Web_components/Using_shadow_DOM
---

{{DefaultAPISidebar("Web Components")}}

Un aspecto importante de los componentes Web es la encapsulación — ser capaz de mantener la estructura de marcado, estilo, y comportamiento oculto y separado de otro código en la página para que las diferentes partes no entre en conflicto, y el código pueda permanecer limpio y agradable. El API de DOM Shadow es un parte clave para esto, proporcionando una forma de enlazar un DOM oculto y separado a un elemento. Este artículo cubre los aspectos básicos para utilizar Shadow DOM.

> **Nota:** Shadow DOM es soportado por defecto en Firefox (63 en adelante), Chrome, Opera, y Safari. Edge también está trabajando en una implemetanción.

## Vista de alto nivel

Este artículo asume que usted está familiarizado con el concepto de [DOM (Document Object Model)](/es/docs/Web/API/Document_Object_Model/Introduction) — una estructura en forma de arbol de nodos conectados que representan los diferentes elementos y cadenas de texto que aparecen en un documento de marcado (generalmente un documento HTML en el caso de documentos web). Como ejemplo, considere el siguiente fragmento HTML:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Simple DOM example</title>
  </head>
  <body>
    <section>
      <img
        src="dinosaur.png"
        alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

Este fragmento produce la siguientre estructura de DOM:

![](dom-screenshot.png)

_Shadow_ DOM permite adjuntar arboles DOM ocultos a elementos en el arbol DOM regular — este arbol shadow DOM comienza con un elemento **shadow root,** debajo del cual se puede adjuntar cualquier elemento que desee, de la misma manera que el DOM normal.

![](shadowdom.svg)

Hay algunos conceptos de Shadow DOM que deben ser tomados en cuenta:

- **Shadow host**: El nodo regular del DOM al que es atado el shadow DOM.
- **Shadow tree**: El arbol DOM dentro del shadow DOM.
- **Shadow boundary**: El punto en el que el shadow DOM termina y el DOM regular comienza.
- **Shadow root**: El nodo raiz del arbol Shadow.

Puede manipular los nodos del 'shadow DOM' de la misma manera que los nodos del arbol DOM regular. Por ejemplo, agregando hijos o estableciendo atributos, dando estilo a nodos individuales utilizando element.style.foo, o agregando estilo a todo el árbol de 'shadow DOM' dentro del elemento \<style>. La diferencia es que nada del código dentro de un 'shadow DOM' puede afectar a nada fuera de él, lo que permite una encapsulación práctica.

Cabe destacar que el shadow DOM no es algo nuevo — los exploradores lo han usado por un largo tiempo para encapsular la estructura interna de un elemento. Piensa por ejemplo en un elemento {{htmlelement("video")}}, con los controles predeterminados del explorador a la vista. Todo lo que ves en el DOM es el elemento `<video>`, pero este contiene una serie de botones y otros controles dentro de su shadow DOM. Las especificaciones del shadow DOM fueron hechas para que seas capaz de manipular el shadow DOM de tus elementos personalizados.

## Uso básico

Puede adjuntar un 'shadow root' a cualquier elemento utilizando el método {{domxref ("Element.attachShadow ()")}}. Éste toma como parámetro un objeto que contiene una propiedad — modo — con dos posibles valores: 'open' o 'closed'.

```js
let shadow = elementRef.attachShadow({ mode: "open" });
let shadow = elementRef.attachShadow({ mode: "closed" });
```

`open` siginifica que puede acceder al shadow DOM usando JavaScript en el contexto principal de la página. Por ejemplo, usando la propiedad {{domxref("Element.shadowRoot")}}:

```js
let myShadowDom = myCustomElem.shadowRoot;
```

If you attach a shadow root to a custom element with `mode: closed` set, you won't be able to access the shadow DOM from the outside — `myCustomElem.shadowRoot` returns `null`. This is the case with built in elements that contain shadow DOMs, such as `<video>`.

> **Nota:** As [this blog post shows](https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af), it is actually fairly easy to work around closed shadow DOMs, and the hassle to completely hide them is often more than it's worth.

If you are attaching a shadow DOM to a custom element as part of its constructor (by far the most useful application of the shadow DOM), you would use something like this:

```js
let shadow = this.attachShadow({ mode: "open" });
```

When you've attached a shadow DOM to an element, manipulating it is a matter of just using the same DOM APIs as you use for the regular DOM manipulation:

```js
var para = document.createElement("p");
shadow.appendChild(para);
// etc.
```

## Working through a simple example

Now let's walk through a simple example to demonstrate the shadow DOM in action inside a custom element — [`<popup-info-box>`](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) (see a [live example](https://mdn.github.io/web-components-examples/popup-info-box-web-component/) also). This takes an image icon and a text string, and embeds the icon into the page. When the icon is focused, it displays the text in a pop up information box to provide further in-context information. To begin with, in our JavaScript file we define a class called `PopUpInfo`, which extends `HTMLElement`:

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here

    ...
  }
}
```

Inside the class definition we define the element's constructor, which defines all the functionality the element will have when an instance of it is instantiated.

### Creating the shadow root

We first attach a shadow root to the custom element:

```js
// Create a shadow root
var shadow = this.attachShadow({ mode: "open" });
```

### Creating the shadow DOM structure

Next, we use some DOM manipulation to create the element's internal shadow DOM structure:

```js
// Create spans
var wrapper = document.createElement("span");
wrapper.setAttribute("class", "wrapper");
var icon = document.createElement("span");
icon.setAttribute("class", "icon");
icon.setAttribute("tabindex", 0);
var info = document.createElement("span");
info.setAttribute("class", "info");

// Take attribute content and put it inside the info span
var text = this.getAttribute("text");
info.textContent = text;

// Insert icon
var imgUrl;
if (this.hasAttribute("img")) {
  imgUrl = this.getAttribute("img");
} else {
  imgUrl = "img/default.png";
}
var img = document.createElement("img");
img.src = imgUrl;
icon.appendChild(img);
```

### Styling the shadow DOM

After that we create a {{htmlelement("style")}} element and populate it with some CSS to style it:

```js
// Create some CSS to apply to the shadow dom
var style = document.createElement("style");

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  position: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3;
}

img {
  width: 1.2rem;
}

.icon:hover + .info, .icon:focus + .info {
  opacity: 1;
}`;
```

### Attaching the shadow DOM to the shadow root

The final step is to attach all the created elements to the shadow root:

```js
// attach the created elements to the shadow dom
shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);
```

### Using our custom element

Once the class is defined, using the element is as simple as defining it, and putting it on the page, as explained in [Using custom elements](/es/docs/Web/Web_Components/Using_custom_elements):

```js
// Define the new element
customElements.define("popup-info", PopUpInfo);
```

```html
<popup-info
  img="img/alt.png"
  text="Your card validation code (CVC) is an extra security feature — it is the last 3 or 4 numbers on the back of your card."></popup-info>
```

## See also

- [Using custom elements](/es/docs/Web/Web_Components/Using_custom_elements)
- [Using templates and slots](/es/docs/Web/Web_Components/Using_templates_and_slots)
