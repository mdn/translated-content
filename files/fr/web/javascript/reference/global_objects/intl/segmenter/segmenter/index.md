---
title: Constructeur Intl.Segmenter()
short-title: Intl.Segmenter()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Le constructeur **`Intl.Segmenter()`** crée des objets {{JSxRef("Intl.Segmenter")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Segmenter() constructor")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const iterator = segmenterFr.segment(string)[Symbol.iterator]();

console.log(iterator.next().value.segment);
// Résultat attendu : 'Que'

console.log(iterator.next().value.segment);
// Résultat attendu : ' '
```

## Syntaxe

```js-nolint
new Intl.Segmenter()
new Intl.Segmenter(locales)
new Intl.Segmenter(locales, options)
```

> [!NOTE]
> `Intl.Segmenter()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` génère une {{JSxRef("TypeError")}}.

### Paramètres

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} ou une instance de {{JSxRef("Intl.Locale")}}, ou un tableau de tels identifiants de locale. La locale par défaut de l'environnement d'exécution est utilisée lorsque `undefined` est passé ou lorsqu'aucun des identifiants de locale définis n'est pris en charge. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale de `Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).
- `options` {{Optional_Inline}}
  - : Un objet contenant les propriétés suivantes, dans l'ordre dans lequel elles sont récupérées (toutes sont optionnelles)&nbsp;:
    - `localeMatcher`
      - : L'algorithme de correspondance de la locale à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'informations sur cette option, voir [Identification et négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale).
    - `granularity`
      - : La granularité avec laquelle l'entrée doit être segmentée. Les valeurs possibles sont&nbsp;:
        - `"grapheme"` (par défaut)
          - : Segmente l'entrée aux limites des grappes de graphèmes (caractères perçus par l'utilisateur·ice), comme déterminé par la locale.
        - `"word"`
          - : Segmente l'entrée aux limites des mots, comme déterminé par la locale.
        - `"sentence"`
          - : Segmente l'entrée aux limites des phrases, comme déterminé par la locale.

### Valeur de retour

Une nouvelle instance de [`Intl.Segmenter`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter).

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `locales` ou `options` contiennent des valeurs invalides.

## Exemples

### Utilisation simple

Dans l'exemple suivant, on compte les mots d'une chaîne en japonais (où le découpage de la chaîne à l'aide des méthodes de `String` aurait fourni un résultat incorrect).

```js
const text = "吾輩は猫である。名前はたぬき。";
const japaneseSegmenter = new Intl.Segmenter("ja-JP", { granularity: "word" });
console.log(
  [...japaneseSegmenter.segment(text)].filter((segment) => segment.isWordLike)
    .length,
);
// affiche 8 car le texte est segmenté en '吾輩'|'は'|'猫'|'で'|'ある'|'。'|'名前'|'は'|'たぬき'|'。'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
