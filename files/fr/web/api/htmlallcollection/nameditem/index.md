---
title: "HTMLAllCollection : méthode namedItem()"
short-title: namedItem()
slug: Web/API/HTMLAllCollection/namedItem
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{APIRef("DOM")}}

La méthode **`namedItem()`** de l'interface {{DOMxRef("HTMLAllCollection")}} retourne le premier {{DOMxRef("Element")}} de la collection dont l'attribut `id` ou `name` correspond au nom défini, ou `null` si aucun élément ne correspond.

## Syntaxe

```js-nolint
namedItem(name)
```

### Paramètres

- `name`
  - : Une chaîne de caractères représentant la valeur de l'attribut `id` ou `name` de l'élément recherché.

### Valeur de retour

Le premier {{DOMxRef("Element")}} dans la {{DOMxRef("HTMLAllCollection")}} correspondant au `name`, ou [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null), s'il n'y en a aucun.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
