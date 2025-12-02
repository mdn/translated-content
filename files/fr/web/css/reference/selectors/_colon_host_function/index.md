---
title: :host()
slug: Web/CSS/Reference/Selectors/:host_function
original_slug: Web/CSS/:host_function
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:host()`** permet de sélectionner l'hôte du DOM sombre (<i lang="en">shadow DOM</i>) contenant le CSS à utiliser, uniquement si le sélecteur passé en argument correspond à l'élément hôte.

Le scénario principal pour utiliser cette fonction consiste à vouloir cibler une certaine classe d'éléments personnalisés : pour cela, on passera la classe comme argument de la fonction `:host()`. Cette fonction ne peut pas être utilisée avec un sélecteur de descendant, pour cela il faudra utiliser {{cssxref(":host-context()")}}.

> [!NOTE]
> Alors que d'autres pseudo-classes fonctionnelles telles que {{CSSxRef(":is", ":is()")}} et {{CSSxRef(":not", ":not()")}} acceptent une liste de sélecteurs comme paramètres, `:host()` prend un seul sélecteur composé comme paramètre. De plus, alors que `:is()` et `:not()` ne prennent en compte que la spécificité de leur argument, la spécificité de `:host()` est à la fois la spécificité de la pseudo-classe **et** la spécificité de son argument.

{{InteractiveExample("Démonstration CSS&nbsp;: :host()", "tabbed-shorter")}}

```css interactive-example
/* Le CSS suivant est appliqué à l'intérieur du shadow DOM. */

:host(h1) {
  color: red;
}

:host(#shadow-dom-host) {
  border: 2px dashed blue;
}
```

```html interactive-example
<!-- éléments en dehors du shadow DOM -->
<div id="container">
  <h1 id="shadow-dom-host"></h1>
</div>
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
/* Sélectionne un hôte de shadow root, uniquement s'il est
   correspondant au sélecteur passé en argument */
:host(.special-custom-element) {
  font-weight: bold;
}
```

## Syntaxe

```css-nolint
:host(<compound-selector>) {
  /* ... */
}
```

## Exemples

### Sélection de styles pour les hôtes de shadow

Les fragments de code suivants sont extraits du dépôt d'exemple [_host-selectors_](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([voir le résultat en direct](https://mdn.github.io/web-components-examples/host-selectors/)).

Dans cet exemple, on dispose d'un élément personnalisé, `<context-span>`, qui peut contenir du texte :

```html
<h1>
  Sélecteurs d'hôte <a href="#"><context-span>exemple</context-span></a>
</h1>
```

Dans le constructeur de l'élément, on crée un élément `style` et un élément `span`. Ce dernier recevra le contenu textuel de l'élément personnalisé et l'élément `style` recevra quelques règles CSS :

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
  ':host-context(h1)::after { content: " - pas de liens dans les en-têtes !" }' +
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

La règle `:host(.footer) { color : red; }` s'applique à toutes les instances de l'élément `<context-span>` (il s'agit ici de l'hôte) du document qui possèdent la classe `footer`. Ici, pour ces éléments donnés, on utilise une couleur spécifique.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les composants web](/fr/docs/Web/API/Web_components)
- {{CSSxRef(":host")}}
- {{CSSxRef(":host-context", ":host-context()")}}
- {{CSSxRef(":state",":state()")}}
