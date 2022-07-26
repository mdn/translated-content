---
title: window.onload
slug: conflicting/Web/API/Window/load_event
tags:
  - Référence_du_DOM_Gecko
translation_of: Web/API/GlobalEventHandlers/onload
original_slug: Web/API/GlobalEventHandlers/onload
---
{{ ApiRef() }}

### Résumé

Un gestionnaire d'évènement pour l'évènement `load` (chargement) de la fenêtre.

### Syntaxe

```js
window.onload = refFct;
```

### Paramètres

- `refFct` est une référence à une fonction.

### Exemple

```js
window.onload = init;
```

### Notes

L'évènement `load` se déclenche à la fin du processus de chargement du document. À ce moment, tous les objets du document sont dans le DOM.

### Spécification

Ne fait partie d'aucune spécification.
