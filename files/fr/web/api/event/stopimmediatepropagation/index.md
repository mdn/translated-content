---
title: Event.stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
---

{{APIRef("DOM")}}

La méthode **`stopImmediatePropagation()`**, rattachée à l'interface {{domxref("Event")}}, empêche les gestionnaires d'évènement, associés à ce même évènement, d'être appelés.

Si plusieurs gestionnaires d'évènement sont attachés à un élément pour le même type d'évènement, ils sont appelés dans l'ordre dans lequel ils ont été ajoutés. Si `stopImmediatePropagation()` est appelé pendant un de ces appels, les gestionnaires restants ne sont pas invoqués.

## Syntaxe

```js
event.stopImmediatePropagation();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
