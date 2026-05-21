---
title: "Segments : méthode containing()"
short-title: containing()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`containing()`** des instances de [`Segments`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) retourne un objet décrivant le segment de la chaîne de caractères qui inclut le codet situé à l'indice défini.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Segments.prototype.containing()")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const segments = segmenterFr.segment(string);

console.log(segments.containing(5));
// Résultat attendu :
// Object {segment: 'ma', index: 4, input: 'Que ma joie demeure', isWordLike: true}
```

## Syntaxe

```js-nolint
containing(codeUnitIndex)
```

### Paramètres

- `codeUnitIndex` {{Optional_Inline}}
  - : Un nombre définissant l'indice de l'unité de code dans la chaîne de caractères de l'entrée originale. Si la valeur est omise, elle est par défaut `0`.

### Valeur de retour

Un objet décrivant le segment de la chaîne de caractères originale avec les propriétés suivantes, ou `undefined` si l'indice fourni est en dehors des limites.

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
// ┃0 1 2 3 4 5┃6┃7┃8┃9  ← indice de l'unité de code
// ┃A l l o n s┃-┃y┃!┃   ← unité de code
const input = "Allons-y!";

const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const segments = segmenter.segment(input);

let current = segments.containing();
// { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(4);
// { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(6);
// { index: 6, segment: "-", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// { index: 7, segment: "y", isWordLike: true }

current = segments.containing(current.index + current.segment.length);
// { index: 8, segment: "!", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Segmenter")}}
- La méthode {{JSxRef("Intl.Segmenter.prototype.segment()")}}
