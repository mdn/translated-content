---
title: element.onkeypress
slug: Web/API/GlobalEventHandlers/onkeypress
tags:
  - DOM
  - DOM_0
  - Référence_du_DOM_Gecko
translation_of: Web/API/GlobalEventHandlers/onkeypress
---
{{ ApiRef() }}

### Résumé

La propriété **onkeypress** définit et renvoie le gestionnaire d'évènement `keypress` de l'élément courant.

### Syntaxe

    element.onkeypress = code de gestion de l'évènement

### Notes

L'évènement `keypress` se déclenche lorsque qu'une touche du clavier est pressée.

À différencier de [onkeydown](/fr/DOM/element.onkeydown) qui se déclenche lorsque qu'une touche du clavier est enfoncée. (La nuance se situe dans le fait que `onkeydown` se produit avant `onkeypress`, même s'il se produisent quasiment au même instant)

### Voir aussi

[onkeydown](/fr/DOM/element.onkeydown) [onkeyup](/fr/DOM/element.onkeyup)

### Spécification

{{ DOM0() }}
