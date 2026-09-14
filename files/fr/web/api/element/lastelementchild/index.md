---
title: "Element : propriété lastElementChild"
short-title: lastElementChild
slug: Web/API/Element/lastElementChild
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La propriété en lecture seule **`lastElementChild`** de l'interface {{DOMxRef("Element")}} retourne le dernier élément {{DOMxRef("Element")}} enfant, ou `null` s'il n'y a pas d'éléments enfants.

`Element.lastElementChild` n'inclut que les nœuds qui sont des éléments.
Pour obtenir tous les nœuds enfants, y compris ceux qui ne sont pas des éléments comme les nœuds de texte et de commentaires, utilisez {{DOMxRef("Node.lastChild")}}.

## Valeur

Un objet {{DOMxRef("Element")}}, ou `null`.

## Exemples

```html
<ul id="liste">
  <li>Premier (1)</li>
  <li>Second (2)</li>
  <li>Troisième (3)</li>
</ul>
```

```js
const liste = document.getElementById("liste");
console.log(liste.lastElementChild.textContent);
// affiche "Troisième (3)"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.previousElementSibling")}}
- La propriété {{DOMxRef("Element.firstElementChild")}}
