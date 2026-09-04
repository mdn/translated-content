---
title: "Element : méthode getElementsByTagNameNS()"
short-title: getElementsByTagNameNS()
slug: Web/API/Element/getElementsByTagNameNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

La méthode **`getElementsByTagNameNS()`** de l'interface {{DOMxRef("Element")}} retourne une collection {{DOMxRef("HTMLCollection")}} dynamique avec le nom de balise donné appartenant à l'espace de noms donné. Elle est semblable à la méthode {{DOMxRef("Document.getElementsByTagNameNS")}} mais cette dernière recherche sur l'ensemble du document tandis que `getElementsByTagNameNS()` recherche parmi les descendants de l'élément courant.

## Syntaxe

```js-nolint
getElementsByTagNameNS(namespaceURI, localName)
```

### Paramètres

- `namespaceURI`
  - : L'URI de l'espace de noms des éléments à rechercher (cf. {{DOMxRef("Element.namespaceURI")}} et {{DOMxRef("Attr.namespaceURI")}}). Par exemple, si vous recherchez des éléments XHTML, utilisez l'URI d'espace de noms XHTML, `http://www.w3.org/1999/xhtml`.
- `localName`
  - : Le nom local des éléments à rechercher ou la valeur spéciale `"*"`, qui correspond à tous les éléments (cf. {{DOMxRef("Element.localName")}} et {{DOMxRef("Attr.localName")}}).

### Valeur de retour

Une collection {{DOMxRef("HTMLCollection")}} dynamique des éléments trouvés, dans l'ordre d'apparition dans l'arbre du DOM.

## Exemples

```js
// Vérifie le statut de chaque cellule de données dans un tableau
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagNameNS(
  "http://www.w3.org/1999/xhtml",
  "td",
);

for (const cell of cells) {
  const axis = cell.getAttribute("axis");
  if (axis === "year") {
    // Saisir les données
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
