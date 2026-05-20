---
title: "Segments : méthode [Symbol.iterator]()"
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`[Symbol.iterator]()`** des instances de [`Segments`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) implémente le [protocole itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) et permet aux objets `Segments` d'être utilisés par la plupart des syntaxes attendues pour les itérables, telles que la [syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) et les boucles {{JSxRef("Statements/for...of", "for...of")}}. Elle retourne un [objet itérateur de segments](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator) qui fournit des données sur chaque segment.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Segments.prototype[Symbol.iterator]()")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const iterator = segmenterFr.segment(string)[Symbol.iterator]();

for (const segment of iterator) {
  if (segment.segment.length > 4) {
    console.log(segment.segment);
  }
}

// Résultat attendu : "demeure"
```

## Syntaxe

```js-nolint
segments[Symbol.iterator]()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel [objet itérateur itérable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator) qui fournit des données sur chaque segment. Chaque objet retourné possède les mêmes propriétés que l'objet retourné par la méthode [`containing()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing).

## Exemples

### Itérer avec une boucle `for...of`

Notez que vous avez rarement besoin d'appeler cette méthode directement. L'existence de la méthode `[Symbol.iterator]()` permet aux objets `Segments` d'être [itérables](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_»), et les syntaxes d'itération comme la boucle `for...of` appellent automatiquement cette méthode pour obtenir l'itérateur à parcourir.

```js
const segmenter = new Intl.Segmenter("zh-CN", { granularity: "word" });
const input = "你好，世界！我爱编程。";

for (const value of segmenter.segment(input)) {
  console.log(value);
}

/*
{segment: '你好', index: 0, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '，', index: 2, input: '你好，世界！我爱编程。', isWordLike: false}
{segment: '世界', index: 3, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '！', index: 5, input: '你好，世界！我爱编程。', isWordLike: false}
{segment: '我', index: 6, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '爱', index: 7, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '编', index: 8, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '程', index: 9, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '。', index: 10, input: '你好，世界！我爱编程。', isWordLike: false}
*/
```

### Itérer manuellement sur l'itérateur

Vous pouvez toujours appeler manuellement la méthode `next()` de l'objet itérateur retourné pour obtenir un contrôle maximal sur le processus d'itération.

```js
const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);
const iterator = segments[Symbol.iterator]();

let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

/* Affiche dans la console
{segment: 'Moi', index: 0, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 3, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: '?', index: 4, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: ' ', index: 5, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: "N'est", index: 6, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: '-', index: 11, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: 'ce', index: 12, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 14, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: 'pas', index: 15, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 18, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: '?', index: 19, input: "Moi ? N'est-ce pas ?", isWordLike: false}
*/
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Segmenter")}}
- La méthode {{JSxRef("Intl.Segmenter.prototype.segment()")}}
- La propriété statique {{JSxRef("Symbol.iterator")}}
- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
