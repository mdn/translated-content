---
title: Event.stopPropagation()
slug: Web/API/Event/stopPropagation
tags:
  - API
  - DOM
  - Evènement
  - Méthode
  - Reference
translation_of: Web/API/Event/stopPropagation
---
{{APIRef("DOM")}}

Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.

## Syntaxe

    event.stopPropagation();

## Exemple

Voir la section Exemple 5 : [Propagation d'évènements](/fr/docs/Web/API/Document_Object_Model/Exemples#Exemple_5_:_propagation_d%27%C3%A9v%C3%A8nements) dans le chapitre Exemples pour un exemple plus détaillé de cette méthode et de la propagation d'évènements dans le DOM.

## Notes

Voir [DOM specification](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture) (en)  pour une explication du flux d'évènements. (Une illustration est disponible dans le brouillon [DOM Level 3 Event draft](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow) (en)).

[preventDefault](/fr/docs/Web/API/Event/preventDefault) est une méthode complémentaire qui peut être utilisée pour empêcher l'action par défaut de l'évènement.

## Spécification

| Spécification                                                                                                        | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("DOM WHATWG", "#dom-event-stoppropagation", "Event.stopPropagation()")}}     | {{Spec2("DOM WHATWG")}} |                     |
| {{SpecName("DOM4", "#dom-event-stoppropagation", "Event.stopPropagation()")}}             | {{Spec2("DOM4")}}         |                     |
| {{SpecName("DOM2 Events", "#Events-Event-stopPropagation", "Event.stopPropagation()")}} | {{Spec2("DOM2 Events")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Event.stopPropagation")}}
