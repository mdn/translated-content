---
title: Document.hidden
slug: Web/API/Document/hidden
---

{{ ApiRef("DOM") }}

La propriété **`Document.hidden`** retourne un Booléen qui indique si la page est considérée cachée ou pas.

## Syntaxe

```js
var boolean = document.hidden;
```

## Exemples

```js
document.addEventListener("visibilitychange", function () {
  console.log(document.hidden);
  // Modifier le comportement...
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
