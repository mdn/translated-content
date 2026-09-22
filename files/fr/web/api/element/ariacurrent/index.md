---
title: "Element : propriété ariaCurrent"
short-title: ariaCurrent
slug: Web/API/Element/ariaCurrent
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaCurrent`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-current`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current), qui indique l'élément représentant l'élément actuel dans un conteneur ou un ensemble d'éléments liés.

## Valeur

Une chaîne de caractères contenant l'une des valeurs suivantes&nbsp;:

- `"page"`
  - : Représente la page actuelle dans un ensemble de pages.
- `"step"`
  - : Représente l'étape actuelle dans un processus.
- `"location"`
  - : Représente l'emplacement actuel, par exemple la page actuelle dans une hiérarchie de fil d'Ariane.
- `"date"`
  - : Représente la date actuelle dans une collection de dates.
- `"time"`
  - : Représente l'heure actuelle dans un ensemble d'heures.
- `"true"`
  - : Représente l'élément actuel dans un ensemble.
- `"false"`
  - : Ne représente pas l'élément actuel dans un ensemble.

## Exemples

Dans cet exemple, un ensemble de liens est utilisé pour la navigation sur le site. L'attribut `aria-current` indique la page actuelle. La valeur `page` est intégrée dans l'annonce du lecteur d'écran. En utilisant `ariaCurrent`, nous pouvons mettre à jour cette valeur.

```html
<nav>
  <ul>
    <li><a id="lien-accueil" href="/" aria-current="page">Accueil</a></li>
    <li><a href="/">À propos</a></li>
    <li><a href="/">Contact</a></li>
  </ul>
</nav>
```

```js
let el = document.getElementById("lien-accueil");
console.log(el.ariaCurrent); // "page"
el.ariaCurrent = "tab";
console.log(el.ariaCurrent); // "tab"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'attribut `aria-current` <sup>(angl.)</sup>](https://tink.uk/using-the-aria-current-attribute/)
