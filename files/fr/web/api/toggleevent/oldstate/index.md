---
title: "ToggleEvent : propriété oldState"
slug: Web/API/ToggleEvent/oldState
l10n:
  sourceCommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{APIRef("Popover API")}}

La propriété en lecture seule **`oldState`** de l'interface [`ToggleEvent`](/fr/docs/Web/API/ToggleEvent) est une chaîne de caractères représentant l'état depuis lequel l'élément est en train de transitionner.

## Valeur

Une chaîne de caractères. Les valeurs possibles sont `"open"` (le <i lang="en">popover</i> est en train d'être affiché) ou `"closed"` (le <i lang="en">popover</i> est en train d'être masqué).

## Exemples

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.oldState === "open") {
    console.log("Le popover est en train d'être masqué");
  } else {
    console.log("Le popover est en train d'être affiché");
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
