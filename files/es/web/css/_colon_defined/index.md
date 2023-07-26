---
title: ":defined"
slug: Web/CSS/:defined
---

{{ CSSRef }}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:defined`** de [CSS](/es/docs/Web/CSS) representa cualquier elemento que se haya definido. Esto incluye cualquier elemento estándar integrado en el navegador y elementos personalizados que se hayan definido correctamente (es decir, con el método {{domxref("CustomElementRegistry.define()")}}).

```css
/* Selecciona cualquier elemento definido */
:defined {
  font-style: italic;
}

/* Selecciona cualquier instancia de un elemento personalizado específico */
simple-custom:defined {
  display: block;
}
```

## Sintaxis

{{csssyntax}}

## Ejemplos

Los siguientes fragmentos están tomados de nuestra demostración [Pseudo-clase-definida](https://github.com/mdn/web-components-examples/tree/master/defined-pseudo-class) ([ver también en directo](https://mdn.github.io/web-components-examples/defined-pseudo-class/)).

En esta demostración, definimos un elemento personalizado trivial muy simple:

```js
customElements.define(
  "simple-custom",
  class extends HTMLElement {
    constructor() {
      super();

      let divElem = document.createElement("div");
      divElem.textContent = this.getAttribute("text");

      let shadowRoot = this.attachShadow({ mode: "open" }).appendChild(divElem);
    }
  },
);
```

Luego inserta una copia de este elemento en el documento, junto con un `<p>` estándar:

```html
<simple-custom
  text="Texto de ejemplo del elemento personalizado"></simple-custom>

<p>Texto de ejemplo de párrafo estándar</p>
```

En el CSS primero incluimos las siguientes reglas:

```css
/* Dar a los dos elementos fondos distintivos */
p {
  background: yellow;
}

simple-custom {
  background: cyan;
}

/* Tanto el elemento personalizado como el incorporado tienen texto en cursiva */
:defined {
  font-style: italic;
}
```

A continuación, proporcione las dos reglas siguientes para ocultar las instancias de nuestro elemento personalizado que no están definidas y las instancias que se definen como elementos de nivel de bloque:

```css
simple-custom:not(:defined) {
  display: none;
}

simple-custom:defined {
  display: block;
}
```

Esto es útil si tiene un elemento personalizado complejo que demora un tiempo en cargarse en la página — es posible que desee ocultar las instancias del elemento hasta que la definición esté completa, para que no terminen con feos destellos de elementos sin estilo en la página

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Componentes web](/es/docs/Web/Web_Components)
