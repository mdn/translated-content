---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

L'objet **`Intl.Segmenter`** permet de segmenter un texte en tenant compte de la locale. On peut ainsi obtenir les éléments utiles (graphèmes, mots ou phrases) d'une chaîne de caractères.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Segmenter")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string1 = "Que ma joie demeure";

const iterator1 = segmenterFr.segment(string1)[Symbol.iterator]();

console.log(iterator1.next().value.segment);
// Expected output: 'Que'

console.log(iterator1.next().value.segment);
// Expected output: ' '
```

## Constructeur

- {{JSxRef("Intl/Segmenter/Segmenter", "Intl.Segmenter()")}}
  - : Crée un nouvel objet `Intl.Segmenter`.

## Méthodes statiques

- {{JSxRef("Intl/Segmenter/supportedLocalesOf", "Intl.Segmenter.supportedLocalesOf()")}}
  - : Retourne un tableau contenant les locales prises en charge, parmi celles fournies en argument, sans avoir à recourir à la locale par défaut de l'environnement par défaut.

## Propriétés d'instance

Ces propriétés sont définies sur `Intl.Segmenter.prototype` et partagées par toutes les instances de `Intl.Segmenter`.

- {{JSxRef("Object/constructor", "Intl.Segmenter.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Intl.Segmenter`, la valeur initiale est le constructeur {{JSxRef("Intl/Segmenter/Segmenter", "Intl.Segmenter")}}.
- `Intl.Segmenter.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Intl.Segmenter"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Intl/Segmenter/resolvedOptions", "Intl.Segmenter.prototype.resolvedOptions()")}}
  - : Retourne un nouvel objet dont les propriétés reflètent la locale et la granularité calculées lors de l'initialisation de cet objet `Intl.Segmenter`.
- {{JSxRef("Intl/Segmenter/segment", "Intl.Segmenter.prototype.segment()")}}
  - : Retourne une nouvelle instance [`Segments`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) itérable qui représente les segments de la chaîne de caractères selon la locale et la granularité portées par cette instance `Intl.Segmenter`.

## Exemples

### Utilisation simple et différence avec `String.prototype.split()`

En utilisant [`String.prototype.split(" ")`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split) pour segmenter un texte en mots, on n'obtient pas le bon résultat si la locale du texte n'utilise pas d'espace entre les mots (ce qui est le cas pour le japonais, le chinois, le thaïlandais, le laotien, le khmer, le birman, etc.).

```js example-bad
const str = "吾輩は猫である。名前はたぬき。";
console.table(str.split(" "));
// ['吾輩は猫である。名前はたぬき。']
// Les deux phrases ne sont pas segmentées correctement.
```

```js example-good
const str = "吾輩は猫である。名前はたぬき。";
const segmenterJa = new Intl.Segmenter("ja-JP", { granularity: "word" });

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

## Voir aussi

- [Prothèse d'émulation de `Intl.Segmenter` dans FormatJS <sup>(angl.)</sup>](https://formatjs.github.io/docs/polyfills/intl-segmenter/)
- L'objet {{JSxRef("Intl")}}
