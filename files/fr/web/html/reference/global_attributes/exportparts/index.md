---
title: "Attribut HTML universel : exportparts"
short-title: exportparts
slug: Web/HTML/Reference/Global_attributes/exportparts
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`exportparts`** permet de sélectionner et de mettre en forme des éléments présents dans des {{Glossary("shadow tree", "arbres d'ombre")}} imbriqués, en exportant leurs noms de `part`.

L'arbre d'ombre est une structure isolée où les identifiants, classes et styles ne peuvent pas être atteints par les sélecteurs ou requêtes du DOM classique. Deux attributs HTML peuvent être appliqués aux éléments d'un arbre d'ombre pour permettre de cibler des styles CSS depuis l'extérieur&nbsp;: `part` et `exportparts`.

L'attribut universel [`part`](/fr/docs/Web/HTML/Reference/Global_attributes/part) rend un élément d'arbre d'ombre visible pour son DOM parent. Un nom de `part` est utilisé comme paramètre du pseudo-élément {{CSSxRef("::part", "::part()")}}. De cette façon, vous pouvez appliquer des styles CSS à des éléments dans l'arbre d'ombre depuis l'extérieur. Cependant, le pseudo-élément `::part()` n'est visible que pour le DOM parent. Cela signifie que lorsqu'un arbre d'ombre est imbriqué, les parties ne sont pas visibles pour les ancêtres autres que le parent direct. L'attribut `exportparts` résout cette limitation.

L'attribut `exportparts` permet de rendre visibles les parties d'un arbre d'ombre en dehors du shadow DOM. Ce concept est appelé «&nbsp;exportation&nbsp;». L'attribut `exportparts` est placé sur _l'hôte d'ombre_ (<i lang="en">shadow host</i> en anglais), c'est-à-dire l'élément auquel _l'arbre d'ombre_ (<i lang="en">shadow tree</i> en anglais) est attaché. La valeur de cet attribut est une liste de noms de `part` séparés par des virgules, présents dans l'arbre d'ombre. Ces noms sont rendus disponibles pour les DOM extérieurs à la structure courante.

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

Lorsque vous exportez un `part`, vous avez la possibilité d'attribuer un nom différent à la partie, comme illustré dans l'extrait ci-dessous. La valeur de l'attribut `exportparts` est en réalité une liste de correspondances de noms de parties, séparées par des virgules. Ainsi, l'attribut `exportparts` dans l'exemple de code ci-dessus équivaut à `exportparts="part1:part1, part2:part2, part5:part5"`, ce qui indique que chaque `part` est exporté avec le même nom. Dans chaque correspondance, la première chaîne indique le nom de la partie dans l'arbre d'ombre, et la seconde chaîne indique le nom sous lequel la partie sera exposée à l'extérieur.

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>
```

## Exemples

### Composant simple

Pour montrer comment `exportparts` est utilisé pour cibler des parties au sein de composants imbriqués, nous allons créer un composant, puis l'imbriquer dans un autre composant.

#### HTML

Commencez par créer un composant de carte que nous envelopperons ensuite dans un autre composant. Nous utilisons également le nouvel élément créé, en remplissant les slots avec du texte simple comme contenu.

```html
<template id="card-component-template">
  <style>
    :host {
      display: block;
    }
  </style>
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>

<card-component>
  <p slot="header_slot">Ceci est l'en-tête</p>
  <p slot="body_slot">Ceci est le corps</p>
  <p slot="footer_slot">Ceci est le pied de page</p>
</card-component>
```

#### JavaScript

Nous utilisons JavaScript pour définir le composant web décrit dans l'exemple HTML ci-dessus&nbsp;:

```js
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // Toujours appeler super en premier dans le constructeur
      const template = document.getElementById("card-component-template");
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(document.importNode(template.content, true));
    }
  },
);
```

#### CSS

Nous stylons des parties de l'arbre d'ombre du `<card-component>` en utilisant le pseudo-élément CSS {{CSSxRef("::part")}}&nbsp;:

```css
::part(body) {
  color: red;
  font-style: italic;
}
```

#### Résultats

{{EmbedLiveSample("Composant simple", "100%", 160)}}

### Composant imbriqué

En poursuivant l'exemple du `<card-component>`, nous créons un composant imbriqué en enveloppant le `<card-component>` dans un autre composant&nbsp;; ici, le composant `<card-wrapper>`. Nous exportons ensuite, via l'attribut `exportparts`, les parties du composant imbriqué que nous souhaitons rendre stylables depuis l'extérieur de son arbre d'ombre.

#### HTML

```html hidden
<template id="card-component-template">
  <style>
    :host {
      display: block;
    }
  </style>
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>
```

```html
<template id="card-wrapper">
  <style>
    :host {
      display: block;
    }
  </style>
  <card-component exportparts="base, header, body">
    <slot name="H" slot="header_slot"></slot>
    <slot name="B" slot="body_slot"></slot>
    <slot name="F" slot="footer_slot"></slot>
  </card-component>
