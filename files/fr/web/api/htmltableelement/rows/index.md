---
title: "HTMLTableElement : propriété rows"
short-title: rows
slug: Web/API/HTMLTableElement/rows
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`rows`** de l'interface {{DOMxRef("HTMLTableElement")}} retourne une {{DOMxRef("HTMLCollection")}} dynamique contenant tous les éléments {{HTMLElement("tr")}} qui sont des enfants de l'élément {{HTMLElement("table")}} donné, ou des enfants de l'un des éléments {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} et {{HTMLElement("tfoot")}} du tableau. Les membres du `<thead>` apparaissent en premier, suivis des membres du `<tbody>` et du tableau lui-même, et les membres du `<tfoot>` viennent en dernier, triés selon l'ordre dans l'arbre pour chaque groupe.

Bien que la propriété soit en lecture seule, l'objet retourné est dynamique et est automatiquement mis à jour lorsque le `HTMLTableElement` change.

## Valeur

Une collection ({{DOMxRef("HTMLCollection")}}) dynamique d'objets {{DOMxRef("HTMLTableRowElement")}}.

## Exemples

```js
const myRows = myTable.rows;
const firstRow = myTable.rows[0];
const lastRow = myTable.rows.item(myTable.rows.length - 1);
```

Ceci montre comment vous pouvez utiliser à la fois l'accès par indice et la méthode {{DOMxRef("HTMLCollection.item()")}} pour obtenir des lignes individuelles du tableau.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTableElement.insertRow()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteRow()")}}
