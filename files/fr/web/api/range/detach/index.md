---
title: Range.detach()
slug: Web/API/Range/detach
---

{{ApiRef("DOM")}}

La méthode **`Range.detach()`** n'a aucun effet. Elle permet de désactiver l'objet {{domxref("Range")}} et de libérer les ressources associées. Cette méthode a été conservée pour des raisons de compatibilités.

## Syntaxe

```js
range.detach();
```

## Exemple

```js
var range = document.createRange();

range.selectNode(document.getElementsByTagName("div").item(0));
range.detach();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [The DOM interfaces index](/fr/docs/Web/API/Document_Object_Model)
