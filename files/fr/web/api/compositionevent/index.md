---
title: CompositionEvent
slug: Web/API/CompositionEvent
tags:
  - API
  - DOM
  - Evènement
translation_of: Web/API/CompositionEvent
---
{{APIRef("DOM Events")}}

Le `CompositionEvent DOM` représente les évènements qui se produisent en raison de l'utilisateur entrant indirectement le texte.

## Constructeur

- {{domxref("CompositionEvent.CompositionEvent()", "CompositionEvent()")}}
  - : Crée une nouvelle instance d'objet `CompositionEvent` .

## Propriétés

_Cette interface hérite également des propriétés de son parent, {{domxref("UIEvent")}} et son ancêtre — {{domxref("Event")}}._

- {{domxref("CompositionEvent.data")}} {{readonlyinline}}
  - : Renvoie les caractères générés par la méthode d'entrée qui a relevé l'événement ; cela varie en fonction du type d'événement ayant généré l'objet `CompositionEvent`.
- {{domxref("CompositionEvent.locale")}} {{readonlyinline}} {{deprecated_inline}}
  - : Renvoie les paramètres régionaux de la méthode de saisie actuelle (par exemple, les paramètres régionaux de disposition du clavier si la composition est associée à IME).

## Méthodes

_Cette interface hérite également des méthodes de son parent, {{domxref("UIEvent")}} et son ancêtre — {{domxref("Event")}}._

- {{domxref("CompositionEvent.initCompositionEvent()")}} {{deprecated_inline}}
  - : Initialise les attributs d'un objet `CompositionEvent.`

## Spécifications

| Spécification                                                                                        | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('UI Events', '#interface-compositionevent', 'CompositionEvent')}} | {{Spec2('UI Events')}}     |             |
| {{SpecName('DOM3 Events', '#idl-compositionevent', 'CompositionEvent')}}     | {{Spec2('DOM3 Events')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CompositionEvent")}}

## Voir aussi

- `compositionstart`
- `compositionend`
- `compositionupdate`
- [UIEvent](/fr/docs/Web/API/UIEvent)
- [Event](/fr/docs/Web/API/Event)
