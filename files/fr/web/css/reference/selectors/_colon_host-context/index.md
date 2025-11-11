---
title: :host-context()
slug: Web/CSS/Reference/Selectors/:host-context
original_slug: Web/CSS/:host-context
l10n:
  sourceCommit: 572f56b6deaa1402c2c332aba2754a9ec727ff7b
---

{{deprecated_header}}

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:host-context()`** sélectionne l'hôte sombre (<i lang="en">shadow host</i>) du [DOM sombre (<i lang="en">shadow DOM</i>)](/fr/docs/Web/API/Web_components/Using_shadow_DOM) contenant le CSS dans lequel il est utilisé (afin de pouvoir sélectionner un élément personnalisé depuis l'intérieur de son DOM sombre), uniquement si le sélecteur fourni comme paramètre de la fonction correspond à un ancêtre de l'hôte sombre à l'emplacement qu'il occupe dans la hiérarchie du DOM.

Normalement, les éléments d'un DOM ombre sont isolés du DOM extérieur. La fonction `:host-context()` vous permet de «&nbsp;jeter un œil à l'extérieur&nbsp;» de ce DOM ombre et de vérifier si l'un des éléments ancêtres correspond à un sélecteur CSS donné. Par exemple, appliquer une couleur de texte différente aux éléments d'une racine ombre lorsqu'une classe `.dark-theme` est appliquée à `<body>`.

Imaginez que vous ayez un élément personnalisé `<greenhouse>`, dans lequel vit un `<chameleon>`. Ici, le `<greenhouse>` est l'hôte du Shadow DOM et l'élément `<chameleon>` se trouve dans le Shadow DOM. La fonction `:host-context()` permet au `<chameleon>` de changer d'apparence en fonction de l'environnement du `<greenhouse>`. Si le `<greenhouse>` se trouve dans un endroit ensoleillé (il a une classe «&nbsp;sunny-theme&nbsp;»), le `<chameleon>` devient jaune. Si le `<greenhouse>` se trouve dans un endroit ombragé (une classe «&nbsp;shady-theme&nbsp;» est appliquée à la place), le `<chameleon>` devient bleu.

Ce sélecteur traverse toutes les limites d'ombre. Il recherchera le thème ensoleillé ou ombragé appliqué directement à la `<greenhouse>` ou à l'un des ancêtres de l'hôte et aux DOM ancêtres jusqu'à atteindre la racine du document.

Pour limiter le sélecteur uniquement à l'hôte `<greenhouse>` directement ou limiter la sélection au DOM de l'hôte, utilisez plutôt la pseudo-classe {{cssxref(":host")}} ou {{cssxref(":host_function", ":host()")}}.

> [!NOTE]
> Cette pseudo-classe n'a aucun effet si elle est utilisée en dehors d'un _shadow DOM_.

La [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity) de `:host-context()` est celle d'une [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes), à laquelle s'ajoute la spécificité du sélecteur passé en argument à la fonction.

{{InteractiveExample("Démonstration CSS&nbsp;: :host-context()", "tabbed-shorter")}}

```css interactive-example
/* Le CSS suivant est appliqué à l'intérieur du shadow DOM. */

:host-context(.container) {
  border: 5px dashed green;
}

:host-context(h1) {
  color: red;
}
```

```html interactive-example
<!-- éléments en dehors du shadow DOM -->
<div class="container">
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
:host-context(h1) {
  font-weight: bold;
}

/* Change la couleur du texte des paragraphes de noir à blanc lorsque
   la classe .dark-theme est appliquée à l'élément body */
p {
  color: black;
}

:host-context(body.dark-theme) p {
  color: white;
}
```

## Syntaxe

```css-nolint
:host-context(<compound-selector>) {
  /* ... */
}
```

## Exemples

### Mettre en forme les hôtes sombres de façon ciblée

Les fragments de code qui suivent sont tirés de notre [exemple sur les sélecteurs d'hôte](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([voir la démonstration](https://mdn.github.io/web-components-examples/host-selectors/)).

Dans cet exemple, on a un élément personnalisé, `<context-span>`, dans lequel on peut écrire du texte&nbsp;:

```html
<h1>
  <a href="#"><context-span>Exemple</context-span></a> pour les sélecteurs
  d'hôte
</h1>
```

Dans le constructeur de l'élément, on crée des éléments `<style>` et `<span>`, et on remplit l'élément `<span>` avec le contenu de l'élément personnalisé, puis on remplit l'élément `<style>` avec quelques règles CSS&nbsp;:

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
  ':host-context(h1):after { content: " - pas de lien dans les titres !" }' +
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgba(0,0,0,0.1); padding: 2px 5px; }";
```

Les règles `:host-context(h1) { font-style: italic; }` et `:host-context(h1):after { content: " - pas de lien dans les titres !" }` mettent en forme les instances de l'élément `<context-span>` (ici l'hôte sombre) contenus dans des éléments `<h1>`. Dans notre exemple, nous avons utilisé ces règles pour afficher clairement que cet élément personnalisé ne devrait pas apparaître dans un élément `<h1>`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les composants web](/fr/docs/Web/API/Web_components)
- La pseudo-classe CSS {{cssxref(":host")}}
- La pseudo-classe CSS {{cssxref(":host_function", ":host()")}}
- La pseudo-classe CSS {{cssxref(":state",":state()")}}
- Le pseudo-élément CSS {{CSSXref("::slotted")}}
- L'élément HTML {{HTMLElement("template")}}
- Le module [CSS scoping](/fr/docs/Web/CSS/CSS_scoping)
