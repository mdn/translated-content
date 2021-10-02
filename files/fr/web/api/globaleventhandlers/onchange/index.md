---
title: element.onchange
slug: Web/API/GlobalEventHandlers/onchange
tags:
  - DOM
  - DOM_0
  - Référence_du_DOM_Gecko
translation_of: Web/API/GlobalEventHandlers/onchange
---
{{ ApiRef() }}

### Résumé

La propriété `onchange` définit et renvoie le gestionnaire d'évènement `onChange` (modification) pour l'élément courant.

### Syntaxe

    element.onchange = code de gestion de l'évènement

### Notes

Le pseudo code suivant illustre la manière dont le gestionnaire d'évènement `change` est implémenté dans Mozilla :

      control.onfocus = focus;
      control.onblur = blur;
      function focus () {
          original_value = control.value;
      }

      function blur () {
          if (control.value != original_value)
            control.onchange();
      }

Par conséquent, vous pouvez rencontrer des comportements inattendus dans l'évènement `change` si vous modifiez la valeur du contrôle dans vos propres gestionnaires d'évènements `focus` ou `blur`. De plus, l'évènement `change` se déclenche avant l'évènement `blur`. Ce comportement n'est pas le même que celui d'Internet Explorer.

### Specification

{{ DOM0() }}

### Voir aussi

- [DOM Level 2: HTML event types](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-eventgroupings-htmlevents) — traduction en français (non normative) : [DOM Niveau 2 Events : Les types d'événements HTML](http://www.yoyodesign.org/doc/w3c/dom2-events/events.html#Events-eventgroupings-htmlevents)
