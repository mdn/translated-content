---
title: Selection.type
slug: Web/API/Selection/type
---

{{APIRef("DOM")}}{{SeeCompatTable}}

La propriété en lecture simple **`type`** de l'interface {{domxref("Selection")}} retourne un {{domxref("DOMString")}} décrivant le type de la sélection courante.

## Syntaxe

```js
value = sel.type;
```

### Value

Une {{domxref("DOMString")}} décrivant le type de la sélection courante. Les valeurs possibles sont :

- `None`: Aucune sélection courante.
- `Caret`: La sélection est réduite (le curseur est dans un texte mais il n'y a pas de plage sélectionnée).
- `Range`: Une plage est sélectionnnée.

## Exemple

Dans cet exemple le gestionnaire d'évènemenet est activé à chaque changement de la sélection. `console.log(selection.type)` retourne `Caret` ou `Range` selon que le curseur est sur un simple caractère ou qu'une plage est sélectionée.

```js
var selection;

document.onselectionchange = function () {
  console.log("New selection made");
  selection = document.getSelection();
  console.log(selection.type);
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Selection")}}
