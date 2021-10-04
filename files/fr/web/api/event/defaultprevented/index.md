---
title: event.defaultPrevented
slug: Web/API/Event/defaultPrevented
tags:
  - API
  - DOM
  - Evènement
  - Propriété
translation_of: Web/API/Event/defaultPrevented
---
{{APIRef("DOM")}}

## Résumé

Retourne un booléen indiquant si {{domxref("event.preventDefault()")}} a été appelée sur l'évènement ou non.

> **Note :** Cette propriété doit etre utilisée au lieu de la méthode `getPreventDefault()` qui n'est pas standard et est désormais dépréciée (voir {{bug(691151)}}).

## Syntaxe

    bool = event.defaultPrevented

## Exemple

     if (e.defaultPrevented) {
       /* Le comportement par défaut a été inhibé */
     }

## Spécification

| Spécification                                                                                                    | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('DOM WHATWG', '#dom-event-defaultprevented', 'Event.defaultPrevented()')}} | {{ Spec2('DOM WHATWG') }} |             |

## Compatibilité des navigateurs

{{Compat("api.Event.defaultPrevented")}}
