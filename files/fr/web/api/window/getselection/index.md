---
title: window.getSelection
slug: Web/API/Window/getSelection
---

{{ ApiRef() }}

Renvoie un objet selection représentant le ou les objets sélectionnés.

## Syntaxe

```js
selection = window.getSelection();
```

## Paramètres

- `selection` est un objet de type {{DOMxRef("Selection")}}.

## Exemple

```js
function foo() {
  var selObj = window.getSelection();
  alert(selObj);
  var selRange = selObj.getRangeAt(0);
  // travailler avec la sélection
}
```

## Notes

En [JavaScript](/fr/docs/Web/JavaScript), lorsqu'un objet de type Selection est passé à une fonction, c'est une représentation sous forme de chaîne (string), c'est-à-dire le texte sélectionné, qui lui est passée à la place. L'objet selection apparaît donc comme une chaîne, alors qu'il s'agit en réalité d'un objet possédant ses propres propriétés et méthodes. En pratique, c'est donc la valeur renvoyée par la méthode [`toString`](/fr/docs/Web/API/Selection/toString) de l'objet Selection qui est passée. Dans l'exemple ci-dessus, `selObj` est automatiquement «&nbsp;convertie&nbsp;» lorsqu'elle est passée à [window.alert](/fr/docs/Web/API/Window/alert). Cependant, pour utiliser une propriété ou méthode JavaScript de [String](/fr/JS/String) comme [`length`](/fr/JS/String.prototype.length) ou [`substr`](/fr/JS/String.prototype.substr), il est nécessaire d'appeler manuellement la méthode `toString`. I'm treading carefully with the word "convert" here because it could be misinterpreted as a permanent convert - Maian

## Spécification

DOM Level 0. Ne fait partie d'aucune spécification.

## Voir aussi

- [Selection API](/fr/docs/Web/API/Selection_API)
- [`Selection`](/fr/docs/Web/API/Selection)
- [`Range`](/fr/docs/Web/API/Range)
- [`Document.getSelection()`](/fr/docs/Web/API/Document/getSelection)
- [`HTMLInputElement.setSelectionRange()`](/fr/docs/Web/API/HTMLInputElement/setSelectionRange)
