---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
browser-compat: javascript.builtins.Intl.Segmenter
---
{{JSRef}}

L'objet **`Intl.Segmenter`** permet de segmenter un texte en tenant compte de la locale. On peut ainsi obtenir les éléments utiles (graphèmes, mots ou phrases) d'une chaîne de caractères.

{{EmbedInteractiveExample("pages/js/intl-segmenter.html")}}

## Constructeur

- [`Intl.Segmenter()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter)
  - : Crée un nouvel objet `Intl.Segmenter`.

## Méthodes statiques

- [`Intl.Segmenter.supportedLocalesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf)
  - : Renvoie un tableau contenant les locales prises en charge, parmi celles fournies en argument, sans avoir à recourir à la locale par défaut de l'environnement par défaut.

## Méthodes des instances

- [`Intl.Segmenter.prototype.resolvedOptions()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions)
  - : Renvoie un nouvel objet dont les propriétés reflètent la locale et la granularité calculées lors de l'initialisation de cet objet `Intl.Segmenter`.
- [`Intl.Segmenter.prototype.segment()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)
  - : Renvoie une nouvelle instance [`Segments`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segments) itérable qui représente les segments de la chaîne de caractères selon la locale et la granularité portées par cette instance `Intl.Segmenter`.

## Exemples

### Utilisation simple et différence avec `String.prototype.split()`

En utilisant [`String.prototype.split(" ")`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split) pour segmenter un texte en mots, on n'obtient pas le bon résultat si la locale du texte n'utilise pas d'espace entre les mots (ce qui est le cas pour le japonais, le chinois, le thaïlandais, le laotien, le khmer, le birman, etc.).

```js example-bad
const str = '吾輩は猫である。名前はたぬき。';
console.table(str.split(' '));
// ['吾輩は猫である。名前はたぬき。']
// Les deux phrases ne sont pas segmentées correctement.

```

```js example-good
const str = '吾輩は猫である。名前はたぬき。';
const segmenterJa = new Intl.Segmenter('ja-JP', { granularity: 'word' });

const segments = segmenterJa.segment(str);
console.table(Array.from(segments));
// [{segment: '吾輩', index: 0, input: '吾輩は猫である。名前はたぬき。', isWordLike: true},
// etc.
// ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