</template>
```

Nous incluons un élément personnalisé `<card-wrapper>`, et un `<card-component>` pour comparaison&nbsp;:

```html
<h2>Carte englobante</h2>

<card-wrapper>
  <p slot="H">Ceci est l'en-tête</p>
  <p slot="B">Ceci est le corps</p>
  <p slot="F">Ceci est le pied de page</p>
</card-wrapper>

<h2>Composant de carte</h2>

<card-component>
  <p slot="header_slot">Ceci est l'en-tête</p>
  <p slot="body_slot">Ceci est le corps</p>
  <p slot="footer_slot">Ceci est le pied de page</p>
</card-component>
```

#### JavaScript

```js hidden
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // Toujours appeler super en premier dans le constructeur
      const template = document.getElementById("card-component-template");
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(document.importNode(template.content, true));
    }
  },
);
```

```js
customElements.define(
  "card-wrapper",
  class extends HTMLElement {
    constructor() {
      super(); // Toujours appeler super en premier dans le constructeur
      const template = document.getElementById("card-wrapper");
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(document.importNode(template.content, true));
    }
  },
);
```

#### CSS

Nous pouvons cibler les parts du `<card-component>` directement, et lorsqu'il est imbriqué dans un `<card-wrapper>`, comme suit&nbsp;:

```css
h2 {
  background-color: #dedede;
}

card-wrapper,
card-component {
  border: 1px dashed blue;
  width: fit-content;
}

::part(body) {
  color: red;
  font-style: italic;
}

::part(header),
::part(footer) {
  font-weight: bold;
}
```

#### Résultats

{{EmbedLiveSample("Composant imbriqué", "100%", 400)}}

Notez que `footer` n'est pas en gras lorsqu'il est imbriqué, car nous ne l'avons pas inclus dans `exportparts`.

### Exposer des parties mappées

Pour renommer des parts exportées, incluez une liste séparée par des virgules de mappings, chaque mapping contenant le nom original et le nom exporté séparés par deux-points (`:`)&nbsp;:

#### HTML

Nous mettons à jour le composant `<card-wrapper>` précédent avec la syntaxe de remappage (en omettant `body` de la liste des parts exportées)&nbsp;:

```html hidden
<template id="card-component-template">
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>

<card-wrapper>
  <p slot="H">Ceci est l'en-tête</p>
  <p slot="B">Ceci est le corps</p>
  <p slot="F">Ceci est le pied de page</p>
</card-wrapper>
```

```html
<template id="card-wrapper">
  <card-component
    exportparts="
       base:card__base,
       header:card__header,
       footer:card__footer
     ">
    <span slot="header_slot"><slot name="H"></slot></span>
    <span slot="body_slot"><slot name="B"></slot></span>
    <span slot="footer_slot"><slot name="F"></slot></span>
  </card-component>
</template>
```

#### JavaScript

```js hidden
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // Toujours appeler super en premier dans le constructeur
      const template = document.getElementById("card-component-template");
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(document.importNode(template.content, true));
    }
  },
);
```

```js
customElements.define(
  "card-wrapper",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const template = document.getElementById("card-wrapper");
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(document.importNode(template.content, true));
    }
  },
);
```

#### CSS

Lors du ciblage des parts du `<card-component>` depuis l'intérieur du `<card-wrapper>`, on ne peut styliser que les parts exportées via leurs noms exposés&nbsp;:

```css
/* sélectionne le nom des parties exportées */
::part(card__header) {
  font-weight: bold;
}
/* ne sélectionne rien : ces noms de parties n'ont pas été exportés */
::part(footer),
::part(body) {
  font-weight: bold;
}
```

#### Résultats

{{EmbedLiveSample("Exposer des parties mappées", "100%", 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML [`part`](/fr/docs/Web/HTML/Reference/Global_attributes/part)
- Les éléments HTML {{HTMLElement("template")}} et {{HTMLElement("slot")}}
- Les pseudo-éléments CSS {{CSSxRef("::part")}} et {{CSSxRef("::slotted")}}
- La pseudo-classe CSS {{CSSxRef(":host")}}
- L'interface API {{DOMxRef("ShadowRoot")}}
- La propriété API {{DOMxRef("Element.part")}}
- [Utilisation des templates et des slots](/fr/docs/Web/API/Web_components/Using_templates_and_slots)
- Le guide [de la portée CSS](/fr/docs/Web/CSS/Guides/Scoping)
