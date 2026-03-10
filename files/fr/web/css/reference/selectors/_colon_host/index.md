---
title: :host
slug: Web/CSS/Reference/Selectors/:host
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:host`** permet de cibler l'hôte d'un _[DOM d'ombre (<i lang="en">shadow DOM</i>)](/fr/docs/Web/API/Web_components/Using_shadow_DOM)_ contenant le CSS à utiliser pour cet hôte. Autrement dit, elle permet de sélectionner un élément personnalisé (_custom element_) depuis l'intérieur du DOM d'ombre.

> [!NOTE]
> Cette pseudo-classe n'a aucun effet lorsqu'elle est utilisée à l'extérieur d'un DOM d'ombre.

{{InteractiveExample("Démonstration CSS&nbsp;: :host", "tabbed-shorter")}}

```css interactive-example
/* Ce CSS est appliqué à l'intérieur du DOM d'ombre. */

:host {
  background-color: aqua;
}
```

```html interactive-example
<h1 id="shadow-dom-host"></h1>
```

```js interactive-example
const shadowDom = init();

// ajouter un élément <span> dans le DOM d'ombre
const span = document.createElement("span");
span.textContent = "À l'intérieur du DOM d'ombre";
shadowDom.appendChild(span);

// attacher le DOM d'ombre à l'élément #shadow-dom-host
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
/* Sélectionne un hôte de la racine d'ombre */
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

Les fragments de code qui suivent sont extraits du dépôt [d'exemple _host-selectors_ <sup>(angl.)</sup>](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([voir le résultat en direct <sup>(angl.)</sup>](https://mdn.github.io/web-components-examples/host-selectors/)).

Dans cet exemple, on dispose d'un élément personnalisé `<context-span>` qui peut contenir du texte&nbsp;:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Dans le constructeur de l'élément, nous créons des éléments `style` et `span`, nous remplissons le `span` avec le contenu de l'élément personnalisé, et nous remplissons l'élément `style` avec quelques règles CSS&nbsp;:

```js
const style = document.createElement("style");
const span = document.createElement("span");
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
- La fonction de pseudo-classe {{CSSxRef(":host_function", ":host()")}}
- La fonction de pseudo-classe {{CSSxRef(":host-context()")}}
- Le pseudo-élément {{CSSxRef("::slotted")}}
- La fonction de pseudo-classe {{CSSxRef(":state()")}}
- Le module [de portée CSS](/fr/docs/Web/CSS/CSS_scoping)
