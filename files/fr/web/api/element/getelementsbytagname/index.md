---
title: "Element : méthode getElementsByTagName()"
short-title: getElementsByTagName()
slug: Web/API/Element/getElementsByTagName
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("DOM")}}

La méthode **`getElementsByTagName()`** de l'interface {{DOMxRef("Element")}} retourne une collection {{DOMxRef("HTMLCollection")}} dynamique d'éléments ayant le [nom de balise](/fr/docs/Web/API/Element/tagName) donné.

Tous les descendants de l'élément défini sont recherchés, mais pas l'élément lui-même. La liste retournée est _dynamique_, ce qui signifie qu'elle se met à jour automatiquement avec l'arbre DOM. Par conséquent, il n'est pas nécessaire d'appeler `Element.getElementsByTagName()` avec le même élément et les mêmes arguments de manière répétée si le DOM change entre les appels.

Lorsqu'elle est appelée sur un élément HTML dans un document HTML, `getElementsByTagName` met en minuscules l'argument avant de le rechercher. C'est indésirable lorsqu'on essaie de faire correspondre des éléments SVG en {{Glossary("camel_case", "casse-de-chameau")}} (comme {{SVGElement("linearGradient")}}) dans un document HTML. Utilisez plutôt {{DOMxRef("Element.getElementsByTagNameNS()")}}, qui préserve la capitalisation du nom de la balise.

`Element.getElementsByTagName` est similaire à {{DOMxRef("Document.getElementsByTagName()")}}, sauf qu'elle ne recherche que les éléments qui sont des descendants de l'élément défini.

## Syntaxe

```js-nolint
getElementsByTagName(tagName)
```

### Paramètres

- `tagName`
  - : Le nom qualifié à rechercher. La chaîne de caractères spéciale `"*"` représente tous les éléments. Pour la compatibilité avec XHTML, les minuscules doivent être utilisées.

### Valeur de retour

Une collection {{DOMxRef("HTMLCollection")}} _dynamique_ d'éléments ayant un nom de balise correspondant, dans l'ordre dans lequel ils apparaissent. Si aucun élément n'est trouvé, la `HTMLCollection` est vide.

## Exemples

```js
// Vérifie le statut de chaque cellule de données dans un tableau
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagName("td");

for (const cell of cells) {
  const status = cell.getAttribute("data-status");
  if (status === "open") {
    // Saisir les données
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
