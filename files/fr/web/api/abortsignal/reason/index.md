---
title: "AbortSignal : propriété reason"
short-title: reason
slug: Web/API/AbortSignal/reason
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

La propriété en lecture seule **`reason`** de l'interface {{DOMxRef("AbortSignal")}} retourne une valeur JavaScript qui indique la raison de l'annulation.

La propriété vaut `undefined` lorsque le signal n'a pas été annulé.
Elle peut être définie à une valeur spécifique lorsque le signal est annulé, en utilisant {{DOMxRef("AbortController.abort()")}} ou {{DOMxRef("AbortSignal/abort_static", "AbortSignal.abort()")}}.
Si elle n'est pas explicitement définie dans ces méthodes, elle prend la valeur par défaut {{DOMxRef("DOMException")}} `"AbortError"`.

## Valeur

Une valeur JavaScript qui indique la raison de l'annulation, ou `undefined` si le signal n'est pas annulé.

## Exemples

Dans l'extrait suivant, nous créons un nouvel objet `AbortController` et récupérons son {{DOMxRef("AbortSignal")}} (disponible via la propriété `signal`).
Ensuite, à l'aide de la propriété `aborted`, nous vérifions si le signal a été annulé et affichons le statut d'annulation et la raison dans la console.

```js
const controller = new AbortController();
const signal = controller.signal;

// …

if (signal.aborted) {
  if (signal.reason) {
    console.log(`Requête annulée avec la raison : ${signal.reason}`);
  } else {
    console.log("Requête annulée mais aucune raison n'a été fournie.");
  }
} else {
  console.log("La requête n'est pas annulée");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
