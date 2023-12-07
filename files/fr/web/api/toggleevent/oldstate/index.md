---
title: "ToggleEvent: propriété oldState"
short-title: oldState
slug: Web/API/ToggleEvent/oldState
page-type: web-api-instance-property
browser-compat: api.ToggleEvent.oldState
---

{{APIRef("Popover API")}}

La propriété en lecture seule **`oldState`** de l'interface {{domxref("ToggleEvent")}} est une chaîne de caractères représentant l'état depuis lequel l'élément est en train de transitionner.

## Valeur

Une chaîne de caractères. Les valeurs possibles sont `"open"` (le popover est en train d'être affiché) ou `"closed"` (le popover est en train d'être masqué).

## Exemples

```js
const popover = document.getElementById("mypopover");

// ...

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
