---
title: ":host"
slug: Web/CSS/:host
---

{{ CSSRef }}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) [CSS](/es/docs/Web/CSS) **`:host`** selecciona la sombra host de [sombra DOM](/es/docs/Web/Web_Components/Using_shadow_DOM) que contiene el CSS que se usa en el interior — es decir, esto le permite seleccionar un elemento personalizado desde su sombra DOM.

> **Nota:** Esto no tiene ningún efecto cuando se usa fuera de una sombra DOM.

```css
/* Selects a shadow root host */
:host {
  font-weight: bold;
}
```

## Sintaxis

{{csssyntax}}

## Ejemplos

Los siguientes fragmentos se toman de nuestro ejemplo de [selectores de host](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([ver también en directo](https://mdn.github.io/web-components-examples/host-selectors/)).

En este ejemplo, tenemos un elemento personalizado simple — `<context-span>` — que se puede envolver alrededor del texto:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Dentro del constructor del elemento, creamos los elementos `style` y `span`, llenamos el `span` con el contenido del elemento personalizado y llenamos el elemento `style` con algunas reglas CSS:

```js
let style = document.createElement("style");
let span = document.createElement("span");
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({ mode: "open" });
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent =
  "span:hover { text-decoration: underline; }" +
  ":host-context(h1) { font-style: italic; }" +
  ':host-context(h1):after { content: " - no links in headers!" }' +
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgba(0,0,0,0.1); padding: 2px 5px; }";
```

La regla `:host { background: rgba(0,0,0,0.1); padding: 2px 5px; }` estiliza todas las instancias del elemento `<context-span>` (la sombra host en esta instancia) en el documento.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Componentes Web](/es/docs/Web/Web_Components)
- {{cssxref(":host()")}}
- {{cssxref(":host-context()")}}
