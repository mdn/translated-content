---
title: Intl.Segments.prototype.containing()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing
---

{{JSRef}}

La méthode **`Intl.Segments.containing()`** renvoie un objet décrivant le segment de la chaîne de caractères contenant le codet situé à l'indice passé en argument.

{{EmbedInteractiveExample("pages/js/intl-segments-prototype-containing.html")}}

## Syntaxe

```js
containing(codeUnitIndex);
```

### Paramètres

- `codeUnitIndex` {{optional_inline}}
  - : Un nombre correspondant à l'indice du codet dans la chaîne de caractères à segmenter. Si cette valeur est absente, la valeur par défaut sera `0`.

### Valeur de retour

Un objet qui décrit le segment faisant partie de la chaîne de caractères originale, avec les propriétés suivantes (ou `undefined` si l'indice fourni est situé en dehors des limites de la chaîne)&nbsp;:

- `segment`
  - : Une chaîne de caractères contenant le segment de la chaîne de caractères originale.
- `index`
  - : L'indice du codet à partir duquel le segment en question commence au sein de la chaîne de caractères originale.
- `input`
  - : La chaîne de caractères originale.
- `isWordLike`
  - : Un booléen présent si `granularity` vaut `"word"`&nbsp;; sinon, `undefined`. Si `granularity` vaut `"word"`, `isWordLike` vaudra `true` lorsque le segment est semblable à un mot (qu'il contient des lettres/nombres/idéogrammes/etc.) et `false` sinon.

## Exemples

```js
// ┃0 1 2 3 4 5┃6┃7┃8┃9  ← Indice des codets
// ┃A l l o n s┃-┃y┃!┃   ← Codets
const input = "Allons-y!";

const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const segments = segmenter.segment(input);
let current = undefined;

current = segments.containing();
// → { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(4);
// → { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(6);
// → { index: 6, segment: "-", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// → { index: 7, segment: "y", isWordLike: true }

current = segments.containing(current.index + current.segment.length);
// → { index: 8, segment: "!", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// → undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
