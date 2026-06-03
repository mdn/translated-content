---
title: "Window : propriété customElements"
short-title: customElements
slug: Web/API/Window/customElements
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("Web Components")}}

La propriété en lecture seule **`customElements`** de l'interface {{DOMxRef("Window")}} retourne une référence à l'objet {{DOMxRef("CustomElementRegistry")}}, qui peut être utilisé pour enregistrer de nouveaux [éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements) et obtenir des informations sur les éléments personnalisés déjà enregistrés.

## Exemples

L'exemple le plus courant d'utilisation de cette propriété que vous verrez sera d'obtenir l'accès à la méthode {{DOMxRef("CustomElementRegistry.define()")}} pour définir et enregistrer un nouvel élément personnalisé, par exemple&nbsp;:

```js
let registreElementsPersonnalises = window.customElements;
registreElementsPersonnalises.define(
  "mon-element-personnalise",
  MonElementPersonnalise,
);
```

Cependant, il est généralement raccourci en quelque chose comme&nbsp;:

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
