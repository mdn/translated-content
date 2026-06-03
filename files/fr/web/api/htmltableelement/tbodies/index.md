---
title: "HTMLTableElement : propriété tBodies"
short-title: tBodies
slug: Web/API/HTMLTableElement/tBodies
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`tBodies`** de l'interface {{DOMxRef("HTMLTableElement")}} retourne une collection ({{DOMxRef("HTMLCollection")}}) dynamique des corps d'un tableau ({{HTMLElement("table")}}).

Bien que la propriété soit en lecture seule, l'objet retourné est dynamique et permet la modification de son contenu.

La collection retournée inclut les éléments HTML {{HTMLElement("tbody")}} implicites. Par exemple&nbsp;:

```html
<table>
  <tr>
    <td>cell one</td>
  </tr>
</table>
```

Le DOM HTML généré à partir du code ci-dessus comportera un élément {{HTMLElement("tbody")}} même si les balises ne sont pas présentes dans le code source HTML.

## Valeur

Une collection ({{DOMxRef("HTMLCollection")}}) dynamique.

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

- L'interface {{DOMxRef("HTMLCollection")}}
- L'élément HTML {{HTMLElement("tbody")}}
