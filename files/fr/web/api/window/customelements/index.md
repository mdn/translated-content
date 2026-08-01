---
title: "Window : propriété customElements"
short-title: customElements
slug: Web/API/Window/customElements
l10n:
  sourceCommit: 26c6aca187b3718498886f9fba6c1cc4f4833b5d
---

{{APIRef("Web Components")}}

La propriété en lecture seule **`customElements`** de l'interface {{DOMxRef("Window")}} retourne une référence à l'objet global {{DOMxRef("CustomElementRegistry")}}, qui peut être utilisé pour enregistrer de nouveaux [éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements) et obtenir des informations sur les éléments personnalisés déjà enregistrés.

Le registre global est utilisé pour enregistrer des éléments personnalisés par défaut, mais une racine d'ombre peut choisir d'utiliser un [registre d'éléments personnalisés avec portée](/fr/docs/Web/API/Web_components/Using_custom_elements#registres_des_éléments_personnalisés_avec_portée) afin d'éviter d'éventuels conflits dans les noms d'éléments définis.

## Valeur

Un objet {{DOMxRef("CustomElementRegistry")}}.

## Exemples

### Utilisation simple

L'exemple le plus courant que vous voyez de cette propriété utilisée est d'accéder à la méthode {{DOMxRef("CustomElementRegistry.define()")}} pour définir et enregistrer un nouvel élément personnalisé.

Par exemple&nbsp;:

```js
let registreElementsPersonnalises = window.customElements;
registreElementsPersonnalises.define(
  "mon-element-personnalise",
  MonElementPersonnalise,
);
```

Notez que la classe d'élément personnalisé est couramment définie directement à l'intérieur de l'appel `define()`, comme illustré&nbsp;:

```js
customElements.define(
  "details-element",
  class extends HTMLElement {
    constructor() {
      super();
      const modele = document.getElementById("modele-details-element");
      const racineOmbre = this.attachShadow({ mode: "open" }).appendChild(
        document.importNode(modele.content, true),
      );
    }
  },
);
```

Voir notre dépôt [web-components-examples <sup>(angl.)</sup>](https://github.com/mdn/web-components-examples/) pour davantage d'exemples d'utilisation.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
