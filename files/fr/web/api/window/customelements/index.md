---
title: Window.customElements
slug: Web/API/Window/customElements
---

{{APIRef}}

La propriété en lecture seule `customElements` de l'interface {{domxref("Window")}} renvoie une référence à l'objet {{domxref("CustomElementRegistry")}}, qui peut être utilisée pour enregistrer de nouveaux [éléments personnalisés](/fr-FR/docs/Web/Web_Components/Using_custom_elements) et obtenir des informations sur des éléments personnalisés enregistrés.

## Syntaxe

```js
let registreElementsPersonnalises = window.customElements;
```

### Valeur retournée

Une instance d'objet {{domxref("CustomElementRegistry")}} représentant le registre des éléments personnalisés pour la fenêtre en cours.

## Exemples

L'exemple le plus courant d'utilisation de cette propriété que vous verrez sera d'obtenir l'accès à la méthode {{domxref ("CustomElementRegistry.define()")}} pour définir et enregistrer un nouvel élément personnalisé, par exemple :

```js
let registreElementsPersonnalises = window.customElements;
registreElementsPersonnalises.define(
  "mon-element-personnalise",
  MonElementPersonnalise,
);
```

Cependant, il est généralement raccourci en quelque chose comme :

```js
customElements.define(
  "details-element",
  class extends HTMLElement {
    constructor() {
      super();
      const modele = document.getElementById("modele-details-element").content;
      const racineOmbre = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true),
      );
    }
  },
);
```

Voir notre repo [web-components-examples](https://github.com/mdn/web-components-examples/) pour davantage d'exemples d'utilisation.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
