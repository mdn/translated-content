---
title: Event.bubbles
slug: Web/API/Event/bubbles
tags:
  - API
  - DOM
  - Propagation
  - Propriétés
  - évènements
translation_of: Web/API/Event/bubbles
---
{{ ApiRef("DOM") }}

Indique si l'événement donné se propage à travers le DOM ou non.

> **Note :** Voir [Propagation et capture des évènements](/fr/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture) pour plus d'informations sur la propagation.

## Syntaxe

    event.bubbles

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
  doOutput(e)
}
```

> **Note :** Certains évènements seulement peuvent se propager. Ceux dont cette propriété est définie à  `true`. Vous pouvez utiliser cette propriété pour vérifier si un évènement est autorisé à se propager ou non.

## Spécifications

| Spécification                                                                                    | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('DOM WHATWG', '#dom-event-bubbles', 'Event.bubbles')}}         | {{ Spec2('DOM WHATWG') }}     |                      |
| {{SpecName('DOM4', '#dom-event-bubbles', 'Event.bubbles')}}                 | {{ Spec2('DOM4') }}             |                      |
| {{SpecName('DOM2 Events', '#Events-Event-canBubble', 'Event.bubbles')}} | {{ Spec2('DOM2 Events') }} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Event.bubbles")}}

## Voir aussi

- [stopPropagation](/en-US/docs/Web/API/Event/stopPropagation) pour empêcher la propagation
