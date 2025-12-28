---
title: "AbortSignal : propriété aborted"
short-title: aborted
slug: Web/API/AbortSignal/aborted
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

La propriété en lecture seule **`aborted`** de l'interface {{DOMxRef("AbortSignal")}} retourne une valeur qui indique si les opérations asynchrones avec lesquelles le signal communique sont annulées (`true`) ou non (`false`).

## Valeur

`true` (annulée) ou `false`

## Exemples

Dans l'extrait suivant, nous créons un nouvel objet `AbortController` et récupérons son {{DOMxRef("AbortSignal")}} (disponible via la propriété `signal`).
Ensuite, à l'aide de la propriété `aborted`, nous vérifions si le signal a été annulé et envoyons un message approprié dans la console.

```js
const controller = new AbortController();
const signal = controller.signal;

// …

if (signal.aborted) {
  console.log("La requête a été annulée");
} else {
  console.log("La requête n'a pas été annulée");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
