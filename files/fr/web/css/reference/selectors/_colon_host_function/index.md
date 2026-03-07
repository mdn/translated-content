---
title: :host()
slug: Web/CSS/Reference/Selectors/:host_function
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:host()`** sélectionne l'hôte du [DOM d'ombre](/fr/docs/Web/API/Web_components/Using_shadow_DOM) contenant le CSS à utiliser à l'intérieur (vous pouvez donc sélectionner un élément personnalisé depuis l'intérieur de son DOM d'ombre) — mais uniquement si le sélecteur donné en paramètre de la fonction correspond à l'hôte d'ombre. **`:host()`** n'a aucun effet lorsqu'il est utilisé en dehors d'un DOM d'ombre.

L'utilisation la plus évidente consiste à mettre un nom de classe uniquement sur certaines instances d'éléments personnalisés, puis à inclure le sélecteur de classe correspondant comme argument de la fonction. Vous ne pouvez pas utiliser cela avec une expression de sélecteur de descendant pour ne sélectionner que les instances de l'élément personnalisé qui sont à l'intérieur d'un ancêtre particulier. C'est le rôle de {{CSSxRef(":host-context()")}}.

> [!NOTE]
> Alors que d'autres pseudo-classes fonctionnelles telles que {{CSSxRef(":is()")}} et {{CSSxRef(":not()")}} acceptent une liste de sélecteurs comme paramètres, `:host()` prend un seul sélecteur composé comme paramètre. De plus, alors que `:is()` et `:not()` ne prennent en compte que la spécificité de leur argument, la spécificité de `:host()` est à la fois la spécificité de la pseudo-classe **et** la spécificité de son argument.

{{InteractiveExample("Démonstration CSS&nbsp;: :host()", "tabbed-shorter")}}

```css interactive-example
/* Le CSS suivant est appliqué à l'intérieur du DOM d'ombre. */

:host(h1) {
  color: red;
}

:host(#shadow-dom-host) {
  border: 2px dashed blue;
}
```

```html interactive-example
<!-- éléments en dehors du DOM d'ombre -->
<div id="container">
  <h1 id="shadow-dom-host"></h1>
</div>
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

### Sélection de styles pour les hôtes d'ombre

Les fragments de code suivants sont extraits du dépôt [d'exemple _host-selectors_ <sup>(angl.)</sup>](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([voir le résultat en direct <sup>(angl.)</sup>](https://mdn.github.io/web-components-examples/host-selectors/)).

Dans cet exemple, on dispose d'un élément personnalisé — `<context-span>` — qui peut contenir du texte&nbsp;:

```html
<h1>
  Sélecteurs d'hôte <a href="#"><context-span>exemple</context-span></a>
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
- La pseudo-classe {{CSSxRef(":host")}}
- La fonction de pseudo-classe {{CSSxRef(":host-context()")}}
- La fonction de pseudo-classe {{CSSxRef(":state()")}}
