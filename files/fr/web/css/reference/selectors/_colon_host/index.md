---
title: :host
slug: Web/CSS/Reference/Selectors/:host
original_slug: Web/CSS/:host
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:host`** permet de cibler l'hôte d'un _[DOM sombre (<i lang="en">shadow DOM</i>)](/fr/docs/Web/API/Web_components/Using_shadow_DOM)_ contenant le CSS à utiliser pour cet hôte. Autrement dit, elle permet de sélectionner un élément personnalisé (_custom element_) depuis l'intérieur du _shadow DOM_.

> [!NOTE]
> Cette pseudo-classe n'a aucun effet lorsqu'elle est utilisée à l'extérieur d'un _shadow DOM_.

{{InteractiveExample("Démonstration CSS&nbsp;: :host", "tabbed-shorter")}}

```css interactive-example
/* Ce CSS est appliqué à l'intérieur du shadow DOM. */

:host {
  background-color: aqua;
}
```

```html interactive-example
<h1 id="shadow-dom-host"></h1>
```

```js interactive-example
const shadowDom = init();

// ajouter un élément <span> dans le shadow DOM
const span = document.createElement("span");
span.textContent = "À l'intérieur du shadow DOM";
shadowDom.appendChild(span);

// attacher le shadow DOM à l'élément #shadow-dom-host
function init() {
  const host = document.getElementById("shadow-dom-host");
  const shadowDom = host.attachShadow({ mode: "open" });

  const cssTab = document.querySelector("#css-output");
  const shadowStyle = document.createElement("style");
  shadowStyle.textContent = cssTab.textContent;
  shadowDom.appendChild(shadowStyle);

  cssTab.addEventListener("change", () => {
    shadowStyle.textContent = cssTab.textContent;
  });
  return shadowDom;
}
```

```css
/* Sélectionne un hôte de shadow root */
:host {
  font-weight: bold;
}
```

## Syntaxe

```css
:host {
  /* ... */
}
```

## Exemples

Les fragments de code qui suivent sont extraits du dépôt d'exemple [_host-selectors_](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([voir le résultat _live_](https://mdn.github.io/web-components-examples/host-selectors/)).

Dans cet exemple, on dispose d'un élément personnalisé `<context-span>` qui peut contenir du texte&nbsp;:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Pour le constructeur de cet élément, on crée des éléments `style` et `span`&nbsp;: l'élément `span` recevra le contenu de l'élément personnalisé et `style` recevra quelques règles CSS&nbsp;:

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

La règle `:host { background: rgba(0,0,0,0.1); padding: 2px 5px; }` permet de cibler l'ensemble des instances de `<context-span>` (qui est l'hôte ici) dans le document.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les composants web](/fr/docs/Web/API/Web_components)
- {{cssxref(":host_function", ":host()")}}
- {{cssxref(":host-context", ":host-context()")}}
- {{CSSxref("::slotted")}}
- {{CSSxRef(":state",":state()")}}
- Le module [CSS scoping](/fr/docs/Web/CSS/CSS_scoping)
