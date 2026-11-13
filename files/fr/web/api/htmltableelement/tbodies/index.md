---
title: "HTMLTableElement : propriété tBodies"
short-title: tBodies
slug: Web/API/HTMLTableElement/tBodies
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`tBodies`** de l'interface {{DOMxRef("HTMLTableElement")}} retourne une {{DOMxRef("HTMLCollection")}} dynamique contenant tous les éléments {{HTMLElement("tbody")}} qui sont des enfants de l'élément {{HTMLElement("table")}} donné.

Bien que la propriété soit en lecture seule, l'objet retourné est dynamique et est automatiquement mis à jour lorsque le `HTMLTableElement` change.

La collection retournée inclut les éléments HTML {{HTMLElement("tbody")}} implicites. Par exemple&nbsp;:

```html
<table>
  <tr>
    <td>cell one</td>
  </tr>
</table>
```

Le DOM HTML généré à partir du code ci-dessus comporte un élément {{HTMLElement("tbody")}} même si les balises ne sont pas présentes dans le code source HTML.

## Valeur

Une collection dynamique ({{DOMxRef("HTMLCollection")}}) d'objets {{DOMxRef("HTMLTableSectionElement")}} (qui sont tous des `tbody`).

## Exemples

Cet extrait récupère le nombre de corps dans un tableau.

```js
myTable.tBodies.length;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTableElement.caption")}}
- La propriété {{DOMxRef("HTMLTableElement.tFoot")}}
- La propriété {{DOMxRef("HTMLTableElement.tHead")}}
- La méthode {{DOMxRef("HTMLTableElement.createTBody()")}}
