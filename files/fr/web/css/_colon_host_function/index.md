---
title: ":host()"
slug: Web/CSS/:host_function
---

{{CSSRef}}

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:host()`** permet de sélectionner l'hôte du _shadow DOM_ contenant le CSS à utiliser, uniquement si le sélecteur passé en argument correspond à l'élément hôte.

Le scénario principal pour utiliser cette fonction consiste à vouloir cibler une certaine classe d'éléments personnalisés : pour cela, on passera la classe comme argument de la fonction `:host()`. Cette fonction ne peut pas être utilisée avec un sélecteur de descendant, pour cela il faudra utiliser {{cssxref(":host-context()")}}.

> **Note :** Cette fonction n'a aucun effet si elle est utilisée en dehors d'un _shadow DOM_.

```css
/* On cible l'hôte du shadow DOM uniquement s'il
   correspond au sélecteur passé en argument */
:host(.special-custom-element) {
  font-weight: bold;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

Les fragments de code suivants sont extraits du dépôt d'exemple [_host-selectors_](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([voir le résultat en direct](https://mdn.github.io/web-components-examples/host-selectors/)).

Dans cet exemple, on dispose d'un élément personnalisé, `<context-span>`, qui peut contenir du texte :

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Dans le constructeur de l'élément, on crée un élément `style` et un élément `span`. Ce dernier recevra le contenu textuel de l'élément personnalisé et l'élément `style` recevra quelques règles CSS :

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

La règle `:host(.footer) { color : red; }` s'applique à toutes les instances de l'élément `<context-span>` (il s'agit ici de l'hôte) du document qui possèdent la classe `footer`. Ici, pour ces éléments donnés, on utilise une couleur spécifique.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les composants web](/fr/docs/Web/Web_Components)
- {{cssxref(":host")}}
- {{cssxref(":host-context()")}}
