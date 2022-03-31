---
title: element.onmousemove
slug: Web/API/GlobalEventHandlers/onmousemove
tags:
  - DOM
  - DOM_0
  - Référence_du_DOM_Gecko
translation_of: Web/API/GlobalEventHandlers/onmousemove
---
{{ ApiRef() }}

### Résumé

La propriété **onmousemove** renvoie le code de gestion de l'évènement `mousemove` pour l'élément courant.

### Syntax

`element.onmousemove = functionRef`

où _functionRef_ est une fonction ou une expression de type _function._ Consulter la [référence des fonctions](/en-US/docs/JavaScript/Reference/Functions_and_function_scope) pour plus de détails.

Le paramètre fournit au gestionnaire d'évènement _functionRef_ lors du déclenchement de l'évènement est objet qui représente l'évènement de déplacment de souris, de type {{ domxref("MouseEvent") }}.

### Exemple

```js
document.body.onmousemove = event => {
  // Suivi de la position de la souris dans la console
  console.log(`Position de la souris : X = ${event.clientX} | Y = ${event.clientY}`);
}
```

### Notes

L'évènement `mousemove` se déclenche lorsque l'utilisateur déplace la souris.

### Spécification

{{ DOM0() }}
