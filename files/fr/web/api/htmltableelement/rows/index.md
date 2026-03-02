---
title: "HTMLTableElement : propriété rows"
short-title: rows
slug: Web/API/HTMLTableElement/rows
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`rows`** de l'interface {{DOMxRef("HTMLTableElement")}} retourne une {{DOMxRef("HTMLCollection")}} dynamique contenant toutes les lignes du tableau, y compris celles présentes dans les éléments HTLML {{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} et {{HTMLElement("tbody")}}.

Bien que la propriété elle-même soit en lecture seule, l'objet retourné est dynamique et permet la modification de son contenu.

## Valeur

Une {{DOMxRef("HTMLCollection")}} fournissant une liste dynamique des objets {{DOMxRef("HTMLTableRowElement")}} représentant tous les éléments HTML {{HTMLElement("tr")}} contenus dans le tableau. Cela permet d'accéder rapidement à toutes les lignes du tableau, sans avoir à les rechercher manuellement.

## Exemples

```js
myRows = myTable.rows;
firstRow = myTable.rows[0];
lastRow = myTable.rows.item(myTable.rows.length - 1);
```

Ceci montre comment vous pouvez utiliser à la fois l'accès par indice et la méthode {{DOMxRef("HTMLCollection.item()")}} pour obtenir des lignes individuelles du tableau.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
