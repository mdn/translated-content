---
title: ::part()
slug: Web/CSS/::part
l10n:
  sourceCommit: 5863b9e6635b304b96ef5f70937329e854957f73
---

{{CSSRef}}

El [pseudoelemento](/es/docs/Web/CSS/Pseudo-elements) de [CSS](/es/docs/Web/CSS) **`::part`** representa cualquier elemento dentro de un [shadow tree](/es/docs/Web/API/Web_components/Using_shadow_DOM) que tiene un atributo [`part`](/es/docs/Web/HTML/Global_attributes#part) coincidente.

```css
custom-element::part(foo) {
  /* Estilos que se aplican al part `foo` */
}
```

## Sintaxis

```css
::part(<ident>+) {
  /* ... */
}
```

## Ejemplos

### HTML

```html
<template id="tabbed-custom-element">
  <style>
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      padding: 1rem;
    }
    :host {
      display: flex;
    }
  </style>
  <div part="tab active">Tab 1</div>
  <div part="tab">Tab 2</div>
  <div part="tab">Tab 3</div>
</template>

<tabbed-custom-element></tabbed-custom-element>
```

### CSS

```css
tabbed-custom-element::part(tab) {
  color: #0c0dcc;
  border-bottom: transparent solid 2px;
}

tabbed-custom-element::part(tab):hover {
  background-color: #0c0d19;
  color: #ffffff;
  border-color: #0c0d33;
}

tabbed-custom-element::part(tab):hover:active {
  background-color: #0c0d33;
  color: #ffffff;
}

tabbed-custom-element::part(tab):focus {
  box-shadow:
    0 0 0 1px #0a84ff inset,
    0 0 0 1px #0a84ff,
    0 0 0 4px rgb(10 132 255 / 30%);
}

tabbed-custom-element::part(active) {
  color: #0060df;
  border-color: #0a84ff !important;
}
```

### JavaScript

```js
let template = document.querySelector("#tabbed-custom-element");
globalThis.customElements.define(
  template.id,
  class extends HTMLElement {
    constructor() {
      super().attachShadow({ mode: "open" }).append(template.content);
    }
  },
);
```

### Resultado

{{EmbedLiveSample('Ejemplos')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Atributo [`part`](/es/docs/Web/HTML/Global_attributes#part)
- Función pseudoclase {{CSSxRef(":state",":state()")}}
- Atributo [`exportparts`](/es/docs/Web/HTML/Global_attributes#exportparts)
- Módulo [shadow parts de CSS](/es/docs/Web/CSS/CSS_shadow_parts)
