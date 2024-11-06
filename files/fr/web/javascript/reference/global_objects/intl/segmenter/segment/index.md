---
title: Intl.Segmenter.prototype.segment()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment
---

{{JSRef}}

La méthode **`Intl.Segmenter.prototype.segment()`** segmente une chaîne de caractères selon une locale et une granularité fournies par l'objet [`Intl.Segmenter`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) courant.

{{EmbedInteractiveExample("pages/js/intl-segmenter-prototype-segment.html")}}

## Syntaxe

```js
segment(input);
```

### Paramètres

- `input`
  - : Le texte à segmenter, sous la forme d'une [chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String).

### Valeur de retour

Un nouvel objet itérable [`Segments`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segments) qui contient les segments de la chaîne fournie en entrée et dont le découpage suit la locale et la granularité fournies par le segmenteur.

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
