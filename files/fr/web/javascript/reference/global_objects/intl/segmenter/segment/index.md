---
title: "Intl.Segmenter : méthode segment()"
short-title: segment()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`segment()`** des instances de {{JSxRef("Intl.Segmenter")}} segmente une chaîne de caractères selon la locale et la granularité de cet objet `Intl.Segmenter`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Segmenter.prototype.segment()")}}

```js interactive-example
const string1 = "Que ma joie demeure";

const segmenterFrGrapheme = new Intl.Segmenter("fr", {
  granularity: "grapheme",
});
const graphemeSegments = segmenterFrGrapheme.segment(string1);

console.log(Array.from(graphemeSegments)[0]);
// Résultat attendu :
// Object {segment: 'Q', index: 0, input: 'Que ma joie demeure'}
```

## Syntaxe

```js-nolint
segment(input)
```

### Paramètres

- `input`
  - : Le texte à segmenter sous la forme d'une chaîne de caractères.

### Valeur de retour

Un nouvel objet itérable [`Segments`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) qui contient les segments de la chaîne de caractères fournie en entrée et dont le découpage suit la locale et la granularité fournies par le segmenteur.

## Exemples

```js
// On crée un segmenteur propre à une locale
const segmenter = new Intl.Segmenter("fr", { granularity: "word" });

// On l'utilise pour obtenir un itérateur sur les segments
// d'une chaîne de caractères
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);

// Et on parcourt cet ensemble
for (const { segment, index, isWordLike } of segments) {
  console.log(
    "segment situé aux unités [%d, %d]: «%s»%s",
    index,
    index + segment.length,
    segment,
    isWordLike ? " (type mot)" : "",
  );
}
// Affiche dans la console
// segment situé aux unités [0, 3]: «Moi» (type mot)
// segment situé aux unités [3, 4]: « »
// segment situé aux unités [4, 5]: «?»
// segment situé aux unités [5, 6]: « »
// segment situé aux unités [6, 11]: «N'est» (type mot)
// segment situé aux unités [11, 12]: «-»
// segment situé aux unités [12, 14]: «ce» (type mot)
// segment situé aux unités [14, 15]: « »
// segment situé aux unités [15, 18]: «pas» (type mot)
// segment situé aux unités [18, 19]: « »
// segment situé aux unités [19, 20]: «?»
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
