---
title: ":defined"
slug: Web/CSS/:defined
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:defined`** représente n'importe quel élément ayant été défini. Cela inclut les éléments standards provenant du navigateur, ainsi que les éléments personnalisés (« _custom elements_ ») ayant correctement été définis (c'est-à-dire grâce à la méthode [`CustomElementRegistry.define()`](/fr/docs/Web/API/CustomElementRegistry/define)).

```css
/* Cette règle cible tout élément défini */
:defined {
  font-style: italic;
}

/* Cette règle cible n'importe quelle instance d'un élément personnalisé donné */
simple-custom:defined {
  display: block;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

Les fragments de code qui suivent sont tirés [du dépôt `defined-pseudo-class`](https://github.com/mdn/web-components-examples/tree/master/defined-pseudo-class) ([voir le résultat en _live_](https://mdn.github.io/web-components-examples/defined-pseudo-class/)).

Pour cette démonstration on définit un élément personnalisé trivial :

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

On insère ensuite une copie de cet élément dans le document, à côté d'un paragraphe classique `<p>` :

```html
<simple-custom text="Le texte de l'élément personnalisé"></simple-custom>

<p>Un paragraphe normal</p>
```

Dans la feuille CSS, on inclut d'abord les règles suivantes :

```css
// On utilise deux arrières-plans distincts pour ces deux éléments
p {
  background: yellow;
}

simple-custom {
  background: cyan;
}

// On met en italique le texte de ces deux éléments
:defined {
  font-style: italic;
}
```

Ensuite, on fournit les deux règles suivantes afin de masquer les instances de l'élément personnalisé qui ne sont pas définies et, pour celles qui sont définies, on indique que ce sont des éléments de bloc :

```css
simple-custom:not(:defined) {
  display: none;
}

simple-custom:defined {
  display: block;
}
```

Ces dernières règles sont utiles lorsqu'on a un élément personnalisé complexe qui met du temps à charger : pour ceux-là, on peut vouloir les masquer jusqu'à ce que la définition soit complète afin de ne pas avoir de scintillement d'éléments non mis en forme sur la page.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les composants web](/fr/docs/Web/Web_Components)
