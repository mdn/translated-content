---
title: Event.returnValue
slug: Web/API/Event/returnValue
tags:
  - API
  - DOM
  - Propriétés
  - action
  - évènements
translation_of: Web/API/Event/returnValue
---
{{APIRef("DOM Events")}}{{Non-standard_header}}{{ Deprecated_header() }}

La propriété **`Event.returnValue`** indique si l'action par défaut pour cet évènement a été empêchée ou non. Elle est définie à `true` (_vrai_) par défaut, permettant à l'action par défaut de se produire. La définition de cette propriété à `false` (_faux_) empêche le déclenchement de l'action par défaut.

> **Note :** Utilisez {{domxref("Event.preventDefault()")}} à la place de cette méthode non standard.

## Syntaxe

    event.returnValue = bool;
    var bool = event.returnValue;

## Spécifications

Bien qu'elle ait été inclue [dans l'ancien brouillon de travail de W3C DOM niveau 2](https://www.w3.org/TR/1999/WD-DOM-Level-2-19990304/events.html#attribute-returnValue)_, cette propriété ne fait partie d'aucune spécification._

## Compatibilité des navigateurs

{{Compat("api.Event.returnValue")}}
