---
title: Event.originalTarget
slug: Web/API/Event/originalTarget
tags:
  - API
  - Cible
  - DOM
  - Evènement
  - Propriétés
  - origine
translation_of: Web/API/Event/originalTarget
---
{{ ApiRef("DOM") }} {{Non-standard_header}}

La cible d'origine de l'évènement avant tout reciblage. (spécifique à Mozilla)

En présence de contenu anonyme [XBL](/fr/docs/XBL), ce sera le nœud anonyme sur lequel l'événement a été déclenché à l'origine. Voir [Anonymous Content#Event_Flow_and_Targeting](/fr/docs/Mozilla/Tech/XBL/XBL_1.0_Reference/Anonymous_Content#Event_Flow_and_Targeting) pour plus de détails.

**Note :** `originalTarget` peut aussi être un contenu anonyme natif  (voir {{Bug("208427")}}), dans ce cas, il est inutile pour le code non privilégié.

Voir aussi [Comparaison des cibles d'évènements.](/fr/docs/Web/API/Event/Comparaison_des_cibles_d_%C3%A9v%C3%A8nements)

## Exemple

_Besoin d'un exemple qui ait du sens ici. ^^_

## Spécification

C'est une propriété propre à Mozilla. Définie dans {{Source("/dom/public/idl/events/nsIDOMNSEvent.idl")}}

Cette propriété d'évènements **n'est pas définie** dans la spécification [W3.org DOM niveau 2 Events](http://www.w3.org/TR/DOM-Level-2-Events/events.html)

## Compatibilité des navigateurs

{{Compat("api.Event.originalTarget")}}
