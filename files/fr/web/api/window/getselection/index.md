---
title: "Window : méthode getSelection()"
short-title: getSelection()
slug: Web/API/Window/getSelection
l10n:
  sourceCommit: 49032be37ce63630eaf5cc52c5ccf3c13f207f4b
---

{{APIRef("Selection API")}}

La méthode **`getSelection()`** de l'interface {{DOMxRef("Window")}} retourne l'objet {{DOMxRef("Selection")}} associé au {{DOMxRef("document")}} de la fenêtre, représentant la plage de texte sélectionnée par l'utilisateur·ice ou la position actuelle du curseur.

## Syntaxe

```js-nolint
getSelection()
```

## Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("Selection")}}, ou `null` si le document associé n'a pas de {{Glossary("Browsing context", "contexte de navigation")}} (par exemple, si la fenêtre est un {{HTMLElement("iframe")}} qui n'est pas attaché à un document).

Lorsque cette méthode est appelée sur un {{HTMLElement("iframe")}} qui n'est pas affiché (par exemple, lorsque `display: none` est défini), Firefox renvoie `null`, tandis que les autres navigateurs retournent un objet {{DOMxRef("Selection")}} avec {{DOMxRef("Selection.type")}} défini sur `None`.

## Exemples

```js
function toto() {
  const selObj = window.getSelection();
  alert(selObj);
  const selRange = selObj.getRangeAt(0);
  // travailler avec la sélection
}
```

## Notes

### Représentation sous forme de chaîne de caractères de l'objet Selection

En JavaScript, lorsqu'un objet est passé à une fonction qui attend une chaîne de caractères (comme {{DOMxRef("window.alert()")}} ou {{DOMxRef("document.write()")}}), la méthode {{JSxRef("Object.toString", "toString()")}} de l'objet est appelée et la valeur retournée est passée à la fonction.
Cela peut donner l'impression que l'objet est une chaîne de caractères lorsqu'il est utilisé avec d'autres fonctions alors qu'il s'agit en réalité d'un objet avec des propriétés et des méthodes.

Dans l'exemple ci-dessus, `selObj.toString()` est automatiquement appelé lorsqu'il est passé à {{DOMxRef("window.alert()")}}. Cependant, tenter d'utiliser une propriété ou une méthode JavaScript [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) telle que [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length) ou [`substr`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/substr) directement sur un objet {{DOMxRef("Selection")}} entraînera une erreur s'il ne possède pas cette propriété ou méthode et peut retourner des résultats inattendus s'il la possède. Pour utiliser un objet `Selection` comme une chaîne de caractères, appelez directement sa méthode `toString()`&nbsp;:

```js
const selectedText = selObj.toString();
```

- `selObj` est un objet `Selection`.
- `selectedText` est une chaîne de caractères (texte sélectionné).

### Objets associés

Vous pouvez appeler {{DOMxRef("Document.getSelection()")}}, qui fonctionne de manière identique à `Window.getSelection()`.

Il convient de noter qu'actuellement `getSelection()` ne fonctionne pas sur le contenu des éléments HTML {{HTMLElement("textarea")}} et {{HTMLElement("input")}} dans Firefox et Edge (Legacy). {{DOMxRef("HTMLInputElement.setSelectionRange()")}} ou les propriétés `selectionStart` et `selectionEnd` peuvent être utilisées pour contourner ce problème.

Remarquez également la différence entre _sélection textuelle_ (<i lang="en">selection</i> en anglais) et _la sélection active_ (<i lang="en">focus</i> en anglais).
{{DOMxRef("Document.activeElement")}} retourne l'élément sélectionné.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Selection](/fr/docs/Web/API/Selection_API)
- L'interface {{DOMxRef("Selection")}}
- L'interface {{DOMxRef("Range")}}
- La méthode {{DOMxRef("Document.getSelection()")}}
- La méthode {{DOMxRef("HTMLInputElement.setSelectionRange()")}}
