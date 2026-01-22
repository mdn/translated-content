---
title: "HTMLTableElement : propriété rules"
short-title: rules
slug: Web/API/HTMLTableElement/rules
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`rules`** de l'interface {{DOMxRef("HTMLTableElement")}} indique quelles bordures de cellules doivent être affichées dans le tableau.

## Valeur

L'une des valeurs suivantes&nbsp;:

- `none`
  - : Aucune bordure
- `groups`
  - : Lignes uniquement entre les groupes
- `rows`
  - : Lignes entre les lignes
- `cols`
  - : Lignes entre les colonnes
- `all`
  - : Lignes entre toutes les cellules

## Exemples

```js
// Activer toutes les bordures internes d'un tableau
const t = document.getElementById("TableID");
t.rules = "all";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
