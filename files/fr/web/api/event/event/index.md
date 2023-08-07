---
title: Event()
slug: Web/API/Event/Event
---

{{APIRef("DOM")}}

Le constructeur **`Event()`** crée un nouvel {{domxref("Event")}} (_évènement_).

## Syntaxe

```js
event = new Event(typeArg, eventInit);
```

### Valeurs

- _typeArg_
  - : C'est une {{domxref("DOMString")}} (_chaîne de caractères_) représentant le nom de l'évènement.
- _eventInit_{{optional_inline}}

  - : C'est un dictionnaire `EventInit` ayant les champs suivants :

    - `bubbles`: (facultatif) un {{jsxref("Boolean")}} indiquant si les événements sont propagés . Par défaut est `false` (_faux_).
    - `cancelable`: (facultatif) un {{jsxref("Boolean")}} indiquant si l'évènement peut être annulé. Par défaut est `false` (_faux_) .
    - `composed`: ( facultatif ) un {{jsxref("Boolean")}} indiquant si l'évènement déclenchera les écouteurs en dehors d'une racine shadow (voir {{domxref("Event.composed")}} pour plus de détails). Par défaut est `false` (_faux_) .

## Exemple

```js
// crée un évènement "look" qui est diffusé et ne peut être annulé
var evt = new Event("look", { bubbles: true, cancelable: false });
document.dispatchEvent(evt);

// l'événement peut être envoyé à partir de n'importe quel élément, pas seulement le document
myDiv.dispatchEvent(evt);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Event")}}
