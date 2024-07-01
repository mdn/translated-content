---
title: Event.bubbles
slug: Web/API/Event/bubbles
---

{{ ApiRef("DOM") }}

Indique si l'événement donné se propage à travers le DOM ou non.

> **Note :** Voir [Propagation et capture des évènements](/fr/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture) pour plus d'informations sur la propagation.

## Syntaxe

```js
event.bubbles;
```

### Valeur

Retourne un booléen dont la valeur est `true` (_vraie_) si l'événement se propage à travers le DOM.

## Exemple

```js
function goInput(e) {
  // vérifie la propagation et
  if (!e.bubbles) {
    // la lance si elle ne l'a pas été
    passItOn(e);
  }
  // déjà propagé
  doOutput(e);
}
```

> **Note :** Certains évènements seulement peuvent se propager. Ceux dont cette propriété est définie à `true`. Vous pouvez utiliser cette propriété pour vérifier si un évènement est autorisé à se propager ou non.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [stopPropagation](/fr/docs/Web/API/Event/stopPropagation) pour empêcher la propagation
