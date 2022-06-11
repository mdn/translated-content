---
title: Event.cancelBubble
slug: Web/API/Event/cancelBubble
tags:
  - API
  - Annulation
  - DOM
  - Evènement
  - Propagation
  - Propriétés
translation_of: Web/API/Event/cancelBubble
---
{{APIRef("DOM Events")}}

La propriété **`Event.cancelBubble`** est un alias historique de {{domxref("Event.stopPropagation()")}}. Définir sa valeur à `true` (vrai) avant le renvoi à partir d'un gestionnaire d'évènements empêche la propagation de l'évènement. Dans les implémentations les plus tardives, cette définition à false (_faux_) ne fait rien. Voir [Compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

## Syntaxe

    event.cancelBubble = bool;
    var bool = event.cancelBubble;

## Exemple

    elem.onclick = function(e) {
     // fais des choses sympas ici
      e.cancelBubble = true;
    }

## Spécifications

| Spécification                                                                                | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('DOM WHATWG', '#dom-event-cancelbubble', 'cancelBubble')}} | {{Spec2('DOM WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Event.cancelBubble")}}
