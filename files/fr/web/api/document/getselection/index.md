---
title: "Document : méthode getSelection()"
short-title: getSelection()
slug: Web/API/Document/getSelection
l10n:
  sourceCommit: 49032be37ce63630eaf5cc52c5ccf3c13f207f4b
---

{{APIRef("DOM")}}

La méthode **`getSelection()`** de l'interface {{DOMxRef("Document")}} retourne l'objet {{DOMxRef("Selection")}} associé à ce document, représentant la plage de texte sélectionnée par l'utilisateur·ice ou la position actuelle du curseur.

## Syntaxe

```js-nolint
getSelection()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("Selection")}}, ou `null` si le document n'a pas de [contexte de navigation](/fr/docs/Glossary/Browsing_context) (par exemple, s'il s'agit du document d'un {{HTMLElement("iframe")}} qui n'est pas attaché à un document).

## Exemples

### Obtenir un objet Selection

```js
const selection = document.getSelection();
const selRange = selection.getRangeAt(0);
// faire quelque chose avec la plage

console.log(selection); // Objet Selection
```

### Représentation en chaîne de caractères de l'objet Selection

Certaines fonctions (comme {{DOMxRef("Window.alert()")}}) appellent automatiquement {{JSxRef("Object.toString", "toString()")}} et la valeur retournée est passée à la fonction. En conséquence, cela retourne le texte sélectionné et non l'objet `Selection`&nbsp;:

```js
alert(selection);
```

Cependant, toutes les fonctions n'appellent pas automatiquement `toString()`.
Pour utiliser un objet `Selection` comme une chaîne de caractères, appelez directement sa méthode `toString()`&nbsp;:

```js
let texteSelectionne = selection.toString();
```

## Objets associés

Vous pouvez appeler {{DOMxRef("Window.getSelection()")}}, ce qui est identique à `window.document.getSelection()`.

Il convient de noter qu'actuellement `getSelection()` ne fonctionne pas sur le contenu des éléments HTML {{HTMLElement("input")}} dans Firefox. {{DOMxRef("HTMLInputElement.setSelectionRange()")}} pourrait être utilisé pour contourner ce problème.

On notera également la différence entre <i lang="en">selection</i> et <i lang="en">focus</i>.
{{DOMxRef("Document.activeElement")}} retourne l'élément qui a une sélection active (le <i lang="en">focus</i> en anglais), par exemple un élément de formulaire.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
