---
title: CustomElementRegistry
slug: Web/API/CustomElementRegistry
l10n:
  sourceCommit: 6a298de5052a62331f16de1e82c25e025eefc76e
---

{{DefaultAPISidebar("Web Components")}}

La interfaz **`CustomElementRegistry`** proporciona métodos para registrar elementos personalizados y consultar elementos registrados. Para obtener una instancia, usa la propiedad {{domxref("window.customElements")}}.

## Métodos de instancia

- {{domxref("CustomElementRegistry.define()")}}
  - : Define un nuevo [elemento personalizado](/es/docs/Web/API/Web_components/Using_custom_elements).
- {{domxref("CustomElementRegistry.get()")}}
  - : Devuelve el constructor del elemento personalizado nombrado, o {{jsxref("undefined")}} si el elemento personalizado no está definido.
- {{domxref("CustomElementRegistry.getName()")}}
  - : Devuelve el nombre del elemento personalizado ya definido, o `null` si el elemento personalizado no está definido.
- {{domxref("CustomElementRegistry.upgrade()")}}
  - : Actualiza un elemento personalizado directamente, incluso antes de que se conecte a su [shadow root](/es/docs/Web/API/ShadowRoot).
- {{domxref("CustomElementRegistry.whenDefined()")}}
  - : Devuelve un {{jsxref("Promise")}} vacío que se resuelve cuando un elemento personalizado se define con el nombre dado. Si dicho elemento personalizado ya está definido, la promesa devuelta se cumple de inmediato.

## Ejemplos

El siguiente código está tomado de nuestro ejemplo [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) ([véalo también en vivo](https://mdn.github.io/web-components-examples/word-count-web-component/)). Observe cómo usamos el método {{domxref("CustomElementRegistry.define()")}} para definir el elemento personalizado después de crear su clase.

```js
// Crear una clase para el elemento.
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Siempre llama super primero en el constructor
    super();

    // contar palabras en el elemento padre del elemento
    const wcParent = this.parentNode;

    function countWords(node) {
      const text = node.innerText || node.textContent;
      return text
        .trim()
        .split(/\s+/g)
        .filter((a) => a.trim().length > 0).length;
    }

    const count = `Palabras: ${countWords(wcParent)}`;

    // Crear una shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Cree un nodo de texto y agrega el recuento de palabras
    const text = document.createElement("span");
    text.textContent = count;

    // Añádalo a al shadow root
    shadow.appendChild(text);

    // Actualizar el recuento cuando cambia el contenido del elemento
    setInterval(() => {
      const count = `Palabras: ${countWords(wcParent)}`;
      text.textContent = count;
    }, 200);
  }
}

// Definir el nuevo elemento
customElements.define("word-count", WordCount, { extends: "p" });
```

> **Nota:** `CustomElementRegistry` está disponible a través de la propiedad {{domxref("Window.customElements")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
