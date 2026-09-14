---
title: "ToggleEvent : propriété oldState"
slug: Web/API/ToggleEvent/oldState
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Popover API")}}

La propriété en lecture seule **`oldState`** de l'interface {{DOMxRef("ToggleEvent")}} est une chaîne de caractères représentant l'état depuis lequel l'élément est en train de transitionner.

## Valeur

Une chaîne de caractères. Les valeurs possibles sont `"open"` (la fenêtre contextuelle est en train d'être affichée) ou `"closed"` (la fenêtre contextuelle est en train d'être masquée).

## Exemples

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.oldState === "open") {
    console.log("La fenêtre contextuelle est en train d'être masquée");
  } else {
    console.log("La fenêtre contextuelle est en train d'être affichée");
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
