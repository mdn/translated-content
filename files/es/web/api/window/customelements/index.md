---
title: "Window: Propiedad customElements"
slug: Web/API/Window/customElements
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef}}

La propiedad de solo lectura **`customElements`** de la interfaz {{domxref("Window")}}, devuelve una referencia al objeto {{domxref("CustomElementRegistry")}}, el cual puede usarse para registrar un nuevo [elemento personalizado](/es/docs/Web/API/Web_components/Using_custom_elements) y obtener información sobre el elemento previamente registrado.

## Ejemplos

El ejemplo mas común que verás de esta propiedad es para acceder al método {{domxref("CustomElementRegistry.define()")}} para definir y registrar un nuevo elemento personalizado, por ejemplo:

```js
let customElementRegistry = window.customElements;
customElementRegistry.define("my-custom-element", MyCustomElement);
```

Sin embargo, generalmente se acorta como se muestra a continuación:

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true),
      );
    }
  },
);
```

Consulta nuestro repositorio [web-components-examples](https://github.com/mdn/web-components-examples/) para obtener mas ejemplos.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
